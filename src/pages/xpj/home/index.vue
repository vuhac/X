<template>
  <div class="new-index xpj-home">
    <div class="banner">
      <div class="newgong">
        <div class="newgong-content">
          <div class="demolist list">
              <marquee v-if="lantern" align="middle" direction="left" loop="-1" scrollamount="3" onmouseout="this.start()"
                     onmouseover="this.stop()"
                     style="color: white; font-size: 14px; line-height: 34px;overflow: hidden;height: 34px;"
            >
              <span v-html="lantern"></span>
            </marquee>
          </div>
        </div>
      </div>

      <!-- <div class="carouse"> 
        <el-carousel :interval="2000" arrow="never" height="503px">
          <el-carousel-item v-for="(item,i) in carouselData" :key="i">
            <a :href="item.targets" target="_blank" v-if="item.targets !=='#'">
              <img :src="item.img" alt="" style="height:500px!important;">
            </a>
            <img :src="item.img" alt="" v-else style="height:500px!important;">
          </el-carousel-item>
        </el-carousel> -->
        <!-- <img src="/static/xpj/img/home/01.jpg" alt="">
      </div>--> 
    </div> 

    <div class="home-container">
      <section id="slot-box" ng-controller="LobbiesCtrl" class="ng-scope">
        <div class="wrapper">
            <div class="slider-left" carousel-slider="" super-vis="6" super-play="true" super-effect="leftLoop">
                <span class="prev"></span>
                <span class="next"></span>
                <div class="main-cell">
                  <div class="tempWarp" style="overflow:hidden; position:relative; width:996px">
                      <ul id="game-list">
                        <li :class="[{'active':gameId===item.id},item.class]" :key="index" v-for="(item,index) in rollList "
                            @mouseover="changeGame(item)">
                          <!-- <i :class="'slider-'+item.class+'-icon'" style="background:url(/static/xpj/img/home/fg.png)no-repeat center center;background-size:100% 100%;display:inline-block;width:30px;height:30px;"></i>
                          <span>{{item.name}}</span> -->
                          <div class="game-list-text">
                              <span>{{item.name}}</span>
                              <span>{{item.text}}</span>
                          </div>
                        </li>
                    </ul>
                  </div>
                </div>
            </div>

            <div class="game-item">
                <div class="game-content">
                  <ul>
                    <!-- <transition-group name="fade"> -->
                      <li class="game-item" :key="index" v-for="(item,index) in gameData" @click="loginGame(item)">
                        <div class="game-pic">
                          <!-- <img :src="publicUrl+item.images" :class="{'default':true,'mg-pic':$route.query.id==='26'}" alt=""> -->
                                <img :src="item.icon" :class="{'default':true,'mg-pic':$route.query.id==='10022'}" alt="">
                        </div>
                        <p>
                          <span>{{item.name}}</span>
                        </p>
                      </li>
                    <!-- </transition-group> -->
                  </ul>
                </div>
            </div>
            <div class="winner-box">
                <span class="title_sort">序列号</span>
                <span class="title_name">客户ID</span>
                <span class="title_num">金额</span>
                <div class="winning-box1">
                    <ul class="winning-list" :style="[{transform: 'translateY(-'+noticePosition+'px) translateZ(0px)'}]">
                      <li class="winning-item" v-for="(item, i) in winningInfo" :key="i">
                        <span class="sort">{{i}}</span>
                        <span class="name">{{item.name.padEnd(8, '*')}}</span>
                        <span class="num">{{item.num}}元</span>
                      </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <div id="content">
        <div class="wrapper">
          <div id="home">
              <ul id="game-box">
                  <!-- <li data-img="slot"><a href="/Lobby/Game"></a></li>
                  <li data-img="live"><a href="/Lobby/Live"></a></li>
                  <li data-img="lottery"><a href="/Lobby/Lottery"></a></li>
                  <li data-img="sport"><a href="/Lobby/Sport"></a></li> -->
                  <li v-for="(gameItem,gameIndex) in gameList" :key="gameIndex" :class="gameItem.className" @click="goLink(gameItem)">
                  </li>
              </ul>
              <ul id="weblink">
                  <!-- <li data-img="slot"><a ng-href="http://www.9964.one/" target="_blank" href="http://www.9964.one/"></a></li>
                  <li data-img="teaching"><a ng-href="http://www.49964s.com/" target="_blank" href="http://www.49964s.com/"></a></li>
                  <li data-img="detection"><a ng-href="https://59963.la" target="_blank" href="https://59963.la"></a></li>
                  <li data-img="linechat"><a href="javascript:void(0)" ng-click="lineChatClick()"></a></li> -->
                  <li v-for="(webItem,webIndex) in webList" :key="webIndex" :class="webItem.className" @click="goLink(webItem)"></li>
              </ul>
          </div>
        </div>
        <vp-Home-Footer/>
    </div>
  </div>
   <!-- <Modal :scrollable=true title="网站公告" ok-text="关闭" v-model="showPopout" width="657" class="vp-popout-box">
      <div class="popout-box">
        <span v-html="popups"></span>
      </div>
    </Modal> -->

    <vp-mc :imgsrc="imgsrc"></vp-mc>
  </div>
