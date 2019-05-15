webpackJsonp([31],{TSaC:function(t,e){},g07G:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(s("475x"));s("+iqb");var o=i(s("qhTv"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={name:"Login",mixins:[o.default],components:{vantSwitch:a.default},data:function(){return{userName:"",password:"",code:"",record:!1,submitted:!1,height:window.document.documentElement.offsetHeight,isCaptcha:!1}},created:function(){this.checkArchCode()},mounted:function(){var t=this;this.$store.state.user.userRecord&&(this.record=!0,this.$nextTick(function(){t.userName=t.$store.state.user.userRecord.userName,t.password=t.$store.state.user.userRecord.password}))},methods:{onSubmit:function(){var t=this;if(this.submitted);else if(this.checkUserForLogin(this.userName)&&this.checkPassword(this.password)&&(!this.isCaptcha||this.checkCode(this.code))){this.submitted=!0;var e={userName:this.userName,password:this.password};this.isCaptcha&&(e.code=this.code),this.$store.dispatch("user/login",{data:e,callback:function(e){t.$store.state.main.loadingText="",200===e.code?(t.$store.dispatch("user/refreshBalance",{callback:function(e){e.code&&200!==e.code&&(e.message.includes("设备上登录")||e.message.includes("请登录"))&&(t.$store.commit("user/clean"),t.$router.push("/"),t.toastText(e.message,window.TOAST_POSITION.TOP))}}),t.$store.dispatch("user/refreshBank").then(),setTimeout(function(){this.$router.push("/")}.bind(t),1e3)):(t.submitted=!1,t.toastText(e.message,window.TOAST_POSITION.MIDDLE),t.isCaptcha?t.refreshArchCode():t.checkArchCode())}})}},checkArchCode:function(){var t=this;this.submitted=!0,this.$store.dispatch("user/isCaptcha",{callback:function(e){t.submitted=!1,200!==e.code||0===e.data?t.isCaptcha=!1:(t.isCaptcha=!0,t.$store.state.user.authImg||t.refreshArchCode())}})},refreshArchCode:function(){var t=this;this.userName&&!this.submitted&&this.isCaptcha?(this.submitted=!0,this.$store.dispatch("user/refreshAuthCode",{userName:this.userName,callback:function(e){t.submitted=!1}})):this.$store.state.user.code={authImg:"",code:""}}},beforeDestroy:function(){this.$store.state.user.code={authImg:"",code:""}}}},mg2L:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"no-touch-move",rawName:"v-no-touch-move"}],staticClass:"login-box",style:{height:t.height+"px"}},[s("svg",{staticClass:"bg-img",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 24 100 35",preserveAspectRatio:"none"}},[s("defs",[s("path",{attrs:{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"}})]),t._v(" "),s("g",{staticClass:"parallax"},[s("use",{attrs:{"xlink:href":"#gentle-wave",x:"50",y:"0"}}),t._v(" "),s("use",{attrs:{"xlink:href":"#gentle-wave",x:"50",y:"3"}}),t._v(" "),s("use",{attrs:{"xlink:href":"#gentle-wave",x:"50",y:"6"}})])]),t._v(" "),s("div",{staticStyle:{"z-index":"100"}},[s("img",{staticClass:"logo",attrs:{src:"/m/static/img/logo-b.png?v=2019-05-15T14:38:48",alt:""}}),t._v(" "),s("div",{staticClass:"admin-input-box"},[s("label",{staticClass:"input-row"},[s("span",{staticClass:"icon iconfont h5-icon-new-index-user theme-color"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"input",attrs:{type:"text",placeholder:"帐号",autocomplete:"new-password"},domProps:{value:t.userName},on:{blur:t.refreshArchCode,input:function(e){e.target.composing||(t.userName=e.target.value)}}})]),t._v(" "),s("label",{staticClass:"input-row"},[s("span",{staticClass:"icon iconfont h5-icon-new-index-password theme-color"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"密码",autocomplete:"new-password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("label",{directives:[{name:"show",rawName:"v-show",value:t.isCaptcha&&t.$store.state.user.code.authImg,expression:"isCaptcha && $store.state.user.code.authImg"}],staticClass:"input-row auth"},[s("span",{staticClass:"icon iconfont h5-icon-new-index-yzm theme-color"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"input",attrs:{type:"tel",placeholder:"验证码",autocomplete:"new-password",maxlength:"4"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t._v(" "),s("img",{staticClass:"auth-code-img",attrs:{src:t.$store.state.user.code.authImg,alt:""},on:{click:t.refreshArchCode}})]),t._v(" "),s("div",{staticClass:"password-row"},[s("a",{staticClass:"no-password",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.$vux.toast.text("请联系客服修改密码","top")}}},[t._v("忘记密码？")]),t._v(" "),s("label",{staticClass:"recode-password"},[s("span",[t._v("记住密码")]),t._v(" "),s("span",{staticClass:"switch-box"},[s("vant-switch",{attrs:{size:"0.5rem"},model:{value:t.record,callback:function(e){t.record=e},expression:"record"}})],1)])]),t._v(" "),s("vux-button",{staticClass:"submit-button",attrs:{type:"primary","action-type":"submit",disabled:t.submitted},nativeOn:{click:function(e){return t.onSubmit(e)}}},[t._v("立即登录\n      ")])],1),t._v(" "),s("p",{staticClass:"bottom"},[t._v("\n      没有帐号?\n      "),s("a",{staticClass:"tag-a",on:{click:function(e){return e.stopPropagation(),t.$router.push("/admin/register")}}},[t._v("立即注册")])])])])},staticRenderFns:[]};e.a=a},vEkk:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("g07G"),o=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);var r=s("mg2L");var n=function(t){s("TSaC")},c=s("VU/8")(o.a,r.a,!1,n,"data-v-fa48773a",null);e.default=c.exports}});