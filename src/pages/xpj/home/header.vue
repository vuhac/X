<template>
  <div id="header_wrap">
    <div class="header-box">
      <div class="top-header">
        <div class="wrapper">
          <div id="div-meiDonNow">
            美东时间 :
            <span>{{time}}</span>
          </div>
          <ul class="top-nav">
            <li v-if="!userinfo">
              <a @click="tryPlay" :class="className1">免费试玩</a>
            </li>
            <li>
              <a
                :class="className2"
                @click="trustLogin({platform:'KY_CHESS',gameName:'0',name:'开元棋牌'})"
              >开元棋牌</a>
            </li>
            <!-- <li><a :class="className4" @click="gotoLink('/home/youhui')">活动大厅</a></li> -->
            <li>
              <a :class="className3">线路检测</a>
            </li>
            <!-- <li><a :class="className5">新手教程</a></li> -->
            <!-- <li><a href="#" :class="className2">线路检测</a></li>
              <li><a :class="className3">免息借呗</a></li>
              <li><a href="/static/xpj/html/download/index.html" target="_blank" :class="className4">下载app</a></li>
              <li><a :class="className5">金管家</a></li>
            <li><a @click="goUserCen('message',1)" :class="className6">投诉信箱</a></li>-->
            <li class="lastColor">
              <a @click="addFavorite('澳门新葡京')">加入收藏</a>
            </li>
            <li class="language" select-language>
              <span
                ng-repeat="item in language"
                data-language="zh-CN"
                title="简体中文"
                class="ng-scope"
              ></span>
              <span
                ng-repeat="item in language"
                data-language="zh-TW"
                title="繁体中文"
                class="ng-scope"
              ></span>
              <!-- end ngRepeat: item in language -->
              <span
                ng-repeat="item in language"
                data-language="en-US"
                title="English"
                class="ng-scope"
              ></span>
              <!-- end ngRepeat: item in language -->
              <span
                ng-repeat="item in language"
                data-language="th"
                title="ภาษาไทย"
                class="ng-scope"
              ></span>
              <!-- end ngRepeat: item in language -->
            </li>
          </ul>
        </div>
      </div>
      <div class="main clear" :class="{'tiyuBg':$route.path=='/home/tiyu' ||$route.path=='/home/qipai'}"
      >
        <div class="main_content">
          <div class="top_left">
            <div class="logo_icon clear animated flipInY">
              <div class="logo fleft">
                <!-- <a href="/"></a> -->
                <iframe
                  src="https://cdn.weibo-hk.com/Web.Portal/AR003-01.Portal/Content/Views/Shared/images/logo/logo.html"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div class="top_center">
            <div class="domain_name clear">
              <span class="domain_title"></span>
              <span class="domain_address"></span>
            </div>
            <div class="subtitle"></div>
          </div>
          <div id="account-box" :class="{login:userinfo}">
            <!-- 登录前 -->
            <form v-if="!userinfo" :class="{newform:code_show==false}">
              <input
                id="userName"
                type="text"
                placeholder="帐号"
                v-model="passKey.userName"
                @change="getCode"
              >

              <div id="check-code-wrapper" v-if="code_show==true">
                <input placeholder="验证码" v-model="passKey.code" v-on:keyup.enter="login">
                <img id="vPic" :src="codeImg" @click="getCode">
              </div>
              <div class="newlogin-box" @click="login" v-if="code_show==false">登入帐号</div>
              <br>
              <input
                id="login_password"
                type="password"
                placeholder="密码"
                v-model="passKey.password"
                v-on:keyup.enter="login"
                class="password"
              >
              <div
                class="newlogin-box"
                @click="$router.push('/home/register')"
                v-if="code_show==false"
              >免费开户</div>
              <div class="login-box" @click="login" v-if="code_show==true">登入</div>
              <span class="forget-btn" onclick="alert('忘记帐号密码，请联系在线客服人员取回!')">忘记密码</span>
              <div
                class="login-box"
                @click="$router.push('/home/register')"
                v-if="code_show==true"
              >注册</div>

              <span class="register-btn" title="代理教程" @click="$router.push('/home/agent')"></span>
            </form>
            <!-- 登录后 -->
            <div class="login_after" v-if="userinfo">
              <div class="ele-accinfo">
                <span>帐号：</span>
                <strong>{{userinfo.userName}}&nbsp;&nbsp;</strong>
                <span>钱包余额：</span>
                <strong id="user_money">{{userinfo&&userinfo.balance}}</strong>
                <strong style=" margin:-3px 0 10px 5px;">
                  <span style=" height:20px; width:20px">
                    <a
                      href="javascript:void(0)"
                      @click="getBalance"
                      style="display: inline-block; width: 16px; height: 16px;  background: url('/static/xpj/img/refresh.png')"
                    ></a>
                  </span>
                </strong>
              </div>
              <a class="login-box" @click="logout">登出</a>
              <div class="lianjie">
                <a href="javascript:void(0);" @click="goUserCen('personage',1)" title="投注记录">投注记录</a>
                <a href="javascript:void(0);" @click="goUserCen('withdraw',0)" title="线上取款">线上取款</a>
                <a href="javascript:void(0);" @click="goUserCen('recharge',0)" title="线上存款">线上存款</a>
                <a href="javascript:void(0);" @click="goUserCen('personage',2)" title="交易记录">交易记录</a>
                <a href="javascript:void(0);" @click="goUserCen('discounts',0)" title="实时返水">实时返水</a>
                <a href="javascript:void(0);" @click="goUserCen('personage',7)" title="修改密码">修改密码</a>
              </div>
            </div>
          </div>

          <ul class="nav-bar f1">
            <li
              class="tpT"
              v-for="(item,i) in classifyList"
              :key="i"
              :class="{isColor:item.hotShow == true}"
            >
              <img src="/static/xpj/img/hot.gif" class="x-dh-i" alt v-if="item.hotShow">
              <span class="x-dh-t" @click="goLink(item)">{{item.name}}</span>
              <div class="girl dropdown">
                <ol>
                  <li
                    v-for="(v,i) in item.list"
                    :key="i"
                    @click="thirdParty(v,item.platform)"
                    :class="v.class"
                  >
                    <a href="javascript:void(0)">
                      <span>{{v.name}}</span>
                    </a>
                  </li>
                </ol>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div :class="pathName">
      <div id="news" popup-page="register home">
        <div class="wrapper">
          <div class="marquee">
            <marquee
              v-if="lantern"
              align="middle"
              direction="left"
              loop="-1"
              scrollamount="3"
              onmouseout="this.start()"
              onmouseover="this.stop()"
              style="color: white; font-size: 14px; line-height: 34px;overflow: hidden;height: 34px;"
            >
              <span v-html="lantern"></span>
            </marquee>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from "@/service/public/UserService.js";
