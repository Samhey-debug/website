"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[96826],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),g=a,d=m["".concat(i,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},729:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>D,frontMatter:()=>d,metadata:()=>h,toc:()=>k});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>o(e,s(t)),g=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$messageWebhookID",description:"$messageWebhookID will return the ID of the webhook which sent the given message.",id:"messageWebhookID"},f=void 0,h={unversionedId:"functions/message-related/messageWebhookID",id:"version-6.4.0/functions/message-related/messageWebhookID",title:"$messageWebhookID",description:"$messageWebhookID will return the ID of the webhook which sent the given message.",source:"@site/versioned_docs/version-6.4.0/functions/message-related/messageWebhookID.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/messageWebhookID",permalink:"/fr/docs/functions/message-related/messageWebhookID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689963884,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$messageWebhookID",description:"$messageWebhookID will return the ID of the webhook which sent the given message.",id:"messageWebhookID"},sidebar:"docs",previous:{title:"$messageURL",permalink:"/fr/docs/functions/message-related/messageURL"},next:{title:"$pinMessage",permalink:"/fr/docs/functions/message-related/pinMessage"}},b={},k=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],y={toc:k},v="wrapper";function D(e){var t=e,{components:r}=t,a=g(t,["components"]);return(0,n.kt)(v,u(m(m({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$messageWebhookID")," will return the ID of the webhook which sent the given message."),(0,n.kt)("h2",m({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$messageWebhookID[messageID?;channelID?]\n")),(0,n.kt)("h2",m({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"messageID?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"ID of the message."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"channelID?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"ID of the message where the message is located in."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("h2",m({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,'This will return the ID of a webhook, make sure to replace "messageID" with an actual message ID sent from a webhook:'),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'messageWebhookID',\n    code: `\n  $messageWebhookID[messageID;$channelID] //replace messageID\n  `\n});\n")))}D.isMDXComponent=!0}}]);