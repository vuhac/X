<template>
  <div class="wrap-bg">
    <div class="registration-c" style="margin-top: 24px; padding-bottom: 10px;">
       <div class="register-box" style="min-height:650px;">
          <div class="login-tit">
            <div class="fr">
              已有帐号?
              <a class="orange" href="javascript: void(0)" @click="$router.push('/')">立即登录</a>
            </div>
          </div>
          <section class="article" style="width:680px;">
              <div id="joinMember" class="memCash_body">
                     <h3 class="memCash_tit"></h3>
                    <form action="reg.php" method="post" name="myFORM" class="JoinMemForm" id="myFORM" style="display: block;">
                        <!-- 第三方登入 -->
                        <input type="hidden" name="key" value="add">
                        <input type="hidden" name="SS" value="">
                        <input type="hidden" name="SR" value="">
                        <input type="hidden" name="TS" value="">

                        <!--會員資料-->
                        <fieldset style="border: 1px solid #B48D3E;margin: 10px;padding: 10px;">
                            <legend class="join-acc" style="color: #B48D3E;font-weight: bold;">注册帐号</legend>
                            <p style="position:relative;min-height:1px;"><a style="position:absolute;top:0px;"></a></p>

                            <!-- 帳號 -->
                            <p id="js-username" style="display: block;">
                                <label><span class="star" style="display: inline;">*&nbsp;</span>帐 号：</label>
                                <input type="text" name="username"  @keydown="pulicError=''"  v-on:keyup.enter="registerTest" id="username" v-model="userName" value="" maxheight='30' size="15"  @blur="getCode">
                                <span>请输入6-10个字元, 仅可输入英文字母以及数字的组合!!</span>
                            </p>
                            <!-- 登入碼 -->

                            <!-- 密碼 -->
                            <p id="js-password" style="display: block;">
                                <label><span class="star" style="display: inline;">*&nbsp;</span>密 码：</label>
                                <input type="password" name="password"  @keydown="pulicError=''"  v-on:keyup.enter="registerTest" id="password" v-model="password" value="" class="password_adv" size="15">
                                <span>*密码规则：须为<s style="color:red;text-decoration: none;font-weight: 700;">8~20码英文或数字</s>且符合0~9或a~z字元</span>
                            </p>
                            <!-- 確認密碼 -->
                            <p id="js-passwd" style="display: block;">
                                <label title="确认密码"><span class="star" style="display: inline;">*&nbsp;</span>确认密码：</label>
                                <input type="password" name="passwd"  @keydown="pulicError=''"  v-on:keyup.enter="registerTest" id="passwd" value="" v-model="password_confirmation" size="15">
                            </p>
                            <!-- 貨幣 -->
                            <p id="js-rmNum" style="display: block;">
                                <label><span class="star" style="display: inline;">*&nbsp;</span>验证码：</label>
                                <input class="pwd-input-set RmNum" name="rmNum" id="rmNum" type="text" size="4"  @keydown="pulicError=''"  v-model="code"  title="( 点选此处产生新验证码 )" onfocus="change_zc_yzm('mail_vPic')">
                                <img class="checkLoginCodeImage" :src="codeImg" @click="getCode" style="cursor:pointer">
                            </p>
                            <!-- 貨幣 -->
                            <p id="js-InvitationCode" style="display: block;" v-if="iscode">
                                <label><span class="star" style="display: inline;">*&nbsp;</span>邀请码：</label>
                                <input type="text" name="InvitationCode"  v-on:keyup.enter="registerTest"   @keydown="pulicError=''" v-model="intacode" id="InvitationCode" value="" class="InvitationCode_adv" size="15" :readonly="incodeReadonly">
                            </p>
                            <!-- 驗證碼 -->
                        </fieldset>

                        <!--次要資料-->
                        <fieldset v-if="register.length" style="border: 1px solid #B48D3E;margin: 10px;padding: 10px;">
                          <legend class="join-acc" style="color: #B48D3E;font-weight: bold;">会员资料</legend>
                          <p class="row" v-for="(item,index) in register" :key="index">
                             <label><span class="star" style="display: inline;">*&nbsp;</span>{{item.name}}：</label>
                            <input type="text" :placeholder="item.placeholder" v-model="item.value" maxlength="16">
                          </p>
                        </fieldset>

                        <!-- 同意條約 -->
                        <div id="js-agree" style="display: block;">
                            <p id="memCash-agree" style="padding-left: 20px;"><input type="checkbox" name="agree" id="check1" value="Y" style="height:13px;" v-model="agree" checked="">我已届满合法博彩年龄﹐且同意各项开户条约。</p>
                        </div>
                        <br>

                        <div class="err" v-if="pulicError">
                          <i class="iconfont icon-baojing"></i>
                          <span ref="pulicError">{{pulicError}}</span>
                        </div>

                        <!-- 確認/重設 -->
                        <div id="memCash-confirm" align="center">
                            <input type="button" name="OK2" id="OK2" class="joinform_submit" value="确认" @click="registerTest" style="cursor:pointer">
                            <input type="reset" name="CANCEL2" id="CANCEL2" class="joinform_cancel" value="重设" @click="reset" style="cursor:pointer">
                        </div>

                        <!-- 備註 -->
                        <div class="JM_content JM_content_b"><div id="joinmem"><div><p>备注：</p><ol><li>标记有<span style="color:rgb(255,0,0)"> * </span>者为必填项目。</li><li>取款密码为取款时的凭证,请会员务必仔细填写。</li></ol></div></div></div>
                    </form>
                </div>
          </section>
       </div>
    </div>
  </div>
