"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[16915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),y=o,d=m["".concat(l,".").concat(y)]||m[y]||p[y]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},15583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>w,frontMatter:()=>d,metadata:()=>b,toc:()=>h});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&u(e,n,t[n]);return e},p=(e,t)=>a(e,i(t)),y=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const d={title:"Introduction",description:"What are Community Extensions and how you are able to create one.",id:"community-extensions"},f=void 0,b={unversionedId:"community/community-extensions",id:"community/community-extensions",title:"Introduction",description:"What are Community Extensions and how you are able to create one.",source:"@site/extensions/community/1introduction.md",sourceDirName:"community",slug:"/community/community-extensions",permalink:"/fr/extensions/community/community-extensions",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction",description:"What are Community Extensions and how you are able to create one.",id:"community-extensions"},sidebar:"docs",previous:{title:"Introduction",permalink:"/fr/extensions/official/aoi.db/aoidb-introduction"},next:{title:"Introduction of aoi.canvas",permalink:"/fr/extensions/community/aoi.canvas/introduction"}},v={},h=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Community Extensions",id:"community-extensions",level:2},{value:"Current Extensions",id:"current-extensions",level:3},{value:"Create your own Extension",id:"create-your-own-extension",level:2}],k={toc:h},x="wrapper";function w(e){var t=e,{components:n}=t,o=y(t,["components"]);return(0,r.kt)(x,p(m(m({},k),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",m({},{id:"table-of-contents"}),"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#community-extensions"}),"Community Extensions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#current-extensions"}),"Current Extensions")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#create-your-own-extension"}),"Create your own Extension"))),(0,r.kt)("hr",null),(0,r.kt)("h2",m({},{id:"community-extensions"}),"Community Extensions"),(0,r.kt)("p",null,"Community Extensions are a way to add more functionality to aoi.js which would normally not get added by aoi.js developers."),(0,r.kt)("h3",m({},{id:"current-extensions"}),"Current Extensions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://www.npmjs.com/package/aoi.canvas?activeTab=readme"}),"aoi.canvas@1.0.1-canva"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"aoi.canvas is a NPM package created by ",(0,r.kt)("a",m({parentName:"li"},{href:"https://discord.com/users/1096717977304453160"}),"devlordduck2")," which adds the ability to use canvas to aoi.js"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://www.npmjs.com/package/aoi.js-library?activeTab=readme"}),"aoi.js-library@1.0.1"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"aoi.js-library is a NPM package created by ",(0,r.kt)("a",m({parentName:"li"},{href:"https://discord.com/users/608358453580136499"}),"leref")," which adds the ability to load & create plugins to aoi.js.")))),(0,r.kt)("h2",m({},{id:"create-your-own-extension"}),"Create your own Extension"),(0,r.kt)("p",null,"Creating your very own extension is rather a task for an advanced user with javascript knowledge. "),(0,r.kt)("p",null,"You can still create Extensions for aoi.js and let us know about it! If it's useful you'll get your own section on this page."))}w.isMDXComponent=!0}}]);