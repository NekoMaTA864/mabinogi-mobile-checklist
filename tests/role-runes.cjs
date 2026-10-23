const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const memory = new Map();
const context = vm.createContext({
  document: { querySelectorAll: () => [], querySelector: () => null },
  localStorage: { getItem: k => memory.get(k) || null, setItem: (k,v) => memory.set(k,String(v)), removeItem: k => memory.delete(k) },
  window: {}, location: {}, console, setTimeout: () => 0, clearTimeout: () => {}, Date, URL, URLSearchParams
});
for (const file of ['rune-guide.js', 'role-runes.js']) {
  assert.ok(html.includes('src="'+file+'?'), 'browser must load '+file);
  vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context);
}
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\s+render\(\);\s+scheduleGameDayRefresh\(\);\s*$/, '');
vm.runInContext(script, context, {timeout:5000});
const get = expression => vm.runInContext(expression,context);
assert.equal(get('CURRENT_CLASS_BY_ROLE_ID.zz'), 'longbow');
assert.equal(get('CURRENT_CLASS_BY_ROLE_ID.z'), 'lightning_mage');
assert.equal(get('PERSONAL_RUNE_DATA.roles.zz.targetClassId'), 'bard');
assert.equal(get('PERSONAL_RUNE_DATA.roles.z.targetClassId'), 'dancer');
assert.ok(get('RUNE_GUIDE_DATA.classes.some(c=>c.id==="dancer")'));
assert.equal(get('PERSONAL_RUNE_DATA.roles.p.current.armor.filter(v=>v==="吸血").length'),2);
assert.ok(get('PERSONAL_RUNE_DATA.roles.o.current.armor.includes("無盡活力")'));
assert.ok(!get('PERSONAL_RUNE_DATA.roles.o.current.armor.includes("魔力激流")'));
assert.equal(get('runeBudgetSummary(PERSONAL_RUNE_DATA.roles.o).remaining.blue'),300);
assert.equal(get('runeBudgetSummary(PERSONAL_RUNE_DATA.roles.o).remaining.red'),600);
assert.equal(get('runeBudgetSummary(PERSONAL_RUNE_DATA.roles.z).remaining.raid'),0);
assert.equal(get('runeBudgetSummary(PERSONAL_RUNE_DATA.roles.zz).remaining.blue'),330);
assert.equal(get('runeBudgetSummary(PERSONAL_RUNE_DATA.roles.oo).remaining.blue'),null);
const stateBefore=get('JSON.stringify(state)');
for (const id of ['main','z','zz','o','p','oo']) {
  const plan=get('PERSONAL_RUNE_DATA.roles.'+id);
  assert.equal(plan.current.armor.length,5,id+' current armor slots');
  assert.equal(plan.target.armor.length,5,id+' target armor slots');
  assert.equal(plan.current.accessory.length,3,id+' current accessories');
  const markup=get('active='+JSON.stringify(id)+';kbRolesHtml()');
  for(const text of ['目前裝備','依建議完成後','尚未視為已兌換','原先配置','本輪資源安排','自選箱與＋10卷']) assert.ok(markup.includes(text),id+' missing '+text);
  for(const value of Object.values(get('runeBudgetSummary(PERSONAL_RUNE_DATA.roles.'+id+').remaining'))) assert.ok(value===null||value>=0,id+' overspent');
}
assert.equal(get('JSON.stringify(state)'),stateBefore,'reading plans must not mutate progress');
assert.ok(get('active="z";kbRolesHtml()').includes('舞者'));
assert.ok(get('active="o";kbRolesHtml()').includes('共鳴（紫）'));
assert.ok(get('active="p";kbRolesHtml()').includes('陰影逼近'));
assert.ok(get('kbFashionHtml()').includes('通行證時裝'));
assert.equal(get('roles.find(r=>r.id==="main").name'),'貓又老師');
console.log('Role snapshots, budget arithmetic, planned classes, history and read-only rendering passed.');
