const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
let now = '2026-10-22T22:00:00Z';
class TestDate extends Date { static now() { return Date.parse(now); } }
const header=['重置日','角色','任務名稱','週期','進度','目標','完成','備註','角色 ID'];
const rows=[['歷史紀錄'],[],[],header,
  ['2026-10-23','貓又老師zz(長弓兵)','兼職','每日',0,1,'FALSE','',''],
  ['2026-10-23','貓又老師o(樂師)','兼職','每日',1,1,true,'','o'],
  ['2026-10-19','貓又老師zz(長弓兵)','格里斯貝恩','每週',0,1,false,'','zz'],
  ['永久','貓又老師o(樂師)','庫存｜milk','常駐',12,999999999,false,'','o'],
  ['2026-10-22','貓又老師o(樂師)','舊每日','每日',1,1,true,'','o']
];
const sheet={getDataRange:()=>({getValues:()=>rows.map(r=>r.slice())}),getRange:(r,c)=>({setValue:v=>{rows[r-1][c-1]=v;}}),appendRow:r=>rows.push(r)};
const context=vm.createContext({Date:TestDate,console,
  SpreadsheetApp:{openById:()=>({getSheetByName:name=>name==='歷史紀錄'?sheet:null})},
  PropertiesService:{getScriptProperties:()=>({getProperty:()=> 'test-only-token'})},
  LockService:{getScriptLock:()=>({waitLock:()=>{},releaseLock:()=>{}})},
  Utilities:{formatDate:(date,tz,pattern)=>{
    assert.equal(tz,'Asia/Taipei');assert.equal(pattern,'yyyy-MM-dd');
    const shifted=new Date(date.valueOf()+8*3600000);return shifted.toISOString().slice(0,10);
  }},
  ContentService:{MimeType:{JAVASCRIPT:'js',JSON:'json'},createTextOutput:body=>({body,setMimeType(){return this;}})}
});
vm.runInContext(fs.readFileSync(path.join(__dirname,'..','Code.gs'),'utf8'),context);
const run=expression=>vm.runInContext(expression,context);
assert.equal(run('gameDate_()'),'2026-10-23','06:00 Taipei resets');
now='2026-10-22T21:59:59Z';assert.equal(run('gameDate_()'),'2026-10-22');
now='2026-10-25T22:00:00Z';assert.equal(run('weekStart_(gameDate_())'),'2026-10-26','Monday reset');
now='2026-10-22T22:00:00Z';
let result=run('readCurrent_()');
assert.equal(result.version,'2026-10-23');assert.equal(result.items.length,4);
assert.equal(result.items[0].roleId,'zz');assert.equal(result.items[0].complete,false,'string FALSE is not complete');
assert.equal(result.items[1].roleId,'o');assert.equal(result.items[1].complete,true);
const count=rows.length;
run('saveItem_({role:"貓又老師zz(吟遊詩人)",roleId:"zz",task:"兼職",cycle:"每日",progress:0,target:1})');
assert.equal(rows.length,count,'renamed class updates existing role instead of appending');
assert.equal(rows[4][8],'zz');assert.equal(rows[5][4],1,'musician must not be overwritten');
run('saveItem_({role:"貓又老師o(樂師)",roleId:"o",task:"庫存｜milk",cycle:"常駐",progress:17,target:999999999})');
assert.equal(rows.length,count);assert.equal(rows[7][4],17);assert.equal(rows[7][0],'永久');
run('saveItem_({role:"貓又老師z(舞者)",task:"新任務",cycle:"每日",progress:1,target:1})');
assert.equal(rows.at(-1)[8],'z','future class resolves fixed ID');
assert.equal(rows[8][2],'舊每日','history is preserved');
assert.throws(()=>run('saveItem_({role:"x",task:"x",cycle:"每月"})'));
const ping=JSON.parse(run('doGet({parameter:{action:"ping",token:"test-only-token"}}).body'));
assert.equal(ping.version,'2026-10-23');assert.ok(ping.capabilities.includes('permanent-state'));
assert.equal(JSON.parse(run('doGet({parameter:{action:"read",token:"wrong"}}).body')).ok,false);
console.log('Taipei reset, stable role IDs, legacy FALSE, permanent inventory, authentication and version checks passed.');
