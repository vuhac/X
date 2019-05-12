<template>
  <div class="main">
    <div class="header-nav">
      <div class="header-nav-body clear-fix">
        <span>您好,欢迎来到网易彩票</span>
        <span class="time">{{time}}</span>
        <nav class="nav">
          <ul class="clear-fix">
            <!-- <li><a target="_blank" :href="links.jiechiLink">防劫持教程</a></li> -->
            <li><a target="_blank" :href="links.navLink">网址导航</a></li>
            <li><a target="_blank" href="javascript: void(0)" @click="addFavorite('网易彩票')">添加收藏</a></li>
            <li><a @click="openKefu">在线客服</a></li>
            <li><a target="_blank" href="/m">手机版</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="header-main">
      <a class="logo" href="javascript:void(0)" @click="$router.push('/');$parent.getPopout1()"></a>
      <div class="header-image" style="height: 120px; background-size: 450px 120px; background-position: 60px;"></div>

      <!-- 登录前 -->
      <div class="login-before clear-fix" v-if="!userinfo">

        <div class="m-top5">
          <input class="header-input" type="text" autocomplete="off" placeholder="帐号" v-model="passKey.userName"
                  @blur="getCode" />
            <button class="header-button" @click="login">登录</button>
        </div>
        <div class="m-top5">
          <input class="header-input" maxlength="20" autocomplete="off" type="password" placeholder="密码"
                  v-model="passKey.password"></input>
          <a class="forget_pwd" onclick="alert('忘记帐号，请联系在线客服人员取回！');" href="javascript:void(0)">忘记密码</a>
          <button class="header-button" @click="register">注册</button>
        </div>
        <div class="m-top5">
          <input v-if="code_show" class="header-input w-100" size="mini" autocomplete="off" placeholder="验证码" maxlength="4" type="text" v-model="passKey.code"></input>
          <img v-if="code_show" class="auth-image" :src="codeImg" alt="" @click="getCode">

          <button class="header-button" @click="loginTest">试玩</button>
        </div>
      </div>

      <!-- 登录后 -->
      <div class="login-after" v-if="userinfo">
        <div class="row">
          <p><span>用户帐号</span>：<span>{{userinfo.userName}}</span></p>
        </div>
        <div class="row">
          <a href="javascript: void(0)" @click="goUserCen('personage',1)">投注记录</a>
          <span>余额</span>：<span>{{userinfo ? userinfo.balance : ''}}</span>
          <span :class="'fa fa-fw fa-refresh ' + (balanceRefreshing?'fa-spin':'')" @click="getBalance" style="cursor:pointer"></span>
        </div>
        <div class="row">
          <a href="javascript: void(0)" @click="goUserCen('personage',0)">会员中心</a>
          <!-- <a href="javascript: void(0)" onclick="alert('联系直属上级或7X24小时在线客服！');">申请代理</a> -->
          <a href="javascript: void(0)" @click="goUserCen('recharge',0)">存款</a>
          <a href="javascript: void(0)" @click="goUserCen('withdraw',0)">取款</a>
          <a href="javascript: void(0)" @click="logout">退出</a>
        </div>
      </div>
    </div>
    <!-- <Modal
        class="vp-login-warp"
        :title="modelTitle"
        v-model="ifLogin"
        class-name="vp-login-warp"
        width="790"
        :mask-closable="false"
        :closable="false"
      >
        <vp-admin-index></vp-admin-index>
      </Modal> -->
      <div class="my-modal" v-show="ifLogin">
        <div class="bg"></div>
        <div class="my-modal-content">
          <div class="my-register">注册帐号</div>
          <vp-admin-index></vp-admin-index>
        </div>
      </div>
  </div>
</template>

