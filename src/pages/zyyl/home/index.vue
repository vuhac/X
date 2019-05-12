<template>


 <div class="contentBox">
    <div class="web_p" style=" clear: both; width: 100%; background: url(/static/zyyl/img/bg_main.webp) 50% 0px no-repeat;">
      <div style="width: 1200px;margin: 0 auto;padding: 1px;position: relative">
          <div style="width: 900px;height: 350px;margin-top:15px;position: relative;top:3px;">
              <div id="bannerSlider" class="swiper-container swiper-container-fade swiper-container-horizontal">
                  
                  <!-- 新轮播图接口写法 -->
                  <div class="carouse" >
                    <el-carousel :interval="5000" arrow="never" height="350px" style="overflow:visible;">
                      <el-carousel-item v-for="(item,i) in carouselData" :key="i">
                        <!-- 线下本地，没有图片的写法 -->
                        <!-- <a href="javascript:void(0)" @click="bannerGo(item)">
                          <img :src="item.newPic" alt="" >
                        </a> -->

                        <!-- 正式上线后写法 -->
                        <a href="javascript:void(0)" @click="bannerGo(item)">
                          <img :src="item.img" alt="">
                        </a>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </div>


              <vp-notice></vp-notice>





          </div>

          <!-- <div class="data_show" style="width: 1200px;height:122px;clear: both;margin-top: 66px;position: relative;overflow:hidden">
              <i class="index-sprite _5"></i>
              <p id="offers_rpize" style="color: #ff7031;font-size: 15px;font-weight: bold;position: absolute;text-align: left;left: 54px;top: 64px;">{{carsourlist[0]<=0 ? "1220525424":carsourlist[0]}}元</p>
              <p id="register_count" style="color: #ff7031;font-size: 15px;font-weight: bold;position: absolute;text-align: left;left: 297px;top: 64px;">{{carsourlist[1]<=467 ?"467":carsourlist[1]}}人</p>
              <p style="color: #ff7031;font-size: 15px;font-weight: bold;position: absolute;text-align: left;left: 502px;top: 64px;">
                  取款1000万1小时到帐
              </p>


              <div style="overflow:hidden;top:0;" class="bWinlist" id="winUl">
                <ul class="winerList">
                  <li class="clearfloat" v-for="(item,key) in scrollDatas" :key="key">
                    <img :src="item.ico">
                    <div class="rightBox">
                      <p class="color">
                        {{item.account}}**** {{item.name}}
                      </p>
                      <p class="color">喜中<span>¥{{item.out}}</span></p>
                    </div>

                  </li>
                </ul>
              </div>


          </div> -->
      </div>


      <div class="content" style="margin-top:66px;">

        <!-- <div class="replaceBox" style='margin-bottom:30px;'>
          <img src="/static/zyyl/img/replace.png" />
        </div> -->

        <div class="home-live">
          <h2 class="title">
            <span>彩票游戏</span>
            <!-- <div style="position: absolute;right: -341px;top: 0px;font: inherit;font-size: 15px;">
              <a href="/rule2017.htm?name=jingDian" style="color: #62a5e3; */">百家乐教学 &gt;</a></div> -->
          </h2>
          <div class="lotteryBox">
             <ul class="lotteryUl">


              <li v-for="(item,index) in gameList" :key="index" :class="item.className">
                <div v-for="(item1,index1) in item.child " :key="index1" :class="item1.className">

                  <template v-if="!item1.childs">
                    <!-- <div :class="item1.className"> -->
                      <img :src="item1.imgsrc" alt="">
                      <div :class="item1.mcClass">
                           <div class='mcBtn'>
                              <span @click="goRegister">立即开户</span>
                              <span @click="goto(item1.link)">立即游戏</span>
                            </div>
                      </div>
                    <!-- </div>   -->
                  </template>
                  <!-- <div v-else :class="item1.className" > -->
                    <div v-for="(v,i) in item1.childs" :key="i" :class="v.className" v-else>
                      <img :src="v.imgsrc" alt="">
                      <div :class="v.mcClass">
                          <div class='mcBtn'>
                            <span @click="goRegister">立即开户</span>
                            <span @click="goto(v.link)">立即游戏</span>
                          </div>
                      </div>
                    </div>
                  <!-- </div> -->
                </div>
              </li>





             </ul>
          </div>



        </div>

        <div class="slotsGames">
          <ul class="homeUl">
            <li v-for="(item,index) in homeList " :key="index" >
              <span>{{item.name}}</span>
              <a href="javascript:void(0)" @click="goLink(item)">
                <img :src="item.imgsrc" alt="">
              </a>
            </li>
          </ul>
        </div>




      </div>



  </div>
 </div>







</template>

<script>
// import $ from "jquery";
import vpMc from "./mc"

import store from "@/vuex/store";
import "@/assets/iconfont/klk/iconfont.css";
// import '/static/img/klk/font/iconfont.css'
import data from "../../public/games/public.js";

import vpNotice from "./notice";

import {_SetPost,postS,getS} from '@/service/public/service.js'


