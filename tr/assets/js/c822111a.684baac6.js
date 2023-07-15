"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[30022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,h=s["".concat(c,".").concat(d)]||s[d]||f[d]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>k,frontMatter:()=>h,metadata:()=>m,toc:()=>g});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e},f=(e,t)=>l(e,o(t)),d=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const h={title:"$createChannel",description:"Creates a channel with given type (text/voice) and name. If fourth field is set to 'yes', the function will return the newly created channel ID."},y=void 0,m={unversionedId:"functions/createchannel",id:"version-5.5.5/functions/createchannel",title:"$createChannel",description:"Creates a channel with given type (text/voice) and name. If fourth field is set to 'yes', the function will return the newly created channel ID.",source:"@site/versioned_docs/version-5.5.5/functions/createchannel.md",sourceDirName:"functions",slug:"/functions/createchannel",permalink:"/tr/docs/5.5.5/functions/createchannel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$createChannel",description:"Creates a channel with given type (text/voice) and name. If fourth field is set to 'yes', the function will return the newly created channel ID."},sidebar:"docs",previous:{title:"$cpu",permalink:"/tr/docs/5.5.5/functions/cpu"},next:{title:"$createFile",permalink:"/tr/docs/5.5.5/functions/createfile"}},v={},g=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Types",id:"types",level:4}],b={toc:g},O="wrapper";function k(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(O,f(s(s({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function allows the bot to create a channel"),(0,r.kt)("h4",s({},{id:"fields"}),"Fields"),(0,r.kt)("p",null,"This function has 3 required fields"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"GuildID ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Name ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Type ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Return ID ","(","Optional",")"),(0,r.kt)("li",{parentName:"ol"},"Category ID ","(","Optional",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$createChannel[guildId;name;type;return ID (yes/no);category ID (optional)]")),(0,r.kt)("h4",s({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Guild ID - The ID of the guild"),(0,r.kt)("li",{parentName:"ul"},"Name - The name of the channel"),(0,r.kt)("li",{parentName:"ul"},"Type - The type of the channel you want to make"),(0,r.kt)("li",{parentName:"ul"},"Return ID - Whether or not the function will return newly created channel ID"),(0,r.kt)("li",{parentName:"ul"},"Category ID - The category of which the channel will be placed under")),(0,r.kt)("h4",s({},{id:"types"}),"Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"text - Text Channel"),(0,r.kt)("li",{parentName:"ul"},"voice - Voice Channel"),(0,r.kt)("li",{parentName:"ul"},"category - Category"),(0,r.kt)("li",{parentName:"ul"},"stage - Stage Channel")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "create",\ncode: `Channel ID: $createChannel[$guildID;new;text;yes]` //Makes a text channel named "new"\n})\n')))}k.isMDXComponent=!0}}]);