</template>

<script>
  import $ from 'jquery'
  import store from '@/vuex/store'
  import data from '../../public/games/public.js'
  import vpHomeFooter from './footer.vue'
  import vpMc from "./mc"

  export default {
    mixins: [data],
    components:{
      vpHomeFooter,
      vpMc
    },
    data () {
      return {
        showimg:false,
        mobileDow: 'ios',
        publicUrl: 'http://static.1356111.com/',
        // showPopout: false,
        imgsrc:'/static/xpj/img/qpssq.png',
        popups: '',
        gameData:[],
        noticePosition:0,
        carouselData: [],
        lantern: '',
        serviceUrl: null,
        gameList:[
          {name:'真人娱乐',className:'live',path:'/home/live'},
          {name:'彩票游戏',className:'lottery',path:'/plays/hall'},
          {name:"电子游艺",className:"slot",path:'/home/games?id=10022&name=MG老虎机'},
          {name:'体育赛事',className:'sport',path:'/home/tiyu'}
        ],
        webList:[
          {name:'电子竞技',className:'slot',path:'/home/games?id=10022&name=MG老虎机'},
          {name:'代理教程',className:'teaching',path:'/home/agent'},
          {name:'线路检测',className:'detection',path:'/static/xpj/html/linesense/index.html'},
          {name:'在线客服',className:'linechat',path:'service'}
        ],
        // 轮播设置
        setting: {
          live: {
            liveVal: 0, autoplaySpeed: 3000, autoplay: true, dots: 'none', trigger: 'click', arrow: 'never'
          }
        },
        // 滚动名单
        scrollDatas: [],
        // 选项选择
        optionList: [
          {name: 'AG贵宾厅', index: 0, platform: 'live_casino', id: '14', img: '/static/xpj/img/banner_game/zrsx_ag.jpg'},
          {
            name: 'BBIN旗舰厅',
            index: 1,
            platform: 'live_casino',
            id: '15',
            img: '/static/xpj/img/banner_game/zrsx_bbin.jpg'
          },
          {name: 'BG大遊厅', index: 2, platform: 'live_casino', id: '44', img: '/static/xpj/img/banner_game/zrsx_bg.jpg'},
          {name: 'DG梦幻厅', index: 3, platform: 'live_casino', id: '33', img: '/static/xpj/img/banner_game/zrsx_dg.jpg'},
          {name: 'DS视讯厅', index: 4, platform: 'live_casino', id: '16', img: '/static/xpj/img/banner_game/zrsx_ds.jpg'},
        ],
        otherGame: [
          {name: '彩票游戏', img: '/static/xpj/img/home/live/gpi_cp.jpg', btnName: '进入游戏', router: '/plays/hall'},
          {name: '电子游艺',img: '/static/xpj/img/home/live/gpi_dzyy.jpg', btnName: '进入游戏',router: '/home/games?id=10022&name=MG老虎机'},
          {name: '体育投注', img: '/static/xpj/img/home/live/gpi_tytz.jpg', btnName: '进入游戏', router: '/sport'},
          {name: '捕鱼达人', img: '/static/xpj/img/home/live/gpi_bydr.jpg', btnName: '进入游戏', router: '/home/buyu'}
        ],
        carouselData: [],
        jackpotNum: 30631803863,
        setInter: null,
        rollList: [
          {
            id: '10022',
            name: 'MG老虎机',
            text:'MG CASINO',
            class: 'mg',
            type: {
              list: [
                { name: '全选', tag: '' },
                { name: '最新游戏', tag: 'NEW' },
                { name: '热门游戏', tag: 'HOT' },
                { name: '经典游戏', tag: 'CLA' },
                { name: '老虎机', tag: 'SLO' },
                { name: '奖池游戏', tag: 'JPT' }
              ]
            },
            line: {
              list: [
                { name: '全选', tag: '' },
                { name: '单线', tag: '1-1' },
                { name: '5-10', tag: '5-10' },
                { name: '15-20', tag: '15-20' },
                { name: '243游戏', tag: '243' },
                { name: '更多', tag: 'MOR' }
              ]
            }
          },
          {
            id: '10015',
            name: 'AG老虎机',
            text:'AG CASINO',
            class: 'ag',
            type: {
              list: [
                { name: '全选', tag: '' },
                { name: '最新游戏', tag: 'NEW' },
                { name: '热门游戏', tag: 'HOT' },
                { name: '老虎机', tag: 'SLO' },
                { name: '大额投注', tag: 'MAX' },
                { name: '小额投注', tag: 'MIN' },
                { name: '经典拉霸', tag: 'FRT' },
                { name: '消消乐', tag: 'CLH' }
              ]
            },
            line: {
              list: [
                { name: '全选', tag: '' },
                { name: '5-10线', tag: '5-10' },
                { name: '15-20线', tag: '15-20' },
                { name: '25-30线', tag: '25-30' },
                { name: '更多', tag: 'MOR' }
              ]
            }
          },
          {
            id: '10024',
            name: 'PT老虎机',
            text:'PT CASINO',
            class: 'pt',
            type: {
              list: [
                { name: '全选', tag: '' },
                { name: '最新游戏', tag: 'NEW' },
                { name: '热门游戏', tag: 'HOT' },
                { name: '经典游戏', tag: 'CLA' },
                { name: '奖池游戏', tag: 'JPT' },
                { name: '老虎机', tag: 'SLO' }
              ]
            },
            line: {
              list: [
                { name: '全选', tag: '' },
                { name: '单线', tag: '1-1' },
                { name: '5-10线', tag: '5-10' },
                { name: '15-20线', tag: '15-20' },
                { name: '243线', tag: '243' },
                { name: '更多', tag: 'MOR' }
              ]
            },
            thirt: {
              list: [
                { name: '全选', tag: '' },
                { name: '卡通', tag: 'ANI' },
                { name: '洛奇', tag: 'RCK' },
                { name: '少女', tag: 'GIR' }
              ]
            }
          },
          {
            id: '10018',
            name: 'CQ9老虎机',
            text:'CQ9 CASINO',
            class: 'cq9',
            type: {
              list: [
                { name: '全选', tag: '' },
                { name: '最新游戏', tag: 'NEW' },
                { name: '热门游戏', tag: 'HOT' },
                { name: '老虎机', tag: 'SLO' },
                { name: '捕鱼游戏', tag: 'FSH' }
              ]
            },
            line: {
              list: [
                { name: '全选', tag: '' },
                { name: '单线', tag: '1-1' },
                { name: '5-10线', tag: '5-10' },
                { name: '15-20线', tag: '15-20' },
                { name: '243线', tag: '243' }
              ]
            }
          },
          {
            id: '10042',
            name: '开元棋牌',
            text:'KY_CHESS',
            class: 'ky',
            type: { list: [] },
            line: { list: [] }
          },
          {
            id: '10041',
            name: 'VG棋牌',
            text:"VG_CHESS",
            class: 'vg',
            type: { list: [] },
            line: { list: [] }
          },
          {
            id: '10020',
            name: 'FG老虎机',
            class: 'fg',
            text:"FG CASINO",
            type: { list: [] },
            line: { list: [] }
          },
          {
            id: '10021',
            name: 'JDB电子',
            class: 'JDB GAMING',
            text:"JDB GAMING",
            type: { list: [] },
            line: { list: [] }
          },
          {
            id: '10016',
            name: 'BBIN老虎机',
            text:"BBIN CASINO",
            class: 'bbin',
            type: {
              list: [
                { name: '全选', tag: '' },
                { name: '最新游戏', tag: 'NEW' },
                { name: '热门游戏', tag: 'HOT' },
                { name: '老虎机', tag: 'SLO' },
                { name: '刮刮乐', tag: 'SCR' },
                { name: '桌上游戏', tag: 'TBL' },
                { name: '大型机台', tag: 'LMC' }
              ]
            },
            line: { list: [] }
          },
          {
            id: '10014',
            name: 'AE老虎机',
            text:"AE GAMING",
            class: 'ae',
            type: { list: [] },
            line: { list: [] }
          },
          {
            id: '10019',
            name: 'DT老虎机',
            class: 'dt',
            text:"DT GAMING",
            type: {
              list: [
                { name: '全选', tag: '' },
                { name: '最新游戏', tag: 'NEW' },
                { name: '热门游戏', tag: 'HOT' },
                { name: '老虎机', tag: 'SLO' },
                { name: '奖池游戏', tag: 'JPT' },
                { name: '经典游戏', tag: 'CLA' }
              ]
            },
            line: {
              list: [
                { name: '全选', tag: '' },
                { name: '单线', tag: '1-1' },
                { name: '5-10线', tag: '5-10' },
                { name: '15-20线', tag: '15-20' },
                { name: '243线', tag: '243' },
                { name: '更多', tag: 'MOR' }
              ]
            }
          },
          {
            id: '10023',
            name: 'MW老虎机',
            class: 'mw',
            text:'MW GAMING',
            type: { list: [] },
            line: { list: [] }
          },
          {
            id: '10025',
            name: 'TTG老虎机',
            class: 'ttg',
            text:"TTG GAMING",
            type: {
              list: [
                { name: '全选', tag: '' },
                { name: '最新游戏', tag: 'NEW' },
                { name: '热门游戏', tag: 'HOT' },
                { name: '老虎机', tag: 'SLO' },
                { name: '经典游戏', tag: 'CLA' }
              ]
            },
            line: {
              list: [
                { name: '全选', tag: '' },
                { name: '单线', tag: '1-1' },
                { name: '5-10线', tag: '5-10' },
                { name: '15-20线', tag: '15-20' },
                { name: '243线', tag: '243' },
                { name: '更多', tag: 'MOR' }
              ]
            }
          }
        ],
        pageDatas: {
          page: 1
        },
        currenttype: '',
        iptVal: '',
        currentline: '',
        currentTag:'',
        winningInfo: [],
        gameId:26,
        allGameData:[]
      }
    },
    methods: {
      // 点击导航栏
       async changeGame (item) {
         if(item){
           this.gameId = item.id;
           let gameDate = JSON.parse(localStorage.gameDate);
           for(let game in gameDate){
             if(game==item.id){
               this.gameData = gameDate[game]
             }
           }
           this.clear()
         }
      },
      goLink(item){
        if(item.name=='体育赛事'){
             this.getItemId({name:'皇冠体育', id: '39', platform:'sport'});
        }else if(item.name=='线路检测'){
            //  window.open('/static/xpj/html/linesense/index.html')
        }else if(item.name=='在线客服'){
           let service = JSON.parse(localStorage.config).service;
          if (service) {
          let ser = service.find(item => item.status === 'on')
          if (ser) {
            window.open(ser.url);
          }
        }
         
        }else{
              this.$router.push(item.path)
        }
      },
      async clear () {
        this.iptVal = ''
        this.currenttype = ''
        this.currentline = ''
        this.currentTag = ''
        this.pageDatas.page = 1
      },
      // 获取游戏列表
      async getData () {
          var allGameData = {};
          let idArr = [];
          var gameList = []
          this.rollList.forEach((v=>{
            idArr.push(v.id)
          }))
          let res = await this.$http.post(`${this.$HOST_NAME}/gameSortNew`, {
            id:'10022',
            device: 'pc',
          })
          if (res && res.code === 200) {
            this.gameData = (res.data[10022]).slice(0,8)
          }
          for(let i=0;i<idArr.length;i++){
              let gameId = idArr[i];
              let res = await this.$http.post(`${this.$HOST_NAME}/gameSortNew`, {
              id:gameId,
              device: 'pc',
            })
            if (res && res.code === 200) {
              gameList = (res.data[gameId]).slice(0,8)
              allGameData[idArr[i]] = gameList;
              localStorage.setItem("gameDate",JSON.stringify(allGameData));
            }
          }
      },
      // 走马灯
      initWinningInfo () {
        let length = 50
        let data = []
        for (let i = 0; i < length; i++) {
          let num = parseInt(Math.random() * (Math.random() * (Math.random() * 360000)))
          num = num < 10 ? num * 1234 : num
          num = num < 100 ? num * 123 : num
          num = num < 1000 ? num * 12 : num
          let name = String.fromCharCode((num % 26) + 97) + num.toString(32)
          name = name.substr(0, 3)
          data[i] = {name,num}
        }
        this.arraySort(data, (v1, v2) => v1.num < v2.num)
        this.winningInfo = data;
      },
      //获取banner
      // async getBanner () {
      //   let res = await this.$http.post(`${this.$HOST_NAME}/site/position`, {
      //     position: 'banner',
      //     clientType: 'pc'
      //   })
      //   if (res && res.code == 200) {
      //     this.carouselData = res.data[0] && res.data[0].body
      //   }
      // },
      close(){
          this.showimg=false;
      },
      liveEnter (item) {
        this.setting.live.autoplay = false
        this.setting.live.liveVal = item.index
      },
      liveLeave () {
        this.setting.live.autoplay = true
      },

      jackpotFc () {
        clearInterval(this.setInter)
        this.setInter = setInterval(() => {
          this.jackpotNum = this.jackpotNum + 8.56
        }, 20)
      },
      goTo (item) {
        if (item.type == 'lottery') {
             if(localStorage.token){
                 if(localStorage.Public_User=='test' ){
                   this.dNotify("彩票暂无试玩,立即注册", "error")
               }else{
                 window.open(item.router);
                 return false;
               }
            }else{
                // this.$store.commit('alert/showTipModel', {bool: true, title: "请先登录", model: 'error'})
                 this.dNotify("请先登录", 'error')
            }
        } else {
          this.$router.push(item.router)
        }
      },
      goto(item){
          window.open(item.router);
          return false;
      },

      goUserCen (name, num) {
        //name的类型有 ：  recharge （充值）  personage （个人资料）
        //withdraw （提现）  agency  （代理） message （消息）  discounts （优惠）
        this.$store.commit('showPersonal', {
          bool: true
        })
        this.$store.commit('showContent', {
          parent: name
        })
        this.$store.commit('showNav', {
          child: num
        })
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
      // async getPopout () {
      //   if (!this.$store.state.mainState.ifpourT || localStorage.token)
      //     return false
      //   let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
      //     type: 'popups',
      //     desc_client_type: 'html'
      //   })
      //   if (res && res.code == 200) {
      //     console.log(333)
      //     if (!res.data.data.length){
      //       this.showimg = true
      //       return false
      //     }
      //     this.showPopout = true
      //     this.showimg=true
      //     this.popups = res.data.data[0] && res.data.data[0].description
      //     this.$store.commit('mainState/resetPour', false)
      //   }
      // },
      // 导航动画
      async slider () {
        let ul = document.getElementById('game-list')
        let prev = document.getElementsByClassName('prev')[0]
        let next = document.getElementsByClassName('next')[0]
        let main = document.getElementsByClassName('slider-left')[0]
        let n = -166

        function left () {
          let oLi = ul.children[0]
          ul.className = 'move'
          setTimeout(function () {
            ul.removeChild(oLi)
            ul.appendChild(oLi)
            ul.className = ''

          }, 500)
        }

        function right () {
          let last = ul.lastElementChild
          ul.removeChild(last)
          ul.insertBefore(last,ul.childNodes[0])
          ul.style.left = n + 'px'
          ul.className = 'back'
          setTimeout(function () {
            ul.className = ''
            ul.style.left = ''
          }, 500)
        }
        prev.onclick = left;
        next.onclick = right;
        let timer = null
        timer = setInterval(left, 4000)
        main.onmouseover = function () {
          clearInterval(timer)
        }
        main.onmouseout = function () {
          timer = setInterval(left, 4000)
        }
      },
      // 进入游戏
    },
    created () {
      // this.showPopout=false
      // this.getPopout()
      setTimeout(() => {
        this.showimg=false
      }, 7000)
      this.$nextTick(()=>{
        this.slider()
      })
    },
    mounted () {
      this.getData();
      this.initWinningInfo()
      if (localStorage.config) {
        let config = JSON.parse(localStorage.config)
        this.publicUrl = config.statics
      }
      clearInterval(this.setInter)
      this.jackpotFc()
      this.getLantern()
      setTimeout(() => {
        this.serviceUrl = this.$root.config.service[0] && this.$root.config.service[0].url
      }, 200)
      // this.getBanner()
    },
    beforeDestroy () {
      clearInterval(this.setInter)
    },
    watch: {
      $route(){
      },
    },
    store
  }
</script>

<style lang="less">
  .alert-img {
    /deep/ .ivu-modal-content {
      background-color: transparent;
    }
  }
  @keyframes animate {
    0% {
      bottom: 0
    }
    2% {
      bottom: -50px;
    }
    50% {
      bottom: -50px;
    }
    52% {
      bottom: 0px;
    }
    100% {
      bottom: 0;
    }
  }

  @-webkit-keyframes animate {
    0% {
      bottom: 0
    }
    2% {
      bottom: -50px;
    }
    50% {
      bottom: -50px;
    }
    52% {
      bottom: 0px;
    }
    100% {
      bottom: 0;
    }
  }

  @-moz-keyframes animate {
    0% {
      bottom: 0
    }
    2% {
      bottom: -50px;
    }
    50% {
      bottom: -50px;
    }
    52% {
      bottom: 0px;
    }
    100% {
      bottom: 0;
    }
  }

  @-o-keyframes animate {
    0% {
      bottom: 0
    }
    2% {
      bottom: -50px;
    }
    50% {
      bottom: -50px;
    }
    52% {
      bottom: 0px;
    }
    100% {
      bottom: 0;
    }
  }

  @-ms-keyframes animate {
    0% {
      bottom: 0
    }
    2% {
      bottom: -50px;
    }
    50% {
      bottom: -50px;
    }
    52% {
      bottom: 0px;
    }
    100% {
      bottom: 0;
    }
  }

  @keyframes animate2 {
    0% {
      top: 0
    }
    1% {
      top: -25px
    }
    5% {
      top: -25px
    }
    6% {
      top: -50px
    }
    10% {
      top: -50px
    }
    11% {
      top: -75px
    }
    15% {
      top: -75px
    }
    16% {
      top: -100px
    }
    20% {
      top: -100px
    }
    21% {
      top: -125px
    }
    25% {
      top: -125px
    }
    26% {
      top: -150px
    }
    30% {
      top: -150px
    }
    31% {
      top: -175px
    }
    35% {
      top: -175px
    }
    36% {
      top: -200px
    }
    40% {
      top: -200px
    }

    41% {
      top: -225px
    }
    45% {
      top: -225px
    }
    46% {
      top: -250px
    }
    50% {
      top: -250px
    }
    51% {
      top: -275px
    }
    55% {
      top: -275px
    }
    56% {
      top: -300px
    }
    60% {
      top: -300px
    }
    61% {
      top: -325px
    }
    65% {
      top: -325px
    }
    66% {
      top: -350px
    }
    70% {
      top: -350px
    }

    71% {
      top: -375px
    }
    75% {
      top: -375px
    }
    76% {
      top: -400px
    }
    80% {
      top: -400px
    }
    81% {
      top: -425px
    }
    85% {
      top: -425px
    }
    86% {
      top: -450px
    }
    90% {
      top: -450px
    }
    91% {
      top: -475px
    }
    95% {
      top: -475px
    }
    96% {
      top: -500px
    }
    100% {
      top: -500px
    }
  }

  .new-index {
    position: relative;
    background: #f1f1f1;

    .banner {
      position: relative;
      background-color: #10151b;

      .newgong {
        position: absolute;
        z-index: 99;
        height: 34px;
        width: 100%;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        border-bottom: 1px solid #263c78;
        background:url(/static/xpj/img/home/newbg.png);

        .newgong-content {
          padding: 0 0 0 95px;
          overflow: hidden;
          width: 1004px;
          height: 34px;
          margin: 0 auto;
          background: url(/static/xpj/img/home/news.png)no-repeat left center;
          .demolist {
            display: inline-block;
            width: 950px;
            position: relative;
            height:34px;
            // .notice {
            //   display: inline-block;
            //   position: absolute;
            //   top: 12px;
            //   left: -30px;
            // }
          }
        }
      }

      // .carouse {
      //   text-align: center;
      //   width: 100%;
      //   // position: absolute;
      //   top:0;
      //   left:0;
      //   // margin-left:-960px;
      //   margin-top:-148px;
      //   height:570px;
      //   /deep/ .el-carousel__indicators {
      //     bottom: 42px;

      //     .el-carousel__indicator {
      //       .el-carousel__button {
      //         width: 13px;
      //         height: 13px;
      //         border-radius: 50%;
      //         // background: rgba(0, 0, 0, 0.9);
      //       }
      //     }
      //   }

        // /deep/ .el-carousel__button {
        //   width: 13px;
        //   height: 13px;
        //   border-radius: 50%;
        //   // background: rgba(0, 0, 0, 0.9);
        // }
        // /deep/ .el-carousel__indicator {
        // bottom: 50px;
        // background: red;
        // &.is-active{
        //   .carousel__button {
        //     background: #fff;
        //   }

        // }
        // }
      // }
    }

  }


  .guanbi img{
    position: relative;
  }
  .guanbi .ivu-modal-footer{
    display: none;
  }
  .guanbi .ivu-modal-body{
    padding: 0 !important;
    height: 425px;
  }
  .guanbi .ivu-modal-close{
    display: none;
  }
  .guanbi .ivu-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -453px;
    margin-top: -212px;
  }
  .guanbi .close{
    position: absolute;
    display: block;
    width: 40px;
    height: 40px;
    right: 100px;
    top: 80px;
    cursor: pointer;
  }
</style>
