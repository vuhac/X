<template>
  <div class="caipiao">
    <div class="wrap">
      <!-- 轮播图 -->
      <div class="carouse">

        <Carousel autoplay arrow='never' v-model="autoPlay" loop style="height:240px;">
          <CarouselItem v-for="(item,i) in carouselData" :key="i">
            <img :src="item" style="height:240px;" alt>
          </CarouselItem>
          
        </Carousel>
        <!-- <el-carousel :interval="2000" arrow="never" height="240px">
          <el-carousel-item v-for="(item,i) in carouselData" :key="i">
            <img :src="item">
          </el-carousel-item>
        </el-carousel> -->
      </div>

      <!-- 名单 -->
      <div class="win">
        <h3 class="winHead">风云榜</h3>

        <div style="overflow:hidden;">
          <ul class="winerList">
            <li class="clearfloat" v-for="(item,key) in scrollDatas" :key="key">
              <img :src="item.ico">
              <p class="color">
                {{item.account}}**** {{item.name}}
                <br>喜中
                <span>¥{{item.out}}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="wrap shadow">
      <i></i>
      <em></em>
    </div>

    <div class="wrap lotteryNav">
      <ul>
        <li
          @click="getNavcont(item,index)"
          :class="{'active': navIndex == index}"
          v-for="(item,index) in navList"
          :key="index"
        >
          <a :style="{width:1000/navList.length-2+'px'}">{{item.name}}</a>
        </li>
      </ul>

      <ul>
        <li v-for="(navItem,index) in navCont" :key="index">
          <a>
            <!-- <img :src="'/static/public/image/lottery/ico/vp-' + navItem.name + '.png' " alt> -->
            <img :src="navItem.id|capitalize" alt>
            <div>
              <h4>{{navItem.name}}</h4>
              <p>第{{navItem.issue}}期</p>
            </div>
          </a>

          <div class="lotteryNow">
            <a class="now MustLogin" @click="goLnk(navItem.id)">立即投注</a>
            <a class="help" href="javascript:void(0)" @click="gotorules(navItem.fenleiClass,navItem.fenleiId)">?</a>
            <span class="helpTip">
              <em>玩法说明</em>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import store from "@/vuex/store";
