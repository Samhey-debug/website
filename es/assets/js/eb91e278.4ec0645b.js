"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[68722],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),u=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(d.Provider,{value:r},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(t),f=a,g=s["".concat(d,".").concat(f)]||s[f]||p[f]||o;return t?n.createElement(g,l(l({ref:r},c),{},{components:t})):n.createElement(g,l({ref:r},c))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},74347:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>m,default:()=>D,frontMatter:()=>g,metadata:()=>v,toc:()=>b});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))u.call(r,t)&&c(e,t,r[t]);return e},p=(e,r)=>o(e,l(r)),f=(e,r)=>{var t={};for(var n in e)d.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const g={title:"$guildShardID",description:"$guildShardID devolver\xe1 el ID del fragmento actual.",id:"guildShardID"},m=void 0,v={unversionedId:"functions/guild-related/guildShardID",id:"version-6.4.0/functions/guild-related/guildShardID",title:"$guildShardID",description:"$guildShardID devolver\xe1 el ID del fragmento actual.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildShardID.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildShardID",permalink:"/es/docs/functions/guild-related/guildShardID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690433159,formattedLastUpdatedAt:"27 jul 2023",frontMatter:{title:"$guildShardID",description:"$guildShardID devolver\xe1 el ID del fragmento actual.",id:"guildShardID"},sidebar:"docs",previous:{title:"$guildShard",permalink:"/es/docs/functions/guild-related/guildShard"},next:{title:"$guildShardPing",permalink:"/es/docs/functions/guild-related/guildShardPing"}},y={},b=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],h={toc:b},O="wrapper";function D(e){var r=e,{components:t}=r,a=f(r,["components"]);return(0,n.kt)(O,p(s(s({},h),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$guildShardID")," devolver\xe1 el ID del fragmento actual."),(0,n.kt)("h2",s({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$guildShardID\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tenga en cuenta que esto no funcionar\xe1 sin fragmentar. Si no est\xe1s seguro, revisa la ",(0,n.kt)("a",s({parentName:"strong"},{href:"/es/docs/guides/client/sharding"}),"gu\xeda de fragmentaci\xf3n"),".")),(0,n.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 el ID del fragmento actual:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildShardID',\n    code: `\n  \xa1Actualmente estoy en el fragmento $guildShardID!\n  `\n});\n")))}D.isMDXComponent=!0}}]);