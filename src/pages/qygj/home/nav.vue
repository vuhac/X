  <template>
    <div class="top_nav" >
    <!-- <div class="top_nav" :class="{night:colorbool}"> -->
      <div class="nav-content">
        <div class="logo fl" style="margin-left: -50px;">
          <a href="javascript:void(0)" @click="goHome">
            <img src="/static/qygj/img/qy-logo1.png">
          </a>
        </div>
        <ul class="nav-bar fl">
          <li
            class="tpT"
            v-for="(item,i) in classifyList"
            :key="i"

          >
            <img src="/static/qygj/img/thirdparty/hot.gif" class="x-dh-i" alt v-if="item.hotShow">
            <!-- <a  @click="goLink(item,i)"  :class="[{navActive:i==gameIndex}, 'x-dh-t']"  > -->
            <a  @click="goLink(item,i)"  :class="[{navActive:i==gameIndex,fontColor:colorbool}, 'x-dh-t']"  >
              <span class="navName">{{item.name}}</span>
              <span class="navText">{{item.text}}</span>
              <i :class="{triangle:navChecked==i}"></i>
              <i class="triangle1"></i>


            </a>
            <div class="girl dropdown" v-if="item.list">
              <ol>
                <li v-for="(v,i) in item.list" :key="i" @click="thirdParty(v,item.platform)">
                  <a href="javascript:void(0)">
                    <img :src="v.img" width="37" height="21" alt v-if="v.img">
                    <span>{{v.name}}</span>
                    <br>
                  </a>
                </li>
              </ol>
            </div>
          </li>
        </ul>
      </div>
      <div class="carouse t-default" :class="{'bounceOut':$route.path=='/home'}"  v-if="$route.path==='/home'" style="cursor:pointer " >
        <swiper :options="swiperOption" v-if="showSwiper" height="530px" style="width:100%" ref="mySwiperA" >
            <swiper-slide v-for="(item,i) in carouselData" :key="i">
                <a :href="item.targets" target="_blank" v-if="item.targets !=='#'" :draggable="false">
                  <img :src="item.img" alt="" @drop="drop"  :draggable="false" style="display:block" >
                </a>
                <img :src="item.img" alt="" v-else :draggable="false" style="display:block" >
            </swiper-slide>
        </swiper>
        <!-- <div class="carouse t-default" :class="{'bounceOut':$route.path=='/home'}"  v-if="$route.path==='/home' ||$route.path.includes('/home/live') ||$route.path.includes('/home/qipai')||$route.path.includes('/home/caipiao') ||$route.path.includes('/home/games') ||$route.path.includes('/home/buyu')||$route.path.includes('/home/tiyu')" style="cursor:pointer " >
        <swiper :options="swiperOption" v-if="showSwiper" height="530px" style="width:100%" ref="mySwiperA" >
            <swiper-slide v-for="(item,i) in carouselData" :key="i">
                <a :href="item.targets" target="_blank" v-if="item.targets !=='#'" :draggable="false">
                  <img :src="item.img" alt="" @drop="drop"  :draggable="false" style="display:block" >
                </a>
                <img :src="item.img" alt="" v-else :draggable="false" style="display:block" >
            </swiper-slide>
        </swiper> -->
        <!-- <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,i) in carouselData" :key="i">
                  <a :href="item.targets" target="_blank" v-if="item.targets !=='#'" :draggable="false">
                  <img :src="item.img" alt="" @drop="drop"  :draggable="false" >
                   </a>
                  <img :src="item.img" alt="" v-else :draggable="false">
              </div>
          </div>
        </div> -->
      </div>
      <!-- <div class="carouse t-default" style="cursor:pointer " v-else>
          <vp-header-pic :headerImg="headerImg"></vp-header-pic>
      </div> -->


      <div class="newgong" v-if="$route.path==='/home'" :class="{youhuiActive:$route.path=='/home/youhui'}">
        <div class="newgong-content">
          <div class="notice">
            <i class="iconfont icon-sound"></i>
          </div>
          <div class="demolist list">
            <marquee v-if="lantern" align="middle" direction="left" loop="-1" scrollamount="3" onmouseout="this.start()"
                    onmouseover="this.stop()"
                    style="color:white; font-size:14px; line-height: 40px;overflow: hidden;height: 40px;font-weight:600">
              <span v-html="lantern"></span>
            </marquee>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import $ from "jquery";
  import data from "../../public/games/public.js";
  import vpHeaderPic from "./headerPic";
  export default {
    mixins: [data],
    data() {
      return {
        headerImg:'/',
        lantern:"",
        isHome:true,
        bannerIndex:4,
        isRegister:false,
        navChecked:0,
        gameIndex:0,
        carouselData:[],
        bounceTrue:false,
        checked:0,
        classifyList: [
          {
            name: "首页",
            text: "HOME",
            platform: "home",
            link: "/home",

          },
          {
            name: "真人视讯",
            text: "CASINO",
            link: "/home/live",
            platform: "live_casino",
          },
          {
            name: "棋牌游戏",
            text: "CHESS",
            platform: "KY_CHESS",
            link: "/home/qipai?id=10042&name=开元棋牌",
            gameName: "0",
            list: [
              {
                name: "开元棋牌",
                // gameName: "610",
                platform: "KY_CHESS",
                link: "/home/qipai?id=10042&name=开元棋牌",
              },
              {
                name: "VG棋牌",
                // gameName: "830",
                platform: "VG_CHESS",
                link: "/home/qipai?id=10041&name=VG棋牌",
              }
            ]
          },
          {
            name: "彩票游戏",
            text: "LOTTERY",
            platform: "CT_LOTTERY",
            link: "/home/caipiao",
            gameName: "0",
            // list: [
            //   {
            //     name: "传统彩票",
            //     // gameName: "610",
            //     platform: "CT_LOTTERY",
            //     link: "/plays/hall",
            //   },
            //   // {
            //   //   name: "VR彩票",
            //   //   // gameName: "830",
            //   //   platform: "VR_LOTTERY",
            //   //   link: "/home/games?id=10041&name=VG棋牌",
            //   // }
            // ]
          },
          {
            name: "电子游戏",
            text: "GAME",
            platform: "AG_GAME",
            link: "/home/games?id=10022&name=MG老虎机",
          },
          {
            name: "捕鱼游戏",
            text: "FISHING",
            link: "/home/buyu"
          },
          {
            name: "体育电竞",
            text: "SPORTS",
            platform: "sport",
            link:'/home/tiyu',
            list: [
              {
                name: "皇冠体育",
                id: "39"
              },
              {
                name: "沙巴体育",
                id: "38"
              },
              {
                name: "BBIN体育",
                id: "41"
              },
              {
                name: "AG体育",
                id: "40"
              }
            ]
          },
          {
            name: "优惠活动",
            text: "ACTIVETY",
            link: "/home/youhui"
          },
          {
            name: "在线客服",
            text: "SERVICE",
            link: "service"
          }
        ],
        swiperOption: {
              initialSlide:0,//设定初始化时slide的索引
              direction:'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
              loop: true,  //无限滚动
              speed:300,//滑动速度
              pagination: {
                el: '.swiper-pagination',
                clickable :true,
                clickableClass : 'my-pagination-clickable',
              },
              paginationClickable: true,
              centeredSlides: true,
              notNextTick: true,
              spaceBetween: 0,
              observeParents: true,
              observe:true,
              autoplay:true,
              mousewheelControl: true,
        },
        lantern: '',
        flag:0,
        getnightbool:false
      };

    },
    components: {
        swiper,
        swiperSlide
    },
    methods: {
      async getBanner () {
        let res = await this.$http.post(`${this.$HOST_NAME}/site/position`, {
          position: 'banner',
          clientType: 'pc'
        })
        if (res && res.code == 200) {
          this.carouselData = res.data[0] && res.data[0].body
          this.downloadAppTarget = res.data[0] && res.data[0].downloadAppTarget
        }
      },
      drop (event) {
         console.log('drop', event)
      },
      dragover (event) {
         event.preventDefault()
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
      setActiveItem1(e){
        this.flag = e.offsetX;
        console.log(this.flag)
      },
      setActiveItem2(e){
        console.log(e.offsetX)
        if(e.offsetX - this.flag >10){
          this.$refs.carousel.prev()
        }else if(e.offsetX - this.flag < -10){
          this.$refs.carousel.next()
        }
      },
      goHome() {
        this.$router.push("/home");
      },
      goLink(item,i) {
        this.gameIndex = i;
        this.navChecked =i;
        localStorage.setItem("navIndex",i)
        if (item.link) {
          if (item.link == "service") {
            let service = JSON.parse(localStorage.config).service;
            if (service) {
              let ser = service.find(item => item.status === 'on')
              if (ser) {
                window.open(ser.url);
              }
            }
          } else if (item.link == "/plays/hall") {
              window.open("#/plays/hall");
              return false;
          } else if(item.link == '/home/youhui'){
            this.$router.push(item.link)
          }else {
            this.$router.push(item.link);
          }
        } else if (item.gameName) {
          this.trustLogin(item);
        }
      },
      thirdParty(item, platform) {
        if (item.link == "/plays/hall") {
          window.open("#/plays/hall");
          return false;
        }
        else if(item.platform == "VR_LOTTERY"){
            if (!localStorage.token || !localStorage.userinfo) {
               this.$store.commit('alert/newshowtip',{
               bool:true,
               title:'未登录',
               model:'',
               leftspan:true
            })
              return false
            }else{
              this.getItemId({id:'30',platform:'vr_lottery',name:'VR彩票',})
            }
          }
        if (item.id) {
          this.getItemId(item);
        } else if (item.gameName) {
          this.trustLogin(item);
        } else if (item.num) {
          this.$router.push("/home/games?id=" + item.num);
        } else {
          this.$router.push(item.link);
        }
      }
    },
    watch:{
        '$route.path': function (newVal, oldVal) {
          this.$store.commit('mainState/getRoute',newVal)
          if (newVal === '/home') {
            this.gameIndex = 0
            this.navChecked = 0
          }
        },
        '$store.state.mainState.color': {
          handler: function(newer, older) {
              console.log('cccc')
              console.log(newer)
          },
          deep: true
        }
    },
    mounted() {
      this.getnightbool = this.$store.state.mainState.color;
      console.log(this.getnightbool)
      let routerSrc  = this.$store.state.mainState.routeSrc;
      this.navChecked =  this.gameIndex = localStorage.getItem("navIndex")
      if (routerSrc === '/home') {
          this.navChecked = 0
          this.gameIndex = 0
      }
      this.getLantern();
      setInterval(() => {
        $(".isColor:odd .x-dh-t").css("color", "rgb(0,255,0)");
        $(".isColor:odd .x-dh-b").css("color", "rgb(0,255,0)");
        $(".isColor:even .x-dh-t").css("color", "rgb(255,0,0)");
        $(".isColor:even .x-dh-b").css("color", "rgb(255,0,0)");
      }, 150);

      setInterval(() => {
        $(".isColor:odd .x-dh-t").css("color", "rgb(255,0,0)");
        $(".isColor:odd .x-dh-b").css("color", "rgb(255,0,0)");
        $(".isColor:even .x-dh-t").css("color", "rgb(135,8,156)");
        $(".isColor:even .x-dh-b").css("color", "rgb(135,8,156)");
      }, 300);
    },
    watch:{
      "$route.path":function(newVal,oldVal){
        console.log(newVal)
        if(newVal){

        }
      }
    },
    computed: {
      colorbool(){
        return this.$store.state.mainState.color
      },
      showSwiper () {
        return this.carouselData&&this.carouselData.length
      },
      swiper() {
        return this.$refs.mySwiperA.swiper
      }
    },
    created(){
        this.getBanner();
        this.$store.commit("mainState/getRoute",this.$route.path)
    },
    components:{
      vpHeaderPic
    }
  }
  </script>

  <style lang="less">
  .top_nav {
    position: relative;
    max-width:1920px;
    min-width: 1200px;
    margin:0 auto;
    .nav-content {
      width: 1200px;
      height: 100px;
      margin: 0 auto;
      .logo {
        float:left;
        text-align: center;
        width: 334px;
        height: 30px;
        margin-top:26px;
      }
      .nav-bar {
        float: right;
        height:100px;
        // margin-right:10px;
        li {
          float: left;
          position: relative;
          height: 100px;
          line-height: 85px;
          margin: 0 15px;
          font-size: 16px;
          color: #54689a;
          // padding: 0 5px;
          padding:0 6px;
          list-style: none;
          cursor: pointer;
          transition: all .3s;
          &.tpT {
            line-height: 85px;
          }
          a {
            width: 100%;
            height: 95%;
            display: block;
            text-align: center;
            text-decoration: none;
            color: inherit;
            position: relative;
            .navName{
              display: block;
            }
            .navText{
              position: absolute;
              left:0;
              right:0;
              bottom:0;
              font-size: 12px;
              margin:0 auto;
              top:22px;
              white-space: nowrap;
              text-align: center;
            }
            .bg-home {
              width: 25px;
              height: 23px;
              display: block;
              position: relative;
              top: 50%;
              transform: translateY(-50%);
              background: url("/static/public/image/userImg/header_nav_sprites.png") -10px -10px;
            }
            .bg-home:hover {
              background: url("/static/public/image/userImg/header_nav_sprites.png") -55px -10px;
            }
          }
          .x-dh-i {
            position: absolute;
            top: 12px;
            right: 0px;
          }
          .x-dh-t {
            display: block;
            &:hover{
              border-bottom: 4px #ea4c89 solid;
              color: #ea4c89;
            }
            &:hover .triangle1{
              display:block;
            }
          }
          .navActive{
            border-bottom: 4px #ea4c89 solid;
            color: #ea4c89;
          }
          .fontColor{
            color:#d7d7e2;
          }
          .triangle{
            font-size: 22px;
            content: '';
            position: absolute;
            bottom: 0px;
            left: 50%;
            margin-left: -5px;
            border: 5px solid transparent;
            border-bottom: 5px solid #ea4c89;
            transition: all .2s;
          }
          .triangle1{
            display: none;
            font-size: 22px;
            content: '';
            position: absolute;
            bottom: 0px;
            left: 50%;
            margin-left: -5px;
            border: 5px solid transparent;
            border-bottom: 5px solid #ea4c89;
            transition: all .2s;
          }

          .x-dh-b {
            white-space: nowrap;
          }
          .dropdown {
            left:44%;
            display: none;
            position: absolute;
            top: 80px;
            z-index: 999;
            transform: translate(-50%, 0);
            display: none;
            border-radius: 10px;
            box-shadow: 3px 3px 6px rgba(0, 0, 0, .5);
            font-size: 14px;
            color: #647488;
            background: #fff;
            ol{
              width:120px;
              padding-top:10px;
              li {
                line-height: 40px;
                color: #fff;
                width:120px;
                height:40px;
                margin:0;
                a {
                  width: 100%;
                  height: 100%;
                  display: inline-block;
                  text-align: center;
                  color: #647488;
                  vertical-align: top;
                  font-size: 14px;
                  img {
                    border: 0;
                    vertical-align: middle;
                  }
                  span{
                    font-size: 14px;
                  }
                }
                &:hover{
                  display: block;
                  position: relative;
                  color:  #647488;
                }
            }

              li:hover {
                  background:#e8edf5;
              }
              li:nth-child(1):hover {
                  background:#e8edf5;
                  border-radius: 0px;
              }
              li:last-child:hover{
                  background:#e8edf5;
                  border-radius: 0px 0px 10px 10px;
              }
            }
          }
          .dropdown:after{
            content: '';
            display: block;
            position: absolute;
            left: 50%;
            top: -16px;
            margin-left: -4px;
            border: 8px solid transparent;
            border-bottom: 8px solid #e7edf7;
          }
        }
        li:last-child{
          margin-right:0;
          padding-right:0;
        }
        li::after{
          content: '';
          position: absolute;
          bottom: 0;
          width: 0;
          height: 2px;
          color: #ff231c;
          background-color: #ff231c;
          transition: .5s all linear;
        }
        li:hover {
          .x-dh-t {
            color: #ff5555;
          }
          .x-dh-b {
            color: #ff5555;
          }
          .dropdown {
            display: block;
          }
        }
      }
    }
    .carouse {
        text-align: center;
        width: 100%;
        height:530px;
        margin:0 auto;
        /deep/ .el-carousel__indicators {
        bottom: 5px;
        }

        /deep/ .el-carousel__button {
        -webkit-text-stroke-width: 10px;
        height: 10px;
        border-radius: 50%;
        }
      }
    .newgong {
        position: absolute;
        height: 40px;
        width: 100%;
        bottom:0px;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 12;
        .newgong-content {
          width: 1200px;
          height: 40px;
          margin: 0 auto;
          .notice {
            display: inline-block;
            float: left;
            position: relative;
            top: 12px;
            left: 25px;
            margin-right: 50px;
            i {
              font-weight: 600;
              color:white;
              font-family: "iconfont" !important;
              font-size: 16px;
              font-style: normal;
              -webkit-font-smoothing: antialiased;
            }
          }
        .demolist {
          display: inline-block;
          width: 990px;
        }
      }
    }
    .youhuiActive{
        top: 100px!important;
    }
  }
  .night{
      background: rgba(18,21,66,.8)
  }

  .bounceOut{
    position: relative;
    animation: bounceOut .3s ease;
    animation-delay: .5s;
    animation-iteration-count:1;
  }
  

  @keyframes bounceOut{
    0%, 20%, 40%, 60%, 80%, 100% {
        animation-timing-function: cubic-bezier(.215,.61,.355,1);
    }
    0% {
        transform: scale3d(.3,.3,.3);
    }
    20% {
        transform: scale3d(1.1,1.1,1.1);
    }
    40% {
        transform: scale3d(.9,.9,.9);
    }
    60% {
        transform: scale3d(1.03,1.03,1.03);
    }
    80% {
        transform: scale3d(.97,.97,.97);
    }
    100% {
        opacity: 1;
        transform: scaleX(1);
    }
  }
  </style>
