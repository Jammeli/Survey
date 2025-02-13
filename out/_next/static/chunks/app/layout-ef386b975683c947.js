(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2898:function(e,t,r){"use strict";r.d(t,{Z:function(){return createLucideIcon}});var s=r(2265),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let toKebabCase=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),createLucideIcon=(e,t)=>{let r=(0,s.forwardRef)(({color:r="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:l="",children:c,...d},h)=>(0,s.createElement)("svg",{ref:h,...o,width:n,height:n,stroke:r,strokeWidth:a?24*Number(i)/Number(n):i,className:["lucide",`lucide-${toKebabCase(e)}`,l].join(" "),...d},[...t.map(([e,t])=>(0,s.createElement)(e,t)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r}},6637:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var s=r(2898);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,s.Z)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]])},3298:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var s=r(2898);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,s.Z)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]])},7461:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var s=r(2898);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,s.Z)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]])},7972:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var s=r(2898);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,s.Z)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])},8746:function(e,t,r){Promise.resolve().then(r.bind(r,3192)),Promise.resolve().then(r.bind(r,5888)),Promise.resolve().then(r.t.bind(r,3925,23)),Promise.resolve().then(r.t.bind(r,2801,23))},3192:function(e,t,r){"use strict";r.r(t),r.d(t,{Layout:function(){return Layout}});var s=r(7437);r(2265);var o=r(1396),n=r.n(o),i=r(4033),a=r(5888),l=r(2898);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,l.Z)("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);var d=r(6637),h=r(7972);let Navigation=()=>{let{user:e,logout:t}=(0,a.useAuth)(),r=(0,i.useRouter)(),o=(0,i.usePathname)(),handleLogout=async()=>{try{await t(),r.push("/")}catch(e){console.error("Logout failed:",e)}};return(0,s.jsx)("nav",{className:"bg-white border-b border-gray-200",children:(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"flex justify-between h-16",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)(n(),{href:"/",className:"flex items-center",children:(0,s.jsx)("img",{src:"https://votly.app/public/web/wp-content/themes/Votly-logo-colored.png",alt:"Votly",className:"h-8"})}),e&&(0,s.jsxs)("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-8",children:[(0,s.jsxs)(n(),{href:"/dashboard",className:"inline-flex items-center px-1 pt-1 text-sm font-medium ".concat("/dashboard"===o?"text-indigo-600 border-b-2 border-indigo-600":"text-gray-900 hover:text-indigo-600"),children:[(0,s.jsx)(c,{className:"h-5 w-5 mr-1"}),"Dashboard"]}),(0,s.jsxs)(n(),{href:"/forms",className:"inline-flex items-center px-1 pt-1 text-sm font-medium ".concat("/forms"===o?"text-indigo-600 border-b-2 border-indigo-600":"text-gray-900 hover:text-indigo-600"),children:[(0,s.jsx)(d.Z,{className:"h-5 w-5 mr-1"}),"Forms"]})]})]}),(0,s.jsx)("div",{className:"flex items-center space-x-4",children:e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n(),{href:"/account",className:"inline-flex items-center px-1 pt-1 text-sm font-medium ".concat("/account"===o?"text-indigo-600 border-b-2 border-indigo-600":"text-gray-900 hover:text-indigo-600"),children:[(0,s.jsx)(h.Z,{className:"h-5 w-5 mr-1"}),(0,s.jsx)("span",{children:"My Account"})]}),(0,s.jsx)("button",{onClick:handleLogout,className:"text-gray-700 hover:text-indigo-600 px-4 py-2 text-sm font-medium transition-colors duration-200",children:"Logout"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n(),{href:"/login",className:"text-gray-700 hover:text-indigo-600 px-4 py-2 text-sm font-medium transition-colors duration-200",children:"Login"}),(0,s.jsx)(n(),{href:"/signup",className:"bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200 text-sm font-medium",children:"Get Started"})]})})]})})})};var u=r(3298);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let m=(0,l.Z)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);var x=r(7461);let Footer=()=>(0,s.jsx)("footer",{className:"bg-white border-t border-gray-200",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8",children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12",children:[(0,s.jsxs)("div",{className:"footer-section",children:[(0,s.jsx)("h3",{className:"footer-heading",children:"Product"}),(0,s.jsxs)("ul",{className:"mt-4 space-y-3",children:[(0,s.jsx)("li",{children:(0,s.jsx)(n(),{href:"/pricing",className:"footer-link",children:"Pricing"})}),(0,s.jsx)("li",{children:(0,s.jsx)(n(),{href:"/templates",className:"footer-link",children:"Templates"})})]})]}),(0,s.jsxs)("div",{className:"footer-section",children:[(0,s.jsx)("h3",{className:"footer-heading",children:"Support"}),(0,s.jsxs)("ul",{className:"mt-4 space-y-3",children:[(0,s.jsx)("li",{children:(0,s.jsx)(n(),{href:"/help",className:"footer-link",children:"Help Center"})}),(0,s.jsx)("li",{children:(0,s.jsx)(n(),{href:"/contact",className:"footer-link",children:"Contact"})}),(0,s.jsx)("li",{children:(0,s.jsx)(n(),{href:"/about",className:"footer-link",children:"About"})})]})]}),(0,s.jsxs)("div",{className:"footer-section",children:[(0,s.jsx)("h3",{className:"footer-heading",children:"Legal"}),(0,s.jsxs)("ul",{className:"mt-4 space-y-3",children:[(0,s.jsx)("li",{children:(0,s.jsx)(n(),{href:"/legal/terms",className:"footer-link",children:"Terms of Service"})}),(0,s.jsx)("li",{children:(0,s.jsx)(n(),{href:"/legal/privacy",className:"footer-link",children:"Privacy Policy"})}),(0,s.jsx)("li",{children:(0,s.jsx)(n(),{href:"/legal/cookies",className:"footer-link",children:"Cookie Policy"})})]})]})]}),(0,s.jsx)("div",{className:"mt-16 pt-8 border-t border-gray-200",children:(0,s.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",children:[(0,s.jsx)("div",{className:"flex items-center space-x-4",children:(0,s.jsxs)("p",{className:"footer-copyright",children:["\xa9 ",new Date().getFullYear()," Votly. All rights reserved."]})}),(0,s.jsxs)("div",{className:"flex space-x-6",children:[(0,s.jsx)("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:(0,s.jsx)(u.Z,{className:"footer-social-icon"})}),(0,s.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:(0,s.jsx)(m,{className:"footer-social-icon"})}),(0,s.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"footer-link",children:(0,s.jsx)(x.Z,{className:"footer-social-icon"})})]})]})})]})}),Layout=e=>{let{children:t}=e;return(0,s.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,s.jsx)(Navigation,{}),(0,s.jsx)("main",{className:"flex-grow",children:t}),(0,s.jsx)(Footer,{})]})}},5888:function(e,t,r){"use strict";r.r(t),r.d(t,{AuthProvider:function(){return AuthProvider},useAuth:function(){return useAuth}});var s=r(7437),o=r(2265),n=r(4033);let i=(0,o.createContext)({user:null,login:async()=>{},logout:()=>{},signup:async()=>{}}),AuthProvider=e=>{let{children:t}=e,[r,a]=(0,o.useState)(null),l=(0,n.useRouter)();(0,o.useEffect)(()=>{{let e=localStorage.getItem("user");e&&a(JSON.parse(e))}},[]);let login=async(e,t)=>{let r={id:"1",email:e};a(r),localStorage.setItem("user",JSON.stringify(r)),localStorage.setItem("auth_token","dummy_token"),l.push("/dashboard")},signup=async(e,t)=>{let r={id:"1",email:e};a(r),localStorage.setItem("user",JSON.stringify(r)),localStorage.setItem("auth_token","dummy_token"),l.push("/dashboard")};return(0,s.jsx)(i.Provider,{value:{user:r,login,logout:()=>{a(null),localStorage.removeItem("user"),localStorage.removeItem("auth_token"),l.push("/")},signup},children:t})},useAuth=()=>{let e=(0,o.useContext)(i);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},2801:function(){},3925:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=r(2265),o=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var s,n={},c=null,d=null;for(s in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,s)&&!l.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:o,type:e,key:c,ref:d,props:n,_owner:a.current}}t.Fragment=n,t.jsx=q,t.jsxs=q},7437:function(e,t,r){"use strict";e.exports=r(622)},1396:function(e,t,r){e.exports=r(8326)},4033:function(e,t,r){e.exports=r(94)}},function(e){e.O(0,[326,971,472,744],function(){return e(e.s=8746)}),_N_E=e.O()}]);