export default {
  mixins: [data],
  data() {
    return {
      homeList:[
        {
          name:"棋牌游戏",
          link:"/home/qipai",
          imgsrc:"/static/zyyl/img/home/qipai.png"
        },
        {
          name:"真人视讯",
          link:"/home/live",
          imgsrc:"/static/zyyl/img/home/zr.png"
        },
        {
          name:"电子游艺",
          link:"/home/games?id=10022&name=MG老虎机",
          imgsrc:"/static/zyyl/img/home/dz.png"
        },
        {
          name:"体育赛事",
          link:"/home/tiyu",
          imgsrc:"/static/zyyl/img/home/ty.png"
        }
      ],


      gameData:[
        {
          classId:19,
          className:"PT电子",
            code:"zcjb",
            devices:"ios,h5,pc,android",
            id:3436,
            images:"images/games/pt/slot/zcjb.jpg",
            name:"招财进宝",
            platform:"slot",
            sequence:3,
            special_setting:{'platform':'PT_GAME', 'gameName':'zcjb'},
            status:"yes",
            tag:"5-10,NEW,HOT,SLO",
        },
        {
          classId:19,
          className:"PT电子",
          code:"fm",
          devices:"ios,h5,pc,android",
          id:3338,
          images:"images/games/pt/slot/fm.jpg",
          name:"古怪猴子",
          platform:"slot",
          sequence:4,
          special_setting:{'platform':'PT_GAME', 'gameName':'fm'},
          status:"yes",
          tag:"1-1,NEW,HOT,CLA",
        },
        {
          classId:24,
          className:"MW电子",
          code:"1023",
          devices:"ios,h5,pc,android",
          id:153,
          images:"images/games/mw/slot/1023.jpg",
          name:"超级斗地主",
          platform:"slot",
          sequence:2,
          special_setting:{'platform':'MW_GAME', 'gameName':'1023'},
          status:"yes",
          tag:"",
        },
        {
          classId:24,
          className:"MW电子",
          code:"1041",
          devices:"ios,h5,pc,android",
          id:155,
          images:"images/games/mw/slot/1041.jpg",
          name:"森林舞会",
          platform:"slot",
          sequence:4,
          special_setting:{'platform':'MW_GAME', 'gameName':'1041'},
          status:"yes",
          tag:"",
        }
      ],
      gameList:[
        {
            name:"list1",
            className:"lottery1",
            child:[
            {
              className:'lottery1_up',
              imgsrc:"/static/zyyl/img/lottery/bjsc.png",
              id:"2",
              link:"#/plays/tradition/2",
              mcClass:"mc",
            },
            {
              className:'lottery1_down',
              imgsrc:"/static/zyyl/img/lottery/jsk3.png",
              id:"9",
              link:"#/plays/tradition/9",
              mcClass:"mc",
            },
            ],
        },
        {
            name:"list2",
            className:"lottery1",
            child:[
            {
              className:'lottery1_up',
              imgsrc:"/static/zyyl/img/lottery/kssc.png",
              id:"12",
              link:"#/plays/tradition/12",
              mcClass:"mc",
            },
            {
              className:"lottery1_down",
              childs:[
                {
                  className:'lottery1_left',
                  imgsrc:"/static/zyyl/img/lottery/xyft.png",
                  id:"3",
                  link:"#/plays/tradition/3",
                  mcClass:"mc1",
                },
                {
                  className:'lottery1_right',
                  imgsrc:"/static/zyyl/img/lottery/ksk3.png",
                  id:"27",
                  link:"#/plays/tradition/27",
                  mcClass:"mc1",
                },
              ]
            }
            ],
        },
        {
            name:"list3",
            className:"lottery2",
            child:[
            {
              className:'lottery2_up',
              imgsrc:"/static/zyyl/img/lottery/ksssc.png",
              id:"16",
              link:"#/plays/tradition/16",
              mcClass:"mc",
            },
            {
              className:'lottery2_down',
              imgsrc:"/static/zyyl/img/lottery/xglhc.png",
              id:"1",
              link:"#/plays/tradition/1",
              mcClass:"mc",
            },
            ],
        }

      ],


      // 卡片轮播图
      kpLunbo:[
        {
          img:"/static/zyyl/img/lunbo/banner1.jpg",
          link:"",
        },
        {
          img:"/static/zyyl/img/lunbo/banner2.jpg",
          link:"",
        },
        {
          img:"/static/zyyl/img/lunbo/banner3.jpg",
          link:"",
        },
        {
          img:"/static/zyyl/img/lunbo/banner4.jpg",
          link:"",
        },
        {
          img:"/static/zyyl/img/lunbo/banner5.jpg",
          link:"",
        },
        {
          img:"/static/zyyl/img/lunbo/banner6.jpg",
          link:"",
        },
        {
          img:"/static/zyyl/img/lunbo/banner7.jpg",
          link:"",
        },
        {
          img:"/static/zyyl/img/lunbo/banner8.jpg",
          link:"",
        },
        {
          img:"/static/zyyl/img/lunbo/banner9.jpg",
          link:"",
        },
        {
          img:"/static/zyyl/img/lunbo/banner10.jpg",
          link:"",
        },
        {
          img:"/static/zyyl/img/lunbo/banner11.jpg",
          link:"",
        },
        {
          img:"/static/zyyl/img/lunbo/banner12.jpg",
          link:"",
        },
        {
          img:"/static/zyyl/img/lunbo/banner13.jpg",
          link:"",
        },
        {
          img:"/static/zyyl/img/lunbo/banner14.jpg",
          link:"",
        },
      ],
      carouselData:[],
      // 传给弹框的一个值
      // imgsrc:'/static/jltx/img/yunshanfu.png',
      aisedList: [
        {
          name: "温馨提示",
          time: "2019-04-08",
          content:
            "1.在JavaScript中，任何表达式(expression)都可以看作一条语句(statement)，每条语句可以使用分号（;）来分隔。你可以在每行书写一条语句；也可以在一行书写多条语句。但是我们推荐在书写代码的时候采用第一种方式，以便于后期的代码维护"
        },
        {
          name: "微信客服变更通知",
          time: "2019-04-12",
          content:
            "2.在JavaScript中，任何表达式(expression)都可以看作一条语句(statement)，每条语句可以使用分号（;）来分隔。你可以在每行书写一条语句；也可以在一行书写多条语句。但是我们推荐在书写代码的时候采用第一种方式，以便于后期的代码维护"
        },
        {
          name: "微信客服变更通知",
          time: "2019-01-42",
          content:
            "3.在JavaScript中，任何表达式(expression)都可以看作一条语句(statement)，每条语句可以使用分号（;）来分隔。你可以在每行书写一条语句；也可以在一行书写多条语句。但是我们推荐在书写代码的时候采用第一种方式，以便于后期的代码维护。"
        },
        {
          name: "温馨提示",
          time: "2019-06-08",
          content:
            "4.在JavaScript中，任何表达式(expression)都可以看作一条语句(statement)，每条语句可以使用分号（;）来分隔。你可以在每行书写一条语句；也可以在一行书写多条语句。但是我们推荐在书写代码的时候采用第一种方式，以便于后期的代码维护。"
        }
      ],
      checkedIndex: 0,
      showimg: false,
      showPopout: true,
      imgsrc: "/static/klk/img/qpssq.png",
      imgdata: [
        "/static/klk/img/pcAlert1.png",
        "/static/klk/img/pcAlert2.png",
        "/static/klk/img/pcAlert3.png"
      ],
      popups: "",
      lantern: "",
      value3: 0,
      // 轮播设置
      setting: {
        autoplay: false,
        autoplaySpeed: 2000,
        dots: "none",
        trigger: "click",
        arrow: "hover",
        arrow2: "never"
      },
      // 滚动名单
      random: [
        {
          account: "",
          name: "PT游戏满月财富",
          ico: "/static/public/image/game/ptgame/ashfmf.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏丛林之心",
          ico: "/static/public/image/game/ptgame/ashhotj.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏猫女王",
          ico: "/static/public/image/game/ptgame/catqk.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏埃斯梅拉达",
          ico: "/static/public/image/game/ptgame/esmk.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏古怪猴子",
          ico: "/static/public/image/game/ptgame/fm.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏玛丽莲梦露",
          ico: "/static/public/image/game/ptgame/gtsmrln.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏年年有余",
          ico: "/static/public/image/game/ptgame/nian_k.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏幸运直击",
          ico: "/static/public/image/game/ptgame/sol.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏三倍猴子",
          ico: "/static/public/image/game/ptgame/trpmnk.jpg",
          in: 0,
          out: 0
        },
        {
          account: "",
          name: "PT游戏招财进宝",
          ico: "/static/public/image/game/ptgame/zcjb.jpg",
          in: 0,
          out: 0
        }
      ],
      carsourlist:["1220525424","467"],
      scrollDatas: [],
      // 选项选择
      optionList: [
        { name: "PT", id: "10024", index: 0 },
        { name: "MG", id: "10022", index: 1 },
        { name: "AG", id: "10015", index: 2 },
        { name: "CQ9", id: "10018", index: 3 },
        { name: "DT", id: "10019", index: 4 },
        { name: "AE", id: "10014", index: 5 },
        { name: "TTG", id: "10025", index: 6 },
        { name: "BBIN", id: "10016", index: 7 }
      ],
      optionSel: "PT",
      // 显示图片
      showTypList: [],
      jackpotNum: 41126438900,
      setInter: null,
      publicUrl: "http://img.7900005.com/",
      downloadAppTarget: ""
    };
  },
  methods: {
    // 进入游戏
    loginGame (item) {
        if (!localStorage.token || !localStorage.userinfo) {
          alert('未登录')
          return false
        }
        // console.log(JSON.parse(item.special_setting))
        let routeData = this.$router.resolve({
          path: '/loading',
          query: {
            name: item.name,
            platform: item.special_setting.platform,
            gameName: item.special_setting.gameName,
            login: true
          }
        })
        window.open(routeData.href, 'newwindow', 'height=750,width=1285, top=0, left=' + (window.screen.availWidth - 1295) / 2 + '')
      },
    goGame(num){
        if(num==0){
          this.$router.push({path:"/home/tiyu"})
        }else if(num==1){
          this.$router.push({path:"/home/live"})
        }else if(num==3){
          this.$router.push({path:"/home/buyu"})
        }else if(num==4){
          this.loginGame(this.gameData[0])
        }else if(num==5){
          this.loginGame(this.gameData[1])
        }else if(num==6){
          this.loginGame(this.gameData[2])
        }else if(num==7){
          this.loginGame(this.gameData[3])
        }
    },
        // // 打开注册框
    goRegister(){
      // 注册弹框
      // this.isRegister=true;
      this.$store.commit('yibo/showBox',{showBox:true,isLogin:false})
    },
    goto(item){
          if(localStorage.token){
                if(localStorage.Public_User=='test' ){
                  this.dNotify("彩票暂无试玩,立即注册", "error")
              }else{
                var newitem=item.split("#")[1]
                  this.$router.push({
                  path: newitem
                  })
              }
          }else{
                this.dNotify("请先登录", 'error')
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
            console.log(this.carouselData);
            // console.log(this.downloadAppTarget)
            this.carouselData&&this.carouselData.forEach((item,index)=>{
              item.newPic="/static/test/img/0425test/banner"+(index+1)+".jpg";
            })
          }else{
            console.log("轮播接口没有数据返回")
          }
        }

    },
    // 新轮播图接口a标签跳转
    bannerGo(item){
        console.log(item);
        let goUrl="";
        switch(item.foward_type){
          case "1":
          // 自定义
          goUrl="target";
          break;
          case "2":
          // 真人视讯
          goUrl="/home/live";
          break;
          case "3":
          // 彩票大厅
          goUrl="/plays/hall";
          break;
          case "4":
          // 棋牌游戏
          goUrl="/home";
          break;
          case "5":
          // 电子游艺
          goUrl="/home/games?id=10022&name=MG老虎机";
          break;
          case "6":
          // 体育竞技
          goUrl="/home";
          break;
          case "7":
          // 捕鱼
          goUrl="/home/buyu";
          break;
          case "8":
          // 优惠活动
          goUrl="/home/youhui";
          break;
          default:
          // 默认（都没有匹配到的时候）
          goUrl="/home/buyu";
          break;
        }

        console.log(this.$router);
        // 可以在此处，对路由进行判断，看看，是否存在对应的路由，如果，没有，那么就可以再进行进一步处理（例如，没有体育竞技页面，那么直接进入皇冠体育==前提是判断是否已经登录）

        console.log(goUrl)
        this.$router.push({path:goUrl})
    },

    winListAni(){
      let oUl=document.getElementById("winUl");

      this.winTimer=setInterval(()=>{
          let oTop=parseInt(oUl.style.top);
          oTop-=120;
          if(oTop<-6000){
            oTop=0;
          }
          oUl.style.top=oTop+"px";
      },3000)
    },

    goLink(item){
      this.$router.push({path:item.link})
    },



    // goLink(i) {
    //   this.checkedIndex = i;
    // },
    upCarl() {
      if (this.value3 == 0) return false;
      this.value3--;
      if (this.value3 <= 0) {
        this.value3 = 0;
      }
      this.optionSel = this.optionList[this.value3].name;
      this.getTypeL(this.optionList[this.value3].id);
    },
    close() {
      this.showimg = false;
    },
    getMycount() {
      let date = new Date();
      if (date.getHours() >= 15 && date.getHours() < 18) {
        this.imgsrc = this.imgdata[1];
      } else if (date.getHours() >= 18 && date.getHours() < 21) {
        this.imgsrc = this.imgdata[2];
      } else {
        this.imgsrc = this.imgdata[0];
      }
    },
    downCarl() {
      if (this.value3 == this.optionList.length - 1) return false;
      this.value3++;
      if (this.value3 >= this.optionList.length - 1) {
        this.value3 = this.optionList.length - 1;
      }
      this.optionSel = this.optionList[this.value3].name;
      this.getTypeL(this.optionList[this.value3].id);
    },
    optionFc(item) {
      this.optionSel = item.name;
      this.getTypeL(item.id);
      this.value3 = item.index;
    },
    // async getTypeL(id) {
    //   let res = await this.$http.post(`${this.$HOST_NAME}/games/pages`, {
    //     classId: id,
    //     limit: 6,
    //     devices: "pc",
    //     tag: "HOT"
    //   });
    //   if (res && res.code == 200) {
    //     this.showTypList = res.data.data;
    //   } else {
    //     this.$store.commit("alert/showTipModel", {
    //       bool: true,
    //       title: res.message,
    //       model: "warn"
    //     });
    //   }
    // },
    //获取数据
      async getTypeL(item) {
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
    jackpotFc() {
      clearInterval(this.setInter);
      this.setInter = setInterval(() => {
        this.jackpotNum = this.jackpotNum + 8.56;
      }, 100);
    },

    downloadAppFc() {
      window.open("/static/klk/html/download/index.html");
    }
  },
  created() {
    this.showPopout=false

    this.getBanner();
    /*this.getMycount()*/
    // setTimeout(() => {
    //   this.showimg = false;
    // }, 7000);
    let chars = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "j",
      "k",
      "-",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];

    // 随机账号
    function generateMixed(n) {
      var res = "";
      for (var i = 0; i < n; i++) {
        var id = Math.ceil(Math.random() * 61);
        res += chars[id];
      }
      return res;
    }

    //50个模型demo
    let datas = [];
    for (let index = 0; index < 50; index++) {
      // debugger
      let obj = {};
      // for(let key in this.random[Math.floor(Math.random() * 10)]) {
      //   obj[key]=this.random[Math.floor(Math.random() * 10)][key]
      // }
      Object.assign(obj, obj, this.random[Math.floor(Math.random() * 10)]);
      datas.push(obj);
    }
    // 求出随机数
    datas.forEach((item, v) => {
      // console.log(v)
      // debugger
      item.in = Math.random().toFixed(2) * 1000;
      item.out =
        Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 100 < 1
          ? 10000
          : Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 100;
      item.account = generateMixed(3);
      this.carsourlist[0]= Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 100 < 1
          ? 1220525424
          : Math.ceil(Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 1000000);
      this.carsourlist[1]=Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 100 < 1
          ? 1000
          : Math.ceil(Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 10);
    });
    this.scrollDatas = datas;
    // console.log(datas)
    // console.log(this.scrollDatas)
    this.optionFc(this.optionList[0]);
  },
  mounted() {
    clearInterval(this.setInter);
    this.jackpotFc();
    // this.getLantern();
    if (localStorage.config) {
      let config = JSON.parse(localStorage.config);
      this.publicUrl = config.statics;
    }
    // this.$nextTick(()=>{
    //   this.winListAni();
    // })
  },
  components:{
      vpMc,
      vpNotice
  },
  destroyed(){
    this.winTimer=null;
  },
  store
};
</script>

