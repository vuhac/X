<template>
  <div class="new-index pjyl-home" >
    


      <!-- <div class="carouse">
        <el-carousel :interval="5000" arrow="never" height="530px" style="overflow:visible;">
          <el-carousel-item v-for="(item,i) in carouselData" :key="i">
            <a :href="item.targets" target="_blank" v-if="item.targets !=='#'">
              <img :src="item.img" alt>
            </a>
            <img :src="item.img" alt v-else>
          </el-carousel-item>
        </el-carousel>
      </div> -->

      <!-- 新轮播图接口写法 -->
      <div class="carouse" >
        <el-carousel :interval="5000" arrow="never" height="530px" style="overflow:visible;">
          <el-carousel-item v-for="(item,i) in carouselData" :key="i">
            <!-- 线下本地，没有图片的写法 -->
            <!-- <a href="javascript:void(0)" @click="bannerGo(item)">
              <img :src="item.newPic" alt="">
            </a> -->

            <!-- 正式上线后写法 -->
            <a href="javascript:void(0)" @click="bannerGo(item)">
              <img :src="item.img" alt="">
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="newgong">
        <div class="newgong-content">
          <div class="notice">
            <!-- <i class="iconfont icon-sound"></i> -->
            <img src="/static/pjyl/img/pjyl/index/news.png" alt="">
          </div>

          <div class="demolist list">
            <marquee
              v-if="lantern"
              align="middle"
              direction="left"
              loop="-1"
              scrollamount="3"
              onmouseout="this.start()"
              onmouseover="this.stop()"
              style="color: white; font-size: 14px; line-height: 36px;overflow: hidden;height: 36px;"
            >
              <span v-html="lantern"></span>
            </marquee>
          </div>
        </div>
      </div>


      <div class="stepDiv">
          <div id="step"></div>
      </div>

      <div class="gamesBox">
        <div class='gamesContent'>
          <div style='width:900px;margin:0 auto;height:130px;position:relative;overflow:hidden;'> 

            <ul class="gameUl " style='left:0;' id="gameUl">
              <li v-for="(item,index) in gameData" :key="index">
                <a href="javascript:void(0)" @click="loginFame(item)">
                    <img :src="item.id|capitalize" alt="" style="width:100%;height:100%;" />
                </a>
              </li>
            </ul>
            

          </div>
          <div class="arrowBox">
              <span class="prepSpan" @click="btnOpt(1)"></span>
              <span class="nextSpan" @click="btnOpt(2)"></span>
          </div>
        </div>
      </div>
      <div class='upPic'>

          <div id="slot" class="wrapper">
              <div class="slot01"></div>
              <div class="slot02"><a href="#/plays/hall"></a></div>
            
              
              <ul class="game-list">
                <li v-for="(item,index) in contentList" :key="index" :class="item.className">
                  <a href="javascript:void(0)" @click="goLink(item)"></a>
                </li>
              </ul>
          </div>
      </div>


    <Modal :scrollable=true title="网站公告" ok-text="关闭" v-model="showPopout" width="657" class="vp-popout-box">
      <div class="popout-box">
        <span v-html="popups"></span>
      </div>
    </Modal>

    <!-- <vp-mc :imgsrc="imgsrc"></vp-mc> -->
  </div>
</template>

<script>
// import $ from "jquery";
// import vpMc from "./mc"

import store from "@/vuex/store";
import "@/assets/iconfont/pjyl/iconfont.css";
import "@/service/public/util.js";
// import '/static/img/pjyl/font/iconfont.css'
import data from "../../public/games/public.js";
import { _SetGet, _SetPost } from "@/service/public/service.js";