</template>

<script>
  import UserService from '@/service/public/UserService.js'
  import {_SetPost,postS} from '@/service/public/service.js'
  import store from '@/vuex/store'

  export default {
      data(){
        return {
          // 主要信息
          register:[],
          InvitationCode:false,
          userName:"",
          password:"",
          password_confirmation:"",
          verificationCode:"",
          intacode:"",
          pulicError:"",
          code:"",
          codeImg: '/static/public/image/common/code.jpg',
          agent: null,
          iscode:false,
          islink:true,
          captcha_key: '',
          //次要信息
          wechat:"",
          agree:true,
          WithdrawalsPassword:"",
          actuaName:"",
          email:"",
          tel:"",
          incodeReadonly: false,
        }
      },
      methods: {
        async registerTest () {
          let staueAcc = this.validateAccountUserNamenew(this.userName)
          let stauePassword = this.validateAccountnew(this.password)

          if (!staueAcc) {
            this.pulicError = '帐号6-10位数字或字母'
            return false
          }
          if (!stauePassword) {
            this.pulicError = '密码 8-20位数字或字母'
            return false
          }

          if (this.password !== this.password_confirmation) {
            this.pulicError = '两次密码不一致'
            return false
          }
          if (this.code === '') {
            this.pulicError = '请输入验证码'
            return false
          }
          if (this.code.length < 4 || this.code.length > 4) {
            this.pulicError = '请输入4位验证码'
            return false
          }

          if(this.iscode==true){
            if(this.intacode.length<6|| this.intacode.length>6){
                this.pulicError='请输入6位邀请码'
                return false
            }
          }
          if (!this.agree) {
            this.pulicError='请点击同意才可以进行注册！'
            return false
          }

          let params = {}
          params.userName = this.userName
          params.password = this.password
          params.code = this.code
          params.device = 'pc'
          params.captcha_key = this.captcha_key
          let flag = true

          if(this.intacode){
            params.invite_code=this.intacode
          }

          for (let i = 0; i < this.register.length; i++) {
            if (!this.register[i].value) {
              this.pulicError = this.register[i].placeholder
              flag = false
              break
            }
            params[this.register[i].key] = this.register[i].value
          }

          if (!flag) {
            return false
          }

          if (this.agent) {
            params.agent = this.agent
          }

          let res = await _SetPost(
            `${this.$HOST_NAME}/checkUsername/${this.userName}`, {}
          )
          if (res && res.code == 200) {} else {
            this.pulicError = '帐号已存在'

            return false
          }
          this.registerSubmit(params)
        },
        async registerSubmit (params) {
          let res = await postS(`register`, params)
          if (res.code == 200) {
            UserService.setCachereg(res, 'v1')
            window.location.href = '/'
          }else {
            this.dNotify(res.message, 'error')
          }
        },
        login () {
          this.$store.commit('mainState/setChooseModel', '登录')
          this.$store.commit('mainState/setLoginTitle', '登录')
        },
        dNotify(msg, type) {
          console.log(msg,type)
          this.$store.commit('alert/showTipModel', {bool: true, title: msg, model: type})
          setTimeout(() => {
            this.$store.commit('alert/showTipModel', {bool: false, title: msg, model: type})
          }, 100000)
        },
        getCode () {
          if (!this.userName) {
            return false
          }
          this.$http
            .get(`/frontend/v1/captcha`, {
               headers: { Accept: "application/x.tg.v2+json" },
               params: { userName: this.userName }
            })
            .then(res => {
              if (res.code == 200) {
                this.codeImg = res.data.captcha_image_text
                this.captcha_key = res.data.captcha_key
            }
          })
        },
        reset(){
          this.userName="",
          this.password="",
          this.password_confirmation="",
          this.verificationCode="",
          this.InvitationCode="",
          this.pulicError="",
          this.code="",
          this.pulicError="",
          this.register &&this.register.forEach(item => {
           item.value = ''
          })
        }
      },
      created () {
        this.agent = this.GetQueryString('agent')||this.GetQueryString('k');
        let registerPc = JSON.parse(localStorage.getItem('config')).register.pc
        let registermodel = JSON.parse(localStorage.getItem('config')).site_model
        if(registermodel=='invite_code'){
            this.iscode=true;
        }else{
          this.iscode=false;
        }
        registerPc.forEach((v, i) => {
          this.register[i] = {}
          switch (v) {
            case 'phone':
              this.register[i].placeholder = ''
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '手机号'
              break
            case 'email':
              this.register[i].placeholder = '请输入邮箱地址'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '邮箱'
              break
            case 'wechat':
              this.register[i].placeholder = '请输入微信号'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '微信'
              break
            case 'realName':
              this.register[i].placeholder = '请输入真实姓名'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '真实姓名'
              break
            case 'payPassword':
              this.register[i].placeholder = '请输入取款密码'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '取款密码'
              break
          }
        })
      },
       mounted () {
        this.intacode = this.GetQueryString('agent')||this.GetQueryString('k');
        this.incodeReadonly = !! this.intacode
    },
  }
