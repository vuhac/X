<template>
    <div class="header-box">
      <div class="main clear">
        <div class="top_left">
          <div class="logo_icon clear animated flipInY">
            <div class="logo fleft">
              <a href="javascript:void(0)" @click="$router.push('/');"></a>
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
        <div class="bar-right">
          <div class="fright">
            <div class="top_bar">
              <!-- <a href="javascript:void(0);" class="join-btn">手机版</a>| -->

              <a href="javascript:void(0)" @click="setIndex" >设为首页</a> |
              <a target="_blank" href="javascript: void(0)" @click="addFavorite('E彩票')">加入收藏</a> |
              <a target="_blank" href="https://sjcp999.com/" >备用网址</a> |
              <!-- <span v-if="userinfo">|</span> -->
              <a
                @click="$router.push('/home/agent')"
                class="bar_mobile"
              >代理教程</a>|
              <a href="/static/sjcp/html/download/index.html"  class="bar_mobile" target="_blank">手机APP下载</a>
            </div>
            <div class="area-wrap">
              <div class="login-area log-after clear" v-if="userinfo">
                <div class="preson-info clear">
                  <span class="info acc-person">
                    <strong class="account_hidden">帐号:</strong>
                    <span class="value account_name">{{userinfo&&userinfo.userName}}</span>
                  </span>
                  <span class="info acc-balance">
                    <strong>余额:</strong>
                    <span class="value">{{userinfo&&userinfo.balance}}</span>
                    <div
                      class="luck-icon"
                      style="display:inline-block; margin-top: -9px; background-image: none;"
                    >
                      <span style="width:20px; display:block; padding-top:2px; float:none;">
                        <a
                          href="javascript:void(0)"
                          @click="getBalance()"
                          style="display: inline-block; width: 16px; height: 16px; margin-top: 0px; background: url('/static/sjcp/img/refresh.png')"
                        ></a>
                      </span>
                    </div>
                  </span>
                </div>
                <div class="acc-links">
                  <a
                    title="会员中心"
                    class="btn btn-navacc-member"
                    href="javascript:void(0);"
                    @click="goUserCen('personage',0)"
                  >会员中心</a>
                  <a
                    title="在线存款"
                    class="btn btn-navacc-deposit"
                    href="javascript:void(0);"
                    @click="goUserCen('recharge',0)"
                  >充值</a>
                  <a
                    title="在线取款"
                    class="btn btn-navacc-withdraw"
                    href="javascript:void(0);"
                    @click="goUserCen('withdraw',0)"
                  >提款</a>
                  <a title="退出" class="btn btn-login-out" href="javascript:void(0);" @click="logout">
                    <span>退出</span>
                  </a>
                </div>
              </div>
              <div class="login-from" v-else>
                <div class="login-area clear">
                  <!-- <div class="area-left"> -->
                    <span class="login-mane">
                      <input
                        class="input_tip"
                        id="userName"
                        type="text"
                        size="12"
                        v-model="passKey.userName"
                        title="请填写 6-20 位大小写英数字"
                        maxlength="20"
                        placeholder="帐号"
                        tabindex="1"
                        required
                      >
                    </span>
                     <span class="login-password">
                      <input
                        class="input_tip"
                        type="password"
                        v-model="passKey.password"
                        @keyup.13="login"
                        autocomplete="off"
                        size="13"
                        maxlength="20"
                        title="请填写 6-20 位大小写英数字"
                        placeholder="登录密码"
                        tabindex="2"
                        required
                      >
                    </span>

                    <a
                      title="忘记密码"
                      :href="$root.config.service[0]&&$root.config.service[0].url"
                      target="_blank"
                      class="btn-member"
                    >忘记密码</a>

                    <br/>

                    <label v-if="code_show">
                      <span class="login-code">
                        <input
                          type="text"
                          class="input_tip input_tip_45"
                          size="7"
                          maxlength="4"
                          title="( 点击此处产生新验证码 )"
                          v-model="passKey.code"
                          @keyup.13="login"
                          placeholder="验证码"
                          @focus="getCode"
                          style="width: 70px;"

                        >
                      </span>
                      <img
                        title="点击切换验证码"
                        width="52"
                        height="22"
                        :src="codeImg"
                        @click="getCode"
                        style="background-color:white;"
                        alt="验证码"
                      >
                    </label>


                    <a
                      title="登录"
                      href="javascript:void(0)"
                      @click="login"
                      class="btn-login"
                    >
                      <span>登录</span>
                    </a>

                  <!-- </div> -->
                  <!-- <div class="area-right"> -->
                       <div class="area-register" @click="$router.push('/home/register')">免费开户</div>
                       <div class="area-register" v-if="!userinfo" @click="tryPlay">立即试玩</div>
                  <!-- </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-box clear">
        <div class="nav  clear">
          <div class="nav-main clear">
            <div class="menu-box">
              <div class="menu" style="margin-left: -12px;">
                <ul class="clear">
                  <li v-for="(navItem,navIndex) in navList" :key="navIndex" :class="navItem.className" >
                      <a href="javascript:void(0);" :class="navItem.className"  @click="goLink(navItem,navItem.link)"  >
                        <i :class="['menu-icon',navItem.icon]"></i>
                        <div>{{navItem.name}}
                          <br>
                          <span style="font-size:9px;">{{navItem.text}}</span>
                        </div>
                      </a>

                      <div :class="['menu-child1',navItem.childName]"  v-if="navItem.childList">
                          <div class="gamelist-1 clear" style="background-image: none; background-color: rgba(0,0,0,0.6);">
                            <div class="official_play">
                               <div class="high_wrap">
                                 <div class="gamelist_r">
                                   <div class="items" style="width:490px">
                                       <div class="item" v-for="(navChildItem,navChildIndex) in navItem.childList" :key="navChildIndex" @click="thirdParty(navChildItem,navItem.link)">
                                          <img class="hot_tag" src="/static/sjcp/img/hot_icon/1.gif" v-if="navChildItem.hot">
                                          <div class="item-ico">
                                            <img :src="navChildItem.icon">
                                            <p class="hot">
                                              <font>{{navChildItem.name}}</font>
                                            </p>
                                          </div>
                                        </div>

                                   </div>
                                 </div>
                               </div>
                            </div>
                          </div>
                      </div>
                  </li>
                </ul>
              </div>
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
  import {postS,getS} from '@/service/public/service.js'
  export default {
    mixins: [data],
    data() {
      return {
        refreshS: false,
        code_show: parseInt(localStorage.is_code_show),
        passKey: {},
        navList:[
          {
            name:"网站首页",
            text:"HOMEPAGE",
            icon:"icon4",
            platform: "home",
            link:"/home"
          },
          {
            name:"购彩大厅",
            text:"LOTTERY",
            icon:"icon1",
            platform: "CT_LOTTERY",
            link:"/plays/hall",
            className:"officialLottery",
            childName:"officialLotteryShow",
            childList:[
              // {name:"快速时时彩",icon:"/static/sjcp/img/logo/ksssc.png",link:"/plays/tradition/16",hot:true},
              // {name:"三分时时彩",icon:"/static/sjcp/img/logo/sfssc.png",link:"/plays/tradition/17",hot:true},
              // {name:"重庆时时彩",icon:"/static/sjcp/img/logo/gf_a1.png",link:"/plays/tradition/4"},
              // {name:"快速赛车",icon:"/static/sjcp/img/logo/kssc.png",link:"/plays/tradition/12",hot:true},
              // {name:"三分赛车",icon:"/static/sjcp/img/logo/sfsc.png",link:"/plays/tradition/13",hot:true},
              // {name:"北京PK拾",icon:"/static/sjcp/img/logo/gf_a3.png",link:"/plays/tradition/2"},
              // {name:"幸运飞艇",icon:"/static/sjcp/img/logo/XYFT.png",link:"/plays/tradition/3"},
              // {name:"快速六合彩",icon:"/static/sjcp/img/logo/kslhc.png",link:"/plays/tradition/18",hot:true},
              // {name:"香港六合彩",icon:"/static/sjcp/img/logo/xy_a1.png",link:"/plays/tradition/1"},
              // {name:"广东快乐10分",icon:"/static/sjcp/img/logo/xy_a2.png",link:"/plays/tradition/5"},
              // {name:"幸运农场",icon:"/static/sjcp/img/logo/xync.png",link:"/plays/tradition/6"},
              // {name:"广东11选5",icon:"/static/sjcp/img/logo/GD11X5.png",link:"/plays/tradition/7"},
              // {name:"天津时时彩",icon:"/static/sjcp/img/logo/gf_a9.png",link:"/plays/tradition/15"},
              // {name:"上海时时乐",icon:"/static/sjcp/img/logo/xy_a11.png",link:"/plays/tradition/29"},
              // {name:"江苏快三",icon:"/static/sjcp/img/logo/gf_a6.png",link:"/plays/tradition/9"}


              {name:"快速时时彩",icon:"/static/public/image/lottery/nico/png/16.png",link:"/plays/tradition/16",hot:true},
              {name:"三分时时彩",icon:"/static/public/image/lottery/nico/png/17.png",link:"/plays/tradition/17",hot:true},
              {name:"重庆时时彩",icon:"/static/public/image/lottery/nico/png/4.png",link:"/plays/tradition/4"},
              {name:"快速赛车",icon:"/static/public/image/lottery/nico/png/12.png",link:"/plays/tradition/12",hot:true},
              {name:"三分赛车",icon:"/static/public/image/lottery/nico/png/13.png",link:"/plays/tradition/13",hot:true},
              {name:"北京PK拾",icon:"/static/public/image/lottery/nico/png/2.png",link:"/plays/tradition/2"},
              {name:"幸运飞艇",icon:"/static/public/image/lottery/nico/png/3.png",link:"/plays/tradition/3"},
              {name:"快速六合彩",icon:"/static/public/image/lottery/nico/png/18.png",link:"/plays/tradition/18",hot:true},
              {name:"香港六合彩",icon:"/static/public/image/lottery/nico/png/1.png",link:"/plays/tradition/1"},
              {name:"广东快乐10分",icon:"/static/public/image/lottery/nico/png/5.png",link:"/plays/tradition/5"},
              {name:"幸运农场",icon:"/static/public/image/lottery/nico/png/6.png",link:"/plays/tradition/6"},
              {name:"广东11选5",icon:"/static/public/image/lottery/nico/png/7.png",link:"/plays/tradition/7"},
              {name:"天津时时彩",icon:"/static/public/image/lottery/nico/png/15.png",link:"/plays/tradition/15"},
              {name:"上海时时乐",icon:"/static/public/image/lottery/nico/png/29.png",link:"/plays/tradition/29"},
              {name:"江苏快三",icon:"/static/public/image/lottery/nico/png/9.png",link:"/plays/tradition/9"}

            ]
          },
          {
            name:"六合彩",
            text:"LOTTO",
            icon:"icon2",
            platform: "vr_lottery",
            link:"/plays/tradition/1",
            className:"vrLottery",
            id:"30",
          },
          {
            name:"棋牌游戏",
            text:"CHESS",
            icon:"icon4",
            platform: "KY_CHESS",
            link:"/home/qipai?id=10022&name=开元棋牌"
          },
          {
            name:"电子游艺",
            text:"GAME",
            icon:"icon7",
            platform: "AG_GAME",
            link:"/home/games?id=10022&name=MG老虎机"
          },
          {
            name:"捕鱼游戏",
            text:"FISHING",
            icon:"icon7",
            link:"/home/buyu"
          },
          {
            name:"真人视讯",
            text:"CASINO",
            icon:"icon8",
            platform: "live_casino",
            link:"/home/live"
          },
          {
            name:"体育投注",
            text:"SPORTS",
            icon:"icon6",
            link:"/home/tiyu",
            platform: "sport",
            className:"sports",
            childName:"sportsShow",
            childList:[
              {name:"皇冠体育",icon:"/static/sjcp/img/logo/hgty.png",id:"39"},
              {name:"沙巴体育",icon:"/static/sjcp/img/logo/sbty.png",id:"38"},
              {name:"BBIN体育",icon:"/static/sjcp/img/logo/bbin.png",id:"41"},
              {name:"AG体育",icon:"/static/sjcp/img/logo/sbty.png",id:"40"}
            ]
          },
          {
            name:"优惠活动",
            text:"HOMEPAGE",
            icon:"icon3",
            link:"/home/youhui"
          },
          {
            name:"在线客服",
            text:"SERVICE",
            icon:"icon4",
            link:"service"
          },
        ],
        serviceUrl: null,
        codeImg: "/static/sjcp/img/yzm.png",
        time: this.getTimes(new Date()),
        interval: null,
        isLogin: false,
        code_show: parseInt(localStorage.is_code_show)
      };
    },
    mounted() {
      //this.interval = setInterval(estObjMD.dispTimeMD, 1000);
      setTimeout(() => {
        this.serviceUrl =
          this.$root.config.service[0] && this.$root.config.service[0].url;
      }, 200);
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
      // 设为首页
      setIndex() {
        var content =
          '<font size="2.5">抱歉，您所使用的浏览器无法完成此操作。您需要手动将【' +
          this.$root.currentDomain +
          '】设置为首页，<br>请参考<a style="color:#57a3f3;" href="http://www.baidu.com/cache/sethelp/index.html" target="_blank">如何设为首页</a></font>';
        this.$Modal.info({
          title: "设为首页提示",
          content: content
        });
      },
      getTimes() {
        var that = this;
        let estObjMD = {
          pre0: function(num) {
            if (num < 10) {
              num = "0" + num;
            }
            return num;
          },
          /* 美东時間顯示 */
          dispTimeMD: function() {
            let timestam = new Date().getTime();
            let time = timestam - 43200000;
            let dateObj = new Date(time),
              p0 = estObjMD.pre0,
              Y = dateObj.getFullYear(),
              Mh = dateObj.getMonth() + 1,
              D = p0(dateObj.getDate()),
              H = p0(dateObj.getHours()),
              M = p0(dateObj.getMinutes()),
              S = p0(dateObj.getSeconds());

            if (Mh > 12) {
              Mh = "01";
            } else if (Mh < 10) {
              Mh = "0" + Mh;
            }
            let str = `美东时间 - ${Y}/${Mh}/${D}/ ${H}:${M}:${S}`;
            that.$refs.time.innerHTML = str;
          }
        };
        return estObjMD;
      },
      goLink(item,path){
        console.log(path)
        if(path=='service'){
          let service = JSON.parse(localStorage.config).service;
          if (service) {
            let ser = service.find(item => item.status === 'on')
            if (ser) {
              window.open(ser.url);
            }
          }
          return false
        }else if(path == "/plays/hall") {
          window.open("#/plays/hall");
          return false;
        }else if(path == "/home/tiyu") {
          return false
        }else if(path == '/home/youhui'){
          this.$router.push(path)
        }else if(path == '/plays/tradition/1'){
           if (localStorage.token) {
              if (localStorage.Public_User == 'test') {
                this.dNotify("彩票暂无试玩,立即注册", "error")
              } else {
                window.open(`#${path}`)
                return false;
              }
            } else {
              this.dNotify("请先登录", 'error')
              return false
            }
        }else{
          this.$router.push(path)
        }
        if(item.id){
          this.getItemId({id: item.id,platform:item.platform});
          return false
        }
        this.$router.push({ path: path })
      },
      getCode() {
        if (this.code_show == 0) {
          return;
        }
        if (this.passKey.userName.length < 5) {
             alert("请输入6位帐号");
             this.passKey.userName = ''
             var oInput = document.getElementById('userName')
             oInput.focus()
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
      login() {
        if (!this.validateAccountLogin(this.passKey.userName)) {
          alert("请输入6-20位数字或字母组成的帐号");
          return false;
        }
        if (!this.validateAccount(this.passKey.password)) {
          alert("请输入6-20位数字或字母组成的密码");
          return false;
        }

        if(this.code_show){
          if (this.passKey.code == '') {
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
          if (res.code == 200) {
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
      logout() {
        UserService.logout.call(this);
      },
      is_code_show(){
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
            let userinfo = JSON.parse(localStorage.userinfo)
            userinfo.balance = res.data.member
            userinfo.agent=res.data.agency
            this.$store.commit("mainState/reloadUserinfo", userinfo);
            this.refreshS = false;
            alert("刷新余额成功");
          } else {
            alert("服务器报错");
          }
        });
      },
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
      // setIndex() {
      //   var content =
      //     '<font size="2.5">抱歉，您所使用的浏览器无法完成此操作。您需要手动将【' +
      //     this.$root.currentDomain +
      //     '】设置为首页，<br>请参考<a style="color:#57a3f3;" href="http://www.baidu.com/cache/sethelp/index.html" target="_blank">如何设为首页</a></font>';
      //   this.$Modal.info({
      //     title: "设为首页提示",
      //     content: content
      //   });
      // },
      // addCollect() {
      //   this.$Modal.info({
      //     title: "加入收藏提示",
      //     content:
      //       '<font size="2.5">抱歉，您所使用的浏览器无法完成此操作。<br>加入收藏失败，<br>电脑请使用Ctrl+D进行添加</font>'
      //   });
      // },
      async tryPlay() {
       let res = await this.$http.get("/frontend/test/demo", { headers: { 'Accept': 'application/x.tg.v2+json' },params:{}});
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

      thirdParty(item,platform) {
        if(item.link){
          if (item.link.includes('/plays/tradition')) {
            if (localStorage.token) {
              if (localStorage.Public_User == 'test') {
                this.dNotify("彩票暂无试玩,立即注册", "error")
              } else {
                window.open(`#${item.link}`)
                return false;
              }
            } else {
              this.dNotify("请先登录", 'error')
              return false
            }
          }
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
    beforeDestroy() {},
    destroyed() {
      clearInterval(this.inter);
    },
    store
  };
  </script>
  <style lang="less" spoced>



   .nav-box {
      .nav {
          z-index: 1009;
          height: 64px;
          background: #1d1c2f;
          border-top: 1px solid #854ca0;
          border-bottom: 1px solid #5a3e61;
        .nav-main {
          position: relative;
          width: 1004px;
          margin: 0 auto;
          .menu-box {
            position: relative;
            z-index: 1000;
            height: 55px;
            .sports {
              .sportsShow {
                display: none;
                width: 400px;
                left: 580px;
              }
              &:hover {
                .sportsShow {
                  display: block;
                }
              }
            }
            .vrLottery {
              .vrLotteryShow {
                display: none;
                width: 490px;
                left: 76px;
              }
              &:hover {
                .vrLotteryShow {
                  display: block;
                }
              }
            }
            .officialLottery {
              .officialLotteryShow {
                display: none;
                width: 490px;
                left: 10px;
              }
              &:hover {
                .officialLotteryShow {
                  display: block;
                }
              }
            }

            ul {
              background-image: none;
            }
            .menu ul li.active a, .menu ul > li a:hover {
              transform: scale(1.1);
              -webkit-transform: scale(1.1);
              -moz-transform: scale(1.1);
              -o-transform: scale(1.1);
              -ms-transform: scale(1.1);
            }
            .menu {
              ul {
                list-style: none;
                font-size: 0;
                white-space: nowrap;
                overflow: hidden;
                 li {
                  width: 144.6px !important;
                  height: 55px;
                  margin: 0;
                  float: left;
                  font-size: 14px;
                  letter-spacing: normal;
                  word-spacing: normal;
                  line-height: 20px;
                  vertical-align: middle;
                  padding-top: 8px;
                  padding-left: 25px !important;
                  &.active {
                    width: 92px;
                    height: 47px;
                    background: url(/static/sjcp/img/li_hover.png) no-repeat;
                    margin: 0;
                  }
                  &:hover {
                    width: 144.6px !important;
                    height: 55px;
                    background: url(/static/sjcp/img/li_hover.png) no-repeat;
                    color: #333333;
                    a, span {
                      color: #333333;
                      // text-shadow: 0 2px 2px rgba(255, 241, 195, 1);
                    }
                  }
                  a {
                    position: relative;
                    transition: all .3s ease;
                    -webkit-transition: all .3s ease;
                    -moz-transition: all .3s ease;
                    -o-transition: all .3s ease;
                    display: block;
                    width: 112px;
                    height: 51px;
                    line-height: 20px;
                    text-align: center;
                    text-shadow: 0 1px 2px #000;
                    color: #ffebad;
                    i{
                      position: absolute;
                      top: 6px;
                      display: block;
                      width: 30px;
                      height: 30px;
                      background: url(/static/sjcp/img/home/menu-icon.png) no-repeat;
                    }
                    .icon4{
                        background-position: 0 -90px;
                    }
                    .icon2{
                        background-position: 0 -30px;
                    }
                    .icon7{
                        background-position: 0 -150px;
                    }
                    .icon8{
                        background-position: 0 -235px;
                    }
                    .icon6{
                        background-position: 0 -192px;
                    }
                    .icon3{
                        background-position: 0 -60px;
                    }
                    .menu-icon {
                      left: 0px !important;
                    }
                  }
                }
              }
            }
            .menu-child1 {
              position: absolute;
              top: 26px;
              width: 1000px;
              *min-height: 564px;
              margin: 0 5px;
              padding: 1px;
              z-index: 9999;
              border-radius: 0 0 8px 8px;
              zoom: 1;
              box-shadow: 0 1px 30px #A9A9A9;
              left: 62px;
              margin-top: 27px;
              padding-top: 5px;
              padding-bottom: 0;
              .items {
                min-height: 62px;
                padding: 11px 0;
                width: 464px;
                cursor: pointer;
                .item {
                  float: left;
                  line-height: 28px;
                  margin: 5px 0;
                  height: 104px;
                  width: 92px;
                  position: relative;
                  text-align: center;
                  &:first-child {
                    margin-left: 14px;
                  }
                  &:nth-child(6) {
                    margin-left: 14px;
                  }
                  &:nth-child(11) {
                    margin-left: 14px;
                  }
                  &:hover {
                    background: url(/static/sjcp/img/Wbg_03.png) repeat;
                  }
                  .hot_tag {
                    top: 9px;
                    left: 69px;
                    position: absolute;
                    width: 20px;
                    height: 10px;
                  }
                  .item-ico {
                    display: block;
                    width: 80px;
                    height: 76px;
                    padding: 0 0 18px 0;
                    margin: 0 auto;
                    color: #222;
                    text-align: center;
                    background: url(/static/sjcp/img/game-icon-bg.png) no-repeat;
                    overflow: hidden;
                    img {
                      // width: 80%;
                      // height: 100%;
                      // margin: 10%;
                      width: 60px!important;
                      height: 60px!important;
                      border-radius: 50%;
                      margin-top: 8px!important;
                    }
                  }
                }
                p {
                  font-size: 12px;
                  display: block;
                  color: #fff;
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  width: 100%;
                  height: 28px;
                  line-height: 28px;
                  overflow: hidden;
                }
              }
              .gamelist-1 {
                background: url(/static/sjcp/img/bg_0909.png) repeat;
                padding-bottom: 20px;
                border-radius: 5px;
                .gamelist_r {
                  margin-left: 0;
                }
              }
              .triangles_back {
                width: 26px;
                height: 19px;
                position: absolute;
                background: url(/static/sjcp/img/triangles_back.png) no-repeat;
                left: 125px;
                top: -8px;
              }
            }
          }
        }
      }
    }
  </style>

