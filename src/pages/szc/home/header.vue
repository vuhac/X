<template>
  <header>
    <div class="h-top">
      <div class="head-main">
        <!-- <ul class="anto-list">
          <li @click="addFavorite('澳博')">收藏本站</li>
        </ul> -->
        <div class="anto-right" v-if="!userinfo">
          <a class="header-input" style="width:56px;color:#fff" target="_blank" href="https://ab35.com">备用网址</a>
          <input type="text" autocomplete="off" class="header-input" placeholder="帐号" v-model="passKey.userName"  @blur="getCode">
          <input type="password" autocomplete="off" class="header-input" placeholder="密码" v-model="passKey.password">
          <div v-if="code_show" class="showCode">
              <input class="header-input w-100" size="mini" autocomplete="off" placeholder="验证码" maxlength="4" type="text" v-model="passKey.code"></input>
              <img class="auth-image" :src="codeImg" alt="" @click="getCode">
          </div>
          <span class="login" @click="login">登录</span>
          <span class="register" @click="register">注册</span>
          <!-- <span class="tryPlay" @click="tryPlay">试玩</span> -->
          <span class="line-kefu" @click="download">APP下载</span>
        </div>
        <div class="after-login" v-if="userinfo">
          <a class="information-after-logon" style="width:56px;color:#fff;padding-top:5px;font-weight:bold" target="_blank" href="https://ab35.com">备用网址</a>
          <div class="information-after-logon">
            <div class="head_preleft">
              <span class="color-ol" style="display:inline-block;margin-right:21px">欢迎您</span>
              <span style="cursor: pointer;" class="username">
                <span>帐号:&ensp;{{userinfo.userName}}</span>
              </span>
            </div>
            <span class="line-ml"></span>
            <div class="head_left">
              <span class="color-ol">余额(RMB):&ensp;</span>
              <span style="text-align: right; cursor: pointer;">
                {{userinfo&&userinfo.balance}}
              </span>
              <span class="iconfont icon-refresh refresh"></span>
            </div>
          </div>
          <span class="sign-out refresh" @click="getBalance">一键刷新</span>
          <span class="sign-out" @click="goUserCen('personage',0)">会员中心</span>
          <span class="sign-out" @click="goUserCen('message',0)">我的信息</span>
          <span class="sign-out" @click="logout">登出</span>
          <span class="sign-out kefu" @click="download">APP下载</span>
        </div>
      </div>
    </div>

    <div class="h-bottom">
      <div class="logo-nav">
        <div class="logo">
          <a href="javascript:void(0)" @click="$router.push('/');">
            <img src="/static/szc/img/home/logo.94869a1.png" alt="">
          </a>
        </div>
        <!-- <ul class="nav">
          <li
            class="pcdd"
            v-for="(navItem,navIndex) in navList"
            :key="navIndex"
            @click="goLink(navIndex,navItem)"
            :class="{'activNavTow':decodeURI($route.fullPath) == navItem.link }"
          >
            <span>{{navItem.name}}</span>
            <div class="limask" style="display: none;"></div>
            <ul class="listDown">
              <li
                v-for="(childItem,childIndex) in navItem.list"
                :key="childIndex"
                @click="thirdParty(childItem,navItem.platform)"
              >
                <span>{{childItem.name}}</span>
              </li>
            </ul>
          </li>
        </ul> -->
        <div class="nav-caidan">
        <ul>
          <li v-for="(item,i) in navlist1" class="nav" :class="{navActive:navActive ==i}" :key="i"
              @click.stop="toggleNav(i,item.link)">
            <span class="title">{{item.name}}</span>
            <span class="en">{{item.en}}</span>
            <div class="sub-nav clearfix" :class="'sub-nav-'+item.en" v-if="item.sub">
              <div class="sub" v-for="(subitem,i) in item.sub" :key="i" @click.stop="goThirdParty(subitem)">
                <i v-if="subitem.hot" class="hot"></i>
                <a href="javascript:;">
                  <img :src="subitem.icon" alt="">
                </a>
                <span>{{subitem.name}}</span>
              </div>
            </div>
          </li>
        </ul>


        <!-- <ul>
          <li v-for="(item,i) in navlist" class="nav" :class="{navActive:navActive ==i}" :key="i"
              @click.stop="toggleNav(i,item.link)">
            <span class="title">{{item.name}}</span>
            <span class="en">{{item.en}}</span>
            <div class="sub-nav clearfix" :class="'sub-nav-'+item.en" v-if="item.sub">
              <div class="sub" v-for="(subitem,i) in item.sub" :key="i" @click.stop="goThirdParty(subitem)">
                <i v-if="subitem.hot" class="hot"></i>
                <a href="javascript:;">
                  <img :src="subitem.icon" alt="">
                </a>
                <span>{{subitem.name}}</span>
              </div>
            </div>
          </li>
        </ul> -->

      </div>
      </div>
    </div>

  </header>
