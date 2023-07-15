"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[64013],{12462:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(67294),s=a(86010),l=a(7452),n=a(9322);function r(e){const{sidebar:t,toc:a,children:r,...c}=e,m=t&&t.items.length>0;return i.createElement(l.Z,c,i.createElement("div",{className:"container margin-vert--lg"},i.createElement("div",{className:"row"},i.createElement(n.Z,{sidebar:t}),i.createElement("main",{className:(0,s.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},r),a&&i.createElement("div",{className:"col col--2"},a))))}},13008:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(67294),s=a(86010),l=a(39960);const n={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function r(e){let{permalink:t,label:a,count:r}=e;return i.createElement(l.Z,{href:t,className:(0,s.Z)(n.tag,r?n.tagWithCount:n.tagRegular)},a,r&&i.createElement("span",null,r))}},44057:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(67294),s=a(30143);const l=()=>i.createElement(s.ZP,{acceptOnScroll:!0,acceptOnScrollPercentage:10,buttonStyle:{backgroundColor:"var(--ifm-color-primary)",color:"#fff",padding:"10px 20px",border:"none",textAlign:"center",borderRadius:"6px",cursor:"pointer"}},"This website uses cookies to enhance the user experience.")},9322:(e,t,a)=>{a.d(t,{Z:()=>g});var i=a(67294),s=a(87524),l=a(86010),n=a(39960),r=a(95999);const c={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm",newItem:"newItem_b9o7",newTag:"newTag_fGI0",activeButton:"activeButton_HxF9",searchContainer:"searchContainer_GE6j",searchInput:"searchInput_nz1m",mobileSearchContainer:"mobileSearchContainer_i5LO",mobileSearchInput:"mobileSearchInput_ULu5",searchIcon:"searchIcon_X7sx",searchClose:"searchClose_K_EJ"};function m(e){let{sidebar:t}=e;const a=["/wikis/submit","/wikis/guidelines","/wikis/tags"],[s,m]=(0,i.useState)(!1),[o,u]=(0,i.useState)("");(0,i.useEffect)((()=>{const e=d("sortingState");e&&m(JSON.parse(e))}),[]),(0,i.useEffect)((()=>{k()&&g("sortingState",JSON.stringify(s))}),[s]);const d=e=>k()?localStorage.getItem(e):null,g=(e,t)=>{k()&&localStorage.setItem(e,t)},k=()=>{try{const e="test";return localStorage.testKey=e,!0}catch(e){return!1}},b=t.items.filter((e=>!a.includes(e.permalink))).filter((e=>e.title.toLowerCase().includes(o.toLowerCase()))).sort(((e,t)=>s?e.title.localeCompare(t.title):t.date-e.date));return i.createElement("aside",{className:"col col--3"},i.createElement("nav",{className:(0,l.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,r.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},i.createElement("div",{className:(0,l.Z)(c.sidebarItemTitle,"margin-bottom--md")},i.createElement("span",null,"Introduction")),i.createElement("ul",{className:(0,l.Z)(c.sidebarItemList,"clean-list")},i.createElement("li",{key:"/wikis/guidelines",className:c.sidebarItem},i.createElement(n.Z,{isNavLink:!0,to:"/wikis/guidelines",className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},"Wiki Guidelines")),i.createElement("li",{key:"/wikis/submit",className:c.sidebarItem},i.createElement(n.Z,{isNavLink:!0,to:"/wikis/submit",className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},"Submit Wiki")),i.createElement("li",{key:"/wikis/tags",className:c.sidebarItem},i.createElement(n.Z,{isNavLink:!0,to:"/wikis/tags",className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},"Tags"))),i.createElement("div",{className:(0,l.Z)(c.sidebarItemTitle,"margin-bottom--md")},"Wikis",i.createElement("button",{className:(0,l.Z)(c.activeButton,{[c.activeButton]:s}),onClick:()=>{m((e=>!e))}},s?"A-Z":"Newest First")),i.createElement("div",{className:c.searchContainer},i.createElement("input",{type:"text",className:c.searchInput,placeholder:"Search Wikis...",value:o,onChange:e=>{u(e.target.value)}})),i.createElement("ul",{className:(0,l.Z)(c.sidebarItemList,"clean-list")},b.map(((e,t)=>{return i.createElement("li",{key:e.permalink,className:c.sidebarItem},i.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},(a=e.title).charAt(0).toUpperCase()+a.slice(1)));var a})))))}var o=a(13102);function u(e){let{sidebar:t,onSearch:a}=e;const[s,l]=(0,i.useState)(""),r=["/wikis/submit","/wikis/guidelines","/wikis/tags"],m=t?.items.filter((e=>!r.includes(e.permalink))).sort(((e,t)=>e.title.localeCompare(t.title))),[o,u]=(0,i.useState)(m);return i.createElement("ul",{className:"menu__list"},i.createElement("div",{className:"menu__title"},"Introduction"),i.createElement("li",{key:"/wikis/guidelines",className:"menu__list-item"},i.createElement(n.Z,{isNavLink:!0,to:"/wikis/guidelines",className:"menu__link",activeClassName:"menu__link--active"},"Wiki Guidelines")),i.createElement("li",{key:"/wikis/submit",className:"menu__list-item"},i.createElement(n.Z,{isNavLink:!0,to:"/wikis/submit",className:"menu__link",activeClassName:"menu__link--active"},"Submit Wiki")),i.createElement("li",{key:"/wikis/tags",className:"menu__list-item"},i.createElement(n.Z,{isNavLink:!0,to:"/wikis/tags",className:"menu__link",activeClassName:"menu__link--active"},"Tags")),i.createElement("div",{className:"menu__title",style:{marginTop:"25px",marginBottom:"15px"}},"Wikis"),i.createElement("div",{className:c.searchContainer},i.createElement("input",{type:"text",className:c.searchInput,placeholder:"Search Wikis...",value:s,onChange:e=>{const t=e.target.value.toLowerCase(),a=m.filter((e=>e.title.toLowerCase().includes(t)));u(a),l(t)}})),o.map((e=>{return i.createElement("li",{key:e.permalink,className:"menu__list-item"},i.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},(t=e.title).charAt(0).toUpperCase()+t.slice(1)));var t})))}function d(e){let{sidebar:t,onSearch:a}=e;const s=["/wikis/submit","/wikis/guidelines","/wikis/tags"],l=t?.items.filter((e=>!s.includes(e.permalink))).sort(((e,t)=>e.title.localeCompare(t.title)));return i.createElement(o.Zo,{component:u,props:{sidebar:{...t,items:l.map((e=>{return{...e,title:(t=e.title,t.charAt(0).toUpperCase()+t.slice(1))};var t}))}}})}function g(e){let{sidebar:t}=e;const a=(0,s.i)();return t?.items.length?"mobile"===a?i.createElement(d,{sidebar:t}):i.createElement(m,{sidebar:t}):null}},38119:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var i=a(67294),s=a(86010),l=a(95999);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var r=a(10833),c=a(35281),m=a(44057),o=a(12462),u=a(13008);const d={tag:"tag_Nnez"};function g(e){let{letterEntry:t}=e;return i.createElement("article",null,i.createElement("h2",null,t.letter),i.createElement("ul",{className:"padding--none"},t.tags.map((e=>i.createElement("li",{key:e.permalink,className:d.tag},i.createElement(u.Z,e))))),i.createElement("hr",null))}function k(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[i]=t;return a.localeCompare(i)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return i.createElement("section",{className:"margin-vert--lg"},a.map((e=>i.createElement(g,{key:e.letter,letterEntry:e}))))}var b=a(90197);function p(e){let{tags:t,sidebar:a}=e;const l=n();return i.createElement(r.FG,{className:(0,s.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},i.createElement("div",null,i.createElement(m.Z,null)),i.createElement(r.d,{title:l}),i.createElement(b.Z,{tag:"blog_tags_list"}),i.createElement(o.Z,{sidebar:a},i.createElement("h2",null,l),i.createElement(k,{tags:t})))}}}]);