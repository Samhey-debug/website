"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[66047],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),p=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(o.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||l;return n?t.createElement(m,s(s({ref:r},c),{},{components:n})):t.createElement(m,s({ref:r},c))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=f;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63565:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const l={title:"$respawnAllShards",description:"$respawnAllShards will respawn all shards.",id:"respawnAllShards"},s=void 0,i={unversionedId:"functions/interaction-related/respawnAllShards",id:"version-6.3.0/functions/interaction-related/respawnAllShards",title:"$respawnAllShards",description:"$respawnAllShards will respawn all shards.",source:"@site/versioned_docs/version-6.3.0/functions/interaction-related/respawnAllShards.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/respawnAllShards",permalink:"/docs/functions/interaction-related/respawnAllShards",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689243199,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{title:"$respawnAllShards",description:"$respawnAllShards will respawn all shards.",id:"respawnAllShards"},sidebar:"docs",previous:{title:"$reply",permalink:"/docs/functions/interaction-related/reply"},next:{title:"$sendDm",permalink:"/docs/functions/interaction-related/sendDm"}},o={},p=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:p},d="wrapper";function u(e){let{components:r,...n}=e;return(0,a.kt)(d,(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$respawnAllShards")," will respawn all shards. (requires sharding)"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$respawnAllShards\n")),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will respawn all shards (requires sharding):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'respawnAllShards',\n    code: `\n   $respawnAllShards\n  `\n});\n")))}u.isMDXComponent=!0}}]);