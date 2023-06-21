"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[64562],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(t),f=r,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||l;return t?a.createElement(m,i(i({ref:n},s),{},{components:t})):a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},56127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const l={title:"$findChannel",description:"$findChannel will search a given channel by its name.",id:"findChannel"},i=void 0,o={unversionedId:"functions/util-related/findChannel",id:"version-6.2.6/functions/util-related/findChannel",title:"$findChannel",description:"$findChannel will search a given channel by its name.",source:"@site/versioned_docs/version-6.2.6/functions/util-related/findChannel.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/findChannel",permalink:"/docs/functions/util-related/findChannel",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Leref",lastUpdatedAt:1687324528,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$findChannel",description:"$findChannel will search a given channel by its name.",id:"findChannel"},sidebar:"docs",previous:{title:"$filterMessage",permalink:"/docs/functions/util-related/filterMessage"},next:{title:"$findGuildChannel",permalink:"/docs/functions/util-related/findGuildChannel"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],s={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$findChannel")," will search a given channel by its name."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$findChannel[channelResolver;returnSelf?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channelResolver"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the channel you want to search for."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"returnSelf?"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Will return the channel where the command is executed in by default if the given channel was not found."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"882360051640193054")," as it was able to find the ",(0,r.kt)("inlineCode",{parentName:"p"},"#\u2282\u30fb\u2283\ufe50aoi_v5")," channel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'findChannel',\n    code: `\n  $findChannel[\u2282\u30fb\u2283\ufe50aoi_v5;false]\n  `\n});\n")))}u.isMDXComponent=!0}}]);