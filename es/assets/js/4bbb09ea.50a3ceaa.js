"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[22290],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),m=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=m(r),u=n,y=s["".concat(c,".").concat(u)]||s[u]||p[u]||o;return r?a.createElement(y,l(l({ref:t},d),{},{components:r})):a.createElement(y,l({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},12567:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>y,metadata:()=>k,toc:()=>v});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(i)for(var r of i(t))m.call(t,r)&&d(e,r,t[r]);return e},p=(e,t)=>o(e,l(t)),u=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&m.call(e,a)&&(r[a]=e[a]);return r};const y={title:"$arraySome",description:"$arraySome verificar\xe1 los elementos dados en la matriz.",id:"arraySome"},f=void 0,k={unversionedId:"functions/array-related/arraySome",id:"version-6.4.0/functions/array-related/arraySome",title:"$arraySome",description:"$arraySome verificar\xe1 los elementos dados en la matriz.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arraySome.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arraySome",permalink:"/es/docs/functions/array-related/arraySome",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690433159,formattedLastUpdatedAt:"27 jul 2023",frontMatter:{title:"$arraySome",description:"$arraySome verificar\xe1 los elementos dados en la matriz.",id:"arraySome"},sidebar:"docs",previous:{title:"$arrayShuffle",permalink:"/es/docs/functions/array-related/arrayShuffle"},next:{title:"$arraySort",permalink:"/es/docs/functions/array-related/arraySort"}},b={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],g={toc:v},N="wrapper";function O(e){var t=e,{components:r}=t,n=u(t,["components"]);return(0,a.kt)(N,p(s(s({},g),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arraySome"),"  verificar\xe1 los elementos dados en la matriz y devolver\xe1 un valor booleano."),(0,a.kt)("h2",s({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$arraySome[nombre;consulta;tipo de consulta?]\n")),(0,a.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"descripci\xf3n"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"nombre"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Nombre de matriz"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"El elemento que estaremos consultando para cada elemento dentro de la matriz."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"tipo de consulta?"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"El operador de comparaci\xf3n."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"==")," \u2014 Cada elemento que coincida con la consulta."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!=")," \u2014 Cada elemento que no coincide con la consulta."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">"),'  \u2014 Todos los elementos a la "izquierda" del elemento encontrado, excluy\xe9ndose a s\xed mismo.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<"),'  \u2014 Todos los elementos a la "derecha" del elemento encontrado, excluy\xe9ndose a s\xed mismo.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">="),' \u2014 Todos los elementos a la "izquierda" del elemento encontrado, incluido \xe9l mismo.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<="),' \u2014 Todos los elementos a la "derecha" del elemento encontrado, incluido \xe9l mismo.')),(0,a.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-some",\n    code: `\n  $arraySome[array;aoi.js;==]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n});\n')))}O.isMDXComponent=!0}}]);