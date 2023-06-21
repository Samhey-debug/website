"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[71198],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const l={title:"$role"},a=void 0,i={unversionedId:"functions/role",id:"version-5.5.5/functions/role",title:"$role",description:"This function returns the given role's specified property",source:"@site/versioned_docs/version-5.5.5/functions/role.md",sourceDirName:"functions",slug:"/functions/role",permalink:"/docs/5.5.5/functions/role",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1687324528,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$role"},sidebar:"docs",previous:{title:"$resumeSong",permalink:"/docs/5.5.5/functions/resumesong"},next:{title:"$roleCount",permalink:"/docs/5.5.5/functions/rolecount"}},s={},p=[{value:"Usage",id:"usage",level:4},{value:"Options",id:"options",level:4},{value:"Available Properties",id:"available-properties",level:4}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the given role's specified property"),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This function has 2 fields"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Role ID ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Property ","(","Required",")")),(0,o.kt)("p",null,"Raw Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$role[roleID;property]")),(0,o.kt)("h4",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Role ID - The role the properties are base off of"),(0,o.kt)("li",{parentName:"ul"},"Property - The property from the ","<","role",">")),(0,o.kt)("h4",{id:"available-properties"},"Available Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"name - Role's name"),(0,o.kt)("li",{parentName:"ul"},"mention - Role's mention"),(0,o.kt)("li",{parentName:"ul"},"id - Role's ID"),(0,o.kt)("li",{parentName:"ul"},"hex - Role's hex color"),(0,o.kt)("li",{parentName:"ul"},"created - Role's date and time of creation"),(0,o.kt)("li",{parentName:"ul"},"position - Role's position"),(0,o.kt)("li",{parentName:"ul"},"rawposition - Role's raw position"),(0,o.kt)("li",{parentName:"ul"},"guild - Role's guild's id of origin"),(0,o.kt)("li",{parentName:"ul"},"guildname - Role's guild's name of origin "),(0,o.kt)("li",{parentName:"ul"},"timestamp - How long ago the role was created"),(0,o.kt)("li",{parentName:"ul"},"isdeleted - Whether or not the role has been deleted, Returns Boolean"),(0,o.kt)("li",{parentName:"ul"},"ismentionable - Whether or not the role can be mentioned, Returns Boolean"),(0,o.kt)("li",{parentName:"ul"},"iseditable - Whether or not the author of the command can edit the role, Returns Boolean"),(0,o.kt)("li",{parentName:"ul"},"ismanaged - Whether or not Discord manages the role, Returns Boolean"),(0,o.kt)("li",{parentName:"ul"},"ishoisted - Whether or not the role is hoisted, Returns Boolean")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "role",\ncode: `\n$role[773353340674900029;name]\n`\n})\n\n//Or specified role\n\nbot.command({\nname: "role",\ncode: `\n$role[$mentionedRoles[1];name]\n`\n})\n')))}m.isMDXComponent=!0}}]);