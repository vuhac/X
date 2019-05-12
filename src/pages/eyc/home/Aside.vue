<template>
  <div>

    <div v-show="s1" class="TplFloatSet0 TplFloatSet TplFloatPic_1">
      <img src="/static/eyc/img/aside_left.png" alt="">
      <a @click="goUserCen('recharge',1)" class="wechat" ></a>
      <a @click="goUserCen('recharge',1)" class="zhifubao" href="javascript:void (0);"></a>
      <a @click="goUserCen('recharge',1)" class="qq" href="javascript:void (0);"></a>
      <a href="/static/eyc/html/active/opportunity/index.html" class="dzp" target="_blank"></a>
      <a class="jgj" href="/static/eyc/html/active/jgj/index.html" target="_blank"></a>
      <a class="close" @click="s1=false" href="javascript:void (0);"></a>
    </div>
    <div v-show="s2" class="TplFloatSet TplFloatPic_1">
      <img src="/static/eyc/img/aside_right.png" alt="">

      <a class="kefu" @click="kefuFc"></a>
      <a class="tousu" @click="gomessge"></a>
      <a class="close" @click="s2=false" href="javascript:void (0);"></a>
    </div>
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
        $('.TplFloatPic_1')
          .stop()
          .animate({top: window.pageYOffset + 170}, 1000)
      },
      goUserCen (name, num) {
        if (!localStorage.token || !localStorage.userinfo) {
          alert('您还没有登录,请先登录。')
          return false
        }
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
    },
    store
  }
</script>

<style lang="less" scoped>
  .TplFloatSet {
    position: absolute;
    // cursor: pointer;
    z-index: 9999;
    top: 170px;
    right: 15px;
    width: 127px;
    // overflow: hidden;
    a{
      position: absolute;
      left: 0;
      width: 100%;
    }
    
    .wechat{
      height: 25px;
      top: 92px;
    }

    .zhifubao{
      height: 25px;
      top: 120px;
    }

    .qq{
      height: 27px;
      top: 150px;
    }

    .jgj {
      bottom: 26px;
      height: 25px;
    }

    .dzp {
      bottom: 58px;
      height: 25px;
    }


    .kefu {
      bottom: 82px;
      height: 28px;
    }

    .tousu{
      bottom: 45px;
      height: 28px;
    }

    .close {
      left: 25px;
      width: 54%;
      height: 30px;
      bottom: 0;
    }
  }

  .TplFloatSet0 {
    left: 15px;
  }
</style>
