"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[27582],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,d=c["".concat(s,".").concat(m)]||c[m]||f[m]||i;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99453:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>N,frontMatter:()=>d,metadata:()=>h,toc:()=>y});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>i(e,l(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$usersWithRole",description:"Returns a list of users with given role."},g=void 0,h={unversionedId:"functions/userswithrole",id:"version-5.5.5/functions/userswithrole",title:"$usersWithRole",description:"Returns a list of users with given role.",source:"@site/versioned_docs/version-5.5.5/functions/userswithrole.md",sourceDirName:"functions",slug:"/functions/userswithrole",permalink:"/ar/docs/5.5.5/functions/userswithrole",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$usersWithRole",description:"Returns a list of users with given role."},sidebar:"docs",previous:{title:"$usersTyping",permalink:"/ar/docs/5.5.5/functions/userstyping"},next:{title:"$userTag",permalink:"/ar/docs/5.5.5/functions/usertag"}},k={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Option Types",id:"option-types",level:4},{value:"Example",id:"example",level:2}],v={toc:y},b="wrapper";function N(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(b,f(c(c({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function will return the users that have the specified role, ",(0,n.kt)("em",{parentName:"p"},"it will return cached members"),"."),(0,n.kt)("h3",c({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),'$usersWithRole[roleID;guildID?;option?;separator?] \n//Default separator is comma ","\n')),(0,n.kt)("h3",c({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",c({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",c({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"roleID"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"The ID of the role"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"guildID?"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"The ID of the server will be checked"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"option?"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"The option of the returning user's"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"seperator?"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"Seperator of userIDs"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h4",c({},{id:"option-types"}),"Option Types"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," \u2014 Returns ID of the users with the given role"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"user.username")," \u2014 Returns name of the users with the given role"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"nickname")," \u2014 Returns nickname of the users with the given role"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mention")," \u2014 Returns the users with mentioning from given role")),(0,n.kt)("h2",c({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "users-with-role",\n  code: `\n  $usersWithRole[$roleID[Profossional];697039582922801182;displayName;, ]\n  `\n // Returns Neo, neo\'s personal maid, he idiot\n});\n')))}N.isMDXComponent=!0}}]);