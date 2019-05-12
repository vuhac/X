<template>
  <div class="hsyl-home-header">

    <div class="wrapper">

      <!-- <div class="lang">
                                    <i class="i_flag_china"></i>
                                    中文
                                  </div> -->

      <div class="time">
        <span id="time">{{time}}</span>
      </div>

      <div class="app_down"><a href="/static/hsyl/html/download/index.html" target="_blank">APP下载</a></div>

      <!-- 登录前 -->
      <div class="login-before" v-if="!userinfo">

        <div class="userName">
          <i></i>
          <input type="text" placeholder="帐号" v-model="passKey.userName" @blur="getCode">
        </div>

        <div class="password">
          <i class="ico"></i>
          <input maxlength="20" type="password" placeholder="密码" v-model="passKey.password" v-on:keyup.enter="login">
          <a class="forget_pwd" onclick="alert('忘记帐号，请联系在线客服人员取回！');" href="javascript:void(0)">忘记?</a>
        </div>

        <div class="code">
          <span v-if="code_show">
            <input maxlength="4" type="text" v-model="passKey.code" v-on:keyup.enter="login">
            <img :src="codeImg" alt="" @click="getCode">
          </span>


          <a class="btn_login" @click="login">登录</a>
          <a class="btn_reg" @click="register">注册</a>
          <a class="btn_reg" @click="loginTest">试玩</a>
          <!-- <a class="btn_try" @click="kefuFc">在线客服</a> -->
        </div>
      </div>

      <!-- 登录后 -->

      <div class="login-after" v-if="userinfo">

        <ul>
          <li>
            帐号：{{userinfo.userName}}
          </li>
          <li>
            余额:{{userinfo&&userinfo.balance}}
            <img src="/static/hsyl/img/new.png" alt="" @click="getBalance">
          </li>
          <li class="dt" @click="goUserCen('personage',0)">个人中心</li>
          <li class="dt" @click="goUserCen('recharge',0)">存款</li>
          <li class="dt" @click="goUserCen('withdraw',0)">取款</li>
          <li class="dt" @click="goUserCen('personage',1)">投注记录</li>
          <li class="dt" @click="goUserCen('message',0)">信息</li>
          <li class="dt">
            <a class="out_btn" @click="logout">退出</a>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
  import UserService from '@/service/public/UserService.js'
  import store from '@/vuex/store'
  import {postS,getS} from '@/service/public/service.js'

  export default {
    data () {
      return {
        passKey: {},
        codeImg: '/static/hsyl/img/code.jpg',
        time: this.getTimes(new Date()),
        code_show: parseInt(localStorage.is_code_show)
      }
    },
    methods: {
      getCode () {
        if (this.code_show == 0) {
          return;
        }
        // if (!this.passKey.userName) {
        //   // alert("请务必输入6位帐号");
        //   return false
        // }
        // if (this.passKey.userName.length < 5) {
        //   // alert("请务必输入6位帐号");
        //   return false
        // }

        // this.$http
        //   .post(`${this.$HOST_NAME}/captcha`, {
        //     userName: this.passKey.userName
        //   })
        //   .then(res => {
        //     if (res.code == 200) {
        //       this.codeImg = res.data.captcha_image_text
        //       this.passKey.captcha_key = res.data.captcha_key
        //     } else {
        //       this.$store.commit('alert/showTipModel', {
        //         bool: true,
        //         title: res.message,
        //         model: 'warn'
        //       })
        //     }
        //   })
        if (!this.passKey.userName ||this.passKey.userName.length < 5) {
              alert("请输入6位帐号");
              this.passKey.userName = ''
              var oInput = document.getElementById('userName')
              return false
        }
        getS(`captcha`,{ userName: this.passKey.userName } ).then(res => {
          if (res.code == 200) {
            this.codeImg = res.data.captcha_image_text;
            this.passKey.captcha_key = res.data.captcha_key;
          }else{
              this.$store.commit('alert/showTipModel',{
                bool:true,
                title:res.message,
                model:'warn'
              })
          }
        });
      },
      login () {
        if (!this.validateAccountLogin(this.passKey.userName)) {
          alert('请输入6-20位数字或字母组成的帐号')
          return false
        }
        if (!this.validateAccountLogin(this.passKey.password)) {
          alert('请输入6-20位数字或字母组成的密码')
          return false
        }
        // if (this.passKey.code == '') {
        //   alert('验证码请务必输入')
        //   return false
        // }
        if(this.code_show){
          if (this.passKey.code == '' ||!this.passKey.code) {
          alert('验证码请务必输入')
          return false
          }
        }
        if(this.code_show){
          if(this.passKey.code){
              if (this.passKey.code.length < 4 || this.passKey.code.length > 4) {
                  alert('请输入4位验证码')
              return false
            }
          }
        }
        // if (this.passKey.code.length < 4 || this.passKey.code.length > 4) {
        //   alert('请输入4位验证码')
        //   return false
        // }

        // this.$http.post(`${this.$HOST_NAME}/login`, this.passKey).then(res => {
        //   if (res.code == 200) {
        //     this.$router.push({
        //       name: 'clause'
        //     })
        //     UserService.setCache(res, 'v1', 'login')
        //   } else {
        //     alert(res.message);
        //     this.is_code_show();
        //   }
        // })
        this.passKey.device = 'pc';
        postS(`login`, this.passKey).then(res => {
           if (res.code == 200) {
            this.$router.push({
              name: 'clause'
            })
            UserService.setCache(res, 'v1', 'login')
          } else {
            this.is_code_show();
            this.getCode()
            alert(res.message)
          }
        })
      },
      loginTest () {
        this.$http.get(`/frontend/test/demo`, {headers: { 'Accept': 'application/x.tg.v2+json' },params:{}}).then(res => {
          if (res.code == 200) {
            UserService.setCache(res, 'test')
            window.location.reload()
          }
        })
      },
      logout () {
        UserService.logout.call(this)
      },
      getBalance () {
        getS(`member/balance`).then(res => {
            if (res.code == 200) {
              let userinfo = JSON.parse(localStorage.userinfo)
              userinfo.balance = res.data.member
              userinfo.agent=res.data.agency
              this.$store.commit('mainState/reloadUserinfo', userinfo)
            }
          })
      },
      goUserCen (name, num) {
        //name的类型有 ：  recharge （充值）  personage （个人资料）
        //withdraw （提现）  agency  （代理） message （消息）  discounts （优惠）
        this.$store.commit('showPersonal', {
          bool: true
        })
        this.$store.commit('showContent', {
          parent: name
        })
        this.$store.commit('showNav', {
          child: num
        })
      },
      register () {
        this.$store.commit('hsyl/showRegister', true)
      },
      kefuFc () {
        let url = JSON.parse(localStorage.getItem('config')).service[0].url
        window.open(url)
      },
      is_code_show(){
         getS(`is-show-captcha`).then(res => {
          if (res && res.code === 200) {
            this.code_show = res.data;
          }
        });
      }
    },
    computed: {
      userinfo () {
        return this.$store.state.mainState.userinfo
      }
    },
    created () {
      setInterval(() => {
        this.time = this.getTimes(new Date())
      }, 1000)

      this.is_code_show();
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          if (!localStorage.userinfo) {
            let timer = setInterval(() => {
              if (localStorage.userinfo) {
                clearInterval(timer)
                window.location.reload()
              }
            }, 1000)
          }
        }
      })
    },
    store
  }
</script>

