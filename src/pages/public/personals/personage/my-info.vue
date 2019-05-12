<template>
  <div class="my-info">
    <div class="header">
      我的资料
    </div>
    <div class="content">
      <div class="row">
        <label>帐号：</label>
        <span>{{this.$store.state.mainState.userinfo.userName}}</span>
      </div>
      <div class="row">
        <label>真实姓名：</label>
        <span>{{this.$store.state.mainState.userinfo.realName||'暂无设置'}}</span>
      </div>
      <div class="row">
        <label>邮箱帐号：</label>
        <input type="text" v-model="email" placeholder="请输入邮箱地址">
      </div>
      <div class="row">
        <label>手机号：</label>
        <input type="text" v-model="phone" placeholder="请输入手机号码">
      </div>
      <div class="row">
        <label>微信号码：</label>
        <input type="text" v-model="wechat" placeholder="请输入微信号">
      </div>
      <!-- <div class="row">
        <label>资金密码：</label>
        <input type="password" v-model="payPassword">
      </div> -->
    </div>

    <div class="toast" v-if="toastShow" :style="{top:toastNum+'px'}">
      {{toastText}}
    </div>

    <div class="submitInfo" @click="resetMember">
      确认修改
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import UserService from '@/service/public/UserService.js'

  function codeStr (str) {
    if (/[^*]+(@[A-z0-9]+\.[A-z0-9]+)/.test(str))
      return str.replace(/([^*]{3})[^*]+(@[A-z0-9]+\.[A-z0-9]+)/, '$1*****$2')
    else if (str.length === 0) return ''
    else if (str.length === 1) return '*'
    else if (str.length === 2) return str.replace(/([^*])[^*]/, '$1*')
    else if (str.length === 3) return str.replace(/([^*])([^*]{2})/, '$1**')
    else if (str.length === 4) return str.replace(/([^*])([^*]{2})([^*])/, '$1**$3')
    else if (str.length === 5) return str.replace(/([^*])([^*]{3})([^*])/, '$1***$3')
    else if (str.length === 6) return str.replace(/([^*]{2})([^*]{2})([^*]{2})/, '$1**$3')
    else if (str.length === 7) return str.replace(/([^*]{2})([^*]{3})([^*]{2})/, '$1***$3')
    else if (str.length === 8) return str.replace(/([^*]{2})([^*]{4})([^*]{2})/, '$1****$3')
    else if (str.length > 8) return str.replace(/([^*]{3})([^*]{3,})([^*]{3})/, '$1*****$3')
  }

  export default {
    data () {
      return {
        payPassword: '',
        toastShow: false,
        toastNum: 380,
        toastText: '请输入资金密码',
        wechat: codeStr(this.$store.state.mainState.userinfo.wechat),
        phone: codeStr(this.$store.state.mainState.userinfo.phone),
        email: codeStr(this.$store.state.mainState.userinfo.email),
      }
    },
    methods: {
      resetMember () {
        let testEmail = this.testEmail(this.email)
        if (this.email !== codeStr(this.$store.state.mainState.userinfo.email) && !testEmail) {
          this.toastShow = true
          this.toastText = '请输入合法的邮箱'
          this.toastNum = 188
          return false
        }
        let testPhone = this.testPhone(this.phone)

      if (this.phone !== codeStr(this.$store.state.mainState.userinfo.phone) && !testPhone) {
          this.toastShow = true
          this.toastText = '请输入合法的手机号'
          this.toastNum = 254
          return false
        }

        // if (!/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(this.wechat) && this.wechat != '-*****') {
        //   this.toastShow = true
        //   this.toastText = '请输入合法的微信号'
        //   this.toastNum = 321
        //   return false
        // }
        // if (this.payPassword.length < 6) {
        //   this.toastShow = true
        //   this.toastText = '请输入6位资金密码'
        //   this.toastNum = 380
        //   return false
        // }


        this.toastShow = false
        this.$postS(`member/set-member-info`, {
          // payPassword: this.payPassword,
          wechat: this.wechat.indexOf('*') > -1 ? this.$store.state.mainState.userinfo.wechat : this.wechat,
          phone: this.phone.indexOf('*') > -1 ? this.$store.state.mainState.userinfo.phone : this.phone,
          email: this.email.indexOf('*') > -1 ? this.$store.state.mainState.userinfo.email : this.email

        }).then(res => {
          if (res.code == 200) {
            this.$success('修改成功')
            UserService.vpGetBasicInfo.call(this)
          } else {
            this.$error(res.message)
          }
        })
      },
    },
    store
  }
</script>

<style lang="less" scoped>
  .my-info {
    padding: 0 14px;
    .header {
      height: 66px;
      // line-height: 66px;
      border-bottom: 1px solid #f3f3f3;
      font-size: 1.8em;
      padding-left: 10px;
      color: #696969;
      line-height: 85px;
      font-weight: 400;
    }
    .content {
      border-bottom: 1px solid #f3f3f3;
      padding-bottom: 25px;
      .row {
        margin-top: 30px;
        label {
          width: 150px;
          display: inline-block;
          text-align: right;
          font-size: 15px;
          font-family: "Microsoft YaHei";
        }
        span {
          font-size: 15px;
        }
        input {
          height: 36px;
          font-size: 16px;
          background: #f5f5f5;
          border: 1px solid #f5f5f5;
          border-radius: 10px;
          // padding: 0 16px;
          text-align: left;
          text-indent: 5px;
          padding-left: 5px;
          -webkit-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
          -moz-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
          box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
          color: #666;
          &:not(.other) {
            width: 240px;
            height: 36px;
          }
        }
        input:focus {
          outline: none !important;
          border: 1px solid rgba(254, 134, 93, 0.6);
          box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06), 0 1px 10px 5px rgba(254, 134, 93, 0.14);
        }
      }
    }
    .submitInfo {
      width: 140px;
      height: 42px;
      line-height: 42px;
      text-align: center;
      color: #fff;
      font-size: 1.8em;
      background: linear-gradient(180deg, #ff3492, #ff1e4f);
      border-radius: 10px;
      margin-top: 25px;
      margin-left: 150px;
      display: inline-block;
      cursor: pointer;
    }
    .toast {
      width: 200px;
      height: 30px;
      line-height: 30px;
      background: #ff9900;
      color: #fff;
      font-size: 14px;
      font-weight: 200;
      position: absolute;
      right: 400px;
      top: 30px;
      border-radius: 5px;
      z-index: 99;
      text-indent: 1em;
    }
    .toast::after {
      content: "";
      width: 0;
      height: 0;
      border-width: 4px 8px 4px 0px;
      border-style: solid;
      border-color: transparent #f90 transparent transparent;
      display: block;
      position: absolute;
      top: 10px;
      left: -8px;
    }
  }
</style>
