"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[33115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,d=s["".concat(p,".").concat(m)]||s[m]||f[m]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>O,frontMatter:()=>d,metadata:()=>g,toc:()=>b});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&c(e,n,t[n]);return e},f=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$volume",description:"Changes volume for current playing song."},v=void 0,g={unversionedId:"functions/volume",id:"version-5.5.5/functions/volume",title:"$volume",description:"Changes volume for current playing song.",source:"@site/versioned_docs/version-5.5.5/functions/volume.md",sourceDirName:"functions",slug:"/functions/volume",permalink:"/tr/docs/5.5.5/functions/volume",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$volume",description:"Changes volume for current playing song."},sidebar:"docs",previous:{title:"$voiceID",permalink:"/tr/docs/5.5.5/functions/voiceid"},next:{title:"$wait",permalink:"/tr/docs/5.5.5/functions/wait"}},y={},b=[{value:"Usage",id:"usage",level:3},{value:"Field",id:"field",level:3},{value:"Footnote",id:"footnote",level:6},{value:"Example",id:"example",level:2}],k={toc:b},h="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(h,f(s(s({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function can change the volume of the current playing song. The minimum number is 0 and the highest number is what ever you want~"),(0,r.kt)("h3",s({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$volume[volume of audio?]\n")),(0,r.kt)("h3",s({},{id:"field"}),"Field"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"volume of audio?"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"for increasing the playing audio's volume"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h6",s({},{id:"footnote"}),"Footnote"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"volume function itself returns the volume"),(0,r.kt)("sup",s({parentName:"p"},{id:"fnref-1"}),(0,r.kt)("a",s({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")))),(0,r.kt)("h2",s({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "volume",\n  code: `\n  $volume[50]\n  `\n});\n // Sets the volume to 50%\n')),(0,r.kt)("div",s({},{className:"footnotes"}),(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",s({parentName:"ol"},{id:"fn-1"}),"$volume",(0,r.kt)("a",s({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}O.isMDXComponent=!0}}]);