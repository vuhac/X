webpackJsonp([24],{"1Esy":function(t,e){t.exports="/m/static/img/bank.png?v=2019-05-15T14:38:49"},EFz3:function(t,e){},d7WX:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,n=s("6cYu"),i=s("qhTv"),o=(a=i)&&a.__esModule?a:{default:a};e.default={name:"Save",mixins:[o.default],components:{ViewPage:n.ViewPage,TitleHeader:n.TitleHeader,IosAlert:n.IosAlert},data:function(){return{submitting:!1,realName:"",nameInputShow:!1,list:[],bank:{classIcon:s("1Esy"),className:"银行转帐",classRemarks:"充值无限额,您的首选!",classStatus:"yes",classType:"bank",devices:"pc,h5,android,ios",id:0,sequence:0}}},created:function(){var t=this;this.$store.state.user.token?this.$store.dispatch("user/getCategory",{callback:function(e){200===e.code?t.list=e.data:t.list=[]}}):this.$router.replace("/admin/login")},mounted:function(){var t=this;setTimeout(function(){t.checkName()},500)},methods:{checkName:function(){return!(this.$store.state.user.token&&this.$store.state.user.userInfo&&!this.$store.state.user.userInfo.realName)||(this.nameInputShow=!0,!1)},onNameSubmit:function(){var t=this;return this.submitting?this.toastText("正在提交中,请勿重复提交~~~",window.TOAST_POSITION.MIDDLE):this.realName?(this.submitting=!0,this.$store.dispatch("user/setInfo",{realName:this.realName}).then(function(e){t.submitting=!1,200===e.code?(t.toastText("设置成功",window.TOAST_POSITION.MIDDLE),t.$store.dispatch("user/refreshInfo").then(function(){t.nameInputShow=!1})):t.toastText(e.message,window.TOAST_POSITION.MIDDLE)})):this.toastText("请输入真实姓名",window.TOAST_POSITION.MIDDLE),!1},onNameCancel:function(){return this.nameInputShow=!1,!0},onPayClick:function(t){this.checkName()&&("yes"===t.classStatus?this.$router.push({path:"/save/"+t.classType+"/"+t.id,query:{title:t.className}}):this.showIosAlert({content:"支付方式暂不可用",showNo:!1}))}}}},fUTV:function(t,e){},hlhY:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view-page",[s("title-header",{attrs:{slot:"header",title:"线上存款"},slot:"header"}),t._v(" "),s("ul",{staticClass:"list",attrs:{slot:"content"},slot:"content"},[s("li",{staticClass:"item",on:{click:function(e){return t.onPayClick(t.bank)}}},[s("img",{staticClass:"icon",attrs:{src:t.bank.classIcon,alt:""}}),t._v(" "),s("div",{staticClass:"content"},[s("p",{staticClass:"title"},[t._v(t._s(t.bank.className))]),t._v(" "),s("p",{staticClass:"desc"},[t._v(t._s(t.bank.classRemarks))])]),t._v(" "),s("span",{staticClass:"span iconfont h5-icon-left-menu-ico"})]),t._v(" "),t._l(t.list,function(e){return s("li",{key:e.id,staticClass:"item",on:{click:function(s){return t.onPayClick(e)}}},[s("img",{staticClass:"icon",attrs:{src:t.$config.getSrc(e.classIcon),alt:""}}),t._v(" "),s("div",{staticClass:"content"},[s("p",{staticClass:"title"},[t._v(t._s(e.className))]),t._v(" "),s("p",{staticClass:"desc"},[t._v(t._s(e.classRemarks))])]),t._v(" "),s("span",{staticClass:"span iconfont h5-icon-left-menu-ico"})])})],2),t._v(" "),s("div",{style:{width:"100%",height:t.$store.state.main.tabHeight+"px"},attrs:{slot:"footer"},slot:"footer"},[s("ios-alert",{attrs:{"ok-callback":t.onNameSubmit,"no-callback":t.onNameCancel},model:{value:t.nameInputShow,callback:function(e){t.nameInputShow=e},expression:"nameInputShow"}},[s("div",{staticClass:"name-input-box"},[s("h4",{staticClass:"title"},[t._v("请填写真实姓名")]),t._v(" "),s("p",{staticClass:"info"},[t._v("姓名绑定后将无法修改")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.realName,expression:"realName"}],staticClass:"input name-input",attrs:{type:"text",autocomplete:"off",placeholder:"真实姓名"},domProps:{value:t.realName},on:{input:function(e){e.target.composing||(t.realName=e.target.value)}}})])])],1)],1)},staticRenderFns:[]};e.a=a},"kc8/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("d7WX"),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);var o=s("hlhY");var c=function(t){s("EFz3"),s("fUTV")},l=s("VU/8")(n.a,o.a,!1,c,"data-v-86523744",null);e.default=l.exports}});