"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[52616],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},92520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>g,default:()=>j,frontMatter:()=>m,metadata:()=>y,toc:()=>O});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&p(e,t,n[t]);if(c)for(var t of c(n))l.call(n,t)&&p(e,t,n[t]);return e},d=(e,n)=>a(e,s(n)),f=(e,n)=>{var t={};for(var r in e)i.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&l.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$sendMessage",description:"Sends a message to the current channel"},g=void 0,y={unversionedId:"functions/sendmessage",id:"version-5.5.5/functions/sendmessage",title:"$sendMessage",description:"Sends a message to the current channel",source:"@site/versioned_docs/version-5.5.5/functions/sendmessage.md",sourceDirName:"functions",slug:"/functions/sendmessage",permalink:"/fr/docs/5.5.5/functions/sendmessage",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"$sendMessage",description:"Sends a message to the current channel"},sidebar:"docs",previous:{title:"$sendDM",permalink:"/fr/docs/5.5.5/functions/senddm"},next:{title:"$sendTTS",permalink:"/fr/docs/5.5.5/functions/sendtts"}},b={},O=[],v={toc:O},h="wrapper";function j(e){var n=e,{components:t}=n,o=f(n,["components"]);return(0,r.kt)(h,d(u(u({},v),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function sends the ","<","message",">"," to the current channel"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$sendMessage[message;return message ID (yes/no)(required)]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "sendMessage",\ncode: `$sendMessage[aoi.js is awesome;no]\n//this will not send the message ID`\n})\n')))}j.isMDXComponent=!0}}]);