import store from "@/vuex/store";
import data from "../../public/games/public.js";
import { postS, getS } from "@/service/public/service.js";
import $ from "jquery";

export default {
  mixins: [data],
  data() {
    return {
      refreshS: false,
      passKey: {
        userName: "",
        password: ""
      },
      classifyList: [
        {
          name: "官网首页",
          text: "HOME",
          platform: "home",
          link: "/home",
          className: "LS-home"
        },
        {
          name: "体育赛事",
          text: "SPORTS",
          platform: "sport",
          link: "/home/tiyu",
          className: "LS-ball",
          hotShow: true
        },
        {
          name: "真人视讯",
          text: "CASINO",
          link: "/home/live",
          platform: "live_casino",
          className: "LS-live",
          hotShow: true
        },
        {
          name: "电子游戏",
          text: "GAME",
          platform: "AG_GAME",
          link: "/home/games?id=10022&name=MG老虎机",
          className: "LS-lines",
          hotShow: true
        },
        {
          name: "彩票游戏",
          text: "LOTTERY",
          platform: "CT_LOTTERY",
          link: "/plays/hall",
          gameName: "0",
          className: "LS-lottery"
        },
        {
          name: "棋牌游戏",
          text: "CHESS",
          platform: "KY_CHESS",
          link: "/home/qipai",
          gameName: "0",
          className: "LS-chess"
        },
        {
          name: "捕鱼游戏",
          text: "FISHING",
          link: "/home/buyu",
          className: "LS-game"
        },
        {
          name: "优惠活动",
          text: "ACTIVETY",
          link: "/home/youhui",
          className: "LS-youhui",
          hotShow: true
        },
        {
          name: "在线客服",
          text: "SERVICE",
          link: "service",
          className: "LS-kefu"
        }
      ],
      serviceUrl: null,
      codeImg: "/static/xpj/img/yzm.png",
      time: "",
      interval: null,
      isLogin: false,
      navList: [],
      code_show: parseInt(localStorage.is_code_show),
      className1: "orange",
      className2: "yellow",
      className3: "white",
      className4: "white",
      className5: "red",
      className6: "white",
      pathName: "home",
      lantern: "",
      hasRotate: true
    };
  },

  methods: {
    /**
     * 收藏本站
     * @param title
     */
    addFavorite(title) {
      var url = "http://" + location.hostname + "/";
      try {
        window.external.addFavorite(url, title);
      } catch (e) {
        try {
          window.sidebar.addPanel(title, url, "");
        } catch (e) {
          alert(
            "抱歉，您所使用的浏览器无法完成此操作。\n加入收藏失败，电脑请使用Ctrl+D进行添加"
          );
        }
      }
    },
    goLink() {},
    ee(num) {
      if (num < 10) {
        num = "0" + num;
      }
      return num;
    },
    we(num) {
      switch (num) {
        case 1:
          num = "一";
          break;
        case 2:
          num = "二";
          break;
        case 3:
          num = "三";
          break;
        case 4:
          num = "四";
          break;
        case 5:
          num = "五";
          break;
        case 6:
          num = "六";
          break;
        case 7:
          num = "七";
          break;
      }
      return num;
    },
    getTimes() {
      var that = this;
      let timestam = new Date().getTime();
      let time = timestam - 43200000;
      let dateObj = new Date(time),
        p0 = this.ee,
        Y = dateObj.getFullYear(),
        Mh = dateObj.getMonth() + 1,
        D = p0(dateObj.getDate()),
        X = this.we(dateObj.getDay()),
        H = p0(dateObj.getHours()),
        M = p0(dateObj.getMinutes()),
        S = p0(dateObj.getSeconds());

      if (Mh > 12) {
        Mh = "01";
      } else if (Mh < 10) {
        Mh = "0" + Mh;
      }
      let str = `${Y}/${Mh}/${D}/ (${X}) ${H}:${M}:${S}`;
      this.time = str;
    },
    goHome() {
      this.$router.push("/home");
    },
    goLink(item) {
      if (item.link) {
        if (item.link == "service") {
          let service = JSON.parse(localStorage.config).service;
          if (service) {
            let ser = service.find(item => item.status === "on");
            if (ser) {
              window.open(ser.url);
            }
          }
        } else if (item.link == "/plays/hall") {
          window.open("#/plays/hall");
          return false;
        }else {
          this.$router.push(item.link);
        }                               
      } else if (item.gameName) {
        this.trustLogin(item);
      }
    },
    thirdParty(item, platform) {
      if (item.link == "/plays/hall") {
        window.open("#/plays/hall");
        return false;
      }

      if (item.id) {
        this.getItemId(item);
      } else if (item.gameName) {
        this.trustLogin(item);
      } else if (item.num) {
        this.$router.push("/home/games?id=" + item.num);
      } else {
        this.$router.push(item.link);
      }
    },
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
    gotoLink(link) {
      this.$router.push(link);
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
          //   name: "clause"
          // });
          UserService.setCache(res, "v1", "login");
          window.location.href = '/'
        } else {
          alert(res.message);
          this.is_code_show();
        }
      });
    },
    logout() {
      UserService.logout.call(this);
    },
    reginer() {
      this.$router.push("/home/register/denglu");
    },
    async getlantern() {
      let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
        type: "lantern",
        desc_client_type: "html"
      });
      if (res && res.code == 200) {
        if (!res.data.data.length) return false;
        this.lantern = res.data.data[0] && res.data.data[0].description;
      }
      // 参数： type: lantern 走马灯
      // 参数： type: popups 弹窗
      // 参数： type: notice 提示
    },
    is_code_show() {
      getS(`is-show-captcha`).then(res => {
        if (res && res.code === 200) {
          this.code_show = res.data;
        }
      });
    },
    getBalance() {
      this.refreshS = true;
      getS(`/member/balance`).then(res => {
        if (res.code == 200) {
          let userinfo = JSON.parse(localStorage.userinfo);
          userinfo.balance = res.data.member;
          userinfo.agent = res.data.agency;
          this.$store.commit("mainState/reloadUserinfo", userinfo);
          this.refreshS = false;
          alert("刷新余额成功");
        } else {
          // alert("服务器报错");
        }
      });
    },
    goUserCen(name, num) {
      //name的类型有 ：  recharge （充值）  personage （个人资料）
      //withdraw （提现）  agency  （代理） message （消息）  discounts （优惠）
      if (!localStorage.token || !localStorage.userinfo) {
        alert("请先登录");
        return false;
      } else {
        this.$store.commit("showPersonal", {
          bool: true
        });
        this.$store.commit("showContent", {
          parent: name
        });
        this.$store.commit("showNav", {
          child: num
        });
      }
    },
    async tryPlay() {
      let res = await this.$http.get("/frontend/test/demo", {
        headers: { Accept: "application/x.tg.v2+json" },
        params: {}
      });
      if (res && res.code == 200) {
        UserService.setCache(res, "test");

        this.$http.post(`${this.$HOST_NAME}/member/refundInfo`).then(res => {
          let platform = res.data.platform;
          let alias = res.data.alias;
          let keys = Object.keys(platform);
          let refund = [];
          keys.forEach((v, i) => {
            refund[i] = {};
            refund[i].title = v;
            refund[i].list = [];
            platform[v].forEach((a, j) => {
              refund[i].list[j] = {};
              refund[i].list[j].key = Object.keys(a)[0];
              refund[i].list[j].refund = Object.values(a)[0];
              refund[i].list[j].name = alias[refund[i].list[j].key];
            });
          });

          // this.refundData = refund;
          localStorage.setItem("refund", JSON.stringify(refund));
        });
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    },
    goTo(item) {
      if (item.router == "/qipai") {
        this.trustLogin(item);
        return false;
      } else if (item.type == "lottery") {
        if (localStorage.token) {
          if (localStorage.Public_User == "test") {
            this.dNotify("彩票暂无试玩,立即注册", "error");
          } else {
            window.open(item.router);
            return false;
          }
        } else {
          this.dNotify("请先登录", "error");
        }
      }
      this.$router.push({
        path: item.router
      });
    },
    goto(item) {
      window.open(item.router);
      return false;
    },

    changeclass() {
      this.className1 == "orange"
        ? (this.className1 = "white")
        : (this.className1 = "orange");
      this.className2 == "yellow"
        ? (this.className2 = "red")
        : (this.className2 = "yellow");
      this.className3 == "white"
        ? (this.className3 = "yellow")
        : (this.className3 = "white");
      this.className4 == "white"
        ? (this.className4 = "cyan")
        : (this.className4 = "white");
      this.className5 == "red"
        ? (this.className5 = "white")
        : (this.className5 = "red");
      this.className6 == "white"
        ? (this.className6 = "green")
        : (this.className6 = "white");
    },
    getPath() {
      if (this.$route.path == "/home") {
        this.pathName = "home";
      } else if (this.$route.path == "/home/live") {
        this.pathName = "homeLive";
      } else if (this.$route.path == "/home/games") {
        this.pathName = "homeGames";
      } else if (this.$route.path == "/home/buyu") {
        this.pathName = "homeBuyu";
      } else if (this.$route.path == "/home/register") {
        this.pathName = "homeBuyu";
      } else if (this.$route.path == "/home/youhui") {
        this.pathName = "homeYouhui";
      } else {
        this.pathName = "homeHide";
      }
    }
  },
  computed: {
    userinfo() {
      return this.$store.state.mainState.userinfo;
    }
  },
  created() {
    this.is_code_show();
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState == "hidden") {
        if (!localStorage.userinfo) {
          let timer = setInterval(() => {
            if (localStorage.userinfo) {
              clearInterval(timer);
              window.location.reload();
            }
          }, 1000);
        }
      }
    });
  },
  watch: {
    $route: "getPath"
  },
  mounted() {
    this.getPath();
    let timer = setInterval(this.changeclass, 450);
    let time = setInterval(this.getTimes, 1000);
  },
  beforeDestroy() {},
  destroyed() {},
  store
};
</script>


