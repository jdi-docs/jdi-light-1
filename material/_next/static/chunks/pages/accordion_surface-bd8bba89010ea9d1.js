(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7824],{17812:function(e,a,n){"use strict";var r=n(87462),t=n(45987),o=n(67294),i=n(86010),s=n(1591),d=n(59693),l=n(4024),c=n(93871),u=o.forwardRef((function(e,a){var n=e.edge,s=void 0!==n&&n,d=e.children,u=e.classes,p=e.className,f=e.color,m=void 0===f?"default":f,h=e.disabled,g=void 0!==h&&h,b=e.disableFocusRipple,x=void 0!==b&&b,v=e.size,y=void 0===v?"medium":v,Z=(0,t.Z)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return o.createElement(l.Z,(0,r.Z)({className:(0,i.Z)(u.root,p,"default"!==m&&u["color".concat((0,c.Z)(m))],g&&u.disabled,"small"===y&&u["size".concat((0,c.Z)(y))],{start:u.edgeStart,end:u.edgeEnd}[s]),centerRipple:!0,focusRipple:!x,disabled:g,ref:a},Z),o.createElement("span",{className:u.label},d))}));a.Z=(0,s.Z)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,d.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,d.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,d.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(u)},79895:function(e,a,n){"use strict";var r=n(45987),t=n(87462),o=n(67294),i=n(86010),s=n(1591),d=o.forwardRef((function(e,a){var n=e.classes,s=e.className,d=e.component,l=void 0===d?"div":d,c=e.square,u=void 0!==c&&c,p=e.elevation,f=void 0===p?1:p,m=e.variant,h=void 0===m?"elevation":m,g=(0,r.Z)(e,["classes","className","component","square","elevation","variant"]);return o.createElement(l,(0,t.Z)({className:(0,i.Z)(n.root,s,"outlined"===h?n.outlined:n["elevation".concat(f)],!u&&n.rounded),ref:a},g))}));a.Z=(0,s.Z)((function(e){var a={};return e.shadows.forEach((function(e,n){a["elevation".concat(n)]={boxShadow:e}})),(0,t.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},a)}),{name:"MuiPaper"})(d)},41120:function(e,a,n){"use strict";var r=n(87462),t=n(11719),o=n(99700);a.Z=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,t.Z)(e,(0,r.Z)({defaultTheme:o.Z},a))}},67242:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/accordion_surface",function(){return n(3600)}])},3600:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return q}});var r=n(85893),t=n(67294),o=n(43832),i=n(80343),s=n(41120),d=n(87462),l=n(83878),c=n(59199),u=n(40181),p=n(25267);var f=n(97685),m=n(45987),h=(n(59864),n(86010)),g=n(66037),b=n(79895),x=n(1591);var v=t.createContext({}),y=n(22775),Z=t.forwardRef((function(e,a){var n,r=e.children,o=e.classes,i=e.className,s=e.defaultExpanded,x=void 0!==s&&s,Z=e.disabled,j=void 0!==Z&&Z,N=e.expanded,C=e.onChange,R=e.square,w=void 0!==R&&R,k=e.TransitionComponent,E=void 0===k?g.Z:k,S=e.TransitionProps,I=(0,m.Z)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),_=(0,y.Z)({controlled:N,default:x,name:"Accordion",state:"expanded"}),$=(0,f.Z)(_,2),A=$[0],T=$[1],q=t.useCallback((function(e){T(!A),C&&C(e,!A)}),[A,C,T]),P=t.Children.toArray(r),z=(n=P,(0,l.Z)(n)||(0,c.Z)(n)||(0,u.Z)(n)||(0,p.Z)()),B=z[0],O=z.slice(1),M=t.useMemo((function(){return{expanded:A,disabled:j,toggle:q}}),[A,j,q]);return t.createElement(b.Z,(0,d.Z)({className:(0,h.Z)(o.root,i,A&&o.expanded,j&&o.disabled,!w&&o.rounded),ref:a,square:w},I),t.createElement(v.Provider,{value:M},B),t.createElement(E,(0,d.Z)({in:A,timeout:"auto"},S),t.createElement("div",{"aria-labelledby":B.props.id,id:B.props["aria-controls"],role:"region"},O)))})),j=(0,x.Z)((function(e){var a={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],a),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],a)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(Z),N=t.forwardRef((function(e,a){var n=e.classes,r=e.className,o=(0,m.Z)(e,["classes","className"]);return t.createElement("div",(0,d.Z)({className:(0,h.Z)(n.root,r),ref:a},o))})),C=(0,x.Z)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(N),R=n(4024),w=n(17812),k=t.forwardRef((function(e,a){var n=e.children,r=e.classes,o=e.className,i=e.expandIcon,s=e.focusVisibleClassName,l=e.IconButtonProps,c=void 0===l?{}:l,u=e.onClick,p=(0,m.Z)(e,["children","classes","className","expandIcon","focusVisibleClassName","IconButtonProps","onClick"]),f=t.useContext(v),g=f.disabled,b=void 0!==g&&g,x=f.expanded,y=f.toggle;return t.createElement(R.Z,(0,d.Z)({focusRipple:!1,disableRipple:!0,disabled:b,component:"div","aria-expanded":x,className:(0,h.Z)(r.root,o,b&&r.disabled,x&&r.expanded),focusVisibleClassName:(0,h.Z)(r.focusVisible,r.focused,s),onClick:function(e){y&&y(e),u&&u(e)},ref:a},p),t.createElement("div",{className:(0,h.Z)(r.content,x&&r.expanded)},n),i&&t.createElement(w.Z,(0,d.Z)({className:(0,h.Z)(r.expandIcon,x&&r.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},c),i))})),E=(0,x.Z)((function(e){var a={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],a),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused, &$focusVisible":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},focusVisible:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],a),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",a),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(k),S=n(22318),I=n(64566);function _(e,a){(null==a||a>e.length)&&(a=e.length);for(var n=0,r=new Array(a);n<a;n++)r[n]=e[n];return r}function $(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,t,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!a||o.length!==a);i=!0);}catch(d){s=!0,t=d}finally{try{i||null==n.return||n.return()}finally{if(s)throw t}}return o}}(e,a)||function(e,a){if(!e)return;if("string"===typeof e)return _(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var A=(0,s.Z)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}}));function T(){var e=A(),a=$(t.useState(!1),2),n=a[0],o=a[1],i=function(e){return function(a,n){o(!!n&&e)}};return(0,r.jsxs)("div",{className:e.root,children:[(0,r.jsx)("h1",{children:"Accordion"}),(0,r.jsxs)(j,{expanded:"panel1"===n,onChange:i("panel1"),children:[(0,r.jsxs)(E,{expandIcon:(0,r.jsx)(I.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:[(0,r.jsx)(S.Z,{className:e.heading,children:"General settings"}),(0,r.jsx)(S.Z,{className:e.secondaryHeading,children:"I am an accordion"})]}),(0,r.jsx)(C,{children:(0,r.jsx)(S.Z,{children:"Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."})})]}),(0,r.jsxs)(j,{expanded:"panel2"===n,onChange:i("panel2"),children:[(0,r.jsxs)(E,{expandIcon:(0,r.jsx)(I.Z,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:[(0,r.jsx)(S.Z,{className:e.heading,children:"Users"}),(0,r.jsx)(S.Z,{className:e.secondaryHeading,children:"You are currently not an owner"})]}),(0,r.jsx)(C,{children:(0,r.jsx)(S.Z,{children:"Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."})})]}),(0,r.jsxs)(j,{expanded:"panel3"===n,onChange:i("panel3"),children:[(0,r.jsxs)(E,{expandIcon:(0,r.jsx)(I.Z,{}),"aria-controls":"panel3a-content",id:"panel3a-header",children:[(0,r.jsx)(S.Z,{className:e.heading,children:"Advanced settings"}),(0,r.jsx)(S.Z,{className:e.secondaryHeading,children:"Filtering has been entirely disabled for whole web server"})]}),(0,r.jsx)(C,{children:(0,r.jsx)(S.Z,{children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]}),(0,r.jsxs)(j,{expanded:"panel4"===n,onChange:i("panel4"),children:[(0,r.jsx)(E,{expandIcon:(0,r.jsx)(I.Z,{}),"aria-controls":"panel4a-content",id:"panel4a-header",children:(0,r.jsx)(S.Z,{className:e.heading,children:"Personal data"})}),(0,r.jsx)(C,{children:(0,r.jsx)(S.Z,{children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]}),(0,r.jsx)(j,{disabled:!0,children:(0,r.jsx)(E,{expandIcon:(0,r.jsx)(I.Z,{}),"aria-controls":"panel5a-content",id:"panel5a-header",children:(0,r.jsx)(S.Z,{className:e.heading,children:"Disabled Accordion"})})})]})}function q(){return(0,r.jsx)(o.Z,{maxWidth:"xl",children:(0,r.jsx)(i.Z,{my:4,children:(0,r.jsx)(T,{})})})}},69921:function(e,a){"use strict";var n=60103,r=60106,t=60107,o=60108,i=60114,s=60109,d=60110,l=60112,c=60113,u=60120,p=60115,f=60116,m=60121,h=60122,g=60117,b=60129,x=60131;if("function"===typeof Symbol&&Symbol.for){var v=Symbol.for;n=v("react.element"),r=v("react.portal"),t=v("react.fragment"),o=v("react.strict_mode"),i=v("react.profiler"),s=v("react.provider"),d=v("react.context"),l=v("react.forward_ref"),c=v("react.suspense"),u=v("react.suspense_list"),p=v("react.memo"),f=v("react.lazy"),m=v("react.block"),h=v("react.server.block"),g=v("react.fundamental"),b=v("react.debug_trace_mode"),x=v("react.legacy_hidden")}function y(e){if("object"===typeof e&&null!==e){var a=e.$$typeof;switch(a){case n:switch(e=e.type){case t:case i:case o:case c:case u:return e;default:switch(e=e&&e.$$typeof){case d:case l:case f:case p:case s:return e;default:return a}}case r:return a}}}},59864:function(e,a,n){"use strict";n(69921)}},function(e){e.O(0,[7431,9774,2888,179],(function(){return a=67242,e(e.s=a);var a}));var a=e.O();_N_E=a}]);