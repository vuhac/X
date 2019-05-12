<template>
    <div>
        <div class='header_bg'></div>
        <div class="sports_main">
          <div class="sport_banner">
            <img src="/static/pjyl/img/pjyl/tiyubanner.jpg" />
            <vp-new-notice />
          </div>
          <div class="bgwrapper">
          


           <div class="wrapper wraap2">
            <ul class="sportsBox">
              <!-- <li v-for="(item,i) in buyuData" :key="i">
                <div class="cover_hover"></div>
                <div
                  class="cover"
                  :style="{backgroundImage: 'url(' + item.img + ')'}"
                  :class="{bbinMargin:item.name =='BBIN体育'}"
                ></div>
                <div class="title">
                  <h2>{{item.name}}</h2>
                  <h3>{{item.content}}</h3>
                </div>
                <p>
                  <a class="btn" @click="getItemId(item)">开始游戏</a>
                </p>
                <p>
                  <a class="btn_ag" @click="getItemId(item)" href="javascript:void(0)">游戏说明</a>
                </p>
              </li> -->

              <li class="sportitem" v-for="(item,i) in buyuData" :key="i">
                 <img :src="item.img" />
                 <div class="coverbg">
                    
                 </div>
                 <div class="goGame">
                    <a class="btn" @click="getItemId(item)">开始游戏</a><br><br><br><br>
                    <a class="btn_ag" @click="getItemId(item)" href="javascript:void(0)">游戏说明</a>
                 </div>
              </li>
            </ul>
          </div>
          </div>
         
      </div>
    </div>
</template>

<script>
import store from "@/vuex/store";
import $ from "jquery";
import mixin from "../../../public/games/public.js";
import vpNewNotice from '../news.vue'

export default {
  mixins: [mixin],
  data() {
    return {
      buyuData: [
        {
          name: "皇冠体育",
          img: "/static/pjyl/img/pjyl/huangguan_sport.png",
          content: "简单操作，自由编排",
          platform: "sport",
          gameName: "21",
          id:21
        },
        {
          name: "BBIN体育",
          img: "/static/pjyl/img/pjyl/bbin_sport.png",
          content: "全新竞技 多种体验",
          platform: "sport",
          gameName: "41",
          id:41
        },
        {
          name: "AG体育",
          img: "/static/pjyl/img/pjyl/AG_sport.png",
          content: "经典玩法 玩法丰富",
          platform: "sport",
          gameName: "22",
          id:22
        },
        {
          name: "沙巴体育",
          img: "/static/pjyl/img/pjyl/saba_sport.png",
          content: "各式赔率，一触即发",
          platform: "sport",
          gameName: "20",
          id:20
        }
      ],
      clientwidth:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    };
  },
  methods: {

  },
  created() {},
  components: {
      // vpHomeLive
      vpNewNotice
  }
};
</script>
<style lang="less" scoped>
.header_bg{
    position: relative;
    margin-top: -120px;
    height: 120px;
    z-index: -99;
}
.sportsBox:after{
  clear:both;
  content:'';
  display:block;
}

