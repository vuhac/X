<template>
  <div class="homeLive-wrap" >
    <div class="live" >
    <vp-header-pic :headerImg="headerImg"></vp-header-pic>


      <div class="banner-cpyx">
      </div>
     <div class="live_content" :class="{night:colorbool}">
        <ul class="home-list-wrap">
          <li :key="index" v-for="(item,index) in liveDatas" href="javascript:void(0)" :class="[item.class,'home-list-item']" >
                <div :class="item.clicked=='left'?'left_cont':'right_cont'">
                <div class="left_logo">
                  <img :src="item.logoSrc" alt="">
                </div>
                <h3 class="title">{{item.name}}</h3>
                <p class="text">{{item.text}}</p>
              </div>
              <img :src="item.rightImgSrc" :class="item.clicked=='left'?'right_img':'left_img'" alt="">
              <div class="mark-box">
								<!-- <div :class="clicked? 'qr-code-container':''" >
									<div class="client-down">
										<img alt="" src="/static/qygj/img/live/image_2019_02_17T06_04_11_068Z.png">
										<p>苹果客户端下载</p>
									</div>  
									<div class="client-down">
										<img alt="" src="/static/qygj/img/live/image_2019_02_17T06_04_30_835Z.png">
										<p>安卓客户端下载</p>
									</div>
								</div> -->
								<div class="join-game-btn js-join-game-btn" data-type="aglive" @click="getItemId(item)">
									<a href="javascript:;" target="_blank"></a>
								</div>
							</div>
          </li>
        </ul>
        <form class="home-list-form" name="agform" ref="formDatas" method="post" target="_blank">
          <input v-model="params" name="params" type="text" value="">
          <input v-model="key" name="key" type="text" value="">
          <input type="submit" value="提交">
        </form>
      </div> 
    </div>
  </div>
