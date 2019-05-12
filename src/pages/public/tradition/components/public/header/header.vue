<template>
  <article>
    <div class="header-content">
      <div class="header-menu-left">
        <router-link to="/" class="logo">
          <div class="header-logo">
            <!-- <div class="header-logo-pic">
                  <img src="../../assets/images/vp-logo.png" alt="">
            </div>
            <div class="header-logo-text">
                  <img src="../../assets/images/vp-caipiao.png" alt="">
                  <img src="../../assets/images/vp-www.png" alt="">
            </div> -->
          </div>
        </router-link>
        <div class="header-content-wrap">
          <label class="text name">
            您好，<label v-if="userinfo">{{userinfo&&userinfo.userName}}</label>
            <label v-if="!userinfo">游客</label>
          </label>
          <label class="text">
            可用余额：
            <label v-if="ifShowBalan" class="hide">{{userinfo&&userinfo.balance||'0.00'}}</label>
            <label v-if="!ifShowBalan" class="hide">已隐藏</label>
          </label>
          <label v-if="!ifShowBalan" class="text show" @click="showBal">
            <a>显示</a>
          </label>
          <label v-if="ifShowBalan" class="text show" @click="ifShowBalan=false">
            <a>隐藏</a>
          </label>
          <label class="text recharge" @click="vipCenter('/personal/paymoney')">
            <router-link tag="a" to="">充值</router-link>
          </label>
          <label class="line">|</label>
          <label class="text withdrawals" @click="vipCenter('/personal/getmoney')">
            <router-link tag="a" to="">提现</router-link>
          </label>
          <label class="line">|</label>
          <label class="text vpCenter" @click="vipCenter('/personal/personalIndex')">
            <router-link tag="a" to="">会员中心</router-link>
          </label>
          <label class="line">|</label>
          <label class="text record " @click="vipCenter('/personal/recordQuery')">
            <router-link tag="a" to="">投注记录</router-link>
          </label>
          <label class="line">|</label>
          <label class="text exit" v-if="userinfo" @click="exit">
            <a>退出</a>
          </label>
          <label class="text exit" v-if="!userinfo" @click="showLogin">
            <a> 登录</a>
          </label>
        </div>
      </div>

      <div class="header-menu-right">
                <span class="text textRight  hot">
                    <i class="iconfont icon-hot"></i>
                    <router-link tag="a" :to="{path:'/rules',query:{}}">热门彩种</router-link>
                </span>
        <span class="line">|</span>
        <span class="text textRight trend">
                    <i class="orange  iconfont icon-curve"></i>
                    <router-link tag="a" :to="{path:'/trend',query:{}}">开奖走势</router-link>
                </span>
        <span class="line">|</span>
        <span class="text textRight rule">
                    <i class="orange iconfont icon-rule"></i>
                     <router-link tag="a" :to="{path:'/rules/gameReport',query:{}}">玩法规则</router-link>
                </span>
        <span class="line">|</span>
        <span class="text textRight phoneApp">
                    <i class="iconfont icon-CombinedShapex"></i>
                    <i class="iconfont icon-apple"></i>
                    <router-link tag="a" :to="{path:'/rules',query:{}}">手机APP下载</router-link>
                </span>
      </div>

      <Modal
        :title="modelTitle"
        v-model="ifLogin"
        class-name="vp-login-warp"
        width="790"
        :mask-closable="false"
        :closable="false"
      >
        <vp-admin-index></vp-admin-index>
      </Modal>
    </div>
  </article>
</template>
<script>
  // import vpAdminIndex from '../admin';
  import UserService from '@/service/public/UserService.js'
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        ifShowBalan: false
      }
    },
    methods: {
      // 退出
      exit () {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userinfo')
        // 重置个人信息
        this.$store.commit('mainState/resetUserinfo', null)
      },
      // 去登录
      showLogin () {
        this.$store.commit('alert/showLogin', true)
        this.$store.commit('alert/setLoginTitle', '用户登录')
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
      // 充值
      recharge () {
        if (!sessionStorage.token) {
          this.showLogin()
          return false
        }
      },
      //提现
      withdraw () {
        if (!sessionStorage.token) {
          this.showLogin()
          return false
        }
      },
      // 会员中心
      vipCenter (route) {
        if (!sessionStorage.token) {
          this.showLogin()
          return false
        } else {
          this.$router.push({
            path: route
          })
        }
      },
      // 历史记录
      history () {
        if (!sessionStorage.token) {
          this.showLogin()
          return false
        }
      }

    },
    watch: {
      // $route() {
      //     this.IsLogin = sessionStorage.loginToken && "true" || "false";
      //     this.UserLogo = sessionStorage.UserLogo || '';
      //     UserService.GetHeaderInfo.call(this);
      // }
    },
    created: function () {
      // 获取个人信息
      // UserService.vpGetBasicInfo.call(this);
      // 连接公共服务信息
      UserService.vpGetBasWebsoc.call(this)
    },
    mounted () {

    },
    components: {
      // vpAdminIndex
    },
    computed: {
      // 是否显示登录
      ifLogin () {
        return this.$store.state.alert.login.ifLogin
      },
      // 登录注册标题切换
      modelTitle () {
        return this.$store.state.alert.login.modelTitle
      },
      // 个人信息刷新
      userinfo () {
        return this.$store.state.mainState.userinfo
      }
    },
    store
  }
</script>

<style lang="less" scoped>
  @import '../../../../../../assets/less/public/var.less';

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
          display: inline-block;
          width: 148px;
          height: 80px;
          float: left;

          .header-logo {
            width: 148px;
            height: 60px;
            margin: 5px 0;
            background: url('../../../../../assets/images/userImg/logo.png') no-repeat 100% 100%;
            // position: relative;
            // line-height: 0;
            // &-pic{
            // position: absolute;
            // top: 12px;
            // }
            // &-text{
            //     position: absolute;
            //     left: 55px;
            //     top: 14px;
            // }
          }
        }

        .header-content-wrap {
          margin-left: 25px;
          float: left;

          .show {
            padding: 0 10px;
          }

          .hide {
            color: #FF0000;
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
        color: #FF5050;
      }

      .line {
        padding: 0 2px;
        color: #BABABA;
      }

      .show, .recharge, .withdrawals, .vpCenter, .record, .exit {
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
</style>
