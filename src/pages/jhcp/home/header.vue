<template>
  <div class="w-header">
    <!-- 头部顶部 -->
    <div class="header-top">
      <div class="container-top">
        <div class="snavAll">
          Hi，欢迎来到<span style="color:rgb(220, 59, 64);text-indent:2px;">9号彩票!</span>
        </div>


        <!-- 登录前 -->
        <ul class="snavInfo" v-if="!userinfo">
          <li @click="login" >亲，请登录</li>
          <li class="fenge">|</li>
          <li @click="register" >注册帐号</li>
          <a class="ServiceBtn"  @click="openKefu"></a>
        </ul>

        <ul class="snavInfo" v-else>
          <li>欢迎您，{{userinfo.userName}}</li>
          <li class="mycount" style="position:relative;">
             <a href="javascript:void(0)" class="mycountA">我的帐号 <span class="mycountRot"><i class="iconfont h5-icon-next mycountJt"></i></span></a>
             <div class="upSj"></div>
             <ul class="mycountLi">
               <li @click="goUserCen('personage',1)">投注记录</li>
               <li @click="goUserCen('personage',3)">交易记录</li>
               <li @click="goUserCen('personage',0)">个人信息</li>
               <li @click="goUserCen('personage',7)">安全中心</li>
               <li v-if="userinfo.is_agency" @click="goUserCen('agency',1)">代理中心</li>
             </ul>
          </li>

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
          <router-link to="/home" class="router-link-exact-active curr">
            <img src="/static/jhcp/img/home/logo1.png">
          </router-link>
        </h3>

        <!-- 导航 -->
        <ul>
          <li v-for="(item,i) in navDate" :key="i" :class="{'navActive':decodeURI($route.fullPath)==item.link}">
            <a @click="goLink(item.link)" :class="item.class">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>

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
  import UserService from '@/service/public/UserService.js'
  import store from '@/vuex/store'
  import data from '../../public/games/public.js'
  import {postS,getS} from '@/service/public/service.js'
  import vpAdminIndex from '../../public/tradition/components/admin'


  export default {
    mixins: [data],
    data () {
      return {
        // navCurr: 0
        navDate:[
          {name:'首页',class:'home',link:'/home'},
          {name:'购彩大厅',class:'lottery',link:'/home/caipiao/88'},
          {name:'棋牌游戏',class:'ky_chess',link:'/home/qipai'},
          {name:'活动中心',class:'acttvtty',link:'/home/youhui'},
          {name:'手机购彩',class:'mobile',link:'/home/moblie'},
          {name:'帮助指南',class:'help',link:'/home/help'}
        ],
        allList: [],
        balanceShow: false
      }
    },
    mounted () {
      this.allList = JSON.parse(localStorage.getItem("lottery"));
    },
    methods: {
      logout () {
        UserService.logout.call(this)
      },
      login(){
        this.$router.push('/home/login');
      },
      //注册
      register () {
         this.$store.commit('alert/showLogin', true)
         this.$store.commit('alert/setChooseModel', '注册帐号')
         this.$store.commit('alert/setLoginTitle', '注册帐号')
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
          this.$router.push('/home/login');
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
      goLink(link){
        if(link=="/home" || link=="/home/caipiao/88"|| link=="/home/qipai"){
          this.$router.push({
            path: link
          })
        }else{
          this.$router.push({
            path: link
          })
        }
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
      navCurr () {
        return this.$store.state.wbw.curr;
      },
       // 个人信息刷新
      userinfo () {
        return this.$store.state.mainState.userinfo;
      },
      // 是否提示信息
      tipDatas () {
        return this.$store.state.alert.tipModel;
      },
      // 是否显示登录
      ifLogin () {
        return this.$store.state.alert.login.ifLogin;
      },
      // 登录注册标题切换
      modelTitle () {
        return this.$store.state.alert.login.modelTitle;
      }
    },

    created () {
      if(localStorage.zhuce){
        if(!localStorage.token){
          this.register();
          localStorage.removeItem("zhuce");
        }
      }

    },
    components: {
      vpAdminIndex
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
        background: url(/static/jhcp/img/triangles_back.png) no-repeat;
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
            background: url(/static/jhcp/img/game-icon-bg.png) no-repeat;
            overflow: hidden;

            img {
              width: 80%;
              height: 100%;
              margin: 10%;
            }
          }

          &:hover {
            background: url(/static/jhcp/img/Wbg_03.png) repeat;
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
        .mycount{
          position:relative;
          .mycountRot{
            display:none;
            // transform:rotate(90deg);
            .mycountJt{
              font-size:12px;
            }
          }
          .mycountA{
            color:#666;
            &:hover{
              color:red;
              text-decoration: underline;
            }
          }
          .upSj{
              display:none;
              margin-top:-8px;
              margin-left:13px;
              width:0;
              height:0;
              border-width:0 10px 10px;
              border-style:solid;
              padding:0;
              border-color:transparent transparent #fff;
            }
          ul{
            display:none;
            position:absolute;
            z-index: 10;
            left:-16px;
            top:30px;
            width:100px;
            text-align: center;
            background-color: #fff;
            color:#fff;
            overflow:hidden;
            li{
              width:100%;
              line-height: 30px;
              height:30px;
              color:#666;
              &:hover{
                color:red;
              }
            }

          }
          &:hover{
            ul{
              display:block;
            }
            .upSj{
              display:block;
            }
            .mycountRot{
              display:inline-block;
              transform:rotate(90deg);
            }
          }
        }



        .fenge {
          color: #ccc;
          font-size: 13px;
          padding: 0;
        }

        .ServiceBtn {
          background: url("/static/jhcp/img/home/service.gif");
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
      height: 72px;

      h3 {
        float: left;
        padding: 0;
        margin: 0;
        margin-right: 10px;
        line-height: 0;

        img {
          width:200px;
          height:50px;
          margin-top: 12px;
          background-size: 100%;
        }
      }

      ul {
        float: right;
        margin-top: 0;
        padding-top: 20px;

        li {
          float: left;
          width: 120px;
          position: relative;
          height: 32px;
          border-left: 1px solid #e74d50;
          box-shadow: -1px 0 0 #dd383a;
          overflow: hidden;

          a {
            line-height: 18px;
            position: relative;
            display: block;
            font-size: 16px;
            color: #fff;
            padding: 0 20px;
            text-align: center;
          }

          a:after{
            position: absolute;
            font-size: 14px;
            line-height: 10px;
            width: 100%;
            text-align: center;
            left: 0;
            top: 0;
            opacity: .5;
            font-family: SimSun;
            margin-top: 22px;
          }

          .home:after{
            content: 'HOME';
          }
          .lottery:after{
            content: 'LOTTERY';
          }
          .acttvtty:after{
            content: 'ACTIVITY';
          }
          .ky_chess:after{
            content:'CHESS'
          }
          .mobile:after{
            content: 'MOBILE';
          }
          .help:after{
            content: 'HELP';
          }

          .curr {
            color: #fedf50;
          }
        }
        .navActive{
          color:#fedf50;
          a{
            color:#fedf50;
          }
        }

        li:hover {
          a {
            color: #fedf50;
          }
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
</style>