export default {
  mixins: [data],
  data() {
    return {
      publicUrl:"http://img.7900005.com/",
      rollList:[
        {
          name:"",
          imgsrc:"/static/pjyl/img/pjyl/contentPic/kg01.png",
          link:''
        },
        {
          name:"",
          imgsrc:"/static/pjyl/img/pjyl/contentPic/kg02.png",
          link:''
        },
        {
          name:"",
          imgsrc:"/static/pjyl/img/pjyl/contentPic/kg03.png",
          link:''
        },
        {
          name:"",
          imgsrc:"/static/pjyl/img/pjyl/contentPic/kg04.png",
          link:''
        },
        {
          name:"",
          imgsrc:"/static/pjyl/img/pjyl/contentPic/kg05.png",
          link:''
        },
        {
          name:"",
          imgsrc:"/static/pjyl/img/pjyl/contentPic/kg06.png",
          link:''
        },
        {
          name:"",
          imgsrc:"/static/pjyl/img/pjyl/contentPic/kg07.png",
          link:''
        },
        {
          name:"",
          imgsrc:"/static/pjyl/img/pjyl/contentPic/kg08.png",
          link:''
        },
        {
          name:"",
          imgsrc:"/static/pjyl/img/pjyl/contentPic/kg09.png",
          link:''
        },
        {
          name:"",
          imgsrc:"/static/pjyl/img/pjyl/contentPic/kg10.png",
          link:''
        },
        {
          name:"",
          imgsrc:"/static/pjyl/img/pjyl/contentPic/kg11.png",
          link:''
        },
        {
          name:"",
          imgsrc:"/static/pjyl/img/pjyl/contentPic/kg12.png",
          link:''
        },

      ],
      gameData:[
        {id: 3630, name: '5分赛车PK10', code: 'wfsc', 'series': 'pk10',gameType:"lottery"},
        {id: 13, name: '3分赛车PK10', code: 'sfsc', 'series': 'pk10',gameType:"lottery"},
        {id: 2, name: '北京赛车PK10', code: 'bjsc', 'series': 'pk10',gameType:"lottery"},
        {id: 3, name: '幸运飞艇', code: 'xyft', 'series': 'pk10',gameType:"lottery"},
        {id: 12, name: '快速赛车PK10', code: 'kssc', 'series': 'pk10',gameType:"lottery"},

        {
          classId: 42,
          className: "开元棋牌",
          code: "1",
          devices: "ios,h5,pc,android",
          id: 3605,
          name: "百人牛牛",
          platform: "chess",
          sequence: 20,
          special_setting: '{"platform":"KY_CHESS", "gameName":"1"}',
          status: "yes",
          tag: "HOT",
          show:true
        },
         {
          classId: 42,
          className: "开元棋牌",
          code: "1",
          devices: "ios,h5,pc,android",
          id: 3603,
          name: "百家乐",
          platform: "chess",
          sequence: 20,
          special_setting: '{"platform":"KY_CHESS", "gameName":"1"}',
          status: "yes",
          tag: "HOT",
          show:true
        },
         {
          classId: 42,
          className: "开元棋牌",
          code: "1",
          devices: "ios,h5,pc,android",
          id: 247,
          name: "德州扑克",
          platform: "chess",
          sequence: 20,
          special_setting: '{"platform":"KY_CHESS", "gameName":"1"}',
          status: "yes",
          tag: "HOT",
          show:true
        },
         {
          classId: 42,
          className: "开元棋牌",
          code: "1",
          devices: "ios,h5,pc,android",
          id: 244,
          name: "斗地主",
          platform: "chess",
          sequence: 20,
          special_setting: '{"platform":"KY_CHESS", "gameName":"1"}',
          status: "yes",
          tag: "HOT",
          show:true
        },
         {
          classId: 42,
          className: "开元棋牌",
          code: "1",
          devices: "ios,h5,pc,android",
          id: 256,
          name: "十三水",
          platform: "chess",
          sequence: 20,
          special_setting: '{"platform":"KY_CHESS", "gameName":"1"}',
          status: "yes",
          tag: "HOT",
          show:true
        },
         {
          classId: 42,
          className: "开元棋牌",
          code: "1",
          devices: "ios,h5,pc,android",
          id: 246,
          name: "炸金花",
          platform: "chess",
          sequence: 20,
          special_setting: '{"platform":"KY_CHESS", "gameName":"1"}',
          status: "yes",
          tag: "HOT",
          show:true
        },




      ],

      contentList:[
            {
              name:"彩票游戏",
              className:"lottery",
              link:"/plays/hall"
            },
            {
              name:"棋牌游戏",
              className:"board",
              link:"/home/games?id=42&name=开元棋牌"
            },
            {
              name:"真人视讯",
              className:"live",
              link:"/home/live"
            },
            {
              name:"捕鱼达人",
              className:"fish",
              link:"/home/buyu"
            },
            {
              name:"电子游艺",
              className:"slot",
              link:"/home/games?id=26&name=MG老虎机"
            },  
      ],
      timer:null,
      showPopout: true,
      imgsrc: "/static/pjyl/img/qpssq.png",
      imgdata: [
        "/static/pjyl/img/pcAlert1.png",
        "/static/pjyl/img/pcAlert2.png",
        "/static/pjyl/img/pcAlert3.png"
      ],
      popups: "",
      lantern: "",
      carouselData: [],
      downloadAppTarget: ""
    };
  },
  methods: {
    // 需要解析再登录，如第三方电子,需要解析
    loginFame (item) {
      console.log(item)
      if(item.gameType=="lottery"){
          if(localStorage.token){
                 if(localStorage.Public_User=='test' ){
                  //  this.dNotify("彩票暂无试玩,立即注册", "error")
                   alert("彩票暂无试玩,立即注册")

               }else{
                 if (item.id) {
                  this.$router.push(`/plays/tradition/${item.id}`)
                  return false
                }
               }
            }else{
                //  this.dNotify("请先登录", 'error')
                 alert("未登录")

            }

      }else{
          this.loginGame(item)
      }

      
    },



        //获取数据
    // async getData(item) {
    //   this.gameData = [];
    //   let res = await _SetPost(`${this.$HOST_NAME}/games/pages`, {
    //     classId: 42,
    //     devices: "pc",
    //     page: 1,
    //     tag: "",
    //     name: ""
    //   });
    //   if (res && res.code === 200) {
    //     console.log(res.data.data);
    //     this.gameData = res.data.data;
    //     this.total = res.data.last_page;
    //   }
    //   console.log(this.gameData)
    // },

    //获取数据
    async getData(item) {
      this.gameData = [];
      let id=this.$route.query.id
      let res = await _SetPost(`${this.$HOST_NAME}/gameSortNew`, {
          device: "pc",
          id
      });
      if (res && res.code === 200) {
        console.log(res.data.data);
        this.gameData = res.data[id];
        this.total = res.data.last_page;
      }
    },


    btnOpt(num){
      this.timer=null;
      let jumpNum=0;
      let oUl=document.getElementById("gameUl");
      let oWidth=oUl.offsetWidth;
      let minLeft=900-oWidth;

      let oLeft=parseInt(oUl.style.left);

      console.log(oWidth)
      if(num==1){
        // 左
        jumpNum=-151;
      }else if(num==2){
        // 右
        jumpNum=151;
      }
      oLeft+=jumpNum;

      if(oLeft<minLeft){
        // 最左边
        oLeft=0;
      }
      if(oLeft>1){
        oLeft=0;
      }


      oUl.style.left=oLeft+"px";
    },
    // 内容跳转
    goLink(item) {
      console.log("golink")
      if (item.link) {
        if (item.link == "service") {
          let service = JSON.parse(localStorage.config).service;
          if (service) {
            let ser = service.find(item =>item.status === 'on')
            if (ser) {
              window.open(ser.url);
            }
          }
        } else if (item.link == "/plays/hall") {
             window.open("#/plays/hall");
             return false; 
        }else {
          this.$router.push(item.link);
        }
      } else if (item.gameName) {
        this.trustLogin(item);
      }
    },




    //获取banner新接口
    async getBanner () {
      let res = await this.$http.post(`${this.$HOST_NAME}/site/newPosition`, {
        position: 'banner',
        clientType: 'pc'
      })
      if (res && res.code == 200) {
        // 加判断，防止没有轮播图数据返回时的情况
        if(res.data[0]){
          this.carouselData = res.data[0] && res.data[0].body
          this.downloadAppTarget = res.data[0] && res.data[0].downloadAppTarget
          // console.log(this.carouselData);
          // console.log(this.downloadAppTarget)
          this.carouselData&&this.carouselData.forEach((item,index)=>{
            item.newPic="/static/test/img/0425test/banner"+(index+1)+".jpg";
          })
        }else{
          console.log("轮播接口没有数据返回")
        }
      }

    },
          
    // 新文字走马灯接口
    async getLantern () {
      let res = await this.$http.post(`${this.$HOST_NAME}/site/newNotice`, {
        type: 'lantern',
        // desc_client_type: 'html'
        client_type:"PC"
      })
      if (res && res.code == 200) {
        // if (!res.data.data.length) return false
        // this.lantern = res.data.data[0] && res.data.data[0].description

        if(res.data.data.length){
          this.lantern = res.data.data[0] && res.data.data[0].description
        }else{  
          console.log("文字走马灯没有数据返回")
          return false;
        }

      }
      // 参数： type: lantern 走马灯
      // 参数： type: popups 弹窗
      // 参数： type: notice 提示
    },

  },
  created() {
    // this.getData();
    // 进入页面自动，进行滚动
    // this.timer=setInterval(() => {
    //   this.btnOpt(1)
    // }, 2500);

    const timer = setInterval(() =>{                    
        // 某些定时器操作   
        this.btnOpt(1)             
    }, 2500);            
    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
    this.$once('hook:beforeDestroy', () => {            
        clearInterval(timer);                                    
    })
  
    this.showPopout=false;
    // this.getPopout1();
    this.getBanner();
  },
  mounted() {
    this.getLantern();

// 获取域名
    if (localStorage.config) {
      let config = JSON.parse(localStorage.config);
      this.publicUrl = config.statics;
    }
    
  },
   filters: {
    capitalize: function (value) {
      try {
      //  return `/static/public/image/lottery/ico/vp-${ value.includes('赛车')? (value.includes('PK10') ? value : value + 'PK10'):value}.png`
      return `/static/pjyl/img/pjyl/contentPic/${value}.png`
      } catch (err) {
        return false
      }

    }
  },
  // components:{
  //     vpMc
  // },
  // destroyed(){
  //   clearInterval(this.timer);
  //   this.timer=null
  // }, 

  store
};
</script>

