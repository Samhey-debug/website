"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[6818],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,f=d["".concat(u,".").concat(c)]||d[c]||p[c]||o;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5216:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"$timeoutData",description:"$timeoutData holds data for $setTimeout data parameters, this will be empty if used outside timeoutCommand codes.",id:"timeoutData"},i=void 0,l={unversionedId:"functions/event-related/timeoutData",id:"version-6.3.0/functions/event-related/timeoutData",title:"$timeoutData",description:"$timeoutData holds data for $setTimeout data parameters, this will be empty if used outside timeoutCommand codes.",source:"@site/versioned_docs/version-6.3.0/functions/event-related/timeoutData.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/timeoutData",permalink:"/docs/functions/event-related/timeoutData",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688307888,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"$timeoutData",description:"$timeoutData holds data for $setTimeout data parameters, this will be empty if used outside timeoutCommand codes.",id:"timeoutData"},sidebar:"docs",previous:{title:"$textInputValue",permalink:"/docs/functions/event-related/textInputValue"},next:{title:"$webhookUpdate",permalink:"/docs/functions/event-related/webhookUpdate"}},u={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],m={toc:s},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$timeoutData")," holds data for $setTimeout data parameters, this will be empty if used outside timeoutCommand codes."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$timeoutData[option]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"option"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout Data option name."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,'This will send "Hello!" after 10 seconds in the command execution channel:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "setTimeout",\n    code: `\n    $setTimeout[timeoutCommand;10s;{"channelID": "$channelID", "authorID": "$authorID"};false]\n    `\n});\n\nbot.timeoutCommand({\n    name: "timeoutCommand",\n    code: `\n    $channelSendMessage[$timeoutData[channelID];Hello, <@$timeoutData[authorID]>!]\n    `\n});\n')))}p.isMDXComponent=!0}}]);