"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97242],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73684:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>v,toc:()=>k});var n=a(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&c(e,a,t[a]);return e},u=(e,t)=>o(e,l(t)),m=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a};const f={title:"$loop",description:"$loop ejecutar\xe1 comandos esperados una cantidad determinada de veces.",id:"loop"},g=void 0,v={unversionedId:"functions/misc-related/loop",id:"version-6.4.0/functions/misc-related/loop",title:"$loop",description:"$loop ejecutar\xe1 comandos esperados una cantidad determinada de veces.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/loop.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/loop",permalink:"/es/docs/functions/misc-related/loop",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689963884,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$loop",description:"$loop ejecutar\xe1 comandos esperados una cantidad determinada de veces.",id:"loop"},sidebar:"docs",previous:{title:"$lerefAvatar",permalink:"/es/docs/functions/misc-related/lerefAvatar"},next:{title:"$map",permalink:"/es/docs/functions/misc-related/map"}},b={},k=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:k},j="wrapper";function O(e){var t=e,{components:a}=t,r=m(t,["components"]);return(0,n.kt)(j,u(d(d({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"$loop ejecutar\xe1 comandos esperados una cantidad determinada de veces."),(0,n.kt)("h2",d({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$loop[tiempo;esperar datos;...comandos esperados]\n")),(0,n.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"tiempo"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Con qu\xe9 frecuencia ejecutar el bucle."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"esperar datos"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"objeto"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Datos esperados."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"...Cmds esperados"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Comando esperado para ejecutar."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")))),(0,n.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto ejecutar\xe1 un bucle que editar\xe1 el mensaje enviado 5 veces con el contenido dado en ",(0,n.kt)("inlineCode",{parentName:"p"},"awaitData"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "loop",\n    code: `\n    $loop[5;{ "message": "$get[messageID]", "channel": "$channelID" };editMessage]\n    $let[messageID;$sendMessage[mi ping es: $pingMS;true]]\n    `\n});\n')),(0,n.kt)("p",null,"Utilizamos ",(0,n.kt)("inlineCode",{parentName:"p"},"$awaitData")," para recuperar las propiedades dadas en el campo ",(0,n.kt)("inlineCode",{parentName:"p"},"awaitData")," que se encuentra en el comando de bucle."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.awaitedCommand({\n    name: "editMessage",\n    code: `\n    $editMessage[$awaitData[message];$pingMS;$awaitData[channel]]\n    $wait[5s]\n    `\n});\n')))}O.isMDXComponent=!0}}]);