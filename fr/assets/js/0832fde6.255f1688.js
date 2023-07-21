"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[64604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>g,metadata:()=>k,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$getReactions",description:"$getReactions retournera des propri\xe9t\xe9s \xe0 propos d'une r\xe9action donn\xe9e sur un message sp\xe9cifique.",id:"getReactions"},f=void 0,k={unversionedId:"functions/info-related/getReactions",id:"version-6.4.0/functions/info-related/getReactions",title:"$getReactions",description:"$getReactions retournera des propri\xe9t\xe9s \xe0 propos d'une r\xe9action donn\xe9e sur un message sp\xe9cifique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/getReactions.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/getReactions",permalink:"/fr/docs/functions/info-related/getReactions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689963884,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$getReactions",description:"$getReactions retournera des propri\xe9t\xe9s \xe0 propos d'une r\xe9action donn\xe9e sur un message sp\xe9cifique.",id:"getReactions"},sidebar:"docs",previous:{title:"$getMessage",permalink:"/fr/docs/functions/info-related/getMessage"},next:{title:"$getRoleColor",permalink:"/fr/docs/functions/info-related/getRoleColor"}},b={},y=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],v={toc:y},N="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(N,d(u(u({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getReactions")," renverra des propri\xe9t\xe9s \xe0 propos d'une r\xe9action donn\xe9e sur un message sp\xe9cifique."),(0,r.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$getReactions[IDsalon;IDmessage;r\xe9action;forcer?;option?]\n")),(0,r.kt)("h2",u({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"IDsalon"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ID du salon dans lequel se trouve le message."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"IDmessage"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ID du message."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"r\xe9action"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"La r\xe9action dont les informations seront retourn\xe9es."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"forcer?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"bool\xe9en"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"1. ",(0,r.kt)("strong",{parentName:"td"},"true")," (par d\xe9faut) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"Faux")),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"Faux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"option ?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Comment cela renverra les utilisateurs qui ont r\xe9agi \xe0 ce message ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"username")," (par d\xe9faut) - retourne les noms d'utilisateur   ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"mention")," - mentionne les utilisateurs ",(0,r.kt)("br",null)," 3. ",(0,r.kt)("strong",{parentName:"td"},"id")," - renvoie les IDs des utilisateurs"),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"Faux")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Veuillez noter que cela ne fonctionnera pas sans l'intention ",(0,r.kt)("inlineCode",{parentName:"strong"},"GuildMessageReactions"),".")),(0,r.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Ceci mentionnera tous les utilisateurs qui ont r\xe9agi \xe0 votre message, dans ce cas, seulement votre bot :"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getReactions',\n    code: `\n\n$getReactions[$channelID;$messageID;\ud83d\udc4b;true;mention]\n$addCmdReactions[\ud83d\udc4b]\n  `\n});\n")))}O.isMDXComponent=!0}}]);