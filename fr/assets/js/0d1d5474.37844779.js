"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[20636],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),p=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},s="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),s=p(a),u=n,k=s["".concat(o,".").concat(u)]||s[u]||g[u]||l;return a?r.createElement(k,i(i({ref:e},d),{},{components:a})):r.createElement(k,i({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=u;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m[s]="string"==typeof t?t:n,i[1]=m;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},42834:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>b,contentTitle:()=>c,default:()=>v,frontMatter:()=>k,metadata:()=>N,toc:()=>f});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(t,e,a)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,s=(t,e)=>{for(var a in e||(e={}))o.call(e,a)&&d(t,a,e[a]);if(m)for(var a of m(e))p.call(e,a)&&d(t,a,e[a]);return t},g=(t,e)=>l(t,i(e)),u=(t,e)=>{var a={};for(var r in t)o.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&m)for(var r of m(t))e.indexOf(r)<0&&p.call(t,r)&&(a[r]=t[r]);return a};const k={title:"Message Formatting",description:"This page is covering all about message formatting.",id:"msgformatting"},c=void 0,N={unversionedId:"guides/other/msgformatting",id:"version-6.4.0/guides/other/msgformatting",title:"Message Formatting",description:"This page is covering all about message formatting.",source:"@site/versioned_docs/version-6.4.0/guides/other/4msgformatting.md",sourceDirName:"guides/other",slug:"/guides/other/msgformatting",permalink:"/fr/docs/guides/other/msgformatting",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"Message Formatting",description:"This page is covering all about message formatting.",id:"msgformatting"},sidebar:"docs",previous:{title:"Parser",permalink:"/fr/docs/guides/other/parser"},next:{title:"Character Escaping",permalink:"/fr/docs/guides/other/characterescaping"}},b={},f=[{value:"Markdown",id:"markdown",level:3},{value:"Unix Timestamp Formatting",id:"unix-timestamp-formatting",level:3}],h={toc:f},y="wrapper";function v(t){var e=t,{components:a}=e,n=u(e,["components"]);return(0,r.kt)(y,g(s(s({},h),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This page is about hyperlinks, markdown, what they do and how to use them.")),(0,r.kt)("admonition",s({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Discord is rolling out Masked Links & Markdown to Communities slowly, meaning you no longer require embeds or interactions to embed links!"),(0,r.kt)("p",{parentName:"admonition"},"Learn more about the changes on their official ",(0,r.kt)("a",s({parentName:"p"},{href:"https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-#h_01H53FJBNB9B5RT9M1M9V1EQ7W"}),"blog"),".")),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"TYPE"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"STRUCTURE"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"EXAMPLE"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"PREVIEW"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"User"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"<@USER_ID>"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"<@608358453580136499>"),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),(0,r.kt)("img",s({parentName:"td"},{src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/previews/msg-formatting/user.png",alt:"preview"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"User ","[DEPRECATED]"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"<@!USER_ID>"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"<@!608358453580136499>"),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),(0,r.kt)("img",s({parentName:"td"},{src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/previews/msg-formatting/user.png",alt:"preview"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Channel"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"<#CHANNEL_ID>"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"<#832704676096245800>"),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),(0,r.kt)("img",s({parentName:"td"},{src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/previews/msg-formatting/channel.png",alt:"preview"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Role"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"<@&ROLE_ID>"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"<@&774059181820870696>"),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),(0,r.kt)("img",s({parentName:"td"},{src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/previews/msg-formatting/role.png",alt:"preview"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Slash Command"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"</NAME:COMMAND_ID>"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"</help:1061818977933873282>"),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),(0,r.kt)("img",s({parentName:"td"},{src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/previews/msg-formatting/slash.png",alt:"preview"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Standard Emoji"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Unicode Characters"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u2764\ufe0f"),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Custom Emoji"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"<:NAME:ID>"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"<:lerefblob:1010320053687832586>"),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Custom Emoji (Animated)"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"<a:NAME:ID>"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"<a:b1nzy:392938283556143104>"),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Unix Timestamp"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"<t:TIMESTAMP>"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"<t:1619757519>"),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),(0,r.kt)("img",s({parentName:"td"},{src:"https://cdn.discordapp.com/attachments/1082168708866244648/1087796841053171833/wX6f10lPbNKAgAAAAASUVORK5CYII.png",alt:"img"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Unix Timestamp (Styled)"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"<t:TIMESTAMP:STYLE>"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"<t:1619757519:d>"),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),(0,r.kt)("img",s({parentName:"td"},{src:"https://cdn.discordapp.com/attachments/1082168708866244648/1087797013472612383/8fZajSBpMWcIIAAAAASUVORK5CYII.png",alt:"img"})))))),(0,r.kt)("h3",s({},{id:"markdown"}),"Markdown"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"TYPE"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"STRUCTURE"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"EXAMPLE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Big Header"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"#"," Text"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"#"," Hello World")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Medium Header"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"#","#"," Text"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"#","#"," Hello World")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Small Header"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"#","#","#"," Text"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"#","#","#"," Hello World")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Numbered Lists"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"1","."," Item ",(0,r.kt)("br",null)," 2","."," Item"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"1","."," Potato ",(0,r.kt)("br",null)," 2","."," Milk")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Bullet Lists"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"*"," Item ",(0,r.kt)("br",null)," ","*"," Item"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"*"," Discord ",(0,r.kt)("br",null)," ","*"," Twitter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Masked Links"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"[","Alt Text","]","(link)"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"[","aoi.js","]","(",(0,r.kt)("a",s({parentName:"td"},{href:"https://aoi.js.org"}),"https://aoi.js.org"),")")))),(0,r.kt)("h3",s({},{id:"unix-timestamp-formatting"}),"Unix Timestamp Formatting"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"STYLE"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"EXAMPLE OUTPUT"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"23:20"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Short Time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"T"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"23:20:30"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Long Time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"d"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"20/04/2021"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Short Date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"D"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"20 April 2021"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Long Date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"f"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"20 April 2021 23:20"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Short Date/Time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"F"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Tuesday, 20 April 2021 23:20"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Long Date/Time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"R"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"2 years ago"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Relative Time")))))}v.isMDXComponent=!0}}]);