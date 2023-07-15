"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[50373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>h,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&l(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&l(e,n,t[n]);return e},f=(e,t)=>a(e,s(t)),d=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$seekTo"},y=void 0,g={unversionedId:"functions/seekto",id:"version-5.5.5/functions/seekto",title:"$seekTo",description:"This function seeks to a the specified duration of the song",source:"@site/versioned_docs/version-5.5.5/functions/seekto.md",sourceDirName:"functions",slug:"/functions/seekto",permalink:"/ar/docs/5.5.5/functions/seekto",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$seekTo"},sidebar:"docs",previous:{title:"$second",permalink:"/ar/docs/5.5.5/functions/second"},next:{title:"$sendCrosspostingMessage",permalink:"/ar/docs/5.5.5/functions/sendcrosspostingmessage"}},k={},b=[],v={toc:b},O="wrapper";function h(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(O,f(u(u({},v),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function seeks to a the specified duration of the song"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$seekTo[seconds]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "seek",\ncode: `\n$seekTo[5]\n`\n//This skips to the 5 second mark of the song\n//$skipTo[50] would skip to the 50 second mark of the song\n})\n')),(0,r.kt)("p",null,"Seek with user input"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "seek",\ncode: `\n$seekTo[$message]\n`\n//Usage - !seek 28\n//This would seek to the 28 mark of the song\n})\n')))}h.isMDXComponent=!0}}]);