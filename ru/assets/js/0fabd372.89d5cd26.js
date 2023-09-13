"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40192],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=d(r),f=a,m=c["".concat(o,".").concat(f)]||c[f]||s[f]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:a,l[1]=u;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8230:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>N,frontMatter:()=>m,metadata:()=>b,toc:()=>k});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))d.call(t,r)&&p(e,r,t[r]);return e},s=(e,t)=>i(e,l(t)),f=(e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$isGuildMuted",description:"$isGuildMuted \u043f\u043e\u0445\u043e\u0436, \u043d\u043e \u043d\u0435 \u043f\u0443\u0442\u0430\u0442\u044c \u0441 `$isMuted`, \u044d\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0437\u0430\u0433\u043b\u0443\u0448\u0435\u043d \u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c.",id:"isGuildMuted"},y=void 0,b={unversionedId:"functions/util-related/isGuildMuted",id:"version-6.4.0/functions/util-related/isGuildMuted",title:"$isGuildMuted",description:"$isGuildMuted \u043f\u043e\u0445\u043e\u0436, \u043d\u043e \u043d\u0435 \u043f\u0443\u0442\u0430\u0442\u044c \u0441 `$isMuted`, \u044d\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0437\u0430\u0433\u043b\u0443\u0448\u0435\u043d \u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isGuildMuted.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isGuildMuted",permalink:"/ru/docs/functions/util-related/isGuildMuted",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572839,formattedLastUpdatedAt:"13 \u0441\u0435\u043d\u0442. 2023 \u0433.",frontMatter:{title:"$isGuildMuted",description:"$isGuildMuted \u043f\u043e\u0445\u043e\u0436, \u043d\u043e \u043d\u0435 \u043f\u0443\u0442\u0430\u0442\u044c \u0441 `$isMuted`, \u044d\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0437\u0430\u0433\u043b\u0443\u0448\u0435\u043d \u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c.",id:"isGuildMuted"},sidebar:"docs",previous:{title:"$isGuildDeafened",permalink:"/ru/docs/functions/util-related/isGuildDeafened"},next:{title:"$isHoisted",permalink:"/ru/docs/functions/util-related/isHoisted"}},g={},k=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],v={toc:k},O="wrapper";function N(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(O,s(c(c({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$isGuildMuted")," \u043f\u043e\u0445\u043e\u0436, \u043d\u043e \u043d\u0435 \u043f\u0443\u0442\u0430\u0442\u044c \u0441 ",(0,n.kt)("inlineCode",{parentName:"p"},"$isMuted"),", \u044d\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0437\u0430\u0433\u043b\u0443\u0448\u0435\u043d \u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c."),(0,n.kt)("h2",c({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$isGuildMuted[userID?;guildID?]\n")),(0,n.kt)("h2",c({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Nbg"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ID \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u0437\u0430\u0433\u043b\u0443\u0448\u0435\u043d \u043b\u0438 \u043e\u043d \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ID \u0433\u0438\u043b\u044c\u0434\u0438\u0438?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0433\u0438\u043b\u044c\u0434\u0438\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u0433\u043b\u0443\u0448\u0435\u043d."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")))),(0,n.kt)("h2",c({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,n.kt)("p",null,"\u042d\u0442\u043e \u0432\u0435\u0440\u043d\u0435\u0442 ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," \u0438\u043b\u0438 ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0437\u0430\u0433\u043b\u0443\u0448\u0435\u043d\u0438\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 \u043d\u0435\u0442:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isGuildMuted',\n    code: `\n  $isGuildMuted[$authorID;$guildID]\n  `\n});\n")))}N.isMDXComponent=!0}}]);