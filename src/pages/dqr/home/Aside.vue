<template>
  <div>
    <div v-show="show_mobile"  target="_blank"
       style="position: fixed; z-index: 1001; right: 5px; bottom: 0;">
      <span class="close_btn" @click="show_mobile=false"
            style="position: absolute;display: inline-block;width: 20px;height: 20px;right: 0;  z-index: 10001;"></span>
      <img src="/static/dqr/img/hc_zhuanpan.gif"  onclick="window.open('/static/dqr/html/active/opportunity/index.html')"  alt="幸运转盘">
    </div>
    <div v-show="show_hongbao"  target="_blank"
       style="position: fixed; z-index: 1001; left: 0; bottom: 0;">
      <span class="close_btn" @click="show_hongbao=false"
            style="position: absolute;display: inline-block;width: 20px;height: 20px;right: 0;  z-index: 10001;"></span>
      <img src="/static/dqr/img/redb.gif"  onclick="window.open('/static/dqr/html/active/czjhb/index.html')" alt="红包雨">
    </div>

    <ul v-show="s1" class="TplFloatSet0 TplFloatSet TplFloatPic_1" style="position: absolute;z-index: 1000;top:170px;transition:all ease .3s">
      <span class="kefuw-left-01"></span>
      <span class="kefuw-left-02">
        <a href="/static/dqr/html/active/jgj/index.html" target="_blank" class="mobdm"></a>
      </span>
      <span class="kefuw-left-03">
        <a href="/static/dqr/html/active/opportunity/index.html" target="_blank" class="mobdm"></a>
    </span>
      <a class="close" @click="s1=false" href="javascript:;"></a>
    </ul>
    <ul v-show="s2" class="TplFloatSet TplFloatPic_1" style="position: absolute;z-index: 1000;top:170px;transition:all ease .3s">
      <span class="kefuw-tit">
        <a class="mobdm" :href="serviceUrl" target="_blank" title="在线客服"></a>
      </span>
      <div class="twem" @click="gomessge"></div>
      <a class="close" @click="s2=false" href="javascript:;"></a>
    </ul>

  </div>

</template>

<script>
  import store from '@/vuex/store'
  // import $ from 'jquery'

  export default {
    data () {
      return {
        s1: true,
        s2: true,
        show_mobile: true,
        show_hongbao: true,
        serviceUrl: null,
      }
    },
    methods: {
      addWindow () {
        window.addEventListener('scroll', this.scrollFunc)
      },
      scrollFunc (e) {
        // $('.TplFloatPic_1')
        //   .stop()
        //   .animate({top: window.pageYOffset + 170}, 1000)
        var nodeitem = document.getElementsByClassName('TplFloatPic_1')[0]
        var nodeitem1 = document.getElementsByClassName('TplFloatPic_1')[1]
        window.onscroll = function(){
          var t = document.documentElement.scrollTop||document.body.scrollTop
          if(t>0){
            nodeitem.style.top = t + 170 + 'px'
            nodeitem1.style.top = t + 170 + 'px'

          }
        }



      },
      goUserCen (name, num) {
        //name的类型有 ：  recharge （充值）  personage （个人资料）
        //withdraw （提现）  agency  （代理） message （消息）  discounts （优惠）
        this.$store.commit('showPersonal', {bool: true})
        this.$store.commit('showContent', {parent: name})
        this.$store.commit('showNav', {child: num})
      },
      kefuFc () {
        let url = JSON.parse(localStorage.getItem('config')).service[0].url
        window.open(url)
      },
      gomessge(){
        if(localStorage.token){
            this.goUserCen('message',1)
        }else{
          alert("请先登录")
        }
      }
    },
    mounted () {
      this.addWindow()
      setTimeout(() => {
        this.serviceUrl = this.$root.config.service[0] && this.$root.config.service[0].url
      }, 200)
    },
    created () {

    },
    store
  }
</script>

<style lang="less" scoped>
  .TplFloatSet {
    width: 119px;
    height: 272px;
    // position: absolute;
    // top: 180px;
    right: 10px;
    background: url(/static/dqr/img/kefuw-right.png) no-repeat;
    z-index: 1000;

    .kefuw-tit {
      display: block;
      width: 100%;
      height: 190px;
      margin-bottom: 7px;

      a {
        &.mobdm {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }

    .twem {
      width: 102px;
      height: 35px;
      margin-bottom: 14px;
      cursor: pointer;
    }

    .close,
    .kefu,
    .btn_reg,
    .wechat,
    .zhifubao,
    .qq,
    .bank {
      padding: 15px 50px;
      position: absolute;
      bottom: -2px;
      left: 24px;
      // background: RED;
    }

    .kefu {
      bottom: 304px;
    }

    .btn_reg {
      bottom: 270px;
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
  }

  .TplFloatSet0 {
    width: 119px;
    height: 272px;
    position: absolute;
    top: 180px;
    left: 10px;
    z-index: 1000;
    background: url(/static/dqr/img/kefuw-left.png) no-repeat;

    .kefuw-left-01 {
      display: block;
      height: 64px;
      padding: 18px 8px 0 9px;
      margin-bottom: 13px;
    }

    .kefuw-left-02 {
      display: block;
      width: 100%;
      height: 26px;
      margin-top: 120px;

      a {
        &.mobdm {
          display: block;
          width: 100%;
          height: 26px;
        }
      }
    }

    .kefuw-left-03 {
      display: block;
      width: 100%;
      height: 26px;
      margin-top: 5px;

      a {
        &.mobdm {
          display: block;
          width: 100%;
          height: 26px;
        }
      }
    }

    a {
      position: absolute;
    }

    .sign-in {
      width: 100%;
      height: 42px;
      top: 75px;
    }
  }
</style>
