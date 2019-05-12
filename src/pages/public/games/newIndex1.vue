<template>
  <div id="maincontainer">
    <div class="mainContent">
      <!-- <div class="top-info">
        <div class="jackpots">
          <div id="j-count" class="pt">
            <span class="num-item">{{jackpotNum1.toString().substring(0,1)}}</span>
            <span class="num-item">{{jackpotNum1.toString().substring(1,2)}}</span>
            <span class="num-item">{{jackpotNum1.toString().substring(2,3)}}</span>
            <span class="num-item">，</span>
            <span class="num-item">{{jackpotNum1.toString().substring(3,4)}}</span>
            <span class="num-item">{{jackpotNum1.toString().substring(4,5)}}</span>
            <span class="num-item">{{jackpotNum1.toString().substring(5,6)}}</span>
            <span class="num-item">，</span>
            <span class="num-item">{{jackpotNum1.toString().substring(6,7)}}</span>
            <span class="num-item">{{jackpotNum1.toString().substring(7,8)}}</span>
            <span class="num-item">{{jackpotNum1.toString().substring(8,9)}}</span>
            <span class="num-item">.</span>
            <span class="num-item">{{jackpotNum1.toString().substring(9,10)}}</span>
            <span class="num-item">{{jackpotNum1.toString().substring(10,11)}}</span>
          </div>
          <div id="j-count" class="dt">
            <span class="num-item">{{jackpotNum1.toString().substring(1,2)}}</span>
            <span class="num-item">{{jackpotNum1.toString().substring(2,3)}}</span>
            <span class="num-item">{{jackpotNum1.toString().substring(3,4)}}</span>
            <span class="num-item">，</span>
            <span class="num-item">{{jackpotNum1.toString().substring(5,6)}}</span>
            <span class="num-item">{{jackpotNum1.toString().substring(6,7)}}</span>
            <span class="num-item">{{jackpotNum1.toString().substring(8,9)}}</span>
            <span class="num-item">.</span>
            <span class="num-item">{{jackpotNum1.toString().substring(9,10)}}</span>
            <span class="num-item">{{jackpotNum1.toString().substring(10,11)}}</span>
          </div>
        </div>
      </div> -->
      <!-- <div class="mainbox">
        <div class="nav prev">&lt;</div>
        <div class="nav next">&gt;</div>
        <div class="box">
          <ul id="slider">
            <li
              :class="[{'active':$route.query.id===item.id},item.class]"
              :key="index"
              v-for="(item,index) in rollList"
              @click="fetchgames(item)"
            >
              <i :class="'slider-'+item.class+'-icon'"></i>
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div> -->
      
      <div ref="search-container" class="search-container">
        <div class="search-head">
            <div class="left">
              <!-- <label class="label">搜索游戏:</label> -->
              <div class="ipt-group">
                <input v-model="iptVal" class="ipt" placeholder="请输入游戏名称" autocomplete="off" @keyup.enter="search()">
                <div class="searchbox" @click="search()">
                    <!-- <i class="bg-search" ></i> -->
                </div> 
                <div v-if="nowTypeList.type.list.length" class="right">
                    <span @click="reset()">x</span>
                </div>
              </div>
              <!-- <button class="btn-search" >搜索</button> -->
            </div>
           
        </div>
        <div class="search-info">
          
          <div class="search-detail">
            <div class="search-type">
              <ul class="gameType clear">
                 <li v-for="(item,index) in rollList" :key="index" class="lf gameName" @click="fetchgames(item)" :class="[{'active':$route.query.id===item.id},item.class]"><a href="javascript:;">{{item.name}}</a></li>
                 <span class="allGame">全部游戏：</span>
              </ul>
              <div v-if="nowTypeList.type.list.length">
                <dl class="search-game top">
                    <dt>游戏类型:</dt>
                    <dd>
                    <a
                        href="javascript:;"
                        @click="resulttype(item)"
                        :key="index"
                        :class="{'active':item.tag===currenttype}"
                        v-for="(item,index) in  nowTypeList.type.list"
                    >{{item.name}}</a>
                    </dd>
                </dl>
                <dl v-if="nowTypeList.line.list.length" class="search-game bottom">
                    <dt>赔钱线数:</dt>
                    <dd>
                    <a
                        href="javascript:;"
                        @click="resultline(item)"
                        :key="index"
                        :class="{'active':item.tag===currentline}"
                        v-for="(item,index) in nowTypeList.line.list"
                    >{{item.name}}</a>
                    </dd>
                </dl>
                <dl v-if="nowTypeList.thirt.list.length" class="search-game bottom">
                    <dt>游戏类型:</dt>
                    <dd>
                    <a
                        href="javascript:;"
                        @click="resultTag(item)"
                        :key="index"
                        :class="{'active':item.tag===currentTag}"
                        v-for="(item,index) in nowTypeList.thirt.list"
                    >{{item.name}}</a>
                    </dd>
                </dl>
              </div>
              
            </div>
          </div>
        </div>
     
      </div>
      <div class="game-box">
        <div class="game-content">
          <ul>
            <li class="game-item" :key="index" v-for="(item,index) in gameData">
              <div class="game-pic">
                <img
                  :src="item.icon"
                  :class="{'default':true,'mg-pic':$route.query.id==='26'}"
                  alt
                >
              </div>
              <div class="gameMask">
                <p class="gameItemName">{{item.name}}</p>
                <div class="collectImg"></div>
              </div>
              <div class="bgcover">
                 
              </div>
              <div class="goGamebtn">
                        <a
                        v-show="Public_User==='test'||!Public_User"
                        href="javascript:void(0)"
                        id="try"
                        @click="loginTest(item)"
                    >试玩游戏</a>
                    <a
                        v-show="Public_User!=='test'"
                        href="javascript:void(0)"
                        class="play"
                        @click="loginGame(item)"
                    >进入游戏</a> 
              </div>
              
            </li>
          </ul>
        </div>
        <ul class="pagenation" v-show="total>1">
          <li>
            <a href="javascript:;" @click="firstpage()">首页</a>
          </li>
          <li>
            <a href="javascript:;" @click="prevpage()">上一页</a>
          </li>
          <li>
            <a href="javascript:;">当前：{{pageDatas.page}}</a>
          </li>
          <li>
            <a href="javascript:;" @click="nextpage()">下一页</a>
          </li>
          <li>
            <a href="javascript:;" @click="lastpage()">尾页</a>
          </li>
          <li>
            <a href="javascript:;">共{{total}}页</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { _SetGet, _SetPost } from "@/service/public/service.js";
