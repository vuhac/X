<template>
  <div id="maincontainer">
    <div class="mainContent">
      <div class="top-info">
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
      </div>
      <div class="mainbox">
        <div class="nav prev">&lt;</div>
        <div class="nav next">&gt;</div>
        <div class="box">
          <ul id="slider">
            <li :class="[{'active':$route.query.id===item.id},item.class]" :key="index" v-for="(item,index) in rollList"
                @click="fetchgames(item)">
              <i :class="'slider-'+item.class+'-icon'"></i>
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div ref="search-container" class="search-container">
        <div class="search-info">
          <div class="search-head">
            <div class="left">
              <i class="bg-search"></i>
              <label class="label">搜索游戏:</label>
              <div class="ipt-group">
                <input v-model="iptVal" class="ipt" autocomplete="off" @keyup.enter="search()">
              </div>
              <button class="btn-search" @click="search()">搜索</button>
            </div>
            <div v-if="nowTypeList.type.list.length" class="right">
              <button @click="reset()">重置选择</button>
            </div>
          </div>
          <div v-if="nowTypeList.type.list.length" class="search-detail">
            <div class="search-type">
              <dl class="search-game top">
                <dt>游戏类型:</dt>
                <dd>
                  <a href="javascript:;" @click="resulttype(item)" :key="index"
                     :class="{'active':item.tag===currenttype}" v-for="(item,index) in  nowTypeList.type.list">{{item.name}}</a>
                </dd>
              </dl>
              <dl v-if="nowTypeList.line.list.length" class="search-game bottom">
                <dt>赔钱线数:</dt>
                <dd>
                  <a href="javascript:;" @click="resultline(item)" :key="index"
                     :class="{'active':item.tag===currentline}" v-for="(item,index) in nowTypeList.line.list">{{item.name}}</a>
                </dd>
              </dl>
              <dl v-if="nowTypeList.thirt.list.length" class="search-game bottom">
                <dt>游戏类型:</dt>
                <dd>
                  <a href="javascript:;" @click="resultTag(item)" :key="index" :class="{'active':item.tag===currentTag}"
                     v-for="(item,index) in nowTypeList.thirt.list">{{item.name}}</a>
                </dd>
              </dl>

            </div>
          </div>
        </div>
        <div ref="list_winner" :style="{height:offsetHeight+'px'}"
             v-show="$route.query.id!=='10042'&&$route.query.id!=='10020'&&$route.query.id!=='10021'&&$route.query.id!=='10014'"
             class="list_winner">
          <div>
            <div class="section_title">
              <h4><i class="iconfont icon-zhongjiangmingdan"></i>中奖名单</h4>
            </div>
            <div class="topLoop">
              <ul>
                <div class="wrap">
                  <li :key="index" v-for="(item,index)   in scrollDatas">
                    <div class="gamepic">
                      <img :src="item.ico" alt="">
                    </div>
                    <div class="wintext">
                      <div>恭喜玩家{{item.account}}****在{{item.name}}</div>
                      <div>存款<span>{{item.in===0?100:item.in}}</span>元</div>
                      <div>喜提￥<span>{{+item.out===0?10000:Math.floor(item.out)}}</span>元</div>
                    </div>
                  </li>

                </div>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="game-box">
        <div class="game-content">
          <ul>
            <li class="game-item" :key="index" v-for="(item,index) in gameData">
              <div class="game-pic">
                <img :src="item.icon" :class="{'default':true,'mg-pic':$route.query.id==='10022'}" alt="">
              </div>
              <h3>{{item.name}}</h3>
              <a v-show="Public_User==='test'||!Public_User" href="javascript:void(0)" id="try"
                 @click="loginTest(item)">试玩游戏</a>
              <a v-show="Public_User!=='test'" href="javascript:void(0)" class="play" @click="loginGame(item)">进入游戏</a>
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
  import { _SetGet, _SetPost } from '@/service/public/service.js'
  // import "@/assets/home-main-iconfont/iconfont2.css";
  import mixin from './public.js'

  export default {
    mixins: [mixin],
    data () {
      return {
        showGames:[],
        random: [
          {
            account: '',
            name: 'PT游戏满月财富',
            ico: '/static/public/image/game/ptgame/ashfmf.jpg',
            in: 0,
            out: 0
          },
          {
            account: '',
            name: 'PT游戏丛林之心',
            ico: '/static/public/image/game/ptgame/ashhotj.jpg',
            in: 0,
            out: 0
          },
          {
            account: '',
            name: 'PT游戏猫女王',
            ico: '/static/public/image/game/ptgame/catqk.jpg',
            in: 0,
            out: 0
          },
          {
            account: '',
            name: 'PT游戏埃斯梅拉达',
            ico: '/static/public/image/game/ptgame/esmk.jpg',
            in: 0,
            out: 0
          },
          {
            account: '',
            name: 'PT游戏古怪猴子',
            ico: '/static/public/image/game/ptgame/fm.jpg',
            in: 0,
            out: 0
          },
          {
            account: '',
            name: 'PT游戏玛丽莲梦露',
            ico: '/static/public/image/game/ptgame/gtsmrln.jpg',
            in: 0,
            out: 0
          },
          {
            account: '',
            name: 'PT游戏年年有余',
            ico: '/static/public/image/game/ptgame/nian_k.jpg',
            in: 0,
            out: 0
          },
          {
            account: '',
            name: 'PT游戏幸运直击',
            ico: '/static/public/image/game/ptgame/sol.jpg',
            in: 0,
            out: 0
          },
          {
            account: '',
            name: 'PT游戏三倍猴子',
            ico: '/static/public/image/game/ptgame/trpmnk.jpg',
            in: 0,
            out: 0
          },
          {
            account: '',
            name: 'PT游戏招财进宝',
            ico: '/static/public/image/game/ptgame/zcjb.jpg',
            in: 0,
            out: 0
          }
        ],
        scrollDatas: [],
        jackpotNum1: 41318571943,
        jackpotNum2: 12961370,
        publicUrl: 'http://img.7900005.com/',
        currenttype: '',
        currentline: '',
        currentTag: '',
        gameData: [],
        offsetHeight: 100,
        total: '',
        iptVal: '',
        pageDatas: {
          page: 1
        },
        rollList: [
          {
            id: '10022',
            name: 'MG老虎机',
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
        //   {
        //     id: '42',
        //     name: '开元棋牌',
        //     class: 'ky',
        //     type: { list: [] },
        //     line: { list: [] }
        //   },
        //   {
        //     id: '46',
        //     name: 'VG棋牌',
        //     class: 'vg',
        //     type: { list: [] },
        //     line: { list: [] }
        //   },
          {
            id: '10020',
            name: 'FG老虎机',
            class: 'fg',
            type: { list: [] },
            line: { list: [] }
          },
          {
            id: '10021',
            name: 'JDB电子',
            class: 'jdb',
            type: { list: [] },
            line: { list: [] }
          },
          {
            id: '10016',
            name: 'BBIN老虎机',
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
            class: 'ae',
            type: { list: [] },
            line: { list: [] }
          },
          {
            id: '10019',
            name: 'DT老虎机',
            class: 'dt',
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
            type: { list: [] },
            line: { list: [] }
          },
          {
            id: '10025',
            name: 'TTG老虎机',
            class: 'ttg',
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
        nowTypeList: {
          type: { list: [] },
          line: { list: [] },
          thirt: { list: [] }
        },
        setInter: null
      }
    },
    methods: {
      //获取数据
      async getData (item) {
        this.gameData = []
        let id=this.$route.query.id
        let res = await _SetPost(`${this.$HOST_NAME}/gameSortNew`, {
          id,
          device: 'pc',
        })
        if (res && res.code === 200) {
            this.showGames=res.data[id];
            this.gameData=this.showGames.splice(0,20)
            this.pageDatas.page=1;
            this.total = Math.ceil(this.showGames.length/20);
        }
      },

      //点击导航栏
      async fetchgames (item) {
        let scrollTop = document.documentElement.scrollTop
        this.$router.push({
          path: `/home/games`,
          query: {
            id: item.id,
            name: item.name
          }
        })
        window.scrollTo(0, scrollTop)
        this.nowTypeList.type.list = item.type.list
        this.nowTypeList.line.list = item.line.list
        if (item.thirt) {
          this.nowTypeList.thirt.list = item.thirt.list
        } else {
          this.nowTypeList.thirt.list = []
        }

        this.clear()
        this.getData()
        this.$nextTick(() => {
          // console.log( this.$refs['search-container'].offsetHeight)
          this.offsetHeight =
            this.$refs['search-container'].offsetHeight < 100
              ? 100
              : this.$refs['search-container'].offsetHeight
          // console.log( this.$refs['list_winner'])
        })
      },
      //下一页
      async nextpage () {
        if (this.pageDatas.page < this.total) {
          this.pageDatas.page = this.pageDatas.page + 1
          this.fenshu()
        }
      },
      //上一页
      async prevpage () {
        if (this.pageDatas.page > 1) {
          this.pageDatas.page = this.pageDatas.page - 1
          this.fenshu()
        }
      },
      //第一页
      async firstpage () {
        this.pageDatas.page = 1
        this.fenshu()
      },
      //最后一页
      async lastpage () {
        this.pageDatas.page = this.total
        this.fenshu()
      },

    resulttype(item) {
      this.currenttype = item.tag;
      // this.getData();
      this.fengame()
    },
    resultline(item) {
      this.currentline = item.tag;
      // this.getData();
      this.fengame()
    },
    resultTag(item) {
      this.currentTag = item.tag;
      // this.getData();
      this.fengame()
    },
    fengame(){
      let datas=[];
      datas=this.showGames.filter((item)=>{
            let flag=true;
            flag=flag&&item.tag.includes(this.currenttype)?true: false;
            flag=flag&&item.tag.includes(this.currentline)?true: false;
            flag=flag&&item.tag.includes(this.currentTag)?true: false;
            if(flag){
              return item
            }
      })
      this.gameData=datas.splice(0,20)
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

      async search () {
         this.pageDatas.page = 1;
        this.gameData=this.showGames.filter(item=>{
          if(item.name.includes(this.iptVal)){
            return item;
          }
        })
        console.log(this.gameData);
      },
      async clear () {
        this.iptVal = ''
        this.currenttype = ''
        this.currentline = ''
        this.currentTag = ''
        this.pageDatas.page = 1
      },
      reset () {
        this.clear()
        this.resetItem()
        this.getData()
      },
      resetItem () {
        this.rollList.forEach(item => {
          if (item.id === this.$route.query.id) {
            this.fetchgames(item)
          }
        })
      },
      jackpotNumAdd () {
        clearInterval(this.setInter)
        this.setInter = setInterval(() => {
          this.jackpotNum1 = this.jackpotNum1 + 8.56
          this.jackpotNum2 = this.jackpotNum2 + 8.56
        }, 100)
      },

      async slider () {
        let ul = document.getElementById('slider')
        let prev = document.getElementsByClassName('prev')[0]
        let next = document.getElementsByClassName('next')[0]
        let main = document.getElementsByClassName('mainbox')[0]
        let n = -97

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
          ul.insertBefore(last, ul.childNodes[0])
          ul.style.left = n + 'px'
          ul.className = 'back'
          setTimeout(function () {
            ul.className = ''
            ul.style.left = ''
          }, 500)
        }

        prev.onclick = right
        next.onclick = left
        let timer = null
        timer = setInterval(left, 4000)
        main.onmouseover = function () {
          clearInterval(timer)
        }
        main.onmouseout = function () {
          timer = setInterval(left, 4000)
        }
      }
    },
    created () {
      this.$nextTick(() => {
        this.slider()
        if (this.$route.query.id) {
          this.resetItem()
        } else {
          this.fetchgames(this.rollList[0])
        }
      })
      let chars = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'j',
        'k',
        '-',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
      ]

      // 随机用户名
      function generateMixed (n) {
        var res = ''
        for (var i = 0; i < n; i++) {
          var id = Math.ceil(Math.random() * 62)
          res += chars[id]
        }
        return res
      }

      //50个模型demo
      let datas = []
      for (let index = 0; index < 50; index++) {
        // debugger
        let obj = {}
        // for(let key in this.random[Math.floor(Math.random() * 10)]) {
        //   obj[key]=this.random[Math.floor(Math.random() * 10)][key]
        // }
        Object.assign(obj, obj, this.random[Math.floor(Math.random() * 10)])
        datas.push(obj)
      }
      // 求出随机数
      datas.forEach((item, v) => {
        // console.log(v)
        // debugger
        item.in = Math.random().toFixed(2) * 1000
        item.out =
          Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 100 < 1
            ? 10000
            : Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 100
        item.account = generateMixed(3)
      })
      this.scrollDatas = datas
    },
    mounted () {
      if (localStorage.config) {
        let config = JSON.parse(localStorage.config)
        this.publicUrl = config.statics
      }
      this.jackpotNumAdd()
    },
    watch: {
      $route(){
        this.getData()
      },
    },
    components: {}
  }
</script>

<style lang="less" scoped>
  #maincontainer {
    // padding-bottom: 20px;
    // padding-top: 10px;
    // background: url("/static/public/image/game/ptgame/slotGame_bg.jpg") no-repeat,
    //   #f3f2ef;
    // background-size: 100% 120%;
  }

  .mainContent {
    background-color: #fafafa;
    margin: 0 auto;
    width: 1000px;
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
    width: 980px;
    position: relative;
    margin-bottom: 20px;
    margin: 0 auto;

    .jackpots {
      margin-left: 6px;
      width: 980px;
      height: 164px;
      position: absolute;
      z-index: 2;
      background: url("http://betsb.3000018.com/game/img/jackpot-light1.png") no-repeat;
      background-size: contain;
      background-position: center;

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
    width: 966px;
    // min-height: 150px;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
    // border-bottom: 1px dashed #c9c9c9;
    .search-info {
      width: 714px;
      padding-top: 15px;
      // border-right: 1px dashed #c1c1c1;
      .search-head {
        height: 55px;
        padding: 7px 17px 0 8px;
        // border-bottom: 1px dashed #c1c1c1;
        .left {
          float: left;

          .bg-search {
            width: 26px;
            height: 26px;
            margin-right: 7px;
            display: inline-block;
            vertical-align: middle;
            background: url("http://betsb.3000018.com/game/img/slot_sprites.png") -63px -185px;
          }

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
            width: 284px;
            position: relative;
            display: inline-block;
            vertical-align: middle;
            background: #fff1f1;
            border-radius: 6px;
            border: 1px solid red;

            .ipt {
              border: none;
              width: 100%;
              padding: 0 10px;
              height: 34px;
              line-height: 34px;
              color: #c1c1c1;
              background-color: transparent;
              outline: none;
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

        .right {
          float: right;

          button {
            width: 114px;
            height: 36px;
            font-size: 16px;
            color: #fff;
            background: #787876;
            border-radius: 7px;
            line-height: inherit;
            cursor: pointer;
            outline: none;
            border: 1px solid transparent;
            user-select: none;
            white-space: nowrap;
          }
        }
      }

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
            margin-bottom: 5px;
            height: 38px;
            line-height: 38px;

            dt {
              margin-right: 10px;
              color: #b48c68;
              display: inline-block;
              vertical-align: middle;
              font-weight: 700;
              font-size: 14px;
            }

            dd {
              display: inline-block;
              vertical-align: middle;

              a {
                display: inline-block;
                margin: 0 -3px;
                padding: 0 10px;
                line-height: 28px;
                color: #337ab7;
                text-decoration: none;
                text-align: center;
                background-color: transparent;
                font-size: 14px;

                &:hover {
                  color: #23527c;
                  text-decoration: underline;
                }
              }

              .active {
                background: #b48c68;
                padding: 0 7px;
                color: #fff !important;
                border-radius: 7px;
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
      top: 0;
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
    margin-left: -9px;
    width: 1020px;

    .game-content::-webkit-scrollbar {
      display: none;
    }

    .game-content {
      width: 1020px;
      height: 1132.4px;
      position: relative;
      margin-top: 20px;
      margin-left: 2px;
      overflow: auto;
      padding-top: 25px;

      ul {
        margin: 0 15px;
      }

      .game-item {
        float: left;
        width: 177px;
        height: 256px;
        padding: 10px 10px;
        margin: 0 10px 20px 10px;
        position: relative;
        cursor: pointer;
        font-size: 14px;
        color: #c1c1c1;
        text-align: center;
        background: #fff;
        border: 1px solid #c9c9c9;
        box-shadow: none;
        overflow: hidden;
        transition: all 0.4s;
        transform: translateY(3px);

        &:hover {
          transition: all 0.4s;
          transform: translateY(-3px);
        }

        .game-pic {
          width: 154px;
          height: 154px;
          overflow: hidden;

          .default {
            width: 154px;
            height: 154px;
          }

          .mg-pic {
            // width: 200%;

            // &:hover {
            //   transform: translateX(-50%);
            // }
          }
        }

        h3 {
          color: #333;
          font-size: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 10px 0;
          margin-top: 5px;
        }

        a {
          width: 71px;
          height: 36px;
          display: inline-block;
          background: #b48c68;
          line-height: 36px;
          color: #fff;
          border-radius: 7px;

          &.play {
            background: #fd4747;
          }
        }
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