</template>
<script>
  import { _SetGet, _SetPost } from '@/service/public/service.js'
  import vpHeaderPic from "../headerPic";
  import mixin from "../../../public/games/public.js";

  // import $ from 'jquery'
  export default {
    mixins: [mixin],
    data () {
      return {
        headerImg:"/static/qygj/img/carouel/zr.jpg",
        params: '',
        clicked:true,
        key: '',
        liveDatas: 
        [
          {name: 'AG视讯厅',clicked:"left",text:"美女主播 热线传情", platform: 'live_casino', id: '31', class: 'ag',logoSrc:"/static/qygj/img/live/log_ag.png",rightImgSrc:"/static/qygj/img/live/img_ag1.png"},
          {name: 'BBIN视讯厅',clicked:"left",text:"独特界面 畅游娱乐",  platform: 'live_casino', id: '32', class: 'bb',logoSrc:"/static/qygj/img/live/log_bbin.png",rightImgSrc:"/static/qygj/img/live/img_bbin.png"},
          {name: 'BG视讯厅',clicked:"left",text:"众多美女 陪你畅游",  platform: 'live_casino', id: '3180', class: 'bg',logoSrc:"/static/qygj/img/live/log_bg.png",rightImgSrc:"/static/qygj/img/live/right_img.png"},
          {name: 'DG视讯厅',clicked:"left",text:"美女主播 热线传情",  platform: 'live_casino', id: '42', class: 'dg',logoSrc:"/static/qygj/img/live/log_dg.png",rightImgSrc:"/static/qygj/img/live/img_dg.png"},
          {name: 'DS视讯厅',clicked:"left",text:"业界顶尖 奢华娱乐",  platform: 'live_casino', id: '34', class: 'ds',logoSrc:"/static/qygj/img/live/log_ds.png",rightImgSrc:"/static/qygj/img/live/img_ds.png"},
          {name: 'LEBO视讯厅',clicked:"left",text:"众多美女 陪你畅游", platform: 'live_casino', id: '44', class: 'lebo',logoSrc:"/static/qygj/img/live/log_lebo.png",rightImgSrc:"/static/qygj/img/live/img_lebo.png"},
          {name: 'OG视讯厅',clicked:"left",text:"口碑良好 欢乐无限",  platform: 'live_casino',id: '48', class: 'og',logoSrc:"/static/qygj/img/live/log_og.png",rightImgSrc:"/static/qygj/img/live/img_og.png"},
          {name: 'eBET视讯厅',clicked:"left",text:"画质高清 界面高贵",  platform: 'live_casino',id: '43', class: 'ebet',logoSrc:"/static/qygj/img/live/log_ebet.png",rightImgSrc:"/static/qygj/img/live/img_ebet.png"},
          {name: 'LMG视讯厅',clicked:"left",text:"知名顶级 极致博彩",  platform: 'live_casino', id: '45', class: 'lmg',logoSrc:"/static/qygj/img/live/log_lmg.png",rightImgSrc:"/static/qygj/img/live/img_lmg.png"},
          {name: '欧博视讯厅',clicked:"left",text:"挑选好路 直接投注",  platform: 'live_casino', id: '46', class: 'ob',logoSrc:"/static/qygj/img/live/log_ob.png",rightImgSrc:"/static/qygj/img/live/img_ob.png"},
          {name: 'SA视讯厅',clicked:"left",text:"众多美女 陪你畅游",  platform: 'live_casino', id: '49', class: 'sa',logoSrc:"/static/qygj/img/live/log_sa.png",rightImgSrc:"/static/qygj/img/live/img_sa.png"},
          {name: 'VR彩票',clicked:"left",text:"高清画质 专业VR",  platform: 'vr_lottery', id: '30', class: 'vr',logoSrc:"/static/qygj/img/live/log_vr.png",rightImgSrc:"/static/qygj/img/live/img_vr.png"}
        ]
      }
    },
    methods: {
        // async getItemId (item) {
        //   if (!localStorage.token || !localStorage.userinfo) {
        //     alert('未登录')
        //     return false;  
        //   }
        //   console.log(item)
        //   let routeData = this.$router.resolve({
        //     path: '/loading',
        //     query: {name: item.name, classId:item.id, platform: item.platform,id:item.id}
        //   })
        //   window.open(routeData.href, 'newwindow', 'height=750,width=1285, top=0, left=' + (window.screen.availWidth - 1295) / 2 + '')
        // },
    },
    created: function (){

    },
    mounted () {
      
    },
    watch: {},
    components: {
      vpHeaderPic
    },
    computed:{
      colorbool(){
        return this.$store.state.mainState.color
      },
    }

  
  }
</script>