<style lang="less" scoped>
  .slotsGames{
    width:100%;
    // height:300px;
    // background-color: red;
    margin-bottom:20px;
    margin-top:30px;
    .homeUl{
      width:100%;
      overflow:hidden;
      li{
        float: left;
        width:592px;
        // margin-bottom:15px;
        // height:200px;
        // background-color: #666;
        // border:1px solid #eee;
        span{
          line-height: 40px;
          font-size: 24px;

        }
        a{
          display:inline-block;
          width:590px;
          height:170px;
          overflow:hidden;
          img{
            transition:all .5s ease;
          }
          img:hover{
            transform:scale(1.1);

          }
        }
      }
      li:nth-child(2n){
        margin-left:16px;
      }
    }
  }





.alert-img {
  /deep/ .ivu-modal-content {
    background-color: transparent;
    // background:none;
  }
}
.carouse {
  text-align: center;
  // width: 100%;
  width:900px;
  height:350px;
  overflow:hidden;
  /deep/ .el-carousel__indicators {
    bottom: 5px;
  }

  /deep/ .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  a{
    display:inline-block;
    width:100%;
    height:350px;
    img{
      width:100%;
      height:350px;
    }
  }
}




.data_show {
    cursor: pointer;
}


.index-sprite {
    background: url(/static/zyyl/img/a_sprite.png) no-repeat;
    display: block;
}
._5 {
    height: 120px;
    width: 1200px;
    background-position: 0 -678px;
}

  // @keyframes animatesub {
  //   0% {
  //     top: 0;
  //   }
  //   100% {
  //     top: -6000px;
  //   }
  // }