</template>

<script>
import UserService from "@/service/public/UserService.js";
import store from "@/vuex/store";
import { postS, getS } from "@/service/public/service.js";
import data from "../../public/games/public.js";
export default {
  mixins: [data],
  data() {
    return {
      passKey: {
        userName:"",
        password:"",
      },
      codeImg: "/static/szc/img/thirdparty/code.jpg",
      dengjiImg: "/static/szc/img/thirdparty/vip-sprites.png",
      left: 5,
      top: -193,
      showReload: false,
      code_show:parseInt(localStorage.is_code_show),
      navList: [
        {
          name: "首页",
          text: "HOME",
          link: "/home",
        },
        {
          name: "购彩大厅",
          text: "LOTTERY",
          platform: "vr_lottery",
          link: "/plays/hall",
        },
        {
          name: "棋牌游戏",
          text: "CHESS",
          platform: "KY_CHESS",
          hotShow: true,
          link: "/home/qipai?id=10042&name=开元棋牌",
          gameName: "0",
          // list: [
          //   {
          //     name: "开元棋牌",
          //     platform: "KY_CHESS",
          //     link: "/home/games?id=10042&name=开元棋牌"
          //   },
          //   {
          //     name: "VG棋牌",
          //     platform: "KY_CHESS",
          //     link: "/home/games?id=10041&name=VG棋牌"
          //   }
          // ]
        },
        {
          name: "真人视讯",
          text: "LIVE CASINO",
          link: "/home/live",
          platform: "live_casino",
          hotShow: true,
          // list: [
          //   {
          //     name: "AG视讯",
          //     img: "/static/szc/img/thirdparty/agty.png",
          //     id: "14"
          //   },
          //   {
          //     name: "BBIN视讯",
          //     img: "/static/szc/img/thirdparty/bb.png",
          //     id: "15"
          //   },
          //   {
          //     name: "BG视讯",
          //     img: "/static/szc/img/thirdparty/bg.png",
          //     id: "44"
          //   },
          //   {
          //     name: "DG视讯",
          //     img: "/static/szc/img/thirdparty/gpi.png",
          //     id: "33"
          //   },
          //   {
          //     name: "DS视讯",
          //     img: "/static/szc/img/thirdparty/DS.png",
          //     id: "16"
          //   },
          //   {
          //     name: "LEBO视讯",
          //     img: "/static/szc/img/thirdparty/lebo.png",
          //     id: "35"
          //   },
          //   {
          //     name: "OG视讯",
          //     img: "/static/szc/img/thirdparty/evo.png",
          //     id: "39"
          //   },
          //   {
          //     name: "eBET视讯",
          //     img: "/static/szc/img/thirdparty/ebet.png",
          //     id: "34"
          //   },
          //   {
          //     name: "LMG视讯",
          //     img: "/static/szc/img/thirdparty/LMG.png",
          //     id: "36"
          //   },
          //   {
          //     name: "欧博视讯",
          //     img: "/static/szc/img/thirdparty/ab.png",
          //     id: "37"
          //   },
          //   {
          //     name: "SA视讯",
          //     img: "/static/szc/img/thirdparty/sa.png",
          //     id: "40"
          //   }
          // ]
        },
        {
          name: "捕鱼达人",
          text: "FISH",
          link: "/home/buyu",
        },
        {
          name: "电子游艺",
          text: "ELECT RONIC",
          link: "/home/games?id=10024",
          platform: "MG_GAME",
          hotShow: true,
          // list: [
          //   {
          //     name: "PT老虎机",
          //     img: "/static/szc/img/thirdparty/pt.png",
          //     num: "19"
          //   },
          //   {
          //     name: "AG老虎机",
          //     img: "/static/szc/img/thirdparty/agty.png",
          //     num: "17"
          //   },
          //   {
          //     name: "CQ9电子",
          //     img: "/static/szc/img/thirdparty/CQ9.png",
          //     num: "32"
          //   },
          //   {
          //     name: "MG老虎机",
          //     img: "/static/szc/img/thirdparty/mg.png",
          //     num: "26"
          //   },
          //   {
          //     name: "FG老虎机",
          //     img: "/static/szc/img/thirdparty/fg.png",
          //     num: "31"
          //   }
          // ]
        },
        {
          name: "体育赛事",
          text: "SPORTS",
          platform: "sport",
          link: "/home/tiyu",
          // list: [
          //   {
          //     name: "皇冠体育",
          //     img: "/static/szc/img/thirdparty/hg.png",
          //     id: "21"
          //   },
          //   {
          //     name: "沙巴体育",
          //     img: "/static/szc/img/thirdparty/saba.png",
          //     id: "20"
          //   },
          //   {
          //     name: "BBIN体育",
          //     img: "/static/szc/img/thirdparty/bb.png",
          //     id: "41"
          //   },
          //   {
          //     name: "AG体育",
          //     img: "/static/szc/img/thirdparty/agty.png",
          //     id: "22"
          //   }
          // ]
        },

        {
          name: "优惠活动",
          text: "PROMOTION",
          link: "/home/youhui",
        },

        {
          name: "在线客服",
          text: "service",
          link: "service",
        }
      ],
      navlist1: [
          {
            name: '网站首页',
            link: '/home',
            en: 'HOME'
          },
          {
            name: '购彩大厅',
            link: '/plays/hall',
            en: 'LOTTERY',
            sub: [
              {
                name: '快速赛车',
                icon: '/static/public/image/lottery/nico/png/12.png',
                path: '/plays/tradition/12',
                hot: true
              },
              {
                name: '三分赛车',
                icon: '/static/public/image/lottery/nico/png/13.png',
                path: '/plays/tradition/13',
                hot: true
              },
               {
                name: '幸运飞艇',
                icon: '/static/public/image/lottery/nico/png/3.png',
                path: '/plays/tradition/3',
                hot: true
              },
              {
                name: '北京赛车',
                icon: '/static/public/image/lottery/nico/png/2.png',
                path: '/plays/tradition/2'
              },
              {
                name: '快速时时彩',
                icon: '/static/public/image/lottery/nico/png/16.png',
                path: '/plays/tradition/16',
                hot: true
              },
              {
                name: '三分时时彩',
                icon: '/static/public/image/lottery/nico/png/17.png',
                path: '/plays/tradition/17',
                hot: true
              },
              {
                name: '重庆时时彩',
                icon: '/static/public/image/lottery/nico/png/4.png',
                path: '/plays/tradition/4'
              },

              {
                name: '快速六合彩',
                icon: '/static/public/image/lottery/nico/png/18.png',
                path: '/plays/tradition/18'
              },
              {
                name: '香港六合彩',
                icon: '/static/public/image/lottery/nico/png/1.png',
                path: '/plays/tradition/1',
                hot: true
              },
              {
                name: '广东快乐十分',
                icon: '/static/public/image/lottery/nico/png/5.png',
                path: '/plays/tradition/5'
              },
              {
                name: '幸运农场',
                icon: '/static/public/image/lottery/nico/png/6.png',
                path: '/plays/tradition/6',
                hot: true
              },
              {
                name: '广东11选5',
                icon: '/static/public/image/lottery/nico/png/7.png',
                path: '/plays/tradition/7'
              },
              {
                name: '排列3',
                icon: '/static/public/image/lottery/nico/png/28.png',
                path: '/plays/tradition/28',
                hot: true
              },
              {
                name: '上海时时乐',
                icon: '/static/public/image/lottery/nico/png/29.png',
                path: '/plays/tradition/29'
              },
              {
                name: '江苏快三',
                icon: '/static/public/image/lottery/nico/png/9.png',
                path: '/plays/tradition/9'
              }
            ]
          },
          {name: '棋牌游戏', link: '/home/qipai', en: 'CHESS'},
          {name: '真人视讯', link: '/home/live', en: 'CASINO'},
          {
            name: '体育赛事',
            link: '/home/tiyu',
            en: 'SPORT',
            sub: [
              {
                name: '皇冠体育',
                icon: '/static/szc/img/nav/hgty.png',
                path: '/home/tiyu',
                id: '39'
              },
              {
                name: '沙巴体育',
                icon: '/static/szc/img/nav/sbty.png',
                path: '/home/tiyu',
                id: '38'
              },
              {
                name: 'BBIN体育',
                icon: '/static/szc/img/nav/bbinty.png',
                path: '/home/tiyu',
                id: '41'
              },
              {
                name: 'AG体育',
                icon: '/static/szc/img/nav/agty.png',
                path: '/home/tiyu',
                id: '40'
              }
            ]
          },
          {name: '电子游艺', link: '/home/games?id=10015&name=AG老虎机&login=true', en: 'GAME'},

          {name: '捕鱼达人', link: '/home/buyu', en: 'FISHING'},
          {name: '优惠活动', link: '/home/youhui', en: 'ACTIVITY'},
          {name: '在线客服', link: 'kefu', en: 'SERVICE'}
        ],
    };
  },
  methods: {
    toggleNav (i, link) {
        if (link == 'kefu') {
          let service = JSON.parse(localStorage.config).service;
          if (service) {
            let ser = service.find(item => item.status === 'on')
            if (ser) {
              window.open(ser.url);
            }
          }
          return false
        }else if(link == '/plays/hall') {
          window.open('#/plays/hall')
          return false
        }else if(link == '/home/youhui'){
          this.$router.push(link)
        }else{
          this.$router.push(link)
        } 

        this.$store.commit('hsyl/setNav', i)

      },
    goThirdParty (item) {
        // 彩票跳转
        if (item.path.includes('/plays/tradition')) {
            if(localStorage.token){
                 if(localStorage.Public_User=='test' ){
                   this.dNotify("彩票暂无试玩,立即注册", "error")
               }else{
                  this.$router.push(item.path)
                  return false
               }
            }else{
                 this.dNotify("请先登录", 'error')
            }

        }
        // 第三方体育跳转
        if (item.id) {
          this.getItemId(item)
        }
      },
    goLink(index, item) {
      this.$store.commit("szc/showBanner",{src:item.publicImg,statu:item.statu})
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
        } else if (item.link == "/home/sport") {
          this.isShow = "/home/sport";
          return false;
        } else if(item.link == "/home/download") {
          window.open("/static/szc/html/download/index.html")
        }else if(item.link == "/home/qipai"){
          this.isShow = "/home/qipai";
          return false;
        }
        else {
          this.$router.push(item.link);
          this.isShow = "";
        }
      } else if (item.gameName) {
        this.trustLogin(item);
      }
    },
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
    // service(){
    //     let service = JSON.parse(localStorage.config).service;
    //     if (service) {
    //       let ser = service.find(item => item.status === 'on')
    //       if (ser) {
    //         window.open(ser.url);
    //       }
    //     }
    // },
    download(){
      window.open("/static/szc/html/download/index.html")
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
    logout() {
      UserService.logout.call(this);
    },
    getCode() {
      if (this.code_show == 0) {
        return;
      }
      if(!this.passKey.userName){
         return false
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
    login() {
      if (!this.validateAccountLogin(this.passKey.userName)) {
        alert("请输入6-20位数字或字母组成的帐号");
        return false;
      }
      if (!this.validateAccountLogin(this.passKey.password)) {
        alert("请输入6-20位数字或字母组成的密码");
        return false;
      }
      console.log(this.code_show)
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
      console.log(this.passKey)
      postS(`login`, this.passKey).then(res => {
        if (res.code == 200) {
          // this.$router.push({
          //   name: "home"
          // });
           window.location.href = '/'
          UserService.setCache(res, "v1", "login");
        } else {
          alert(res.message);
          this.is_code_show();
        }
      });
    },
    logout() {
      UserService.logout.call(this);
    },
    getBalance() {
      this.showReload = true;
      getS(`member/balance`).then(res => {
        if (res.code == 200) {
          alert('刷新成功')
          let userinfo = JSON.parse(localStorage.userinfo);
          userinfo.balance = res.data.member;
          userinfo.agent = res.data.agency;
          this.$store.commit("mainState/reloadUserinfo", userinfo);
          this.showReload = false;
        }
      });
    },
    // 打开个人中心
    goUserCen(name, num) {
      //name的类型有 ：  recharge （充值）  personage （个人资料）
      //withdraw （提现）  agency  （代理） message （消息）  discounts （优惠）
      this.$store.commit("showPersonal", {
        bool: true
      });
      this.$store.commit("showContent", {
        parent: name
      });
      this.$store.commit("showNav", {
        child: num
      });
    },
    async tryPlay() {
      // let res = await this.$http.post('/api/test/registerTest', {})
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
    forget() {
      alert("忘记帐号密码，请联系在线客服人员取回！");
    },
    is_code_show() {
      getS(`is-show-captcha`).then(res => {
        if (res && res.code === 200) {
          this.code_show = res.data;
        }
      });
    },
    register() {
      this.$store.commit("szc/showRegister", true);
    }
  },
  computed: {
    userinfo() {
      return this.$store.state.mainState.userinfo;
    },
    navActive () {
        return this.$store.state.hsyl.navActive
      }
  },
  mounted(){
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
    if (!this.userinfo) return false;
    switch (this.userinfo.levelId) {
      case 2:
        this.top = 1;
        break;
      case 3:
        this.top = -31;
        break;
      case 4:
        this.top = -64;
        break;
      case 5:
        this.top = -96;
        break;
    }
  },
  store
};
</script>

<style lang="less" scoped>
.h-top {
  width: 100%;
  height: 36px;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(205, 16, 20, 0.8)),
    to(#cd1014)
  );
  .head-main {
    width: 1360px;
    height: 36px;
    margin: 0 auto;
    .anto-list {
      float: left;
      border-left: 1px solid hsla(0, 0%, 100%, 0.1);
      li {
        float: left;
        width: 78px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        color: #fff;
        font-size: 12px;
        border-right: 1px solid hsla(0, 0%, 100%, 0.1);
        cursor: pointer;
      }
    }
    .anto-right {
      float: right;
      .header-input {
        float: left;
        height: 20px;
        padding: 4px 14px;
        line-height: 20px;
        border-radius: 15px;
        box-sizing: content-box;
        margin-right: 10px;
        border: none;
        font-size: 14px;
        outline: none;
        cursor: pointer;
        margin-top:4px;
        width: 120px;
      }
      .showCode{
        display: inline-block;
        float:left;
        .w-100{
          width: 70px;
        }
        img{
          float: left;
          margin-top:4px;
          height: 26px;
          width: 57px;
          margin-right: 10px;
        }
      }
      span {
        float: left;
        font-size: 14px;
        color: #fff;
        margin-right: 7px;
        border-radius: 30px;
        margin-top: 7px;
        padding: 4px 18px;
        font-weight: 550;
        cursor: pointer;

      }
      .login {
        background: -webkit-gradient(
          linear,
          left top,
          right top,
          from(#fe7673),
          to(#ff3d3d)
        );
      }
      .register {
        background: -webkit-gradient(
          linear,
          left top,
          right top,
          from(#fdaa78),
          to(#ff7826)
        );
      }
      .tryPlay {
        background: -webkit-gradient(
          linear,
          left top,
          right top,
          from(#f0c3a7),
          to(#ff7445)
        );
      }
      .line-kefu {
        border: 1px solid #fff;
        padding: 3px 18px;
      }
    }
    .after-login {
      span{
        font-weight: bold;
      }
      float: right;
      .information-after-logon {
        float: left;
        color: #fff;
        font-size: 12px;
        border-radius: 30px;
        line-height: 28px;
        position: relative;
        span {
          float: left;
          font-weight: bold;
        }
        .head_preleft {
          float: left;
          padding-right: 10px;
          box-sizing: border-box;
          padding-top: 5px;
          padding-left: 10px;
          position: relative;
          span {
            float: left;
          }
          .username {
            i {
              transition: transform 0.2s, -webkit-transform 0.2s;
            }
            [class^="el-icon-"] {
              font-family: element-icons !important;
              speak: none;
              font-style: normal;
              font-weight: 400;
              font-variant: normal;
              text-transform: none;
              line-height: 1;
              vertical-align: baseline;
              display: inline-block;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            .more-person-accounts {
              position: absolute;
              top: 33px;
              right: 0;
              width: 100%;
              background: rgba(70, 37, 37, 0.9);
              border-radius: 0 0 5px 5px;
              z-index: 334;
              height: 0;
              -webkit-transition: height 0.2s linear;
              transition: height 0.2s linear;
              overflow: hidden;
              li {
                float: left;
                width: 100%;
                height: 32px;
                border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
                line-height: 32px;
                font-size: 12px;
                text-align: center;
                color: hsla(0, 0%, 100%, 0.5);
              }
            }
          }
          .color-ol {
            color: #fff;
          }
          // &:hover {
          //   background: rgba(70, 37, 37, 0.9);
          // }
          &:hover .more-person-accounts {
            height: 192px;
          }
        }
        .line-ml {
          width: 1px;
          height: 10px;
          background: hsla(0, 0%, 100%, 0.2);
          margin-top: 14px;
        }
        .head_left {
          min-width:80px;
          float: left;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding: 5px 5px 0 10px;
          position: relative;
        }
      }
      .information-after-login:after {
        width: 1px;
        height: 10px;
        content: "";
        background: hsla(0, 0%, 100%, 0.2);
        display: block;
        position: absolute;
        right: 0;
        top: 14px;
      }
      .sign-out {
        box-sizing: border-box;
        float: left;
        font-size: 12px;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 30px;
        padding: 3px 15px;
        margin-top: 6px;
        height: 24px;
        line-height: 18px;
        margin-left: 4px;
        cursor: pointer;
        -webkit-transition: border-color 0.6s ease, color 0.6s ease;
        transition: border-color 0.6s ease, color 0.6s ease;
      }
      .sign-out:nth-child(4){
        border:0;
        padding-left:0;
      }
      .sign-out:nth-child(3){
        border:0
      }
      .refresh{
        border:0;
        display: inline-block;
        background:url(/static/szc/img/home/refesh.png) no-repeat 100% 100%;
      }
      .kefu{
        margin-left:10px;
        border:0;
        display: inline-block;
        background:url(/static/szc/img/home/kefu.png) no-repeat 100% 100%;
      }
    }
  }
}

.h-bottom {
  width: 100%;
  height: 60px;
  border-top: 1px solid hsla(0,0%,100%,.2);
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(205, 16, 20, 0.8)),
    to(#cd1014)
  );
  .logo-nav {
    width: 1360px;
    height: 60px;
    margin: 0 auto;
    .logo {
        float: left;
        a{
          display:inline-block;
          img{
            width: 200px;
            height: 45px;
            margin-top:7px;
            margin-left:-38px;
            cursor: pointer;
          }
        }
    }


    .nav-caidan {
        float: right;
        font-size: 16px;
        ul {
          li.nav {
            &.navActive, &:hover {
              background: url(/static/szc/img/nav/nav_active.png) no-repeat;
              background-size: 100% 100%;
              color: #fff;
            }
            &:hover .sub-nav {
              display: block;
              transform: translateX(-50%);
            }
            position: relative;
            float: left;
            width: 102px;
            height: 58px;
            cursor: pointer;
            text-align: center;
            color: #fff;
            font-size: 14px;
            span.title,
            span.en {
              width: 100%;
              display: inline-block;
              margin-top: 19px;
            }
            span.en {
              margin-top: 8px;
              font-size: 10px;
            }
            .sub-nav {
              z-index: 6;
              position: absolute;
              left: 47.5px;
              top: 58px;
              width: 578px;
              padding: 20px 34px;
              background-color: rgba(0, 0, 0, .8);
              border-radius: 5px;
              &.sub-nav-SPORT {
                width: 476px;
              }
              &::after {
                display: block;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 26px;
                height: 19px;
                background: url(/static/szc/img/triangles_back.png?e60836c752) no-repeat;
                top: -8px;
              }
              display: none;
              .sub {
                text-align: center;
                width: 92px;
                line-height: 15px;
                margin: 5px;
                height: 108px;
                float: left;
                position: relative;
                color: #fff;
                &:hover {
                  background: rgba(211, 211, 211, .8);
                  border-radius: 8px;
                }
                span {
                  font-size: 13px;
                }
                a {
                  display: inline-block;
                  width: 80px;
                  height: 80px;
                  margin: 5px auto;
                  background: #df4545;
                  border-radius: 10px;
                  img {
                    width: 72px;
                    height: 72px;
                    margin-top: 4px;
                  }
                }
                .hot {
                  position: absolute;
                  top: 0;
                  right: 0;
                  width: 21px;
                  height: 9px;
                  background-image: url('/static/szc/img/nav/hot.gif');
                }
              }
            }
          }
          .navActive {
            color: #b62929;
          }
        }
      }



    // .nav {
    //   position: relative;
    //   float: right;
    //   height: 60px;
    //   li {
    //     float: left;
    //     width: 121px;
    //     text-align: center;
    //     font-size: 16px;
    //     line-height: 60px;
    //     color: #fff;
    //     border-left: 1px solid hsla(0, 0%, 100%, 0.1);
    //     border-right: 1px solid hsla(0, 0%, 100%, 0.1);
    //     cursor: pointer;
    //     -webkit-transition: background-color 0.3s linear;
    //     transition: background-color 0.3s linear;
    //     height: 60px;
    //     position: relative;
    //     .limask {
    //       width: 100%;
    //       height: 100%;
    //       background: hsla(0, 0%, 100%, 0);
    //       position: relative;
    //       top: -60px;
    //       left: 0;
    //     }
    //     .listDown {
    //       position: absolute;
    //       height: 0;
    //       width: 121px;
    //       background: rgba(70, 37, 37, 0.95);
    //       top: 60px;
    //       z-index: 1;
    //       opacity: 0;
    //       -webkit-transition: opacity 0.3s ease-in;
    //       transition: opacity 0.3s ease-in;
    //       overflow: hidden;
    //       li {
    //         color: #fff;
    //         border-left: 1px solid hsla(0, 0%, 100%, 0.1);
    //         border-right: 1px solid hsla(0, 0%, 100%, 0.1);
    //         cursor: pointer;
    //         float: left;
    //         text-align: center;
    //         height: 42px;
    //         width: 121px;
    //         line-height: 42px;
    //         -webkit-transition: all 0.2s linear;
    //         transition: all 0.2s linear;
    //         opacity: 1;
    //         font-size: 14px;
    //         position: relative;
    //         overflow: hidden;
    //       }
    //     }
    //     &:hover:after {
    //       transform: scaleX(1);
    //     }
    //     &:hover {
    //       background: -webkit-gradient(
    //         linear,
    //         left top,
    //         right top,
    //         from(rgba(205, 16, 20, 0.8)),
    //         to(#cd1014)
    //       );
    //     }
    //     &:hover .listDown {
    //       z-index: 7;
    //       opacity: 1;
    //       height: auto;
    //       overflow: inherit;
    //     }
    //   }
    //   li:after {
    //     width: 100%;
    //     height: 3px;
    //     background-color: #fff;
    //     -webkit-transform: scaleX(0);
    //     -ms-transform: scaleX(0);
    //     transform: scaleX(0);
    //     position: absolute;
    //     left: 0;
    //     bottom: 0;
    //     content: "";
    //     -webkit-transition: -webkit-transform 0.3s;
    //     transition: -webkit-transform 0.3s;
    //     transition: transform 0.3s;
    //     transition: transform 0.3s, -webkit-transform 0.3s;
    //   }

    //   .activNavTow {
    //     background: -webkit-gradient(
    //       linear,
    //       left top,
    //       right top,
    //       from(rgba(205, 16, 20, 0.8)),
    //       to(#cd1014)
    //     );
    //   }
    //   .activNavTow::after {
    //     transform: scaleX(1);
    //   }
    // }
  }
}

// 兼容ie
.h-top,.h-bottom{
  background: rgba(205, 16, 20, 0.8);
  background: -moz-linear-gradient(linear, left top,right top, rgba(205, 16, 20, 0.8) 0%, #cd1014 100%);
  background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(205, 16, 20, 0.8)), color-stop(100%,#cd1014));
  background: -webkit-linear-gradient(linear, left top, right top,rgba(205, 16, 20, 0.8) 0%,#cd1014 100%);
  background: -o-linear-gradient(linear, left top, right top, rgba(205, 16, 20, 0.8) 0%,#cd1014 100%);
  background: -ms-linear-gradient(linear, left top, right top, rgba(205, 16, 20, 0.8) 0%,#cd1014 100%);
  background: linear-gradient(linear, left top, right top, rgba(205, 16, 20, 0.8) 0%,#cd1014 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(205, 16, 20, 0.8)', endColorstr='#cd1014',GradientType=0 );
}
:root .h-top,:root .h-bottom{filter:none;}
</style>
