"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[84669],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(r),c=a,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},51500:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>i(e,l(t)),c=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$modifyRolePerms",description:"$modifyRolePerms modifiera les permissions d'un r\xf4le donn\xe9.",id:"modifyRolePerms"},y=void 0,g={unversionedId:"functions/guild-related/modifyRolePerms",id:"version-6.4.0/functions/guild-related/modifyRolePerms",title:"$modifyRolePerms",description:"$modifyRolePerms modifiera les permissions d'un r\xf4le donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/modifyRolePerms.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/modifyRolePerms",permalink:"/fr/docs/functions/guild-related/modifyRolePerms",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689963884,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$modifyRolePerms",description:"$modifyRolePerms modifiera les permissions d'un r\xf4le donn\xe9.",id:"modifyRolePerms"},sidebar:"docs",previous:{title:"$modifyRole",permalink:"/fr/docs/functions/guild-related/modifyRole"},next:{title:"$modifyWebhook",permalink:"/fr/docs/functions/guild-related/modifyWebhook"}},k={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],v={toc:b},N="wrapper";function O(e){var t=e,{components:r}=t,a=c(t,["components"]);return(0,n.kt)(N,u(m(m({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$modifyRolePerms")," modifiera les permissions d'un r\xf4le donn\xe9."),(0,n.kt)("h2",m({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$modifyRolePerms[IDserveur;IDr\xf4le;...permissions]\n")),(0,n.kt)("h2",m({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"IDserveur"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"L'ID du serveur o\xf9 se trouve le r\xf4le."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"IDr\xf4le"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"ID du r\xf4le qui sera modifi\xe9. / ",(0,n.kt)("inlineCode",{parentName:"td"},"$guildID")," repr\xe9sente le r\xf4le ",(0,n.kt)("inlineCode",{parentName:"td"},"@everyone")),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"...permissions"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Permissions \xe0 modifier."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Libell\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"-")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Refuser une permission sp\xe9cifique \xe0 quelqu'un ou quelque chose.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"+")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Permettre une permission sp\xe9cifique \xe0 quelqu'un ou \xe0 quelque chose.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"R\xe9initialiser une permission sp\xe9cifique \xe0 son \xe9tat par d\xe9faut.")))),(0,n.kt)("p",null,"Vous pouvez trouver toutes les permissions ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",m({parentName:"strong"},{href:"/fr/docs/guides/client/intents"}),"ici")),"."),(0,n.kt)("h2",m({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Ceci va permettre au r\xf4le \"@everyone\" d'envoyer des messages et d'ajouter des r\xe9actions:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'modifierPermissionsR\xf4les',\n    code: `\n  $modifyRolePerms[$guildID;$guildID;+sendmessages;+addreactions]\"\n  }]\n  `\n});\n")))}O.isMDXComponent=!0}}]);