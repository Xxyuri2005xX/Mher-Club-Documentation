"use strict";(self.webpackChunkmher_club_documentation=self.webpackChunkmher_club_documentation||[]).push([[8972],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,v=m["".concat(c,".").concat(u)]||m[u]||s[u]||i;return r?n.createElement(v,p(p({ref:t},l),{},{components:r})):n.createElement(v,p({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var d=2;d<i;d++)p[d]=r[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={id:"maven-dependency",title:"Maven Dependency"},p=void 0,o={unversionedId:"private-games/developer-api/maven-dependency",id:"private-games/developer-api/maven-dependency",title:"Maven Dependency",description:"You must replace all the x.x.x with the current version, which you can find from here.",source:"@site/docs/private-games/developer-api/maven-dependency.md",sourceDirName:"private-games/developer-api",slug:"/private-games/developer-api/maven-dependency",permalink:"/private-games/developer-api/maven-dependency",draft:!1,editUrl:"https://github.com/MherZaqaryan/Mher-Club-Documentation/edit/master/docs/private-games/developer-api/maven-dependency.md",tags:[],version:"current",lastUpdatedBy:"MherZaqaryan",lastUpdatedAt:1662039683,formattedLastUpdatedAt:"Sep 1, 2022",frontMatter:{id:"maven-dependency",title:"Maven Dependency"},sidebar:"private_games",previous:{title:"Getting Started",permalink:"/private-games/developer-api/getting-started"},next:{title:"Feedback",permalink:"/private-games/feedback"}},c={},d=[{value:"1. Get the API .jar file from the Discord server.",id:"1-get-the-api-jar-file-from-the-discord-server",level:2},{value:"2. Creating your Maven project.",id:"2-creating-your-maven-project",level:2},{value:"3. Adding the Maven dependency.",id:"3-adding-the-maven-dependency",level:2}],l={toc:d};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"You ",(0,a.kt)("strong",{parentName:"p"},"must")," replace all the ",(0,a.kt)("inlineCode",{parentName:"p"},"x.x.x")," with the current version, which you can find from ",(0,a.kt)("a",{parentName:"p",href:"https://api.polymart.org/v1/getResourceInfoSimple/?resource_id=1620&key=version"},"here"),".")),(0,a.kt)("p",null,"Currently, there is no repository for Private Games API dependency, you must manually upload the API ",(0,a.kt)("strong",{parentName:"p"},".jar")," file and add the dependency with ",(0,a.kt)("em",{parentName:"p"},"system")," scope."),(0,a.kt)("h2",{id:"1-get-the-api-jar-file-from-the-discord-server"},"1. Get the API .jar file from the Discord server."),(0,a.kt)("p",null,"Join my ",(0,a.kt)("a",{parentName:"p",href:"https://mher.club/discord"},"Discord")," server, create a ticket and ask for Private Games API ",(0,a.kt)("inlineCode",{parentName:"p"},".jar")," file."),(0,a.kt)("p",null,"The author (Mher) will give you the jar file which must has ",(0,a.kt)("inlineCode",{parentName:"p"},"private-games-api-x.x.x.jar")," name, but ",(0,a.kt)("inlineCode",{parentName:"p"},"x.x.x")," replaced with the ",(0,a.kt)("a",{parentName:"p",href:"https://api.polymart.org/v1/getResourceInfoSimple/?resource_id=1620&key=version"},"current version"),"."),(0,a.kt)("h2",{id:"2-creating-your-maven-project"},"2. Creating your Maven project."),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("a",{parentName:"p",href:"https://maven.apache.org/"},"Maven")," project and put the jar file into the {projectDirectory}/libraries directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"my-project\n\u251c\u2500\u2500 libraries\n\u2502   \u251c\u2500\u2500 private-games-api-x.x.x.jar\n")),(0,a.kt)("h2",{id:"3-adding-the-maven-dependency"},"3. Adding the Maven dependency."),(0,a.kt)("p",null,"Now open your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," file and add the block below in dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>club.mher</groupId>\n  <artifactId>private-games-api</artifactId>\n  <version>x.x.x</version>\n  <scope>system</scope>\n  <systemPath>${project.basedir}\\libraries\\private-games-api-x.x.x.jar</systemPath>\n</dependency>\n")))}s.isMDXComponent=!0}}]);