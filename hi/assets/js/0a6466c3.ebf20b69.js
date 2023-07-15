"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[71826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,u=m["".concat(p,".").concat(f)]||m[f]||d[f]||o;return n?r.createElement(u,l(l({ref:t},c),{},{components:n})):r.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>O,frontMatter:()=>u,metadata:()=>y,toc:()=>N});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>o(e,l(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const u={title:"$interactionFollowUp",description:"Following-up an deferred interaction message."},k=void 0,y={unversionedId:"functions/interactionfollowup",id:"version-5.5.5/functions/interactionfollowup",title:"$interactionFollowUp",description:"Following-up an deferred interaction message.",source:"@site/versioned_docs/version-5.5.5/functions/interactionfollowup.md",sourceDirName:"functions",slug:"/functions/interactionfollowup",permalink:"/hi/docs/5.5.5/functions/interactionfollowup",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$interactionFollowUp",description:"Following-up an deferred interaction message."},sidebar:"docs",previous:{title:"$interactionEdit",permalink:"/hi/docs/5.5.5/functions/interactionedit"},next:{title:"$interactionModal",permalink:"/hi/docs/5.5.5/functions/interactionmodal"}},g={},N=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Property Types",id:"property-types",level:3},{value:"Footnotes",id:"footnotes",level:6},{value:"Example",id:"example",level:2}],b={toc:N},v="wrapper";function O(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(v,d(m(m({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$interactionDefer"),", defers the message for latest 15 minutes which can be used well for ",(0,r.kt)("inlineCode",{parentName:"p"},"$interactionFollowUp")," function. "),(0,r.kt)("p",null,"This function can be used for JSON requests, song informations or playing tracks, since these things takes more than 3 seconds."),(0,r.kt)("h3",m({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$interactionFollowUp[content;embeds?;components?;files?;allowed mentions?]\n")),(0,r.kt)("h3",m({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"content"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"A content message for reply"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"embeds"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"Send embed messages for reply"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"components"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"Adds components for reply"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"files"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"Send file & attachment for reply"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"allowed mentions"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),'Allowing to "x" mentions for reply'),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h3",m({},{id:"property-types"}),"Property Types"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CONTENT")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"classic message text \ud83e\udd20")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EMBEDS")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"embed-errors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"COMPONENTS")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"buttons, selection menus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FILES")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"files & attachment embed-errors should be used in here.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ALLOWED_MENTIONS")," \u2014 ",(0,r.kt)("em",{parentName:"li"},'"USERS,ROLES,EVERYONE"')))),(0,r.kt)("h6",m({},{id:"footnotes"}),"Footnotes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'If you want to make only embed message(s), you can just pass "content" property.')),(0,r.kt)("li",{parentName:"ul"},"Message can be ephemeral, if it's settled as ",(0,r.kt)("inlineCode",{parentName:"li"},"yes")," on ",(0,r.kt)("a",m({parentName:"li"},{href:"/hi/docs/5.5.5/functions/interactiondefer"}),"$interactionDefer"))),(0,r.kt)("h2",m({},{id:"example"}),"Example"),(0,r.kt)("p",null,"This will make out interaction message as ephemeral message."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.interactionCommand({\n  name: \"bye\",\n  prototype: 'slash',\n  code: `\n  $interactionFollowUp[Bye, world!]\n  \n  $interactionDefer[yes]\n  `\n});\n")))}O.isMDXComponent=!0}}]);