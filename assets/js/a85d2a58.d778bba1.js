"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[4797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>N,frontMatter:()=>h,metadata:()=>g,toc:()=>k});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&s(e,n,t[n]);return e},m=(e,t)=>l(e,o(t)),d=(e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const h={title:"$channel"},f=void 0,g={unversionedId:"functions/channel",id:"version-5.5.5/functions/channel",title:"$channel",description:"This function returns the specified channel's given property",source:"@site/versioned_docs/version-5.5.5/functions/channel.md",sourceDirName:"functions",slug:"/functions/channel",permalink:"/docs/5.5.5/functions/channel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"$channel"},sidebar:"docs",previous:{title:"$changeNickname",permalink:"/docs/5.5.5/functions/changenickname"},next:{title:"$channelCategoryID",permalink:"/docs/5.5.5/functions/channelcategoryid"}},y={},k=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Available Properties",id:"available-properties",level:4},{value:"Examples",id:"examples",level:2}],b={toc:k},v="wrapper";function N(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.kt)(v,m(u(u({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function returns the specified channel's given property"),(0,a.kt)("h3",u({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$channel[channelIID;property]\n")),(0,a.kt)("h3",u({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"channel ID"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"The channel you want to get properties from"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"property"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"The property you want to get"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")))),(0,a.kt)("h4",u({},{id:"available-properties"}),"Available Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name - Channel's Name"),(0,a.kt)("li",{parentName:"ul"},"topic - Channel's Topic"),(0,a.kt)("li",{parentName:"ul"},"ID - Channel's ID"),(0,a.kt)("li",{parentName:"ul"},"position - Channel's position organized by categories"),(0,a.kt)("li",{parentName:"ul"},"rawposition - Channel's position"),(0,a.kt)("li",{parentName:"ul"},"mention - Mention's the Channel"),(0,a.kt)("li",{parentName:"ul"},"created - Channel's date and time of creation"),(0,a.kt)("li",{parentName:"ul"},"isdeleted - Whether or not the channel has been deleted from the current guild, Returns Boolean"),(0,a.kt)("li",{parentName:"ul"},"type - Channel's Type - text, voice, category"),(0,a.kt)("li",{parentName:"ul"},"timestamp - How long ago the channel was created"),(0,a.kt)("li",{parentName:"ul"},"guildid - Channel's home guild's id"),(0,a.kt)("li",{parentName:"ul"},"guildname - Channel's home guild's name"),(0,a.kt)("li",{parentName:"ul"},"ismanageable - Whether or not the the author of the command has permission to manage the channel, Returns Boolean"),(0,a.kt)("li",{parentName:"ul"},"parentid - Channel's category's id"),(0,a.kt)("li",{parentName:"ul"},"parentname - Channel's category's name"),(0,a.kt)("li",{parentName:"ul"},"isviewable - Wehther or not the author of the command can view the channel, Returns Boolean"),(0,a.kt)("li",{parentName:"ul"},"isdeleteable - Whether or not the author of the command can delete the channel, Returns Boolean")),(0,a.kt)("h2",u({},{id:"examples"}),"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "channel",\ncode: `\n$channel[$channelID;name]\n`\n})\n\n//or if you want the mentioned channel\n\nbot.command({\nname: "channel",\ncode: `\n$channel[$mentionedChannels[1];name]\n`\n})\n')))}N.isMDXComponent=!0}}]);