"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[36980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>h,toc:()=>k});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>o(e,s(t)),d=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$msg"},g=void 0,h={unversionedId:"functions/msg",id:"version-5.5.5/functions/msg",title:"$msg",description:"This function returns the given message's specified property",source:"@site/versioned_docs/version-5.5.5/functions/msg.md",sourceDirName:"functions",slug:"/functions/msg",permalink:"/docs/5.5.5/functions/msg",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"$msg"},sidebar:"docs",previous:{title:"$moveUser",permalink:"/docs/5.5.5/functions/moveuser"},next:{title:"$multi",permalink:"/docs/5.5.5/functions/multi"}},y={},k=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Properties",id:"properties",level:4},{value:"Usage",id:"usage",level:4}],v={toc:k},b="wrapper";function O(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(b,m(c(c({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the given message's specified property"),(0,r.kt)("h4",c({},{id:"fields"}),"Fields"),(0,r.kt)("p",null,"This function has 3 fields"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Channel ID ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Message ID ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Property ","(","Required",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$msg[channelID;messageID;property]")),(0,r.kt)("h4",c({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Channel ID - The channel where the ","<","message",">"," is"),(0,r.kt)("li",{parentName:"ul"},"Message ID - The message the properties are based off of"),(0,r.kt)("li",{parentName:"ul"},"Property - The property you want to get from ","<","message",">")),(0,r.kt)("h4",c({},{id:"properties"}),"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"author - Message's Author's ID"),(0,r.kt)("li",{parentName:"ul"},"authormention - Message's Author's mention"),(0,r.kt)("li",{parentName:"ul"},"authortag - Message's Author's tag"),(0,r.kt)("li",{parentName:"ul"},"authorname - Message's Author's name"),(0,r.kt)("li",{parentName:"ul"},"channel - Message's channel id location"),(0,r.kt)("li",{parentName:"ul"},"channelname - Message's channel name location"),(0,r.kt)("li",{parentName:"ul"},"cleancontent - Message's content without any mentions ","(","excludes @here/@everyone",")"),(0,r.kt)("li",{parentName:"ul"},"content - Message's content"),(0,r.kt)("li",{parentName:"ul"},"created - Message's date and time of creation"),(0,r.kt)("li",{parentName:"ul"},"guildid - Message's guild's id of origin"),(0,r.kt)("li",{parentName:"ul"},"id - Message's ID"),(0,r.kt)("li",{parentName:"ul"},"isdeletable - Whether or not the author of the command can delete the message, Returns Boolean"),(0,r.kt)("li",{parentName:"ul"},"isdeleted - Whether or not the message is deleted, Returns Boolean"),(0,r.kt)("li",{parentName:"ul"},"iseditable - Whether or not the author of the command can edit the message, Returns Boolean"),(0,r.kt)("li",{parentName:"ul"},"ispinnable - Whether or not the author of the command can pin the message, Returns Boolean"),(0,r.kt)("li",{parentName:"ul"},"ispinned - Whether or not the message is pinned, Returns Boolean"),(0,r.kt)("li",{parentName:"ul"},"rawcontent - Message's content without ANY mentions"),(0,r.kt)("li",{parentName:"ul"},"guildname - Message's guild's name of origin"),(0,r.kt)("li",{parentName:"ul"},"url - Message's url")),(0,r.kt)("h4",c({},{id:"usage"}),"Usage"),(0,r.kt)("p",null,"Pre-specified message"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "msg",\ncode: `\n$msg[818606405362909193;content]\n`\n})\n')),(0,r.kt)("p",null,"Specified Message"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "msg",\ncode: `\n$msg[$message;content]\n`\n})\n')))}O.isMDXComponent=!0}}]);