<style lang="less" >

    .stepDiv{

      #step{
        height: 142px;
        background: #ffdba9 url(/static/pjyl/img/pjyl/index/steps.png) center no-repeat;

      }
    }

    .gamesBox{
      .gamesContent{
            margin-bottom: 20px;
            padding-top: 90px;
            text-align: center;
            width: 1000px;
            margin: 0 auto;
            position:relative;
            background: url(/static/pjyl/img/pjyl/index/board_title.png) center 20px no-repeat;
            overflow:hidden;
            .gameUl{
              width: 1661px;
              height: 130px;
              /* margin: 0 auto; */
              position: absolute;
              transition:all .3s ease;
              // left: 40px;
              li{
                float: left;
                width:135px;
                height:130px;
                // background:#eee;
                margin:0 8px;
                // border:1px solid #eee;
                box-sizing: border-box;
              }
            }

            .arrowBox{
              width:100%;
              span{
                width:40px;
                height:40px;
                position:absolute;
                top:135px;
                cursor:pointer;
              }
              .prepSpan{
                left:0;
                background:url(/static/pjyl/img/pjyl/index/arrow_left.png) ;
                &:hover{
                  background-position:center bottom;
                }
              } 
              .nextSpan{
                right:0;
                background:url(/static/pjyl/img/pjyl/index/arrow_right.png) ;
                &:hover{
                  background-position:center bottom;
                }
              }
            }
      }
    }
    .upPic{
      margin-top:30px;
        #slot {
            text-align: center;
              .game-list {
                  font-size: 0;
                  li{
                    display: inline-block;
                    width: 196px;
                    height: 113px;
                    background-position: center top;
                    background-repeat: no-repeat;
                    background-image: url(/static/pjyl/img/pjyl/index/slot_ag.png);
                    a {
                        display: block;
                        height: 100%;
                    }
                    &:hover{
                      background-position:center bottom;
                    }
                  }
                  li+li{
                    margin-left:4px;
                  }
                  li.slot {
                      background-image: url(/static/pjyl/img/pjyl/index/slot.jpg);
                  }
                  li.board {
                      background-image: url(/static/pjyl/img/pjyl/index/board.jpg);
                  }
                  li.fish {
                      background-image: url(/static/pjyl/img/pjyl/index/fish.jpg);
                  }
                  li.live {
                      background-image: url(/static/pjyl/img/pjyl/index/live.jpg);
                  }
                  li.lottery {
                      background-image: url(/static/pjyl/img/pjyl/index/lottery.jpg);
                  }
              }
        }
        .wrapper {
            position: relative;
            width: 1000px;
            margin: 0 auto;
        }
        .slot01, .slot02 {
            display: inline-block;
            width: 489px;
            height: 222px;
            margin-bottom: 20px;
            background: url(/static/pjyl/img/pjyl/01.jpg);
        }
        .slot02 {
            margin-left: 13px;
            background: url(/static/pjyl/img/pjyl/02.jpg);
            a {
                display: block;
                height: 100%;
            }
        }
    }







