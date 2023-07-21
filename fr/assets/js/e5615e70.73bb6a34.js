"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[44231],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),c=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(u.Provider,{value:r},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(t),d=n,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||l;return t?a.createElement(m,o(o({ref:r},p),{},{components:t})):a.createElement(m,o({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[f]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26413:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>y,default:()=>k,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var a=t(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&p(e,t,r[t]);return e},s=(e,r)=>l(e,o(r)),d=(e,r)=>{var t={};for(var a in e)u.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))r.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t};const m={title:"$arrayShuffle",description:"$arrayShuffle m\xe9langera les \xe9l\xe9ments du tableau donn\xe9.",id:"arrayShuffle"},y=void 0,b={unversionedId:"functions/array-related/arrayShuffle",id:"version-6.4.0/functions/array-related/arrayShuffle",title:"$arrayShuffle",description:"$arrayShuffle m\xe9langera les \xe9l\xe9ments du tableau donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayShuffle.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayShuffle",permalink:"/fr/docs/functions/array-related/arrayShuffle",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689963884,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$arrayShuffle",description:"$arrayShuffle m\xe9langera les \xe9l\xe9ments du tableau donn\xe9.",id:"arrayShuffle"},sidebar:"docs",previous:{title:"$arrayShift",permalink:"/fr/docs/functions/array-related/arrayShift"},next:{title:"$arraySome",permalink:"/fr/docs/functions/array-related/arraySome"}},h={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],v={toc:g},O="wrapper";function k(e){var r=e,{components:t}=r,n=d(r,["components"]);return(0,a.kt)(O,s(f(f({},v),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayShuffle")," m\xe9langera les \xe9l\xe9ments du tableau donn\xe9."),(0,a.kt)("h2",f({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$arrayShuffle[nom]\n")),(0,a.kt)("h2",f({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",f({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",f({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",f({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"nom"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Nom du tableau."),(0,a.kt)("td",f({parentName:"tr"},{align:"center"}),"vrai")))),(0,a.kt)("h2",f({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-shuffle",\n    code: `\n  $arrayJoin[tableau;, ]\n  $arrayShuffle[tableau]\n  $createArray[tableau;aoi.js;akarui;documents;bot]\n  `\n});\n')))}k.isMDXComponent=!0}}]);