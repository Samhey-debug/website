"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[15651],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||l;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},18490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var r=t(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&u(e,t,n[t]);if(i)for(var t of i(n))d.call(n,t)&&u(e,t,n[t]);return e},s=(e,n)=>l(e,o(n)),m=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&d.call(e,r)&&(t[r]=e[r]);return t};const f={title:"$mentionedChannels",description:"$mentionedChannels devolver\xe1 el ID de un canal recuperado de la menci\xf3n.",id:"mentionedChannels"},v=void 0,y={unversionedId:"functions/util-related/mentionedChannels",id:"version-6.4.0/functions/util-related/mentionedChannels",title:"$mentionedChannels",description:"$mentionedChannels devolver\xe1 el ID de un canal recuperado de la menci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/mentionedChannels.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/mentionedChannels",permalink:"/es/docs/functions/util-related/mentionedChannels",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689963884,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$mentionedChannels",description:"$mentionedChannels devolver\xe1 el ID de un canal recuperado de la menci\xf3n.",id:"mentionedChannels"},sidebar:"docs",previous:{title:"$mentioned",permalink:"/es/docs/functions/util-related/mentioned"},next:{title:"$mentionedChannelsCount",permalink:"/es/docs/functions/util-related/mentionedChannelsCount"}},b={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],h={toc:g},k="wrapper";function O(e){var n=e,{components:t}=n,a=m(n,["components"]);return(0,r.kt)(k,s(p(p({},h),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$mentionedChannels")," devolver\xe1 el ID de un canal recuperado de la menci\xf3n."),(0,r.kt)("h2",p({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$mentionedChannels[index;returnSelf?]\n")),(0,r.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\xedndice"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"El \xedndice del argumento."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\xbfvolver a S\xed?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Devuelve el ID del canal donde el comando fue ejecutado cuando no se encontr\xf3 el canal."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"no")))),(0,r.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 el ID de la ",(0,r.kt)("strong",{parentName:"p"},"primera")," menci\xf3n si intenta mencionar cualquier canal en este comando, o devolver\xe1 el ID del canal en el que se ejecut\xf3 el comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'mentionedChannels',\n    code: `\n  $mentionedChannels[1;true]\n  `\n});\n")))}O.isMDXComponent=!0}}]);