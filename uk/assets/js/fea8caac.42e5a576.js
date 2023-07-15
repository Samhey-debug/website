"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[27911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>f,metadata:()=>y,toc:()=>O});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e},m=(e,t)=>o(e,i(t)),d=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$map"},v=void 0,y={unversionedId:"functions/map",id:"version-5.5.5/functions/map",title:"$map",description:"This function will map every text value in the specified text",source:"@site/versioned_docs/version-5.5.5/functions/map.md",sourceDirName:"functions",slug:"/functions/map",permalink:"/uk/docs/5.5.5/functions/map",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$map"},sidebar:"docs",previous:{title:"$lowestRole",permalink:"/uk/docs/5.5.5/functions/lowestrole"},next:{title:"$math",permalink:"/uk/docs/5.5.5/functions/math"}},b={},O=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],h={toc:O},g="wrapper";function k(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(g,m(u(u({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will map every text value in the specified text"),(0,r.kt)("h4",u({},{id:"fields"}),"Fields"),(0,r.kt)("p",null,"This function has 3 required fields"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Text ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Splitter ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Awaited Command ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Separator ","(","Options",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$map[text;splitter;awaitedCommand;separator (optional)]")),(0,r.kt)("h4",u({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Text - The text where the values are"),(0,r.kt)("li",{parentName:"ul"},"Splitter - The separator for each value"),(0,r.kt)("li",{parentName:"ul"},"Awaited Command - The awaited command name"),(0,r.kt)("li",{parentName:"ul"},"Separator - The separator that separates each value"),(0,r.kt)("li",{parentName:"ul"},"{value} - Used in the awaited command to get the value of each mapped element in the array")),(0,r.kt)("h4",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "map",\ncode: `$map[hi/hello/bye/goodbye;/;mapCmd;,]`\n})\n\nbot.awaitedCommand({\nname: "mapCmd",\ncode: `Values: {value}`\n})\n')))}k.isMDXComponent=!0}}]);