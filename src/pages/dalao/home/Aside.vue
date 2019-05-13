<template>
  <div>

    <ul v-show="s1" class="TplFloatSet0 TplFloatSet TplFloatPic_1" style="position: absolute;z-index: 1000;top:170px;transition:all ease .3s">
      <img src="/static/dalao/img/left.png" alt="">
       <a @click="goUserCen('recharge',1)" class="wechat" href="javascript:;"></a>
       <a @click="goUserCen('recharge',1)"  class="zhifubao" href="javascript:;"></a>
       <a @click="goUserCen('recharge',1)"  class="qq" href="javascript:;"></a>
    <!-- <a @click="goUserCen(0,'充值',5)"  class="bank" href="javascript:;"></a>  -->
      <!--<a href="/static/dalao/html/active/qd/index.html" target="_blank" class="sign-in"></a>-->
      <a href="/static/dalao/html/active/jgj/index.html" class="jgj" target="_blank"></a>
      <!-- <a href="/static/dalao/html/active/opportunity/index.html" class="dzp" target="_blank"></a> -->
      <a class="close" @click="s1=false" href="javascript:;"></a>
    </ul>
    <ul v-show="s2" class="TplFloatSet TplFloatPic_1" style="position: absolute;z-index: 1000;top:170px;transition:all ease .3s">
      <img src="/static/dalao/img/right.png" alt="">
      <a class="kefu" @click="openKefu"></a>
      <a  class="tousu" href="javascript:;" @click="tousu"></a>
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
        s2: true
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
        window.onscroll = function () {
          var t = document.documentElement.scrollTop||document.body.scrollTop
          if(t>0){
            nodeitem.style.top = t + 170 + 'px'
            nodeitem1.style.top = t + 170 + 'px'
          }
        }


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
      openKefu () {
        let service = JSON.parse(localStorage.config).service;
        if (service) {
          let ser = service.find(item => item.status === 'on')
          if (ser) {
            window.open(ser.url);
          }
        }
      },
      tousu(){
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
    // position: absolute;
    // cursor: pointer;
    // z-index: 1000;
    // top: 170px;
    right: 18px;
    width: 132px;

    .close,
    .kefu,
    .btn_reg,
    .wechat,
    .zhifubao,
    .qq,
    .bank,
    .tousu {
      padding: 15px 50px;
      position: absolute;
      bottom: -2px;
      left: 24px;
      // background: RED;
    }

    .kefu {
     bottom: 90px;
     height: 120px;
     width: 120px;
     left: 0;
    }
    .tousu{
      bottom: 50px;
    }
    .btn_reg {
      bottom: 270px;
    }

    .wechat {
      bottom: 186px;
      width: 120px;
        left: 0;
    }

    .zhifubao {
      bottom: 140px;
       width: 120px;
         left: 0;
    }

    .qq {
      bottom: 97px;
       width: 120px;
         left: 0;
    }

    .bank {
      bottom: 112px;
    }

    .jgj {
      left: 0;
      bottom: 47px;
      width: 127px;
      height: 31px;
    }

    .dzp {
      left: 0;
      bottom: 42px;
      width: 127px;
      height: 31px;
    }
  }

  .TplFloatSet0 {
    left: 18px;

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
