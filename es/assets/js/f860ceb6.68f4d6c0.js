"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[37089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,v=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>O,frontMatter:()=>v,metadata:()=>g,toc:()=>b});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&u(e,n,t[n]);return e},s=(e,t)=>l(e,i(t)),m=(e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const v={title:"$createChannelInvite",description:"$createChannelInvite crear\xe1 una invitaci\xf3n al canal.",id:"createChannelInvite"},f=void 0,g={unversionedId:"functions/guild-related/createChannelInvite",id:"version-6.4.0/functions/guild-related/createChannelInvite",title:"$createChannelInvite",description:"$createChannelInvite crear\xe1 una invitaci\xf3n al canal.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/createChannelInvite.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/createChannelInvite",permalink:"/es/docs/functions/guild-related/createChannelInvite",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572839,formattedLastUpdatedAt:"13 sept 2023",frontMatter:{title:"$createChannelInvite",description:"$createChannelInvite crear\xe1 una invitaci\xf3n al canal.",id:"createChannelInvite"},sidebar:"docs",previous:{title:"$createChannel",permalink:"/es/docs/functions/guild-related/createChannel"},next:{title:"$createRole",permalink:"/es/docs/functions/guild-related/createRole"}},k={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2},{value:"Ejemplo(s) avanzado",id:"ejemplos-avanzado",level:3}],h={toc:b},y="wrapper";function O(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(y,s(d(d({},h),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$createChannelInvite")," devolver\xe1 todos los canales de una categor\xeda determinada."),(0,a.kt)("h2",d({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$createChannelInvite[canalID?;...opciones]\n")),(0,a.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"canalID?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"El ID del canal del cual se crear\xe1 la invitaci\xf3n."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"opciones?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"objeto"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Opciones de invitaci\xf3n."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h3",null," Invitar Tipos de Objetivo ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"TIPO"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"VALOR"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"STREAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"EMBEDDED_APPLICATION"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"2"))))),(0,a.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto crear\xe1 una invitaci\xf3n del canal donde se ejecuta el comando en:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'createChannelInvite',\n    code: `\n  $createChannelInvite[$channelID]\n  `\n});\n")),(0,a.kt)("h3",d({},{id:"ejemplos-avanzado"}),"Ejemplo(s) avanzado"),(0,a.kt)("p",null,"Crear invitaciones temporales con usos limitados:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'createChannelInvite\',\n    code: `\n  $createChannelInvite[$channelID;{\n            "temporary": true,\n            "maxAge": 650,\n            "maxUses": 25,\n            "unique": true\n  }]\n  `\n});\n')),(0,a.kt)("p",null,"Crear Invitaciones de Actividad:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'createChannelInvite\',\n    code: `\n  $createChannelInvite[voiceID;{\n            "targetApplication": "application ID",\n            "targetType": 2\n  }]\n  `\n});\n')))}O.isMDXComponent=!0}}]);