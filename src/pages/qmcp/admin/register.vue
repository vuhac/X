<template>
  <div class="register">
    <div class="wrapper">
      <div class="content">
        <fieldset>
          <legend class="join-acc">注册帐号</legend>
          <div class="row">
            <label><span class="star">*</span>帐号:</label>
            <input type="text" maxlength="10" v-model="userName" @blur="getCode"  @keydown="pulicError=''" v-on:keyup.enter="submitRegister">
            <div class="remark">帐号：6-10位数字或字母，支持纯数字，纯字母，及数字与字母的组合</div>
          </div>
          <div class="row">
            <label><span class="star">*</span>密码:</label>
            <input type="password" maxlength="20" v-model="password"  @keydown="pulicError=''" v-on:keyup.enter="submitRegister">
            <div class="remark">密码：8-20位数字或字母，支持纯数字，纯字母，及数字与字母的组合</div>
          </div>
          <div class="row">
            <label><span class="star">*</span>确认密码:</label>
            <input type="password" maxlength="20" v-model="register_password"  @keydown="pulicError=''" v-on:keyup.enter="submitRegister">
          </div>
          <div class="row">
            <label><span class="star">*</span>验证码:</label>
            <input type="text" v-model="code"  @keydown="pulicError=''" v-on:keyup.enter="submitRegister">
            <img class="checkLoginCodeImage" :src="codeImg" @click="getCode">
          </div>
           <div class="row" v-if='iscode'>
            <label><span class="star">*</span>邀请码:</label>
            <!-- <input type="text" v-model="intacode" @keydown="pulicError=''" v-on:keyup.enter="submitRegister"> -->


            <!-- 只读注册 -->
            <input @keydown="pulicError=''" v-on:keyup.enter="submitRegister" placeholder="邀请码" type="text"
                     v-model="intacode"  :readonly="incodeReadonly" id="incode">


          </div>
        </fieldset>
        <fieldset v-if="register.length">
          <legend class="join-acc">会员资料</legend>
          <div class="row" v-for="(item,index) in register" :key="index">
            <label><span class="star">*</span>{{item.name}}:</label>
            <input type="text" :placeholder="item.placeholder" v-model="item.value" maxlength="16"  @keydown="pulicError=''" v-on:keyup.enter="submitRegister">
          </div>
        </fieldset>
        <div class="agree">
          <input type="checkbox" name="agree" v-model="agree">
          我已届满合法博彩年龄﹐且同意各项开户条约。
        </div>
        <br>
          <div class="err" v-if="pulicError">
            <i class="iconfont icon-baojing"></i>
            <span ref="pulicError">{{pulicError}}</span>
        </div>
        <div class="operate">
          <a class="btn" @click="submitRegister">确认</a>
          <a class="btn" @click="submitReset">重设</a>
        </div>
        <div class="row tip_info">
          <p>备注：</p>
          <p>1.标记有 * 者为必填项目。</p>
          <p>2.取款密码为取款时的凭证,请会员务必仔细填写。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import UserService from '@/service/public/UserService'
  import { _SetPost,postS,getS} from '@/service/public/service.js'

  export default {
    data () {
      return {
        register: [],
        codeImg: '/static/qmcp/img/code.jpg',
        captcha_key: '',
        userName: '',
        password: '',
        register_password: '',
        code: '',
        agree: false,
        iscode:false,
        pulicError: '',
        agent: null,
        intacode:'',
        incodeReadonly:false
      }
    },
    created () {
      this.agent = this.GetQueryString('agent')||this.GetQueryString('k');
      let register = JSON.parse(localStorage.getItem('config')).register.pc;
       let registermodel = JSON.parse(localStorage.getItem('config')).site_model
          if(registermodel=='invite_code'){
             this.iscode=true;
          }else{
            this.iscode=false;
         }
      register.forEach((v, i) => {
        this.register[i] = {}
        switch (v) {
          case 'phone':
            this.register[i].placeholder = '请输入手机号'
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
            this.register[i].placeholder = '请输入支付密码'
            this.register[i].value = ''
            this.register[i].key = v
            this.register[i].name = '支付密码'
            break
        }
      })
    },
    mounted(){
      // 邀请码只读
        this.intacode = this.GetQueryString('agent')||this.GetQueryString('k');
        this.incodeReadonly = !! this.intacode
      // 邀请码只读
    },
    methods: {
      getCode () {
        if (!this.userName) {
          return false
        }
        getS(`captcha`, { userName:this.userName}).then(res => {
          if (res.code == 200) {
            this.codeImg = res.data.captcha_image_text
            this.captcha_key = res.data.captcha_key
          }
        })
      },
      submitReset () {
        this.userName = ''
        this.password = ''
        this.register_password = ''
        this.code = ''
        this.register &&
        this.register.forEach(item => {
          item.value = ''
        })
      },
      submitRegister () {
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

        if (this.password !== this.register_password) {
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

        if (this.agent) {
          params.agent = this.agent
        }

        if (!flag) {
          return false
        }

        this.$http
          .post(`${this.$HOST_NAME}/checkUsername/${this.userName}`, {})
          .then(res => {
            if (res && res.code == 200) {
                postS(`register`, params).then(res => {
                if (res.code == 200) {
                  UserService.setCache(res, 'v1')
                  this.$http
                    .post(`${this.$HOST_NAME}/member/refundInfo`)
                    .then(res => {
                      let refund = res.data.platform
                      // this.refundData = refund;
                      localStorage.setItem('refund', JSON.stringify(refund))
                    })
                  setTimeout(() => {
                    // alert('注册成功')
                    window.location.href = '/'
                  }, 500)
                } else {
                  alert(res.message)
                }
              })
            } else {
              this.pulicError = '帐号已存在'
              return false
            }
          })
      }
    },
    store
  }
</script>

<style lang="less" scoped>
  @h: 25px;
  @font-size: 13px;
  .register {
    min-height: 650px;

    .wrapper {
      width: 1200px;
      height: 100%;
      margin: auto;

      .content {
        width: 700px;
        margin: auto;
        margin: 40px auto;

        fieldset {
          border: 1px solid #b48d3e;
          margin: 10px;
          padding: 10px;
          width: 100%;

          legend {
            font-size: @font-size;
            color: #b48d3e;
            font-weight: bold;
          }
        }

        .row {
          clear: both;
          overflow: hidden;
          margin-top: 10px;
          width: 100%;
          font-size: @font-size;

          label {
            display: inline-block;
            width: 135px;
            height: @h;
            text-indent: 10px;
            line-height: @h;
            color: #fff;
            text-align: right;
            padding-right: 10px;

            .star {
              color: #f00;
              font-weight: bold;
              vertical-align: -2px;
            }
          }

          input {
            height: @h;
            line-height: @h;
            border: 1px solid #666666;
            border-radius: 3px;
            box-shadow: 0 0 6px #3a3a3a;
            text-indent: 10px;
          }

          .remark {
            height: @h;
            line-height: @h;
            color: #fff;
            text-indent: 140px;
            margin-top: 10px;
          }

          img {
            margin-left: 5px;
            cursor: pointer;
            width: 78px;
            height: @h;
            vertical-align: middle;
          }
        }

        .agree {
          padding-left: 20px;
          height: @h;
          line-height: @h;
          color: #fff;
          font-size: @font-size;

          input {
            width: 15px;
            height: 15px;
            vertical-align: middle;
          }
        }
         .err{
          font-size: 14px;
          color:#fff;
        }
        .operate {
          width: 100%;
          margin: auto;
          text-align: center;
          margin-top: 10px;

          .btn {
            display: inline-block;
            width: 80px;
            height: 40px;
            color: #000;
            background: #fff;
            line-height: 40px;
            text-align: center;
            font-size: 16px;
            box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
            border: none;
            margin: 10px 0;
            cursor: pointer;
            transition: background 0.1s ease-in-out;
            border-radius: 3px;
          }
        }

        .tip_info {
          p {
            font-size: 13px;
            height: @h;
            line-height: @h;
            padding-left: 20px;
            color: #fff;
          }
        }
      }
    }
  }
</style>
