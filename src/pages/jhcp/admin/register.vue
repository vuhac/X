<template>
  <div class="register" v-if="isResiter">

    <div class="popup">
      <div class="headline">
        <p>注册9号彩票会员</p>
        <p>开启您的财富之旅</p>
      </div>

      <div class="content">
        <div class="title_tab">
          <ul>
            <li>
              <a class="cur" href="javascript:void(0)">注册帐号</a>
            </li>
          </ul>
          <div class="close1" @click="close">
            <a href="javascript:void(0)"><i class="el-icon-close"></i></a>
          </div>
        </div>

        <div class="row" v-if="iscode">
          <label>邀请码：</label>
          <div class="group">

           <input @keydown="pulicError=''" v-on:keyup.enter="registerTest" placeholder="邀请码" type="text"
                     v-model="intacode" :readonly="incodeReadonly">
          </div>
        </div>


        <div class="row">
          <label>帐号:</label>
          <div class="group">


            <input type="text" placeholder="请输入6到10位的数字或字母组合" maxlength="10" v-model="userName" @blur="getCode">
          </div>
        </div>

        <div class="row">
          <label>密码:</label>
          <div class="group">

            <input type="password" placeholder="请输入8到20位的数字或字母组合" maxlength="20" v-model="password">
          </div>
        </div>

        <div class="row">
          <label>确认密码:</label>
          <div class="group">

            <input type="password" placeholder="请输入8到20位的数字或字母组合" maxlength="20" v-model="register_password">
          </div>
        </div>

        <div class="row" v-for="(item,index) in register" :key="index">
          <label>{{item.name}}:</label>
          <div class="group">
            <input type="text" :placeholder="item.placeholder" v-model="item.value" :maxlength="item.length">
          </div>
        </div>


        <div class="row">
          <label>验证码:</label>
          <div class="group">
            <input type="text" placeholder="请输入验证码" v-model="code" maxlength="4">
            <span class="yzm_reg">
                <img class="checkLoginCodeImage" :src="codeImg" @click="getCode">
            </span>
          </div>
        </div>




        <div class="operate">
          <a class="btn" @click="submitRegister">立即注册</a>
        </div>

        <div class="row tip_info">
          <p>完成即视为同意已年满18岁，且在此网站所有活动并没抵触本人所在国家所管辖的法律</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import UserService from '@/service/public/UserService'
  import {postS,getS} from '@/service/public/service.js'
  export default {
    data () {
      return {
        register: [],
        codeImg: '/static/jhcp/img/code.jpg',
        captcha_key: '',
        userName: '',
        password: '',
        register_password: '',
        code: '',
        intacode:'',
        iscode:false,
        agent: null,
        incodeReadonly: false,
      }
    },
    created () {
      this.agent = this.GetQueryString('agent')||this.GetQueryString('k');
      let register = JSON.parse(localStorage.getItem('config')).register.pc
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
            this.register[i].length = 11
            this.register[i].value = ''
            this.register[i].key = v
            this.register[i].name = '手机号'
            break
          case 'email':
            this.register[i].placeholder = '请输入邮箱地址'
            this.
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
    mounted () {
        this.intacode = this.GetQueryString('agent')||this.GetQueryString('k');
        this.incodeReadonly = !! this.intacode
    },
    methods: {
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
      submitRegister () {
        let staueAcc = this.validateAccountUserNamenew(this.userName)
        let stauePassword = this.validateAccountnew(this.password)

        if (!staueAcc) {
          alert('帐号 6-10位数字或字母')
          return false
        }
        if (!stauePassword) {
          alert('密码 8-20位数字或字母')
          return false
        }
        if (this.password !== this.register_password) {
          alert('两次密码不一致')
          return false
        }
        if (this.code === '') {
          alert('请输入验证码')
          return false
        }
        if (this.code.length < 4 || this.code.length > 4) {
          alert('请输入4位验证码')
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
        if(this.intacode){
           params.invite_code=this.intacode
        }

        let flag = true

        for (let i = 0; i < this.register.length; i++) {
          if (!this.register[i].value) {
            alert(this.register[i].placeholder)
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

        this.$http.post(`${this.$HOST_NAME}/checkUsername/${this.userName}`, {}).then(res => {
          if (res && res.code === 200) {
            postS(`register`, params).then(res => {
              if (res.code === 200) {
                UserService.setCache(res, 'v1')
                // this.$http
                //   .post(`${this.$HOST_NAME}/member/refundInfo`)
                //   .then(res => {
                //     let refund = res.data.platform;
                //     // this.refundData = refund;
                //     localStorage.setItem("refund", JSON.stringify(refund));
                //   });
                setTimeout(() => {
                  alert('注册成功')
                  window.location.reload()
                }, 500)
              } else {
                alert(res.message)
              }
            })
          } else {
            alert('帐号已存在')
            return false
          }
        })
      },
      close () {
        this.$store.commit('cjw/showRegister', false)
      }
    },
    computed: {
      isResiter () {
        return this.$store.state.cjw.registerShow
      }
    },
    store
  }
</script>

<style lang="less" scoped>
  .register {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 99999;

    .popup {
      position: relative;
      width: 750px;
      min-height: 200px;
      margin: 10% auto;
      background: #fff;
      border-radius: 10px;

      .headline {
        height: 120px;
        background-image: linear-gradient(160deg, #7faaff 30%, #07cacc 70%);
        border-radius: 10px 10px 0 0;
        background: url("/static/jhcp/img/bg_reg_title.jpg");
        background-size:contain;

        p {
          font-size: 24px;
          color: #fff;
          position: absolute;
          left: 350px;
          top: 30px;
        }

        p:nth-child(2) {
          left: 450px;
          top: 70px;
        }
      }

      .content {
        padding: 40px 40px 40px;

        .title_tab {
          height: 40px;
          overflow: hidden;
          padding-bottom: 10px;
          border-bottom: 1px solid #ebecef;

          ul {
            li {
              float: left;

              a {
                display: block;
                height: 40px;
                line-height: 40px;
                color: #3c3c3c;
                font-size: 16px;
                margin-left: 10px;
                padding: 0 20px;
              }

              .cur {
                position: relative;
                color: #4d8cfa;
                font-weight: bold;
              }

              .cur:after {
                content: "";
                position: absolute;
                bottom: 1px;
                left: 0;
                width: 100%;
                height: 2px;
                background: #4d8cfa;
              }
            }
          }

          .close1 {
            position: absolute;
            width: 38px;
            height: 40px;
            top: 15px;
            right: 0;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 20px 0 0 20px;

            a {
              display: block;
              height: 100%;
            }

            i {
              display: inline-block;
              width: 32px;
              height: 32px;
              font-size: 20px;
              text-align: center;
              line-height: 32px;
              margin: 4px;
              color: #0a9899;
              border-radius: 50%;
              background: #efd402;
              transition: transform 0.3s ease-in-out;
            }
          }

          .close1:hover i {
            transform: rotate(90deg);
          }
        }

        .row {
          clear: both;
          overflow: hidden;
          margin-top: 20px;

          label {
            float: left;
            display: block;
            width: 120px;
            height: 40px;
            text-indent: 10px;
            line-height: 40px;
            font-size: 14px;
          }

          .group {
            float: left;
            overflow: hidden;

            input {
              width: 310px;
              height: 40px;
              box-sizing: border-box;
              padding: 5px 10px;
              font-size: 18px;
              line-height: 30px;
              border: 1px solid #ebecef;
              border-radius: 3px;
              background: #fff;
              font-size: 14px;
            }

            .yzm_reg {
              float: right;
              margin-left: 5px;
              cursor: pointer;

              img {
                width: 84px;
                height: 36px;
              }
            }
          }

          p {
            font-size: 12px;
          }
        }

        .operate {
          width: 100%;
          margin: auto;
          text-align: center;
          margin-top: 20px;

          .btn {
            display: inline-block;
            width: 250px;
            height: 40px;
            color: #fff;
            background: #4d8cfa;
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
          text-align: center;
        }
      }
    }
  }
</style>
