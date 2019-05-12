<template>
  <div>
    <!-- <div id="hdpublic"></div>
    <div id="news" popup-news="" popup-page="register home">
      <div class="wrapper">
        <div class="marquee"><marquee scrollamount="3" scrolldelay="100" direction="left" onmouseover="this.stop();" onmouseout="this.start();" style="cursor:pointer;">尊敬的会员：巅峰钜惠独特打造公司入款优惠赠送iPhone XS Max，手机在陆续派送中，请您及时查收，还未收到手机的会员请耐心等待，感谢您一直以来对新葡京赌场的支持，祝您生活愉快！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</marquee></div>
      </div>
    </div> -->
    <div class="reginer_box">
      <div class="reginer_cont">

        <div id="left_center">
          <ul id="sidebar">
            <li><a @click="goLink('/home/games?id=10022&name=MG老虎机')">电子游艺</a></li>
            <li><a @click="goLink('/home/games?id=10022&name=MG老虎机')">MG电子</a></li>
            <li><a @click="goLink('/home/buyu')">捕鱼游戏</a></li>
            <li><a @click="goLink('/home/live')">真人视讯</a></li>
            <li><a @click="goLink('/home/tiyu')">体育赛事</a></li>
            <li><a @click="goLink('/home/youhui')">优惠活动</a></li>
            <li><a @click="goLink('/service')">在线客服</a></li>
          </ul>
        </div>


        <div id="right_center">
          <!-- 注册 -->
          <div class="loginer">
            <span
              style="font-family: &quot;Microsoft YaHei&quot;,微软雅黑,&quot;MicrosoftJhengHei&quot;,华文细黑,STHeiti,MingLiu;font-size: 17px;padding: 0 4px 0 10px; display:block; "
            >
              <div class="register-slogan">新葡京赌场，欢迎您的加入！<span ng-bind="ContactInfo.Easydomain" class="ng-binding"></span></div>

              <p>*新葡京赌场不计输赢天天返水高达2.0%无上限</p>
              <p>*MG电子天天返水2.0%起！电子游艺更有七大专题优惠！</p>
              <p>*MW大满贯电子千炮捕鱼隆重推出,无论输赢天天返利28033！</p>
              <p>*24小时提款0审核0冻结0手续费不限提款次数，存取款0-5分钟火速到帐；</p>
              <p>*畅享极速存款，手机也能在线支付，微信/支付宝支付扫一扫1~5000秒到帐；</p>

            </span>
            <form
              method="post"
              name="myFORM"
              class="JoinMemForm"
              id="myFORM"
              style="display: block;"
            >
              <!-- 第三方登入 -->
              <input type="hidden" name="key" value="add">
              <input type="hidden" name="SS" value>
              <input type="hidden" name="SR" value>
              <input type="hidden" name="TS" value>

              <!--會員資料-->
              <fieldset>
                <legend class="join-acc">注册帐号</legend>
                <p style="position:relative;min-height:1px;">
                  <a style="position:absolute;top:0px;"></a>
                </p>

                <!-- 帳號 -->
                <p id="js-username" style="display: block;">
                  <label>
                    <span class="star" style="display: inline;">*&nbsp;</span>帐 号：
                  </label>
                  <input
                    type="text"
                    name="username"
                    @keydown="pulicError=''"
                    v-on:keyup.enter="registerTest"
                    id="username"
                    v-model="userName"
                    value
                    maxheight="30"
                    size="15"
                    @blur="getCode"
                    maxlength="10"
                  >
                  <span>请输入6-10个字元, 仅可输入英文字母以及数字的组合!!</span>
                </p>
                <!-- 登入碼 -->
                <!-- 密碼 -->
                <p id="js-password" style="display: block;">
                  <label>
                    <span class="star" style="display: inline;">*&nbsp;</span>密 码：
                  </label>
                  <input
                    type="password"
                    name="password"
                    @keydown="pulicError=''"
                    v-on:keyup.enter="registerTest"
                    id="password"
                    v-model="password"
                    value
                    class="password_adv"
                    size="15"
                    maxlength="20"
                  >
                  <span>
                    *密码规则：须为8~20码英文或数字符合0~9或a~z字元
                  </span>
                </p>
                <!-- 確認密碼 -->
                <p id="js-passwd" style="display: block;">
                  <label title="确认密码">
                    <span class="star" style="display: inline;">*&nbsp;</span>确认密码：
                  </label>
                  <input
                    type="password"
                    name="passwd"
                    @keydown="pulicError=''"
                    v-on:keyup.enter="registerTest"
                    id="passwd"
                    value
                    v-model="password_confirmation"
                    size="15"
                    maxlength="20"
                  >
                </p>
                <!-- 貨幣 -->
                <p id="js-rmNum" style="display: block;">
                  <label>
                    <span class="star" style="display: inline;">*&nbsp;</span>验证码：
                  </label>
                  <input
                    class="pwd-input-set RmNum"
                    name="rmNum"
                    id="rmNum"
                    type="text"
                    size="4"
                    @keydown="pulicError=''"
                    v-model="code"
                    title="( 点选此处产生新验证码 )"
                  >
                  <img
                    class="checkLoginCodeImage"
                    :src="codeImg"
                    @click="getCode"
                    style="cursor:pointer"
                  >
                </p>
                <!-- 貨幣 -->
                <p id="js-InvitationCode" style="display: block;" v-if="iscode">
                  <label>
                    <span class="star" style="display: inline;">*&nbsp;</span>邀请码：
                  </label>
                  <input
                    type="text"
                    name="InvitationCode"
                    v-on:keyup.enter="registerTest"
                    @keydown="pulicError=''"
                    v-model="intacode"
                    id="InvitationCode"
                    value
                    class="InvitationCode_adv"
                    size="15"
                    :readonly="incodeReadonly"
                  >
                </p>
                <!-- 验证码 -->
              </fieldset>

              <!--次要資料-->
              <fieldset
                v-if="register.length"
              >
                <legend class="join-acc">会员资料</legend>
                <p class="row" v-for="(item,index) in register" :key="index">
                  <label>
                    <span class="star" style="display: inline;">*&nbsp;</span>
                    {{item.name}}：
                  </label>
                  <input
                    type="text"
                    :placeholder="item.placeholder"
                    v-model="item.value"
                    maxlength="16"
                  >
                </p>
              </fieldset>

              <!-- 同意條約 -->
              <div id="js-agree" style="display: block;font-size:10px;">
                <p id="memCash-agree" style="padding-left: 20px;">
                  <input
                    type="checkbox"
                    name="agree"
                    id="check1"
                    value="Y"
                    style="height:13px;"
                    v-model="agree"
                    checked
                  >我已届满合法博彩年龄﹐且同意各项开户条约。
                </p>
              </div>
              <br>

              <div class="err" v-if="pulicError">
                <i class="iconfont icon-baojing"></i>
                <span ref="pulicError">{{pulicError}}</span>
              </div>

              <!-- 确认/重设 -->
              <div id="memCash-confirm" align="center">
                <input
                  type="button"
                  name="OK2"
                  id="OK2"
                  class="joinform_submit"
                  value="确认"
                  @click="registerTest"
                  style="cursor:pointer"
                >
                <input
                  type="reset"
                  name="CANCEL2"
                  id="CANCEL2"
                  class="joinform_cancel"
                  value="重设"
                  @click="reset"
                  style="cursor:pointer"
                >
              </div>

              <!-- 备注 -->
              <div class="JM_content JM_content_b">
                <div id="joinmem">
                  <div>
                    <p>备注：</p>
                    <p>1.标记有 * 者为必填项目。</p>
                    <p>2.取款密码为取款时的凭证,请会员务必仔细填写。</p>
                  </div>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import UserService from "@/service/public/UserService.js";
