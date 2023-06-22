"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[65170],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=n.createContext({}),u=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(d.Provider,{value:r},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(t),g=l,f=s["".concat(d,".").concat(g)]||s[g]||p[g]||a;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=g;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},69063:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=t(87462),l=(t(67294),t(3905));const a={title:"$guildPreferredLocale",description:"$guildPreferredLocale will return a guild's set locale.",id:"guildPreferredLocale"},i=void 0,o={unversionedId:"functions/guild-related/guildPreferredLocale",id:"version-6.2.6/functions/guild-related/guildPreferredLocale",title:"$guildPreferredLocale",description:"$guildPreferredLocale will return a guild's set locale.",source:"@site/versioned_docs/version-6.2.6/functions/guild-related/guildPreferredLocale.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildPreferredLocale",permalink:"/docs/functions/guild-related/guildPreferredLocale",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687412669,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"$guildPreferredLocale",description:"$guildPreferredLocale will return a guild's set locale.",id:"guildPreferredLocale"},sidebar:"docs",previous:{title:"$guildNames",permalink:"/docs/functions/guild-related/guildNames"},next:{title:"$guildRoles",permalink:"/docs/functions/guild-related/guildRoles"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:u},s="wrapper";function p(e){let{components:r,...t}=e;return(0,l.kt)(s,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"$guildPreferredLocale")," will return a guild's set locale."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$guildPreferredLocale[guildID?]\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the guild."),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("h2",{id:"examples"},"Example(s)"),(0,l.kt)("p",null,"This will return the guild's preferred locale:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'guildPreferredLocale',\n    code: `\n  $guildPreferredLocale[$guildID]\n  `\n});\n")))}p.isMDXComponent=!0}}]);