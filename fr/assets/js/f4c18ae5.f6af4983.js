"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[70330],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},29826:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>w,frontMatter:()=>m,metadata:()=>k,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$webhookExists",description:"$webhookExists v\xe9rifiera si un webhook existe.",id:"webhookExists"},b=void 0,k={unversionedId:"functions/info-related/webhookExists",id:"version-6.4.0/functions/info-related/webhookExists",title:"$webhookExists",description:"$webhookExists v\xe9rifiera si un webhook existe.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/webhookExists.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/webhookExists",permalink:"/fr/docs/functions/info-related/webhookExists",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572839,formattedLastUpdatedAt:"13 sept. 2023",frontMatter:{title:"$webhookExists",description:"$webhookExists v\xe9rifiera si un webhook existe.",id:"webhookExists"},sidebar:"docs",previous:{title:"$voiceID",permalink:"/fr/docs/functions/info-related/voiceID"},next:{title:"$addApplicationCommandPermissions",permalink:"/fr/docs/functions/interaction-related/addApplicationCommandPermissions"}},h={},v=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],y={toc:v},g="wrapper";function w(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(g,d(u(u({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$webhookExists")," v\xe9rifiera si un webhook existe."),(0,n.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$webhookExists[ID;token]\n")),(0,n.kt)("h2",u({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ID"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Identifiant du Webhook."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"token"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Token du webhook."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")))),(0,n.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Cela v\xe9rifiera si le Webhook existe :"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'webhookExists',\n    code: `\n  \n  $webhookExists[$splitText[1];$splitText[2]]\n  $textSplit[$createWebhook[$channelID;aoi.js est g\xe9nial;$userAvatar[$authorID];Simplement entrain de tester.;, ];, ]\n  `\n});\n")))}w.isMDXComponent=!0}}]);