"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(n),g=r,h=m["".concat(c,".").concat(g)]||m[g]||p[g]||s;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},43521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const s={title:"Guess the country game",description:"a guess the country game using $awaitMessages the user gets a country flag and he has to guess it if the user guesses it right the bot mentions him and says Gg ",authors:{name:"@lokamoka",title:"Member - 1121808241974837308",userid:"1121808241974837308",url:"https://discord.com/users/1121808241974837308",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1121808241974837308.png"},tags:["v6","aoi.js","Other"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},o=void 0,i={permalink:"/wikis/posts/1121808241974837308/txlnl",source:"@site/forums/posts/1121808241974837308/txlnl.md",title:"Guess the country game",description:"a guess the country game using $awaitMessages the user gets a country flag and he has to guess it if the user guesses it right the bot mentions him and says Gg ",date:"2023-07-15T14:00:44.000Z",formattedDate:"July 15, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"Other",permalink:"/wikis/tags/other"}],hasTruncateMarker:!1,authors:[{name:"@lokamoka",title:"Member - 1121808241974837308",userid:"1121808241974837308",url:"https://discord.com/users/1121808241974837308",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1121808241974837308.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1121808241974837308.png"}],frontMatter:{title:"Guess the country game",description:"a guess the country game using $awaitMessages the user gets a country flag and he has to guess it if the user guesses it right the bot mentions him and says Gg ",authors:{name:"@lokamoka",title:"Member - 1121808241974837308",userid:"1121808241974837308",url:"https://discord.com/users/1121808241974837308",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1121808241974837308.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1121808241974837308.png"},tags:["v6","aoi.js","Other"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Cat Command",permalink:"/wikis/posts/1096717977304453160/vwxtre"},nextItem:{title:"Voice Channel Count",permalink:"/wikis/posts/166181471369953280/0ggsc"}},c={authorsImageUrls:[void 0]},u=[],l={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n  name: "county_guess",\n  type: "interaction",\n  prototype: "slash",\n  code: `\n  $interactionReply[;{newEmbed:{image:https://flagcdn.com/w2560/$tolowercase[$getObjectProperty[countries[$random[0;250]].code_2]].jpg}{color:Random}}]\n  $awaitMessages[$channelID;everyone;15s;$toLowercase[$getObjectProperty[countries[$random[0;250]].name_en]];countrygame;Time\'s up, no one found good answer, it was $getObjectProperty[countries[$random[0;250]].name_en];{"country": "$toLowerCase[$getObjectProperty[countries[$random[0;250]].name_en]]"}]\n  \n  $createObject[$jsonRequest[https://www.jsonkeeper.com/b/L23E]]\n  `\n  },{\nname: "countrygame",\ntype: "awaited",\ncode: `\nGg <@$authorID>, it was $awaitData[country]\n`\n  }];\n')),(0,r.kt)("p",null,"slash command create code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  name: "create",\n  code: `\n  $createApplicationCommand[global;county_guess;starts a guess the country game;true;slash]\n  `\n}\n')))}p.isMDXComponent=!0}}]);