.bWinlist{
  position: absolute;
  // animation: animatesub 120s linear infinite;
  transition:all .3s ease;
  width: 447px;
  // height: 120px;
  top: 8px;
  left: 805px;
    li {
    // height: 58px;
    height:120px;
    vertical-align:middle;
    cursor: default;
    padding: 0 15px;
    // background:red;
    img {
      // height: 36px;
      // width: 36px;
      height: 80px;
      width: 80px;
      border-radius: 50%;
      float: left;
      margin-top: 20px;
      margin-right: 35px;
      margin-left:15px;
      transition: 0.5s;
    }

    // p {
    //   margin: 0;
    //   float: left;
    //   line-height: 1.7;
    //   font-size: 12px;

    //   span {
    //     color: #f63745;
    //     margin: 0 5px;
    //   }
    // }
    .rightBox{
      float:left;
      margin-top:30px;
      p{
        line-height:30px;
        font-size:16px;

        span{
          color:#f63745;
        }
      }
    }

  }
}


.contentBox{
  .content {
      width: 1200px;
      margin: 0 auto;

    .title {
        color: #3c3c3c;
        position: relative;
        text-align: center;
        line-height: 50px;
        font-size: 24px;
        font-weight: 400;
        width: 500px;
        margin: 0 auto 30px;
        span {
            padding: 0 15px;
            position: relative;
            z-index: 2;
        }
    }
    .title:before {
          left: 0;
          background-image: -webkit-linear-gradient(left,rgba(230,233,240,0) 0,#989898 100%);
          background-image: -o-linear-gradient(left,rgba(230,233,240,0) 0,#989898 100%);
          background-image: -webkit-gradient(linear,left top,right top,from(rgba(230,233,240,0)),to(#989898));
          background-image: linear-gradient(to right,rgba(230,233,240,0) 0,#989898 100%);
          background-repeat: repeat-x;
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00E6E9F0',endColorstr='#FF989898',GradientType=1);
          // background: #989898\9;
    }
    .title:after {
        right: 0;
        background-image: -webkit-linear-gradient(left,#989898 0,rgba(230,233,240,0) 100%);
        background-image: -o-linear-gradient(left,#989898 0,rgba(230,233,240,0) 100%);
        background-image: -webkit-gradient(linear,left top,right top,from(#989898),to(rgba(230,233,240,0)));
        background-image: linear-gradient(to right,#989898 0,rgba(230,233,240,0) 100%);
        background-repeat: repeat-x;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF989898',endColorstr='#00E6E9F0',GradientType=1);
        // background: #989898\9;
    }
    .title:before, .title:after {
        content: '';
        width: 36%;
        height: 1px;
        position: absolute;
        top: 50%;
        z-index: 1;
    }


    .wrap {
        height: auto;
        margin: 0 auto;
        width:100%;

      .wrap-inner {
            width: 1200px;
            position: relative;
            margin: 0 auto;

        }
    }


    .replaceBox{
      width:100%;
      img{
        width:100%;
      }
    }




    .slots {
        overflow:hidden;
        // margin-bottom: 30px;
        margin:40px 0;
        h2.title {
            text-align: left;
            margin: 0;
            float: left;
            span {
                padding: 0;
            }
        }
        h2.title:before, h2.title:after {
            background-image: none;
        }

        div.sports_lottery {
            margin-top: -50px;
            float: right;
            li {
                list-style: none;
                padding: 0;
                margin: 0;
                width: 346px;
                height: 144px;
                cursor: pointer;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
                &:hover{
                  img {
                      -webkit-transform: scale(1.1);
                      -ms-transform: scale(1.1);
                      -o-transform: scale(1.1);
                      transform: scale(1.1);
                      -webkit-transition-duration: .1s;
                      -ms-transition-duration: .1s;
                      -o-transition-duration: .1s;
                      transition-duration: .1s;
                  }
                }
            }
        }
        div{
          h2 {
              color: #3c3c3c;
              line-height: 50px;
              font-size: 24px;
          }
        }
    }
    .slots-list {
        margin-left: -8px;
        width: 831px;
        float: left;
        li {
            cursor: pointer;
            float: left;
            margin-left: 7px;
            margin-bottom: 7px;
            width: 270px;
            height: 165px;
            position: relative;
            color: #fff;
            .img-wrap {
                z-index: 1;
                overflow: hidden;
                img {
                    -webkit-transition-duration: .1s;
                    -ms-transition-duration: .1s;
                    -o-transition-duration: .1s;
                    transition-duration: .1s;
                }
            }
            .img-wrap>img {
                position: absolute;
                z-index: 1;
                left: 0;
                bottom: 0;
                -webkit-transition-duration: 1s;
                -o-transition-duration: 1s;
                transition-duration: 1s;
            }

            .game-info {
                z-index: 2;
                padding: 20px;
                h3 {
                    font-size: 30px;
                    font-weight: 400;
                    line-height: 50px;
                     strong {
                        font-weight: bold;
                    }
                }
            }
            .link-layer {
                z-index: 10;
                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    filter: alpha(opacity=0);
                    text-indent: -9999em;
                }
            }




        }
        li>* {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
        }
        .puyu {
            width: 547px;
            background-image: -webkit-linear-gradient(top,#17c3e5 0,#295fcc 100%);
            background-image: -o-linear-gradient(top,#17c3e5 0,#295fcc 100%);
            background-image: -webkit-gradient(linear,left top,left bottom,from(#17c3e5),to(#295fcc));
            background-image: linear-gradient(to bottom,#17c3e5 0,#295fcc 100%);
            background-repeat: repeat-x;
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF17C3E5',endColorstr='#FF295FCC',GradientType=0);

            .img-wrap {
                height: 205px;
            }
        }
        li:hover .img-wrap img {
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            -o-transform: scale(1.1);
            transform: scale(1.1);
            -webkit-transition-duration: .1s;
            -ms-transition-duration: .1s;
            -o-transition-duration: .1s;
            transition-duration: .1s;
        }
        li.puyu:hover .img-wrap img {
            -webkit-transform: translateX(15px);
            -ms-transform: translateX(15px);
            -o-transform: translateX(15px);
            transform: translateX(15px);
        }


    }

    .brand{
      .wrap-inner {
          overflow: hidden;
      }
      .wrap{
        .wrap-inner {
            width: 1200px;
            position: relative;
            margin: 0 auto;
        }
      }

      .carousel{
        width:100%;

      }
    }



  }








}

.casinos {
    margin-bottom: 30px;
    .col1 {
        -webkit-box-shadow: 4px 4px 20px rgba(207,143,248,0.2);
        box-shadow: 4px 4px 20px rgba(207,143,248,0.2);
    }

    .luckyway {
        padding: 0 10px 10px;
        background-image: -webkit-linear-gradient(top,#fff 0,#dbccea 100%);
        background-image: -o-linear-gradient(top,#fff 0,#dbccea 100%);
        background-image: -webkit-gradient(linear,left top,left bottom,from(#fff),to(#dbccea));
        background-image: linear-gradient(to bottom,#fff 0,#dbccea 100%);
        background-repeat: repeat-x;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF',endColorstr='#FFDBCCEA',GradientType=0);
        h2 {
            color: #282828;
            position: relative;
            text-align: center;
            line-height: 48px;
            font-size: 14px;
            font-weight: 400;
            span {
                padding: 0 10px;
                position: relative;
                z-index: 2;
            }
        }
        h2:before {
            left: 0;
            background-image: -webkit-linear-gradient(left,#fff 0,#c2a3d9 100%);
            background-image: -o-linear-gradient(left,#fff 0,#c2a3d9 100%);
            background-image: -webkit-gradient(linear,left top,right top,from(#fff),to(#c2a3d9));
            background-image: linear-gradient(to right,#fff 0,#c2a3d9 100%);
            background-repeat: repeat-x;
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF',endColorstr='#FFC2A3D9',GradientType=1);
        }
        h2:after {
            right: 0;
            background-image: -webkit-linear-gradient(left,#c2a3d9 0,#fff 100%);
            background-image: -o-linear-gradient(left,#c2a3d9 0,#fff 100%);
            background-image: -webkit-gradient(linear,left top,right top,from(#c2a3d9),to(#fff));
            background-image: linear-gradient(to right,#c2a3d9 0,#fff 100%);
            background-repeat: repeat-x;
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFC2A3D9',endColorstr='#FFFFFFFF',GradientType=1);
        }


        .board {
            height: 118px;
            width: 100%;
        }

    }
}



.board {
    width: 418px;
    height: 118px;
    float: left;
    .mapinfo {
        float: left;
        width: 135px;
        text-align: center;
        height: 118px;
    }
    h4 {
        font-size: 14px;
        font-weight: 400;
        color: #444;
        line-height: 30px;
        .table-name {
            color: #8a5ce6;
        }
    }
    .countdown {
        color: #282828;
        font-size: 0;
        line-height: 0;
        span {
            vertical-align: middle;
            width: 16px;
            height: 30px;
            line-height: 30px;
            font-size: 30px;
            font-weight: 300;
            position: relative;
            -webkit-border-radius: 3px;
            border-radius: 3px;
            overflow: hidden;
             strong {
                font-weight: 300;
                position: relative;
                z-index: 2;
                color: #282828;
            }
        }
    }

    .button {
        margin-top: 10px;
         a {
            display: block;
            width: 90%;
            margin: 0 auto;
            line-height: 36px;
            background-image: -webkit-linear-gradient(top, #ef5286 0%, #ac0347 100%);
            background-image: -o-linear-gradient(top, #ef5286 0%, #ac0347 100%);
            background-image: -webkit-gradient(linear, left top, left bottom, from(#ef5286), to(#ac0347));
            background-image: linear-gradient(to bottom, #ef5286 0%, #ac0347 100%);
            background-repeat: repeat-x;
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEF5286', endColorstr='#FFAC0347', GradientType=0);
            color: #fff;
            font-size: 16px;
            -webkit-border-radius: 36px;
            border-radius: 36px;
            -webkit-transition: all .45s ease-out;
            -o-transition: all .45s ease-out;
            transition: all .45s ease-out;
        }
        a {
            position: relative;
            overflow: hidden;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
        }
        a:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 5px;
            height: 5px;
            opacity: 0;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            background: rgba(255, 255, 255, 0.2);
            -webkit-transition: all 0.7s ease-out;
            -o-transition: all 0.7s ease-out;
            transition: all 0.7s ease-out;
            -webkit-transition-property: opacity, -webkit-transform;
            transition-property: opacity, -webkit-transform;
            -o-transition-property: opacity, -o-transform;
            transition-property: transform, opacity;
            transition-property: transform, opacity, -webkit-transform, -o-transform;
            -webkit-transform: scale(0);
            -ms-transform: scale(0);
            -o-transform: scale(0);
            transform: scale(0);
            pointer-events: none;
        }


    }


    .roadinfo {
        width: 280px;
        height: 118px;
        float: right;
        position: relative;
        .noopen {
            display: none;
            width: 280px;
            height: 118px;
            position: absolute;
            color: #fff;
            text-align: center;
            z-index: 22;
        }
    }
    .shuffle {
        width: 150px;
        height: 150px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        display: none;
        .shuffleItem {
            padding: 0;
            text-align: center;
            .spinner {
                position: relative;
                display: none;
                -webkit-perspective: 1000;
                perspective: 1000;
                -webkit-transform-style: preserve-3d;
                transform-style: preserve-3d;
                background: url(/static/zyyl/img/ncard.png) no-repeat;
                -webkit-animation-name: card-back;
                -o-animation-name: card-back;
                animation-name: card-back;
            }
            .dcards {
                display: none;
                display: block\9;
                width: 87px;
                height: 55px;
                background: url(/static/zyyl/img/ie8.png) no-repeat;
                margin: 50px auto 0;
            }
        }
    }
}

.board .shuffle .shuffleItem .spinner, .board .shuffle .shuffleItem .spinner:before, .board .shuffle .shuffleItem .spinner:after {
    width: 35px;
    height: 51px;
    top: 30px;
    left: -10px;
    -webkit-animation-duration: 3s;
    -o-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    -o-animation-direction: alternate;
    animation-direction: alternate;
}


.casinos .luckyway h2:before, .casinos .luckyway h2:after {
    content: '';
    width: 38%;
    height: 1px;
    position: absolute;
    top: 50%;
    z-index: 1;
}
.casinos .col1, .casinos .col2 {
    width: 438px;
    height: 356px;
    float: left;
    margin-right: 12px;
}
.casino-wrap {
    position: relative;
    height: 180px;
    h3 {
        bottom: 62px;
        font-size: 16px;
        font-weight: 400;
    }
    .layer {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        opacity: 0;
        filter: alpha(opacity=0);
        cursor: pointer-events;
        .layer-buttons {
            position: absolute;
            left: 0;
            top: 73%;
            width: 100%;
        }

        a {
            background-color: rgba(117,68,217,0.85);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#D97544D9',endColorstr='#D97544D9',GradientType=0);
            font-size: 16px;
            color: #fff;
            width: 130px;
            line-height: 30px;
            -webkit-border-radius: 36px;
            border-radius: 15px;
        }
        .for_free {
            margin-left: 15px;
            background-color: rgba(77,71,194,0.7);
        }
    }

    .lobby {
        position: absolute;
        width: 90px;
        height: 90px;
        z-index: 10;
        right: 0;
        top: 0;
        text-indent: -99999em;
    }
    .tips {
        position: absolute;
        width: 30px;
        height: 30px;
        z-index: 10;
        right: 0;
        top: 50%;
        margin-top: -10px;
        text-indent: -99999em;
    }
}

.clearfix:before, .ui-tabs:before, .index1:before, .casinos:before, .game-table dl:before, .rank-detail .detail-list ul:before, .slots-list:before, .clearfix:after, .ui-tabs:after, .index1:after, .casinos:after, .game-table dl:after, .rank-detail .detail-list ul:after, .slots-list:after {
    content: '';
    display: table;
}

.home-live{
  .lotteryBox{
    .lotteryUl{
      overflow:hidden;
      li{
        // width:100%;
        // height:180px;
        float: left;
      }
      span{
        display:inline-block;
        // background-color: rgba(117,68,217,0.85);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#D97544D9',endColorstr='#D97544D9',GradientType=0);
        font-size: 16px;
        color: #fff;
        width: 130px;
        line-height: 30px;
        -webkit-border-radius: 36px;
        border-radius: 15px;
        cursor:pointer;
      }
      span:first-child{
            background-color: rgba(117,68,217,0.85);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#D97544D9',endColorstr='#D97544D9',GradientType=0);
            font-size: 16px;
            color: #fff;
            width: 130px;
            line-height: 30px;
            -webkit-border-radius: 36px;
            border-radius: 15px;
      }
      span:last-child{
            // margin-left: 15px;
            background-color: rgba(77,71,194,0.7);
      }
      span:hover{
            background-color: #7544d9;
            background-image: -webkit-linear-gradient(top,#5666da 0,#6b31e1 100%);
            background-image: -o-linear-gradient(top,#5666da 0,#6b31e1 100%);
            background-image: -webkit-gradient(linear,left top,left bottom,from(#5666da),to(#6b31e1));
            background-image: linear-gradient(to bottom,#5666da 0,#6b31e1 100%);
            background-repeat: repeat-x;
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF5666DA',endColorstr='#FF6B31E1',GradientType=0);
      }
      .lottery1{
        width:437px;
        margin-left:12px;
        .lottery1_up{
          position:relative;
          margin-bottom:12px;
        }
        .lottery1_down{
          position:relative;
        }
        .lottery1_up,.lottery1_down{
          height:180px;
          img{
            width:437px;
            height:180px;
          }
          .mc{
            position:absolute;
            left:0;
            bottom:20px;
            width:100%;
            height:30px;
            line-height: 30px;
            text-align: center;
            display:none;
            .mcBtn{
              width:100%;
              line-height: 30px;
            }
          }
          &:hover{
            .mc{
              display:block;
            }
          }
        }


        .lottery1_down{
          // width:100%;
          .lottery1_right{
            margin-left:12px;
            width:212px!important;
          }
          .lottery1_left,.lottery1_right{
            float: left;
            width:213px;
            height:180px;
            position:relative;
            img{
              width:213px;
              height:180px;
            }
            .mc1{
              display:none;
              width:213px;
              text-align: center;
              position:absolute;
              left:0;
              bottom:20px;
              .mcBtn{
                width:100%;
                line-height: 30px;
                text-align: center;
                span{
                  display:inline-block;
                  // width:100%;
                  margin:12px 0;

                }
              }
            }
            &:hover{
              .mc1{
                display:block;
              }
            }
          }
        }


      }
      .lottery1:first-child{
        margin-left:0;
      }

      .lottery2{
        width:300px;
        margin-left:12px;
        .lottery2_up{
          margin-bottom:12px;
          height:180px;
        }
        .lottery2_up,.lottery2_down{
          width:300px;
            position:relative;
            img{
              width:300px;
              height:180px;
            }
            .mc{
              // width:200px;
              display:inline-block;
              position:absolute;
              left:0;
              bottom:20px;
              width:100%;
              // height:30px;
              line-height: 30px;
              text-align: center;
              display:none;
              .mcBtn{
                width:100%;
                line-height: 30px;
                span{
                  display:inline-block;
                  margin:12px 20px;
                }
              }
            }
            &:hover{
              .mc{
                display:block;
              }
            }
        }
      }
    }
  }
}








.new-index {
  position: relative;
  max-width: 1920px;
  min-width: 1200px;
  margin: 0 auto;
  background: #f1f1f1;

  .newgong {
    position: absolute;
    height: 51px;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 12;

    .newgong-content {
      width: 1200px;
      height: 51px;
      margin: 0 auto;

      .notice {
        display: inline-block;
        float: left;
        position: relative;
        top: 12px;
        left: 25px;
        margin-right: 50px;

        i {
          color: #fff;
          font-size: 23px;
        }
      }

      .demolist {
        display: inline-block;
        width: 990px;
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
      background: url("/static/klk/img/jackpot_in1.jpg") no-repeat center,
        url("/static/klk/img/jackpot_out1.jpg") no-repeat;
      position: relative;
      -webkit-animation: bg 0.5s linear infinite;
      -o-animation: bg 0.5s linear infinite;
      -moz-animation: bg 0.5s linear infinite;
      animation: bg 0.5s linear infinite;
      @-webkit-keyframes bg {
        0% {
          background: url("/static/klk/img/jackpot_in1.jpg") no-repeat center,
            url("/static/klk/img/jackpot_out1.jpg") no-repeat;
        }
        100% {
          background: url("/static/klk/img/jackpot_in1.jpg") no-repeat center,
            url("/static/klk/img/jackpot_out2.jpg") no-repeat;
        }
      }
      @-moz-keyframes bg {
        0% {
          background: url("/static/klk/img/jackpot_in1.jpg") no-repeat center,
            url("/static/klk/img/jackpot_out1.jpg") no-repeat;
        }
        100% {
          background: url("/static/klk/img/jackpot_in1.jpg") no-repeat center,
            url("/static/klk/img/jackpot_out2.jpg") no-repeat;
        }
      }
      @-o-keyframes bg {
        0% {
          background: url("/static/klk/img/jackpot_in1.jpg") no-repeat center,
            url("/static/klk/img/jackpot_out1.jpg") no-repeat;
        }
        100% {
          background: url("/static/klk/img/jackpot_in1.jpg") no-repeat center,
            url("/static/klk/img/jackpot_out2.jpg") no-repeat;
        }
      }
      @-ms-keyframes bg {
        0% {
          background: url("/static/klk/img/jackpot_in1.jpg") no-repeat center,
            url("/static/klk/img/jackpot_out1.jpg") no-repeat;
        }
        100% {
          background: url("/static/klk/img/jackpot_in1.jpg") no-repeat center,
            url("/static/klk/img/jackpot_out2.jpg") no-repeat;
        }
      }
      @keyframes bg {
        0% {
          background: url("/static/klk/img/jackpot_in1.jpg") no-repeat center,
            url("/static/klk/img/jackpot_out1.jpg") no-repeat;
        }
        100% {
          background: url("/static/klk/img/jackpot_in1.jpg") no-repeat center,
            url("/static/klk/img/jackpot_out2.jpg") no-repeat;
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
            background: url(/static/klk/img/arrow_sprites.png) -10px -10px;
          }

          .bg-arrow_right {
            width: 15px;
            height: 23px;
            position: absolute;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            background: url(/static/klk/img/arrow_sprites.png) -45px -10px;
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
        background-image: url("/static/klk/img/game/slot_game.jpg");
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
          background-image: url("/static/klk/img/game/live_casino.jpg");
          float: left;
          background-size: cover;
        }

        .gym {
          width: 270px;
          height: 180px;
          overflow: hidden;
          position: relative;
          float: left;
          background-image: url("/static/klk/img/game/sports_events.jpg");
          background-size: cover;
        }
      }

      .fish_game {
        height: 180px;
        margin-top: 10px;
        background-image: url("/static/klk/img/game/fishing_game.jpg");
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
        background-image: url("/static/klk/img/game/lottery.jpg");
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
