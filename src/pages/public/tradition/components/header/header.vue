<template>
  <article>
    <div class="header-content">
      <div class="header-menu-left">
        <router-link to="/">
          <img class="logo" :src="lotHeadDatas.logoUrl" alt="">
        </router-link>
        <div class="header-content-wrap">
          <label class="text name">
            <span v-if="userinfo">帐号:</span><label v-if="userinfo">{{userinfo&&userinfo.userName}}</label>
            <!-- <label v-if="!userinfo">游客</label> -->
          </label>
          <label class="text balance" v-if="userinfo">
            可用余额：
            <label class="hide">{{userinfo&&userinfo.balance||'0.00'}}</label>
            <!-- <label v-if="!ifShowBalan" class="hide">已隐藏</label> -->
          </label>
          <!-- <label v-if="!ifShowBalan" class="text show" @click="showBal">
                      <a>显示</a>
                  </label> -->
          <!-- <label v-if="ifShowBalan" class="text show" @click="ifShowBalan=false">
                      <a>隐藏</a>
                  </label> -->
          <label v-if="userinfo" @click="goUserCen('recharge',0)" class="text recharge">
            <!-- <router-link tag="a" to="">充值</router-link> -->
            <a href="javascript:void(0)">充值</a>
          </label>
          <label v-if="userinfo" class="line">|</label>
          <label v-if="userinfo" @click="goUserCen('withdraw',0)" class="text withdrawals">
            <!-- <router-link tag="a" to="">提现</router-link> -->
            <a href="javascript:void(0)">提现</a>

          </label>
          <label v-if="userinfo" class="line">|</label>
          <label v-if="userinfo" @click="goUserCen('personage',0)" class="text withdrawals">
            <!-- <router-link tag="a" to="">个人中心</router-link> -->
            <a href="javascript:void(0)">个人中心</a>
          </label>
          <label v-if="userinfo" class="line">|</label>
          <label v-if="userinfo" @click="goUserCen('personage',1)" class="text record ">
            <!-- <router-link tag="a" to="">投注记录</router-link> -->
            <a href="javascript:void(0)">投注记录</a>
          </label>
          <label v-if="userinfo" class="line">|</label>
          <label class="text exit" v-if="userinfo" @click="logout">
            <a>退出</a>
          </label>
          <label class="text exit" v-if="!userinfo" @click="login">
            <a> 登录</a>
          </label>
          <label class="text exit" v-if="!userinfo" @click="register">
            <a> 注册</a>
          </label>
          <label class="text exit" v-if="!userinfo &&!showWebsiteName" @click="tryPlay">
            <a> 免费试玩</a>
          </label>
        </div>
      </div>

      <div class="header-menu-right">
        <span class="text textRight  hot">
          <i class="iconfont icon-hot"></i>
          <router-link tag="a" :to="{path:'/plays/hall',query:{}}">热门彩种</router-link>
        </span>
        <span class="line">|</span>
        <span class="text textRight trend">
          <i class="orange  iconfont icon-curve"></i>
          <router-link tag="a" :to="{path:'/trend/'+routeUrl+'',query:{}}">开奖走势</router-link>
        </span>
        <span class="line">|</span>
        <span class="text textRight rule">
          <i class="orange iconfont icon-rule"></i>
          <a @click="newRulePage">玩法规则</a>
        </span>
        <span class="line">|</span>
        <span class="text textRight phoneApp" @click="goDownLoad">
          <i class="iconfont icon-CombinedShapex"></i>
          <i class="iconfont icon-apple"></i>
          <router-link tag="a" to="">手机APP下载</router-link>
        </span>
      </div>
      <!-- 分为封盘、报错、恭喜 -->
      <!-- tipDatas.bool -->
      <Modal :scrollable=true title="提示信息" v-model="tipDatas.bool" class-name="vp-all-tipModel-wrap" width="450">
        <div class="tipModel-box">
          <span>
            <i v-if="tipDatas.model=='warn'" class="iconfont icon-baojing"></i>
            <i v-if="tipDatas.model=='error'" class="iconfont icon-cuowu"></i>
            <i v-if="tipDatas.model=='success'" class="iconfont icon-chenggong"></i>
          </span>

          <span>{{tipDatas.title}}</span>

        </div>
      </Modal>
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
          <div class="my-register">{{$store.state.alert.login.chooseModel}}</div>
          <vp-admin-index></vp-admin-index>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
  import UserService from '@/service/public/UserService.js'
  import vpAdminIndex from '../admin'
  import store from '@/vuex/store'

  export default {
    props: {
      lotHeadDatas: {
        type: Object
      }
    },
    data () {
      return {
        ifShowBalan: false,
        routeUrl:"12",
        showWebsiteName:null
      }
    },
    methods: {
      newRulePage () {
        window.open('#/rules/ssc?id=4')
      },
      picUrl(){
        let UrlId = this.$route.meta.id;
        if( UrlId && isNaN(UrlId)===false){
          this.routeUrl = UrlId
        }else{
          this.routeUrl = '12'
        }
      },
      // 显示余额
      showBal () {
        if (!sessionStorage.token) {
          this.showLogin()
          return false
        }
        if (this.userinfo) {
          UserService.vpGetBasicInfo.call(this)
        }
        this.ifShowBalan = true
      },
      //注册
       register () {
         this.$store.commit('alert/showLogin', true)
         this.$store.commit('alert/setChooseModel', '注册帐号')
         this.$store.commit('alert/setLoginTitle', '注册帐号')
      },
       login () {
         this.$store.commit('alert/showLogin', true)
         this.$store.commit('alert/setChooseModel', '登入帐号')
         this.$store.commit('alert/setLoginTitle', '登入帐号')
      },
      // 历史记录
      history () {
        if (!sessionStorage.token) {
          this.showLogin()
          return false
        }
      },
      logout () {
        UserService.logout.call(this)
        if(this.$route.path.include('rules/lhc')){
          this.$route.push('rules/ssc?id=4')
        }else{
          this.$router.push('/plays/hall')
        }
      },
      // 打开个人中心
      goUserCen (name, num) {

        //name的类型有 ：  recharge （充值）  personage （个人资料）
        //withdraw （提现）  agency  （代理） message （消息）  discounts （优惠）
        this.$store.commit('showPersonal', {bool: true})
        this.$store.commit('showContent', {parent: name})
        this.$store.commit('showNav', {child: num})
      },
      goDownLoad () {
        window.open(this.lotHeadDatas.downLoadurl)
      },
      async tryPlay () {
        let res = await this.$http.get("/frontend/test/demo", { headers: { 'Accept': 'application/x.tg.v2+json' },params:{}});
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
      }
    },
    watch: {
      "$route.fullPath":function(newVal,oldVal){
        if(newVal){
          this.picUrl()
        }
      }
    },
    created: function () {
    },
    mounted(){
      this.$store.commit("mainState/getDownLoad",this.lotHeadDatas);
      let websiteName= this.$websiteName;
      if(websiteName=='jhcp' || websiteName =='fczx' ||websiteName =='t500w'||websiteName =="cjw"||websiteName =="jlcp" ||websiteName =="jltx"){
        this.showWebsiteName = true
      }
    },
    components: {
      vpAdminIndex
    },
    computed: {
      // 个人信息刷新
      userinfo () {
        return this.$store.state.mainState.userinfo
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
    store
  }
</script>

<style lang="less" scoped>
  @import "../../../../../assets/less/public/var.less";

  .vp-login-warp {
    /deep/ .ivu-modal-wrap {
      // top: 50%;
      // -webkit-transform: translateY(-60%);
      // -moz-transform: translateY(-60%);
      // -o-transform: translateY(-60%);
      // -ms-transform: translateY(-60%);
      // transform: translateY(-60%);
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

  article {
    position: relative;
    width: 100%;
    height: @header-height;
    font-size: 0;
    background-color: #fff;
    border-bottom: 1px solid #ecebeb;

    .header-content {
      width: @base-width;
      height: 100%;
      margin: 0 auto;
      font-size: 16px;
      color: #696969;
      line-height: 80px;
      background: #fff;
      overflow: hidden;
      display: flex;
      justify-content: space-between;

      .header-menu-left {
        display: flex;
        justify-content: space-between;
        float: left;

        .logo {
          width: 175px;
          margin-top: 13px;
        }

        .header-content-wrap {
          margin-left: 33px;
          float: left;

          .show {
            padding: 0 10px;
          }

          .hide {
            color: #ff0000;
          }

          .balance {
            padding: 0 8px;
          }
        }
      }

      .header-menu-right {
        float: right;

        .textRight {
          cursor: pointer;
        }
      }

      i {
        color: #ff5050;
      }

      .line {
        padding: 0 2px;
        color: #bababa;
      }

      .show,
      .recharge,
      .withdrawals,
      .vpCenter,
      .record,
      .exit {
        cursor: pointer;
      }
    }

    a {
      color: #696969;

      &:hover {
        color: #ff6600;
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
