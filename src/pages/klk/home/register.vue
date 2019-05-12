<template>
  <div class="register">
    <div class="register-logo">
      <img src="/static/klk/img/thirdparty/regbanner.jpg" alt="">
    </div>

    <div class="reg_step">
      <ul>
        <li>
          <i>1</i>会员登录
        </li>
        <li class="active">
          <i>2</i>注册申请
        </li>
        <li>
          <i>3</i>注册成功
        </li>
        <li>
          <i>4</i>忘记密码
        </li>
      </ul>
    </div>

    <div class="content clearfloat">
      <div class="left fl">
        <img src="/static/klk/img/thirdparty/left_banner.png" alt="">
      </div>

      <div class="right fr">
        <div class="register-wrap">
          <div class="list-box">

            <div class="list">
              <label>
                <span>*</span>
                帐号：
              </label>
              <input @keydown="pulicError=''" v-on:keyup.enter="registerTest" placeholder="帐号6-10位数字或字母" type="text"
                     v-model="userName" @blur="getCode" maxlength="10">
            </div>
            <div class="list">
              <label>
                <span>*</span>
                密码：
              </label>
              <input @keydown="pulicError=''" v-on:keyup.enter="registerTest" placeholder="密码 8-20位数字或字母"
                     type="password" v-model="password" maxlength="20">
            </div>
            <div class="list">

              <label>
                <span>*</span>
                重复密码：
              </label>
              <input @keydown="pulicError=''" v-on:keyup.enter="registerTest" placeholder="请重复密码" type="password"
                     v-model="password_confirmation" maxlength="20">
            </div>



            <div :key='index' class="list" v-for="(item,index) in register">

              <label>
                <span>*</span>
                {{item.name}}：
              </label>
              <input @keydown="pulicError=''" v-on:keyup.enter="registerTest" :placeholder="item.placeholder"
                     type="text" v-model="item.value">
            </div>

            <div class="list">

              <label>
                <span>*</span>
                验证码：
              </label>
              <input @keydown="pulicError=''" v-on:keyup.enter="registerTest" placeholder="请输入验证码" type="text"
                     v-model="code">
              <span class="yzm_reg">
                          <img class="checkLoginCodeImage" :src="codeImg" @click="getCode">
              </span>
            </div>

             <div class="list" v-if='iscode'>
              <!-- <i class="iconfont icon-yonghu"></i> -->
              <label>
                <span>*</span>
                邀请码：
              </label>
              <input @keydown="pulicError=''" v-on:keyup.enter="registerTest" placeholder="邀请码" type="text"
                     v-model="intacode"  :readonly="incodeReadonly" id="incode">
            </div>

            <div class="err" v-if="pulicError">
              <i class="iconfont icon-baojing"></i>
              <span ref="pulicError">{{pulicError}}</span>
            </div>
            <!-- <div class="forget">
                                                  <span>已有帐号？<label @click="login">立即登录</label></span>
                                              </div> -->
            <div @click="registerTest" class="submit">
              立即注册
            </div>
            <div class="treaty">完成即视为同意已满18岁，且同意各项开户条约。</div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import UserService from '@/service/public/UserService.js'
  import {_SetPost,postS,getS} from '@/service/public/service.js'
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        userName: '',
        intacode:'',
        password: '',
        password_confirmation: '',
        phoneNumber: '',
        pulicError: '',
        register: [],
        codeImg: '/static/public/image/common/code.jpg',
        captcha_key: '',
        code: '',
        agent: null,
        iscode:false,
        islink:true,
        incodeReadonly: false,
      }
    },
    mounted () {
        this.intacode = this.GetQueryString('agent')||this.GetQueryString('k');
        this.incodeReadonly = !! this.intacode
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

          params.agent =this.agent

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
    store
  }
</script>

<style lang="less" scoped>
  .register {
    width: 1200px;
    margin: 0 auto;

    .reg_step {
      text-align: center;

      ul {
        li {
          cursor: pointer;
          display: inline-block;
          margin-right: 30px;
          padding: 10px 0;
          font-weight: bold;
          color: #000;
          text-align: center;
          margin-left: -7px;
          font-size: 14px;
          border-bottom: 2px solid transparent;

          i {
            display: inline-block;
            width: 20px;
            height: 20px;
            line-height: 18px;
            margin-right: 5px;
            text-align: center;
            border: 1px solid #939393;
            font-size: 16px;
            color: #939393;
            font-style: italic;
          }
        }

        .active {
          border-bottom: 2px solid red;
        }
      }
    }

    .content {
      padding: 52px 0 60px;
      background: #fff;

      .left {
        width: 49%;
        height: 100%;
        text-align: center;
      }

      .right {
        padding-top: 20px;
        margin-top: 40px;
        width: 45%;
        padding-right: 20px;
        margin-right: 60px;
        border: 1px solid #b48d3e;
        border-radius: 5px;
      }
    }

    .register-wrap {
      .list-box {
        .list {
          padding-bottom: 25px;
          position: relative;
          font-size: 16px;
          color: #333;
          text-align: center;

          input {
            width: 180px;
            height: 30px;
            border: 1px solid #666666;
            box-shadow: 0 0 6px #3a3a3a;
            border-radius: 3px;
            color: #444444;
            font-size: 12px;
            text-indent: 6px;
            outline: none;
          }

          input:focus {
            border: 1px solid #9900ff;
          }

          label {
            font-size: 12px;
            color: #000;
            width: 80px;
            text-align: right;
            display: inline-block;

            span {
              color: #f00;
              font-weight: bold;
              vertical-align: -2px;
            }
          }

          i {
            position: absolute;
            top: 5px;
            left: 13px;
            font-size: 24px;
            color: #949494;
          }

          .yzm_reg {
            position: absolute;
            top: 0;
            right: 36px;
            cursor: pointer;

            img {
              width: 84px;
              height: 30px;
            }
          }
        }

        .err {
          width: 180px;
          margin-left: 210px;
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

        .forget {
          font-size: 16px;
          color: #666;
          zoom: 1;
          overflow: hidden;
          padding-bottom: 26px;

          span {
            &:first-child {
              float: left;

              label {
                text-decoration: underline;
                cursor: pointer;
              }
            }
          }
        }

        .treaty {
          font-size: 15px;
          color: #999;
          text-align: center;
          padding: 20px 0;
          padding-left: 60px;
        }

        .submit {
          width: 200px;
          height: 45px;
          margin-left: 200px;
          margin-top: 5px;
          font-size: 18px;
          text-align: center;
          line-height: 45px;
          background: #2c2d2e;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }
  }
</style>
