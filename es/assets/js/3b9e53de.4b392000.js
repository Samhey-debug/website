"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[11272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>j,frontMatter:()=>f,metadata:()=>b,toc:()=>v});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={title:"bot.onTypingStart",description:"An event that gets executed, if the bot sees someone typing in a text channel. To let the bot listen to the event, add one bot.onTypingStart() callback inside your main file."},y=void 0,b={unversionedId:"events/bot.ontypingstart",id:"version-5.5.5/events/bot.ontypingstart",title:"bot.onTypingStart",description:"An event that gets executed, if the bot sees someone typing in a text channel. To let the bot listen to the event, add one bot.onTypingStart() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.ontypingstart.md",sourceDirName:"events",slug:"/events/bot.ontypingstart",permalink:"/es/docs/5.5.5/events/bot.ontypingstart",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"bot.onTypingStart",description:"An event that gets executed, if the bot sees someone typing in a text channel. To let the bot listen to the event, add one bot.onTypingStart() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onRoleUpdate",permalink:"/es/docs/5.5.5/events/bot.onroleupdate"},next:{title:"bot.onUserUpdate",permalink:"/es/docs/5.5.5/events/bot.onuserupdate"}},g={},v=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4}],O={toc:v},h="wrapper";function j(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(h,d(u(u({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This callback will trigger when the bot sees someone typing."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("h4",u({},{id:"usage"}),"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.typingStartCommand({\nchannel: "ID", // (Optional)\ncode: `Your code`\n});\n')),(0,r.kt)("h4",u({},{id:"example-command"}),"Example Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.typingStartCommand({\nchannel: "836582026139664414",\ncode: `Hey! I see, you\'re typing? \ud83d\udc40\n`\n});\n')))}j.isMDXComponent=!0}}]);