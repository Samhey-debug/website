"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[17664],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,f=p["".concat(d,".").concat(g)]||p[g]||s[g]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},88392:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>O,frontMatter:()=>f,metadata:()=>m,toc:()=>b});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&c(e,r,t[r]);return e},s=(e,t)=>i(e,l(t)),g=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$guildShardPing",description:"$guildShardPing will return the latency of a specific shard.",id:"guildShardPing"},h=void 0,m={unversionedId:"functions/guild-related/guildShardPing",id:"version-6.4.0/functions/guild-related/guildShardPing",title:"$guildShardPing",description:"$guildShardPing will return the latency of a specific shard.",source:"@site/versioned_docs/version-6.4.0/functions/guild-related/guildShardPing.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildShardPing",permalink:"/docs/functions/guild-related/guildShardPing",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572839,formattedLastUpdatedAt:"Sep 13, 2023",frontMatter:{title:"$guildShardPing",description:"$guildShardPing will return the latency of a specific shard.",id:"guildShardPing"},sidebar:"docs",previous:{title:"$guildShardID",permalink:"/docs/functions/guild-related/guildShardID"},next:{title:"$guildSplash",permalink:"/docs/functions/guild-related/guildSplash"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:b},k="wrapper";function O(e){var t=e,{components:r}=t,a=g(t,["components"]);return(0,n.kt)(k,s(p(p({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$guildShardPing")," will return the latency of a specific shard."),(0,n.kt)("h2",p({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$guildShardPing[shardId?]\n")),(0,n.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"shardId?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"The shard ID."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note that this won't work without sharding. If you're unsure, review the ",(0,n.kt)("a",p({parentName:"strong"},{href:"/docs/guides/client/sharding"}),"sharding guide"),".")),(0,n.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will return the shard latency of the current shard:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildShardPing',\n    code: `\n  $guildShardPing[$shardId]MS\n  `\n});\n")))}O.isMDXComponent=!0}}]);