<template>
  <div id="footer-bg" class="clear">
    <div class="footer">
        <div class="footer-detail" :style="{background: 'url(' + footerBg + ')  no-repeat center top'}" :class="{night:colorbool}">
            <div class="foot_links">
                <ul class="wp flex">
                    <li class="introduce-cont">
                        <h3 class="footer-link-title">澳门新葡京</h3>
                        <div>
                          <a href="javascript:void(0);"  @click="goHelp('/home/about/'+ index)" v-for="(item,index) in aItems" :key="index">{{item.item}}</a>
                            <!-- <a href="javascript:void(0);"  @click="goHelp('/home/about')">关于我们</a>
                            <a href="javascript:void(0);"  @click="goHelp('/home/about')">联系我们</a>
                            <a href="javascript:void(0);"  @click="goHelp('/home/about')">存款帮助</a>
                            <a href="javascript:void(0);"  @click="goHelp('/home/about')" >取款帮助</a>
                            <a href="javascript:void(0);"  @click="goHelp('/home/about')">合作代理</a> -->
                        </div>
                    </li>
                    <li class="support-browser-cont">
                        <h3 class="footer-link-title browser-title">支持浏览器</h3>
                        <div>
                            <img src="/static/qygj/img/home/image_2019_02_14T08_53_01_247Z.png" alt="" width="100">
                        </div>
                    </li>
                    <li class="regulatory-authority">
                        <h3 class="footer-link-title">监管机构</h3>
                        <div>
                            <img src="/static/qygj/img/home/image_2019_02_14T08_52_29_378Z.png" alt="" width="60">
                        </div>
                    </li>
                    <li class="platform-cont">
                        <h3 class="footer-link-title">合作伙伴</h3>
                        <div>
                            <img src="/static/qygj/img/image_2019_02_14T07_35_30_910Z.png" alt="" width="100%">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="copyright">
                <div class="wp">
                    <div>
                        <!-- 千赢国际持有菲律宾 PAGCOR合法博彩执照&nbsp;&nbsp;版权为千赢国际所有&nbsp;&nbsp;PT游戏是由PT TransPacific在的授权下部署&nbsp;<img src="/static/qygj/img/pagcor_xs.png"> -->
                        版权为澳门新葡京 所有 © 2019
                    </div>
                </div>
            </div>
        </div>
    </div>
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
    
    <Modal
      v-model="modeldetail.bool"
      class-name="agent-transfer"
      width="500"
      :mask-closable="true"
    >
      <!-- <div
        class="vp-admin-wrap-close"
        slot="close"
       
      >
        <div class="vp-admin-wrap-close-empty">
          <a></a>
        </div>
      </div> -->
      <div slot="header" class="tishi">
           <span>来自新葡京的消息</span>
           <span></span>
      </div>
      <div class="agent-con">
          <span class="iconspan" :class="{newspan:modeldetail.leftspan}"> <i class="iconfont icon-baojing"></i><span class="tispan">{{modeldetail.title}}</span></span>
      </div>
      <div slot="footer"></div>
    </Modal>


</div>
</template>

<script>
  import store from '@/vuex/store'

  export default {
    data () {
      return {
         aItems: [
          {item: '关于我们'},
          {item: '联系我们'},
          {item: '存款帮助'},
          {item: '取款帮助'},
          {item: '合作伙伴'}
        ],
        curId:0,
        show_mobile: true,
        animatedStaues: false,
        footerBg:"/static/qygj/img/home/image_2019_02_14T08_56_54_932Z.png"
      }
    },
    methods: {
      goHelp (link) {
        this.$router.push(link);
      },
     
    },
    computed: {
      // 是否提示信息
      tipDatas () {
        return this.$store.state.alert.tipModel
      },
        colorbool(){
        return this.$store.state.mainState.color
      },
      modeldetail(){
        return this.$store.state.alert.newtip
      }
    },
    watch:{
       colorbool(newbool,oldbool){
          if(newbool==true){
            this.footerBg ='/static/qygj/img/index-main-bg-n.jpg'
          }else{
            this.footerBg = "/static/qygj/img/home/image_2019_02_14T08_56_54_932Z.png"
          }
       },
      // '$route.path': function (newVal, oldVal) {
      //     this.$store.commit('mainState/getRoute',newVal)
      //     if(newVal === "/home/live"){
      //       this.footerBg = "/static/qygj/img/live/image_2019_02_18T01_13_08_099Z.png"
      //     }
      //     else if(newVal === "/home/buyu"){
      //       this.footerBg = "/static/qygj/img/buyu/footer-bg.jpg"
      //     }
      //     else if(newVal ==='/home/tiyu' ){
      //       this.footerBg = '/static/qygj/img/home/footer-bg.png'
      //     }
      //     else if(newVal ==='/home/games' ){
      //       this.footerBg = '/static/qygj/img/home/lhjfooter-bg.jpg'
      //     }
      //     else if(newVal == '/home/qipai'){
      //       this.footerBg = '/static/qygj/img/home/qpfooter-bg.jpg'
      //     }
      //     else if(newVal == '/home/youhui'){
      //       this.footerBg = '/static/qygj/img/home/yhfooter-bg.jpg'
      //     }
      //     else{
      //       this.footerBg = "/static/qygj/img/home/image_2019_02_14T08_56_54_932Z.png"
      //     }
      //  } 
    },
    mounted () {
      let routerSrc  = this.$store.state.mainState.routeSrc;
      if(routerSrc ==="/home/live"){
          this.footerBg = "/static/qygj/img/live/image_2019_02_18T01_13_08_099Z.png"
      }
      else if(routerSrc === "/home/buyu"){
          this.footerBg = "/static/qygj/img/buyu/footer-bg.jpg"
      }
      else if(routerSrc ==='/home/tiyu' ){
          this.footerBg = '/static/qygj/img/home/footer-bg.png'
      }
      else if(routerSrc ==='/home/games' ){
          this.footerBg = '/static/qygj/img/home/lhjfooter-bg.jpg'
      }
      else if(routerSrc == '/home/qipai'){
          this.footerBg = '/static/qygj/img/home/qpfooter-bg.jpg'
      }
      else if(routerSrc == '/home/youhui'){
          this.footerBg = '/static/qygj/img/home/yhfooter-bg.jpg'
      }
      else{
          this.footerBg = "/static/qygj/img/home/image_2019_02_14T08_56_54_932Z.png"
      }
      setTimeout(() => {  
        this.animatedStaues = true
      }, 1500)
    },
    created(){
      this.$store.commit("mainState/getRoute",this.$route.path)
    },
    store
  }
