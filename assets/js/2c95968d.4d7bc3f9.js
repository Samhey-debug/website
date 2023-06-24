"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[79473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"$author",description:"Sets the author in an embed message and authorIcon if it's specified."},i=void 0,l={unversionedId:"functions/author",id:"version-5.5.5/functions/author",title:"$author",description:"Sets the author in an embed message and authorIcon if it's specified.",source:"@site/versioned_docs/version-5.5.5/functions/author.md",sourceDirName:"functions",slug:"/functions/author",permalink:"/docs/5.5.5/functions/author",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687586762,formattedLastUpdatedAt:"Jun 24, 2023",frontMatter:{title:"$author",description:"Sets the author in an embed message and authorIcon if it's specified."},sidebar:"docs",previous:{title:"$attachment",permalink:"/docs/5.5.5/functions/attachment"},next:{title:"$authorAccentColor",permalink:"/docs/5.5.5/functions/authoraccentcolor"}},p={},u=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Footnote",id:"footnote",level:6},{value:"Examples",id:"examples",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function allows you to add an 'author' to the embed message and an icon to the author if a URL is specified. "),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$author[index;text;icon url?;redirecting url?]\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"index"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The author embed's index"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"text"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The text will show up on the author property"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"icon url?"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The icon will show up next to author property"),(0,a.kt)("td",{parentName:"tr",align:"left"},"url"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"redirecting url?"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The URL of the redirect link"),(0,a.kt)("td",{parentName:"tr",align:"left"},"url"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,a.kt)("h6",{id:"footnote"},"Footnote"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The icon url must end with ",(0,a.kt)("inlineCode",{parentName:"em"},".png"),", ",(0,a.kt)("inlineCode",{parentName:"em"},".jpg")," or ",(0,a.kt)("inlineCode",{parentName:"em"},".gif"),"!")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Without hyperlink and icon:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "author",\n  code: `\n  $author[1;$username]\n  `\n//Returns the user\'s username\n});\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With hyperlink and icon:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: \"author\",\n  code: `\n  $author[1;$username;$authorAvatar;https://aoi.js.org]\n  `\n//Returns user's username along with their icon and if clicked, will redirect to aoi.js' website\n});\n")))}d.isMDXComponent=!0}}]);