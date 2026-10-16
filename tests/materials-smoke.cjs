const fs = require('fs');
const path = require('path');
const vm = require('vm');
const html = fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
let script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
script = script.replace(/\s+render\(\);\s+scheduleGameDayRefresh\(\);\s*$/, `
  globalThis.__name = roles[0].name;
  globalThis.__views = {};
  for (const filter of ['priority','cooking','conditional','daily','weekly','info']) {
    exchangeFilter=filter; exchangeSubView='purchase';
    globalThis.__views[filter]=kbMaterialsHtml(roles[0]);
  }
  exchangeSubView='routes';
  globalThis.__views.routes=kbMaterialsHtml(roles[0]);
  exchangeSubView='purchase'; exchangeFilter='priority'; exchangeScope='all';
  globalThis.__views.all=kbMaterialsHtml(roles[0]);
  globalThis.__tools=communityToolsHtml();
  active='zz'; globalThis.__bard=kbRolesHtml();
  active='o'; globalThis.__musician=kbRolesHtml();
`);
const memory = new Map();
const localStorage = {getItem:k=>memory.get(k)||null,setItem:(k,v)=>memory.set(k,String(v)),removeItem:k=>memory.delete(k)};
const document = {querySelectorAll:()=>[],querySelector:()=>null};
const context = {document,localStorage,window:{},location:{},console,setTimeout:()=>0,clearTimeout:()=>{},Date,URL,URLSearchParams};
vm.runInNewContext(script,context,{timeout:5000});
if (context.__name !== '貓又老師') throw Error('wrong main role name');
for (const [name,markup] of Object.entries(context.__views)) {
  if (!markup || !markup.includes('data-exchange-subview')) throw Error(name+' failed to render');
  console.log(name,markup.length,'chars');
}
if (!context.__views.priority.includes('吉爾摩')) throw Error('priority items missing');
if (!context.__views.routes.includes('data-barter-route')) throw Error('barter routes missing');
if (!context.__views.all.includes('data-exchange-select-role')) throw Error('all-role purchase controls missing');
if (!context.__tools.includes('mabi-assistant-website')) throw Error('MMH reference missing');
if (!context.__bard.includes('吟遊詩人') || !context.__musician.includes('樂師')) throw Error('role guide missing');

