(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6308],{45258:function(e,t,r){"use strict";var o=r(87462),n=r(45987),i=r(67294),a=r(86010),s=r(1591),c=r(93871),l=r(79895),d=i.forwardRef((function(e,t){var r=e.classes,s=e.className,d=e.color,u=void 0===d?"primary":d,p=e.position,f=void 0===p?"fixed":p,m=(0,n.Z)(e,["classes","className","color","position"]);return i.createElement(l.Z,(0,o.Z)({square:!0,component:"header",elevation:4,className:(0,a.Z)(r.root,r["position".concat((0,c.Z)(f))],r["color".concat((0,c.Z)(u))],s,"fixed"===f&&"mui-fixed"),ref:t},m))}));t.Z=(0,s.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(d)},33758:function(e,t,r){"use strict";var o=r(45987),n=r(87462),i=r(67294),a=r(86010),s=r(1591),c=r(4024),l=r(93871),d=i.forwardRef((function(e,t){var r=e.children,s=e.classes,d=e.className,u=e.color,p=void 0===u?"default":u,f=e.component,m=void 0===f?"button":f,b=e.disabled,h=void 0!==b&&b,g=e.disableFocusRipple,v=void 0!==g&&g,y=e.focusVisibleClassName,x=e.size,Z=void 0===x?"large":x,w=e.variant,k=void 0===w?"circular":w,E=(0,o.Z)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return i.createElement(c.Z,(0,n.Z)({className:(0,a.Z)(s.root,d,"large"!==Z&&s["size".concat((0,l.Z)(Z))],h&&s.disabled,"extended"===k&&s.extended,{primary:s.primary,secondary:s.secondary,inherit:s.colorInherit}[p]),component:m,disabled:h,focusRipple:!v,focusVisibleClassName:(0,a.Z)(s.focusVisible,y),ref:t},E),i.createElement("span",{className:s.label},r))}));t.Z=(0,s.Z)((function(e){return{root:(0,n.Z)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(d)},79895:function(e,t,r){"use strict";var o=r(45987),n=r(87462),i=r(67294),a=r(86010),s=r(1591),c=i.forwardRef((function(e,t){var r=e.classes,s=e.className,c=e.component,l=void 0===c?"div":c,d=e.square,u=void 0!==d&&d,p=e.elevation,f=void 0===p?1:p,m=e.variant,b=void 0===m?"elevation":m,h=(0,o.Z)(e,["classes","className","component","square","elevation","variant"]);return i.createElement(l,(0,n.Z)({className:(0,a.Z)(r.root,s,"outlined"===b?r.outlined:r["elevation".concat(f)],!u&&r.rounded),ref:t},h))}));t.Z=(0,s.Z)((function(e){var t={};return e.shadows.forEach((function(e,r){t["elevation".concat(r)]={boxShadow:e}})),(0,n.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(c)},28358:function(e,t,r){"use strict";var o=r(87462),n=r(45987),i=r(4942),a=r(67294),s=r(86010),c=r(1591),l=a.forwardRef((function(e,t){var r=e.classes,i=e.className,c=e.component,l=void 0===c?"div":c,d=e.disableGutters,u=void 0!==d&&d,p=e.variant,f=void 0===p?"regular":p,m=(0,n.Z)(e,["classes","className","component","disableGutters","variant"]);return a.createElement(l,(0,o.Z)({className:(0,s.Z)(r.root,r[f],i,!u&&r.gutters),ref:t},m))}));t.Z=(0,c.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:(0,i.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(l)},76211:function(e,t,r){"use strict";var o=r(87462),n=r(97685),i=r(45987),a=r(67294),s=r(98885),c=r(43366),l=r(8920),d=r(5653),u=r(17294),p={entering:{transform:"none"},entered:{transform:"none"}},f={enter:c.x9.enteringScreen,exit:c.x9.leavingScreen},m=a.forwardRef((function(e,t){var r=e.children,c=e.disableStrictModeCompat,m=void 0!==c&&c,b=e.in,h=e.onEnter,g=e.onEntered,v=e.onEntering,y=e.onExit,x=e.onExited,Z=e.onExiting,w=e.style,k=e.timeout,E=void 0===k?f:k,C=e.TransitionComponent,S=void 0===C?s.ZP:C,T=(0,i.Z)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),j=(0,l.Z)(),R=j.unstable_strictMode&&!m,_=a.useRef(null),N=(0,u.Z)(r.ref,t),O=(0,u.Z)(R?_:void 0,N),P=function(e){return function(t,r){if(e){var o=R?[_.current,t]:[t,r],i=(0,n.Z)(o,2),a=i[0],s=i[1];void 0===s?e(a):e(a,s)}}},I=P(v),z=P((function(e,t){(0,d.n)(e);var r=(0,d.C)({style:w,timeout:E},{mode:"enter"});e.style.webkitTransition=j.transitions.create("transform",r),e.style.transition=j.transitions.create("transform",r),h&&h(e,t)})),A=P(g),M=P(Z),q=P((function(e){var t=(0,d.C)({style:w,timeout:E},{mode:"exit"});e.style.webkitTransition=j.transitions.create("transform",t),e.style.transition=j.transitions.create("transform",t),y&&y(e)})),L=P(x);return a.createElement(S,(0,o.Z)({appear:!0,in:b,nodeRef:R?_:void 0,onEnter:z,onEntered:A,onEntering:I,onExit:q,onExited:L,onExiting:M,timeout:E},T),(function(e,t){return a.cloneElement(r,(0,o.Z)({style:(0,o.Z)({transform:"scale(0)",visibility:"exited"!==e||b?void 0:"hidden"},p[e],w,r.props.style),ref:O},t))}))}));t.Z=m},41120:function(e,t,r){"use strict";var o=r(87462),n=r(11719),i=r(99700);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,n.Z)(e,(0,o.Z)({defaultTheme:i.Z},t))}},57369:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var o=r(87462),n=r(45987),i=r(67294);function a(e,t){var r=t.disableHysteresis,o=void 0!==r&&r,n=t.threshold,i=void 0===n?100:n,a=t.target,s=e.current;return a&&(e.current=void 0!==a.pageYOffset?a.pageYOffset:a.scrollTop),!(!o&&void 0!==s&&e.current<s)&&e.current>i}var s="undefined"!==typeof window?window:null;function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.getTrigger,r=void 0===t?a:t,c=e.target,l=void 0===c?s:c,d=(0,n.Z)(e,["getTrigger","target"]),u=i.useRef(),p=i.useState((function(){return r(u,d)})),f=p[0],m=p[1];return i.useEffect((function(){var e=function(){m(r(u,(0,o.Z)({target:l},d)))};return e(),l.addEventListener("scroll",e),function(){l.removeEventListener("scroll",e)}}),[l,r,JSON.stringify(d)]),f}},25281:function(e,t,r){"use strict";var o=r(95318),n=r(20862);t.Z=void 0;var i=n(r(67294)),a=(0,o(r(2108)).default)(i.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");t.Z=a},2899:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/appbar_back_to_top",function(){return r(58708)}])},58708:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var o=r(85893),n=r(67294),i=r(43832),a=r(80343),s=r(45697),c=r.n(s),l=r(45258),d=r(28358),u=r(22318),p=r(41120),f=r(75834),m=r(57369),b=r(33758),h=r(25281),g=r(76211);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){y(e,t,r[t])}))}return e}function Z(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=(0,p.Z)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function k(e){var t=e.children,r=e.window,n=w(),i=(0,m.Z)({target:r?r():void 0,disableHysteresis:!0,threshold:100});return(0,o.jsx)(g.Z,{in:i,children:(0,o.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:n.root,children:t})})}function E(e){return(0,o.jsxs)(n.Fragment,{children:[(0,o.jsx)(f.ZP,{}),(0,o.jsx)(l.Z,{children:(0,o.jsx)(d.Z,{children:(0,o.jsx)(u.Z,{variant:"h6",children:"Scroll to see button"})})}),(0,o.jsx)(d.Z,{id:"back-to-top-anchor"}),(0,o.jsx)(i.Z,{children:(0,o.jsx)(a.Z,{my:2,children:Z(new Array(12)).map((function(){return"Cras mattis consectetur purus sit amet fermentum.\nCras justo odio, dapibus ac facilisis in, egestas eget quam.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\nPraesent commodo cursus magna, vel scelerisque nisl consectetur et."})).join("\n")})}),(0,o.jsx)(k,x({},e,{children:(0,o.jsx)(b.Z,{color:"secondary",size:"small","aria-label":"scroll back to top",children:(0,o.jsx)(h.Z,{})})}))]})}function C(){return(0,o.jsx)(i.Z,{maxWidth:"xl",children:(0,o.jsx)(a.Z,{my:4,children:(0,o.jsx)(E,{})})})}k.propTypes={children:c().element.isRequired,window:c().func}},92703:function(e,t,r){"use strict";var o=r(50414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},45697:function(e,t,r){e.exports=r(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[7431,9774,2888,179],(function(){return t=2899,e(e.s=t);var t}));var t=e.O();_N_E=t}]);