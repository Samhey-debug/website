"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[93867],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,b=u["".concat(d,".").concat(m)]||u[m]||s[m]||l;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},20871:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>k,default:()=>h,frontMatter:()=>b,metadata:()=>v,toc:()=>g});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&c(e,a,t[a]);if(i)for(var a of i(t))p.call(t,a)&&c(e,a,t[a]);return e},s=(e,t)=>l(e,o(t)),m=(e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const b={title:"$oldMember",description:"$oldMember contiene datos para el miembro antes de que se actualizara, esto es del cach\xe9 de discordia y puede estar vac\xedo dependiendo de si est\xe1 en cach\xe9, as\xed que use la opci\xf3n parcial antes de intentar acceder a cualquier propiedad.\n (memberUpdate evento)",id:"oldMember"},k=void 0,v={unversionedId:"functions/event-related/oldMember",id:"version-6.4.0/functions/event-related/oldMember",title:"$oldMember",description:"$oldMember contiene datos para el miembro antes de que se actualizara, esto es del cach\xe9 de discordia y puede estar vac\xedo dependiendo de si est\xe1 en cach\xe9, as\xed que use la opci\xf3n parcial antes de intentar acceder a cualquier propiedad.\n (memberUpdate evento)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/oldMember.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/oldMember",permalink:"/es/docs/functions/event-related/oldMember",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$oldMember",description:"$oldMember contiene datos para el miembro antes de que se actualizara, esto es del cach\xe9 de discordia y puede estar vac\xedo dependiendo de si est\xe1 en cach\xe9, as\xed que use la opci\xf3n parcial antes de intentar acceder a cualquier propiedad.\n (memberUpdate evento)",id:"oldMember"},sidebar:"docs",previous:{title:"$oldGuild",permalink:"/es/docs/functions/event-related/oldGuild"},next:{title:"$oldMessage",permalink:"/es/docs/functions/event-related/oldMessage"}},f={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Opciones",id:"opciones",level:3},{value:"Ejemplo(s)",id:"ejemplos",level:2}],N={toc:g},y="wrapper";function h(e){var t=e,{components:a}=t,r=m(t,["components"]);return(0,n.kt)(y,s(u(u({},N),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$oldMember")," contiene datos para el miembro antes de que se actualizara, esto es del cach\xe9 de discord y puede estar vac\xedo dependiendo de si est\xe1 en cach\xe9, as\xed que use la opci\xf3n parcial antes de intentar acceder a cualquier propiedad. (memberUpdate evento)"),(0,n.kt)("h2",u({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$oldMember[opci\xf3n]\n")),(0,n.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"opci\xf3n"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Opci\xf3n a recuperar."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")))),(0,n.kt)("h3",u({},{id:"opciones"}),"Opciones"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Devuelve el ID de usuario.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Devuelve el nombre del usuario.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"roles"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Devuelve roles de usuario.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"permissions"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Devuelve los permisos de usuario.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"nick"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Devuelve el apodo del usuario.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"highestRoleID"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Devuelve el usuario Higher role ID.")))),(0,n.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Nota: necesitas la intenci\xf3n ",(0,n.kt)("inlineCode",{parentName:"strong"},"GuildMembers")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),'bot.memberUpdateCommand({\n    channel: "channelid",\n    code: `\n    $username[$newMember[id]] ha actualizado su apodo!\n- Nuevo apodo: $newMember[nick]\n - Apodo antiguo: $oldMember[nick]\n\n   $username[$newMember[id]] ha actualizado su nombre!\n- Nuevo nombre: $newMember[name]\n - Viejo nombre: $oldMember[name]`\n})\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Este c\xf3digo se ejecutar\xe1 cuando ",(0,n.kt)("strong",{parentName:"li"},"miembro actualice su apodo de gremio o nombre de usuario de discordia"))),(0,n.kt)("hr",null))}h.isMDXComponent=!0}}]);