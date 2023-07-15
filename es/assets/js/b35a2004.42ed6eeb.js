"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[2023],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),u=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,b=p["".concat(m,".").concat(d)]||p[d]||c[d]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>O,frontMatter:()=>b,metadata:()=>y,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&s(e,r,t[r]);return e},c=(e,t)=>o(e,i(t)),d=(e,t)=>{var r={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const b={title:"$memberJoinDate",description:"$memberJoinDate will return a members join date in MS.",id:"memberJoinDate"},f=void 0,y={unversionedId:"functions/user-related/memberJoinDate",id:"version-6.4.0/functions/user-related/memberJoinDate",title:"$memberJoinDate",description:"$memberJoinDate will return a members join date in MS.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/memberJoinedDate.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/memberJoinDate",permalink:"/es/docs/functions/user-related/memberJoinDate",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$memberJoinDate",description:"$memberJoinDate will return a members join date in MS.",id:"memberJoinDate"},sidebar:"docs",previous:{title:"$memberJoinPosition",permalink:"/es/docs/functions/user-related/memberJoinPosition"},next:{title:"$membersCount",permalink:"/es/docs/functions/user-related/membersCount"}},g={},v=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:v},D="wrapper";function O(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(D,c(p(p({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$memberJoinDate")," will return a members join date in MS."),(0,n.kt)("h2",p({},{id:"modo-de-uso"}),"Modo de uso"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$memberJoinDate[userID?;guildID?]\n")),(0,n.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"usarioID?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"El ID del usuario."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"servidorID?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"The ID of the guild."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"no")))),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"This will return your join date in MS and parsed date:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'memberJoinDate',\n    code: `\n  $memberJoinDate[$authorID;$guildID] -> $parseDate[$memberJoinDate[$authorID;$guildID]]\n  `\n});\n")))}O.isMDXComponent=!0}}]);