</script>

<style type="text/less" lang="less" scoped>

  .clear-fix:after {
    content: '';
    display: table;
    clear: both;
    zoom: 1;
  }
  .img-box {
    width: 100%;
    height: 100%;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    p{
      line-height: 12px;
      height: 26px;
    }
    label{
      float: left;
      height: 25px;
      line-height: 25px;
      text-align: right;
      width: 135px;
    }
  }
  .wrap-bg {
    background: url(/static/wycp/img/bg-article.png) #fff no-repeat center 96px;
    padding-bottom: 10px;

    .registration-c {
      width: 1000px;
      margin: 44px auto 0;
      min-height: 228px;
      .register-box{
        background: #fff;
        border: 1px solid #dfdfdf;
        .login-tit{
          height: 47px;
          line-height: 47px;
          padding: 0 15px;
          background-color: #fffcf4;
          border-bottom: 1px solid #dfdfdf;
          .fr{
            float: right;
            font-size: 12px/1.5;
            color: #555 !important;
            a{
              color: #02339a;
            }
          }
        }
        .article{
            margin: 0 auto;
            padding: 0;
          .memCash_body{
              margin-top:50px;
              background-color: transparent;
              font-size: 12px;
              color: #000;
          }
          .memCash_tit{
            // background: url(images/reg/welcome.png) no-repeat;
            padding-left: 140px;
            // color: #FFF;
            line-height: 65px;
            text-align: left;
            text-shadow: 2px 1px 1px black;
          }
          .JoinMemForm{
              fieldset{
                p{
                  height:auto;
                  min-height:auto;
                  padding-bottom: 10px;
                  label{
                      float: left;
                      height: 25px;
                      line-height: 25px;
                      text-align: right;
                      width: 135px;
                      .star{
                        color: #F00;
                        font-weight: bold;
                        vertical-align: -2px;
                      }
                      .red{
                        color: rgb(255, 0, 0);
                      }
                    }
                  span{
                    display:block;
                    line-height: 25px;
                  }
                  input{
                      width: 148px;
                      height: 22px;
                      line-height: 22px;
                      border: 1px solid #666;
                      box-shadow: 0 0 6px #3a3a3a;
                      border-radius: 3px;
                      color: #444;
                      font-size: 12px;
                      text-indent: 6px;
                      outline: none;
                      &#rmNum{
                        width: 71px;
                      }
                  }
                  img{
                    width: 50px;
                    height: 20px;
                    vertical-align: middle;
                    margin-left:5px;
                  }
                  .memCash_text{
                    display: block;
                    padding: 5px 0 0 135px;
                    min-height: 26px;
                    border: 0;
                    font-size: 100%;
                    font: inherit;
                    vertical-align: baseline;
                  }
                }
              }
              #memCash-confirm{
                  input{
                     border: 1px solid #5b5b5b;
                    padding: 0px 20px;
                    height: 35px;
                    background-color: #fff;
                    color: #000;
                    line-height: 30px;
                    font-size: 16px;
                    font-family: "Microsoft YaHei";
                  }
                }
              }
              .err {
                  width:210px;
                  margin-left:22px;
                  height: 30px;
                  line-height: 30px;
                  color: #444444;
                  font-size: 14px;
                  border: 1px solid #666666;
                  box-shadow: 0 0 6px #3a3a3a;
                  // background: #fdffef;
                  border-radius: 3px;
                  // padding: 0 14px;
                  margin-bottom: 20px;

                  i {
                    padding-left: 5px;
                    font-size: 15px;
                  }
                }
              .JM_content{
                padding:10px 10px 10px 20px;
                p{
                  height: auto;
                  min-height: 26px;

                }
                ol{
                 li{
                    display: list-item;
                    text-align: -webkit-match-parent;
                    list-style: disc;
                    margin-left: 25px;
                    line-height: 18px;
                  }
                }
              }
            }
          }
        }
      }



</style>
