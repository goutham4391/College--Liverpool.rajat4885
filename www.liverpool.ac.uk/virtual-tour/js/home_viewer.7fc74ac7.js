(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home~viewer"],{"43b3":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-44 font-heavy text-lg md:text-2xl text-white",attrs:{"aria-hidden":"true"}},[n("div",{staticClass:"flex items-end"},[n("span",{staticClass:"flex-c h-10 w-24 md:h-16 md:w-40 border-4 md:border-6 border-white -mr-1",attrs:{id:"gsap-title-the"}},[t._v(" THE ")]),n("span",{staticClass:"h-16 w-48 md:h-28 md:w-78 text-body text-2xl md:text-5xl overflow-hidden",attrs:{id:"gsap-title-original"}},[n("svg",{class:"h-auto w-full",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 87 32","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[n("path",{attrs:{fill:"#fff",d:"M64.446 17.221h2.624l-1.319-3.803zM24.526 13.348h-1.908v2.105h1.908a1.058 1.058 0 10-.005-2.104h.005zM13.286 13.292c-1.557 0-2.554 1.179-2.554 2.708 0 1.515.997 2.708 2.554 2.708 1.544 0 2.54-1.193 2.54-2.708 0-1.529-.996-2.708-2.54-2.708z"}}),n("path",{attrs:{fill:"#fff",d:"M0 0v31.999h87.372V0zm13.286 20.841c-2.862 0-5.009-1.993-5.009-4.841s2.147-4.841 5.009-4.841 4.995 1.993 4.995 4.841-2.133 4.841-4.995 4.841zm12.138-.17L23.852 17.5h-1.235v3.173h-2.413v-9.36h4.687c2.077 0 3.256 1.375 3.256 3.115a2.836 2.836 0 01-1.848 2.8l-.02.006 1.908 3.438zm7.17 0H30.18v-9.358h2.414zm11.113-1.656a5.396 5.396 0 01-4.05 1.825l-.094-.001h.005c-2.792 0-5.065-1.867-5.065-4.841s2.273-4.841 5.065-4.841c2.049 0 3.312 1.01 3.999 2.175l-2.021 1.067a2.33 2.33 0 00-1.978-1.109c-1.529 0-2.61 1.179-2.61 2.708s1.081 2.708 2.61 2.708h.048c.647 0 1.245-.211 1.728-.568l-.008.006v-.786h-2.147v-2.007h4.518zm4.532 1.656h-2.413v-9.358h2.413zm11.086 0h-2.329l-3.957-5.655v5.657h-2.413v-9.36h2.484l3.789 5.388v-5.388h2.428zm8.854 0l-.477-1.417h-3.887l-.477 1.417h-2.624l3.522-9.36h3.031l3.536 9.36zm10.187 0h-6.174v-9.358h2.413v7.255h3.76z"}})])])]),t._m(0)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex h-10 md:h-16 pl-12 md:pl-20 -mt-1"},[n("span",{staticClass:"flex-c h-full w-24 md:w-40 border-4 md:border-6 border-white -mr-1",attrs:{id:"gsap-title-red"}},[t._v(" RED ")]),n("span",{staticClass:"flex-c h-full w-24 md:w-40 border-4 md:border-6 border-white",attrs:{id:"gsap-title-brick"}},[t._v(" BRICK ")])])}],i=n("5530"),u=n("2f62"),a={name:"Title",computed:Object(i["a"])({},Object(u["c"])(["touch","mobile"]),{},Object(u["b"])([]))},c=a,s=n("2877"),d=Object(s["a"])(c,r,o,!1,null,null,null);e["a"]=d.exports},"5df7":function(t,e,n){(function(e,n){t.exports=n()})(0,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(t){for(var e=Array(t.length),n=0;n<t.length;++n)e[n]=t[n];return e},o=function(t,e){return t.filter((function(t){return t===e}))[0]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"FOCUS_GROUP",(function(){return r})),n.d(e,"FOCUS_DISABLED",(function(){return o})),n.d(e,"FOCUS_ALLOW",(function(){return i})),n.d(e,"FOCUS_AUTO",(function(){return u}));var r="data-focus-lock",o="data-focus-lock-disabled",i="data-no-focus-lock",u="data-autofocus-inside"},function(t,e,n){"use strict";var r=n(1),o=n(0),i=function t(e){var n=e.length,r=void 0,o=void 0;for(r=0;r<n;r+=1)for(o=0;o<n;o+=1)if(r!==o&&e[r].contains(e[o]))return t(e.filter((function(t){return t!==e[o]})));return e},u=function t(e){return e.parentNode?t(e.parentNode):e},a=function(t){var e=t.getAttribute(r["FOCUS_GROUP"]);return e?i(n.i(o["a"])(u(t).querySelectorAll("["+r["FOCUS_GROUP"]+'="'+e+'"]:not(['+r["FOCUS_DISABLED"]+'="disabled"])'))):[t]};e["a"]=a},function(t,e,n){"use strict";var r=n(12),o=n(13),i=n(2),u=function(t){return function(e){return!!e.autofocus||e.dataset&&!!e.dataset.autofocus||t.indexOf(e)>=0}},a=function(t,e,r,i,u){var a=t.length,c=t[0],s=t[a-1];if(!(t.indexOf(r)>=0)){var d=e.indexOf(r),l=e.indexOf(i||d),f=t.indexOf(i),v=d-l,p=e.indexOf(c),h=e.indexOf(s);return-1===d||-1===f?t.indexOf(u.length?n.i(o["a"])(u):n.i(o["a"])(t)):!v&&f>=0||v&&Math.abs(v)>1?f:d<=p?a-1:d>h?0:v?Math.abs(v)>1?f:(a+f+v)%a:void 0}},c=function(t,e,o){var i=e;return o.forEach((function(e){var o=n.i(r["a"])(t,e);o&&(i=o.contains(i)?o:n.i(r["a"])(o,i))})),i},s=function(t){return t.reduce((function(t,e){return t.concat(n.i(r["b"])(e))}),[])},d=function(t){return!(t.dataset&&t.dataset.focusGuard)},l=function(t,e){var o=document&&document.activeElement,l=n.i(i["a"])(t).filter(d),f=c(o||t,t,l),v=n.i(r["c"])(l).filter((function(t){var e=t.node;return d(e)}));if(v[0]||(v=n.i(r["d"])(l).filter((function(t){var e=t.node;return d(e)})),v[0])){var p=v.map((function(t){var e=t.node;return e})),h=n.i(r["c"])([f]).map((function(t){var e=t.node;return e})),m=a(p,h,o,e,p.filter(u(s(l))));return void 0===m?m:v[m]}};e["a"]=l},function(t,e,n){var r=n(17)(n(5),n(18),null,null);r.options.__file="/Users/akorzunov/dev/Z/mellis/github/focus/vue-focus-lock/src/Lock.vue",r.esModule&&Object.keys(r.esModule).some((function(t){return"default"!==t&&"__esModule"!==t}))&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] Lock.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),o=i(r);function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){var e=window.setImmediate;"undefined"!==typeof e?e(t):setTimeout(t,1)}var c=0,s=null,d=!1,l=function(){return document&&document.activeElement===document.body},f=function(){return l()||(0,r.focusIsHidden)()},v=function(){var t=!1;if(c){var e=c,n=e.observed,i=e.onActivation;!d&&f()&&s||(n&&!(0,r.focusInside)(n)&&(i(),t=(0,o.default)(n,s)),d=!1,s=document&&document.activeElement)}return t},p=function(t){return t.filter((function(t){var e=t.disabled;return!e})).slice(-1)[0]},h=function(t){c!==t&&(c=null),c=t,t&&(v(),a(v))},m=[],b=function(){h(p(m))},x=function(t){v()&&t&&(t.stopPropagation(),t.preventDefault())},g=function(){a(v)},y=function(){d=!0},_=function(){document.addEventListener("focusin",x,!0),document.addEventListener("focusout",g),window.addEventListener("blur",y)},O=function(){document.removeEventListener("focusin",x,!0),document.removeEventListener("focusout",g),window.removeEventListener("blur",y)};e.default={name:"Lock",props:{returnFocus:{type:Boolean},disabled:{type:Boolean},noFocusGuards:{type:[Boolean,String],default:!1},group:{type:String}},data:function(){return{data:{},hidden:""}},computed:{groupAttr:function(){return u({},r.constants.FOCUS_GROUP,this.group)},hasLeadingGuards:function(){return!0!==this.noFocusGuards},hasTailingGuards:function(){return this.hasLeadingGuards&&"tail"!==this.noFocusGuards}},watch:{disabled:function(){this.data.disabled=this.disabled,b()}},methods:{onBlur:function(){a(b)}},mounted:function(){var t=this;this.data.vue=this,this.data.observed=this.$el.querySelector("[data-lock]"),this.data.disabled=this.disabled,this.data.onActivation=function(){t.originalFocusedElement=t.originalFocusedElement||document&&document.activeElement},m.length||_(),m.push(this.data),b()},destroyed:function(){var t=this;m=m.filter((function(e){var n=e.vue;return n!==t})),m.length||O(),this.returnFocus&&this.originalFocusedElement&&this.originalFocusedElement.focus&&this.originalFocusedElement.focus(),b()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),o=i(r);function i(t){return t&&t.__esModule?t:{default:t}}e.default=o.default},function(t,e,n){"use strict";var r=n(2),o=n(0),i=function(t){return t===document.activeElement},u=function(t){return n.i(r["a"])(t).reduce((function(t,e){return t||!!n.i(o["b"])(n.i(o["a"])(e.querySelectorAll("iframe")),i)}),!1)},a=function(t){var e=document&&document.activeElement;return!(!e||e.dataset&&e.dataset.focusGuard)&&n.i(r["a"])(t).reduce((function(n,r){return n||r.contains(e)||u(t)}),!1)};e["a"]=a},function(t,e,n){"use strict";var r=n(0),o=n(1),i=function(){return document&&n.i(r["a"])(document.querySelectorAll("["+o["FOCUS_ALLOW"]+"]")).some((function(t){return t.contains(document.activeElement)}))};e["a"]=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(11),o=n(3),i=n(7),u=n(8),a=n(10),c=n(1),s=n(2);n.d(e,"tabHook",(function(){return r["a"]})),n.d(e,"focusInside",(function(){return i["a"]})),n.d(e,"focusIsHidden",(function(){return u["a"]})),n.d(e,"focusMerge",(function(){return o["a"]})),n.d(e,"constants",(function(){return c})),n.d(e,"getAllAffectedNodes",(function(){return s["a"]})),e["default"]=a["a"]},function(t,e,n){"use strict";var r=n(3),o=function(t){t.focus(),t.contentWindow&&t.contentWindow.focus()},i=0,u=!1;e["a"]=function(t,e){var a=n.i(r["a"])(t,e);if(!u&&a){if(i>2)return void 0;i++,o(a.node),i--}}},function(t,e,n){"use strict";e["a"]={attach:function(t,e){},detach:function(){}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return v})),n.d(e,"b",(function(){return p}));var r=n(14),o=n(15),i=n(0),u=function(t){return!(!t||!t.getPropertyValue)&&("none"===t.getPropertyValue("display")||"hidden"===t.getPropertyValue("visibility"))},a=function t(e){return!e||e===document||!u(window.getComputedStyle(e,null))&&t(e.parentNode)},c=function(t){return!(("INPUT"===t.tagName||"BUTTON"===t.tagName)&&("hidden"===t.type||t.disabled))},s=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.push(e),e.parentNode&&t(e.parentNode,n),n},d=function(t,e){for(var n=s(t),r=s(e),o=0;o<n.length;o+=1){var i=n[o];if(r.indexOf(i)>=0)return i}return!1},l=function(t){return n.i(i["a"])(t).filter((function(t){return a(t)})).filter((function(t){return c(t)}))},f=function(t){return n.i(r["a"])(l(n.i(o["a"])(t)),!0)},v=function(t){return n.i(r["a"])(l(n.i(o["a"])(t)),!1)},p=function(t){return l(n.i(o["b"])(t))}},function(t,e,n){"use strict";var r=function(t){return"INPUT"===t.tagName&&"radio"===t.type},o=function(t,e){return e.filter(r).filter((function(e){return e.name===t.name})).filter((function(t){return t.checked}))[0]||t},i=function(t){return t[0]&&t.length>1&&r(t[0])&&t[0].name?o(t[0],t):t[0]};e["a"]=i},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(0),o=function(t,e){var n=t.tabIndex-e.tabIndex,r=t.index-e.index;if(n){if(!t.tabIndex)return 1;if(!e.tabIndex)return-1}return n||r},i=function(t,e){return n.i(r["a"])(t).map((function(t,e){return{node:t,index:e,tabIndex:t.tabIndex}})).filter((function(t){return!e||t.tabIndex>=0})).sort(o)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return a}));var r=n(16),o=n(0),i=n(1),u=function(t){return t.reduce((function(t,e){return t.concat(n.i(o["a"])(e.querySelectorAll(r["a"].join(","))))}),[])},a=function(t){var e=t.querySelectorAll("["+i["FOCUS_AUTO"]+"]");return n.i(o["a"])(e).map((function(t){return u([t])})).reduce((function(t,e){return t.concat(e)}),[])}},function(t,e,n){"use strict";e["a"]=["button:enabled:not([readonly])","select:enabled:not([readonly])","textarea:enabled:not([readonly])","input:enabled:not([readonly])","a[href]","area[href]","iframe","object","embed","[tabindex]","[contenteditable]","[autofocus]"]},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,i=t.default);var a="function"===typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var c=Object.create(a.computed||null);Object.keys(r).forEach((function(t){var e=r[t];c[t]=function(){return e}})),a.computed=c}return{esModule:o,exports:i,options:a}}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.hasLeadingGuards?n("div",{style:t.hidden,attrs:{tabIndex:t.disabled?-1:0}}):t._e(),t._v(" "),t.hasLeadingGuards?n("div",{style:t.hidden,attrs:{tabIndex:t.disabled?-1:1}}):t._e(),t._v(" "),n("div",t._b({attrs:{"data-lock":""},on:{focusout:t.onBlur}},"div",t.groupAttr,!1),[t._t("default")],2),t._v(" "),t.hasTailingGuards?n("div",{style:t.hidden,attrs:{tabIndex:t.disabled?-1:0}}):t._e()])},staticRenderFns:[]},t.exports.render._withStripped=!0}])}))},"63b6":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"external"===t.type?n("a",{staticClass:"btn",attrs:{"aria-label":t.aria,href:t.utmHref(t.path,t.utm),target:"_blank"}},[t.text?n("span",{class:["text-"+t.textcolor+" text-"+t.textsize,{"order-2":t.iconleft}],domProps:{innerHTML:t._s(t.text)}}):t._e(),t.icon?n("IconBase",{class:{"order-1 mr-2":t.iconleft,"ml-2":t.iconright},attrs:{icon:t.icon,color:t.iconcolor,size:t.iconsize,rotate:t.iconrotation}}):t._e()],1):"button"===t.type?n("button",{staticClass:"btn",attrs:{"aria-label":t.aria},on:{click:function(e){return t.$emit("buttonClick")}}},[t.text?n("span",{class:["text-"+t.textcolor+" text-"+t.textsize,{"order-2":t.iconleft}],domProps:{innerHTML:t._s(t.text)}}):t._e(),t.icon?n("IconBase",{class:{"order-1 mr-2":t.iconleft,"ml-2":t.iconright},attrs:{icon:t.icon,color:t.iconcolor,size:t.iconsize,rotate:t.iconrotation}}):t._e()],1):n("RouterLink",{staticClass:"btn",attrs:{to:t.path,"aria-label":t.aria,append:t.append}},[t.text?n("span",{class:["text-"+t.textcolor+" text-"+t.textsize,{"order-2":t.iconleft}],domProps:{innerHTML:t._s(t.text)}}):t._e(),t.icon?n("IconBase",{class:{"order-1 mr-2":t.iconleft,"ml-2":t.iconright},attrs:{icon:t.icon,color:t.iconcolor,size:t.iconsize,rotate:t.iconrotation}}):t._e()],1)},o=[],i=n("5530"),u=n("2f62"),a=n("0de6"),c={name:"Button",components:{IconBase:a["a"]},props:{type:{type:String,default:""},path:{type:[Object,String],default:"/"},append:{type:Boolean,default:!1},utm:{type:String,default:"tier-1-cta"},icon:{type:String,default:""},iconsize:{type:String,default:"1.5rem"},iconcolor:{type:String,default:"inherit"},iconleft:{type:Boolean,default:!1},iconright:{type:Boolean,default:!1},iconrotation:{type:String,default:""},text:{type:String,default:""},textsize:{type:String,default:"base"},textcolor:{type:String,default:"inherit"},aria:{type:String,default:""}},computed:Object(i["a"])({},Object(u["c"])(["touch","mobile"]),{},Object(u["b"])([]))},s=c,d=n("2877"),l=Object(d["a"])(s,r,o,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=home~viewer.7fc74ac7.js.map