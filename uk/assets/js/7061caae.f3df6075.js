"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[93954],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,b=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return t?r.createElement(b,s(s({ref:n},p),{},{components:t})):r.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29496:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>d,default:()=>w,frontMatter:()=>b,metadata:()=>g,toc:()=>h});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&p(e,t,n[t]);if(i)for(var t of i(n))c.call(n,t)&&p(e,t,n[t]);return e},f=(e,n)=>a(e,s(n)),m=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t};const b={title:"$messagePublish"},d=void 0,g={unversionedId:"functions/messagepublish",id:"version-5.5.5/functions/messagepublish",title:"$messagePublish",description:"This function will publish the message \\(Only works in announcement channels\\)",source:"@site/versioned_docs/version-5.5.5/functions/messagepublish.md",sourceDirName:"functions",slug:"/functions/messagepublish",permalink:"/uk/docs/5.5.5/functions/messagepublish",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$messagePublish"},sidebar:"docs",previous:{title:"$messagePing",permalink:"/uk/docs/5.5.5/functions/messageping"},next:{title:"$messageSlice",permalink:"/uk/docs/5.5.5/functions/messageslice"}},y={},h=[],O={toc:h},v="wrapper";function w(e){var n=e,{components:t}=n,o=m(n,["components"]);return(0,r.kt)(v,f(u(u({},O),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will publish the message ","(","Only works in announcement channels",")"),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$messagePublish[Channel ID (Optional);Message ID (Optional)]")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: \"publish\",\n    code: `\n$messagePublish\nHello!\n    `\n})\n/**\n* With this the bot will send a message saying\n* 'Hello!'\n* And once the message was sent it will publish it\n* Sending it to every server who follows that\n* Announcements channel.\n*/\n")))}w.isMDXComponent=!0}}]);