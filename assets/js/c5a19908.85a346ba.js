"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[26021],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,h=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[f]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>m,default:()=>w,frontMatter:()=>h,metadata:()=>y,toc:()=>b});var r=t(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&u(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&u(e,t,n[t]);return e},p=(e,n)=>i(e,o(n)),d=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const h={title:"$findChannel",description:"Retrieve the Channel ID, when writing the name of the Channel. (Global)"},m=void 0,y={unversionedId:"functions/findchannel",id:"version-5.5.5/functions/findchannel",title:"$findChannel",description:"Retrieve the Channel ID, when writing the name of the Channel. (Global)",source:"@site/versioned_docs/version-5.5.5/functions/findchannel.md",sourceDirName:"functions",slug:"/functions/findchannel",permalink:"/docs/5.5.5/functions/findchannel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"$findChannel",description:"Retrieve the Channel ID, when writing the name of the Channel. (Global)"},sidebar:"docs",previous:{title:"$filterMessage",permalink:"/docs/5.5.5/functions/filtermessage"},next:{title:"$findChars",permalink:"/docs/5.5.5/functions/findchars"}},v={},b=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],O={toc:b},g="wrapper";function w(e){var n=e,{components:t}=n,a=d(n,["components"]);return(0,r.kt)(g,p(f(f({},O),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the channel ID of the specified channel. Yes/No will determine if function returns current channel id ","(","yes",")"," or undefined ","(","no",")"," if no match was found. Default is yes"),(0,r.kt)("h4",f({},{id:"fields"}),"Fields"),(0,r.kt)("p",null,"This function has 1 required field"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Channel ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Return Current Channel ID ","(","Optional",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$findChannel[channel;returnCurrentChannel (yes/no) (optional)]")),(0,r.kt)("h4",f({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Channel - The channel we're finding. You can use name/id/mention"),(0,r.kt)("li",{parentName:"ul"},"Return Current Channel ID - Returns current channel id if no channel found")),(0,r.kt)("h4",f({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "channel",\ncode: `$findChannel[rubens-basement]`\n})\n')))}w.isMDXComponent=!0}}]);