"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[16517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>l(e,o(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$sendTTS",description:"$sendTTS enverra un message de synth\xe8se vocale dans un salon donn\xe9.",id:"sendTTS"},g=void 0,y={unversionedId:"functions/interaction-related/sendTTS",id:"version-6.4.0/functions/interaction-related/sendTTS",title:"$sendTTS",description:"$sendTTS enverra un message de synth\xe8se vocale dans un salon donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/sendTTS.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/sendTTS",permalink:"/fr/docs/functions/interaction-related/sendTTS",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572839,formattedLastUpdatedAt:"13 sept. 2023",frontMatter:{title:"$sendTTS",description:"$sendTTS enverra un message de synth\xe8se vocale dans un salon donn\xe9.",id:"sendTTS"},sidebar:"docs",previous:{title:"$sendDm",permalink:"/fr/docs/functions/interaction-related/sendDm"},next:{title:"$setApplicationCommandPermissions",permalink:"/fr/docs/functions/interaction-related/setApplicationCommandPermissions"}},v={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:b},T="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(T,u(d(d({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$sendTTS")," enverra un message de synth\xe8se vocale dans un salon donn\xe9."),(0,r.kt)("h2",d({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$sendTTS[IDsalon;message;retournerID?]\n")),(0,r.kt)("h2",d({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"IDsalon"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"L'ID du salon o\xf9 le message de synth\xe8se vocale sera envoy\xe9."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"message"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Le contenu du message TTS."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"retournerID?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"bool\xe9en"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Renvoyer l'ID du message ?  ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"true")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"false")," (par d\xe9faut)"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"Faux")))),(0,r.kt)("h2",d({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Ceci enverra un message TTS dans le canal actuel :"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'sendTTS',\n    code: `\n   $sendTTS[$channelID;Bonjour !;false]\n  `\n});\n")))}O.isMDXComponent=!0}}]);