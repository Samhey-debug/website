"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[45475],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>P,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>i(e,l(t)),d=(e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$onlyClientPerms",description:"$onlyClientPerms v\xe9rifiera si le bot a les autorisations requises et renverra un message d'erreur si ce n'est pas le cas.",id:"onlyClientPerms"},y=void 0,b={unversionedId:"functions/client-related/onlyClientPerms",id:"version-6.4.0/functions/client-related/onlyClientPerms",title:"$onlyClientPerms",description:"$onlyClientPerms v\xe9rifiera si le bot a les autorisations requises et renverra un message d'erreur si ce n'est pas le cas.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/client-related/onlyClientPerms.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/onlyClientPerms",permalink:"/fr/docs/functions/client-related/onlyClientPerms",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689963884,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$onlyClientPerms",description:"$onlyClientPerms v\xe9rifiera si le bot a les autorisations requises et renverra un message d'erreur si ce n'est pas le cas.",id:"onlyClientPerms"},sidebar:"docs",previous:{title:"$killClient",permalink:"/fr/docs/functions/client-related/killClient"},next:{title:"$setClientAvatar",permalink:"/fr/docs/functions/client-related/setClientAvatar"}},v={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:g},O="wrapper";function P(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(O,m(u(u({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"$onlyClientPerms v\xe9rifiera si le bot a les autorisations requises et renverra un message d'erreur si ce n'est pas le cas."),(0,n.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$onlyClientPerms[...permissions;erreur]\n")),(0,n.kt)("h2",u({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"...permissions"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8re"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Permissions dont le bot a besoin."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"erreur"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8re"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Erreur \xe0 retourner lorsque le bot n'a pas les permissions list\xe9es."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")))),(0,n.kt)("p",null,"Vous pouvez toutes les permissions ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",u({parentName:"strong"},{href:"/fr/docs/guides/client/intents"}),"ici")),"."),(0,n.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"La commande ne fonctionnera que si le bot dispose des permissions administrateur :"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "onlyClientPerms",\n    code: `\n    Ok.\n    $onlyClientPerms[administrator;Je n\'ai pas les permissions administrateurs!]\n    `\n});\n')))}P.isMDXComponent=!0}}]);