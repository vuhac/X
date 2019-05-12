<template>
  <div class="register" v-if="isResiter">
    <div class="popup">
      <div class="headline">
      </div>

      <div class="content">
        <div class="title_tab">
          <div class="close1" @click="close">
            <img src="/static/szc/img/home/close_ico.png" alt>
          </div>
        </div>

        <div class="row">
          <label>帐号:</label>
          <div class="group">
            <input
              type="text"
              placeholder="请输入6到10位的数字或字母组合"
              maxlength="10"
              v-model="userName"
              @blur="getCode"
            >
          </div>
        </div>

        <div class="row">
          <label>密码:</label>
          <div class="group">
            <input
              :type="pwdInp"
              ref="pwdInp"
              placeholder="请输入8到20位的数字或字母组合"
              maxlength="20"
              v-model="password"
            >
            <img
              @click="changType"
              class="eys_ico1"
              src="/static/szc/img/home/eyes_ico.png"
              alt
            >
            <!-- <i class='eys_ico1'></i>
            <i class='eys_ico1'></i>-->
          </div>
        </div>

        <div class="row">
          <label>确认密码:</label>
          <div class="group">
            <input
              type="password"
              placeholder="请输入8到20位的数字或字母组合"
              maxlength="20"
              v-model="register_password"
            >
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

        <div class="row" v-if="iscode">
          <label>邀请码：</label>
          <div class="group">
            <input
              @keydown="pulicError=''"
              v-on:keyup.enter="registerTest"
              placeholder="邀请码"
              type="text"
              v-model="intacode"
              :readonly="incodeReadonly"
            >
          </div>
        </div>

        <div class="row" v-for="(item,index) in register" :key="index">
          <label>{{item.name}}:</label>
          <div class="group">
            <input
              type="text"
              :placeholder="item.placeholder"
              v-model="item.value"
              :maxlength="item.length"
            >
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
import store from "@/vuex/store";
import UserService from "@/service/public/UserService";
import { postS } from "@/service/public/service.js";
export default {
  data() {
    return {
      pwdSrc: true,
      pwdInp: "password",
      register: [],
      codeImg: "/static/szc/img/code.jpg",
      captcha_key: "",
      userName: "",
      password: "",
      register_password: "",
      code: "",
      intacode: "",
      iscode: false,
      agent: null,
      incodeReadonly: false
    };
  },
  created() {
    this.agent = this.GetQueryString("agent") || this.GetQueryString("k");
    let register = JSON.parse(localStorage.getItem("config")).register.pc;
    let registermodel = JSON.parse(localStorage.getItem("config")).site_model;
    // 上面进行了判断，是使用邀请码进行注册的

    if (registermodel == "invite_code") {
      this.iscode = true;
    } else {
      this.iscode = false;
    }

    register.forEach((v, i) => {
      this.register[i] = {};
      switch (v) {
        case "phone":
          this.register[i].placeholder = "请输入手机号";
          this.register[i].length = 11;
          this.register[i].value = "";
          this.register[i].key = v;
          this.register[i].name = "手机号";
          break;
        case "email":
          this.register[i].placeholder = "请输入邮箱地址";
          this.this.register[i].value = "";
          this.register[i].key = v;
          this.register[i].name = "邮箱";
          break;
        case "wechat":
          this.register[i].placeholder = "请输入微信号";
          this.register[i].value = "";
          this.register[i].key = v;
          this.register[i].name = "微信";
          break;
        case "realName":
          this.register[i].placeholder = "请输入真实姓名";
          this.register[i].value = "";
          this.register[i].key = v;
          this.register[i].name = "真实姓名";
          break;
        case "payPassword":
          this.register[i].placeholder = "请输入支付密码";
          this.register[i].value = "";
          this.register[i].key = v;
          this.register[i].name = "支付密码";
          break;
      }
    });
  },
  mounted() {
    this.intacode = this.GetQueryString("agent") || this.GetQueryString("k");
    // console.log(this.intacode);//undefined
    this.incodeReadonly = !!this.intacode;
  },
  methods: {
    getCode() {
      if (!this.userName) {
        return false;
      }

      this.$http
        .get(`/frontend/v1/captcha`, {
          headers: { Accept: "application/x.tg.v2+json" },
          params: { userName: this.userName }
        })
        .then(res => {
          console.log(res);
          if (res.code == 200) {
            // console.log(res)
            this.codeImg = res.data.captcha_image_text;
            this.captcha_key = res.data.captcha_key;
          }
        });
    },
    submitRegister() {
      let staueAcc = this.validateAccountUserNamenew(this.userName);
      let stauePassword = this.validateAccountnew(this.password);

      if (!staueAcc) {
        alert("帐号 6-10位数字或字母");
        return false;
      }
      if (!stauePassword) {
        alert("密码 8-20位数字或字母");
        return false;
      }
      if (this.password !== this.register_password) {
        alert("两次密码不一致");
        return false;
      }
      if (this.code === "") {
        alert("请输入验证码");
        return false;
      }
      if (this.code.length < 4 || this.code.length > 4) {
        alert("请输入4位验证码");
        return false;
      }
      // 这里的this.intacode为undefined，下一步会报错,初始的时候，并没有获取到，建议在前面进行if判断一波
      // console.log(this.code,this.intacode,this.iscode)
      if (this.iscode == true) {
        if (this.intacode.length < 6 || this.intacode.length > 6) {
          this.pulicError = "请输入6位邀请码";
          return false;
        }
      }
      let params = {};
      params.userName = this.userName;
      params.password = this.password;
      params.code = this.code;
      params.device = "pc";
      params.captcha_key = this.captcha_key;
      if (this.intacode) {
        params.invite_code = this.intacode;
      }

      let flag = true;
      // 判断注册所需要的属性是否都有值了
      for (let i = 0; i < this.register.length; i++) {
        if (!this.register[i].value) {
          alert(this.register[i].placeholder);
          console.log(this.register[i]);
          flag = false;
          break;
        }
        params[this.register[i].key] = this.register[i].value;
      }
      if (this.agent) {
        params.agent = this.agent;
      }

      if (!flag) {
        return false;
      }

      this.$http
        .post(`${this.$HOST_NAME}/checkUsername/${this.userName}`, {})
        .then(res => {
          if (res && res.code === 200) {
            postS(`register`, params).then(res => {
              if (res.code === 200) {
                UserService.setCache(res, "v1");
                setTimeout(() => {
                  alert("注册成功");
                  window.location.reload();
                }, 500);
              } else {
                alert(res.message);
              }
            });
          } else {
            alert("帐号已存在");
            return false;
          }
        });
    },
    close() {
      this.$store.commit("szc/showRegister", false);
    },
    changType() {
      if (this.pwdInp == "password") {
        this.pwdInp = "text";
      } else {
        this.pwdInp = "password";
      }
    }
  },
  computed: {
    isResiter() {
      return this.$store.state.szc.registerShow
    }
  },
  store
};
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
    // position: relative;
    width: 750px;
    min-height: 200px;
    // margin: 10% auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 10px;

    .headline {
      height: 120px;
      background-image: linear-gradient(160deg, #7faaff 30%, #07cacc 70%);
      border-radius: 10px 10px 0 0;
      background: url("/static/szc/img/home/header_log.png");

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
      // padding: 40px 40px 40px;
      padding: 27px 106px 48px 106px;
      .title_tab {
        // height: 40px;
        overflow: hidden;
        // padding-bottom: 10px;
        // border-bottom: 1px solid #ebecef;

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
          width: 24px;
          height: 24px;
          top: 20px;
          right: 20px;
          // background: rgba(0, 0, 0, 0.3);
          border-radius: 20px 0 0 20px;
          cursor:-webkit-pointer;
          cursor: pointer;
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
          width: 98px;
          height: 44px;
          text-indent: 10px;
          line-height: 44px;
          font-size: 18px;
          color: rgba(51, 51, 51, 1);
        }

        .group {
          float: left;
          overflow: hidden;
          position: relative;
          .eys_ico1 {
            width: 20px;
            height: 13px;
            position: absolute;
            right: 22px;
            top: 15px;
            cursor:-webkit-pointer;
            cursor: pointer;
          }
          input {
            width: 340px;
            height: 40px;
            box-sizing: border-box;
            padding: 7px 14px 7px 22px;
            font-size: 18px;
            line-height: 30px;
            border: 1px solid #ebecef;
            border-radius: 5px;
            background: #fff;
            font-size: 14px;
            color: rgba(153, 153, 153, 1);
          }

          .yzm_reg {
            float: right;
            margin-left: 20px;
            cursor:-webkit-pointer;
            cursor: pointer;

            img {
              width: 78px;
              height: 40px;
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
        margin-top: 30px;

        .btn {
          display: inline-block;
          width: 250px;
          height: 40px;
          color: #fff;
          background: rgba(194, 36, 41, 1);
          line-height: 40px;
          text-align: center;
          font-size: 18px;
          box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
          border: none;
          // margin: 10px 0;
          cursor:-webkit-pointer;
          cursor: pointer;
          transition: background 0.1s ease-in-out;
          border-radius: 3px;
        }
      }

      .tip_info {
        text-align: center;
        p {
          font-size: 12px;
          color: rgba(102, 102, 102, 1);
        }
      }
    }
  }
}
</style>
