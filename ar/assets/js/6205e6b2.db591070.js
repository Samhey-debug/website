"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32857],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,v=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>h,frontMatter:()=>v,metadata:()=>y,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const v={title:"$vanityURL",description:"Returns vanity URL."},m=void 0,y={unversionedId:"functions/vanityurl",id:"version-5.5.5/functions/vanityurl",title:"$vanityURL",description:"Returns vanity URL.",source:"@site/versioned_docs/version-5.5.5/functions/vanityurl.md",sourceDirName:"functions",slug:"/functions/vanityurl",permalink:"/ar/docs/5.5.5/functions/vanityurl",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$vanityURL",description:"Returns vanity URL."},sidebar:"docs",previous:{title:"$userTag",permalink:"/ar/docs/5.5.5/functions/usertag"},next:{title:"$vanityUses",permalink:"/ar/docs/5.5.5/functions/vanityuses"}},b={},g=[{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:2}],O={toc:g},k="wrapper";function h(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(k,f(u(u({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the current servers vanity URL, if they have one."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"What's Vanity URL?",(0,n.kt)("sup",u({parentName:"p"},{id:"fnref-1"}),(0,n.kt)("a",u({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")))),(0,n.kt)("h3",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$vanityURL\n")),(0,n.kt)("h2",u({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "vanity-url",\n  code: `\n  URL: $vanityURL\n  `\n});\n')),(0,n.kt)("div",u({},{className:"footnotes"}),(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",u({parentName:"ol"},{id:"fn-1"}),"A custom URL Redirects you to a server. This would be a vanity URL\ndiscord.gg/akarui. For example, this is not a vanity URL\n",(0,n.kt)("a",u({parentName:"li"},{href:"https://discord.com/invite/j352EV9ran"}),"https://discord.com/invite/j352EV9ran"),(0,n.kt)("a",u({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}h.isMDXComponent=!0}}]);