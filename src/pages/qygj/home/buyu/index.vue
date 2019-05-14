 <template>
  <div class="buyu-wrap" >
    <div class="live">
      <div class="banner-cpyx">
      </div>
       <vp-header-pic :headerImg="headerImg"></vp-header-pic>
     <div class="live_content" :class="{night:colorbool}">
        <ul class="home-list-wrap">
          <li :key="index" v-for="(item,index) in liveDatas" href="javascript:void(0)" :class="[item.class,'home-list-item']" >
              <div class="left_cont">
                <div class="left_logo">
                  <img :src="item.logoSrc" alt="">
                </div>
                <p class="title">{{item.name}}</p>
              </div>
              <img :src="item.rightImgSrc" class="right_img" alt="">
              <div class="mark-box">
								<div :class="clicked? 'qr-code-container':''" >
									<div class="client-down">
										<img alt="" src="/static/qygj/img/live/image_2019_02_17T06_04_11_068Z.png">
										<p>苹果客户端下载</p>
									</div>
									<div class="client-down">
										<img alt="" src="/static/qygj/img/live/image_2019_02_17T06_04_30_835Z.png">
										<p>安卓客户端下载</p>
									</div>
								</div>
								<div class="join-game-btn js-join-game-btn" data-type="aglive" @click="trustLogin(item)">
									<a href="javascript:;" target="_blank"></a>
								</div>
							</div>
          </li>
          <!-- <li href="javascript:void(0)" class="home-list-item more">
          </li> -->
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
  import { _SetGet,_SetPost } from '@/service/public/service.js'
  import vpHeaderPic from "../headerPic";
  // import $ from 'jquery'
  import mixin from '../../../public/games/public.js'
  
  export default {
     mixins: [mixin],
    data () {
      return {

         headerImg:"/static/qygj/img/carouel/by.jpg",
        params: '',
        clicked:true,
        key: '',
         liveDatas: [
          {
            platform: 'AG_GAME',
            gameName: '548',
            name: 'AG捕鱼',
            text:"支持设备:web/h5/手机客户端",
            logoSrc:"/static/qygj/img/buyu/bulogo_01.png",
            rightImgSrc:"/static/qygj/img/buyu/buyu_01.png",
            type: ['AG', '捕鱼王'],
            class:"aa",
             id:265
          },  
          {
            platform: 'FG_GAME',
            gameName: 'fish_mm',
            text:"支持设备:web/h5/手机客户端",
            logoSrc:"/static/qygj/img/buyu/bulogo_02.png",
            rightImgSrc:"/static/qygj/img/buyu/buyu_02.png",
            name: 'FG美人捕鱼',
            type: ['FG', '美人捕鱼'],
            class:"ab",
            id:2576
          },

          {
            platform: 'FG_GAME',
            gameName: 'fish_hl',
            text:"支持设备:web/h5/手机客户端",
            logoSrc:"/static/qygj/img/buyu/bulogo_03.png",
            rightImgSrc:"/static/qygj/img/buyu/buyu_03.png",
            name: 'FG欢乐捕鱼',
            type: ['FG', '欢乐捕鱼'],
            class:"ac",
            id:2626
          },

          {
            platform: 'JDB_GAME',
            gameName: '7#7002',
            text:"支持设备:web/h5/手机客户端",
            logoSrc:"/static/qygj/img/buyu/bulogo_04.png",
            rightImgSrc:"/static/qygj/img/buyu/buyu_04.png",
            name: 'FG天天捕鱼',
            type: ['JDB', '龙王捕鱼2'],
            class:"ad",
            id:175
          },

          {
            platform: 'MW_GAME',
            gameName: '1051',
            text:"支持设备:web/h5/手机客户端",
            logoSrc:"/static/qygj/img/buyu/bulogo_05.png",
            rightImgSrc:"/static/qygj/img/buyu/buyu_05.png",
            name: 'FG捕鸟达人',
            type: ['MW', '千炮捕鱼'],
            class:"ae",
            id:151
          },
          {
            platform: 'CQ9_GAME',
            gameName: 'AB3',
            text:"支持设备:web/h5/手机客户端",
            logoSrc:"/static/qygj/img/buyu/bulogo_06.png",
            rightImgSrc:"/static/qygj/img/buyu/buyu_06.png",
            name: 'MW千炮捕鱼',
            type: ['CQ9', '皇金渔场'],
            class:"af",
            id:2639
          },
          {
            platform: 'PT_GAME',
            gameName: 'cashfi',
            text:"支持设备:web/h5/手机客户端",
            logoSrc:"/static/qygj/img/buyu/bulogo_07.png",
            rightImgSrc:"/static/qygj/img/buyu/buyu_07.png",
            name: 'JDB龙王捕鱼',
            type: ['PT', '深海大赢家'],
            class:"ag",
            id:2628
          },
          {
            platform: 'JDB_GAME', gameName: '7#7003',
            logoSrc:"/static/qygj/img/buyu/bulogo_08.png",
            rightImgSrc:"/static/qygj/img/buyu/buyu_08.png",
            name: 'JDB龙王捕鱼2',
            text:"支持设备:web/h5/手机客户端",
            type: ['JDB', '财神捕鱼'],
            class:"ah",
            id:173
          },
           {
            platform: 'JDB_GAME', gameName: '7#7003',
            logoSrc:"/static/qygj/img/buyu/bulogo_09.png",
            rightImgSrc:"/static/qygj/img/buyu/buyu_09.png",
            name: 'JDB财神捕鱼',
            text:"支持设备:web/h5/手机客户端",
            type: ['JDB', '财神捕鱼'],
            class:"ba",
            id:173
          },
           {
            platform: 'JDB_GAME', gameName: '7#7003',
            logoSrc:"/static/qygj/img/buyu/bulogo_10.png",
            rightImgSrc:"/static/qygj/img/buyu/buyu_10.png",
            name: 'CQ9黄金渔场',
            text:"支持设备:web/h5/手机客户端",
            type: ['JDB', '财神捕鱼'],
            class:"bb",
            id:2639
          },
           {
            platform: 'JDB_GAME', gameName: '7#7003',
            logoSrc:"/static/qygj/img/buyu/bulogo_11.png",
            rightImgSrc:"/static/qygj/img/buyu/buyu_11.png",
            name: 'CQ9黄金渔场2',
            text:"支持设备:web/h5/手机客户端",
            type: ['JDB', '财神捕鱼'],
            class:"bc",
            id:151
          },
           {
            platform: 'JDB_GAME', gameName: '7#7003',
            logoSrc:"/static/qygj/img/buyu/bulogo_12.png",
            rightImgSrc:"/static/qygj/img/buyu/buyu_12.png",
            name: 'CQ9捕鱼去喽',
            text:"支持设备:web/h5/手机客户端",
            type: ['JDB', '财神捕鱼'],
            class:"bd",
             id:2639
          },
           {
            platform: 'JDB_GAME', gameName: '7#7003',
            logoSrc:"/static/qygj/img/buyu/bulogo_13.png",
            rightImgSrc:"/static/qygj/img/buyu/buyu_13.png",
            name: 'BB捕鱼大师',
            text:"支持设备:web/h5/手机客户端",
            type: ['JDB', '财神捕鱼'],
            class:"be",
            id:2639
          },
           {
            platform: 'JDB_GAME', gameName: '7#7003',
            logoSrc:"/static/qygj/img/buyu/bulogo_14.png",
            rightImgSrc:"/static/qygj/img/buyu/buyu_14.png",
            name: "BB捕鱼达人",
            text:"支持设备:web/h5/手机客户端",
            type: ['JDB', '财神捕鱼'],
            class:"bf",
            id:151
          },
           {
            platform: 'JDB_GAME', gameName: '7#7003',
            logoSrc:"/static/qygj/img/buyu/bulogo_15.png",
            rightImgSrc:"/static/qygj/img/buyu/buyu_15.png",
            name: 'PT深海大赢家',
            text:"支持设备:web/h5/手机客户端",
            type: ['JDB', '财神捕鱼'],
            class:"bg",
             id:2628
          },

        ]
      }
    },
    methods: {
      
    },
    created: function () {
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
    // background: url("/static/public/image/game/live/zr.jpg") no-repeat centertop,#f1f1f1;
  }
  * {
    margin: 0;
    padding: 0;
  }

  span {
    position: absolute;
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
    .home-list-item:nth-child(odd) {
       background-size:100% 100%;
      &:hover .left_cont{
          transform: translateX(10px);
      }
      &:hover .right_img{
          transform: translateX(-10px)
      }
      position: relative;
      float:left;
      // margin-left:20px;
      margin-bottom: 20px;
      width:590px;
      height: 323px;
      .left_cont{
        float:l;
        position: relative;
        left:0;
        padding:35px 0 0 35px;
        color:#fff;
        transition: all .3s;
        .left_logo{
          text-align: left;
        }
        .title{
          margin:25px auto 25px;
          font-size: 24px;
          font-weight: bolder;
          text-align: left; 
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
        width:287px;
        height: 323px;
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
          background-size:100% 100%; 
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
       &:hover .join-game-btn{
        opacity: 1;
      }
    }
    
    .home-list-item:nth-child(even) {
      &:hover .left_cont{
          transform: translateX(-10px);
      }
      &:hover .right_img{
          transform: translateX(10px);
      }
      position: relative;
      float:left; 
      margin-left:20px;
      margin-bottom: 20px;
      width:590px;
      height: 323px;
      background-size:100% 100%;
      .left_cont{
        float:right;
        position: relative;
        right:0;
        padding:35px 35px 0 0px;
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
        left:0px;
        bottom:0px;
        width:287px;
        height: 323px;
        transition:all .3s;
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
          right:35px;
          z-index: 200;
          height: 33px;
          width: 153px;
          text-align: center;
          background: url(/static/qygj/img/live/jr.png);
          opacity:0;
          transition: all .3s;
          cursor: pointer;
          line-height: 33px;
          background-size:100% 100%; 
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
      &:hover .join-game-btn{
        opacity: 1;
      }
   
    }

    .home-list-item:hover .qr-code-container{
      opacity: 1;
    }
    

    li:hover {
      background-position-y: bottom;
    }

    .aa {
      background-image: url(/static/qygj/img/buyu/bugj_01.png);
    }

    .ab {
      background-image: url(/static/qygj/img/buyu/bugj_02.png);
    }

    .ac {
      background-image: url(/static/qygj/img/buyu/bugj_03.png);
    }

    .ad {
      background-image: url(/static/qygj/img/buyu/bugj_04.png); 
    }

    .ae {
      background-image: url(/static/qygj/img/buyu/bugj_05.png);
    }

    .af {
      background-image: url(/static/qygj/img/buyu/bugj_06.png);
    }

    .ag {
      background-image: url(/static/qygj/img/buyu/bugj_07.png);
    }

    .ah {
      background-image: url(/static/qygj/img/buyu/bugj_08.png);
    }

    .ba {
      background-image: url(/static/qygj/img/buyu/bugj_09.png);
    }

    .bb {
      background-image: url(/static/qygj/img/buyu/bugj_10.png);
    }

    .bc {
      background-image: url(/static/qygj/img/buyu/bugj_11.png);
    }

    .bd {
      background-image: url(/static/qygj/img/buyu/bugj_12.png);
    }
    .be {
    background-image: url(/static/qygj/img/buyu/bugj_13.png);
    }
    .bf {
    background-image: url(/static/qygj/img/buyu/bugj_14.png);
    }
    .bg {
      background-image: url(/static/qygj/img/buyu/bugj_15.png);
    }
   
  }
  .home-list-wrap:nth-child(even){
    margin-left:20px;
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
    padding:50px 0 50px;
    max-width: 1920px;
    min-width: 1200px;
    margin:0 auto;
    background:#eaeaea url(/static/qygj/img/live/image_2019_02_18T01_12_35_435Z.png) repeat-y center bottom
  }
   .night{
      background: rgba(18,21,66,.8)
  }
</style>

