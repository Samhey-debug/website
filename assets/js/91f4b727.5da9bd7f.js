"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[25551],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},15426:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"How to use textSplit",description:"i tryed to show the best example :) ( is a basic example to use textSplit... )",authors:{name:"@Artz_",title:"Member",url:"https://discord.com/users/1079517122822152272",image_url:"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,s={permalink:"/wikis/posts/how-to-use-textsplit-rah5re",source:"@site/forums/posts/how-to-use-textsplit-rah5re.md",title:"How to use textSplit",description:"i tryed to show the best example :) ( is a basic example to use textSplit... )",date:"2023-06-22T05:44:29.000Z",formattedDate:"June 22, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@Artz_",title:"Member",url:"https://discord.com/users/1079517122822152272",image_url:"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png",imageURL:"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png"}],frontMatter:{title:"How to use textSplit",description:"i tryed to show the best example :) ( is a basic example to use textSplit... )",authors:{name:"@Artz_",title:"Member",url:"https://discord.com/users/1079517122822152272",image_url:"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png",imageURL:"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Botinfo command",permalink:"/wikis/posts/botinfo-command-sr2wtw"},nextItem:{title:"HowGamer command",permalink:"/wikis/posts/howgamer-command-ic9vu7"}},p={authorsImageUrls:[void 0]},l=[],c={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"$splitText[2] // returns Artz_ ( b => Artz_ )\n$editTextSplitElement[2;Artz_]\n$splitText[$random[1;$getTextSplitLength]] // returns random letter inserted in textSplit\n$joinSplitText[ - ] // returns b - c - d\n$removeSplitTextElement[1]\n$joinSplitText[ - ] // returns a - b - c - d\n$splitText[1] // returns a\n$textSplit[a|b|c|d;|]\n")))}u.isMDXComponent=!0}}]);