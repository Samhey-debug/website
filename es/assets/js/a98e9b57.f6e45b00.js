"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[35411],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),u=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(a),c=n,k=s["".concat(d,".").concat(c)]||s[c]||m[c]||l;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},15610:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>O,frontMatter:()=>k,metadata:()=>b,toc:()=>N});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&p(e,a,t[a]);if(i)for(var a of i(t))u.call(t,a)&&p(e,a,t[a]);return e},m=(e,t)=>l(e,o(t)),c=(e,t)=>{var a={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a};const k={title:"$userLeaderBoard",description:"$userLeaderBoard devolver\xe1 una tabla de clasificaci\xf3n de una variable de usuario.",id:"userLeaderBoard"},g=void 0,b={unversionedId:"functions/variables-related/userLeaderBoard",id:"version-6.4.0/functions/variables-related/userLeaderBoard",title:"$userLeaderBoard",description:"$userLeaderBoard devolver\xe1 una tabla de clasificaci\xf3n de una variable de usuario.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/userLeaderBoard.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/userLeaderBoard",permalink:"/es/docs/functions/variables-related/userLeaderBoard",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689963884,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$userLeaderBoard",description:"$userLeaderBoard devolver\xe1 una tabla de clasificaci\xf3n de una variable de usuario.",id:"userLeaderBoard"},sidebar:"docs",previous:{title:"$setVar",permalink:"/es/docs/functions/variables-related/setVar"}},v={},N=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],f={toc:N},y="wrapper";function O(e){var t=e,{components:a}=t,n=c(t,["components"]);return(0,r.kt)(y,m(s(s({},f),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$userLeaderBoard")," devolver\xe1 una tabla de clasificaci\xf3n de una variable de usuario."),(0,r.kt)("h2",s({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$userLeaderBoard[guildID;variable;order?;custom?;list?;page?;table?]\n")),(0,r.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"guildID"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"ID del gremio."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"s\xed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"variable"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Nombre variable."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"s\xed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"tipo?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"En qu\xe9 orden ser\xe1 devuelto ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"ascender")," (ascendente / predeterminado) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"dsc")," (descendiendo)"),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\xbfpersonalizado?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Formateando."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"lista?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Cu\xe1ntos listar."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\xbfp\xe1gina?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Qu\xe9 p\xe1gina listar."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"tabla?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Tabla variable."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"no")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Opciones"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Devuelve"),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"{top}")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Devuelve la posici\xf3n del usuario.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"{username}")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Devuelve el nombre de usuario.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"{tag}")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Devuelve el nombre de usuario y el discriminador.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"{id}")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Devuelve el ID de usuario.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"{value}")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"n\xfamero, entero"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Devuelve el valor de la variable.")))),(0,r.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,'Esto devolver\xe1 una tabla de clasificaci\xf3n de la variable "Ejemplo":'),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "userLeaderBoard",\n    code: `\n    $userLeaderBoard[$guildID;Example;asc;{top} - {username} - {value};10;1;main]\n    `\n});\n')))}O.isMDXComponent=!0}}]);