<template>
  <div class="w-header">
    <!-- 头部顶部 -->
    <div class="header-top">
      <div class="container-top">
        <div class="snavAll">
          Hi，欢迎来到500万彩票!
        </div>
        <!-- 登录前 -->
        <ul class="snavInfo" v-if="!userinfo">
          <router-link to="/home/login" tag="li">亲，请登录</router-link>
          <li class="fenge">|</li>
          <router-link to="/home/register" tag="li">注册帐号</router-link>
          <a class="ServiceBtn"  @click="openKefu"></a>
        </ul>

        <ul class="snavInfo" v-else>
          <li>欢迎您，{{userinfo.userName}}</li>
          <li>余额：
            <span v-if="balanceShow">{{userinfo&&userinfo.balance}}<span @click="balanceShow=false"
                                                                         style="padding-left: 8px;">隐藏</span></span>
            <span v-else>已隐藏<span @click="balanceShow=true" style="padding-left: 8px;">显示</span></span>
          </li>
          <li @click="goUserCen('recharge',0)">充值</li>
          <li @click="goUserCen('withdraw',0)">提现</li>
          <li @click="logout">退出</li>
          <a class="ServiceBtn" @click="openKefu"></a>
        </ul>

      </div>
    </div>

    <!-- 导航栏 -->
    <div class="nav">
      <div class="container">

        <!-- logo -->
        <h3>
          <!-- <router-link to="/home" class="router-link-exact-active curr">
            <img src="../../../../static/500w/img/home/logo.png">
          </router-link> -->
          <a href="javascript:void(0)" class="router-link-exact-active curr" @click="$router.push('/');">
            <img src="../../../../static/500w/img/home/logo.png">
          </a>
        </h3>

        <!-- 导航 -->
        <ul>
          <li>
            <!-- <router-link to="/home" :class="{curr:navCurr ==0}" @click.native="setNavCurr(0,"/home")">首页</router-link> -->
            <a href="javascript:void(0)" :class="{curr:navCurr ==0}" @click="setNavCurr(0,'/home')">首页</a>
          </li>
          <li>
            <a href="#/plays/hall" target="_blank">购彩大厅</a>
          </li>
          <li>
            <!-- <router-link to="/home/live" @click.native="setNavCurr(4)" :class="{curr:navCurr ==4}">真人视讯</router-link> -->
            <a href="javascript:void(0)" :class="{curr:navCurr ==4}" @click="setNavCurr(4,'/home/live')">真人视讯</a>
          </li>
          <li>
            <!-- <router-link to="/home/qipai" @click.native="setNavCurr(7)" :class="{curr:navCurr ==7}">棋牌游戏</router-link> -->
            <a href="javascript:void(0)" :class="{curr:navCurr ==7}" @click="setNavCurr(7,'/home/qipai')">棋牌游戏</a>
          </li>
          <li>
            <!-- <router-link to="/home/games?id=26&name=MG老虎机" @click.native="setNavCurr(5)" :class="{curr:navCurr ==5}">
              电子游艺
            </router-link> -->
            <a href="javascript:void(0)" :class="{curr:navCurr ==5}" @click="setNavCurr(5,'/home/games?id=10022&name=MG老虎机')">电子游艺</a>

          </li>
          <li>
            <!-- <router-link to="/home/buyu" @click.native="setNavCurr(6)" :class="{curr:navCurr ==6}">捕鱼游戏</router-link> -->
            <a href="javascript:void(0)" :class="{curr:navCurr ==6}" @click="setNavCurr(6,'/home/buyu')">捕鱼游戏</a>

          </li>
          <li class="sports">
            <a href="javascript:;">体育投注</a>
            <div class="menu-child1 sportsShow">
              <div class="gamelist-1 clear" style="background-image: none; background-color: rgba(0,0,0,0.8);">
                <div class="official_play">
                  <div class="high_wrap">
                    <div class="gamelist_r">
                      <div class="items">
                        <div class="item">
                          <div class="item-ico" @click="getItemId({id: '39',platform: 'sport'});">
                            <img src="/static/500w/img/hgty.png">
                            <p class="hot"><font>皇冠体育</font></p>
                          </div>
                        </div>
                        <div class="item">
                          <div class="item-ico" @click="getItemId({id: '38',platform: 'sport'});">
                            <img src="/static/500w/img/sbty.png">
                            <p class="hot"><font>沙巴体育</font></p>
                          </div>
                        </div>
                        <div class="item">
                          <div class="item-ico" @click="getItemId({id: '40',platform: 'sport'});">
                            <img src="/static/500w/img/bbin.png">
                            <p class="hot"><font>BB体育</font></p>
                          </div>
                        </div>
                        <div class="item">
                          <div class="item-ico" @click="getItemId({id: '41',platform: 'sport'});">
                            <img src="/static/500w/img/sbty.png">
                            <p class="hot"><font>AG体育</font></p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="triangles_back" style="left: 155px;"></div>
            </div>
          </li>
          <li>
            <!-- <router-link to="/home/youhui" :class="{curr:navCurr ==1}" @click.native="setNavCurr(1)">活动中心</router-link> -->
            <a href="javascript:void(0)" :class="{curr:navCurr ==1}" @click="setNavCurr(1,'/home/youhui')">活动中心</a>

            
          </li>
          <li>
            <router-link to="/home/moblie" @click="setNavCurr(2)" :class="{curr:navCurr ==2}"> 手机购彩</router-link>
          </li>
          <li v-show="false">
            <a @click="goUserCen('personage',0)">我的帐号</a>
          </li>
          <li v-show="false">
            <router-link to="/home/help" :class="{curr:navCurr ==3}" @click="setNavCurr(3)">帮助指南</router-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import UserService from '@/service/public/UserService.js'
  import store from '@/vuex/store'
  import data from '../../public/games/public.js'
  import {postS,getS} from '@/service/public/service.js'


  export default {
    mixins: [data],
    data () {
      return {
        // navCurr: 0
        balanceShow: false
      }
    },
    mounted () {},
    methods: {
      logout () {
        UserService.logout.call(this)
      },
      getBalance () {
        this.refreshS = true
        getS(`/member/balance`).then(res => {
          if (res.code == 200) {
            let userinfo = JSON.parse(localStorage.userinfo)
            userinfo.balance = res.data.member
            userinfo.agent=res.data.agency
            this.$store.commit('mainState/reloadUserinfo', userinfo)
            this.refreshS = false
            alert('刷新余额成功')
          } else {
            alert('服务器报错')
          }
        })
      },
      goUserCen (name, num) {
        if (!localStorage.userinfo) {
          this.$router.push('/home/login')
          return false
        }
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
      async tryPlay () {
        let res = await this.$http.post('/api/test/registerTest', {})
        if (res && res.code == 200) {
          UserService.setCache(res, 'test')

          this.$http.post(`${this.$HOST_NAME}/member/refundInfo`).then(res => {
            let platform = res.data.platform
            let alias = res.data.alias
            let keys = Object.keys(platform)
            let refund = []
            keys.forEach((v, i) => {
              refund[i] = {}
              refund[i].title = v
              refund[i].list = []
              platform[v].forEach((a, j) => {
                refund[i].list[j] = {}
                refund[i].list[j].key = Object.keys(a)[0]
                refund[i].list[j].refund = Object.values(a)[0]
                refund[i].list[j].name = alias[refund[i].list[j].key]
              })
            })

            // this.refundData = refund;
            localStorage.setItem('refund', JSON.stringify(refund))
          })
          setTimeout(() => {
            window.location.reload()
          }, 500)
        }
      },
      goTo (item) {
        if (item.router == '/qipai') {
          this.trustLogin(item)
          return false
        }else if(item.type =="lottery"){
        }
        this.$router.push({
          path: item.router
        })
      },
      thirdParty (item) {
        console.log(item)
        if (item.type) {
          if (item.name == '传统彩票') {
            window.open('#/plays/hall')
          } else {
            this.getItemId(item)
          }
        } else {
          this.getItemId(item)
        }
      },
      setNavCurr (num,link) {
        
        if (link) {
          console.log(link)
          if (link == "service") {
            let service = JSON.parse(localStorage.config).service;
            if (service) {
              let ser = service.find(item =>item.status === 'on')
              if (ser) {
                window.open(ser.url);
              }
            }
          } else if (link == "/plays/hall") {
              window.open("#/plays/hall");
              return false; 
          }else if(link=="/home/youhui"){
            console.log("youhui")
            this.$router.push(link);
          } else {
            this.$router.push(link);
          }
        }
        this.$store.commit('setCurr', num)
      },
      openKefu () {
        let service = JSON.parse(localStorage.config).service;
        if (service) {
          let ser = service.find(item => item.status === 'on')
          console.log(ser);
          if (ser) {
            window.open(ser.url);
          }
        }
      },
    },
    computed: {
      userinfo () {
        return this.$store.state.mainState.userinfo
      },
      navCurr () {
        return this.$store.state.wbw.curr
      }
    },

    created () {

    },
    store
  }
</script>

<style lang="less" scoped>
  .w-header {
    .clear:before, .clear:after {
      content: "";
      display: table;
    }

    .clear:after {
      clear: both;
    }

    .clear {
      *zoom: 1;
    }

    .sports {
      .sportsShow {
        display: none;
        width: 400px !important;
        left: -125px;
      }

      &:hover {
        .sportsShow {
          display: block;
        }
      }
    }

    .menu-child1 {
      position: absolute;
      top: 27px;
      width: 1000px;
      *min-height: 564px;
      margin: 0 5px;
      padding: 1px;
      z-index: 9999;
      border-radius: 0 0 8px 8px;
      zoom: 1;
      left: 62px;
      margin-top: 27px;
      padding-top: 5px;
      padding-bottom: 0;

      .triangles_back {
        width: 26px;
        height: 19px;
        position: absolute;
        background: url(/static/500w/img/triangles_back.png) no-repeat;
        left: 125px;
        top: -8px;
      }

      .gamelist-1 {
        padding-bottom: 5px;
        border-radius: 5px;

        .gamelist_r {
          margin-left: 0;
        }
      }

      .items {
        min-height: 62px;
        padding: 11px 0;
        cursor: pointer;

        .item {
          float: left;
          line-height: 28px;
          margin: 5px 0;
          height: 104px;
          width: 92px;
          position: relative;
          text-align: center;

          .item-ico {
            display: block;
            width: 80px;
            height: 76px;
            padding: 0 0 18px 0;
            margin: 0 auto;
            color: #222;
            text-align: center;
            background: url(/static/500w/img/game-icon-bg.png) no-repeat;
            overflow: hidden;

            img {
              width: 80%;
              height: 100%;
              margin: 10%;
            }
          }

          &:hover {
            background: url(/static/500w/img/Wbg_03.png) repeat;
          }

          &:first-child {
            margin-left: 14px;
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

      .official_play {
        display: inline-block;
        zoom: 1;
        font-size: 0;
        float: left;

        .high_wrap {
          height: auto;
          float: none;
        }
      }
    }

    .container-top {
      width: 1000px;
      margin: 0 auto;
    }

    .container {
      width: 1000px;
      margin: 0 auto;
    }

    .header-top {
      height: 30px;
      line-height: 30px;
      background: #f8f8f8;
      border-bottom: 1px solid #e8e8e8;

      .snavAll {
        float: left;
        padding-right: 20px;
        color: #666;
        font-size: 12px;
      }

      .snavInfo {
        float: right;
        height: 30px;

        li {
          display: inline-block;
          padding: 0 10px;
          cursor: pointer;
          color: #666;
          font-size: 12px;
        }

        .fenge {
          color: #ccc;
          font-size: 13px;
          padding: 0;
        }

        .ServiceBtn {
          background: url("/static/500w/img/home/service.gif");
          color: #e4393c !important;
          display: block;
          background-position: 0 -26px;
          height: 25px;
          float: right;
          width: 87px;
          position: relative;
          margin-left: 25px;
          margin-top: 2px;
        }
      }
    }

    .nav {
      background: #e4393c;
      height: 60px;

      h3 {
        float: left;
        padding: 0;
        margin: 0;
        margin-right: 10px;
        line-height: 0;

        img {
          margin-top: 6px;
        }
      }

      ul {
        float: right;

        li {
          float: left;
          text-align: center;
          width: 80px;
          line-height: 60px;
          position: relative;

          a {
            font-size: 15px;
            color: #fff;
          }

          .curr {
            color: #fedf50;
          }
        }

        li:hover {
          a {
            color: #fedf50;
          }
        }

        li::before {
          content: "";
          height: 1px;
          width: 62px;
          background: #ea5154;
          position: absolute;
          bottom: 30px;
          -webkit-transform: rotate(110deg);
          transform: rotate(110deg);
          z-index: 1;
          box-shadow: 1px 1px 0 #d63234;
          left: -32px;
        }
      }
    }
  }
</style>
