"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>h,frontMatter:()=>m,metadata:()=>g,toc:()=>v});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>i(e,a(t)),f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$description",description:"Add a embed description, to your message."},b=void 0,g={unversionedId:"functions/description",id:"version-5.5.5/functions/description",title:"$description",description:"Add a embed description, to your message.",source:"@site/versioned_docs/version-5.5.5/functions/description.md",sourceDirName:"functions",slug:"/functions/description",permalink:"/docs/5.5.5/functions/description",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"$description",description:"Add a embed description, to your message."},sidebar:"docs",previous:{title:"$deleteWebhook",permalink:"/docs/5.5.5/functions/deletewebhook"},next:{title:"$digitalFormat",permalink:"/docs/5.5.5/functions/digitalformat"}},y={},v=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],O={toc:v},k="wrapper";function h(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(k,u(d(d({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function adds an embed to your message"),(0,r.kt)("h4",d({},{id:"fields"}),"Fields"),(0,r.kt)("p",null,"This function has 2 fields"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Index ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Message ","(","Required",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$description[index;message]")),(0,r.kt)("h4",d({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Index - The field that allows the message to a seperate embed description"),(0,r.kt)("li",{parentName:"ul"},"Message - The message that goes into the embed description")),(0,r.kt)("h4",d({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "description", \ncode: `\n$description[1;Hello world!]` \n})\n')),(0,r.kt)("p",null,"You can use diffrent index for seperate embed description"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "multi-description",\ncode: `\n$description[1;Hi]\n$description[2;pogboi69 is pog]\n$description[3;69420]\n`\n})\n')))}h.isMDXComponent=!0}}]);