.
<template>
  <div>

    <ul v-show="s1" class="TplFloatSet0 TplFloatSet TplFloatPic_1" style="position: absolute;z-index: 1000;top:170px;transition:all ease .3s">
      <img src="/static/hqyl/img/home/left_01.gif" alt="">
      <!-- <a @click="goUserCen(0,'充值',2)" class="wechat" href="javascript:;"></a>
  <a @click="goUserCen(0,'充值',3)"  class="zhifubao" href="javascript:;"></a>
  <a @click="goUserCen(0,'充值',4)"  class="qq" href="javascript:;"></a>
  <a @click="goUserCen(0,'充值',5)"  class="bank" href="javascript:;"></a> -->
      <!--<a href="/static/hqyl/html/active/qd/index.html" target="_blank" class="sign-in"></a>-->
      <a href="javascript: void(0)" target="_blank" class="sign-in"></a>
      <a class="close" @click="s1=false" href="javascript:;"></a>
    </ul>
    <ul v-show="s2" class="TplFloatSet TplFloatPic_1" style="position: absolute;z-index: 1000;top:170px;transition:all ease .3s">
      <img src="/static/hqyl/img/home/right_02.gif?1" alt="">
      <a class="btn_reg" href="#/home/register"></a>
      <a class="kefu" @click="kefuFc"></a>
      <a class="close" @click="s2=false" href="javascript:;"></a>
      <div class="codeBox">
          <div class="QR-code" ref="qr-code">
            <!-- <img src="/static/jltx/img/code.png" width="96" height="96"> -->
          </div>
      </div>
      
    </ul>
    <!--<div class="new2019 animated fadeInUp mobile_auto" onclick="window.open('/static/hqyl/html/active/pig2019/#')" v-if="showNew2019">
      <div class="clBtn clBtn1" @click.stop="hideNew2019"></div>
    </div>-->
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
        showNew2019:true
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
      hideNew2019(){
        this.showNew2019= false
      }
    },
    mounted () {
      this.addWindow()

      this.createDownloadQRCode({
        el: this.$refs['qr-code'],
        url: window.location.origin + '/m#/download',
        size: 100
      })
    },
    store
  }
</script>

<style lang="less" scoped>


  .codeBox{
        padding: 5px;
        background: rgb(255, 255, 255);
        width: 110px;
        /* margin: -147px 0 0 13px; */
        position: absolute;
        left: 17px;
        top: 228px;
  }
  .TplFloatSet {
    // position: absolute;
    // cursor: pointer;
    // z-index: 1000;
    // top: 170px;
    right: 26px;
    width: 132px;

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
  .new2019{
    position:fixed;
    z-index:9999;
    right:20px;
    bottom:30px;
    cursor:pointer;
    width: 230px;
    height: 230px;
    background-image: url('/static/hqyl/img/new2019.gif');

    .clBtn{
      background: url('/static/hqyl/img/new2019_close.png'); 
      z-index: 99999; 
      position: absolute; 
      width: 23px;
      height: 23px; 
      top: 0px;
      right: 0px; 
      display: none;
    }
    &:hover .clBtn{
      display: block;
    }
  }
</style>
