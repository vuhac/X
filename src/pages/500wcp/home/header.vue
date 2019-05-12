<template>
  <div class="main">
    <div class="header-nav">
      <div class="header-nav-body clear-fix">
        <span>您好,欢迎来到500万彩票</span>
        <span>{{time}}</span>
        <nav class="nav">
          <ul class="clear-fix">
            <li><a target="_blank" :href="links.navLink">网址导航</a></li>
            <li><a target="_blank" href="javascript: void(0)" @click="addFavorite('500彩票')">添加收藏</a></li>
            <li><a @click="openKefu">在线客服</a></li>
            <li><a target="_blank" href="/m">手机版</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="header-main clear-fix">
      <a href="javascript: void(0)" @click="$router.push('/')">
        <img class="logo" src="/static/500wcp/img/logo.png"/>
      </a>
      <div class="header-image"></div>
      <!-- 登录前 -->
      <div class="login-before clear-fix" v-if="!userinfo">
        <div class="form-input">
          <div class="row">
            <input type="text"  autocomplete="off" placeholder="帐号" v-model="passKey.userName" @blur="getCode">
          </div>
          <div class="row">
            <input  autocomplete="off" type="password" placeholder="密码" v-model="passKey.password">
            <a class="forget_pwd" onclick="alert('忘记帐号，请联系在线客服人员取回！');" href="javascript:void(0)">忘记?</a>
          </div>
          <div class="row" v-if="code_show">
            <div class="auth">
                <input type="text" autocomplete="off" placeholder="验证码" maxlength="4" v-model="passKey.code">
            </div>
            <img :src="codeImg" alt="" @click="getCode">
          </div>
        </div>
        <div class="form-button">
          <div class="row">
            <i-button type="error" @click="login">登录</i-button>
          </div>
          <div class="row">
            <i-button type="error" @click="register">注册</i-button>
          </div>
          <div class="row">
            <i-button type="error" @click="loginTest">试玩</i-button>
          </div>
        </div>
      </div>
      <!-- 登录后 -->
      <div class="login-after" v-if="userinfo">
        <div class="row">
          <span>用户帐号</span>：<span>{{userinfo.userName}}</span>
        </div>
        <div class="row">
          <a href="javascript: void(0)" @click="goUserCen('personage',1)">投注记录</a>
          &nbsp;&nbsp;
          <span>余额</span>：<span>{{userinfo ? userinfo.balance : ''}}</span>
          <span :class="'fa fa-fw fa-refresh ' + (balanceRefreshing?'fa-spin':'')" @click="getBalance"></span>
        </div>
        <div class="row">
          <a href="javascript: void(0)" @click="goUserCen('personage',0)">会员中心</a>
          &nbsp;&nbsp;
          <a href="javascript: void(0)" @click="goUserCen('recharge',0)">存款</a>
          &nbsp;&nbsp;
          <a href="javascript: void(0)" @click="goUserCen('withdraw',0)">取款</a>
          &nbsp;&nbsp;
          <a href="javascript: void(0)" @click="logout">退出</a>
        </div>
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
        codeImg: '/static/500wcp/img/code.jpg',
        time: this.getHMS(new Date()),
        balanceRefreshing: false,
        links: {
          navLink: 'https://6668611.com/',
        },
        code_show: parseInt(localStorage.is_code_show),
      }
    },
    methods: {
      /**
       * 收藏本站
       * @param title
       */
      addFavorite (title) {
        var url = 'http://' + location.hostname + '/'
        try {
          window.external.addFavorite(url, title)
        } catch (e) {
          try {
            window.sidebar.addPanel(title, url, '')
          } catch (e) {
            alert('抱歉，您所使用的浏览器无法完成此操作。\n加入收藏失败，电脑请使用Ctrl+D进行添加')
          }
        }
      },
      openKefu () {
        let service = JSON.parse(localStorage.config).service;
        if (service) {
          let ser = service.find(item => item.status === 'on')
          if (ser) {
            window.open(ser.url);
          }
        }
      },
      getCode () {
        if (this.code_show == 0) {
        return;
      }
        if (!this.passKey.userName) {
          // alert("请务必输入6位帐号");
          return false
        }
        if (this.passKey.userName.length < 5) {
          // alert("请务必输入6位帐号");
          return false
        }

          getS(`captcha`, {
          userName: this.passKey.userName
        }).then(res => {
          if (res.code === 200) {
            this.codeImg = res.data.captcha_image_text
            this.passKey.captcha_key = res.data.captcha_key
          } else {
            this.$store.commit('alert/showTipModel', {
              bool: true,
              title: res.message,
              model: 'warn'
            })
          }
        })
      },
      is_code_show(){
         getS(`is-show-captcha`).then(res => {
        if (res && res.code === 200) {
          this.code_show = res.data;
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
        if(this.code_show){
           if (this.passKey.code === '') {
          alert('验证码请务必输入')
          return false
        }
        }
        if(this.code_show){
          if (this.passKey.code.length < 4 || this.passKey.code.length > 4) {
          alert('请输入4位验证码')
          return false
        }
        }

        this.passKey.device = 'pc';
        postS(`login`, this.passKey).then(res => {
          if (res.code === 200) {
            this.$router.push({
              name: 'clause'
            })
            UserService.setCache(res, 'v1', 'login')
          } else {
            alert(res.message)
            this.is_code_show();
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
          this.balanceRefreshing = true
          getS(`member/balance`).then(res => {
          if (res.code === 200) {
            this.balanceRefreshing = false
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
      }
    },
    computed: {
      userinfo () {
        return this.$store.state.mainState.userinfo
      }
    },
    created () {
      this.is_code_show();

      if(localStorage.zhuce){
        if(!localStorage.token){
          this.register();
          localStorage.removeItem("zhuce");
        }
      }

      setInterval(() => {
        this.time = this.getTimes(new Date())
      }, 1000)

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

<style type="text/less" lang="less" scoped>
  .row:after, .clear-fix {
    content: '';
    display: table;
    clear: both;
    zoom: 1;
  }

  .main {
    .header-nav {
      line-height: 30px;
      background-color: #f5f5f5;

      .header-nav-body {
        width: 1000px;
        margin: 0 auto;
        font-size: 12px;

        .nav {
          float: right;

          ul {
            li {
              float: right;

              a {
                color: #5e5e5e;
              }

              a:hover {
                color: #f13131;
              }
            }

            li:after {
              content: '|';
              padding: 0 5px;
            }

            li:first-child::after {
              content: '';
              padding: unset;
            }
          }
        }
      }
    }

    .header-main {
      width: 1000px;
      height: 120px;
      margin: 0 auto;
      overflow: hidden;
      position: relative;

      a {
        float: left;

        .logo {
          width: 206px;
        }
      }

      .header-image {
        float: left;
        width: 520px;
        height: 120px;
        background-size: 516px 120px;
        background: url("/static/500wcp/img/header-img.png") 60px;
      }

      .login-before, .login-after {
        width: 274px;
        height: 120px;
        padding: 10px;
        overflow: hidden;
        position: absolute;
        top: 0;
        right: 0;

        .row {
          position: relative;
          margin-bottom: 5px;
          white-space: nowrap;

          .forget_pwd {
            position: absolute;
            font-size: 12px;
            top: 8px;
            right: 5px;
          }

          .auth {
            width: 110px;
          }

          img {
            position: absolute;
            right: 0;
            top: 2px;
            height: 22px;
          }

          a {
            padding: 0 4px;
            margin-right: 4px;
            border-radius: 4px;
            color: #696969;
            background-color: transparent;
            -webkit-transition: all 0.5s;
            transition: all 0.5s;

            &:hover {
              color: white;
              background-color: #f13131;
            }
          }

          span {
            padding: 4px 2px;
          }
        }
      }

      .login-before {
        .form-input {
          width: 200px;
          input{
            -webkit-appearance: none;
            background-color: #fff;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: 14px;
            height: 28px;
            line-height: 28px;
            outline: 0;
            padding: 0 15px;
            transition: border-color .2s cubic-bezier(.645,.045,.355,1);
            width: 100%;
          }
            input::-webkit-input-placeholder {
            font-size: 12px;
          }
            input:focus{
              border-color: #409eff;
              outline: 0;
            }

        }

        .form-button {
          width: 60px;
          position: absolute;
          right: 0;
          top: 10px;

          button{
            padding: 7px 15px;
            font-size: 12px;
            border-radius: 3px;
            line-height: 1;
          }
        }
      }

      .login-after {
        .row {
          height: 28px;
          line-height: 28px;
        }
      }
    }
  }
</style>

