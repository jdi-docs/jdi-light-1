_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[95],{"2hSl":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/textarea_autosize",function(){return n("ToeC")}])},GIek:function(e,t,n){"use strict";function r(e,t){"function"===typeof e?e(t):e&&(e.current=t)}n.d(t,"a",(function(){return r}))},ToeC:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("nKUr"),i=(n("q1tI"),n("Ji2X")),a=n("hlFM"),o=n("g3U7");function u(){return Object(r.jsx)(o.a,{"aria-label":"minimum height",rowsMin:3,placeholder:"Minimum 3 rows"})}function c(){return Object(r.jsx)(o.a,{rowsMax:4,"aria-label":"maximum height",placeholder:"Maximum 4 rows",defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}function l(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"TextArea Autosize"}),Object(r.jsx)("h2",{children:"Empty"}),Object(r.jsx)(o.a,{"aria-label":"empty textarea",placeholder:"Empty"}),Object(r.jsx)("h2",{children:"Minimum height"}),Object(r.jsx)(u,{id:"minHeightTextarea"}),Object(r.jsx)("h2",{children:"Maximum height"}),Object(r.jsx)(c,{id:"maxHeightTextarea"})]})}function s(){return Object(r.jsx)(i.a,{maxWidth:"xl",children:Object(r.jsx)(a.a,{my:4,children:Object(r.jsx)(l,{})})})}},bfFb:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI"),i=n("GIek");function a(e,t){return r.useMemo((function(){return null==e&&null==t?null:function(n){Object(i.a)(e,n),Object(i.a)(t,n)}}),[e,t])}},g3U7:function(e,t,n){"use strict";var r=n("wx14"),i=n("Ff2n"),a=n("q1tI"),o=(n("17x9"),n("l3Wi")),u=n("bfFb");function c(e,t){return parseInt(e[t],10)||0}var l="undefined"!==typeof window?a.useLayoutEffect:a.useEffect,s={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},d=a.forwardRef((function(e,t){var n=e.onChange,d=e.rows,f=e.rowsMax,h=e.rowsMin,m=e.maxRows,b=e.minRows,w=void 0===b?1:b,x=e.style,j=e.value,v=Object(i.a)(e,["onChange","rows","rowsMax","rowsMin","maxRows","minRows","style","value"]),p=m||f,g=d||h||w,O=a.useRef(null!=j).current,y=a.useRef(null),M=Object(u.a)(t,y),E=a.useRef(null),_=a.useRef(0),T=a.useState({}),N=T[0],R=T[1],C=a.useCallback((function(){var t=y.current,n=window.getComputedStyle(t),r=E.current;r.style.width=n.width,r.value=t.value||e.placeholder||"x","\n"===r.value.slice(-1)&&(r.value+=" ");var i=n["box-sizing"],a=c(n,"padding-bottom")+c(n,"padding-top"),o=c(n,"border-bottom-width")+c(n,"border-top-width"),u=r.scrollHeight-a;r.value="x";var l=r.scrollHeight-a,s=u;g&&(s=Math.max(Number(g)*l,s)),p&&(s=Math.min(Number(p)*l,s));var d=(s=Math.max(s,l))+("border-box"===i?a+o:0),f=Math.abs(s-u)<=1;R((function(e){return _.current<20&&(d>0&&Math.abs((e.outerHeightStyle||0)-d)>1||e.overflow!==f)?(_.current+=1,{overflow:f,outerHeightStyle:d}):e}))}),[p,g,e.placeholder]);a.useEffect((function(){var e=Object(o.a)((function(){_.current=0,C()}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[C]),l((function(){C()})),a.useEffect((function(){_.current=0}),[j]);return a.createElement(a.Fragment,null,a.createElement("textarea",Object(r.a)({value:j,onChange:function(e){_.current=0,O||C(),n&&n(e)},ref:M,rows:g,style:Object(r.a)({height:N.outerHeightStyle,overflow:N.overflow?"hidden":null},x)},v)),a.createElement("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:E,tabIndex:-1,style:Object(r.a)({},s,x)}))}));t.a=d},l3Wi:function(e,t,n){"use strict";function r(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=this,u=function(){e.apply(o,i)};clearTimeout(t),t=setTimeout(u,n)}return r.clear=function(){clearTimeout(t)},r}n.d(t,"a",(function(){return r}))}},[["2hSl",0,1,2,3]]]);