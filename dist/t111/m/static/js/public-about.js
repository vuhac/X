webpackJsonp([53],{"+pGT":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=n("6cYu"),r=n("qhTv"),s=(a=r)&&a.__esModule?a:{default:a};e.default={mixins:[s.default],name:"About",components:{TitleHeader:i.TitleHeader},data:function(){return{list:[]}},mounted:function(){var t=this;this.$store.dispatch("main/about",{callback:function(e){200===e.code?t.list=e.data:t.toastText(e.message||e.res,window.TOAST_POSITION.TOP)}})}}},GZkq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("+pGT"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var s=n("Z5II");var u=function(t){n("iEH5")},o=n("VU/8")(i.a,s.a,!1,u,"data-v-280dbc38",null);e.default=o.exports},Z5II:function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("title-header",{attrs:{title:t.$route.meta.title||"关于我们"}}),t._v(" "),n("cube-scroll",{staticClass:"wrapper"},t._l(t.list,function(e,a){return n("div",{key:a,staticClass:"content",domProps:{innerHTML:t._s(e.description)}})}),0)],1)},staticRenderFns:[]};e.a=a},iEH5:function(t,e){}});