"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[55189],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},34350:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"Ping Command",description:"This is an example of a ping command",authors:"faf4a",tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,p={permalink:"/wikis/posts/ping",source:"@site/forums/posts/ping.md",title:"Ping Command",description:"This is an example of a ping command",date:"2023-06-21T05:15:28.000Z",formattedDate:"June 21, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"}],hasTruncateMarker:!1,authors:[{name:"@faf4a",tags:["Community Manager","Staff"],title:"Community Manager & Documentation Maintainer",url:"https://discord.com/users/428188716641812481",imageURL:"https://cdn.discordapp.com/avatars/428188716641812481/635c1dca728b68c2fa329dbcb3330204.png",key:"faf4a"}],frontMatter:{title:"Ping Command",description:"This is an example of a ping command",authors:"faf4a",tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Long Serverinfo command",permalink:"/wikis/posts/long-serverinfo-command-iiwq2"},nextItem:{title:"randomText advanced",permalink:"/wikis/posts/randomtext-advanced-xzyzwx"}},l={authorsImageUrls:[void 0]},c=[],s={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Lovely ping example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n  name: "ping",\n  code: `\nMy ping is $pingMS!\n$reply`\n}];\n')),(0,a.kt)("p",null,"Enjoy!"))}u.isMDXComponent=!0}}]);