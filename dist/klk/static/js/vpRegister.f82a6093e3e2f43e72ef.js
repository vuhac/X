webpackJsonp([67],{"+1Fn":function(e,t,a){var r=a("DJap");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("6f4e1df3",r,!0,{})},DJap:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,'.clear-fix[data-v-241a821a]:after{content:"";display:table;clear:both;zoom:1}.img-box[data-v-241a821a]{width:100%;height:100%;background-size:cover;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover}.img-box p[data-v-241a821a]{line-height:12px;height:26px}.img-box label[data-v-241a821a]{float:left;height:25px;line-height:25px;text-align:right;width:135px}.wrap-bg[data-v-241a821a]{background:url(/static/wycp/img/bg-article.png) #fff no-repeat center 96px;padding-bottom:10px}.wrap-bg .registration-c[data-v-241a821a]{width:1000px;margin:44px auto 0;min-height:228px}.wrap-bg .registration-c .register-box[data-v-241a821a]{background:#fff;border:1px solid #dfdfdf}.wrap-bg .registration-c .register-box .login-tit[data-v-241a821a]{height:47px;line-height:47px;padding:0 15px;background-color:#fffcf4;border-bottom:1px solid #dfdfdf}.wrap-bg .registration-c .register-box .login-tit .fr[data-v-241a821a]{float:right;font-size:8px;color:#555!important}.wrap-bg .registration-c .register-box .login-tit .fr a[data-v-241a821a]{color:#02339a}.wrap-bg .registration-c .register-box .article[data-v-241a821a]{margin:0 auto;padding:0}.wrap-bg .registration-c .register-box .article .memCash_body[data-v-241a821a]{margin-top:50px;background-color:transparent;font-size:12px;color:#000}.wrap-bg .registration-c .register-box .article .memCash_tit[data-v-241a821a]{padding-left:140px;line-height:65px;text-align:left;text-shadow:2px 1px 1px #000}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p[data-v-241a821a]{height:auto;min-height:auto;padding-bottom:10px}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p label[data-v-241a821a]{float:left;height:25px;line-height:25px;text-align:right;width:135px}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p label .star[data-v-241a821a]{color:red;font-weight:700;vertical-align:-2px}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p label .red[data-v-241a821a]{color:red}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p span[data-v-241a821a]{display:block;line-height:25px}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p input[data-v-241a821a]{width:148px;height:22px;line-height:22px;border:1px solid #666;box-shadow:0 0 6px #3a3a3a;border-radius:3px;color:#444;font-size:12px;text-indent:6px;outline:none}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p input#rmNum[data-v-241a821a]{width:71px}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p img[data-v-241a821a]{width:50px;height:20px;vertical-align:middle;margin-left:5px}.wrap-bg .registration-c .register-box .article .JoinMemForm fieldset p .memCash_text[data-v-241a821a]{display:block;padding:5px 0 0 135px;min-height:26px;border:0;font-size:100%;font:inherit;vertical-align:baseline}.wrap-bg .registration-c .register-box .article .JoinMemForm #memCash-confirm input[data-v-241a821a]{border:1px solid #5b5b5b;padding:0 20px;height:35px;background-color:#fff;color:#000;line-height:30px;font-size:16px;font-family:Microsoft YaHei}.wrap-bg .registration-c .register-box .article .err[data-v-241a821a]{width:210px;margin-left:22px;height:30px;line-height:30px;color:#444;font-size:14px;border:1px solid #666;box-shadow:0 0 6px #3a3a3a;border-radius:3px;margin-bottom:20px}.wrap-bg .registration-c .register-box .article .err i[data-v-241a821a]{padding-left:5px;font-size:15px}.wrap-bg .registration-c .register-box .article .JM_content[data-v-241a821a]{padding:10px 10px 10px 20px}.wrap-bg .registration-c .register-box .article .JM_content p[data-v-241a821a]{height:auto;min-height:26px}.wrap-bg .registration-c .register-box .article .JM_content ol li[data-v-241a821a]{display:list-item;text-align:-webkit-match-parent;list-style:disc;margin-left:25px;line-height:18px}',""])},LjVS:function(e,t,a){"use strict";a.d(t,"a",function(){return g}),a.d(t,"c",function(){return m}),a.d(t,"b",function(){return h});var r=a("//Fk"),i=a.n(r),o=a("Dd8w"),n=a.n(o),s=a("7+uW"),c=a("mtWM"),l=a.n(c),d=a("YtJ0"),p=a("xzxg"),u=a("mw3O"),g=function(e,t){return l()({url:""+e,method:"post",data:n()({},t)})};l.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",l.a.defaults.timeout=2e4,l.a.defaults.transformRequest=[function(e){return u.stringify(e)}],l.a.interceptors.request.use(function(e){return e.headers.Authorization=""+localStorage.token,e},function(e){return i.a.reject(e)}),p.a.vpSetConfig(),l.a.interceptors.response.use(function(e){if(e.data.sign>localStorage.getItem("configTime")&&!e.config.url.includes("/config")&&p.a.vpReloadConfig(),5003===e.data.code||5002===e.data.code)return localStorage.removeItem("userBank"),p.a.removeCache(),d.a.commit("alert/showTipModel",{bool:!0,title:"您未登录！",model:"warn"}),!1;if(5e3===e.data.code)p.a.vpSetConfig(),location.href="/static/public/html/weihu/index.html";else{if(5005===e.data.code)return d.a.commit("alert/showTipModel",{bool:!0,title:e.data.message,model:"warn"}),window.history.back(-1),!1;4e3===e.data.code&&(location.href="/static/public/html/feifa/index.html")}return localStorage.token&&!e.config.url.includes("/member/refresh")&&p.a.expired(localStorage.token),200===e.data.code?e.data:5006!==e.data.code&&(d.a.commit("alert/showTipModel",{bool:!1,title:e.data.message,model:"warn"}),e.data)},function(e){return e.request.responseURL.indexOf("/member/balance")<=-1&&d.a.commit("alert/showTipModel",{bool:!0,title:"网络异常,请稍后重试。",model:"warn"}),e});var m=function(e,t){return l()({headers:{Accept:"application/x.tg.v2+json"},url:"/frontend/"+(s.default.prototype.$HOST_NAME?s.default.prototype.$HOST_NAME.substring(10):"v1")+"/"+e,method:"post",data:n()({},t)})},h=function(e,t){return l()({headers:{Accept:"application/x.tg.v2+json"},url:"/frontend/"+(s.default.prototype.$HOST_NAME?s.default.prototype.$HOST_NAME.substring(10):"v1")+"/"+e,method:"get",params:n()({},t)})};s.default.prototype.$getS=h,s.default.prototype.$http=l.a,s.default.prototype.$postS=m},x2El:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Xxa5"),c=a.n(r),i=a("exGp"),o=a.n(i),n=a("xzxg"),l=a("LjVS"),s=(a("YtJ0"),{data:function(){return{register:[],InvitationCode:!1,userName:"",password:"",password_confirmation:"",verificationCode:"",intacode:"",pulicError:"",code:"",codeImg:"/static/public/image/common/code.jpg",agent:null,iscode:!1,islink:!0,captcha_key:"",wechat:"",agree:!0,WithdrawalsPassword:"",actuaName:"",email:"",tel:"",incodeReadonly:!1}},methods:{registerTest:function(){var s=this;return o()(c.a.mark(function e(){var t,a,r,i,o,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.validateAccountUserNamenew(s.userName),a=s.validateAccountnew(s.password),t){e.next=5;break}return s.pulicError="帐号6-10位数字或字母",e.abrupt("return",!1);case 5:if(a){e.next=8;break}return s.pulicError="密码 8-20位数字或字母",e.abrupt("return",!1);case 8:if(s.password!==s.password_confirmation)return s.pulicError="两次密码不一致",e.abrupt("return",!1);e.next=11;break;case 11:if(""===s.code)return s.pulicError="请输入验证码",e.abrupt("return",!1);e.next=14;break;case 14:if(s.code.length<4||4<s.code.length)return s.pulicError="请输入4位验证码",e.abrupt("return",!1);e.next=17;break;case 17:if(1!=s.iscode){e.next=21;break}if(s.intacode.length<6||6<s.intacode.length)return s.pulicError="请输入6位邀请码",e.abrupt("return",!1);e.next=21;break;case 21:if(s.agree){e.next=24;break}return s.pulicError="请点击同意才可以进行注册！",e.abrupt("return",!1);case 24:(r={}).userName=s.userName,r.password=s.password,r.code=s.code,r.device="pc",r.captcha_key=s.captcha_key,i=!0,s.intacode&&(r.invite_code=s.intacode),o=0;case 33:if(!(o<s.register.length)){e.next=42;break}if(s.register[o].value){e.next=38;break}return s.pulicError=s.register[o].placeholder,i=!1,e.abrupt("break",42);case 38:r[s.register[o].key]=s.register[o].value;case 39:o++,e.next=33;break;case 42:if(i){e.next=44;break}return e.abrupt("return",!1);case 44:return s.agent&&(r.agent=s.agent),e.next=47,Object(l.a)(s.$HOST_NAME+"/checkUsername/"+s.userName,{});case 47:if(!(n=e.sent)||200!=n.code){e.next=51;break}e.next=53;break;case 51:return s.pulicError="帐号已存在",e.abrupt("return",!1);case 53:s.registerSubmit(r);case 54:case"end":return e.stop()}},e,s)}))()},registerSubmit:function(a){var r=this;return o()(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.c)("register",a);case 2:200==(t=e.sent).code?(n.a.setCachereg(t,"v1"),window.location.href="/"):r.dNotify(t.message,"error");case 4:case"end":return e.stop()}},e,r)}))()},login:function(){this.$store.commit("mainState/setChooseModel","登录"),this.$store.commit("mainState/setLoginTitle","登录")},dNotify:function(e,t){var a=this;this.$store.commit("alert/showTipModel",{bool:!0,title:e,model:t}),setTimeout(function(){a.$store.commit("alert/showTipModel",{bool:!1,title:e,model:t})},1e5)},getCode:function(){var t=this;if(!this.userName)return!1;this.$http.get("/frontend/v1/captcha",{headers:{Accept:"application/x.tg.v2+json"},params:{userName:this.userName}}).then(function(e){200==e.code&&(t.codeImg=e.data.captcha_image_text,t.captcha_key=e.data.captcha_key)})},reset:function(){this.userName="",this.password="",this.password_confirmation="",this.verificationCode="",this.InvitationCode="",this.pulicError="",this.code="",this.pulicError="",this.register&&this.register.forEach(function(e){e.value=""})}},created:function(){var a=this;this.agent=this.GetQueryString("agent")||this.GetQueryString("k");var e=JSON.parse(localStorage.getItem("config")).register.pc,t=JSON.parse(localStorage.getItem("config")).site_model;this.iscode="invite_code"==t,e.forEach(function(e,t){switch(a.register[t]={},e){case"phone":a.register[t].placeholder="",a.register[t].value="",a.register[t].key=e,a.register[t].name="手机号";break;case"email":a.register[t].placeholder="请输入邮箱地址",a.register[t].value="",a.register[t].key=e,a.register[t].name="邮箱";break;case"wechat":a.register[t].placeholder="请输入微信号",a.register[t].value="",a.register[t].key=e,a.register[t].name="微信";break;case"realName":a.register[t].placeholder="请输入真实姓名",a.register[t].value="",a.register[t].key=e,a.register[t].name="真实姓名";break;case"payPassword":a.register[t].placeholder="请输入取款密码",a.register[t].value="",a.register[t].key=e,a.register[t].name="取款密码"}})},mounted:function(){this.intacode=this.GetQueryString("agent")||this.GetQueryString("k"),this.incodeReadonly=!!this.intacode}}),d={render:function(){var o=this,e=o.$createElement,a=o._self._c||e;return a("div",{staticClass:"wrap-bg"},[a("div",{staticClass:"registration-c",staticStyle:{"margin-top":"24px","padding-bottom":"10px"}},[a("div",{staticClass:"register-box",staticStyle:{"min-height":"650px"}},[a("div",{staticClass:"login-tit"},[a("div",{staticClass:"fr"},[o._v("\n            已有帐号?\n            "),a("a",{staticClass:"orange",attrs:{href:"javascript: void(0)"},on:{click:function(e){return o.$router.push("/")}}},[o._v("立即登录")])])]),o._v(" "),a("section",{staticClass:"article",staticStyle:{width:"680px"}},[a("div",{staticClass:"memCash_body",attrs:{id:"joinMember"}},[a("h3",{staticClass:"memCash_tit"}),o._v(" "),a("form",{staticClass:"JoinMemForm",staticStyle:{display:"block"},attrs:{action:"reg.php",method:"post",name:"myFORM",id:"myFORM"}},[a("input",{attrs:{type:"hidden",name:"key",value:"add"}}),o._v(" "),a("input",{attrs:{type:"hidden",name:"SS",value:""}}),o._v(" "),a("input",{attrs:{type:"hidden",name:"SR",value:""}}),o._v(" "),a("input",{attrs:{type:"hidden",name:"TS",value:""}}),o._v(" "),a("fieldset",{staticStyle:{border:"1px solid #B48D3E",margin:"10px",padding:"10px"}},[a("legend",{staticClass:"join-acc",staticStyle:{color:"#B48D3E","font-weight":"bold"}},[o._v("注册帐号")]),o._v(" "),o._m(0),o._v(" "),a("p",{staticStyle:{display:"block"},attrs:{id:"js-username"}},[o._m(1),o._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:o.userName,expression:"userName"}],attrs:{type:"text",name:"username",id:"username",value:"",maxheight:"30",size:"15"},domProps:{value:o.userName},on:{keydown:function(e){o.pulicError=""},keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.registerTest(e)},blur:o.getCode,input:function(e){e.target.composing||(o.userName=e.target.value)}}}),o._v(" "),a("span",[o._v("请输入6-10个字元, 仅可输入英文字母以及数字的组合!!")])]),o._v(" "),a("p",{staticStyle:{display:"block"},attrs:{id:"js-password"}},[o._m(2),o._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:o.password,expression:"password"}],staticClass:"password_adv",attrs:{type:"password",name:"password",id:"password",value:"",size:"15"},domProps:{value:o.password},on:{keydown:function(e){o.pulicError=""},keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.registerTest(e)},input:function(e){e.target.composing||(o.password=e.target.value)}}}),o._v(" "),o._m(3)]),o._v(" "),a("p",{staticStyle:{display:"block"},attrs:{id:"js-passwd"}},[o._m(4),o._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:o.password_confirmation,expression:"password_confirmation"}],attrs:{type:"password",name:"passwd",id:"passwd",value:"",size:"15"},domProps:{value:o.password_confirmation},on:{keydown:function(e){o.pulicError=""},keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.registerTest(e)},input:function(e){e.target.composing||(o.password_confirmation=e.target.value)}}})]),o._v(" "),a("p",{staticStyle:{display:"block"},attrs:{id:"js-rmNum"}},[o._m(5),o._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:o.code,expression:"code"}],staticClass:"pwd-input-set RmNum",attrs:{name:"rmNum",id:"rmNum",type:"text",size:"4",title:"( 点选此处产生新验证码 )",onfocus:"change_zc_yzm('mail_vPic')"},domProps:{value:o.code},on:{keydown:function(e){o.pulicError=""},input:function(e){e.target.composing||(o.code=e.target.value)}}}),o._v(" "),a("img",{staticClass:"checkLoginCodeImage",staticStyle:{cursor:"pointer"},attrs:{src:o.codeImg},on:{click:o.getCode}})]),o._v(" "),o.iscode?a("p",{staticStyle:{display:"block"},attrs:{id:"js-InvitationCode"}},[o._m(6),o._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:o.intacode,expression:"intacode"}],staticClass:"InvitationCode_adv",attrs:{type:"text",name:"InvitationCode",id:"InvitationCode",value:"",size:"15",readonly:o.incodeReadonly},domProps:{value:o.intacode},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.registerTest(e)},keydown:function(e){o.pulicError=""},input:function(e){e.target.composing||(o.intacode=e.target.value)}}})]):o._e()]),o._v(" "),o.register.length?a("fieldset",{staticStyle:{border:"1px solid #B48D3E",margin:"10px",padding:"10px"}},[a("legend",{staticClass:"join-acc",staticStyle:{color:"#B48D3E","font-weight":"bold"}},[o._v("会员资料")]),o._v(" "),o._l(o.register,function(t,e){return a("p",{key:e,staticClass:"row"},[a("label",[a("span",{staticClass:"star",staticStyle:{display:"inline"}},[o._v("* ")]),o._v(o._s(t.name)+"：")]),o._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],attrs:{type:"text",placeholder:t.placeholder,maxlength:"16"},domProps:{value:t.value},on:{input:function(e){e.target.composing||o.$set(t,"value",e.target.value)}}})])})],2):o._e(),o._v(" "),a("div",{staticStyle:{display:"block"},attrs:{id:"js-agree"}},[a("p",{staticStyle:{"padding-left":"20px"},attrs:{id:"memCash-agree"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:o.agree,expression:"agree"}],staticStyle:{height:"13px"},attrs:{type:"checkbox",name:"agree",id:"check1",value:"Y",checked:""},domProps:{checked:Array.isArray(o.agree)?-1<o._i(o.agree,"Y"):o.agree},on:{change:function(e){var t=o.agree,a=e.target,r=!!a.checked;if(Array.isArray(t)){var i=o._i(t,"Y");a.checked?i<0&&(o.agree=t.concat(["Y"])):-1<i&&(o.agree=t.slice(0,i).concat(t.slice(i+1)))}else o.agree=r}}}),o._v("我已届满合法博彩年龄﹐且同意各项开户条约。")])]),o._v(" "),a("br"),o._v(" "),o.pulicError?a("div",{staticClass:"err"},[a("i",{staticClass:"iconfont icon-baojing"}),o._v(" "),a("span",{ref:"pulicError"},[o._v(o._s(o.pulicError))])]):o._e(),o._v(" "),a("div",{attrs:{id:"memCash-confirm",align:"center"}},[a("input",{staticClass:"joinform_submit",staticStyle:{cursor:"pointer"},attrs:{type:"button",name:"OK2",id:"OK2",value:"确认"},on:{click:o.registerTest}}),o._v(" "),a("input",{staticClass:"joinform_cancel",staticStyle:{cursor:"pointer"},attrs:{type:"reset",name:"CANCEL2",id:"CANCEL2",value:"重设"},on:{click:o.reset}})]),o._v(" "),o._m(7)])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticStyle:{position:"relative","min-height":"1px"}},[t("a",{staticStyle:{position:"absolute",top:"0px"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("span",{staticClass:"star",staticStyle:{display:"inline"}},[this._v("* ")]),this._v("帐 号：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("span",{staticClass:"star",staticStyle:{display:"inline"}},[this._v("* ")]),this._v("密 码：")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[e._v("*密码规则：须为"),a("s",{staticStyle:{color:"red","text-decoration":"none","font-weight":"700"}},[e._v("8~20码英文或数字")]),e._v("且符合0~9或a~z字元")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{title:"确认密码"}},[t("span",{staticClass:"star",staticStyle:{display:"inline"}},[this._v("* ")]),this._v("确认密码：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("span",{staticClass:"star",staticStyle:{display:"inline"}},[this._v("* ")]),this._v("验证码：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("span",{staticClass:"star",staticStyle:{display:"inline"}},[this._v("* ")]),this._v("邀请码：")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"JM_content JM_content_b"},[a("div",{attrs:{id:"joinmem"}},[a("div",[a("p",[e._v("备注：")]),a("ol",[a("li",[e._v("标记有"),a("span",{staticStyle:{color:"rgb(255,0,0)"}},[e._v(" * ")]),e._v("者为必填项目。")]),a("li",[e._v("取款密码为取款时的凭证,请会员务必仔细填写。")])])])])])}]};var p=a("VU/8")(s,d,!1,function(e){a("+1Fn")},"data-v-241a821a",null);t.default=p.exports}});