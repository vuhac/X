<template>
  <div>

    <ul v-show="s1" class="TplFloatSet0 TplFloatSet TplFloatPic_1">
      <img src="/static/hsyl/img/banner/A.png" alt="">
      <a @click="goUserCen('recharge',1)" class="wechat" href="javascript:;"></a>
      <a @click="goUserCen('recharge',1)" class="zhifubao" href="javascript:;"></a>
      <a @click="goUserCen('recharge',1)" class="qq" href="javascript:;"></a>
      <a @click="goUserCen('recharge',1)" class="bank" href="javascript:;"></a>
      <a href="http://hs0505.com/" target="_blank" class="webs"></a>
      <a href="/static/hsyl/html/activity/active/opportunity/index.html" class="zhuanpan" target="_blank"></a>

      <a class="close" @click="s1=false" href="javascript:;"></a>
    </ul>
    <ul v-show="s2" class="TplFloatSet TplFloatPic_1">
      <img src="/static/hsyl/img/banner/B.png" alt="">
      <a class="btn_reg" @click="$store.commit('hsyl/showRegister', true)" href="javascript:;"></a>
      <a class="kefu" @click="kefuFc"></a>
      <a class="close" @click="s2=false" href="javascript:;"></a>
    </ul>

  </div>


</template>

<script>
  import store from '@/vuex/store'
  import $ from 'jquery'

  export default {
    data () {
      return {
        s1: true,
        s2: true
      }
    },
    methods: {
      addWindow () {
        window.addEventListener('scroll', this.scrollFunc)
      },
      scrollFunc (e) {
        $('.TplFloatPic_1').stop().animate({top: window.pageYOffset + 170}, 1000)
      },
      goUserCen (name, num) {
        //name的类型有 ：  recharge （充值）  personage （个人资料）
        //withdraw （提现）  agency  （代理） message （消息）  discounts （优惠）
        this.$store.commit('showPersonal', {bool: true})
        this.$store.commit('showContent', {parent: name})
        this.$store.commit('showNav', {child: num})
      },
      kefuFc () {
        let service = JSON.parse(localStorage.config).service;
        if (service) {
          let ser = service.find(item => item.status === 'on')
          if (ser) {
            window.open(ser.url);
          }
        }
      }
    },
    mounted () {
      this.addWindow()

    },
    store
  }
</script>

<style lang="less" scoped>
  .TplFloatSet {
    position: absolute;
    // cursor: pointer;
    z-index: 1000;
    top: 170px;
    right: 5px;
    width: 132px;

    .close, .kefu, .btn_reg, .wechat, .zhifubao, .qq, .bank, .webs, .zhuanpan {
      padding: 15px 50px;
      position: absolute;
      bottom: 12px;
      left: 10px;
      // background: RED;
    }

    .kefu {
      bottom: 165px;
    }

    .btn_reg {
      bottom: 130px;
    }

    .wechat {
      bottom: 228px;
    }

    .zhifubao {
      bottom: 188px;
    }

    .qq {
      bottom: 148px;
    }

    .bank {
      bottom: 112px;
    }

    .webs {
      bottom: 80px;
    }

    .zhuanpan {
      bottom: 45px;
    }
  }

  .TplFloatSet0 {
    left: 18px;
  }
</style>
