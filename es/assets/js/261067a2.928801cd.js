"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[3881],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82823:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>j,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&s(e,r,t[r]);return e},c=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$addEmoji",description:"$addEmoji a\xf1adir\xe1 un emoji al gremio dado. Si se proporcionan ID de funci\xf3n, solo los usuarios con una de las ID de funci\xf3n proporcionadas podr\xe1n utilizar el emoji.",id:"addEmoji"},g=void 0,k={unversionedId:"functions/guild-related/addEmoji",id:"version-6.4.0/functions/guild-related/addEmoji",title:"$addEmoji",description:"$addEmoji a\xf1adir\xe1 un emoji al gremio dado. Si se proporcionan ID de funci\xf3n, solo los usuarios con una de las ID de funci\xf3n proporcionadas podr\xe1n utilizar el emoji.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/addEmoji.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/addEmoji",permalink:"/es/docs/functions/guild-related/addEmoji",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689963884,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$addEmoji",description:"$addEmoji a\xf1adir\xe1 un emoji al gremio dado. Si se proporcionan ID de funci\xf3n, solo los usuarios con una de las ID de funci\xf3n proporcionadas podr\xe1n utilizar el emoji.",id:"addEmoji"},sidebar:"docs",previous:{title:"$webhookUpdate",permalink:"/es/docs/functions/event-related/webhookUpdate"},next:{title:"$addThreadMember",permalink:"/es/docs/functions/guild-related/addThreadMember"}},j={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:b},y="wrapper";function N(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(y,c(u(u({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$addEmoji")," a\xf1adir\xe1 un emojis al gremio dado. Si se proporcionan ID de funci\xf3n, solo los usuarios con una de las ID de funci\xf3n proporcionadas podr\xe1n utilizar el emoji."),(0,n.kt)("h2",u({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$addEmoji[ID de gremio;URL;nombre;volverEmoji?;raz\xf3n?;...roles?]\n")),(0,n.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"servidorID"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ID del gremio"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"URL"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"URL de imagen v\xe1lida"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"nombre"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"nombre emoji"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\xbfdevolver Emoji?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\xbfdevolver los emoji creados?"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\xbfraz\xf3n?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"raz\xf3n que se mostrar\xe1 en los registros de auditor\xeda del gremio"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"roles?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"qu\xe9 roles ser\xe1n capaces de usar los emoji dados"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto crear\xe1 un emoji:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'addEmoji',\n    code: `\n  $addEmoji[$guildID;https://cdn.discordapp.com/emojis/1010320053687832586.webp?size=96&quality=lossless;leref;false]\n  `\n});\n")))}N.isMDXComponent=!0}}]);