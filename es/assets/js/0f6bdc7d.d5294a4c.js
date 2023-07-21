"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[66173],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25697:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>j,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var o=r(3905),n=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>l(e,a(t)),m=(e,t)=>{var r={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&c.call(e,o)&&(r[o]=e[o]);return r};const f={title:"$setRoleColor",description:"$setRoleColor establecer\xe1 el color de los roles.",id:"setRoleColor"},g=void 0,b={unversionedId:"functions/guild-related/setRoleColor",id:"version-6.4.0/functions/guild-related/setRoleColor",title:"$setRoleColor",description:"$setRoleColor establecer\xe1 el color de los roles.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/setRoleColor.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/setRoleColor",permalink:"/es/docs/functions/guild-related/setRoleColor",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689963884,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$setRoleColor",description:"$setRoleColor establecer\xe1 el color de los roles.",id:"setRoleColor"},sidebar:"docs",previous:{title:"$setGuildName",permalink:"/es/docs/functions/guild-related/setGuildName"},next:{title:"$setRoleIcon",permalink:"/es/docs/functions/guild-related/setRoleIcon"}},v={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:y},O="wrapper";function j(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,o.kt)(O,u(d(d({},k),n),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$setRoleColor")," devolver\xe1 el color del rol dado."),(0,o.kt)("h2",d({},{id:"uso"}),"Uso"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$setRoleColor[rolID;color]\n")),(0,o.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,o.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,o.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,o.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",d({parentName:"tr"},{align:null}),"rolID"),(0,o.kt)("td",d({parentName:"tr"},{align:null}),"entero"),(0,o.kt)("td",d({parentName:"tr"},{align:null}),"ID del rol que ser\xe1 modificado."),(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",d({parentName:"tr"},{align:null}),"color"),(0,o.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,o.kt)("td",d({parentName:"tr"},{align:null}),"El nuevo color (hex)."),(0,o.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")))),(0,o.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,o.kt)("p",null,"Esto cambiar\xe1 el color de un rol aleatorio a rojo:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'setRoleColor',\n    code: `\n   $setRoleColor[$randomRoleID;Red]`\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'setRoleColor',\n    code: `\n   $setRoleColor[$randomRoleID;ED4245]`\n});\n")))}j.isMDXComponent=!0}}]);