(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1009:function(n,t,e){"use strict";e.r(t);var r={data:function(){return{snackbar:!1,text:"Hello, I'm a snackbar"}}},c=e(74),o=e(169),l=e.n(o),v=e(389),k=e(1040),_=e(564),component=Object(c.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-container",[e("h2",[n._v("Simple Snackbar")]),n._v(" "),e("div",{staticClass:"text-center ma-2"},[e("v-btn",{attrs:{dark:""},on:{click:function(t){n.snackbar=!0}}},[n._v("\n      Open Snackbar\n    ")]),n._v(" "),e("v-snackbar",{scopedSlots:n._u([{key:"action",fn:function(t){var r=t.attrs;return[e("v-btn",n._b({attrs:{color:"pink",text:""},on:{click:function(t){n.snackbar=!1}}},"v-btn",r,!1),[n._v("\n          Close\n        ")])]}}]),model:{value:n.snackbar,callback:function(t){n.snackbar=t},expression:"snackbar"}},[n._v("\n      "+n._s(n.text)+"\n\n      ")])],1)])}),[],!1,null,null,null),m=component.exports;l()(component,{VBtn:v.a,VContainer:k.a,VSnackbar:_.a});var f={data:function(){return{multiLine:!0,snackbar:!1,text:"I'm a multi-line snackbar."}}},d=Object(c.a)(f,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-container",[e("h2",[n._v("Multi line Snackbar")]),n._v(" "),e("div",{staticClass:"text-center"},[e("v-btn",{attrs:{dark:"",color:"red darken-2"},on:{click:function(t){n.snackbar=!0}}},[n._v("\n      Open Snackbar\n    ")]),n._v(" "),e("v-snackbar",{attrs:{"multi-line":n.multiLine},scopedSlots:n._u([{key:"action",fn:function(t){var r=t.attrs;return[e("v-btn",n._b({attrs:{color:"red",text:""},on:{click:function(t){n.snackbar=!1}}},"v-btn",r,!1),[n._v("\n          Close\n        ")])]}}]),model:{value:n.snackbar,callback:function(t){n.snackbar=t},expression:"snackbar"}},[n._v("\n      "+n._s(n.text)+"\n\n      ")])],1)])}),[],!1,null,null,null),S=d.exports;l()(d,{VBtn:v.a,VContainer:k.a,VSnackbar:_.a});var x={data:function(){return{snackbar:!1,text:"My timeout is set to 2000.",timeout:2e3}}},h=Object(c.a)(x,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-container",[e("h2",[n._v("Timeout Snackbar")]),n._v(" "),e("div",{staticClass:"text-center"},[e("v-btn",{attrs:{dark:"",color:"orange darken-2"},on:{click:function(t){n.snackbar=!0}}},[n._v("\n      Open Snackbar\n    ")]),n._v(" "),e("v-snackbar",{attrs:{timeout:n.timeout},scopedSlots:n._u([{key:"action",fn:function(t){var r=t.attrs;return[e("v-btn",n._b({attrs:{color:"blue",text:""},on:{click:function(t){n.snackbar=!1}}},"v-btn",r,!1),[n._v("\n          Close\n        ")])]}}]),model:{value:n.snackbar,callback:function(t){n.snackbar=t},expression:"snackbar"}},[n._v("\n      "+n._s(n.text)+"\n\n      ")])],1)])}),[],!1,null,null,null),V=h.exports;l()(h,{VBtn:v.a,VContainer:k.a,VSnackbar:_.a});var C=e(378),y=Object(c.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-container",[e("h2",[n._v("Different styles Snackbars")]),n._v(" "),e("v-card",{attrs:{height:"300",flat:""}},[e("v-snackbar",{attrs:{timeout:-1,value:!0,absolute:"",left:"",shaped:"",top:""}},[n._v("\n      Lorem ipsum dolor sit amet consectetur.\n    ")]),n._v(" "),e("v-snackbar",{attrs:{timeout:-1,value:!0,color:"blue-grey",absolute:"",right:"",rounded:"pill",top:""}},[n._v("\n      Lorem ipsum dolor sit amet consectetur.\n    ")]),n._v(" "),e("v-snackbar",{attrs:{timeout:-1,value:!0,absolute:"",centered:"",color:"deep-purple accent-4",elevation:"24"}},[n._v("\n      Lorem ipsum dolor sit amet consectetur.\n    ")]),n._v(" "),e("v-snackbar",{attrs:{timeout:-1,value:!0,absolute:"",bottom:"",color:"primary",left:"",text:""}},[n._v("\n      Lorem ipsum dolor sit amet consectetur.\n    ")]),n._v(" "),e("v-snackbar",{attrs:{timeout:-1,value:!0,absolute:"",bottom:"",color:"success",outlined:"",right:""}},[n._v("\n      Lorem ipsum dolor sit amet consectetur.\n    ")])],1)],1)}),[],!1,null,null,null),L=y.exports;l()(y,{VCard:C.a,VContainer:k.a,VSnackbar:_.a});var O={data:function(){return{snackbar:!1,text:"Lorem ipsum dolor sit amet",vertical:!0}}},j=Object(c.a)(O,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-container",[e("h2",[n._v("Vertical Snackbar")]),n._v(" "),e("div",{staticClass:"text-center"},[e("v-btn",{attrs:{dark:"",color:"indigo"},on:{click:function(t){n.snackbar=!0}}},[n._v("\n      Open Snackbar\n    ")]),n._v(" "),e("v-snackbar",{attrs:{vertical:n.vertical},scopedSlots:n._u([{key:"action",fn:function(t){var r=t.attrs;return[e("v-btn",n._b({attrs:{color:"indigo",text:""},on:{click:function(t){n.snackbar=!1}}},"v-btn",r,!1),[n._v("\n          Close\n        ")])]}}]),model:{value:n.snackbar,callback:function(t){n.snackbar=t},expression:"snackbar"}},[n._v("\n      "+n._s(n.text)+"\n\n      ")])],1)])}),[],!1,null,null,null),w=j.exports;l()(j,{VBtn:v.a,VContainer:k.a,VSnackbar:_.a});var E={name:"Snackbars",components:{SimpleSnackbar:m,MultiLineSnackbar:S,TimeoutSnackbar:V,DifferentStylesSnackbars:L,VerticalSnackbar:w}},M=(e(912),e(953)),$=Object(c.a)(E,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-container",{staticClass:"snackbars"},[e("v-col",[e("h1",[n._v("Snackbars")]),n._v(" "),e("p",{staticClass:"body-1 mt-2"},[n._v("\n      The "),e("code",[n._v("v-snackbar")]),n._v(" component is used to display a quick message to a user. \n      Snackbars support positioning, removal delay, and callbacks.\n    ")])]),n._v(" "),e("SimpleSnackbar"),n._v(" "),e("MultiLineSnackbar"),n._v(" "),e("TimeoutSnackbar"),n._v(" "),e("DifferentStylesSnackbars"),n._v(" "),e("VerticalSnackbar")],1)}),[],!1,null,null,null);t.default=$.exports;l()($,{VCol:M.a,VContainer:k.a})},752:function(n,t,e){var content=e(913);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(23).default)("1082bbab",content,!0,{sourceMap:!1})},912:function(n,t,e){"use strict";e(752)},913:function(n,t,e){var r=e(22)(!1);r.push([n.i,"h1{text-align:center}h2{margin-bottom:15px}",""]),n.exports=r}}]);