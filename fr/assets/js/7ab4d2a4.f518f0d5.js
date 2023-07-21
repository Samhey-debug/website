"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[39960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},40771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>k,frontMatter:()=>m,metadata:()=>h,toc:()=>g});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>i(e,o(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$joinThread",description:"$joinThread fera que le bot rejoindra un fil de discussion sp\xe9cifique.",id:"joinThread"},b=void 0,h={unversionedId:"functions/interaction-related/joinThread",id:"version-6.4.0/functions/interaction-related/joinThread",title:"$joinThread",description:"$joinThread fera que le bot rejoindra un fil de discussion sp\xe9cifique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/joinThread.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/joinThread",permalink:"/fr/docs/functions/interaction-related/joinThread",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689963884,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$joinThread",description:"$joinThread fera que le bot rejoindra un fil de discussion sp\xe9cifique.",id:"joinThread"},sidebar:"docs",previous:{title:"$isAutoComplete",permalink:"/fr/docs/functions/interaction-related/isAutoComplete"},next:{title:"$killShard",permalink:"/fr/docs/functions/interaction-related/killShard"}},y={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],j={toc:g},v="wrapper";function k(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(v,u(d(d({},j),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$joinThread")," fera que le bot rejoindra un fil de discussion sp\xe9cifique."),(0,r.kt)("h2",d({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$joinThread[IDsalon;IDfil]\n")),(0,r.kt)("h2",d({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"IDsalon"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"L'ID du salon o\xf9 se trouve le fil de discussion ."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"IDfil"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"L'ID du fil de discussion ."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")))),(0,r.kt)("h2",d({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela va cr\xe9er un fil de discussion dans le salon actuel et ajouter le bot \xe0 celui-ci :"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'joinThread',\n    code: `\n  \n  $joinThread[$channelID;$get[IDthread]]\n  $let[IDthread;$createThread[$channelID;Exemple !;1440;public;$messageID;true]]\n  `\n});\n")))}k.isMDXComponent=!0}}]);