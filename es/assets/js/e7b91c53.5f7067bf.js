"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>k,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&p(e,r,t[r]);return e},c=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$findNumbers",description:"$findNumbers will attempt to return all numbers in a message of a given text.",id:"findNumbers"},b=void 0,y={unversionedId:"functions/util-related/findNumbers",id:"version-6.4.0/functions/util-related/findNumbers",title:"$findNumbers",description:"$findNumbers will attempt to return all numbers in a message of a given text.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/findNumbers.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/findNumbers",permalink:"/es/docs/functions/util-related/findNumbers",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$findNumbers",description:"$findNumbers will attempt to return all numbers in a message of a given text.",id:"findNumbers"},sidebar:"docs",previous:{title:"$findGuildChannel",permalink:"/es/docs/functions/util-related/findGuildChannel"},next:{title:"$findRole",permalink:"/es/docs/functions/util-related/findRole"}},g={},v=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],N={toc:v},O="wrapper";function k(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(O,c(d(d({},N),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$findNumbers")," will attempt to return all numbers in a message of a given text."),(0,n.kt)("h2",d({},{id:"modo-de-uso"}),"Modo de uso"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$findNumbers[text]\n")),(0,n.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Text where you want to find numbers."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadera")))),(0,n.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"This will return ",(0,n.kt)("inlineCode",{parentName:"p"},"25")," and remove ",(0,n.kt)("inlineCode",{parentName:"p"},"Hello, I'm [..] years old")," from the given text:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'findNumbers',\n    code: `\n  $findNumbers[Hello, I'm 25 years old]\n  `\n});\n")))}k.isMDXComponent=!0}}]);