// import "@/assets/home-main-iconfont/iconfont2.css";
import mixin from "./public.js";

export default {
  mixins: [mixin],
  data() {
    return {
      showGames:[],
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
      scrollDatas: [],
      jackpotNum1: 41318571943,
      jackpotNum2: 12961370,
      publicUrl: "http://img.7900005.com/",
      currenttype: "",
      currentline: "",
      currentTag: "",
      gameData: [],
      offsetHeight: 100,
      total: "",
      iptVal: "",
      pageDatas: {
        page: 1
      },
      rollList: [
        // {
        //   id: "26",
        //   name: "MG老虎机",
        //   class: "mg",
        //   type: {
        //     list: [
        //       { name: "全选", tag: "" },
        //       { name: "最新游戏", tag: "NEW" },
        //       { name: "热门游戏", tag: "HOT" },
        //       { name: "经典游戏", tag: "CLA" },
        //       { name: "老虎机", tag: "SLO" },
        //       { name: "奖池游戏", tag: "JPT" }
        //     ]
        //   },
        //   line: {
        //     list: [
        //       { name: "全选", tag: "" },
        //       { name: "单线", tag: "1-1" },
        //       { name: "5-10", tag: "5-10" },
        //       { name: "15-20", tag: "15-20" },
        //       { name: "243游戏", tag: "243" },
        //       { name: "更多", tag: "MOR" }
        //     ]
        //   }
        // },
        // {
        //   id: "17",
        //   name: "AG老虎机",
        //   class: "ag",
        //   type: {
        //     list: [
        //       { name: "全选", tag: "" },
        //       { name: "最新游戏", tag: "NEW" },
        //       { name: "热门游戏", tag: "HOT" },
        //       { name: "老虎机", tag: "SLO" },
        //       { name: "大额投注", tag: "MAX" },
        //       { name: "小额投注", tag: "MIN" },
        //       { name: "经典拉霸", tag: "FRT" },
        //       { name: "消消乐", tag: "CLH" }
        //     ]
        //   },
        //   line: {
        //     list: [
        //       { name: "全选", tag: "" },
        //       { name: "5-10线", tag: "5-10" },
        //       { name: "15-20线", tag: "15-20" },
        //       { name: "25-30线", tag: "25-30" },
        //       { name: "更多", tag: "MOR" }
        //     ]
        //   }
        // },
        // {
        //   id: "19",
        //   name: "PT老虎机",
        //   class: "pt",
        //   type: {
        //     list: [
        //       { name: "全选", tag: "" },
        //       { name: "最新游戏", tag: "NEW" },
        //       { name: "热门游戏", tag: "HOT" },
        //       { name: "经典游戏", tag: "CLA" },
        //       { name: "奖池游戏", tag: "JPT" },
        //       { name: "老虎机", tag: "SLO" }
        //     ]
        //   },
        //   line: {
        //     list: [
        //       { name: "全选", tag: "" },
        //       { name: "单线", tag: "1-1" },
        //       { name: "5-10线", tag: "5-10" },
        //       { name: "15-20线", tag: "15-20" },
        //       { name: "243线", tag: "243" },
        //       { name: "更多", tag: "MOR" }
        //     ]
        //   },
        //   thirt: {
        //     list: [
        //       { name: "全选", tag: "" },
        //       { name: "卡通", tag: "ANI" },
        //       { name: "洛奇", tag: "RCK" },
        //       { name: "少女", tag: "GIR" }
        //     ]
        //   }
        // },
        // {
        //   id: "32",
        //   name: "CQ9老虎机",
        //   class: "cq9",
        //   type: {
        //     list: [
        //       { name: "全选", tag: "" },
        //       { name: "最新游戏", tag: "NEW" },
        //       { name: "热门游戏", tag: "HOT" },
        //       { name: "老虎机", tag: "SLO" },
        //       { name: "捕鱼游戏", tag: "FSH" }
        //     ]
        //   },
        //   line: {
        //     list: [
        //       { name: "全选", tag: "" },
        //       { name: "单线", tag: "1-1" },
        //       { name: "5-10线", tag: "5-10" },
        //       { name: "15-20线", tag: "15-20" },
        //       { name: "243线", tag: "243" }
        //     ]
        //   }
        // },
        {
          id: "10042",
          name: "开元棋牌",
          class: "ky",
          type: { list: [] },
          line: { list: [] }
        },
        {
          id: "10041",
          name: "VG棋牌",
          class: "vg",
          type: { list: [] },
          line: { list: [] }
        },
        // {
        //   id: "31",
        //   name: "FG老虎机",
        //   class: "fg",
        //   type: { list: [] },
        //   line: { list: [] }
        // },
        // {
        //   id: "29",
        //   name: "JDB电子",
        //   class: "jdb",
        //   type: { list: [] },
        //   line: { list: [] }
        // },
        // {
        //   id: "18",
        //   name: "BBIN老虎机",
        //   class: "bbin",
        //   type: {
        //     list: [
        //       { name: "全选", tag: "" },
        //       { name: "最新游戏", tag: "NEW" },
        //       { name: "热门游戏", tag: "HOT" },
        //       { name: "老虎机", tag: "SLO" },
        //       { name: "刮刮乐", tag: "SCR" },
        //       { name: "桌上游戏", tag: "TBL" },
        //       { name: "大型机台", tag: "LMC" }
        //     ]
        //   },
        //   line: { list: [] }
        // },
        // {
        //   id: "27",
        //   name: "AE老虎机",
        //   class: "ae",
        //   type: { list: [] },
        //   line: { list: [] }
        // },
        // {
        //   id: "30",
        //   name: "DT老虎机",
        //   class: "dt",
        //   type: {
        //     list: [
        //       { name: "全选", tag: "" },
        //       { name: "最新游戏", tag: "NEW" },
        //       { name: "热门游戏", tag: "HOT" },
        //       { name: "老虎机", tag: "SLO" },
        //       { name: "奖池游戏", tag: "JPT" },
        //       { name: "经典游戏", tag: "CLA" }
        //     ]
        //   },
        //   line: {
        //     list: [
        //       { name: "全选", tag: "" },
        //       { name: "单线", tag: "1-1" },
        //       { name: "5-10线", tag: "5-10" },
        //       { name: "15-20线", tag: "15-20" },
        //       { name: "243线", tag: "243" },
        //       { name: "更多", tag: "MOR" }
        //     ]
        //   }
        // },
        // {
        //   id: "24",
        //   name: "MW老虎机",
        //   class: "mw",
        //   type: { list: [] },
        //   line: { list: [] }
        // },
        // {
        //   id: "28",
        //   name: "TTG老虎机",
        //   class: "ttg",
        //   type: {
        //     list: [
        //       { name: "全选", tag: "" },
        //       { name: "最新游戏", tag: "NEW" },
        //       { name: "热门游戏", tag: "HOT" },
        //       { name: "老虎机", tag: "SLO" },
        //       { name: "经典游戏", tag: "CLA" }
        //     ]
        //   },
        //   line: {
        //     list: [
        //       { name: "全选", tag: "" },
        //       { name: "单线", tag: "1-1" },
        //       { name: "5-10线", tag: "5-10" },
        //       { name: "15-20线", tag: "15-20" },
        //       { name: "243线", tag: "243" },
        //       { name: "更多", tag: "MOR" }
        //     ]
        //   }
        // }
      ],
      nowTypeList: {
        type: { list: [] },
        line: { list: [] },
        thirt: { list: [] }
      },
      setInter: null
    };
  },
  methods: {

    
    //获取数据
    async getData(item) {
      this.gameData = [];
      let id=this.$route.query.id
      console.log("13312132")
      let res = await _SetPost(`${this.$HOST_NAME}/gameSortNew`, {
         device: "pc",
         id
      });
      console.log(res);
      if (res && res.code === 200) {
        console.log(res.data.data);
        this.gameData = res.data[id];

        this.total = res.data.last_page;
      }
        this.showGames=res.data[id];
        // this.gameData=this.showGames.splice(0,20)
        this.pageDatas.page=1;
        this.total = Math.ceil(this.showGames.length/20);
        this.fenshu()
    },

    //点击导航栏
    async fetchgames(item) {
      
      let scrollTop = document.documentElement.scrollTop;
      this.$router.push({
        path: `/home/qipai`,
        query: {
          id: item.id,
          name: item.name
        }
      });
      window.scrollTo(0, scrollTop);
      this.nowTypeList.type.list = item.type.list;
      this.nowTypeList.line.list = item.line.list;
      if (item.thirt) {
        this.nowTypeList.thirt.list = item.thirt.list;
      } else {
        this.nowTypeList.thirt.list = [];
      }

      this.clear();
      console.log("撒旦记录卡")
      this.getData();
      this.$nextTick(() => {
        // console.log( this.$refs['search-container'].offsetHeight)
        this.offsetHeight =
          this.$refs["search-container"].offsetHeight < 100
            ? 100
            : this.$refs["search-container"].offsetHeight;
        // console.log( this.$refs['list_winner'])
      });
    },
    //下一页
    async nextpage() {
      if (this.pageDatas.page < this.total) {
        this.pageDatas.page = this.pageDatas.page + 1;
        this.fenshu()
        // this.getData();
      }
    },
    //上一页
    async prevpage() {
      if (this.pageDatas.page > 1) {
        this.pageDatas.page = this.pageDatas.page - 1;
        this.fenshu()
        // this.getData();
      }
    },
    //第一页
    async firstpage() {
      this.pageDatas.page = 1;
        this.fenshu()
      // this.getData();
    },
    //最后一页
    async lastpage() {
      this.pageDatas.page = this.total;
        this.fenshu()
      // this.getData();
    },

    resulttype(item) {
      this.currenttype = item.tag;
      this.getData();
    },
    resultline(item) {
      this.currentline = item.tag;
      this.getData();
    },
    resultTag(item) {
      this.currentTag = item.tag;
      this.getData();
    },

    async search() {
      this.pageDatas.page = 1;
      this.gameData=this.showGames.filter(item=>{
        if(item.name.includes(this.iptVal)){
          return item;
        }
      })
      console.log(this.gameData);
    },
    async clear() {
      this.iptVal = "";
      this.currenttype = "";
      this.currentline = "";
      this.currentTag = "";
      this.pageDatas.page = 1;
    },
    reset() {
      this.clear();
      this.resetItem();
    },
    resetItem() {
      this.rollList.forEach(item => {
        if (item.id === this.$route.query.id) {
          this.fetchgames(item);
        }
      });
    },
    jackpotNumAdd() {
      clearInterval(this.setInter);
      this.setInter = setInterval(() => {
        this.jackpotNum1 = this.jackpotNum1 + 8.56;
        this.jackpotNum2 = this.jackpotNum2 + 8.56;
      }, 100);
    },
        // 分页数量
    fenshu(){
      this.gameData=this.getPageCurData(this.showGames,20,this.pageDatas.page)
    },

    getPageCurData(date, PageSize, PageNo) {
      this.data=[];
      for(let i = 0; i < PageSize; i++) {
         let idx = PageSize * PageNo - PageSize + i; 
      if(idx < date.length) this.data.push(date[idx]); 
      }
         return this.data;
    },
    // async slider() {
    //   let ul = document.getElementById("slider");
    //   let prev = document.getElementsByClassName("prev")[0];
    //   let next = document.getElementsByClassName("next")[0];
    //   let main = document.getElementsByClassName("mainbox")[0];
    //   let n = -97;

    //   function left() {
    //     let oLi = ul.children[0];
    //     ul.className = "move";
    //     setTimeout(function() {
    //       ul.removeChild(oLi);
    //       ul.appendChild(oLi);
    //       ul.className = "";
    //     }, 500);
    //   }

    //   function right() {
    //     let last = ul.lastElementChild;
    //     ul.removeChild(last);
    //     ul.insertBefore(last, ul.childNodes[0]);
    //     ul.style.left = n + "px";
    //     ul.className = "back";
    //     setTimeout(function() {
    //       ul.className = "";
    //       ul.style.left = "";
    //     }, 500);
    //   }

    //   prev.onclick = right;
    //   next.onclick = left;
    //   let timer = null;
    //   timer = setInterval(left, 4000);
    //   main.onmouseover = function() {
    //     clearInterval(timer);
    //   };
    //   main.onmouseout = function() {
    //     timer = setInterval(left, 4000);
    //   };
    // },
    // 初始化列表
    rollListInit() {
      let nrollList = [];
      this.rollList.forEach((item, index) => {
        if (item.id == 26 || item.id == 19) {
        } else {
          nrollList.push(item);
        }
      });
      this.rollList = nrollList;
    }
  },
  created() {
    // if (this.$store.state.szc.changedian) {
    //   this.fetchgames(this.$store.state.szc.changedian);
    // }
    this.$nextTick(() => {
    //   this.slider();
      if (this.$route.query.id) {
        this.resetItem();
      } else {
        this.fetchgames(this.rollList[0]);
      }
    });
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

    // 随机用户名
    function generateMixed(n) {
      var res = "";
      for (var i = 0; i < n; i++) {
        var id = Math.ceil(Math.random() * 62);
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
    });
    this.scrollDatas = datas;
  },
  mounted() {
    if (localStorage.config) {
      let config = JSON.parse(localStorage.config);
      this.publicUrl = config.statics;
    }
    this.jackpotNumAdd();

    // 初始化导航栏的数据
    if (this.$websiteName == "cjw") {
      this.rollListInit();
    }
  },
  watch: {
    $route() {
      this.getData();
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
.gameType{
    padding-left:82px;
    position:relative;
    li.active{
        a{
            color: #7d34c7;
            border-bottom: 2px solid #7d34c7;
        }
    }
}
.allGame{
    position:absolute;
    left:0;
    top:8px;
    margin-right: 10px;
    color: #636363;
    display: inline-block;
    vertical-align: middle;
    font-size: 17px;
    line-height:28px;
}
.gameName{
    margin: 8px -3px;
    padding: 0 10px;
    line-height: 28px;
    text-decoration: none;
    text-align: center;
    background-color: transparent;
    font-size: 17px;
    a{
        color: #636363;
    }
    a:hover{
        color: #7d34c7;
        border-bottom: 2px solid #7d34c7;
        cursor:pointer;
    }
   
}
.lf{
    float:left;
}
.rt{
    float:right;
}
.clear:after{
    content:'';
    display:block;
    clear:both;
}
#maincontainer {
  // padding-bottom: 20px;
  // padding-top: 10px;
  // background: url("/static/public/image/game/ptgame/slotGame_bg.jpg") no-repeat,
  //   #f3f2ef;
  // background-size: 100% 120%;
}

.mainContent {
//   background-color: #fafafa;
  margin: 0 auto;
  width: 1200px;
  padding-bottom: 1px;
}

.banner {
  background-color: #000;

  img {
    display: block;
    width: 960px;
    margin: 0 auto;
    cursor: pointer;
  }
}

.top-info {
  height: 164px;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  margin: 0 auto;

  .jackpots {
    width: 980px;
    height: 164px;
    position: absolute;
    z-index: 2;
    background: url(http://betsb.3000018.com/game/img/jackpot-light1.png) no-repeat;
    background-size: contain;
    background-position: center;
    /* text-align: center; */
    /* margin: 0 auto; */
    left: 50%;
    transform: translateX(-50%);

    #j-count {
      position: absolute;
      font-size: 19px;
      color: #451804;

      .num-item {
        display: inline-block;
        width: 22px;
        height: 35px;
        padding: 0 5px;
        line-height: 35px;
        background: #fec352 -webkit-linear-gradient(#fec352, #da9306);
        background: #fec352 -o-linear-gradient(#fec352, #da9306);
        background: #fec352 linear-gradient(#fec352, #da9306);
        border-radius: 3px;
        margin-right: 3px;
        text-align: center;
      }
    }

    .pt {
      left: 61px;
      top: 80px;
    }

    .dt {
      right: 100px;
      top: 80px;
    }
  }
}

.mainbox {
  margin: 0 auto;
  width: 1000px;
  position: relative;
  margin-top: 30px;

  .box {
    width: 872px;
    height: 90px;
    position: relative;
    margin: 0 auto;
    overflow: hidden;

    #slider {
      position: absolute;
      width: 1200px;

      li {
        width: 97px;
        height: 90px;
        float: left;
        border-top: 1px solid #c1c1c1;
        border-right: 1px dashed #c1c1c1;
        border-bottom: 1px solid #c1c1c1;
        text-align: center;
        position: relative;
        cursor: pointer;

        &:hover {
          background: #b48c68;
          color: #fff;
        }

        span {
          line-height: 32px;
        }

        i {
          margin: 12px auto 5px;
          display: block;
        }
      }

      li.active {
        background: #b48c68;
        color: #fff;
      }
    }
  }

  .nav {
    width: 47px;
    height: 90px;
    position: absolute;
    cursor: pointer;
    border: 1px solid #ccc;
    line-height: 90px;
    font-weight: bold;
    font-size: 24px;
    text-align: center;

    &:hover {
      color: #fff;
      background: #ccc;
    }
  }

  .prev {
    left: 17px;
  }

  .next {
    right: 17px;
  }
}

.slider-mg-icon {
  width: 38px;
  height: 38px;
  background: url("/static/public/image/game/ptgame/slot.png") -68px -126px;
  margin-bottom: 4px !important;
}

.slider-ag-icon {
  width: 67px;
  height: 37px;
  background: url("/static/public/image/game/ptgame/slot.png") -10px -10px;
}

.slider-pt-icon {
  width: 66px;
  height: 37px;
  background-size: 66px;
  background-position: 0 -10px;

  &::after {
    content: "PT";
    position: relative;
    font-size: 48px;
    top: -2px;
    color: #777;
  }

  &.active {
    &::after {
      color: #fff;
    }
  }
}

#pt-tag {
  position: absolute;
  top: 54px;
  left: 12px;
  width: 71.2px;
}

