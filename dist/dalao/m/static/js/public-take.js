webpackJsonp([8],{"+/fn":function(t,s){t.exports="/m/static/img/兴业银行logo.png?v=2019-05-15T15:36:10"},"+1D+":function(t,s){t.exports="/m/static/img/中国银行logo.png?v=2019-05-15T15:36:10"},"+Gie":function(t,s){t.exports="/m/static/img/包商银行logo.png?v=2019-05-15T15:36:10"},"6A6I":function(t,s){t.exports="/m/static/img/上海银行logo.png?v=2019-05-15T15:36:10"},"73Sp":function(t,s){t.exports="/m/static/img/交通银行logo.png?v=2019-05-15T15:36:10"},APrJ:function(t,s){t.exports="/m/static/img/建设银行logo.png?v=2019-05-15T15:36:10"},AUF4:function(t,s){t.exports="/m/static/img/华夏银行logo.png?v=2019-05-15T15:36:10"},Ek1V:function(t,s){t.exports="/m/static/img/浦发银行logo.png?v=2019-05-15T15:36:10"},J1pA:function(t,s){t.exports="/m/static/img/北京银行logo.png?v=2019-05-15T15:36:10"},JSBy:function(t,s){t.exports="/m/static/img/中信银行logo.png?v=2019-05-15T15:36:10"},JYqo:function(t,s){t.exports="/m/static/img/江苏银行logo.png?v=2019-05-15T15:36:10"},KTma:function(t,s){t.exports="/m/static/img/农业银行logo.png?v=2019-05-15T15:36:10"},L6vF:function(t,s){t.exports="/m/static/img/浙商银行logo.png?v=2019-05-15T15:36:10"},M683:function(t,s){t.exports="/m/static/img/招商银行logo.png?v=2019-05-15T15:36:10"},RoRB:function(t,s){t.exports="/m/static/img/邮政银行logo.png?v=2019-05-15T15:36:10"},RscU:function(t,s){},Sy7Y:function(t,s,a){"use strict";var e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.bankCard?a("div",[a("title-header",{attrs:{title:"线上取款"}}),t._v(" "),a("div",{staticClass:"getMoney"},[a("vux-group",{staticClass:"user-balance clear-fix"},[a("span",{staticClass:"col"},[t._v("可用总额：")]),t._v(" "),a("span",{staticClass:"col balance"},[t._v(t._s(t.availableAmount))]),t._v(" "),a("span",{staticClass:"col"},[t._v(" 元")])]),t._v(" "),a("vux-group",{staticClass:"list"},[a("vux-cell",{attrs:{"is-link":"",link:"/user/edit/bank?action=select"}},[a("img",{staticClass:"icon-img",attrs:{slot:"icon",src:t.bankIcon[t.bankCard.bankName],alt:""},slot:"icon"}),t._v(" "),a("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.bankCard.bankName)+"(尾号:"+t._s(t.bankCard.cardNum.substr(-4))+")")])]),t._v(" "),a("vux-cell-box",{staticClass:"money-input"},[a("label",{staticClass:"cell-item"},[a("span",{staticClass:"label"},[a("span",{staticClass:"rmb"},[t._v("¥")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.money,expression:"money"}],staticClass:"input",attrs:{type:"tel",placeholder:"可取款金额"+t.amount,autocomplete:"new-password",maxlength:"13"},domProps:{value:t.money},on:{input:function(s){s.target.composing||(t.money=s.target.value)}}}),t._v(" "),a("span",{staticClass:"all",on:{click:function(s){return t.totalMoney()}}},[t._v("全部")])])]),t._v(" "),parseFloat(this.notAmount)?a("div",{staticClass:"no-amount weui-cell"},[t._v("\n        不可取款:\n        "),a("span",{staticClass:"red"},[t._v(t._s(this.notAmount))]),t._v("元\n        "),a("span",{staticClass:"action",on:{click:function(s){return t.toastText(t.msg,t.window.TOAST_POSITION.TOP)}}},[t._v("查看原因")])]):t._e(),t._v(" "),a("label",{staticClass:"pass-row weui-cell"},[a("span",{staticClass:"label"},[t._v("资金密码:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"请输入新6位资金密码",max:6,autocomplete:"new-password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})])],1),t._v(" "),a("div",{staticStyle:{padding:"0.24rem"}},[a("vux-button",{attrs:{type:"primary"},nativeOn:{click:function(s){return t.onSubmit(s)}}},[t._v("立即取款")])],1)],1)],1):t._e()},staticRenderFns:[]};s.a=e},"W+Dq":function(t,s){t.exports="/m/static/img/工商银行logo.png?v=2019-05-15T15:36:10"},dRPF:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("k8Al"),o=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(s,t,function(){return e[t]})}(n);var i=a("Sy7Y");var r=function(t){a("RscU")},l=a("VU/8")(o.a,i.a,!1,r,"data-v-23f5d50e",null);s.default=l.exports},"f3M+":function(t,s){t.exports="/m/static/img/民生银行logo.png?v=2019-05-15T15:36:10"},k8Al:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e,o=a("6cYu"),n=a("qhTv"),i=(e=n)&&e.__esModule?e:{default:e};s.default={mixins:[i.default],name:"Take",components:{TitleHeader:o.TitleHeader},computed:{userInfo:function(){return this.$store.state.user.userInfo}},data:function(){return{amount:"",availableAmount:"",money:"",msg:"",notAmount:"",password:"",submitting:!1,bankCard:null,bankIcon:{"工商银行":a("W+Dq"),"农业银行":a("KTma"),"建设银行":a("APrJ"),"招商银行":a("M683"),"中国银行":a("+1D+"),"浦发银行":a("Ek1V"),"中信银行":a("JSBy"),"交通银行":a("73Sp"),"民生银行":a("f3M+"),"兴业银行":a("+/fn"),"邮政银行":a("RoRB"),"光大银行":a("uKwL"),"华夏银行":a("AUF4"),"浙商银行":a("L6vF"),"包商银行":a("+Gie"),"北京银行":a("J1pA"),"上海银行":a("6A6I"),"哈尔滨银行":a("yhqQ"),"江苏银行":a("JYqo")}}},created:function(){var t=this;this.$store.state.user.bankData&&this.$store.state.user.bankData.length?(this.$store.state.user.selectedBankId?(this.bankCard=this.$store.state.user.bankData.find(function(s){return s.id===t.$store.state.user.selectedBankId}),this.bankCard?this.$store.commit("user/setSelectedBank",this.bankCard.id):(this.$store.commit("user/setSelectedBank",""),this.bankCard=this.$store.state.user.bankData[0],this.bankCard&&this.$store.commit("user/setSelectedBank",this.bankCard.id))):(this.bankCard=this.$store.state.user.bankData[0],this.bankCard&&this.$store.commit("user/setSelectedBank",this.bankCard.id)),this.amount=this.$VuxUtil.number.twoFloat(this.$store.state.user.userInfo.balance),this.$store.dispatch("user/getWithdrawAmount",function(s){200===s.code?(t.availableAmount=t.$VuxUtil.number.twoFloat(s.data.totalAmount),t.amount=t.$VuxUtil.number.twoFloat(s.data.amount),t.notAmount=t.$VuxUtil.number.twoFloat(s.data.notAmount),t.msg=s.data.msg):t.toastText(s.message,window.TOAST_POSITION.TOP)})):this.$router.replace("/user/add-bank?relink="+this.$route.fullPath)},methods:{totalMoney:function(){this.money=this.$VuxUtil.number.twoFloat(this.amount)},onSubmit:function(){var t=this;this.submitting?this.toastText("正在提交",window.TOAST_POSITION.TOP):this.money?parseFloat(this.money)?parseFloat(this.money)>this.amount?this.toastText("取款金额不能大于可用金额",window.TOAST_POSITION.TOP):parseFloat(this.money)<this.$store.state.main.config.limit.withdrawalsLimit?this.toastText("取款金额不能小于"+this.$store.state.main.config.limit.withdrawalsLimit+"元",window.TOAST_POSITION.TOP):this.password.length<6?this.toastText("请输入正确的资金密码",window.TOAST_POSITION.TOP):(this.submitting=!0,this.$store.state.main.loadingText="提款中~~",this.$store.dispatch("user/setBalanceToLocal").then(function(s){200===s.code?t.$store.dispatch("user/take",{money:parseFloat(t.money),password:t.password,bank:t.bankCard.id}).then(function(s){t.submitting=!1,t.$store.state.main.loadingText="",200===s.code?(t.toastText("提款完成",window.TOAST_POSITION.TOP),t.$store.dispatch("user/refreshInfo").then(),t.money="",t.password="",t.$store.dispatch("user/getWithdrawAmount",function(s){200===s.code?(t.availableAmount=t.$VuxUtil.number.twoFloat(s.data.totalAmount),t.amount=t.$VuxUtil.number.twoFloat(s.data.amount),t.notAmount=t.$VuxUtil.number.twoFloat(s.data.notAmount),t.msg=s.data.msg):t.toastText(s.message,window.TOAST_POSITION.TOP)})):t.toastText(s.message,window.TOAST_POSITION.TOP)}).catch(function(){t.submitting=!1,t.$store.state.main.loadingText=""}):(t.toastText(s.message,window.TOAST_POSITION.TOP),t.submitting=!1,t.$store.state.main.loadingText="")}).catch(function(){t.submitting=!1,t.$store.state.main.loadingText=""})):this.toastText("请输入正确的金额",window.TOAST_POSITION.TOP):this.toastText("请输入取款金额",window.TOAST_POSITION.TOP)}}}},uKwL:function(t,s){t.exports="/m/static/img/光大银行logo.png?v=2019-05-15T15:36:10"},yhqQ:function(t,s){t.exports="/m/static/img/哈尔滨银行logo.png?v=2019-05-15T15:36:10"}});