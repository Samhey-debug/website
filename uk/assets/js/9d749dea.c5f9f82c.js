"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5113],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72375:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>l(e,o(t)),d=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$clearReaction",description:"$clearReaction will remove a given reaction of a message of a given user.",id:"clearReaction"},g=void 0,v={unversionedId:"functions/interaction-related/clearReaction",id:"version-6.4.0/functions/interaction-related/clearReaction",title:"$clearReaction",description:"$clearReaction will remove a given reaction of a message of a given user.",source:"@site/versioned_docs/version-6.4.0/functions/interaction-related/clearReaction.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/clearReaction",permalink:"/uk/docs/functions/interaction-related/clearReaction",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1694572839,formattedLastUpdatedAt:"13 \u0432\u0435\u0440. 2023 \u0440.",frontMatter:{title:"$clearReaction",description:"$clearReaction will remove a given reaction of a message of a given user.",id:"clearReaction"},sidebar:"docs",previous:{title:"$clear",permalink:"/uk/docs/functions/interaction-related/clear"},next:{title:"$clearReactions",permalink:"/uk/docs/functions/interaction-related/clearReactions"}},k={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],y={toc:b},h="wrapper";function N(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(h,m(u(u({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$clearReaction")," will remove a given reaction of a message of a given user."),(0,n.kt)("h2",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$clearReaction[channelID;messageID;userID;emoji]\n")),(0,n.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"channelID"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The channel ID of where the message is located in."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"messageID"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The message ID."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"userID"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The user ID of the user whose reactions shall be removed."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"emoji"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The exact emoji to remove. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"all")," (default) ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"emoji")," - any emoji"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"true")))),(0,n.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will add and remove the bot's reaction after two seconds:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'clearReaction',\n    code: `\n  $clearReaction[$channelID;$messageID;$clientID;\ud83e\udd71]\n  $wait[2s]\n  $addCmdReactions[\ud83e\udd71]\n  `\n});\n")))}N.isMDXComponent=!0}}]);