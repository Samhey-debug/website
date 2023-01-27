"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[58895],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,y=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(y,l(l({ref:t},p),{},{components:a})):n.createElement(y,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12554:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"$autoPlay",description:"Plays relative songs/musics similar to played track."},l=void 0,i={unversionedId:"functions/autoplay",id:"version-5.5.5/functions/autoplay",title:"$autoPlay",description:"Plays relative songs/musics similar to played track.",source:"@site/versioned_docs/version-5.5.5/functions/autoplay.md",sourceDirName:"functions",slug:"/functions/autoplay",permalink:"/docs/functions/autoplay",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1658666031,formattedLastUpdatedAt:"Jul 24, 2022",frontMatter:{title:"$autoPlay",description:"Plays relative songs/musics similar to played track."}},u={},s=[{value:"Usage",id:"usage",level:3},{value:"Types",id:"types",level:3},{value:"Footnote",id:"footnote",level:6},{value:"Example",id:"example",level:2}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$autoPlay")," is an amazing function that adds songs similar to the one you're currently listening to, and there is a queue list for hours to you chill :) ."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Requires ",(0,r.kt)("inlineCode",{parentName:"p"},"@akarui/aoi.music")," package.")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$autoPlay[type]\n")),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"relative"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds tracks that played on last platform")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"soundcloud"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds soundcloud tracks similar to current track")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"youtube"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds youtube tracks similar to current track")))),(0,r.kt)("h6",{id:"footnote"},"Footnote"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"You ",(0,r.kt)("strong",{parentName:"em"},"cannot")," use ",(0,r.kt)("inlineCode",{parentName:"em"},"$autoPlay[soundcloud]")," on Youtube track, same goes for ",(0,r.kt)("inlineCode",{parentName:"em"},"$autoPlay[youtube]")," on Soundcloud track. We recommend you to use ",(0,r.kt)("inlineCode",{parentName:"em"},"$autoPlay[relative]")," if you are thinking to use ",(0,r.kt)("strong",{parentName:"em"},"Soundcloud")," and ",(0,r.kt)("strong",{parentName:"em"},"Youtube")," together on your bot."))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "auto-play",\n  code: `\n  $autoPlay[youtube]\n  `\n//Since we are listening to "[Arknights OST] Shop Theme BGM", it will add songs that related to "[Arknights OST] Shop Theme BGM".\n});\n')),(0,r.kt)("p",null,"Now, keep your bot on Stage Channel and hang out with new users and members!"))}c.isMDXComponent=!0}}]);