<script>
  let timer
  import UserService from '@/service/public/UserService.js'
  import store from '@/vuex/store'
  import {postS,getS} from '@/service/public/service.js'
  import vpAdminIndex from '../../public/tradition/components/admin'

  export default {
    data () {
      return {
        passKey: {},
        codeImg: '/static/wycp/img/code.jpg',
        time: '',
        balanceRefreshing: false,
        links: {
          navLink: 'https://wycp9900.com/',
          jiechiLink:'https://kjzb.com/dns'
        },
        code_show: parseInt(localStorage.is_code_show)
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
      //注册
      register () {
         this.$store.commit('alert/showLogin', true)
         this.$store.commit('alert/setChooseModel', '注册帐号')
         this.$store.commit('alert/setLoginTitle', '注册帐号')
      },
      timeFormate(timestamp){
          let m = new Date(timestamp).getMinutes();
          let s = new Date(timestamp).getHours() ;
          this.time = (parseInt(s)<10?('0'+s):s) +':'+ (parseInt(m)<10?('0'+m):m) ;
      },


      nowTimes(){
        this.timeFormate(new Date());
        clearInterval(timer)
        timer=setInterval(this.nowTimes,10000);
      },
    },
    computed: {
      // 个人信息刷新
      userinfo () {
        return this.$store.state.mainState.userinfo;
      },
      // 是否提示信息
      tipDatas () {
        return this.$store.state.alert.tipModel
      },
      // 是否显示登录
      ifLogin () {
        return this.$store.state.alert.login.ifLogin
      },
      // 登录注册标题切换
      modelTitle () {
        return this.$store.state.alert.login.modelTitle
      }
    },
    created () {
      // this.time = (new Date().getHours())+':'+ (new Date().getMinutes())
      this.is_code_show();

      if(localStorage.zhuce){
        if(!localStorage.token){
          this.register();
          localStorage.removeItem("zhuce");
        }
        // if(localStorage.userinfo && localStorage.Public_User == 'test'){
        //   this.register();
        //   localStorage.removeItem("zhuce");
        // }
      }

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
    mounted () {
      this.nowTimes();
    },
    components: {
      vpAdminIndex
    },
    store
  }
</script>

<style type="text/less" lang="less" scoped>
  .vp-login-warp {
    /deep/ .ivu-modal-wrap {
      top: 50%;
      -webkit-transform: translateY(-60%);
      -moz-transform: translateY(-60%);
      -o-transform: translateY(-60%);
      -ms-transform: translateY(-60%);
      transform: translateY(-60%);
      overflow: inherit;

      .ivu-modal{
           top:10%;

      .ivu-modal-header {
        margin: 14px 20px 0 20px;
        height: 70px;

        .ivu-modal-header-inner {
          font-size: 20px;
          color: #333;
          font-weight: normal;
          border-bottom: 2px solid #FF0024;;
          display: inline-block;
          width: auto;
          padding: 20px 10px 34px 10px;
        }

      }

      .ivu-modal-body {
        padding: 30px;
      }

      .ivu-modal-footer {
        display: none;
      }
    }
    }
  }

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
        color: #000;
        .time{
          display: inline-block;
          margin-left: 10px;
        }
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

      .logo{
        display: inline-block;
        margin-bottom: 11px;
        width: 206px;
        height: 99px;
        background:url('/static/wycp/img/logo.png') no-repeat left center;
      }

      .header-image {
        display: inline-block;
        width: 524px;
        background: url("/static/wycp/img/header-img.png") no-repeat top center;
      }

      .login-before {
        width: 260px;
        height: 100px;
        margin-top: 10px;
        position: absolute;
        top: 0;
        right: 0;

        .m-top5{
          margin-top: 5px;
          display: flex;
          position: relative;


          .header-input{
            border: 1px solid #ccc;
            width: 160px;
            padding: 4px;
            height: 27px;
            color: #555 !important;
            text-indent: 3px;
            outline: none;
            margin-right: 10px;
            font-size: 13px;
            font-family: 'Microsoft YaHei';
          }
          .w-100{
            width: 100px;
          }
          .auth-image{
            width: 55px;
            height: 26px;
            margin-left: -5px;
            margin-right: 10px;
          }
          .header-input::placeholder{
            color: #888 !important;
          }

          .forget_pwd{
            font-size: 10px;
            color: #bbb;
            display: inline-block;
            width: 60px;
            position: absolute;
            top: 9.5px;
            left: 96px;
          }

          .header-button{
            width: 80px;
            height: 27px;
            border-radius: 4px;
            color: black;
            -webkit-transition-duration: 0.4s;
            transition-duration: 0.4s;
            border: none;
            outline: none;
            font-size: 13px;
            font-family: 'Microsoft YaHei';
          }
          .header-button:hover{
            color: #fff;
            background-color: red;
          }
        }

      }
      .login-after {
        width:210px;
        height: 90px;
        font-size: 14px;
        position: absolute;
        top: 13px;
        right:13px;

        .row {
          height: 30px;
          line-height: 30px;
          position: relative;
          white-space: nowrap;
          &:nth-child(1){
            position: relative;
            a{
              color: #999999;
              display: inline-block;
              position: absolute;
              right: 0;
              top:0;
            }
          }
          &:nth-child(2) span:nth-child(4){
            margin-left: 10px;
          }
          a{
            color: #555;
            margin-right: 8px;
          }
        }
      }

     }
     .my-modal {
      display: block;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 9999;

      .bg {
      z-index: 9998;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
        background-color: rgba(0,0,0,0.36)
      }
      .my-modal-content {
        max-width: 750px;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 9999;
        background-color: #fff;
        // padding: 5% 0;
        border-radius: 10px;

        .vp-admin-wrap{
          padding: 116px 0 0px;
        }

       .my-register{
           position: absolute;
           font-size: 20px;
           line-height: 20px;
           color: #333;
           font-weight: normal;
           border-bottom: 2px solid #FF0024;
           padding: 20px 10px 20px 10px;
           top:0px;
           left: 30px;
           z-index: 99;
        }
      }
    }
  }
</style>

