<template>
  <div class="register">
    <div class="wrap">
      <section class="article" style="width:680px;">
        <div class="memCash_body">
          <h3 class="memCash_tit" style="margin-top: 10px;">WELCOME ：手 机 彩 票 世 界 领 先 的 博 彩 集 团</h3>
          <fieldset>
            <legend class="join-acc">注册帐号</legend>
            <p style="position:relative;min-height:1px;"><a style="position:absolute;top:0px;"></a></p>
            <!-- 介紹人 -->
            <p id="js-Intr1" style="display:none">
              <label>介绍人：</label>
              <input type="text" name="Intr" value="" readonly="" size="15" maxlength="20">
              <img src="/static/sjcp/img/ajax-loader.gif" width="16" height="16" alt="loading" id="loading_username"
                   class="loading_pic">
            </p>

            <!-- 帳號 -->
            <p id="js-username" style="display: block;">
              <label><span class="star" style="display: inline;">*&nbsp;</span>帐 号：</label>
              <input type="text" @keydown="pulicError=''" v-on:keyup.enter="registerTest" v-model="userName"
                     @blur="getCode" size="15" maxlength="10">
              <span class="memCash_text">帐号：6-10位数字或字母，支持纯数字，纯字母，及数字与字母的组合</span>
            </p>
            <!-- 登入碼 -->
            <!-- 密碼 -->
            <p id="js-password" style="display: block;">
              <label><span class="star" style="display: inline;">*&nbsp;</span>密 码：</label>
              <input type="password" v-model="password" @keydown="pulicError=''" v-on:keyup.enter="registerTest"
                     class="password_adv" size="15" maxlength="20">
              <span class="memCash_text">*密码：须为8-20位数字或字母，支持纯数字，纯字母，及数字与字母的组合</span>
            </p>
            <!-- 確認密碼 -->
            <p id="js-passwd" style="display: block;">
              <label title="确认密码"><span class="star" style="display: inline;">*&nbsp;</span>确认密码：</label>
              <input type="password" @keydown="pulicError=''" v-on:keyup.enter="registerTest"
                     v-model="password_confirmation" size="15" maxlength="20">
            </p>
            <!-- 驗證碼 -->
            <p id="js-rmNum" style="display: block;">
              <label><span class="star" style="display: inline;">*</span>&nbsp;验证码：</label>
              <input class="pwd-input-set RmNum" @keydown="pulicError=''" v-on:keyup.enter="registerTest" type="text"
                     size="4" maxlength="4" title="( 点选此处产生新验证码 )" v-model="code">
              <img id="mail_vPic" class="vPic" :src="codeImg" @click="getCode"
                   style="cursor:pointer; width: 50px;height: 20px;" alt="( 点选此处产生新验证码 )">
            </p>

            <!-- 邀请码-->
            <p id="js-username" style="display: block;margin-top:10px;" v-if="iscode">
              <label><span class="star" style="display: inline;">*&nbsp;</span>邀请码：</label>
              <input type="text" @keydown="pulicError=''" v-on:keyup.enter="registerTest" v-model="intacode"
                      size="15" maxlength="6" :readonly="incodeReadonly">
              <span class="memCash_text">邀请码：请输入6位邀请码</span>
            </p>
          </fieldset>
          <fieldset name="memdata" v-show="register.length > 0">
            <legend class="join-info">会员资料</legend>
            <p style="position:relative;min-height:1px;"><a style="position:absolute;top:0px;"></a></p>
            <!-- 真實姓名 -->
            <p id="js-real_name" v-for="(item,index) in register" :key='index'>
              <label><span class="star" style="display: inline;">*&nbsp;</span>{{item.name}}：</label>
              <input @keydown="pulicError=''" v-on:keyup.enter="registerTest" :placeholder="item.placeholder"
                     type="text" v-model="item.value">
            </p>
          </fieldset>
          <div id="js-agree" style="display: block;">
            <p id="memCash-agree" style="padding-left: 20px;">完成即视为同意已满18岁，且同意各项开户条约。</p>
          </div>
          <br>
          <div class="err" v-if="pulicError" style="color:red">
            <i class="iconfont icon-baojing"></i>
            <span ref="pulicError">{{pulicError}}</span>
          </div>
          <div id="memCash-confirm" align="center">
            <input type="button" class="joinform_submit" value="确认" @click="registerTest">
            <input type="reset" class="joinform_cancel" value="重设" @click="reset">
          </div>
          <div class="JM_content JM_content_b">
            <div id="joinmem">
              <div><p>备注：</p>
                <ol>
                  <li>标记有<span style="color:rgb(255,0,0)"> * </span>者为必填项目。</li>
                  <li>取款密码为取款时的凭证,请会员务必仔细填写。</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import UserService from '@/service/public/UserService.js'
  import { _SetPost,postS,getS} from '@/service/public/service.js'
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        userName: '',
        password: '',
        intacode:'',
        iscode:false,
        password_confirmation: '',
        phoneNumber: '',
        pulicError: '',
        register: [],
        codeImg: '/static/public/image/common/code.jpg',
        captcha_key: '',
        code: '',
        realName: '',
        atmpassword: '',
        email: '',
        agent: null,
        incodeReadonly: false,
      }
    },
    methods: {
      async registerTest () {
        let staueAcc = this.validateAccountUserNamenew(this.userName)
        let stauePassword = this.validateAccountnew(this.password)

        if (!staueAcc) {
          this.pulicError = '帐号 6-10位数字或字母'
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
        if (this.code == '') {
          this.pulicError = '请输入验证码'
          return false
        }
        if (this.code.length < 4 || this.code.length > 4) {
          this.pulicError = '请输入4位验证码'
          return false
        }
        //   if (!stauePhone) {
        //     this.pulicError = "输入的手机号有误";
        //     return false;
        //   }
        if(this.iscode==true){
           if(this.intacode.length<6|| this.intacode.length>6){
               this.pulicError='请输入6位邀请码'
               return false
           }
        }
        let params = {}
        params.userName = this.userName
        params.password = this.password
        params.device = 'pc'
        params.code = this.code
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
          `${this.$HOST_NAME}/checkUsername/${this.userName}`,
          {}
        )
        if (res && res.code == 200) {
        } else {
          this.pulicError = '帐号已存在'
          return false
        }
        this.registerSubmit(params)
      },
      async registerSubmit (params) {
        //   let params = {
        //     userName: this.userName || null,
        //     password: this.password || null,
        //     phone: this.phoneNumber || null
        //     //  password_confirmation:this.password_confirmation||null
        //   };
        let res = await postS(`register`, params)
        if (res.code == 200) {
          UserService.setCachereg(res, 'v1')
          this.$http.post(`${this.$HOST_NAME}/member/refundInfo`).then(res => {
            let platform = res.data.platform
            let alias = res.data.alias
            let keys = Object.keys(platform)
            let refund = []
            keys.forEach((v, i) => {
              refund[i] = {}
              refund[i].title = v
              refund[i].list = []
              platform[v].forEach((a, j) => {
                refund[i].list[j] = {}
                refund[i].list[j].key = Object.keys(a)[0]
                refund[i].list[j].refund = Object.values(a)[0]
                refund[i].list[j].name = alias[refund[i].list[j].key]
              })
            })
            localStorage.setItem('refund', JSON.stringify(refund))
          })
          setTimeout(() => {
            alert('注册成功')
            window.location.href = '/'
          }, 500)
        } else {
          this.dNotify(res.message, 'error')
        }
      },
      login () {
        this.$store.commit('mainState/setChooseModel', '登录')
        this.$store.commit('mainState/setLoginTitle', '登录')
      },
      reset(){
            if(this.iscode==true){
               this.intacode="";
            }
            this.userName='';
            this.password='';
            this.password_confirmation='';
            this.code='';


      },
      getCode() {
        if (!this.userName) {
          return false;
        }
        getS(`captcha`,{userName: this.userName})
          .then(res => {
            if (res.code == 200) {
              this.codeImg = res.data.captcha_image_text;
              this.captcha_key = res.data.captcha_key;
              }
          });
      },
    },

    created () {
      this.$nextTick(() => {
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
              this.register[i].placeholder = ' '
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
      })
    },
     mounted () {
        this.intacode = this.GetQueryString('agent')||this.GetQueryString('k');
        this.incodeReadonly = !! this.intacode
    },
    store
  }
</script>
