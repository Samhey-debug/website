"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[66390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>N,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"aoi.js Introduction",description:"The beginning process of how to use aoi.js and all its features.",slug:"/"},b=void 0,g={unversionedId:"introduction/introduction",id:"version-6.4.0/introduction/introduction",title:"aoi.js Introduction",description:"The beginning process of how to use aoi.js and all its features.",source:"@site/versioned_docs/version-6.4.0/introduction/introduction.md",sourceDirName:"introduction",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572839,formattedLastUpdatedAt:"Sep 13, 2023",frontMatter:{title:"aoi.js Introduction",description:"The beginning process of how to use aoi.js and all its features.",slug:"/"},sidebar:"docs",next:{title:"Setup",permalink:"/docs/guides/setup"}},k={},y=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"Disclaimer",id:"disclaimer",level:2},{value:"Links",id:"links",level:2}],v=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",c({},t))},j=v("Tabs"),h=v("TabItem"),O={toc:y},w="wrapper";function N(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(w,d(c(c({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",c({parentName:"p"},{src:"https://github.com/aoijs/website/blob/main/assets/images/aoijs-banner.png?raw=true",alt:"aoijs"}))),(0,r.kt)("h2",c({},{id:"features"}),"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Built-in support of ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",c({parentName:"strong"},{href:"https://www.npmjs.com/package/@akarui/aoi.db"}),"database"))," by default and ready for multipurpose."),(0,r.kt)("li",{parentName:"ul"},"Built-in ",(0,r.kt)("strong",{parentName:"li"},"630+")," functions, simple and easy to learn."),(0,r.kt)("li",{parentName:"ul"},"Simple to learn, all in string-based and compact."),(0,r.kt)("li",{parentName:"ul"},"Support of extensions available to be used by the community.")),(0,r.kt)("h2",c({},{id:"installation"}),"Installation"),(0,r.kt)(j,{groupId:"pref-install",mdxType:"Tabs"},(0,r.kt)(h,{value:"i-npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"node.js 16.9.0 or newer is required.")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"npm install aoi.js\n"))),(0,r.kt)(h,{value:"i-yarn",label:"yarn",mdxType:"TabItem"},(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"node.js 16.9.0 or newer is required.")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"yarn add aoi.js\n")))),(0,r.kt)("h2",c({},{id:"setup"}),"Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'}),'const {AoiClient} = require("aoi.js");\n\nconst bot = new AoiClient({\n    token: "DISCORD BOT TOKEN",\n    prefix: "DISCORD BOT PREFIX",\n    intents: ["MessageContent", "Guilds", "GuildMessages"],\n    events: ["onMessage"],\n    database: {\n        type: "aoi.db",\n        db: require("@akarui/aoi.db"),\n        tables: ["main"],\n        path: "./database/",\n        extraOptions: {\n            dbType: "KeyValue"\n        }\n    }\n});\n\n// Ping Command\nbot.command({\n    name: "ping",\n    code: `Pong! $pingms`\n});\n')),(0,r.kt)("h2",c({},{id:"disclaimer"}),"Disclaimer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",c({parentName:"strong"},{href:"https://www.npmjs.com/package/aoi.js"}),"Aoi.js"))," is not affiliated or associated with Discord or any other services."),(0,r.kt)("h2",c({},{id:"links"}),"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://aoi.js.org"}),"Website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://www.npmjs.com/package/aoi.js"}),"NPM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/AkaruiDevelopment/aoi.js"}),"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://aoi.js.org/invite"}),"Discord Support Server"))))}N.isMDXComponent=!0}}]);