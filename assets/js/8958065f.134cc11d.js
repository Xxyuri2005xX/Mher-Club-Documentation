"use strict";(self.webpackChunkmher_club_documentation=self.webpackChunkmher_club_documentation||[]).push([[9299],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,y=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(y,l(l({ref:t},c),{},{components:a})):r.createElement(y,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(7462),n=a(7294),o=a(6010),l=a(2389),i=a(7392),s=a(7094),u=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,a;const{lazy:l,block:m,defaultValue:d,values:y,groupId:b,className:f}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=y?y:h.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),k=(0,i.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===d?d:null!=(t=null!=d?d:null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)?t:h[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[T,C]=(0,n.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=b){const e=w[b];null!=e&&e!==T&&g.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,a=O.indexOf(t),r=g[a].value;r!==T&&(x(t),C(r),null!=b&&N(b,String(r)))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var r;const t=O.indexOf(e.currentTarget)+1;a=null!=(r=O[t])?r:O[0];break}case"ArrowLeft":{var n;const t=O.indexOf(e.currentTarget)-1;a=null!=(n=O[t])?n:O[O.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},g.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:Z,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),l?(0,n.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,l.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},8818:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),o=a(5488),l=a(5162);const i={id:"create-custom-rarities",title:"Create Custom Rarities"},s=void 0,u={unversionedId:"cosmetics/tutorials/create-custom-rarities",id:"cosmetics/tutorials/create-custom-rarities",title:"Create Custom Rarities",description:"If you need additional help, we'll be happy to help you on our Discord server.",source:"@site/docs/cosmetics/tutorials/create-custom-rarities.md",sourceDirName:"cosmetics/tutorials",slug:"/cosmetics/tutorials/create-custom-rarities",permalink:"/cosmetics/tutorials/create-custom-rarities",draft:!1,editUrl:"https://github.com/MherZaqaryan/Mher-Club-Documentation/edit/master/docs/cosmetics/tutorials/create-custom-rarities.md",tags:[],version:"current",lastUpdatedBy:"MherZaqaryan",lastUpdatedAt:1662064752,formattedLastUpdatedAt:"Sep 1, 2022",frontMatter:{id:"create-custom-rarities",title:"Create Custom Rarities"},sidebar:"cosmetics",previous:{title:"Create Wood Skins",permalink:"/cosmetics/tutorials/create-cosmetics/wood-skin"},next:{title:"Citizens Support",permalink:"/cosmetics/hooks/citizens-support"}},c={},p=[{value:"Default built-in rarities.",id:"default-built-in-rarities",level:2},{value:"Add a new rarity.",id:"add-a-new-rarity",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you need additional help, we'll be happy to help you on our ",(0,n.kt)("a",{parentName:"p",href:"https://mher.club/discord"},"Discord")," server.")),(0,n.kt)("p",null,"This addon lets to create custom rarities and apply them to any cosmetic you want."),(0,n.kt)("h2",{id:"default-built-in-rarities"},"Default built-in rarities."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("span",{style:{color:"#55FF55"}},"Common"))," has a priority of 1."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("span",{style:{color:"#55FFFF"}},"Rare"))," has a priority of 2."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("span",{style:{color:"#AA00AA"}},"Epic"))," has a priority of 3."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("span",{style:{color:"#FFAA00"}},"Legendary"))," has a priority of 4.")),(0,n.kt)("h2",{id:"add-a-new-rarity"},"Add a new rarity."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open to the configuration file for you corresponding ",(0,n.kt)("a",{parentName:"li",href:"/cosmetics/compatibility#dependencies"},"mode"),".")),(0,n.kt)(o.Z,{groupId:"dependency-plugin",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"bedwars1058",label:"BedWars1058",mdxType:"TabItem"},"File location: ",(0,n.kt)("code",null,"plugins/BedWars1058/Addons/Cosmetics/config.yml")),(0,n.kt)(l.Z,{value:"bedwarsproxy",label:"BedWarsProxy",mdxType:"TabItem"},"File location: ",(0,n.kt)("code",null,"plugins/BedWarsProxy/Addons/Cosmetics/config.yml")),(0,n.kt)(l.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},"File location: ",(0,n.kt)("code",null,"plugins/BedWars1058-Cosmetics/config.yml"))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Add a new row under the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"rarities"))," path as shown in the snippet below.")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"color")," path should be a color from ",(0,n.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html"},"ChatColor"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="config.yml (snippet)"',title:'"config.yml','(snippet)"':!0},"your-rarity-name:\n  priority: # The priority of the rarity (Should be a number).\n  color: # The color of the rarity that's gonna be displayed.\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Open your desired language file for your ",(0,n.kt)("a",{parentName:"li",href:"../../compatibility#dependencies"},"mode")," and then add a new row under the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"addons.cosmetics.rarities"))," path, as shown in the snippet below.")),(0,n.kt)(o.Z,{groupId:"dependency",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"bedwars1058",label:"BedWars1058",mdxType:"TabItem"},"File location: ",(0,n.kt)("code",null,"plugins/BedWars1058/Languages/messages_(lang).yml")),(0,n.kt)(l.Z,{value:"bedwarsproxy",label:"BedWarsProxy",mdxType:"TabItem"},"File location: ",(0,n.kt)("code",null,"plugins/BedWarsProxy/Languages/messages_(lang).yml")),(0,n.kt)(l.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},"File location: ",(0,n.kt)("code",null,"plugins/BedWars1058-Cosmetics/Languages/messages_(lang).yml"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="messages_(lang).yml (snippet)"',title:'"messages_(lang).yml','(snippet)"':!0},"your-rarity-name:\n  display-name: # The name you want it to be displayed for the current language.\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Save all these files."),(0,n.kt)("li",{parentName:"ol"},"You're done, now you can use it for any cosmetic you want, as shown below.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Example usage of your custom rarity"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},"example-cosmetic:\n  enabled: true\n  material: DIAMOND_BLOCK\n  amount: 1\n  enchanted: true\n  price: 500000\n  rarity: your-rarity-name\n"))))}d.isMDXComponent=!0}}]);