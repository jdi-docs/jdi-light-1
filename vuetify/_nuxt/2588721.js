(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1015:function(e,t,r){"use strict";r.r(t);var d={data:function(){return{items:[{text:"Dashboard",disabled:!1,href:"#dashboard"},{text:"Link 1",disabled:!1,href:"#link1"},{text:"Link 2",disabled:!0,href:"#link2"}]}}},n=r(74),c=r(169),l=r.n(c),o=r(1041),component=Object(n.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-breadcrumbs",{attrs:{items:e.items,divider:"-"}}),e._v(" "),r("v-breadcrumbs",{attrs:{items:e.items,divider:"/"}}),e._v(" "),r("v-breadcrumbs",{attrs:{items:e.items,divider:"\\"}}),e._v(" "),r("v-breadcrumbs",{attrs:{items:e.items,divider:"."}}),e._v(" "),r("v-breadcrumbs",{attrs:{items:e.items,divider:";"}}),e._v(" "),r("v-breadcrumbs",{attrs:{items:e.items,divider:">"}})],1)}),[],!1,null,null,null),m=component.exports;l()(component,{VBreadcrumbs:o.a});var v={data:function(){return{items:[{text:"Dashboard",disabled:!1,href:"#dashboard"},{text:"Link 1",disabled:!1,href:"#link1"},{text:"Link 2",disabled:!0,href:"#link2"}]}}},f=Object(n.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-breadcrumbs",{attrs:{items:e.items,large:""}})],1)}),[],!1,null,null,null),h=f.exports;l()(f,{VBreadcrumbs:o.a});var _={data:function(){return{items:[{text:"Dashboard",disabled:!1,href:"#dashboard"},{text:"Link 1",disabled:!1,href:"#link1"},{text:"Link 2",disabled:!0,href:"#link2"}]}}},x=r(156),k=Object(n.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-breadcrumbs",{attrs:{items:e.items},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-forward")])]},proxy:!0}])}),e._v(" "),r("v-breadcrumbs",{attrs:{items:e.items},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)}),[],!1,null,null,null),B=k.exports;l()(k,{VBreadcrumbs:o.a,VIcon:x.a});var D={data:function(){return{items:[{text:"Dashboard",disabled:!1,href:"#dashboard"},{text:"Link 1",disabled:!1,href:"#link1"},{text:"Link 2",disabled:!0,href:"#link2"}]}}},L=r(787),C=Object(n.a)(D,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-breadcrumbs",{attrs:{items:e.items},scopedSlots:e._u([{key:"item",fn:function(t){var d=t.item;return[r("v-breadcrumbs-item",{attrs:{href:d.href,disabled:d.disabled}},[e._v("\n        "+e._s(d.text.toUpperCase())+"\n      ")])]}}])})],1)}),[],!1,null,null,null),y=C.exports;l()(C,{VBreadcrumbs:o.a,VBreadcrumbsItem:L.a});var I={name:"Breadcrumbs",components:{DifferentDividersBreadcrumbs:m,LargeBreadcrumbs:h,CustomDividersBreadcrumbs:B,ItemSlotBreadcrumbs:y}},V=r(953),w=r(1040),j=Object(n.a)(I,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-col",[r("h1",[e._v("Breadcrumbs")]),e._v(" "),r("p",{staticClass:"body-1 mt-2"},[e._v("\n      The "),r("code",[e._v("v-breadcrumbs")]),e._v(" component is a navigational helper for pages. \n      It can accept a Material Icons icon or text characters as a divider. \n      An array of objects can be passed to the items property of the component. \n      Additionally, slots exists for more control of the breadcrumbs, either utilizing "),r("code",[e._v("v-breadcrumbs-item")]),e._v(" or other custom markup.\n    ")])]),e._v(" "),r("v-col",[r("p",{staticClass:"text-h5"},[e._v("\n      Dividers\n    ")]),e._v(" "),r("DifferentDividersBreadcrumbs",{attrs:{id:"differentDividersBreadcrumbs"}})],1),e._v(" "),r("v-col",[r("p",{staticClass:"text-h5"},[e._v("\n      Large breadcrumbs\n    ")]),e._v(" "),r("LargeBreadcrumbs",{attrs:{id:"largeBreadcrumbs"}})],1),e._v(" "),r("v-col",[r("p",{staticClass:"text-h5"},[e._v("\n      Icon dividers\n    ")]),e._v(" "),r("CustomDividersBreadcrumbs",{attrs:{id:"customDividersBreadcrumbs"}})],1),e._v(" "),r("p",{staticClass:"text-h5"},[e._v("\n      Item slot breadcrumbs\n    ")]),e._v(" "),r("ItemSlotBreadcrumbs",{attrs:{id:"itemSlotBreadcrumbs"}})],1)}),[],!1,null,null,null);t.default=j.exports;l()(j,{VCol:V.a,VContainer:w.a})}}]);