.alert-img {
  /deep/ .ivu-modal-content {
    background-color: transparent;
    // background:none;
  }
}
.new-index {
  position: relative;
  // max-width: 1920px;
  // min-width: 1200px;
  margin: 0 auto;
  background: #c89752;

  .newgong {
    // position: absolute;
    height: 36px;
    width: 100%;
    top: 0;
    left: 0;
    // background: rgba(0, 0, 0, 0.4);
    z-index: 12;

    .newgong-content {
      width: 1000px;
      height: 36px;
      margin: 0 auto;
      position:relative;
      .notice {
        display: inline-block;
        float: left;
        position: absolute;
        top: -18px;
        left: -9px;
        margin-right: 50px;
        z-index: 8;
        i {
          color: #fff;
          font-size: 23px;
        }
      }

      .demolist {
        display: inline-block;
        width: 990px;
        padding-left:70px;
      }
      /deep/.el-carousel{
        overflow:visible;
      }
    }
  }

  .carouse {
    text-align: center;
    width: 100%;
    overflow:hidden;
    /deep/.el-carousel{
      overflow-x:unset;
    }


    /deep/ .el-carousel__indicators {
      bottom: 5px;
    }

    /deep/ .el-carousel__button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }

  .downLoad-wrap {
    zoom: 1;
    width: 1200px;
    margin: 0 auto;
    padding-top: 22px;
    padding-bottom: 22px;

    .download {
      width: 330px;
      font-size: 14px;
      display: inline-block;
      margin-right: 15px;

      .app_part,
      .down_part {
        padding-top: 28px;
        float: left;
        width: 165px;
        height: 150px;
        // line-height: 150px;
        position: relative;
        background: #b48c68;
        text-align: center;
        font-size: 18px;
        color: #fff;
        transition: all 0.5s;
        cursor: pointer;

        &:hover {
          background: #ff5555;
        }

        i {
          font-size: 62px;
        }

        h3 {
          padding-top: 15px;
        }
      }

      .down_part {
        background: #b59f85;
        float: right;
      }
    }

    .jackpots {
      display: inline-block;
      width: 850px;
      height: 150px;
      background: url("/static/pjyl/img/jackpot_in1.jpg") no-repeat center,
        url("/static/pjyl/img/jackpot_out1.jpg") no-repeat;
      position: relative;
      -webkit-animation: bg 0.5s linear infinite;
      -o-animation: bg 0.5s linear infinite;
      -moz-animation: bg 0.5s linear infinite;
      animation: bg 0.5s linear infinite;
      @-webkit-keyframes bg {
        0% {
          background: url("/static/pjyl/img/jackpot_in1.jpg") no-repeat center,
            url("/static/pjyl/img/jackpot_out1.jpg") no-repeat;
        }
        100% {
          background: url("/static/pjyl/img/jackpot_in1.jpg") no-repeat center,
            url("/static/pjyl/img/jackpot_out2.jpg") no-repeat;
        }
      }
      @-moz-keyframes bg {
        0% {
          background: url("/static/pjyl/img/jackpot_in1.jpg") no-repeat center,
            url("/static/pjyl/img/jackpot_out1.jpg") no-repeat;
        }
        100% {
          background: url("/static/pjyl/img/jackpot_in1.jpg") no-repeat center,
            url("/static/pjyl/img/jackpot_out2.jpg") no-repeat;
        }
      }
      @-o-keyframes bg {
        0% {
          background: url("/static/pjyl/img/jackpot_in1.jpg") no-repeat center,
            url("/static/pjyl/img/jackpot_out1.jpg") no-repeat;
        }
        100% {
          background: url("/static/pjyl/img/jackpot_in1.jpg") no-repeat center,
            url("/static/pjyl/img/jackpot_out2.jpg") no-repeat;
        }
      }
      @-ms-keyframes bg {
        0% {
          background: url("/static/pjyl/img/jackpot_in1.jpg") no-repeat center,
            url("/static/pjyl/img/jackpot_out1.jpg") no-repeat;
        }
        100% {
          background: url("/static/pjyl/img/jackpot_in1.jpg") no-repeat center,
            url("/static/pjyl/img/jackpot_out2.jpg") no-repeat;
        }
      }
      @keyframes bg {
        0% {
          background: url("/static/pjyl/img/jackpot_in1.jpg") no-repeat center,
            url("/static/pjyl/img/jackpot_out1.jpg") no-repeat;
        }
        100% {
          background: url("/static/pjyl/img/jackpot_in1.jpg") no-repeat center,
            url("/static/pjyl/img/jackpot_out2.jpg") no-repeat;
        }
      }

      .light {
        height: 150px;

        .jackpots_model {
          position: absolute;
          top: -33px;
          left: -39px;
        }

        .jackpot-title {
          float: left;
          padding: 47px 1% 47px 12.5%;
        }

        .jackpot-number {
          float: left;
          line-height: 150px;
          font-size: 52px;
          color: #fff;
          font-weight: 600;
          // letter-spacing: 4px;
          span {
            display: inline-block;
            float: left;
          }
        }

        .jackpots_bar {
          position: absolute;
          top: -5px;
          right: -60px;
        }
      }
    }
  }

  .kelake-bot-wrap {
    width: 1200px;
    margin: 0 auto;
    zoom: 1;
    overflow: hidden;

    .section_title {
      padding-left: 20px;
      background: #b48c68;
      line-height: 50px;
      color: #fff;

      .type {
        float: right;
        margin-right: 35px;

        li {
          display: inline-block;
          vertical-align: top;
          font-size: 14px;
          letter-spacing: normal;
          zoom: 1;
          height: 20px;
          margin: 16px -12px 0 15px;
          padding: 0 12px;
          line-height: 20px;
          border-radius: 15px;
          background: #b48c68;
          color: #fff;

          &.active {
            background: #fff;
            color: #b48c68;
          }

          // margin: 0px 2px;
          // display: inline-block;
          a {
            //   font-size: 15px;
            //   display: inline-block;
            //   color: #fff;
            //   height: 20px;
            //   line-height: 20px;
            //   padding: 0 10px;
            //   border-radius: 16px;
            color: #fff;

            &.active {
              background: #fff;
              color: #b48c68;
            }
          }
        }
      }
    }

    .game-list-left {
      position: relative;
      height: 985px;
      width: 330px;
      background: #fff;
      margin-bottom: 20px;
      float: left;

      .topLoop {
        ul {
          height: 931px;
          overflow: hidden;

          .wrap {
            position: relative;
            top: 0;
            -webkit-animation: animateSub 120s linear infinite;
            -o-animation: animateSub 120s linear infinite;
            -moz-animation: animateSub 120s linear infinite;
            animation: animateSub 120s linear infinite;
            // @-webkit-keyframes animateSub {
            //     0% {bottom:30px}
            //     50% {bottom:10px}
            //     100%{bottom:30px}
            // }
            // @-moz-keyframes animateSub {
            //     0% {bottom:30px}
            //     50% {bottom:10px}
            //     100%{bottom:30px}
            // }
            // @-o-keyframes animateSub {
            //     0% {bottom:30px}
            //     50% {bottom:10px}
            //     100%{bottom:30px}
            // }
            // @-ms-keyframes animateSub {
            //     0% {bottom:30px}
            //     50% {bottom:10px}
            //     100%{bottom:30px}
            // }
            @keyframes animateSub {
              0% {
                top: 0;
              }
              100% {
                top: -5000px;
              }
            }

            li {
              padding: 20px 20px 0;
              border-bottom: 2px solid #f1f1f1;
              height: 100px;
              width: 100%;

              .gamepic {
                width: 66px;
                height: 66px;
                float: left;
                margin-right: 15px;

                img {
                  width: 100%;
                  height: 100%;
                }
              }

              .wintext {
                width: 200px;
                float: left;
                font-size: 12px;
                color: #555;

                div {
                  padding-bottom: 6px;

                  span {
                    color: red;
                  }
                }
              }
            }
          }
        }
      }
    }

    .game-list-right {
      float: right;
      position: relative;
      width: 850px;

      .game-bg {
        overflow: hidden;
        position: relative;

        &:hover {
          .item_list {
            display: block;
          }

          &::before {
            content: "";
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.6);
            -webkit-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
        }

        .item_list {
          display: none;
          text-align: center;

          .item {
            position: relative;
            display: inline-block;
            color: #fff;
            cursor: pointer;

            .ball {
              width: 64px;
              height: 64px;
              border-radius: 99em;
              border: 1px solid #fff;
              font-size: 18px;
              line-height: 64px;
              text-align: center;
              margin-bottom: 10px;
              -moz-transition: transform 0.5s ease;
              -webkit-transition: transform 0.5s ease;
              -o-transition: transform 0.5s ease;
              transition: transform 0.5s ease;
              display: inline-block;
            }

            &.loy {
              padding-top: 50px;

              &:first-child {
                padding-right: 50px;
              }
            }

            &:hover {
              .ball {
                background: #fd4747;
                border: 1px solid #fd4747;
                transform: rotate(360deg);
              }
            }
          }
        }
      }

      .all {
        position: relative;

        .arrow {
          position: absolute;
          top: 0;
          height: 100%;
          z-index: 2;
          width: 15px;
          cursor: pointer;

          &.left {
            left: 0;
          }

          &.right {
            right: 0;
          }

          .bg-arrow_left {
            width: 15px;
            height: 23px;
            position: absolute;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            background: url(/static/pjyl/img/arrow_sprites.png) -10px -10px;
          }

          .bg-arrow_right {
            width: 15px;
            height: 23px;
            position: absolute;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            background: url(/static/pjyl/img/arrow_sprites.png) -45px -10px;
          }
        }

        .all-vrL {
          position: relative;
          height: 155px;
          overflow: hidden;

          .type-ul {
            text-align: center;

            .type-li {
              position: relative;
              overflow: hidden;
              display: inline-block;
              margin: 20px 6px;
              cursor: pointer;

              &:hover {
                .mask {
                  top: 0;
                }
              }

              .mask {
                position: absolute;
                top: -110px;
                left: 0;
                width: 116px;
                height: 110px;
                background-color: rgba(0, 0, 0, 0.6);
                -webkit-transition: all 0.3s ease;
                -o-transition: all 0.3s ease;
                transition: all 0.3s ease;

                div {
                  display: block;
                  width: 75px;
                  height: 30px;
                  line-height: 30px;
                  background: #fd4747;
                  margin: 18px auto 16px;
                  border-radius: 5px;
                  font-size: 12px;

                  a {
                    color: #fff;
                  }
                }

                .play {
                  background: #b48c68;
                }

                &.active {
                  padding-top: 20px;
                }
              }

              .img {
                width: 116px;
                height: 110px;
                position: relative;
                overflow: hidden;

                img {
                  width: 100%;
                  height: 100%;
                }

                &.active {
                  img {
                    width: 200%;
                    height: 100%;
                  }
                }
              }

              .text {
                font-size: 14px;
                padding-top: 5px;
              }
            }
          }
        }
      }

      .slot_game {
        height: 200px;
        margin-bottom: 20px;
        background-image: url("/static/pjyl/img/game/slot_game.jpg");
        background-size: cover;

        .slot-vrL {
          height: 200px;

          .item_list {
            .item {
              padding-top: 60px;
              padding-left: 40px;
            }
          }
        }
      }

      .live_game {
        zoom: 1;
        overflow: hidden;

        .vrL {
          width: 100%;
          height: 180px;
          overflow: hidden;

          .item_list {
            .item {
              padding-top: 50px;
              padding-left: 5px;
              padding-right: 5px;
              // padding:0;
              &:last-child {
                // padding-right: 0;
              }
            }
          }

          .right {
            right: 0;
          }
        }

        .live {
          width: 559px;
          height: 180px;
          margin-right: 21px;
          overflow: hidden;
          position: relative;
          background-image: url("/static/pjyl/img/game/live_casino.jpg");
          float: left;
          background-size: cover;
        }

        .gym {
          width: 270px;
          height: 180px;
          overflow: hidden;
          position: relative;
          float: left;
          background-image: url("/static/pjyl/img/game/sports_events.jpg");
          background-size: cover;
        }
      }

      .fish_game {
        height: 180px;
        margin-top: 10px;
        background-image: url("/static/pjyl/img/game/fishing_game.jpg");
        background-size: cover;

        .item_list {
          .item {
            padding-right: 58px;

            &:last-child {
              padding-right: 0;
            }
          }
        }
      }

      .lottery_game {
        height: 180px;
        margin-top: 10px;
        background-image: url("/static/pjyl/img/game/lottery.jpg");
        background-size: cover;
      }
    }
  }
}

.guanbi img {
  position: relative;
}
.guanbi .ivu-modal-footer {
  display: none;
}
.guanbi .ivu-modal-body {
  padding: 0 !important;
  height: 425px;
}
.guanbi .ivu-modal-close {
  display: none;
}
.guanbi .ivu-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -453px;
  margin-top: -212px;
}
.guanbi .close {
  position: absolute;
  display: block;
  width: 40px;
  height: 40px;
  right: 100px;
  top: 80px;
  cursor: pointer;
}
</style>
