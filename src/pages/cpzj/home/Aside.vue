<template>
  <div>
    <div v-show="s1" class="TplFloatSet0 TplFloatSet TplFloatPic_1" style="position: absolute;z-index: 1000;top:200px;transition:all ease .3s">
      <a @click="goUserCen('recharge',1)" class="wechat" href="javascript:;"></a>
      <a @click="goUserCen('recharge',1)" class="zhifubao" href="javascript:;"></a>
      <a @click="goUserCen('recharge',1)" class="qq" href="javascript:;"></a>
      <a href="/static/cpzj/html/active/czjhb/index.html" target="_blank" class="hongbaoyu"></a>
      <a href="http://5550988.com/" target="_blank" class="beiyong"></a>
      <a href="/static/cpzj/html/active/jgj/index.html" target="_blank" class="jinguanjia"></a>
      <a class="close" @click="s1=false" href="javascript:;"></a>
    </div>
    <div v-show="s2" class="TplFloatSet TplFloatPic_1" style="position: absolute;z-index: 1000;top:200px;transition:all ease .3s">
      <a @click="openKefu" class="kefu1"></a>
      <a @click="openKefu" class="kefu2"></a>
      <a class="close" @click="s2=false" href="javascript:;"></a>
      <a href="javascript:;" @click="tousu" class="tousu"></a>
    </div>
    <div class="tip" v-show="s3">
      <a href="/static/cpzj/html/active/czjhb/index.html">
         <img src="/static/cpzj/img/redb.gif"/>
      </a>
     
      <span class="fa fa-fw fa-close" @click="s3 = false"></span>
    </div>
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
        s3: true
      }
    },
    methods: {
      addWindow () {
        window.addEventListener('scroll', this.scrollFunc)
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
      tousu(){
          if(localStorage.token){
            this.goUserCen('message',1)
          }else{
           alert("请先登录")
        }
      },
      scrollFunc () {
        // $('.TplFloatPic_1').stop().animate({top: window.pageYOffset + 180}, 1000)

        var nodeitem = document.getElementsByClassName('TplFloatPic_1')[0]
        var nodeitem1 = document.getElementsByClassName('TplFloatPic_1')[1]
        window.onscroll = function(){
          var t = document.documentElement.scrollTop||document.body.scrollTop;
          if(t>0){
            nodeitem.style.top = t + 200 + 'px';
            nodeitem1.style.top = t + 200 + 'px'
          }
        }

      }
    },
    mounted () {
      this.addWindow()
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  .tip {
    position: fixed;
    bottom: 10px;
    left: 10px;
    width: 230px;
    height: 230px;
    z-index: 1000;

    img {
      width: 100%;
      height: 100%;
    }
    .fa {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 20px;
      font-weight: 700;

      &:hover {
        color: #f13131;
      }
    }
  }

  .TplFloatSet {
    right: 18px;
    width: 127px;
    height: 298px;
    background-size: 100% 100% !important;
    background: url("/static/cpzj/img/online-right3.png") no-repeat;

    a{
      display: inline-block;
      position: absolute;
      height: 24px;
      width: 100%;
      left: 0;

      &.wechat{
        top:78px;
      }
       &.zhifubao{
        top:112px;
      }
       &.qq{
        top:150px;
      }
       &.hongbaoyu{
        top:182px;
      }
      &.beiyong{
        top:213px;
      }
      &.jinguanjia{
        top:245px;
      }
      &.kefu1{
        top: 170px;
      }
      &.kefu2{
        top:205px;
      }
      &.tousu{
        top:250px;
      }
   
      &.close {
        bottom: 0;
      }
    }

   

    
  }

  .TplFloatSet0 {
    left: 18px;
    background: url("/static/cpzj/img/online-left.png") no-repeat;
  }
</style>
