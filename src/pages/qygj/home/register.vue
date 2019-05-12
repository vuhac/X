<template>
  <div class="register">
  <div class="content">
    <div class="register-logo">
      <!-- <img src="/static/qygj/img/thirdparty/regbanner.jpg" alt=""> -->
        免费注册
    </div>

    <div class="reg_step">
      <ul>
        <li class="active">
         <span class="tip-num">1</span>
           注册申请
        </li>
        <li>
          <span class="tip-num">2</span>
          注册成功
        </li>
        <li>
         <span class="tip-num">3</span>
         忘记密码
        </li>
      </ul>
    </div>

    <div class="content clearfloat">
      <div class="left fl">
             <img class="phone-img1 animated fadeInLeft" src="/static/qygj/img/thirdparty/pone-bg.png" alt="">
             <img class="qy-code-down1 animated fadeInRight" src="/static/qygj/img/thirdparty/qy-code-down.png" alt="">
      </div>

      <div class="right fr">
        <div class="register-wrap">
          <div class="list-box">
             <div class="text-context">
									<div class="title">帐号：</div>
									<div class="input-cont">
										<i class="iconfont yonghu"></i>
										<input @keydown="pulicError=''" v-on:keyup.enter="registerTest" placeholder="帐号6-10位数字或字母" type="text"
                     v-model="userName" @blur="getCode">
									</div>
						 </div>

             <div class="text-context">
									<div class="title">密码：</div>
									<div class="input-cont">
										<i class="iconfont mima"></i>
										<input @keydown="pulicError=''" v-on:keyup.enter="registerTest" placeholder="密码 8-20位数字或字母"
                     type="password" v-model="password">
									</div>
						 </div>

             <div class="text-context">
									<div class="title">重复密码：</div>
									<div class="input-cont">
										<i class="iconfont mima"></i>
										<input  @keydown="pulicError=''" v-on:keyup.enter="registerTest" placeholder="请重复密码" type="password"
                     v-model="password_confirmation">
									</div>
						 </div>

            <div :key='index' class="text-context" v-for="(item,index) in register">
              <div class="title">{{item.name}}：</div>
              	<div class="input-cont">
										<i class="iconfont" :class="item.divclass"></i>
										<input  @keydown="pulicError=''" v-on:keyup.enter="registerTest" :placeholder="item.placeholder"
                     type="text" v-model="item.value">
								</div>
            </div>

             <div class="text-context">
									<div class="title">验证码：</div>
									<div class="input-cont input-cont1">
										<i class="iconfont yanzhengma"></i>
										<input  @keydown="pulicError=''" v-on:keyup.enter="registerTest" placeholder="请输入验证码" type="text"
                     v-model="code">
                     <span class="yzm_reg">
                          <img class="checkLoginCodeImage" :src="codeImg" @click="getCode">
                     </span>
                     <span class="yam" @click="getCode">
                          换一张
                     </span>
									</div>
						 </div>

             <div class="text-context" v-if='iscode'>
									<div class="title">邀请码：</div>
									<div class="input-cont">
										<i class="iconfont yaoqingma"></i>
										<input  @keydown="pulicError=''" v-on:keyup.enter="registerTest" placeholder="邀请码" type="text"
                     v-model="intacode"  :readonly="incodeReadonly" id="incode">
									</div>
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
  </div>
</template>

<script>
  import UserService from '@/service/public/UserService.js'
  import {_SetPost,postS} from '@/service/public/service.js'
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
        //   let params = {
        //     userName: this.userName || null,
        //     password: this.password || null,
        //     phone: this.phoneNumber || null
        //     //  password_confirmation:this.password_confirmation||null
        //   };
        let res = await postS(`register`, params)
        if (res.code == 200) {
          UserService.setCachereg(res, 'v1')
           window.location.href = '/'
          // this.$router.push("/home");
          // setTimeout(() => {
          //   window.location.reload();
          // }, 500);
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
              this.register[i].divclass = "shoujihao"
              break
            case 'email':
              this.register[i].placeholder = '请输入邮箱地址'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '邮箱'
              this.register[i].divclass = "youxiang"
              break
            case 'wechat':
              this.register[i].placeholder = '请输入微信号'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '微信'
              this.register[i].divclass = "weixin"
              break
            case 'realName':
              this.register[i].placeholder = '请输入真实姓名'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '真实姓名'
              this.register[i].divclass = "yonghu"
              break
            case 'payPassword':
              this.register[i].placeholder = '请输入支付密码'
              this.register[i].value = ''
              this.register[i].key = v
              this.register[i].name = '支付密码'
              this.register[i].divclass = "zhifumima"
              break
          }
           console.log(555)
           console.log(this.register)
        })

    },
    store
  }
