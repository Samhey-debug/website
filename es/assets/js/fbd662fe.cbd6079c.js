"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[96889],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(a),k=n,c=p["".concat(o,".").concat(k)]||p[k]||u[k]||l;return a?r.createElement(c,i(i({ref:t},d),{},{components:a})):r.createElement(c,i({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},73550:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>P,frontMatter:()=>c,metadata:()=>N,toc:()=>h});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&d(e,a,t[a]);if(s)for(var a of s(t))m.call(t,a)&&d(e,a,t[a]);return e},u=(e,t)=>l(e,i(t)),k=(e,t)=>{var a={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a};const c={title:"$hasPerms",description:"$hasPerms will check if the user has the required permission.",id:"hasPerms"},g=void 0,N={unversionedId:"functions/util-related/hasPerms",id:"version-6.4.0/functions/util-related/hasPerms",title:"$hasPerms",description:"$hasPerms will check if the user has the required permission.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/hasPerms.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/hasPerms",permalink:"/es/docs/functions/util-related/hasPerms",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$hasPerms",description:"$hasPerms will check if the user has the required permission.",id:"hasPerms"},sidebar:"docs",previous:{title:"$hasEmbeds",permalink:"/es/docs/functions/util-related/hasEmbeds"},next:{title:"$hasPermsInChannel",permalink:"/es/docs/functions/util-related/hasPermsInChannel"}},b={},h=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:h},v="wrapper";function P(e){var t=e,{components:a}=t,n=k(t,["components"]);return(0,r.kt)(v,u(p(p({},y),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$hasPerms")," will check if the user has the required permission."),(0,r.kt)("h2",p({},{id:"modo-de-uso"}),"Modo de uso"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$hasPerms[guildID;userID;...perms]\n")),(0,r.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"guildID"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID of the guild where the client checks the permissions."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"s\xed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"usarioID"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID of the user."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"...permisos"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permissions."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"s\xed")))),(0,r.kt)("details",null,(0,r.kt)("summary",null," ",(0,r.kt)("h3",null," Permisos de la API de Discord ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Permisos"),(0,r.kt)("th",p({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"createinvite"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para crear invitaciones de servidor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"kickmembers"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para expulsar a miembros del servidor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"banmembers"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para banear a miembros del servidor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"administrator"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permisos de administrador")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"managechannels"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para gestionar canales de servidor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"manageguild"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permisos para modificar los ajustes del servidor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"addreactions"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permisos para a\xf1adir reacciones")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"viewauditlog"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para ver el registro de auditor\xeda del servidor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"priorityspeaker"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Prioridad de palabra")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"stream"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para transmitir en canales de voz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"viewchannel"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para ver un canal determinado")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"sendmessages"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para enviar mensajes en un canal determinado")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"sendttsmessages"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para enviar mensajes de texto a voz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"managemessages"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para gestionar mensajes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"embedlinks"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para insertar enlaces")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"attachfiles"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para adjuntar archivos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"readmessagehistory"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para leer el historial de mensajes dentro de un canal determinado")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"mentioneveryone"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission to mention ",(0,r.kt)("inlineCode",{parentName:"td"},"@everyone")," and all roles")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"useexternalemojis"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para utilizar emojis externos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"viewguildinsights"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para ver la informaci\xf3n del servidor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"connect"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para conectarse a canales de voz y stages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"mutemembers"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para silenciar a los miembros en los canales de voz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"deafenmembers"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para ensordecer a los miembros en los canales de voz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"movemembers"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para mover miembros entre canales de voz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"usevad"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para utilizar la detecci\xf3n de actividad vocal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"changenickname"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para cambiar su propio apodo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"managenicknames"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para gestionar los apodos de otros miembros")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"manageroles"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para gestionar roles")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"managewebhooks"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para gestionar webhooks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"manageemojisandstickers"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para gestionar emojis y stickers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"useapplicationcommands"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para utilizar comandos de aplicaci\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"requesttospeak"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para utilizar la petici\xf3n de palabra por stages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"manageevents"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para gestionar eventos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"managethreads"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para gestionar hilos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"usepublicthreads"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para utilizar hilos p\xfablicos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"useprivatethreads"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para utilizar hilos privados")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"createpublicthreads"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para crear hilos p\xfablicos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"createprivatethreads"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para crear hilos privados")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"useexternalstickers"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para utilizar stickers extrernales")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"sendmessagesinthreads"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para enviar mensajes en hilos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"useembeddedactivities"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para iniciar actividades en los canales de voz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"moderatemembers"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permiso para reducir y eliminar el tiempo de aislar de los miembros del servidor"))))),(0,r.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when the author has ",(0,r.kt)("inlineCode",{parentName:"p"},"kick")," permissions and return ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," when they don't have those:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'hasPerms',\n    code: `\n  $hasPerms[$guildID;$authorID;kick]\n  `\n});\n")))}P.isMDXComponent=!0}}]);