.slider-cq9-icon {
  width: 66px;
  height: 37px;
  background: url("/static/public/image/game/ptgame/cq9.png");
  background-size: 66px;
  background-position: 0 -10px;
}

.slider-ky-icon {
  width: 68px;
  height: 47px;
  background: url("/static/public/image/game/ptgame/ky.png");
  background-size: 76px;
  background-position: -5px -5px;
  margin: 4px auto 3px !important;
}

.slider-fg-icon {
  width: 45px;
  height: 41px;
  background: url("/static/public/image/game/ptgame/fg.png");
  background-size: 45px;
  margin-bottom: 1px !important;
}

.slider-vg-icon {
  width: 45px;
  height: 41px;
  background: url("/static/public/image/game/ptgame/vg.png") no-repeat;
  background-size: 45px;
  background-position: 0 5px;
  margin-bottom: 1px !important;
}

.slider-jdb-icon {
  width: 68px;
  height: 47px;
  background: url("/static/public/image/game/ptgame/jdb.png");
  background-size: 76px;
  background-position: -5px -18px;
  margin-bottom: -5px !important;
}

.slider-bbin-icon {
  width: 55px;
  height: 39px;
  background: url("/static/public/image/game/ptgame/bb.png");
  background-size: 55px;
  background-position: 0 -10px;
  margin-bottom: 2px !important;
}