.sportitem{
  float:left;
  width:590px;
  position:relative;
  margin-bottom:15px;
  img{
    width:100%;
  }
  .coverbg{
    position:absolute;
    top:28px;
    left:0;
    bottom:0;
    right:0;
    background:#000;
    opacity:.4;
    display:none;

  }
  .goGame{
    position: absolute;
    top: 28px;
    z-index: 999;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display:none;
    .btn{
      width: 171px;
      height: 44px;
      line-height: 44px;
      text-align:center;
      position:absolute;
      left:50%;
      top:115px;
      transform:translateX(-50%);
      color: #fff;
      background-color: rgba(117, 68, 217, 0.85);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#D97544D9', endColorstr='#D97544D9', GradientType=0);
      border-radius: 30px;
    }
    .btn_ag{
      width: 171px;
      height: 44px;
      line-height: 44px;
      text-align:center;
      position:absolute;
      left:50%;
      bottom:115px;
      color: #fff;
      transform:translateX(-50%);
      background-color:rgba(77 , 71, 194,0.7);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#D97544D9', endColorstr='#D97544D9', GradientType=0);
      border-radius: 15px;
    }
    .btn:hover{
      background:rgba(77 , 71, 194);
    }
    .btn_ag:hover{
      background:rgba(117, 68, 217);
    }
  }
}
.sportitem:nth-child(odd){
  margin-right:20px;
}
.sportitem:hover .coverbg,.sportitem:hover .goGame{
  display:block;
}
.sports_main {
  position: relative !important;
  min-height: 1038px;
  .sport_banner{
    width:100%;
    background:#000;
    height:300px;
    position:relative;
    img{
      height:300px;
      margin:0 auto;
      position:absolute;
      left:50%;
      transform:translateX(-50%)
    }
  }

  /deep/ .newgong{
    position: absolute;
    bottom: -41px;
  } 

  .bgwrapper{
    width:100%;
    padding-top:90px;
    background:#c89752 url(/static/pjyl/img/pjyl/content_bg.jpg) no-repeat top center;
  }

  // .wrapper {
  //   width: 1200px;
  //   height: 100%;
  //   display: table;
  //   ul {
  //     display: table-cell;
  //     li {
  //       width: 49%;
  //       height: auto;
  //       float: left;
  //       position: relative;
  //       text-align: center;

  //       .cover_hover {
  //         content: "";
  //         position: absolute;
  //         top: 0;
  //         left: 0;
  //         width: 100%;
  //         height: 390px;
  //         z-index: 20;
  //         cursor: pointer;
  //       }

  //       .cover {
  //         width: 100%;
  //         height: 390px;
  //         background-position: center center;
  //         background-repeat: no-repeat;
  //         transition: all 0.3s ease-in;

  //         z-index: 10;
  //       }
  //       .bbinMargin {
  //         background-position: center -5px;
  //       }

  //       .cover_hover:hover + .cover {
  //         transform: rotateY(180deg);
  //       }

  //       .cover_hover:hover ~ .title {
  //         animation: titleSlide 0.3s linear;
  //       }

  //       .title {
  //         position: absolute;
  //         left: 55px;
  //         top: 30px;
  //         color: #fff;
  //         text-align: left;

  //         h2 {
  //           font-size: 24px;
  //           line-height: 2;
  //         }

  //         h3 {
  //           font-size: 14px;
  //           line-height: 1.5;
  //           font-weight: normal;
  //         }
  //       }

  //       p {
  //         margin-top: 20px;

  //         a {
  //           display: inline-block;
  //           // width: 280px;
  //           width: 260px;
  //           height: 54px;
  //           line-height: 54px;
  //           text-align: center;
  //           color: #fff;
  //           font-size: 22px;
  //           box-sizing: border-box;
  //           border: 2px solid #fd7328;
  //           background: #fd7328;
  //           border-radius: 6px;
  //         }

  //         .btn_ag {
  //           color: #4d8ffa;
  //           border-color: #4d8ffa;
  //           background: transparent;
  //         }

  //         .btn_ag:hover {
  //           border-color: #74a6ff;
  //           color: #74a6ff;
  //           background: transparent;
  //         }
  //       }
  //     }
  //   }
  // }
  // .wrapper {
  //   width: 1200px;
  //   float: right;
  //   padding-top: 250px;
  //   padding-left: 60px;
  // }
  .wraap2 {
    width:1200px;
    margin:0 auto;
    // position: absolute;
    // top: 300px;
    // left:50%;
    // transform:translateX(-50%);
  }
  // .wraap3 {
  //   position: absolute;
  //   top: 250px;
  // }
}
@keyframes titleSlide {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(20px);
    opacity: 0;
  }
  51% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
