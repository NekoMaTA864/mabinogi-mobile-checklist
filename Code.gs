/**
 * 瑪奇 Mobile｜GitHub Pages ↔ Google Sheets 同步 API
 *
 * 使用方式：
 * 1. 從目標試算表開啟「擴充功能 → Apps Script」，貼上本檔內容。
 * 2. 執行 setSyncToken()，輸入一組只給自己使用的同步密鑰。
 * 3. 部署 → 新增部署 → 網頁應用程式：執行身分選「我」，誰可以存取選「任何人」。
 * 4. 將部署後的 /exec 網址與同步密鑰填入 GitHub Pages 的「同步」頁。
 *
 * 網頁使用 JSONP GET，避免 GitHub Pages 與 Apps Script 的跨網域限制。
 * SYNC_TOKEN 不要寫回公開 GitHub；只存放在 Apps Script 的 Script Properties。
 */

const CONFIG = {
  spreadsheetId: '1j_cvx66Lov33ctQ5inba3sBn56qhLqWf0_gOlC_Rt8g',
  historySheet: '歷史紀錄',
  timeZone: 'Asia/Taipei',
  headerName: '重置日'
};

function setSyncToken() {
  const ui = SpreadsheetApp.getUi();
  const result = ui.prompt(
    '設定網頁同步密鑰',
    '請輸入一組只給自己使用的密鑰（建議 20 字以上，不要使用 Google 密碼）。',
    ui.ButtonSet.OK_CANCEL
  );
  if (result.getSelectedButton() !== ui.Button.OK) return;
  const token = result.getResponseText().trim();
  if (token.length < 12) throw new Error('同步密鑰至少需要 12 個字元。');
  PropertiesService.getScriptProperties().setProperty('SYNC_TOKEN', token);
  ui.alert('同步密鑰已保存。接著部署網頁應用程式即可。');
}

function doGet(e) {
  const p = (e && e.parameter) || {};
  const callback = validCallback_(p.callback);
  try {
    authorize_(p.token);
    let result;
    if (p.action === 'read') result = readCurrent_();
    else if (p.action === 'save') result = saveItem_(p);
    else if (p.action === 'ping') result = { ok: true, service: 'mabinogi-mobile-checklist' };
    else throw new Error('未知的 action。');
    return output_(result, callback);
  } catch (err) {
    return output_({ ok: false, error: String(err && err.message || err) }, callback);
  }
}

function authorize_(token) {
  const expected = PropertiesService.getScriptProperties().getProperty('SYNC_TOKEN');
  if (!expected || !token || token !== expected) throw new Error('同步密鑰不正確。');
}

function readCurrent_() {
  const sheet = SpreadsheetApp.openById(CONFIG.spreadsheetId).getSheetByName(CONFIG.historySheet);
  if (!sheet) throw new Error('找不到歷史紀錄工作表。');
  const values = sheet.getDataRange().getValues();
  const header = findHeader_(values);
  const gameDate = gameDate_();
  const weeklyDate = weekStart_(gameDate);
  const items = [];
  for (let i = header.row; i < values.length; i++) {
    const row = values[i];
    const cycle = text_(row[header.cols['週期']]);
    const date = dateText_(row[header.cols['重置日']]);
    if ((cycle === '每日' && date !== gameDate) || (cycle === '每週' && date !== weeklyDate)) continue;
    if (cycle !== '每日' && cycle !== '每週') continue;
    items.push({
      resetDate: date,
      role: text_(row[header.cols['角色']]),
      task: text_(row[header.cols['任務名稱']]),
      cycle: cycle,
      progress: number_(row[header.cols['進度']]),
      target: number_(row[header.cols['目標']]),
      complete: Boolean(row[header.cols['完成']]) || text_(row[header.cols['完成']]).toUpperCase() === 'TRUE'
    });
  }
  return { ok: true, gameDate: gameDate, weeklyResetDate: weeklyDate, items: items };
}

