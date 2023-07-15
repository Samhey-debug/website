"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[41937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"$joinVC",description:"$joinVC will make your bot join a specified voice channel.",id:"joinVC"},i=void 0,o={unversionedId:"official/aoi.music/functions/joinVC",id:"official/aoi.music/functions/joinVC",title:"$joinVC",description:"$joinVC will make your bot join a specified voice channel.",source:"@site/extensions/official/aoi.music/functions/joinVC.md",sourceDirName:"official/aoi.music/functions",slug:"/official/aoi.music/functions/joinVC",permalink:"/extensions/official/aoi.music/functions/joinVC",draft:!1,tags:[],version:"current",frontMatter:{title:"$joinVC",description:"$joinVC will make your bot join a specified voice channel.",id:"joinVC"},sidebar:"docs",previous:{title:"$hasPlayer",permalink:"/extensions/official/aoi.music/functions/hasPlayer"},next:{title:"$leaveVC",permalink:"/extensions/official/aoi.music/functions/leaveVC"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$joinVC")," will make your bot join a specified voice channel."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$joinVC[voiceID?;selfDeaf?;selfMute?;speaker?;audioPlayerType?;debug?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"voiceID?"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"voice channel id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selfDeaf?"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"deafen when joining Voice Channel ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"yes")," (default) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"no")),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selfMute?"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"mute when joining Voice Channel ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"no")," (default) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"yes")),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"speaker?"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"become speaker when joining Stage Channel ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"yes")," (default) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"no")),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audioPlayerType?"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"audio Player Type ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"default")," (default)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"debug?"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"enable debug (not recommended) ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"no")," (default) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"yes")),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You require ",(0,r.kt)("inlineCode",{parentName:"strong"},'intents: ["GuildVoiceStates"]')," in your main file.")),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will make your bot join the voice channel you're currently in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'joinVC',\n    code: `\n    $joinVC[$voiceID;yes;no;yes;default;no]\n  `\n});\n")))}m.isMDXComponent=!0}}]);