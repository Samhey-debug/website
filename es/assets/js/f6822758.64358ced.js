"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[61239],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>j,toc:()=>g});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&m(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&m(e,r,t[r]);return e},p=(e,t)=>a(e,i(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$customEmoji",description:"$customEmoji devolver\xe1 un emoji personalizado.",id:"customEmoji"},v=void 0,j={unversionedId:"functions/info-related/customEmoji",id:"version-6.4.0/functions/info-related/customEmoji",title:"$customEmoji",description:"$customEmoji devolver\xe1 un emoji personalizado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/customEmoji.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/customEmoji",permalink:"/es/docs/functions/info-related/customEmoji",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572839,formattedLastUpdatedAt:"13 sept 2023",frontMatter:{title:"$customEmoji",description:"$customEmoji devolver\xe1 un emoji personalizado.",id:"customEmoji"},sidebar:"docs",previous:{title:"$cpu",permalink:"/es/docs/functions/info-related/cpu"},next:{title:"$databasePing",permalink:"/es/docs/functions/info-related/databasePing"}},b={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:g},k="wrapper";function O(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(k,p(u(u({},y),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$customEmoji")," devolver\xe1 un emoji personalizado."),(0,n.kt)("h2",u({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$customEmoji[emojiResolver;servidorID?]\n")),(0,n.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"emojiResolver"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Nombre o ID del emoji."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"servidorID?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string, integer"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"De d\xf3nde es el emoji. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"global")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"guildID")," - sustituir por ID de servidor"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"no")))),(0,n.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Para enviar un emoji personalizado de su elecci\xf3n, sustituya emojiResolver por un nombre o ID de emoji real:"),(0,n.kt)("p",null,"Intenta buscar el emoji en todos los servidores en los que est\xe9 el bot:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'customEmoji',\n    code: `\n  $customEmoji[emojiResolver;global]\n  `\n});\n")),(0,n.kt)("p",null,"Intenta devolver el emoji del servidor dado:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'customEmoji',\n    code: `\n  $customEmoji[emojiResolver;ID espec\xedfico del servidor]\n  `\n});\n")))}O.isMDXComponent=!0}}]);