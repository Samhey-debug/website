"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[70898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>O,frontMatter:()=>f,metadata:()=>k,toc:()=>y});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>l(e,o(t)),d=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$hasPermsInChannel",description:"Checks whether the specified user or role has given perms"},h=void 0,k={unversionedId:"functions/haspermsinchannel",id:"version-5.5.5/functions/haspermsinchannel",title:"$hasPermsInChannel",description:"Checks whether the specified user or role has given perms",source:"@site/versioned_docs/version-5.5.5/functions/haspermsinchannel.md",sourceDirName:"functions",slug:"/functions/haspermsinchannel",permalink:"/uk/docs/5.5.5/functions/haspermsinchannel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$hasPermsInChannel",description:"Checks whether the specified user or role has given perms"},sidebar:"docs",previous:{title:"$hasPerms",permalink:"/uk/docs/5.5.5/functions/hasperms"},next:{title:"$hasRoles",permalink:"/uk/docs/5.5.5/functions/hasroles"}},g={},y=[{value:"Usage",id:"usage",level:2},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],b={toc:y},v="wrapper";function O(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(v,u(m(m({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns whether or not the specified user/role has the given perms in the specified channel. Returns boolean."),(0,r.kt)("h2",m({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$hasPermsInChannel[channelID;uorrID;perms...]\n")),(0,r.kt)("h3",m({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"channel ID"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"The id of the channel"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"uorr ID"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"The id of the role or user whose perms are to be checked"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"perms"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"The perms that are to be checked"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"str & num"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")))),(0,r.kt)("h2",m({},{id:"example"}),"Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With user ID")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "has-perm",\n  code: `\n  $hasPermsInChannel[$channelID;$userID[Ayaka];admin]\n  `\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With role ID")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "has-perm",\n  code: `\n  $hasPermsInChannel[$channelID;$roleID[Developer];admin]\n  `\n});\n')))}O.isMDXComponent=!0}}]);