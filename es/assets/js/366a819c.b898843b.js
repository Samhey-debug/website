"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[30104],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),c=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(d.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(t),m=n,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||o;return t?a.createElement(f,l(l({ref:r},p),{},{components:t})):a.createElement(f,l({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15474:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>y,default:()=>j,frontMatter:()=>f,metadata:()=>O,toc:()=>b});var a=t(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&p(e,t,r[t]);return e},u=(e,r)=>o(e,l(r)),m=(e,r)=>{var t={};for(var a in e)d.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))r.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t};const f={title:"$arrayIndexOf",description:"$arrayIndexOf devolver\xe1 el \xedndice del primer elemento encontrado de la consulta.",id:"arrayIndexOf"},y=void 0,O={unversionedId:"functions/array-related/arrayIndexOf",id:"version-6.4.0/functions/array-related/arrayIndexOf",title:"$arrayIndexOf",description:"$arrayIndexOf devolver\xe1 el \xedndice del primer elemento encontrado de la consulta.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayIndexOf.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayIndexOf",permalink:"/es/docs/functions/array-related/arrayIndexOf",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689963884,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$arrayIndexOf",description:"$arrayIndexOf devolver\xe1 el \xedndice del primer elemento encontrado de la consulta.",id:"arrayIndexOf"},sidebar:"docs",previous:{title:"$arrayIncludes",permalink:"/es/docs/functions/array-related/arrayIncludes"},next:{title:"$arrayJoin",permalink:"/es/docs/functions/array-related/arrayJoin"}},v={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],g={toc:b},k="wrapper";function j(e){var r=e,{components:t}=r,n=m(r,["components"]);return(0,a.kt)(k,u(s(s({},g),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayIndexOf")," devolver\xe1 el \xedndice del primer elemento encontrado de la consulta."),(0,a.kt)("h2",s({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$arrayIndexOf[nombre;consulta]\n")),(0,a.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"nombre"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Nombre de matriz"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"El elemento que estaremos consultando para cada elemento dentro de la matriz."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")))),(0,a.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "arrayIndexOf",\n    code: `\n  $arrayIndexOf[array;akarui]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n// Devolver\xe1 "2" ya que la palabra "akarui" est\xe1 en la segunda posici\xf3n de la matriz.\n});\n')))}j.isMDXComponent=!0}}]);