.slider-ae-icon {
  width: 92px;
  height: 39px;
  background: url("/static/public/image/game/ptgame/ae.png");
  background-size: 92px;
  background-position: 0 -27px;
  margin-bottom: 2px !important;
}

.slider-dt-icon {
  width: 53px;
  height: 40px;
  background: url("/static/public/image/game/ptgame/slot.png") -97px -10px;
  margin-bottom: 1px !important;
}

.slider-mw-icon {
  width: 88px;
  height: 37px;
  background: url("/static/public/image/game/ptgame/mwg.png") no-repeat bottom;
  margin-bottom: 4px !important;
}

.slider-ttg-icon {
  width: 55px;
  height: 39px;
  background: url("/static/public/image/game/ptgame/slot.png") -10px -67px;
  margin-bottom: 2px !important;
}

#slider li:hover .slider-mg-icon,
#slider li.active .slider-mg-icon {
  background: url("/static/public/image/game/ptgame/slot2.png") -170px -68px;
}

#slider li:hover .slider-ag-icon,
#slider li.active .slider-ag-icon {
  background: url("/static/public/image/game/ptgame/slot2.png") -10px -10px;
}

#slider li:hover .slider-pt-icon,
#slider li.active .slider-pt-icon {
  color: white;

  &::after {
    content: "PT";
    position: relative;
    font-size: 48px;
    top: -2px;
    color: #fff;
  }
}

