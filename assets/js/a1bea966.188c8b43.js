"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[27058],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(r),u=o,b=p["".concat(s,".").concat(u)]||p[u]||m[u]||a;return r?n.createElement(b,c(c({ref:t},l),{},{components:r})):n.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var d=2;d<a;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},25317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={title:"Random Country",description:"A code for get information about a random code.",authors:{name:"@jollyjolli",title:"Member",url:"https://discord.com/users/166181471369953280",image_url:"https://cdn.discordapp.com/avatars/166181471369953280/756c4e1baec28426d72e988091dbc5c6.png?size=1024"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},c=void 0,i={permalink:"/wikis/posts/random-country-p2o9s",source:"@site/forums/posts/random-country-p2o9s.md",title:"Random Country",description:"A code for get information about a random code.",date:"2023-06-22T02:17:38.000Z",formattedDate:"June 22, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@jollyjolli",title:"Member",url:"https://discord.com/users/166181471369953280",image_url:"https://cdn.discordapp.com/avatars/166181471369953280/756c4e1baec28426d72e988091dbc5c6.png?size=1024",imageURL:"https://cdn.discordapp.com/avatars/166181471369953280/756c4e1baec28426d72e988091dbc5c6.png?size=1024"}],frontMatter:{title:"Random Country",description:"A code for get information about a random code.",authors:{name:"@jollyjolli",title:"Member",url:"https://discord.com/users/166181471369953280",image_url:"https://cdn.discordapp.com/avatars/166181471369953280/756c4e1baec28426d72e988091dbc5c6.png?size=1024",imageURL:"https://cdn.discordapp.com/avatars/166181471369953280/756c4e1baec28426d72e988091dbc5c6.png?size=1024"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Ping Command",permalink:"/wikis/posts/ping"},nextItem:{title:"randomText advanced",permalink:"/wikis/posts/randomtext-advanced-xzyzwx"}},s={authorsImageUrls:[void 0]},d=[],l={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\nname: "Random Country",\naliases: ["rc"],\ncode: `\n$title[1;$getObjectProperty[countries[$random[0;250]].name_en]]\n$addField[1;TLD;$getObjectProperty[countries[$random[0;250]].tld];true]\n$addField[1;ISO Code (v2);$getObjectProperty[countries[$random[0;250]].code_3];true]\n$addField[1;ISO Code (v1);$getObjectProperty[countries[$random[0;250]].code_2];true]\n$addField[1;Capital;$getObjectProperty[countries[$random[0;250]].capital_es];true]\n$addField[1;Dial Code;$getObjectProperty[countries[$random[0;250]].dial_code];true]\n$addField[1;Continent;$getObjectProperty[countries[$random[0;250]].continent_en];true] \n$image[1;https://flagcdn.com/w2560/$tolowercase[$getObjectProperty[countries[$random[0;250]].code_2]].jpg]\n$footer[1;Code By $getObjectProperty[by]]\n$color[$getUserVar[PFcolor]]\n$createObject[$jsonRequest[https://www.jsonkeeper.com/b/L23E]]`\n}];\n')))}m.isMDXComponent=!0}}]);