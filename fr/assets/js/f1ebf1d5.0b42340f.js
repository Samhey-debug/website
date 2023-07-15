"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[68656],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(t),p=a,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},43815:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>y,default:()=>w,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var r=t(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&d(e,t,n[t]);if(i)for(var t of i(n))c.call(n,t)&&d(e,t,n[t]);return e},u=(e,n)=>o(e,l(n)),p=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t};const f={title:"$updateCommands",description:"$updateCommands will reload your commands of your command folder / will make changes effective.",id:"updateCommands"},y=void 0,b={unversionedId:"functions/misc-related/updateCommands",id:"version-6.4.0/functions/misc-related/updateCommands",title:"$updateCommands",description:"$updateCommands will reload your commands of your command folder / will make changes effective.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/updateCommands.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/updateCommands",permalink:"/fr/docs/functions/misc-related/updateCommands",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"$updateCommands",description:"$updateCommands will reload your commands of your command folder / will make changes effective.",id:"updateCommands"},sidebar:"docs",previous:{title:"$timeZone",permalink:"/fr/docs/functions/misc-related/timeZone"},next:{title:"$useChannel",permalink:"/fr/docs/functions/misc-related/useChannel"}},v={},g=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:g},C="wrapper";function w(e){var n=e,{components:t}=n,a=p(n,["components"]);return(0,r.kt)(C,u(m(m({},O),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$updateCommands")," will reload your commands of your command folder / will make changes effective."),(0,r.kt)("h2",m({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$updateCommands\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Will only work if you use a command handler, example below:")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'const { AoiClient, LoadCommands } = require("aoi.js");\n\nconst bot = new AoiClient({\n    token: "DISCORD BOT TOKEN",\n    prefix: "DISCORD BOT PREFIX",\n    intents: ["GuildMessages", "MessageContent", "Guilds"],\n    events: ["onMessage", "onInteractionCreate"],\n    database: {\n        type: "aoi.db",\n        db: require("@akarui/aoi.db"),\n        tables: ["main"],\n        path: "./database/",\n        extraOptions: {\n            dbType: "KeyValue"\n        }\n    }\n});\n\nconst loader = new LoadCommands(bot);\nloader.load(bot.cmd, "./commands/"); // your command directory.\n')),(0,r.kt)("h2",m({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will update the commands of your bot without restarting it:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "updateCommands",\n    code: `\n    $updateCommands\n    `\n});\n')))}w.isMDXComponent=!0}}]);