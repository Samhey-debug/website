"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[24163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Yes or no command",description:"Yes or no command",authors:{name:"@dodogames",title:"Member",url:"https://discord.com/users/632607624742961153",image_url:"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},c=void 0,s={permalink:"/wikis/posts/yes-or-no-command-0s8eh9",source:"@site/forums/posts/yes-or-no-command-0s8eh9.md",title:"Yes or no command",description:"Yes or no command",date:"2023-06-24T06:06:02.000Z",formattedDate:"June 24, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@dodogames",title:"Member",url:"https://discord.com/users/632607624742961153",image_url:"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png",imageURL:"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png"}],frontMatter:{title:"Yes or no command",description:"Yes or no command",authors:{name:"@dodogames",title:"Member",url:"https://discord.com/users/632607624742961153",image_url:"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png",imageURL:"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Unicode character unescape",permalink:"/wikis/posts/unicode-character-unescape-0k0txb"}},i={authorsImageUrls:[void 0]},p=[{value:"Content",id:"content",level:2}],l={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Most ridiculous command (in my opinion) made for fun purposes."),(0,o.kt)("h2",{id:"content"},"Content"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\nname: "yesorno",\ncode: `> $message\n*$randomText[yes;no]*\n$cooldown[5s; Slow down! Don\'t spam the command!\nTime left: \\`%time%\\`]\n$onlyIf[$message!=;Please Ask me a question to answer you.]`\n}\n')))}d.isMDXComponent=!0}}]);