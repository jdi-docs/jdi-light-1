(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[572],{42714:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/simple_menu",function(){return r(12686)}])},12686:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return L}});var t=r(85893),o=r(67294),i=r(43832),l=r(80343),u=r(282),c=r(85639),a=r(38396),s=r(17812),f=r(46869),d=r(78880),h=r(43910),y=r(2781),m=r(78513),p=r(22318);function j(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function b(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,i=[],l=!0,u=!1;try{for(r=r.call(n);!(l=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);l=!0);}catch(c){u=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(u)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return j(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(){var n=b(o.useState(null),2),e=n[0],r=n[1],i=b(o.useState(""),2),l=i[0],u=i[1],j=function(n){r(null),u(n.currentTarget.textContent)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(s.Z,{onClick:function(n){r(n.currentTarget)},children:(0,t.jsx)(m.Z,{})}),(0,t.jsxs)(a.Z,{anchorEl:e,open:Boolean(e),onClose:j,children:[(0,t.jsxs)(c.Z,{onClick:j,children:[(0,t.jsx)(f.Z,{children:(0,t.jsx)(h.Z,{fontSize:"small"})}),(0,t.jsx)(p.Z,{variant:"inherit",children:"Text with send icon"})]}),(0,t.jsxs)(c.Z,{onClick:j,children:[(0,t.jsx)(f.Z,{children:(0,t.jsx)(y.Z,{fontSize:"small"})}),(0,t.jsx)(p.Z,{variant:"inherit",children:"Text with priority icon"})]}),(0,t.jsxs)(c.Z,{onClick:j,children:[(0,t.jsx)(f.Z,{children:(0,t.jsx)(d.Z,{fontSize:"small"})}),(0,t.jsx)(p.Z,{variant:"inherit",noWrap:!0,children:"Text with drafts icon"})]})]}),(0,t.jsxs)("p",{id:"selectedIconMenu",children:["Selected menu: ",l]})]})}var v=r(62822),g=r(50998),S=r(95757);function w(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function Z(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function O(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){Z(n,e,r[e])}))}return n}function C(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,i=[],l=!0,u=!1;try{for(r=r.call(n);!(l=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);l=!0);}catch(c){u=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(u)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return w(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var A=["Profile","My account","Logout"];function k(n){var e=C(o.useState(null),2),r=e[0],i=e[1],l=C(o.useState(1),2),u=l[0],s=l[1];return(0,t.jsxs)("div",{children:[(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(v.Z,{children:(0,t.jsx)(g.Z,{button:!0,onClick:function(n){i(n.currentTarget)},children:(0,t.jsx)(S.Z,{primary:"Selected Menu",secondary:A[u]})})}),(0,t.jsx)(a.Z,O({},n,{anchorEl:r,open:Boolean(r),onClose:function(){i(null)},children:A.map((function(n,e){return(0,t.jsx)(c.Z,{selected:e===u,onClick:function(n){return function(n,e){s(e),i(null)}(0,e)},children:n},n)}))}))]})}function T(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function P(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,i=[],l=!0,u=!1;try{for(r=r.call(n);!(l=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);l=!0);}catch(c){u=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(u)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return T(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var M=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function E(){var n=P(o.useState(null),2),e=n[0],r=n[1],i=P(o.useState(""),2),l=i[0],u=i[1],f=Boolean(e),d=function(n){r(null),u(n.currentTarget.textContent)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(s.Z,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(n){r(n.currentTarget)},children:(0,t.jsx)(m.Z,{})}),(0,t.jsx)(a.Z,{id:"long-menu",anchorEl:e,keepMounted:!0,open:f,onClose:d,PaperProps:{style:{maxHeight:216,width:"20ch"}},children:M.map((function(n){return(0,t.jsx)(c.Z,{selected:"Pyxis"===n,onClick:d,children:n},n)}))}),(0,t.jsxs)("p",{id:"selectedLongMenu",children:["Selected menu: ",l]})]})}function I(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function _(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function N(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){_(n,e,r[e])}))}return n}function U(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,i=[],l=!0,u=!1;try{for(r=r.call(n);!(l=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);l=!0);}catch(c){u=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(u)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return I(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(n){var e=U(o.useState(null),2),r=e[0],i=e[1],l=U(o.useState(""),2),s=l[0],f=l[1],d=function(n){i(null),f(n.currentTarget.textContent)};return(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:"Menus"}),(0,t.jsx)("h2",{children:"Simple menu"}),(0,t.jsx)(u.Z,{onClick:function(n){i(n.currentTarget)},children:"Open Menu"}),(0,t.jsxs)(a.Z,N({},n,{anchorEl:r,open:Boolean(r),onClose:d,children:[(0,t.jsx)(c.Z,{onClick:d,children:"Profile"}),(0,t.jsx)(c.Z,{onClick:d,children:"My account"}),(0,t.jsx)(c.Z,{onClick:d,children:"Logout"})]})),(0,t.jsxs)("p",{id:"selectedItem",children:["Selected menu: ",s]}),(0,t.jsx)("h2",{children:"Icon menu"}),(0,t.jsx)(x,{id:"iconMenu"}),(0,t.jsx)("h2",{children:"Selected menu"}),(0,t.jsx)(k,{id:"selectedMenu"}),(0,t.jsx)("h2",{children:"Max height menu"}),(0,t.jsx)(E,{id:"longMenu"})]})}function L(){return(0,t.jsx)(i.Z,{maxWidth:"xl",children:(0,t.jsx)(l.Z,{my:4,children:(0,t.jsx)(B,{})})})}}},function(n){n.O(0,[7431,6517,7815,2387,3426,9774,2888,179],(function(){return e=42714,n(n.s=e);var e}));var e=n.O();_N_E=e}]);