#slider li:hover .slider-cq9-icon,
#slider li.active .slider-cq9-icon {
  background: url("/static/public/image/game/ptgame/cq92.png");
  background-size: 66px;
  background-position: 0 -10px;
}

#slider li:hover .slider-fg-icon,
#slider li.active .slider-fg-icon {
  background: url("/static/public/image/game/ptgame/fg2.png");
  background-size: 45px;
}

#slider li:hover .slider-bbin-icon,
#slider li.active .slider-bbin-icon {
  background: url("/static/public/image/game/ptgame/bb2.png");
  background-size: 55px;
  background-position: 0 -10px;
}

#slider li:hover .slider-ae-icon,
#slider li.active .slider-ae-icon {
  background: url("/static/public/image/game/ptgame/ae2.png");
  background-size: 92px;
  background-position: 0 -27px;
}

#slider li:hover .slider-dt-icon,
#slider li.active .slider-dt-icon {
  background: url("/static/public/image/game/ptgame/slot2.png") -97px -10px;
}

#slider li:hover .slider-mw-icon,
#slider li.active .slider-mw-icon {
  background: url("/static/public/image/game/ptgame/mwg_h.png") no-repeat bottom;
}

#slider li:hover .slider-ttg-icon,
#slider li.active .slider-ttg-icon {
  background: url("/static/public/image/game/ptgame/slot2.png") -10px -67px;
}

