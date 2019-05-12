<template>
  <div>
    <!-- <div class="aside_left" v-show="showSleft">
      <span class="close" @click=" showSleft = false "></span>
      <img  v-show="showSleftimg" :src="sleft[0].src" @click="goLink(sleft[0].link)">
      <img  v-show="!showSleftimg" :src="sleft[1].src" @click="goLink(sleft[1].link)">
      <ul class="slide-pager">
        <li :class="{on:showSleftimg==true }"  @click="showSleftimg=false">1</li>
        <li :class="{on:showSleftimg==false }" @click="showSleftimg=true" >2</li>
      </ul>
    </div> -->

    <!-- <div class="aside_right" v-show="showRight">
      <img src="/static/xpj/img/aside_right.gif" alt="">
      <span class="close" @click=" showRight = false "></span>
    </div> -->

    <!-- <div class="aside_nav" v-show="showSnav">
      <ul>
          <li class="chat">
              <span title="在线客服"></span>
          </li>
          <li class="qq" ></li>
          <li class="domain" ><a  target="_blank"></a></li>
          <li class="kg" title="开元棋牌"></li>
          <li class="closed" @click=" showSnav = false " ></li>
      </ul>
    </div> -->
    <div v-show="s1" class="TplFloatSet0 TplFloatSet TplFloatPic_1">
      <div class="dial"></div>
      <div class="newclose" @click="s1 = false"></div>
    </div>
    <div v-show="s2" class="TplFloatSet TplFloatPic_1" >
      <div class="kefu" @click="openKefu"></div>
      <div class="huiyuan"  @click="goLink"></div>
      <div class="zhifu">
          <span class='koukou' @click="goUserCen('recharge',1)"></span>
          <span class='weixin'  @click="goUserCen('recharge',1)"></span>
          <span class='zhifubao' @click="goUserCen('recharge',1)"></span>
      </div>
      <div class="jiance" ></div>
      <div class="newclose" @click="s2 = false"></div>

      <div class="codeBox" style="    position: absolute;
                left: 16px;
                bottom: 29px;
                background: #fff;
                padidng: 5px;
                padding: 5px;
                height: 110px;
                width: 110px;
                text-align: center;">
         <div class="QR-code" ref="qr-code"
         style="
             width: 100px;
            display: inline-block;
            margin-left: 5px;">
            <!-- <img src="/static/jltx/img/code.png" width="96" height="96"> -->
        </div>
      </div>
    </div>


  </div>

</template>

<script>
  import $ from 'jquery'
  export default {
    data () {
      return {
        // sleft:[
        //   { src:'/static/xpj/img/lb_promo.png',link:'/home/youhui' },
        //   { src:'/static/xpj/img/lb_kg.png',link:'/home/games?id=10042&name=开元棋牌' }
        // ],
        // showSleft:true,
        // showRight:true,
        // showSnav:true,
        // showSleftimg:true,
        s1: true,
        s2: true,
        s3: true
      }
    },
    methods: {
      // changeImg(){
      //   this.showSleftimg== true? this.showSleftimg = false : this.showSleftimg = true
      // },
      // goLink (link) {
      //   this.$router.push(link)
      // },
       addWindow () {
        window.addEventListener('scroll', this.scrollFunc)
      },
      scrollFunc () {
        $('.TplFloatPic_1').stop().animate({top: window.pageYOffset + 180}, 1000)
      },
      openKefu () {
        // window.open('https://vm.providesupport.com/08ffyyacqwb2j1oavlhdaf13sx')
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
      goLink(){
         if(!localStorage.token || !localStorage.userinfo){
            this.$router.push('/home/register')
         }
      }
    },
    mounted () {
      // let timer = setInterval(this.changeImg, 1500);
      this.addWindow()

      this.createDownloadQRCode({
        el: this.$refs['qr-code'],
        url: window.location.origin + '/m#/download',
        size: 100
      })
    },
    created () {

    }
  }
</script>

<style lang="less" scoped>
  // .aside_left{
  //   position: fixed;
  //   left: 2px;
  //   bottom: 2px;
  //   z-index: 9999;

  //   .slide-pager{
  //     position: absolute;
  //     top: -23px;
  //     left: 0;
  //     font-size: 0;
  //     li{
  //       display: inline-block;
  //       width: 14px;
  //       height: 14px;
  //       vertical-align: top;
  //       margin-left: 5px;
  //       background-color: #fff;
  //       -moz-border-radius: 50%;
  //       -webkit-border-radius: 50%;
  //       border-radius: 50%;
  //       cursor: pointer;
  //       &.on{
  //         background-color: #ff0;
  //       }
  //     }
  //   }
  // }
  // .close{
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   z-index: 99999;
  //   width: 26px;
  //   height: 26px;
  //   cursor: pointer;
  //   background: url(/static/xpj/img/close.png) no-repeat;
  // }

  // .aside_right{
  //   position: fixed;
  //   right:5px;
  //   bottom:0;
  //   display: inline-block;
  //   width: 145px;
  //   height: 160px;
  //   z-index: 9999;

  //   img{
  //     max-width: 145px;
  //     height: 160px;
  //     cursor: pointer;
  //   }

  //   .close{
  //     top: -10px;
  //   }
  // }
  // .aside_nav{
  //   position: fixed;
  //   z-index: 999;
  //   top: 148px;
  //   background-repeat: no-repeat;
  //   background-position: center top;
  //   right: 0;

  //   li {
  //     width: 152px;


  //     &.chat{
  //       height: 249px;
  //       padding-top: 152px;
  //       background-image: url(/static/xpj/img/right_chat.png);

  //       span {
  //         display: inline-block;
  //         width: 100%;
  //         height: 100%;
  //       }
  //     }
  //     &.qq {
  //       height: 67px;
  //       background-image: url(/static/xpj/img/right_qq.png);
  //     }
  //     &.domain {
  //       height: 45px;
  //       background-image: url(/static/xpj/img/right_domain.png);
  //     }
  //     &.kg {
  //       height: 151px;
  //       background-image: url(/static/xpj/img/right_kg.png);
  //     }
  //     &.closed {
  //       height: 23px;
  //       cursor: pointer;
  //       background-image: url(/static/xpj/img/right_closed.png);
  //     }

  //     background-repeat: no-repeat;
  //     background-position: center top;
  //   }
  // }

   .TplFloatSet {
    position: absolute;
    z-index: 1000;
    top: 190px;
    right: 10px;
    width: 143px;
    height:382px;
    background: url("/static/xpj/img/right12.gif") no-repeat left top;

    div {
      position: absolute;
      width: 100%;
      left: 0;
      &.kefu{
        height: 73px;
      }
      &.huiyuan{
        top: 73px;
        height: 40px;
        cursor: pointer;
        overflow: hidden;
      }
       &.zhifu{
        top: 113px;
        height: 40px;
        cursor: pointer;
        span{
        
          height: 40px;
          display: block;
          float: left;
        }
        span:nth-child(1){
           width: 50px;

        }
         span:nth-child(2){
           width: 40px;
           
        }
         span:nth-child(3){
           width: 50px;
           
        }
      }
      &.jiance{
        top: 155px;
        height: 56px;
      }
      &.newclose {
        height: 24px;
        bottom: 0;
        cursor:pointer;
      }
    }
  }

  .TplFloatSet0 {
    left: 10px;
    background: url("/static/xpj/img/left12.gif") no-repeat left top;
  }
</style>