import { postS, getS } from "@/service/public/service.js";
import UserService from "@/service/public/UserService.js";
export default {
  data() {
    return {
      carouselData: [
        "/static/jhcp/img/banner1.png",
        "/static/jhcp/img/banner2.png"
      ],
      // 滚动名单
      random: [
        {
          account: "",
          name: "江苏快3",
          ico: "/static/jhcp/img/home/slder1.jpg",
          out: 0
        },
        {
          account: "",
          name: "湖北快3",
          ico: "/static/jhcp/img/home/slder.jpg",
          out: 0
        },
        {
          account: "",
          name: "5分六合",
          ico: "/static/jhcp/img/home/slder2.jpg",
          out: 0
        },
        {
          account: "",
          name: "极速赛车",
          ico: "/static/jhcp/img/home/slder3.jpg",
          out: 0
        },
        {
          account: "",
          name: "北京赛车",
          ico: "/static/jhcp/img/home/slder4.jpg",
          out: 0
        },
        {
          account: "",
          name: "快速11选5",
          ico: "/static/jhcp/img/home/slder5.jpg",
          out: 0
        },
        {
          account: "",
          name: "幸运飞艇",
          ico: "/static/jhcp/img/home/td1.jpg",
          out: 0
        },
        {
          account: "",
          name: "重庆时时彩",
          ico: "/static/jhcp/img/home/slder6.jpg",
          out: 0
        },
        {
          account: "",
          name: "幸运农场",
          ico: "/static/jhcp/img/home/slder7.jpg",
          out: 0
        },
        {
          account: "",
          name: "广东快乐十分",
          ico: "/static/jhcp/img/home/slder8.jpg",
          out: 0
        }
      ],
      recommendList: "",
      navList: [],
      allList:[],
      navIndex: 0,
      scrollDatas: [],
      dataIndex: "",
      autoPlay:0,
      navCont: []
    };
  },
  mounted() {
   
  },
  methods: {
    // gotorules(className,id){
    //   if(className=="时时彩"){
    //     this.$router.push({path:`/rules/ssc?id=${id}`})
    //   }else if(className=="六合彩"){
    //     this.$router.push({path:`/rules/lhc?id=${id}`})
    //   }else if(className=="PC蛋蛋"){
    //     this.$router.push({path:`/rules/pcdd?id=10`})
    //   }else if(className=="快3"){
    //     this.$router.push({path:`/rules/k3?id=${id}`})
    //   }else if(className=="11选5"){
    //     this.$router.push({path:`/rules/cp11x5?id=${id}`})
    //   }else if(className=="PK10"){
    //     this.$router.push({path:`/rules/pk10?id=${id}`})
    //   }else if(className=="快乐十分"){
    //     this.$router.push({path:`/rules/klsf?id=${id}`})
    //   }
    // },
    // async getNavDatasFc() {
    //   let res = await this.$http
    //     .post(`${this.$HOST_NAME}/gameSortNew`, {
    //       id:30001,
    //       device:"pc"
    //     })
    //     if (res && res.code == 200) {
    //       // 所有彩票的数据，不包括热门和全部彩票
    //       this.allList = res.data[30001];
    //       this.getFen()
    //     }
    // },
    // async getFen(){
    //   let res = await this.$http.post(`${this.$HOST_NAME}/gameSortNew`, {
    //       id:10000,
    //       device:"pc"
    //     })
    //     if(res&&res.code==200){
    //       this.navList=res.data[10000];
    //       this.navList.unshift(
    //         {name:"热门",id:""},
    //         {
    //           name:"全部彩票",id:""
    //         }
    //       )
    //       this.getNavcont({name:"热门"},0)
    //     }
    // },

    // // 分类展示处所
    // async getNavcont(item, index) {
    //   let oclassName=item.name;
    //   let timeList=[];
    //   this.navIndex = index;
    //   this.navCont = [];
    //   if(item.name=="全部彩票"){
    //     timeList=this.allList;
    //     timeList.forEach((item,index)=>{
    //       item.className="全部彩票"
    //     })
    //   }else if(item.name=="热门"){
    //     timeList = this.allList.slice(0, 15);
    //      timeList.forEach((item,index)=>{
    //       item.className="热门"
    //     })
    //   }else{
    //     let res = await this.$http.post(`${this.$HOST_NAME}/gameSortNew`, {
    //       id:item.id,
    //       device:"pc"
    //     })
    //     // console.log(res)
    //     timeList=res.data[item.id]

    //     timeList = this.allList.slice(0, 15);
    //       timeList.forEach((item,index)=>{
    //       item.className=oclassName
    //     })
    //   }
    //   // console.log(timeList);
    //   let res = await this.$http.get(`${this.$HOST_NAME}/lottery/getIssues`, {})
    //   localStorage.setItem('fenleiData',JSON.stringify(res.data));
    //   // console.log(res)
    //   res.data.forEach(v => {
    //     timeList.forEach(s => {
    //       if(s.id == v.lotteryId ){
    //         s.issue = (v.issue).toString().length>8 ? (v.issue).toString().slice(4) : v.issue;
    //       }
    //     });
    //   });
    //   this.navCont=timeList.filter((item,index)=>{
    //     if(item.id!=21&&item.id!=10044&&item.id!=10045){
    //       return item;
    //     }
    //   })
    // },



        // 二版修改
    gotorules(className,id){
      if(className=="时时彩"){
        this.$router.push({path:`/rules/ssc?id=${id}`})
      }else if(className=="六合彩"){
        this.$router.push({path:`/rules/lhc?id=${id}`})
      }else if(className=="PC蛋蛋"){
        this.$router.push({path:`/rules/pcdd?id=10`})
      }else if(className=="快3"){
        this.$router.push({path:`/rules/k3?id=${id}`})
      }else if(className=="11选5"){
        this.$router.push({path:`/rules/cp11x5?id=${id}`})
      }else if(className=="PK10"){
        this.$router.push({path:`/rules/pk10?id=${id}`})
      }else if(className=="快乐十分"){
        this.$router.push({path:`/rules/klsf?id=${id}`})
      }else if(className=="全部彩票"||className=="热门"){
        this.$router.push({path:'/rules/ssc?id=16'})
      }else if(className=="低频彩"){
        this.$router.push({path:`/rules/sd?id=29`})
      }
    },  
    async getNavDatasFc() {
      let res = await this.$http
        .post(`${this.$HOST_NAME}/gameSortNew`, {
          id:30001,
          device:"pc"
        })
        if (res && res.code == 200) {
          // 所有彩票的数据，不包括热门和全部彩票
          this.allList = res.data[30001];
          this.getFen()
        }
    },
    async getFen(){
      let res = await this.$http.post(`${this.$HOST_NAME}/gameSortNew`, {
          id:10000,
          device:"pc"
        })
        if(res&&res.code==200){
          this.navList=res.data[10000];
          this.navList.unshift(
            {name:"热门",id:""},
            {
              name:"全部彩票",id:""
            }
          )
          this.getNavcont({name:"热门"},0)
        }
    },

    // 分类展示处所
    async getNavcont(item, index) {
      let oclassName=item.name;
      let timeList=[];
      this.navIndex = index;
      this.navCont = [];
      if(item.name=="全部彩票"){
        timeList=this.allList;
        timeList.forEach((item,index)=>{
          item.className="全部彩票";
          item.fenleiClass="全部彩票";
          item.fenleiId=4;
        })
      }else if(item.name=="热门"){
        timeList = this.allList.slice(0, 15);
         timeList.forEach((item,index)=>{
          item.className="热门";
          item.fenleiClass="热门";
          item.fenleiId=4;
        })
      }else{
        let res = await this.$http.post(`${this.$HOST_NAME}/gameSortNew`, {
          id:item.id,
          device:"pc"
        })
        // console.log(res)
        timeList=res.data[item.id]
        this.flClass(item.id,timeList)
        // timeList = this.allList.slice(0, 15);
        //   timeList.forEach((item,index)=>{
        //   item.className=oclassName
        // })
      }
      // console.log(timeList);
      let res = await this.$http.get(`${this.$HOST_NAME}/lottery/getIssues`, {})
      localStorage.setItem('fenleiData',JSON.stringify(res.data));
      // console.log(res)
      res.data.forEach(v => {
        timeList.forEach(s => {
          if(s.id == v.lotteryId ){
            s.issue = (v.issue).toString().length>8 ? (v.issue).toString().slice(4) : v.issue;
          }
        });
      });
      // this.navList=timeList;
      this.navCont=timeList.filter((item,index)=>{
        // if(item.id!=21&&item.id!=10044&&item.id!=10045){
        //   return item;
        // }
        return item;
      })
    },
    flClass(id,list){
      let fenleiClass="";
      let fenleiId="";
      switch(id){
        case 10006:
        fenleiClass="11选5";
        fenleiId=24;
        break;
        case 10009:
        fenleiClass="低频彩";
        fenleiId=29;
        break;
        case 10013:
        fenleiClass="时时彩";
        fenleiId=16;
        break;
        case 10008:
        fenleiClass="PK10";
        fenleiId=12;
        break;
        case 10007:
        fenleiClass="PC蛋蛋";
        fenleiId=10;
        break;
        case 10010:
        fenleiClass="六合彩";
        fenleiId=18;
        break;
        case 10011:
        fenleiClass="快3";
        fenleiId=27;
        break;
        case 10012:
        fenleiClass="快乐十分";
        fenleiId=5;
        break;
      }
      list.forEach(item=>{
        item.fenleiClass=fenleiClass;
        item.fenleiId=fenleiId;
      })

    },



    // async getNavDatasFc() {
    //   let res = await this.$http
    //     .post(`${this.$HOST_NAME}/games/lottery/leftMenu`, {
    //       prePage: 100
    //     })
    //     if (res && res.code == 200) {
    //       res.data.unshift(
    //         { className: "热门", lottery: [], classId: "88" },
    //         { className: "全部彩票", lottery: [], classId: "999" }
    //       ); 

    //       this.allList = res.data;
    //       this.getDatas();
    //     }
    // },

    // async getDatas() {
    //   let res = await this.$http.get(`${this.$HOST_NAME}/lottery/getIssues`, {})
    //   if (res && res.code == 200) {
    //     localStorage.setItem('fenleiData',JSON.stringify(res.data));
    //     res.data.forEach(v => {
    //       this.allList.forEach(s => {
    //         if(s.id == v.lotteryId ){
    //           s.issue = (v.issue).toString().length>8 ? (v.issue).toString().slice(4) : v.issue;
    //         }
    //       });
    //     });
        
    //     this.getNavDate();
    //     this.getNavcont("热门", 0);
        
    //   } else {
    //     this.dNotify(res.message, "error");
    //   }
    // },
    // getNavDate(){
    //   this.allList.forEach(v => {
    //     let str = v.className;
    //     if (this.navList.indexOf(str) < 0) {
    //       this.navList.push(str);
    //     }
    //   });
    // },
    goLnk(id) {
      if (localStorage.token) {
        this.$router.push({
          path: "/plays/tradition/" + id
        });
      } else {
        this.$router.push({path:"/home/login"})
      }
    },

    // getNavcont(item, index) {
    //   this.navIndex = index;
    //   this.navCont = [];
    //   if (item == "全部彩票") {
    //     if (this.allList[0].className == "热门") {
    //       this.allList.splice(0, 2);
    //     }
    //     this.navCont = this.allList;
    //   } else if (item == "热门") {
    //     let cont = this.allList;
    //     if (cont[0].className == "热门") {
    //       cont.splice(0, 2);
    //     }
    //     this.navCont = cont.slice(0, 15);
    //   } else {
    //     this.allList.forEach(v => {
    //       if (item == v.className) {
    //         this.navCont.push(v);
    //       }
    //     });
    //   }
    //   // this.$router.push("/home/caipiao/" + v.classId);
    // }
  },
  watch: {},
  created() {
    this.getNavDatasFc();
    // this.svgShow = true;
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
      // debugger;
      let obj = {};
      Object.assign(obj, obj, this.random[Math.floor(Math.random() * 10)]);
      datas.push(obj);
    }
    // 求出随机数
    datas.forEach((item, v) => {
      let arr = [2, 3, 5, 4];
      item.out =
        Math.ceil(Math.random() * 10) *
        Math.pow(
          arr[Math.floor(Math.random() * arr.length)],
          arr[Math.floor(Math.random() * arr.length)]
        );
      item.account = generateMixed(3);
    });
    this.scrollDatas = datas;
  },
  filters: {
      capitalize: function (value) {
        try {
        //  return `/static/public/image/lottery/ico/vp-${ value.includes('赛车')? (value.includes('PK10') ? value : value + 'PK10'):value}.png`
         return `/static/public/image/lottery/nico/png/${value}.png`
        } catch (err) {
          return `/static/public/image/lottery/nico/png/438.png`
        }

      }
    },
};
</script>
<style lang="less" scoped>
@keyframes animatesub {
  0% {
    top: 0;
  }
  100% {
    top: -2000px;
  }
}
.caipiao {
  padding: 15px 0;
  background-color: #e6e6e6;

  .wrap {
    width: 1000px;
    margin: auto;
    overflow: hidden;
    clear: both;
  }

  .carouse {
    width: 800px;
    float: left;

    img {
      height: 240px;
    }
    //没有起作用
    // .el-carousel__indicators {
    //   left: 95%;

    //   .el-carousel__button {
    //     width: 8px;
    //     height: 8px;
    //     border-radius: 50%;
    //   }
    // }
  }
  .win {
    float: left;
    width: 20%;
    overflow: hidden;
    height: 240px;
    background: #515860;
    box-sizing: border-box;

    h3 {
      font-size: 20px;
      text-align: center;
      line-height: 45px;
      margin: 0;
      border-bottom: 1px solid #777d84;
      font-weight: 100;
      color: #fff;
    }
    .winerList {
      position: relative;
      animation: animatesub 80s linear infinite;

      &:hover{
        animation-play-state: paused;
      }

      li {
        height: 58px;
        cursor: default;
        padding: 0 15px;

        img {
          height: 36px;
          width: 36px;
          border-radius: 50%;
          float: left;
          margin-top: 2px;
          margin-right: 9px;
          transition: 0.5s;
        }

        p {
          margin: 0;
          float: left;
          line-height: 1.7;
          font-size: 12px;
          color: #fff;

          span {
            color: #f63745;
            margin: 0 5px;
          }
        }
      }
    }
  }

  .shadow {
    height: 15px;
    background: linear-gradient(180deg, #7a7a7a 0, #c3c4c3);

    i {
      display: block;
      float: left;
      border-right: 20px solid transparent;
      border-top: 15px solid #e6e6e6;
    }
    em {
      display: block;
      float: right;
      border-left: 20px solid transparent;
      border-top: 15px solid #e6e6e6;
    }
  }

  .lotteryNav {
    background: #ffffff;

    ul:nth-child(1) {
      height: 40px;
      background: #455467;
      padding-left: 10px;
      overflow: hidden;
      clear: both;

      li {
        float: left;
        line-height: 40px;

        a {
          color: #fff;
          font-size: 14px;
          line-height: 20px;
          display: inline-block;
          margin: 10px 0;
          width: 100px;
          text-align: center;
          margin-top: 7px;
        }
        &.active {
          background: #fff;
          border-radius: 5px 5px 0 0;
          margin-top: 3px;
          height: 37px;

          a {
            color: #333;
            border-color: #fff;
            margin-top: 10px;
          }
        }
      }
      li + li a {
        border-left: 1px solid #74808f;
      }
    }
    ul:nth-child(2) {
      min-height: 100px;
      padding: 8px;
      width: 100% !important;

      li {
        position: relative;
        float: left;
        width: 226px;
        height: 100px;
        border: 1px solid #e3e3e3;
        padding: 16px 20px;
        box-sizing: border-box;
        transition: 0.3s;
        margin: 10px;
        box-shadow: 1px 1px 1px #8a8a8a;

        a {
          img {
            width: 60px;
          }
          div {
            width: 124px;
            margin-top: 8px;
            position: absolute;
            top: 15px;
            right: 10px;

            h4 {
              text-align: center;
              font-size: 18px;
              margin: 0;
              color: #516073;
              font-weight: 100;
            }
            p {
              text-align: center;
              color: #777;
              font-size: 14px;
              margin: 10px 0;
            }
          }
        }

        .lotteryNow {
          position: absolute;
          left: 0;
          top: 0;
          background: rgba(81, 96, 115, 0.9);
          width: 100%;
          height: 100%;
          text-align: center;
          display: none;
          z-index: 3;

          .now {
            border: 1px solid #dfdfdf;
            color: #dfdfdf;
            font-size: 14px;
            padding: 0px 21px;
            height: 30px;
            line-height: 28px;
            margin-top: 33px;
            display: inline-block;

            &:hover {
              background: #bd2004;
              border: 1px solid #e6391f;
            }
          }

          .help {
            position: absolute;
            bottom: 5px;
            right: 6px;
            border-radius: 50%;
            height: 22px;
            width: 22px;
            line-height: 22px;
            color: #dfdfdf;
            border: 1px solid #dfdfdf;
          }

          .helpTip {
            position: absolute;
            color: #fff;
            bottom: 5px;
            right: 40px;
            display: none;

            em {
              padding: 0 6px;
              display: block;
              width: 64px;
              height: 22px;
              box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
              line-height: 22px;
              background: #bd2004;
              border-radius: 3px;
              font-size: 10px;

              &::after {
                content: "";
                display: block;
                border: 6px dashed transparent;
                border-left-color: #bd2004;
                top: 5px;
                right: -11px;
                position: absolute;
                width: 0;
                height: 0;
              }
            }
          }

          .help:hover {
            background: #c3c3c3;
          }

          .help:hover + .helpTip {
            display: block;
          }
        }
        &:hover {
          .lotteryNow {
            display: block;
          }
        }
      }
    }
  }
}
</style>

