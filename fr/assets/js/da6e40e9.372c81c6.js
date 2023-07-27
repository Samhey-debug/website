"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[69625],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):m(m({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,f=p["".concat(l,".").concat(d)]||p[d]||c[d]||i;return t?n.createElement(f,m(m({ref:r},s),{},{components:t})):n.createElement(f,m({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,m=new Array(i);m[0]=d;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[p]="string"==typeof e?e:a,m[1]=o;for(var u=2;u<i;u++)m[u]=t[u];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87592:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>b,default:()=>k,frontMatter:()=>f,metadata:()=>v,toc:()=>g});var n=t(3905),a=Object.defineProperty,i=Object.defineProperties,m=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&s(e,t,r[t]);if(o)for(var t of o(r))u.call(r,t)&&s(e,t,r[t]);return e},c=(e,r)=>i(e,m(r)),d=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&o)for(var n of o(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const f={title:"$maximumMembers",description:"$maximumMembers renverra le nombre maximum de membres qu'un serveur peut avoir.",id:"maximumMembers"},b=void 0,v={unversionedId:"functions/info-related/maximumMembers",id:"version-6.4.0/functions/info-related/maximumMembers",title:"$maximumMembers",description:"$maximumMembers renverra le nombre maximum de membres qu'un serveur peut avoir.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/maximumMembers.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/maximumMembers",permalink:"/fr/docs/functions/info-related/maximumMembers",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690433159,formattedLastUpdatedAt:"27 juil. 2023",frontMatter:{title:"$maximumMembers",description:"$maximumMembers renverra le nombre maximum de membres qu'un serveur peut avoir.",id:"maximumMembers"},sidebar:"docs",previous:{title:"$maxRam",permalink:"/fr/docs/functions/info-related/maxRam"},next:{title:"$ping",permalink:"/fr/docs/functions/info-related/ping"}},y={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],x={toc:g},O="wrapper";function k(e){var r=e,{components:t}=r,a=d(r,["components"]);return(0,n.kt)(O,c(p(p({},x),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$maximumMembers")," renverra le nombre maximum de membres qu'un serveur peut avoir."),(0,n.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$maximumMembers[IDserveur?]\n")),(0,n.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"IDserveur?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"l'ID du serveur."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"Faux")))),(0,n.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Cela retournera le maximum de membres que vous pouvez avoir dans votre serveur :"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name : 'maximumMembers',\n    code: `\n  Vous pouvez avoir : $maximumMembers[$guildID] membres dans ce serveur!\n  `\n});\n")))}k.isMDXComponent=!0}}]);