function saveItem_(p) {
  const cycle = text_(p.cycle);
  if (cycle !== '每日' && cycle !== '每週') throw new Error('週期只能是每日或每週。');
  const role = text_(p.role);
  const task = text_(p.task);
  if (!role || !task) throw new Error('角色與任務名稱不可空白。');
  const target = Math.max(1, number_(p.target));
  const progress = Math.max(0, Math.min(target, number_(p.progress)));
  const resetDate = cycle === '每日' ? gameDate_() : weekStart_(gameDate_());
  const complete = progress >= target;
  const lock = LockService.getScriptLock();
  lock.waitLock(5000);
  try {
    const sheet = SpreadsheetApp.openById(CONFIG.spreadsheetId).getSheetByName(CONFIG.historySheet);
    if (!sheet) throw new Error('找不到歷史紀錄工作表。');
    const values = sheet.getDataRange().getValues();
    const header = findHeader_(values);
    const key = resetDate + '\u0000' + role + '\u0000' + task;
    let targetRow = -1;
    for (let i = header.row; i < values.length; i++) {
      const row = values[i];
      const rowKey = dateText_(row[header.cols['重置日']]) + '\u0000' + text_(row[header.cols['角色']]) + '\u0000' + text_(row[header.cols['任務名稱']]);
      if (rowKey === key && text_(row[header.cols['週期']]) === cycle) {
        targetRow = i + 1;
        break;
      }
    }
    if (targetRow < 0) {
      const output = [];
      output[header.cols['重置日']] = resetDate;
      output[header.cols['角色']] = role;
      output[header.cols['任務名稱']] = task;
      output[header.cols['週期']] = cycle;
      output[header.cols['進度']] = progress;
      output[header.cols['目標']] = target;
      output[header.cols['完成']] = complete;
      output[header.cols['備註']] = '由 GitHub Pages 同步建立';
      while (output.length < values[0].length) output.push('');
      sheet.appendRow(output);
    } else {
      sheet.getRange(targetRow, header.cols['進度'] + 1).setValue(progress);
      sheet.getRange(targetRow, header.cols['目標'] + 1).setValue(target);
      sheet.getRange(targetRow, header.cols['完成'] + 1).setValue(complete);
    }
  } finally {
    lock.releaseLock();
  }
  return { ok: true, resetDate: resetDate, role: role, task: task, cycle: cycle, progress: progress, target: target, complete: complete };
}

function findHeader_(values) {
  for (let r = 0; r < Math.min(values.length, 12); r++) {
    const row = values[r].map(text_);
    if (row.indexOf(CONFIG.headerName) >= 0 && row.indexOf('角色') >= 0 && row.indexOf('任務名稱') >= 0) {
      const cols = {};
      row.forEach((name, c) => { if (name) cols[name] = c; });
      ['重置日', '角色', '任務名稱', '週期', '進度', '目標', '完成'].forEach(name => {
        if (cols[name] === undefined) throw new Error('歷史紀錄缺少欄位：' + name);
      });
      if (cols['備註'] === undefined) cols['備註'] = row.length;
      return { row: r + 1, cols: cols };
    }
  }
  throw new Error('找不到歷史紀錄標題列。');
}

function gameDate_() {
  const now = new Date();
  const local = new Date(Utilities.formatDate(now, CONFIG.timeZone, "yyyy/MM/dd HH:mm:ss"));
  if (local.getHours() < 6) local.setDate(local.getDate() - 1);
  return Utilities.formatDate(local, CONFIG.timeZone, 'yyyy-MM-dd');
}

function weekStart_(dateText) {
  const d = new Date(dateText + 'T12:00:00');
  const mondayOffset = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - mondayOffset);
  return Utilities.formatDate(d, CONFIG.timeZone, 'yyyy-MM-dd');
}

function dateText_(value) {
  if (value instanceof Date) return Utilities.formatDate(value, CONFIG.timeZone, 'yyyy-MM-dd');
  const s = text_(value).replace(/\//g, '-');
  const m = s.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
  return m ? m[1] + '-' + ('0' + m[2]).slice(-2) + '-' + ('0' + m[3]).slice(-2) : s;
}

function text_(value) { return value === null || value === undefined ? '' : String(value).trim(); }
function number_(value) { const n = Number(value); return isFinite(n) ? n : 0; }
function validCallback_(callback) { return callback && /^[A-Za-z_$][0-9A-Za-z_$\.]*$/.test(callback) ? callback : ''; }
function output_(payload, callback) {
  const body = callback ? callback + '(' + JSON.stringify(payload) + ');' : JSON.stringify(payload);
  return ContentService.createTextOutput(body).setMimeType(callback ? ContentService.MimeType.JAVASCRIPT : ContentService.MimeType.JSON);
}