import { _SetPost, postS,getS } from "@/service/public/service.js";
import store from "@/vuex/store";

export default {
  data() {
    return {
      userName: "",
      intacode: "",
      password: "",
      password_confirmation: "",
      phoneNumber: "",
      pulicError: "",
      register: [],
      codeImg: "/static/public/image/common/code.jpg",
      captcha_key: "",
      code: "",
      agent: null,
      agree: true,
      iscode: false,
      islink: true,
      incodeReadonly: false,
    };
  },
  mounted() {
    this.intacode = this.GetQueryString("agent") || this.GetQueryString("k");
    this.incodeReadonly = !!this.intacode;
  },
  methods: {
    async registerTest() {
      let staueAcc = this.validateAccountUserNamenew(this.userName);
      let stauePassword = this.validateAccountnew(this.password);

      if (!staueAcc) {
        this.pulicError = "帐号6-10位数字或字母";
        return false;
      }
      if (!stauePassword) {
        this.pulicError = "密码 8-20位数字或字母";
        return false;
      }

      if (this.password !== this.password_confirmation) {
        this.pulicError = "两次密码不一致";
        return false;
      }
      if (this.code === "") {
        this.pulicError = "请输入验证码";
        return false;
      }
      if (this.code.length < 4 || this.code.length > 4) {
        this.pulicError = "请输入4位验证码";
        return false;
      }

      if (this.iscode == true) {
        if (this.intacode.length < 6 || this.intacode.length > 6) {
          this.pulicError = "请输入6位邀请码";
          return false;
        }
      }
      if (!this.agree) {
        this.pulicError='请点击同意才可以进行注册！'
        return false
      }
      let params = {};
      params.userName = this.userName;
      params.password = this.password;
      params.code = this.code;
      params.device = "pc";
      params.captcha_key = this.captcha_key;
      let flag = true;

      if (this.intacode) {
        params.invite_code = this.intacode;
      }

      for (let i = 0; i < this.register.length; i++) {
        if (!this.register[i].value) {
          this.pulicError = this.register[i].placeholder;
          flag = false;
          break;
        }
        params[this.register[i].key] = this.register[i].value;
      }

      if (!flag) {
        return false;
      }

      if (this.agent) {
        params.agent = this.agent;
      }

      let res = await _SetPost(
        `${this.$HOST_NAME}/checkUsername/${this.userName}`,
        {}
      );
      if (res && res.code == 200) {
      } else {
        this.pulicError = "帐号已存在";

        return false;
      }
      this.registerSubmit(params);
    },
    async registerSubmit(params) {

      let res = await postS(`register`, params);
      if (res.code == 200) {
        UserService.setCachereg(res, "v1");
        window.location.href = "/";

      } else {
        this.dNotify(res.message, "error");
      }
    },
    login() {
      this.$store.commit("mainState/setChooseModel", "登录");
      this.$store.commit("mainState/setLoginTitle", "登录");
    },
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
    goLink(link) {
      if(link=='/home/tiyu'){
        if (!localStorage.token || !localStorage.userinfo){
          alert('未登录');
          return false;
        }else{
           window.open("#/loading?name=皇冠体育&classId=21")
        }
      }else if(link=='/service'){
        let service = JSON.parse(localStorage.config).service;
        if (service) {
          let ser = service.find(item => item.status === 'on')
          if (ser) {
            window.open(ser.url);
          }
        }
      } else{
        this.$router.push({
          path: link
        });
      }

    },
    reset() {
      (this.userName = ""),
        (this.password = ""),
        (this.password_confirmation = ""),
        (this.verificationCode = ""),
        (this.InvitationCode = ""),
        (this.pulicError = ""),
        (this.code = ""),
        (this.pulicError = ""),
        this.register &&
          this.register.forEach(item => {
            item.value = "";
          });
    }
  },

  created() {
    this.agent = this.GetQueryString("agent") || this.GetQueryString("k");
    let registerPc = JSON.parse(localStorage.getItem("config")).register.pc;
    let registermodel = JSON.parse(localStorage.getItem("config")).site_model;
    if (registermodel == "invite_code") {
      this.iscode = true;
    } else {
      this.iscode = false;
    }
    registerPc.forEach((v, i) => {
      this.register[i] = {};
      switch (v) {
        case "phone":
          this.register[i].placeholder = " ";
          this.register[i].value = "";
          this.register[i].key = v;
          this.register[i].name = "手机号";
          break;
        case "email":
          this.register[i].placeholder = "请输入邮箱地址";
          this.register[i].value = "";
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
  store
};
</script>

<style lang="less" scoped>
// #hdpublic{
//   margin-top: -148px;
//   height: 431px;
//   background: #1a2a56 url(/static/xpj/img/banner_about.jpg) no-repeat center top;
// }

// #news {
//   position: relative;
//   z-index: 1;
//   margin-top: -35px;
//   height: 34px;
//   border-bottom: 1px solid #263c78;
//   background: url(/static/xpj/img/newbg.png);
//   .wrapper {
//     position: relative;
//     width: 1040px;
//     margin: 0 auto;
//     padding: 0 0 0 95px;
//     height: 34px;
//     line-height: 34px;
//     background: url(/static/xpj/img/news.png) no-repeat left center;

//     .marquee {
//       float: left;
//       width: 945px;
//       color: #FFFFFF;
//       font-size: 10px;
//       height: 34px;
//     }
//   }
// }
.reginer_box{
  width: 100%;
  overflow: hidden;
  // position: relative;
  background: #142044  url('/static/xpj/img/reginer_bg.jpg') center top  no-repeat;

  .reginer_cont {
    width: 1040px;
    height: auto;
    margin:20px auto;
    padding: 33px 33px 22px;
    border: 1px solid #1e3064;
    background: url(/static/xpj/img/unlobbybg.png);
    overflow: hidden;

    #left_center {
      float: left;
      width: 235px;
      height: 683px;
      padding: 86px 0 0;
      background: url(/static/xpj/img/aside.png) no-repeat left top;
      overflow: hidden;

      #sidebar li {
        width: 232px;
        height: 48px;

        a {
          display: block;
          height: 100%;
          padding-left: 68px;
          color: #fff;
          font-size: 16px;
          text-align: left;
          text-decoration: none;
          line-height: 45px;
          background: url(/static/xpj/img/aside_btn.png) no-repeat;
        }

        &:hover a{
          color: #f4f183;
          background: url(/static/xpj/img/aside_btnh.png) no-repeat;
        }

      }
    }

    #right_center {
      float: right;
      color: #ffff;

      .register-slogan{
        height: 58px;
        padding-top: 25px;
        font-size: 14px;
        text-align: center;
        background: url(/static/xpj/img/register_slogan.png) no-repeat left center;
      }

      p{
        font-size: 12px;
        margin:1em 0;
      }

      .JoinMemForm {
        fieldset {
          font-size: 10px;
          border: 1px solid #30478e;
          margin: 10px;
          padding: 10px;

          legend{
            margin-left: 25px;
            padding: 0 12px;
            font-size: 14px;
            font-weight: bold;
            background: #121d3f;
          }

          p {

            label {
              float: left;
              height: 25px;
              line-height: 25px;
              text-align: right;
              width: 135px;
              .star {
                font-weight: bold;
                vertical-align: -2px;
              }
              .red {
                color: rgb(255, 0, 0);
              }
            }
            span {
              display: inline-block;
              line-height: 25px;
            }
            input {
              width: 148px;
              height: 22px;
              line-height: 22px;
              border: 1px solid #666;
              box-shadow: 0 0 6px #3a3a3a;
              border-radius: 3px;
              color: #444;
              font-size: 12px;
              text-indent: 6px;
              outline: none;
              border: none;
              margin: 0 15px;

              &#rmNum {
                width: 81px;
                margin: 0 0 0 15px;
              }
            }
            img {
              width: 58px;
              height: 23px;
              vertical-align: middle;
              margin-left: 5px;
              border-radius: 3px;
            }
            .memCash_text {
              display: block;
              padding: 5px 0 0 135px;
              min-height: 26px;
              border: 0;
              font-size: 100%;
              font: inherit;
              vertical-align: baseline;
            }
          }
        }
        #memCash-confirm {
          input {
            display: inline-block;
            width: 106px;
            height: 38px;
            margin: 0 5px;
            padding: 0;
            color: #fff;
            font-size: 17px;
            font-weight: bold;
            line-height: 38px;
            vertical-align: top;
            border: none;
            border-radius: 5px;
            background: transparent  url(/static/xpj/img/btn.png) no-repeat center top;
            &:hover{
              background-position: 0  -38px;
            }
          }
        }
      }
      .err {
        width: 210px;
        margin-left: 22px;
        height: 30px;
        line-height: 30px;
        // color: #444444;
        color:#fff;
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
      .JM_content {
        padding: 10px 10px 10px 20px;
        font-size: 10px;

      }
    }
  }

}

</style>