</script>

<style lang="less" scoped>
  .clear{
      zoom: 1;
      max-width:1920px;
      min-width:1200px;
      margin:auto;
      .footer-detail{
          position: relative;
          height: 311px;
          padding: 35px 0 0;
          color: #fff;
          .foot_links{
            .wp{
              width:1200px;
              margin:0 auto;
              li{
                flex: 0 0 15%;
                .footer-link-title{
                    margin-bottom: 25px;
                    font-size: 18px;
                    font-weight: bold;
                }
                div{
                   a{
                      display: block;
                      padding-left: 7px;
                      line-height: 2;
                      text-align: left;
                      font-size: 14px;
                      color: #fff;
                  }
                }
              }
              li:nth-child(4){
                flex: 0 0 55%;
                .footer-link-title{
                    margin-bottom: 25px;
                    font-size: 18px;
                    font-weight: bold;
                }
              }
            }
            .flex{
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-pack: justify;
              -ms-flex-pack: justify;
              justify-content: space-between;
            }
          }
          .copyright{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: rgba(0, 0, 0, .1);
            .wp{
              width: 1200px;
              margin: 0 auto;
              div{
                font-size: 14px;
                color: #fff;
                text-align: center;
                line-height: 50px;
                img{
                  border: 0;
                  vertical-align: middle;
                }
              }
            }
          }
      }
      .night{
           background:url(/static/qygj/img/index-main-bg-n.jpg) no-repeat center top;
      }
  }

/deep/.ivu-modal-mask {
  z-index: 2000;
}
/deep/.ivu-modal-wrap {
  z-index: 2000;
}
/deep/.ivu-modal-close {
  right: 0;
}
/deep/.ivu-modal-footer {
  border-top: none;
  display: none;
}
/deep/.ivu-modal {
  top: 50%;
  margin-top: -159px;
  height: 318px;
}
/deep/.ivu-modal-header {
  border-bottom: none;
  padding: 0;
}
/deep/ .ivu-modal-close .ivu-icon-ios-close-empty{
    color: #fff;
    font-size:37px;
    top: 0;
}

/deep/ .ivu-modal-body{
   padding: 0;
}

/deep/.ivu-modal-close{
    top:0;
    right: 20px;

} 
.headerp{
   text-align: center;
   margin-top:20px; 
}
.tishi{
   height: 37px;
   line-height: 37px;
   font-size:16px;
   color:#fff;
   background: linear-gradient(180deg, #9d63f3, #e549b0);
   border-radius:6px 6px 0 0; 
   span{
     margin-left: 30px;
   }
}
.agent-con{
  position: relative;
  padding: 51.5px 0;

}
.icon-baojing{
  font-size: 40px;
  color: #f90;
}
.iconspan{
   margin-left:70px; 
   height: 40px;
   line-height: 40px;
   display: block;
   font-size: 16px;
   position: relative;
   .tispan{
      margin-left:10px; 
      position: absolute;
      font-size:17px;
      color:#1f1f1f;
   }
}
.newspan{
   margin-left:165px; 
}
.pay{
  display: block;
  position: absolute;
  width: 160px;
  height: 35px;
   background: linear-gradient(180deg, #ff3492, #ff1e4f);
  text-align: center;
  line-height: 35px;
  color: #fff;
  font-size: 18px;
  left:130px;
  top:80px;
  border-radius: 10px;
}

.vp-admin-wrap-close {
    width: 60px;
    height: 40px;
    background: #f2f2f2;
    border-bottom-left-radius: 24px;
    border-top-left-radius: 24px;
    &:hover {
      background: linear-gradient(180deg, #ff3492, #ff1e4f);
    }
    .vp-admin-wrap-close-empty {
      position: relative;
      background: #fff;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      font-size: 56px;
      left: 2px;
      top: 2px;
      -moz-transition: all 0.5s ease-in;
      -webkit-transition: all 0.5s ease-in;
      -o-transition: all 0.5s ease-in;
      transition: all 0.5s ease-in;
      a {
        position: absolute;
        top: 9px;
        left: 9px;
        width: 20px;
        height: 20px;
        display: inline-block;
        background: url("/static/public/image/common/vp-common-close.png") #fff;
        background-size: 98% 98%;
        // transform: rotate(0deg);
      }
      &:hover {
        transform: translateX(40%);
        // &::before{
        //   color: #fff;
        // }
      }
    }
  }
</style>
