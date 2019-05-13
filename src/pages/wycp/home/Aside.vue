<template>
  <div>
    <div v-show="s1" class="TplFloatSet0 TplFloatSet TplFloatPic_1" style="position: absolute;z-index: 1000;top:170px;transition:all ease .3s">
      <a @click="goUserCen('recharge',1)" class="wechat"></a>
      <a @click="goUserCen('recharge',1)" class="zhifubao"></a>
      <a @click="goUserCen('recharge',1)" class="qq"></a>
      <a onclick="window.open('/static/wycp/html/active/opportunity/index.html')" class="zhuanpan"></a>
      <a onclick="window.open('/static/wycp/html/active/jgj/index.html')" class="jgj"></a>
      <a class="close" @click="s1=false" href="javascript:;"></a>
    </div>
    <div v-show="s2" class="TplFloatSet TplFloatPic_1" style="position: absolute;z-index: 1000;top:170px;transition:all ease .3s">
      <a @click="openKefu" class="kefu"></a>
      <a @click="gomessge" class="tousu"></a>
      <a class="close" @click="s2=false" href="javascript:;"></a>
    </div>

    <div class="tip" v-show="s3">
      <a href="/static/wycp/html/active/czjhb/index.html" target="'_blank'">
         <img src="/static/wycp/img/redb.gif"/>
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
      gomessge(){
        if(localStorage.token){
          this.goUserCen('message',1)
        }else{
          alert("请先登录")
        }
      },
      scrollFunc () {
        // $('.TplFloatPic_1').stop().animate({top: window.pageYOffset + 200}, 1000)

        var nodeitem = document.getElementsByClassName('TplFloatPic_1')[0]
        var nodeitem1 = document.getElementsByClassName('TplFloatPic_1')[1]
        window.onscroll = function(){
          var t = document.documentElement.scrollTop||document.body.scrollTop
          if(t>0){
            nodeitem.style.top = t + 170 + 'px'
            nodeitem1.style.top = t + 170 + 'px'
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
    // position: absolute;
    // z-index: 1000;
    // top: 200px;
    right: 5px;
    width: 127px;
    height: 250px;
    background-size: 100% 100% !important;
    // background: url("/static/wycp/img/online-right.png") no-repeat;
    background: url("/static/wycp/img/wycp_right.png") no-repeat;

    a{
      display: inline-block;
      position: absolute;
      width: 100%;
      left: 0;
      height: 30px;
      cursor: pointer;

      &.wechat{
        top: 85px;
      }
      &.zhifubao{
        top: 112px;
      }
      &.qq{
        top: 142px;
      }
      &.zhuanpan{
        top: 171px;
      }

      &.jgj{
        top: 201px;
      }

      &.kefu{
        bottom: 74px;
      }
      &.tousu{
        bottom: 40px;
      }

      &.close {
        bottom: 0;
        height: 24px;
      }
    }

    
  }

  .TplFloatSet0 {
    left: 18px;
    // background: url("/static/wycp/img/online-left.png") no-repeat;
    background: url("/static/wycp/img/wycp_left.png") no-repeat;
  }
</style>
