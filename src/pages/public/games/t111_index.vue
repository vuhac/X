<template>
  <div id="maincontainer">
    <div class="mainContent">
      <div class="mainbox"  ref="gameMenu">
        <ul class="game_type game_type1">
          <li :class="[{'active':$route.query.id===item.id},item.class]" :key="index" v-for="(item,index) in rollList"
              @click="fetchgames(item)">
            <div>
              <img style="width:60px;height:60px;"  :src='item.src' alt="" v-if="index!=0">
            </div>
            <span>{{item.name}}</span>
          </li>
        </ul>
        <ul class="game_type game_type2"  @click="changeMenu">
          <li @mouseover="changeSrc1" @mouseout="changeSrc2" class="deGame" id="ali">
            <img v-if="showGtu" :src='src' alt="">
            <img class="imgTrue" v-else src="/static/public/image/youyi/other-item-hover.png" alt="">
          </li>
        </ul>
      </div>
      <div ref="search-container" class="search-container">
        <div class="search-fl fl">
          <div class="search-info">
            <div class="search-head">
              <div >
                <div class="ipt-group">
                  <input v-model="iptVal" class="ipt" autocomplete="off" @keyup.enter="search()">
                </div>
                <button class="btn-search" @click="search()"><i class="search_icon"></i> 搜索</button>
              </div>
            </div>
            <div v-if="nowTypeList.type.list.length" class="search-detail">
              <div class="search-type">
                <dl class="search-game top">
                  <dt><i class="gicon gicon1"></i>游戏类型:</dt>
                  <dd>
                    <a href="javascript:;" @click="resulttype(item)" :key="index"
                      :class="{'active':item.tag===currenttype}" v-for="(item,index) in  nowTypeList.type.list">{{item.name}}</a>
                  </dd>
                </dl>
                <dl v-if="nowTypeList.line.list.length" class="search-game bottom">
                  <dt><i class="gicon gicon2"></i>赔钱线数:</dt>
                  <dd>
                    <a href="javascript:;" @click="resultline(item)" :key="index"
                      :class="{'active':item.tag===currentline}" v-for="(item,index) in nowTypeList.line.list">{{item.name}}</a>
                  </dd>
                </dl>
                
                <dl v-if="nowTypeList.thirt.list.length" class="search-game bottom">
                  <dt><i class="gicon gicon3"></i>游戏风格:</dt>
                  <dd>
                    <a href="javascript:;" @click="resultTag(item)" :key="index" :class="{'active':item.tag===currentTag}"
                      v-for="(item,index) in nowTypeList.thirt.list">{{item.name}}</a>
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
                <a href="javascript:;" class="game-text collect"><i class="shoucang"></i></a>
                <img :src="item.icon" :class="{'default':true,'mg-pic':$route.query.id==='10022'}" alt="">
              </div>
              <h3>{{item.name}}</h3>
              <a v-show="Public_User!=='test'" href="javascript:void(0)" class="play" @click="loginGame(item)">进入游戏</a>
              <a v-show="Public_User==='test'||!Public_User" href="javascript:void(0)" id="try"
                 @click="loginTest(item)">试玩游戏</a>
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
  import mixin from './public.js'

  export default {
    mixins: [mixin],
    data () {
      return {
        showGames:[],
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
        showGtu:true,
        src:'/static/public/image/youyi/other-item.png',
        pageDatas: {
          page: 1
        },
        rollList: [
          {
            id: '55',
            class: 'hot_game',
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
            id: '10022',
            name: 'MG老虎机',
            src:'/static/public/image/youyi/mg2.png',
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
            src:'/static/public/image/youyi/ag.png',
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
            src:'/static/public/image/youyi/pt.png',
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
            src:'/static/public/image/youyi/cq9.png',
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
            id: '10020',
            name: 'FG老虎机',
            src:'/static/public/image/youyi/fg.png',
            class: 'fg',
            type: { list: [] },
            line: { list: [] }
          },
          {
            id: '10021',
            name: 'JDB电子',
            src:'/static/public/image/youyi/jbd.png',
            class: 'jdb',
            type: { list: [] },
            line: { list: [] }
          },
          {
            id: '10016',
            name: 'BBIN老虎机',
            src:'/static/public/image/youyi/bbin.png',
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
            src:'/static/public/image/youyi/ae.png',
            class: 'ae',
            type: { list: [] },
            line: { list: [] }
          },
          {
            id: '10019',
            name: 'DT老虎机',
            src:'/static/public/image/youyi/dt.png',
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
            src:'/static/public/image/youyi/mw.png',
            class: 'mw',
            type: { list: [] },
            line: { list: [] }
          },
          {
            id: '10025',
            name: 'TTG老虎机',
            src:'/static/public/image/youyi/ttg.png',
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
          id: id == 55 ? "10015" : id,
          device: 'pc',
        })
        if (res && res.code === 200) {
            this.showGames=res.data[id];
            this.gameData=this.showGames.splice(0,25)
            this.pageDatas.page=1;
            this.total = Math.ceil(this.showGames.length/25);
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
        console.log(item)
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
          this.offsetHeight =
            this.$refs['search-container'].offsetHeight < 100
              ? 100
              : this.$refs['search-container'].offsetHeight
        })
      },
      //下一页
      async nextpage () {
        if (this.pageDatas.page < this.total) {
          this.pageDatas.page = this.pageDatas.page + 1
        this.fenshu()
          // this.getData()
        }
      },
      //上一页
      async prevpage () {
        if (this.pageDatas.page > 1) {
          this.pageDatas.page = this.pageDatas.page - 1
        this.fenshu()
          // this.getData()
        }
      },
      //第一页
      async firstpage () {
        this.pageDatas.page = 1
        // this.getData()
        this.fenshu()

      },
      //最后一页
      async lastpage () {
        this.pageDatas.page = this.total
        this.fenshu()
        // this.getData()
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
      this.gameData=this.getPageCurData(this.showGames,25,this.pageDatas.page)
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
      changeMenu(){
        let menu = document.getElementsByClassName('mainbox')[0];
        let aLi = document.getElementById('ali');
        let gao = window.getComputedStyle(this.$refs.gameMenu).height;
        if(parseInt(gao)=='135'){
          menu.style.height = '270px';
          this.showGtu = false;
          aLi.className = 'active';
          this.src = '/static/public/image/youyi/other-item-hover.png';
        }else{
          menu.style.height = '135px';
          this.showGtu = true;
          aLi.className = 'deGame';
          this.src = '/static/public/image/youyi/other-item.png';
        }
      },
      changeSrc1(){
        this.src = '/static/public/image/youyi/other-item-hover.png';
      },
      changeSrc2(){
        this.src = '/static/public/image/youyi/other-item.png';
      }
    },
    created () {
      this.$nextTick(() => {
        if (this.$route.query.id) {
          this.resetItem()
        } else {
          this.fetchgames(this.rollList[0])
        }
      })
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
  .mainContent {
    margin: 0 auto;
    width: 1200px;
    padding:10px 0 1px 0;
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

  .mainbox {
    height: 135px;
    position: relative;
    margin: 0px 0 15px;
    overflow: hidden;

    .game_type1{
      width: 1085px;
      padding:0 0 10px 5px;
      li:hover {
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        background: linear-gradient(rgb(213,92,162),rgb(157,97,221));
        color: #fff;
        div{
          border-bottom: 1px solid #c678d5;
        }
      }
      
    }
    .game_type2{
      position: absolute;
      top: 0;
      right: 5px;
      padding: 0 0 10px 8px;

      li{
        padding: 0 !important;
        img{
          width: 98px;
          height: 120px;
        }
        &.deGame:hover {
          transform: scale(1.1);
          -webkit-transform: scale(1.1);
          -ms-transform: scale(1.1);
          background: linear-gradient(rgb(213,92,162),rgb(157,97,221));
          div{
            border-bottom: 1px solid #c678d5;
          }
        }
        .active{
          transform: scale(1.1);
          -webkit-transform: scale(1.1);
          -ms-transform: scale(1.1);
        }
      }
    }
   
    .game_type {
      clear: both;
      zoom: 1;
      overflow: hidden;
      display: inline-block;

      li.hot_game{
        background: url('/static/public/image/youyi/hot-game1.png') center top no-repeat;
      }
      li.hot_game:hover{
        background: url('/static/public/image/youyi/hot-game-hover1.png') center top no-repeat;
        background-size: 100% 100%;
      }
       li.hot_game.active{
        background: url('/static/public/image/youyi/hot-game-hover1.png') center top no-repeat;
        background-size: 100% 100%;
      }
      li {
        width: 98px;
        height: 120px;
        float: left;
        margin-right: 10px;
        margin-top: 10px;
        padding: 0 5px;
        font-size: 14px;
        background-color: #fff;
        color: rgb(153,153,153);
        border-radius: 10px;
        transition: all 0.2s ease 0s;
        cursor: pointer;
        text-align: center;
        overflow: hidden;

        div{
          border-bottom: 1px solid transparent;
          padding: 17px 0 8px;
        }

        span {
          line-height: 32px;
        }
      }
      li.active {
        transform: scale(1.1);
        font-size: 16px;
        background: linear-gradient(rgb(213,92,162),rgb(157,97,221));
        color: #fff;
        div{
          border-bottom: 1px solid #c678d5;
        }
      }
     
    }
    .game_type2{
      overflow: visible;
      li{
        overflow: visible;
        margin-right:0;
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
  }

  #pt-tag {
    position: absolute;
    top: 54px;
    left: 12px;
    width: 71.2px;
  }

  .search-container {
    padding: 10px;
    border-radius: 10px;
    background: #fff;
    clear: both;
    zoom: 1;
    overflow: hidden;

    .search-info {
      width: 880px;
      padding: 10px 0 10px 50px;
      
      .search-head {
        clear: both;
        zoom: 1;
        overflow: hidden;

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
            position: relative;
            display: inline-block;
            width: 590px;
            border-radius: 5px;
            border: 1px solid #d6dae4;
            vertical-align: middle;

            .ipt {
              border: none;
              width: 100%;
              padding: 0 10px;
              height: 32px;
              line-height: 32px;
              color: #c1c1c1;
              background-color: transparent;
              outline: none;
            }
          }

          .btn-search {
            width: 112px;
            height: 34px;
            border: none;
            border-radius: 7px;
            vertical-align: middle;
            font-size: 16px;
            color: #fff;
            vertical-align: middle;
            background: linear-gradient(180deg,#d55ca2,#9d61dd);
            .search_icon{
              width: 16px;
              height: 16px;
              display: inline-block;
              background: url('/static/public/image/youyi/sousuo.png') no-repeat center center;
              background-size: 100% 100%;
              white-space:nowrap; 
              letter-spacing: -1em; 
              text-indent: -99em; 
              color: transparent;
              &:after{
                /* 伪元素插入空格文本 */
                content: '\3000'; 
              }
            }
            
          }
        

      }

      .search-detail {
        margin-top: 10px;
        overflow: hidden;

        .search-type {
         
          .search-game {
            height: 38px;
            line-height: 38px;
            font: 14px/1.6 tahoma, arial, 'Microsoft YaHei', sans-serif;

            dt {
              margin-right: 12px;
              color: #333;
              display: inline-block;
              vertical-align: middle;
              line-height: 15px;

              .gicon1{
                background: url('/static/public/image/youyi/fenlei.png') no-repeat center center;
              }
              .gicon2{
                background: url('/static/public/image/youyi/jiaokuanqueren.png') no-repeat center center;
              }
              .gicon3{
                background: url('/static/public/image/youyi/youxi.png') no-repeat center center;
              }

              .gicon{
                width: 16px;
                height: 16px;
                display: inline-block;
                background-size: 100% 100%;
                white-space:nowrap; 
                letter-spacing: -1em; 
                text-indent: -99em; 
                color: transparent;
                margin-right: 10px;
                &:after{
                  /* 伪元素插入空格文本 */
                  content: '\3000'; 
                }
              }

            }

            dd {
              display: inline-block;
              vertical-align: middle;

              a {
                display: inline-block;
                margin: 5px 20px 5px 0;
                line-height: 28px;
                color: #999;
                text-decoration: none;
                text-align: center;

              }

              .active {
                background: #ffd100;
                color: #333;
                padding: 0 12px;
                border-radius: 14px;
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
    width: 1260px;

    .game-content::-webkit-scrollbar {
      display: none;
    }

    .game-content {
      width: 1260px;
      height: 1670px;
      position: relative;
      margin-left: -15px;
      overflow: auto;
      padding-top: 25px;

      ul {
        margin: 0 15px;
      }

      .game-item {
        background-attachment: scroll;
        float: left;
        width: 224px;
        padding-bottom: 10px;
        margin-right: 20px;
        margin-bottom: 20px;
        position: relative;
        cursor: pointer;
        font-size: 14px;
        color: #c1c1c1;
        text-align: left;
        transition: all .3s;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        text-align: center;
        
        &:hover {
          transition: all 0.4s;
          transform: translateY(-3px);
        }

        .game-pic {
          position: relative;
          width: 100%;
          height: 224px;
          overflow: hidden;

         .collect {
              position: absolute;
              top: 10px;
              right: 10px;
              width: 27px;
              height: 27px;

              .shoucang {
                display: inline-block;
                position: relative;
                top: 7px;
                width: 27px;
                height: 27px;
                background: url("/static/public/image/icon-shoucang.png") no-repeat center top;
                background-size: 100%;
              }
          }

          .default {
            width: 224px;
            height: 224px;
          }

          .mg-pic {
            
          }
        }

        h3 {
          color: #333;
          font-size: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 10px 0;
        }

        .play, #try{
          width: 91px;
          height: 30px;
          display: inline-block;
          line-height: 30px;
          color: #333;
          border-radius: 15px;
          border:0px solid transparent;

          &.play {
            background: #ffd100;
          }
          &.play:hover {
            background:#ffe366;
          }
          &#try{
            border: 1px solid #333;
          }
          &#try:hover{
            background: #ffd100;
            border:0px solid transparent;
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
