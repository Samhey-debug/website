"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31882],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),u=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(o.Provider,{value:r},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=u(t),g=a,f=s["".concat(o,".").concat(g)]||s[g]||p[g]||i;return t?n.createElement(f,l(l({ref:r},c),{},{components:t})):n.createElement(f,l({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var d={};for(var o in r)hasOwnProperty.call(r,o)&&(d[o]=r[o]);d.originalType=e,d[s]="string"==typeof e?e:a,l[1]=d;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},99265:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const i={title:"$guildShardID",description:"$guildShardID will return the current shard ID.",id:"guildShardID"},l=void 0,d={unversionedId:"functions/guild-related/guildShardID",id:"version-6.2.6/functions/guild-related/guildShardID",title:"$guildShardID",description:"$guildShardID will return the current shard ID.",source:"@site/versioned_docs/version-6.2.6/functions/guild-related/guildShardID.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildShardID",permalink:"/docs/functions/guild-related/guildShardID",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687400258,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"$guildShardID",description:"$guildShardID will return the current shard ID.",id:"guildShardID"},sidebar:"docs",previous:{title:"$guildShard",permalink:"/docs/functions/guild-related/guildShard"},next:{title:"$guildShardPing",permalink:"/docs/functions/guild-related/guildShardPing"}},o={},u=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:u},s="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$guildShardID")," will return the current shard ID."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$guildShardID\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note that this won't work without sharding. If you're unsure, review the ",(0,a.kt)("a",{parentName:"strong",href:"/docs/guides/sharding"},"sharding guide"),".")),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will return the current shard ID:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'guildShardID',\n    code: `\n  I'm currently on shard $guildShardID!\n  `\n});\n")))}p.isMDXComponent=!0}}]);