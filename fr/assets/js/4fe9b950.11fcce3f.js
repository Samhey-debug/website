"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[96600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),s=r,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},97285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>h,frontMatter:()=>k,metadata:()=>f,toc:()=>N});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&d(e,n,t[n]);return e},m=(e,t)=>l(e,i(t)),s=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n};const k={title:"$createChannel",description:"$createChannel cr\xe9era un salon du type donn\xe9.",id:"createChannel"},g=void 0,f={unversionedId:"functions/guild-related/createChannel",id:"version-6.4.0/functions/guild-related/createChannel",title:"$createChannel",description:"$createChannel cr\xe9era un salon du type donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/createChannel.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/createChannel",permalink:"/fr/docs/functions/guild-related/createChannel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690433159,formattedLastUpdatedAt:"27 juil. 2023",frontMatter:{title:"$createChannel",description:"$createChannel cr\xe9era un salon du type donn\xe9.",id:"createChannel"},sidebar:"docs",previous:{title:"$cloneChannel",permalink:"/fr/docs/functions/guild-related/cloneChannel"},next:{title:"$createChannelInvite",permalink:"/fr/docs/functions/guild-related/createChannelInvite"}},y={},N=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],b={toc:N},v="wrapper";function h(e){var t=e,{components:n}=t,r=s(t,["components"]);return(0,a.kt)(v,m(c(c({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$createChannel")," cr\xe9era un salon du type donn\xe9."),(0,a.kt)("h2",c({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$createChannel[IDserveur;nom;type;renvoyerID;IDcat\xe9gorie]\n")),(0,a.kt)("h2",c({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"IDserveur"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"ID du serveur o\xf9 le salon sera cr\xe9\xe9."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"nom"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Le nom du salon nouvellement cr\xe9\xe9."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Le type de salon. (list\xe9 ci-dessous)"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"renvoyerID"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"bool\xe9en"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Renvoie l'ID du salon nouvellement cr\xe9\xe9. ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"true")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"false")," (par d\xe9faut)"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"IDcat\xe9gorie"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"L'ID de la cat\xe9gorie."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"faux")))),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h3",null," Types de salon ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type de salon"),(0,a.kt)("th",c({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Salon Textuel"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Text")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Salon vocal"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Voice")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Cat\xe9gorie"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Category")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Salon de conf\xe9rence"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Stage")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Fil de discussion priv\xe9"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"PrivateThread")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Fil de discussion public"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"PublicThread")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Forum"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Forum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Fil d'annonce"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"AnnouncementThread")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Salon d'Annonce"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Announcement"))))),(0,a.kt)("h2",c({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("p",null,'Cela va cr\xe9er un nouveau salon textuel appel\xe9 "aoijs":'),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'cr\xe9erSalon',\n    code: `\n    $createChannel[$guildID;aoijs;Text;false]\n  `\n});\n")))}h.isMDXComponent=!0}}]);