</script>

<style lang="less" scoped>
  .register {
    width: 1200px;
    margin: 0 auto;
    .content{
          position: relative;
          min-height: 700px;
          padding: 30px 0;
    .register-logo{
        text-align: center;
        line-height: 99px;
        height: 99px;
        font-size: 36px;
        color: #fc49af;
        background: url(/static/qygj/img/thirdparty/regbanner.jpg) no-repeat center;
        }
    .reg_step {
       text-align: center;
       margin: 0 auto 50px;
       border-bottom: 1px solid #ddd;
      ul {
        li {
          display: inline-block;
          vertical-align: top;
          width: 200px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          font-size: 16px;
          color: #fc49af;

         .tip-num{
           display: inline-block;
            width: 20px;
            height: 20px;
            line-height: 20px;
            margin-right: 10px;
            border-radius: 5px;
            text-align: center;
            color: #fff;
            background: #999;
         }
        }

        .active {
          background: url(/static/qygj/img/thirdparty/hover.png) no-repeat center;
          .tip-num{
             background: #9968fd;
          }
        }
      }
    }

    .content {

      .left {
       display: inline-block;
       vertical-align: top;
       position: relative;
       margin: 0 40px;
       width: 461px;
       height: 486px;
       background: url(/static/qygj/img/thirdparty/left_banner.png) no-repeat center;
       background-size: 380px;

       .phone-img1 {
            position: absolute;
            top: -20px;
            left: 50px;
            }

         .qy-code-down1 {
            position: absolute;
            bottom: -30px;
            right: 65px;
          }
        }

      .right {
       display: inline-block;
       vertical-align: top;
       position: relative;
       width: 50%;
      //  height: 486px;
      }
    }

    .register-wrap {
      .list-box {
        .text-context {
            margin-bottom: 20px;
            box-sizing: border-box;
            .title{
              display: inline-block;
              vertical-align: top;
              width: 70px;
              font-size: 14px;
              line-height: 40px;
            }

            .input-cont{
              position: relative;
              display: inline-block;
              height: 40px;
              width: 430px;
              padding: 0 20px;
              border-radius: 20px;
              background: #eee;

            .iconfont {
                    width: 20px;
                    height: 20px;
                    vertical-align: middle;
                    color: #bbafd2;
             }
             .yonghu{
                background:url('/static/qygj/img/zhuce/username.png') no-repeat;
                background-size:100% 100%;
              }
             .mima{
                background:url('/static/qygj/img/zhuce/mimaask.png') no-repeat;
                background-size:100% 100%;
              }
             .yanzhengma{
                background:url('/static/qygj/img/zhuce/yanzhengma.png') no-repeat;
                background-size:100% 100%;
              }
              .shoujihao{
                background:url('/static/qygj/img/zhuce/shoujihao.png') no-repeat;
                background-size:100% 100%;
              }
               .yaoqingma{
                background:url('/static/qygj/img/zhuce/yaoqingma.png') no-repeat;
                background-size:100% 100%;
              }
               .youxiang{
                background:url('/static/qygj/img/zhuce/youxiang.png') no-repeat;
                background-size:100% 100%;
              }
               .weixin{
                background:url('/static/qygj/img/zhuce/weixin.png') no-repeat;
                background-size:100% 100%;
              }
               .zhifumima{
                  background:url('/static/qygj/img/zhuce/zhifumima.png') no-repeat;
                  background-size:100% 100%;
               }
              input{
                position: relative;
                width: 90%;
                height: 40px;
                line-height: 40px;
                border-radius: 0 5px 5px 0;
                border: none;
                background: #eee;
                border: none;
                outline: 0;
                margin-left: 20px;
              }
            }
            .input-cont1{
                width: 260px;
            }

          i {
            position: absolute;
            top: 10px;
            left: 13px;
            font-size: 24px;
            color: #949494;
          }

          .yzm_reg {
            position: absolute;
            top: 2.5px;
            right: -105px;
            cursor: pointer;

            img {
              height: 35px;
              width: 100px;
              border-radius:20px;
            }
          }
          .yam{
            position: absolute;
            top:12px;
            right: -160px;
            color: #ef5ebf;
            cursor: pointer;

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
          width: 270px;
          height: 40px;
          line-height: 40px;
          border: none;
          border-radius: 20px;
          box-shadow: none;
          text-align: center;
          font-size: 14px;
          color: #fff;
          background: linear-gradient(90deg,#9968fd,#fc49af);
          transition: all .2s;
          margin-left: 100px;
          cursor: pointer;
        }
      }
    }
    }
  }
</style>
