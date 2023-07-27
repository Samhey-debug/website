"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[35564],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},22354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>h,frontMatter:()=>m,metadata:()=>v,toc:()=>y});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>i(e,o(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$getBanReason",description:"$getBanReason renverra une raison de bannissement d'un utilisateur sp\xe9cifique.",id:"getBanReason"},g=void 0,v={unversionedId:"functions/info-related/getBanReason",id:"version-6.4.0/functions/info-related/getBanReason",title:"$getBanReason",description:"$getBanReason renverra une raison de bannissement d'un utilisateur sp\xe9cifique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/getBanReason.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/getBanReason",permalink:"/fr/docs/functions/info-related/getBanReason",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690433159,formattedLastUpdatedAt:"27 juil. 2023",frontMatter:{title:"$getBanReason",description:"$getBanReason renverra une raison de bannissement d'un utilisateur sp\xe9cifique.",id:"getBanReason"},sidebar:"docs",previous:{title:"$getAuditLogs",permalink:"/fr/docs/functions/info-related/getAuditLogs"},next:{title:"$getChannelSlowmode",permalink:"/fr/docs/functions/info-related/getChannelSlowmode"}},b={},y=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:y},O="wrapper";function h(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(O,d(c(c({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getBanReason")," renverra une raison de bannissement d'un utilisateur sp\xe9cifique."),(0,r.kt)("h2",c({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$getBanReason[IDserveur?;IDutilisateur?]\n")),(0,r.kt)("h2",c({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"IDserveur?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"L'ID du serveur."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"Faux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"IDutilisateur?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"L'ID de l'utilisateur dont vous voulez obtenir la raison du bannissement."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"Faux")))),(0,r.kt)("h2",c({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela renverra la raison du bannissement de qui vous voulez:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getBanReason',\n    code: `\n  \n  $getBanReason[$guildID;IDutilisateur] \n  ` // assurez-vous de remplacer \"IDutilisateur\" par un v\xe9ritable identifiant d'utilisateur\n});\n")))}h.isMDXComponent=!0}}]);