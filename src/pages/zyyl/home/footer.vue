<template>
  <div class="footer-bg clear">

      <!-- <div v-show="logoStyle" class="mobile-banner" style="position:relative;overflow: hidden;width: 100%; background-color:#312b39;">
          <div class="lazy-content" style="position:relative;width: 1200px;margin: 0 auto;">
              <img class="lazy-mobile" src="/static/zyyl/img/lunbo/scabcide_bg.jpg" style="display: inline;">
              <div id="ios-scan" style="position: absolute;width: 100px;height: 100px;top: 294px;left:669px;" title="" ref="qr-code1">
            

              </div>
        
          </div>
          
      </div> -->



      <div class="footer">
        <div class="footer-down">
              <input type="hidden" id="domain_list" value="">
          <div class="down-menu" style="background: url(/static/zyyl/img/footer.webp) center center no-repeat;">
            <a class="p2" target="_blank" href="javascript:void(0)" data-tag_id="foot_logo_icon01" data-depth="1"></a>
            <span class="p4" style="width: auto">Copyright © 2011-2019 亿博. All Rights Reserved.</span>
            <div class="on-menu">

              <template v-for="(item,index) in footerList">
                <a href="javascript:void(0)" @click="getArticle(item.name)" :key="index">{{item.name}}</a>
                <span v-if="index!=(footerList.length-1)" :key="item.name">|&nbsp;</span>
              </template>
              


            </div>
          </div>
        </div>
      </div>






    <!-- 分为封盘、报错、恭喜 -->
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
  </div>
</template>

<script>
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        logoStyle:false,
        footerList:[
          {name:"关于我们"},
          {name:"联系我们"},
          {name:"合作伙伴"},
          {name:"存款帮助"},
          {name:"取款帮助"},
          {name:"常见问题"},

        ],
        show_mobile: true,
        animatedStaues: false
      }
    },
    methods: {
      goHelp (link) {
        this.$router.push(link)
      },
            // 文章
      async getArticle(title){
        
        let goUrl="";
        switch(title){
          case "关于我们":
          goUrl='/home/about';
          break;
          case "联系我们":
          goUrl='/home/contact';
          break;
          case "合作伙伴":
          goUrl='/home/partner';
          break;
          case "存款帮助":
          goUrl='/home/savings';
          break;
          case "取款帮助":
          goUrl='/home/help_withdrawals';
          break;
          case "常见问题":
          goUrl='/home/issue';
          break;
          default:
          goUrl='/home/about';
          break;
        }
        this.goHelp(goUrl)
      },
    },
    computed: {
      // 是否提示信息
      tipDatas () {
        return this.$store.state.alert.tipModel
      }
    },
    mounted () {
      // setTimeout(() => {
      //   this.animatedStaues = true
      // }, 1500)
        this.createDownloadQRCode({
          el: this.$refs['qr-code1'],
          url: window.location.origin + '/m#/download',
          size: 100
        })
        // this.createDownloadQRCode({
        //   el: this.$refs['qr-code2'],
        //   url: window.location.origin + '/m#/download',
        //   size: 100
        // })
    },
    watch:{
      $route(){
        // console.log(this.$router)
        if(this.$router.currentRoute.fullPath=="/home"){
          this.logoStyle=false
        }else{
          this.logoStyle=true;
        }
      },
    },
    store
  }
</script>

<style lang="less" scoped>

  .mobile-banner {
      width: 100%;
      height: 500px;
  }

  ._6 {
      height: 58px;
      width: 58px;
      background-position: -1px -62px;
  }
  .index-sprite {
      background: url(/static/zyyl/img/a_sprite.png) no-repeat;
      display: block;
  }
  .footer {
    width: 100%;
    .footer-down {
        background: #1e1d22;
        height: 280px;
        .down-menu {
            // background: url(a_index.min.css) no-repeat;
            display: block;
            // height: 254px;
            // width: 1200px;
            // background-position: 0 -419px;
        }
        .down-menu {
            width: 1200px;
            margin: 0 auto;
            position: relative;
            height: 254px;
            .p2 {
                display: inline-block;
                height: 35px;
                opacity: 0;
                position: absolute;
                left: 17%;
                top: 56px;
                width: 140px;
                filter: alpha(opacity=0);
            }
            .p4 {
                display: inline-block;
                height: 25px;
                position: absolute;
                right: 34%;
                bottom: -15px;
                width: 330px;
                color: #999;
            }
        }
    }

    .on-menu {
        width: 1200px;
        margin: 0 auto;
        text-align: center;
        font-size: 14px;
        color: #666;
        position: absolute;
        bottom: 40px;
        a {
            color: #ccc;
        }
    }
  }















  // /static/zyyl/img/
  .footer-bg {
    margin: 0 auto;
    // max-width: 1920px;
    
  }

  .mobile_auto {
    position: fixed;
    z-index: 5;
    left: 20px;
    bottom: 30px;
    cursor: pointer;
    width: 302px;
    height: 260px;
    background-image: url(/static/zyyl/img/APPxx.png?1);

    .clBtn {
      position: absolute;
      right: 40px;
      top: 5px;
      padding: 18px;
      cursor: pointer;
    }

    &:hover {
      transform: scale(1.1);
    }

    &.active {
      -webkit-animation: animateSub 2s linear infinite;
      -o-animation: animateSub 2s linear infinite;
      -moz-animation: animateSub 2s linear infinite;
      animation: animateSub 2s linear infinite;
    }

    @-webkit-keyframes animateSub {
      25% {
        transform: translateY(5px);
      }
      75% {
        transform: translateY(-5px);
      }
    }
    @-moz-keyframes animateSub {
      25% {
        transform: translateY(5px);
      }
      75% {
        transform: translateY(-5px);
      }
    }
    @-o-keyframes animateSub {
      25% {
        transform: translateY(5px);
      }
      75% {
        transform: translateY(-5px);
      }
    }
    @-ms-keyframes animateSub {
      25% {
        transform: translateY(5px);
      }
      75% {
        transform: translateY(-5px);
      }
    }
    @keyframes animateSub {
      25% {
        transform: translateY(5px);
      }
      75% {
        transform: translateY(-5px);
      }
    }
  }
</style>
