<template>
  <div class="register" v-if="isLogin">
    <div class="popup">
      <div class="headline"></div>
      <div class="content">
        <div class="title_tab">
          <div class="close1" @click="close">
            <img src="/static/szc/img/home/close_ico.png" alt>
          </div>
        </div>

        <div class="row">
          <label>用户名:</label>
          <div class="group">
            <input
              type="text"
              placeholder="请输入6到20位的数字或字母组合"
              maxlength="20"
              v-model="passKey.userName"
            >
          </div>
        </div>

        <div class="row">
          <label>密码:</label>
          <div class="group">
            <input
              :type="pwdInp"
              ref="pwdInp"
              placeholder="请输入6到20位的数字或字母组合"
              maxlength="20"
              v-model="passKey.password"
            >
            <img @click="changType" class="eys_ico1" src="/static/szc/img/home/eyes_ico.png" alt>
          </div>
        </div>

        <div class="row" v-if="code_show">
          <label>验证码:</label>
          <div class="group">
            <input type="text" placeholder="请输入验证码" v-model="code" maxlength="4">
            <span class="yzm_reg">
              <img class="checkLoginCodeImage" :src="codeImg" @click="getCode">
            </span>
          </div>
        </div>

        <div class="operate">
          <a class="btn" @click="login">立即登录</a>
        </div>
        <!-- <div class="row tip_info">
          <p>完成即视为同意已年满18岁，且在此网站所有活动并没抵触本人所在国家所管辖的法律</p>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store";
import UserService from "@/service/public/UserService";
import { postS,getS } from "@/service/public/service.js";
export default {
  data() {
    return {
      pwdSrc: true,
      pwdInp: "password",
      register: [],
      codeImg: "/static/hsyl/img/code.jpg",
      captcha_key: "",
      passKey: {},
      register_password: "",
      code: "",
      intacode: "",
      iscode: false,
      agent: null,
      incodeReadonly: false,
      code_show: parseInt(localStorage.is_code_show)
    };
  },
  created() {},
  mounted() {
    this.intacode = this.GetQueryString("agent") || this.GetQueryString("k");
    this.incodeReadonly = !!this.intacode;
  },
  methods: {
    getCode() {
      if (this.code_show == 0) {
        return;
      }
      if (this.passKey.userName.length < 5) {
        alert("请输入6位帐号");
        this.passKey.userName = "";
        var oInput = document.getElementById("userName");
        oInput.focus();
        return false;
      }
      getS(`captcha`, { userName: this.passKey.userName }).then(res => {
        if (res.code == 200) {
          this.codeImg = res.data.captcha_image_text;
          this.passKey.captcha_key = res.data.captcha_key;
        } else {
          this.$store.commit("alert/showTipModel", {
            bool: true,
            title: res.message,
            model: "warn"
          });
        }
      });
    },
    close() {
      this.$store.commit("szc/showLogin", false);
    },
    login() {
      if (!this.validateAccountLogin(this.passKey.userName)) {
        alert("请输入6-20位数字或字母组成的帐号");
        return false;
      }
      if (!this.validateAccountLogin(this.passKey.password)) {
        alert("请输入6-20位数字或字母组成的密码");
        return false;
      }
      if (this.code_show) {
        if (this.passKey.code == "") {
          alert("验证码请务必输入");
          return false;
        }
      }
      if (this.code_show) {
        if (this.passKey.code.length < 4 || this.passKey.code.length > 4) {
          alert("请输入4位验证码");
          return false;
        }
      }
      this.passKey.device = "pc";
      postS(`login`, this.passKey).then(res => {
        if (res.code == 200) {
          // this.$router.push({
          //   name: "home"
          // });
          UserService.setCache(res, "v1", "login");
        } else {
          alert(res.message);
          this.is_code_show();
        }
      });
    },
    changType() {
      if (this.pwdInp == "password") {
        this.pwdInp = "text";
      } else {
        this.pwdInp = "password";
      }
    },
    is_code_show() {
      getS(`is-show-captcha`).then(res => {
        if (res && res.code === 200) {
          this.code_show = res.data;
        }
      });
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.szc.loginShow;
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
          cursor: -webkit-pointer;
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
            cursor: -webkit-pointer;
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
            cursor: -webkit-pointer;
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
          cursor: -webkit-pointer;
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
