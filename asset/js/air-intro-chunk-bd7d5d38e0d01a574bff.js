(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{440:function(t,n,e){},476:function(t,n,e){t.exports=e.p+"asset/img/air/intro-title.png?c7fdd763"},478:function(t,n,e){"use strict";var o=e(440);e.n(o).a},502:function(t,n,e){"use strict";e.r(n);var o=e(16),r=e.n(o),i=e(12),s=e(450),c=e(9),a={name:"AirIntro",data:function(){return{showBtn:!1}},computed:r()({},Object(i.e)([]),{},Object(i.c)([])),methods:r()({},Object(i.d)([]),{},Object(i.b)([]),{sendGA:function(t){void 0===t&&(t=""),Object(c.b)("storypreview/sky"+(t?"_":"")+t)}}),beforeRouteEnter:function(t,n,e){e()},beforeRouteLeave:function(t,n,e){e()},mounted:function(){this.sendGA()},beforeDestroy:function(){this.$emit("bg-out")},components:{IntroText:s.a}},u=(e(478),e(19)),f=Object(u.a)(a,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"air-intro-root"},[o("img",{staticClass:"title",attrs:{src:e(476)}}),o("IntroText",{on:{complete:function(n){t.showBtn=!0}}},[t._v("一名航空公司裡最年輕的機長，"),o("br"),t._v("以及剛畢業上任的空服員一起飛過幾趟"),o("br"),t._v("長程行班，互有好感的他們"),o("br"),t._v("今晚將一起值勤飛往洛杉磯的班機，"),o("br"),t._v("高空 3 萬 5 千英呎的漫漫長夜，"),o("br"),t._v("會發生什麼事…？")]),o("transition",{attrs:{name:"fade"}},[t.showBtn?o("router-link",{staticClass:"btn bottom",attrs:{to:"/air/form"},nativeOn:{click:function(n){return t.sendGA("confirm")}}},[t._v("確定")]):t._e()],1)],1)}),[],!1,null,null,null).exports;e.d(n,"default",(function(){return f}))}}]);