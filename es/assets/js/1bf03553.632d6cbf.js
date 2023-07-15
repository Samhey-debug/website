"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[21722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=m(r),c=a,f=p["".concat(s,".").concat(c)]||p[c]||d[c]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},12300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>v,frontMatter:()=>f,metadata:()=>k,toc:()=>y});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))m.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>l(e,o(t)),c=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$findMembers",description:"$findMembers will return all members with similar username.",id:"findMembers"},b=void 0,k={unversionedId:"functions/user-related/findMembers",id:"version-6.4.0/functions/user-related/findMembers",title:"$findMembers",description:"$findMembers will return all members with similar username.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/findMembers.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/findMembers",permalink:"/es/docs/functions/user-related/findMembers",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$findMembers",description:"$findMembers will return all members with similar username.",id:"findMembers"},sidebar:"docs",previous:{title:"$findMember",permalink:"/es/docs/functions/user-related/findMember"},next:{title:"$findUser",permalink:"/es/docs/functions/user-related/findUser"}},g={},y=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Parameters for the <code>format</code> argument",id:"parameters-for-the-format-argument",level:3},{value:"Ejemplo(s)",id:"ejemplos",level:2}],h={toc:y},N="wrapper";function v(e){var t=e,{components:r}=t,a=c(t,["components"]);return(0,n.kt)(N,d(p(p({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$findMembers")," will return all members with similar username."),(0,n.kt)("h2",p({},{id:"modo-de-uso"}),"Modo de uso"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$findMembers[userResolver;limit?;type?;force?;format?]\n")),(0,n.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"userResolver"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Query of the username the bot will search for."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"limit?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"n\xfamero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"The amount of results the bot will return."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"tipo?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Type of the search query."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"force?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"1. ",(0,n.kt)("strong",{parentName:"td"},"true")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"false")," (por defecto)"),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"format?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"The format the bot will return the found users (listed below)."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"no")))),(0,n.kt)("h3",p({},{id:"parameters-for-the-format-argument"}),"Parameters for the ",(0,n.kt)("inlineCode",{parentName:"h3"},"format")," argument"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"{position} -> returns the position"),(0,n.kt)("li",{parentName:"ul"},"{id} -> returns the user ID"),(0,n.kt)("li",{parentName:"ul"},"{username} -> returns the username"),(0,n.kt)("li",{parentName:"ul"},"{nick} -> returns the nickname"),(0,n.kt)("li",{parentName:"ul"},"{tag} -> returns the user discriminator")),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"This will return twenty members with ",(0,n.kt)("inlineCode",{parentName:"p"},"Leref")," in their username:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'findMembers',\n    code: `\n  $findMembers[Leref;20;startsWith;true;{position}) {username}#{tag}]\n  `\n});\n")))}v.isMDXComponent=!0}}]);