<style lang="less" scoped>
  .live {
    // background: url("/static/public/image/game/live/zr.jpg") no-react centertop,#f1f1f1;
  }
  * {
    margin: 0;
    padding: 0;
  }

  span {
    position: abso;
    top: 0;
    z-index: 1;
    display: inline-block;
    width: 27px;
    height: 80px;
    vertical-align: top;
    background-color: #202020;
    cursor: pointer;
  }

  span:hover:before {
    background-position-y: bottom;
  }

  #prev {
    left: 27px;
  }

  #next {
    right: 27px;
  }

  span:before {
    content: "";
    position: absolute;
    top: 30px;
    left: 8px;
    width: 12px;
    height: 20px;
    background-position: center top;
    background-repeat: no-repeat;
  }

  #prev:before {
    background-image: url("/static/public/image/game/live/left.png");
  }

  #next:before {
    background-image: url("/static/public/image/game/live/right.png");
  }

  .active {
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    transform: translate3d(-150px, 0, 0);
  }

  .back {
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    transform: translate3d(150px, 0, 0);
  }

  .home-list-wrap {
    text-align: center;
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
    font-size: 0;
    padding-bottom: 15px;
    .home-list-item {
      position: relative;
      float:left;
      margin-bottom: 20px;
      width:590px;
      height: 323px;
      background-size: 100% 100%;
      .left_cont{
        float:left;
        position: relative;
        left:0;
        padding:35px 0 0 35px;
        color:#fff;
        transition: all .3s;
        .left_logo{
          text-align: left;
        }
        .title{
          margin:25px auto 12px;
          font-size: 24px;
          font-weight: bolder;
          text-align: left; 
        }
        .text{
          font-size: 20px;
          line-height: 1.5;
        }
      }
      .right_cont{
          float:right;
          position: relative;
          left:0;
          padding:35px 35px 0 0;
          color:#fff;
          transition: all .3s;
          .left_logo{
            text-align: right;
          }
          .title{
            margin:25px auto 25px;
            font-size: 24px;
            font-weight: bolder;
            text-align: right; 
          }
          .text{
            font-size: 16px;
            line-height: 1.5;
        }
      }
      .right_img{
        position: absolute;
        right:0px;
        bottom:0px;
        transition: all .3s;
      }
      .left_img{
        position: absolute;
        left:0px;
        bottom:0px;
        transition: all .3s;
      }
      .mark-box{
        position: absolute;
        top:0px;
        left:0px;
        right:0px;
        bottom: 0px;
        padding-top: 35px;
        .qr-code-container{
          opacity:0;
          width:59%;
          overflow: hidden;
          margin-bottom: 25px;
          .client-down{
            float:left;
            margin:0 0 0 45px;
            img{
              border:0;
              vertical-align: middle;
            }
            p{
              font-size: 14px;
              color:#fff;
              text-align: center;
            }
          }
        }
        .join-game-btn{
          position: absolute;
          bottom: 20px;
          left:35px;
          z-index: 200;
          height: 33px;
          width: 153px;
          text-align: center;
          background: url(/static/qygj/img/live/jr.png);
          opacity:0;
          transition: all .3s;
          cursor: pointer;
          line-height: 33px;
          background-size: 100% 100%;
          a{
            font-size: 16px;
            color:#fff;
            display: block;
            width:100%;
            height:100%;
            text-align: center;
          }
        }
      }
    }
    .home-list-item:nth-child(even){
      margin-left:20px;
    }
    .home-list-item:hover .qr-code-container{
      opacity: 1;
    }
    .home-list-item:hover .join-game-btn{
      opacity: 1;
    }
    li:hover {
      background-position-y: bottom;
    }

    .ag {
      background-image: url(/static/qygj/img/live/bg_ag.png);
    }

    .bb {
      background-image: url(/static/qygj/img/live/bg_bbin.png);
    }

    .bg {
      background-image: url(/static/qygj/img/live/bg_bg.png);
    }

    .dg {
      background-image: url(/static/qygj/img/live/bg_dg.png);
    }

    .ds {
      background-image: url(/static/qygj/img/live/bg_ds.png); 
    }

    .lebo {
      background-image: url(/static/qygj/img/live/bg_lebo.png);
    }

    .og {
      background-image: url(/static/qygj/img/live/bg_og.png);
    }

    .ebet {
      background-image: url(/static/qygj/img/live/bg_ebet.png);
    }

    .lmg {
      background-image: url(/static/qygj/img/live/bg_lmg.png);
    }

    .ob{
      background-image: url(/static/qygj/img/live/bg_ob.png);
    }

    .sa {
      background-image: url(/static/qygj/img/live/bg_sa.png);
    }

    .vr {
      background-image: url(/static/qygj/img/live/bg_vr.png);
    }
  }
  .home-list-item:hover .left_cont{
      transform: translateX(10px);
    }
  .home-list-item:hover .right_img{
      transform: translateX(-10px);
   }

  .home-list-item:hover .right_cont{
      transform: translateX(10px);
    }
  .home-list-item:hover .left_img{
      transform: translateX(-10px);
   }
    
 
  .home-list-form {
    display: none;
  }

  .banner-cpyx {
    // background: black;
    .wrapper {
      margin: 0 auto;
      width: 960px;
      height: 10px;

      .demolist {
        margin-top: 30px;
      }
    }
  }
  .live_content{
    position: relative;
    // padding:30px 0;
    padding:50px 0 30px;
    max-width: 1920px;
    min-width: 1200px;
    margin:0 auto;
    background:#eaeaea url(/static/qygj/img/live/image_2019_02_18T01_12_35_435Z.png) repeat-y center bottom
  }
  .night{
      background: rgba(18,21,66,.8)
  }
</style>

