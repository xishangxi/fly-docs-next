"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["20297"],{12537:function(e,r,n){n.r(r),n.d(r,{metadata:()=>i,contentTitle:()=>d,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>s});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-super/fly-super5/warning","title":"Mainboard Precautions","description":"Power Indicator","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-super/fly-super5/warning.mdx","sourceDirName":"ProductDoc/MainBoard/fly-super/fly-super5","slug":"/ProductDoc/MainBoard/fly-super/fly-super5/warning","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super5/warning","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-super/fly-super5/warning.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"sidebar_label":"Mainboard Precautions"},"sidebar":"tutorialSidebar","previous":{"title":"3D Model and Schematics","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super5/schematic"},"next":{"title":"\u5916\u7F6E\u9A71\u52A8\u4F7F\u7528\u6559\u7A0B","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super5/servo-drive"}}'),t=n("52676"),o=n("79938");let s={sidebar_position:8,sidebar_label:"Mainboard Precautions"},d="Mainboard Precautions",l={},c=[{value:"Power Indicator",id:"power-indicator",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Drivers",id:"drivers",level:2},{value:"Limit Switch Ports",id:"limit-switch-ports",level:2},{value:"Firmware Flashing",id:"firmware-flashing",level:2}];function a(e){let r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,o.a)(),...e.components},{Button:i,ImageView:s}=r;return!i&&h("Button",!0),!s&&h("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"mainboard-precautions",children:"Mainboard Precautions"})}),"\n",(0,t.jsx)(r.h2,{id:"power-indicator",children:"Power Indicator"}),"\n",(0,t.jsx)(s,{image:n(29329).Z,size:"80%",align:"center"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["When powered only through TYPE-C without connecting to other power sources on the motherboard, at least two lights ",(0,t.jsx)(r.code,{children:"3.3V"})," and ",(0,t.jsx)(r.code,{children:"5V"})," should be lit."]}),"\n",(0,t.jsxs)(r.li,{children:["After connecting the motherboard power, the motherboard power light should illuminate ",(0,t.jsx)(r.code,{children:"3.3V"}),", ",(0,t.jsx)(r.code,{children:"5V"}),", and ",(0,t.jsx)(r.code,{children:"12V"}),"."]}),"\n",(0,t.jsx)(r.li,{children:"The power indicator light on the lower left of the motherboard will light up normally after the drive power 0-2, drive power 3-7, and heated bed power are connected."}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(r.admonition,{title:"Notice",type:"danger",children:(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"In the absence of any external devices (drivers, limit switches, 12864, etc.)"}),"\n",(0,t.jsxs)(r.li,{children:["When powered only through TYPE-C, at least two LEDs ",(0,t.jsx)(r.code,{children:"3.3V"})," and ",(0,t.jsx)(r.code,{children:"5V"})," should remain constantly lit."]}),"\n"]})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["If ",(0,t.jsx)(r.code,{children:"3.3V"})," and ",(0,t.jsx)(r.code,{children:"5V"})," do not light up, check the motherboard's 5V jumper."]}),"\n",(0,t.jsx)(r.li,{children:"If the issue persists after changing the jumper and confirming that the type-c is supplying power normally, contact customer service for support."}),"\n",(0,t.jsxs)(r.li,{children:["If one of the ",(0,t.jsx)(r.code,{children:"3.3V"})," or ",(0,t.jsx)(r.code,{children:"5V"})," lights is blinking, it indicates a short circuit in a chip, requiring contact with customer service for support.","\n",(0,t.jsx)(s,{image:n(7250).Z,size:"60%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"drivers",children:"Drivers"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Driver power supply can use 48V but all drivers must use 48V."}),"\n",(0,t.jsxs)(r.li,{children:["The motherboard supports external drivers     ",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/ModuleDrive/servo-drive",children:"Wiring and Configuration Guide"})]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"limit-switch-ports",children:"Limit Switch Ports"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["If the limit switch ports are not functioning, consider replacing the limit switch port or trimming the driver's limit switch foot.","\n",(0,t.jsx)(s,{image:n(8102).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"firmware-flashing",children:"Firmware Flashing"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"The motherboard uses TF card for flashing."}),"\n",(0,t.jsxs)(r.li,{children:["Due to tutorial issues, DFU was previously used for flashing. If you need to update the firmware, you need to ",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/MainBoard/fly-super/fly-super8-pro/flash/bl",children:"re-flash BL"}),"."]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}function h(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7250:function(e,r,n){n.d(r,{Z:function(){return i}});let i=n.p+"assets/images/5v-add5ff143d1edd1700fa8dd9b20118d5.webp"},29329:function(e,r,n){n.d(r,{Z:function(){return i}});let i=n.p+"assets/images/power-f589167a2589fea079c7beecb8cb4a09.webp"},8102:function(e,r,n){n.d(r,{Z:function(){return i}});let i=n.p+"assets/images/2209diag-262cd788fbf99f89f3dfc8ec68d68e8c.webp"},79938:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return s}});var i=n(75271);let t={},o=i.createContext(t);function s(e){let r=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);