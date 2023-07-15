"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[45456],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),i=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=i(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=i(t),m=r,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77436:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>f,default:()=>O,frontMatter:()=>g,metadata:()=>b,toc:()=>k});var a=t(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&d(e,t,n[t]);if(s)for(var t of s(n))i.call(n,t)&&d(e,t,n[t]);return e},u=(e,n)=>l(e,o(n)),m=(e,n)=>{var t={};for(var a in e)c.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&s)for(var a of s(e))n.indexOf(a)<0&&i.call(e,a)&&(t[a]=e[a]);return t};const g={title:"$channelSendMessage",description:"$channelSendMessage enviar\xe1 un mensaje en un canal espec\xedfico.",id:"channelSendMessage"},f=void 0,b={unversionedId:"functions/message-related/channelSendMessage",id:"version-6.4.0/functions/message-related/channelSendMessage",title:"$channelSendMessage",description:"$channelSendMessage enviar\xe1 un mensaje en un canal espec\xedfico.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/message-related/channelSendMessage.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/channelSendMessage",permalink:"/es/docs/functions/message-related/channelSendMessage",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$channelSendMessage",description:"$channelSendMessage enviar\xe1 un mensaje en un canal espec\xedfico.",id:"channelSendMessage"},sidebar:"docs",previous:{title:"$addMessageReactions",permalink:"/es/docs/functions/message-related/addMessageReactions"},next:{title:"$deleteMessage",permalink:"/es/docs/functions/message-related/deleteMessage"}},v={},k=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2},{value:"Embeds",id:"embeds",level:3}],y={toc:k},h="wrapper";function O(e){var n=e,{components:t}=n,r=m(n,["components"]);return(0,a.kt)(h,u(p(p({},y),r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$channelSendMessage")," enviar\xe1 un mensaje en un canal espec\xedfico."),(0,a.kt)("h2",p({},{id:"modo-de-uso"}),"Modo de uso"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$channelSendMessage[canalID;contenido;devolverID?]\n")),(0,a.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"canalID"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"A d\xf3nde se enviar\xe1 el mensaje."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"contenido"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Cu\xe1l debe ser el contenido del mensaje."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"devolverID?"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"booleano"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Si el ID del mensaje debe ser devuelto o no. ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"true")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"false")," (por defecto)"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,'Esto enviar\xe1 "\xa1Hola!" al canal actual:'),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'channelSendMessage',\n    code: `\n  $channelSendMessage[$channelID;\xa1Hola!!;false]\n  `\n});\n")),(0,a.kt)("h3",p({},{id:"embeds"}),"Embeds"),(0,a.kt)("p",null,"Esto enviar\xe1 un embed con descripci\xf3n y footer al canal actual:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'channelSendMessage',\n    code: `\n  $channelSendMessage[$channelID;{newEmbed:{title:Hola}{footer:Adios}};false]\n  `\n});\n")))}O.isMDXComponent=!0}}]);