.search-container {
  width: 100%;
  // min-height: 150px;
  margin: 0 auto;
  margin-top: 10px;
  position: relative;
   .search-head {
    height: 33px;
    padding: 0;
    padding-right: 60px;
    position: absolute;
    /* display: inline-block; */
    right: 0;
      // border-bottom: 1px dashed #c1c1c1;
      .left {
        float: right;

        

        .label {
          display: inline-block;
          vertical-align: middle;
          color: #b48c68;
          text-align: left;
          font-size: 18px;
          font-weight: 600;
          padding: 0.2em 0.6em 0.3em;
          line-height: 1;
        }

        .ipt-group {
        width: 253px;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        border-radius: 3px 0 0 3px;
        border: 1px solid #afafb4;
        box-sizing: border-box;

          .ipt {
            border: none;
            width: 100%;
            padding: 0 10px;
            height: 32px;
            line-height: 32px;
            color: #c1c1c1;
            background-color: transparent;
            outline: none;
            box-sizing: border-box;
          }
          .searchbox{
            position: absolute;
            right: -60px;
            top: -1px;
            width: 60px;
            height: 34px;
            z-index: 8;
            background: url(/static/public/image/game/ptgame/gobtn.jpg) no-repeat center;
            background-size: cover;
            cursor: pointer;
            // .bg-search {
            //     display: inline-block;
            //     width: 26px;
            //     height: 26px;
            //     vertical-align: middle;
            //     background: url(http://betsb.3000018.com/game/img/slot_sprites.png) -63px -185px;
            //     cursor: pointer;
            //     position: relative;
            //     left: 50%;
            //     top: 50%;
            //     transform: translate(-50%,-50%);
            // }
          }
         
          
          .right {
                // float: right;
                position: absolute;
                right: 10px;
                top: 2px;
                span {
                    // width: 114px;
                    // height: 36px;
                    font-size: 26px;
                    color: #d1d1d1;
                    // background: #787876;
                    // border-radius: 7px;
                    // line-height: inherit;
                    cursor: pointer;
                    // outline: none;
                    // border: 1px solid transparent;
                    // user-select: none;
                    // white-space: nowrap;
                }
            }


        }

        .btn-search {
          width: 92px;
          height: 36px;
          vertical-align: middle;
          background: #b48c68;
          border-radius: 7px;
          font-size: 16px;
          color: #fff;
          display: inline-block;
          padding: 6px 12px;
          margin-bottom: 0;
          font-weight: 400;
          text-align: center;
          white-space: nowrap;
          cursor: pointer;
          user-select: none;
          border: 1px solid transparent;
          outline: none;
        }
      }

      
    }
  // border-bottom: 1px dashed #c9c9c9;
  .search-info {
    width: 800px;
    padding-top: 0px;
    // border-right: 1px dashed #c1c1c1;
   

    .search-detail {
      margin-top: 15px;
      padding-left: 7px;
      padding-bottom: 16px;
      overflow: hidden;
      text-align: left;
      border: none;

      .search-type {
        // float: left;
        // border-right: 1px dashed #c9c9c9;
        .search-game {
            margin-bottom: 10px;
            height: 40px;
            line-height: 40px;

          dt {
            margin-right: 10px;
            color: #636363;
            display: inline-block;
            vertical-align: middle;
            // font-weight: 700;
            font-size: 15px;
          }

          dd {
            display: inline-block;
            vertical-align: middle;

            a {
              display: inline-block;
              margin: 0 4px;
              padding: 0 10px;
              line-height: 28px;
              color: #636363;
              text-decoration: none;
              text-align: center;
              background-color: transparent;
              font-size: 15px;
   
              &:hover {
                color: #7d34c7;
                border-bottom: 2px solid #7d34c7;
              }
            }

            .active {
              color: #7d34c7;
              border-bottom: 2px solid #7d34c7;
              padding: 0 7px;
            }
          }
        }
      }
    }
  }

  .list_winner {
    position: absolute;
    width: 250px;
    background: #fff;
    top: 38px;
    right: 0;
    border-bottom: 1px solid #b48c68;
    overflow: hidden;

    .section_title {
      padding-left: 20px;
      background: #b48c68;
      line-height: 50px;
      color: #fff;
    }

    .topLoop {
      ul {
        overflow: hidden;
        border-left: 1px solid #b48c68;
        border-right: 1px solid #b48c68;

        .wrap {
          position: relative;
          top: 0;
          -webkit-animation: animateSub 120s linear infinite;
          -o-animation: animateSub 120s linear infinite;
          -moz-animation: animateSub 120s linear infinite;
          animation: animateSub 120s linear infinite;
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
              width: 55px;
              height: 65px;
              float: left;
              margin-right: 15px;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .wintext {
              width: 135px;
              float: left;
              font-size: 12px;
              color: #555;

              div {
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
}

.game-box {
    margin: 0 auto;
    margin-bottom: 80px;
    /* margin-left: -9px; */
    width: 100%;

  .game-content::-webkit-scrollbar {
    display: none;
  }

  .game-content {
    width: 100%;
    // height: 590px;
    position: relative;
    margin-top: 20px;
    margin-left: 2px;
    overflow: auto;
    padding-top: 25px;
    margin-bottom: 20px;

    // ul {
    //   margin: 0 15px;
    // }

    .game-item {
    float: left;
    position: relative;
    // width: 233px;
    width:220px;
    // height: 126px;
    height:186px;
    margin: 0 22px 22px 2px;
    overflow: hidden;

      &:hover img{
        transition: all 0.1s;
        transform:scale(1.1)
      }
      &:hover .bgcover,&:hover .goGamebtn{
          display:block;
      }


      .game-pic {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border:1px solid #eee;
        text-align: center;
        .default {
          width: 90%;
        //   height: 154px;
        margin-top:-13px;
        }

        .mg-pic {
          // width: 200%;

          // &:hover {
          //   transform: translateX(-50%);
          // }
        }
      }
      .bgcover{
          display:none;
          position:absolute;
          top:0;
          left:0;
          bottom:0;
          right:0;
          background:#000;
          opacity:.5;
          transition:all linear .3s;
          
      }
      .goGamebtn{
          display:none;
          position:relative;
          transition:all linear .3s;
          a {
            &.play {
                cursor: pointer;
                text-align: center;
                position: absolute;
                bottom: 66px;
                left: 60px;
                background-color: rgba(117, 68, 217, .85);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#D97544D9', endColorstr='#D97544D9', GradientType=0);
                font-size: 14px;
                color: #fff;
                width: 120px;
                line-height: 30px;
                -webkit-border-radius: 36px;
                border-radius: 15px;
            }
            &.play:hover{
                background-color: rgba(117, 68, 217, 1);
            }
            &#try:hover{
                background-color: rgba(77 , 71, 194,1);
            }

            &#try{
                cursor: pointer;
                text-align: center;
                position: absolute;
                bottom: 30px;
                left: 60px;
                background-color: rgba(77 , 71, 194,.7);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#D97544D9', endColorstr='#D97544D9', GradientType=0);
                font-size: 14px;
                color: #fff;
                width: 120px;
                line-height: 30px;
                -webkit-border-radius: 36px;
                border-radius: 15px;
            }
        }
      }

      .gameMask {
          background:#000;
          opacity:.6;
          position:absolute;
          bottom:0;
          width:100%;
          height:25px;
          padding:0 4px;
          z-index: 1;
          .gameItemName{
              line-height:25px;
              margin:0;
              float:left;
              color:#fff;
          }
          .collectImg{
              float:right;
              width:21px;
              height:18px;
              margin-top:3.5px;
              background:url(/static/public/image/game/ptgame/icon-love.png) no-repeat center;
          }                           
        // color: #333;
        // font-size: 16px;
        // overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
        // margin: 10px 0;
        // margin-top: 5px;
      }

      
    }
    .game-item:nth-child(5n){
      margin-right:0;
    }
  }

  .pagenation {
    height: 34.4px;
    text-align: center;
    margin-top: 8px;

    li {
      display: inline;
      border: 1px solid #ddd;
      padding: 6px 12px;
      border-radius: 3px;

      a {
        color: #337ab7;
      }
    }
  }
}

.move {
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  transform: translate3d(-97px, 0, 0);
}

.back {
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  transform: translate3d(97px, 0, 0);
}
</style>
