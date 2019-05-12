<template>
  <div class="vp-trend-header">
    <nav class="vp-trend-nav">
      <ul>
        <li @click="trendSelectFc(item,index)" :class="{'active':item.id==getNavDatas.active}"
            v-for="(item,index) in getNavDatas.list" :key=index>
          <a>{{item.name}}</a>
        </li>
      </ul>
      <div class="header-menu-right">
        <span class="text textRight  hot">
          <i class="iconfont icon-hot"></i>
          <router-link tag="a" :to="{path:'/plays/hall',query:{}}">热门彩种</router-link>
        </span>
        <span class="line">|</span>
        <span class="text textRight trend">
          <i class="orange  iconfont icon-curve"></i>
          <!-- <router-link tag="a" :to="{path:'/trend/12',query:{}}">开奖走势</router-link> -->
          <span @click="goLink()">开奖走势</span>
        </span>
        <span class="line">|</span>
        <span class="text textRight rule">
          <i class="orange iconfont icon-rule"></i>
          <a @click="newRulePage">玩法规则</a>
        </span>
        <span class="line">|</span>
        <span class="text textRight phoneApp" @click="goDownLoad">
          <i class="iconfont icon-CombinedShapex"></i>
          <i class="iconfont icon-apple"></i>
          <router-link tag="a" to="">手机APP下载</router-link>
        </span>
      </div>
    </nav>
    <div class="vp-trend-navChild">
      <ul :class="{'active':getNavDatas.active=='999'}">
        <div v-if="getNavDatas.active=='999'" class="arrow"></div>
        <div class="title">{{navDatasChi.name}}</div>
        <li @click="trendSelChil(item,index)" :class="{'active':item.id==navDatasChi.active}"
            v-for="(item,index) in navDatasChi.list" :key='index'>
          <a>{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  // 走势图计算公式：
  // width:(8-1）*40  后面的位置减前面位置乘以每个宽度。
  // height:80,固定不变，如果不是不能画。
  // left:（n-1）*40+0.5*40  当前位置减1加上一半 。
  // top:（n-1）*40+0.5*40  当前行数减1加上一半 。
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        getNavDatas: {
          list: [],
          all: [
    
          ],
          active: '999'
        },
        navDatasChi: {
          name: '全部彩票',
          list: '',
          active: ''
        },  
        childNeed: {},
        lotHeadDatas:{},
        listid:"",
      }
    },
    methods: {
      goLink(){
        this.$router.push({
          path: '/trend/12'
        })
        this.trendSelectFc(this.getNavDatas.list[1])
      },
      //newRulePage
       newRulePage () {
        window.open('#/rules/ssc?id=4')
      },
      goDownLoad () {
        window.open(this.lotHeadDatas.downLoadurl)
      },
      // 点击上面导航（父）
      trendSelectFc (item, index) {
        document.body.style.overflowY = 'scroll'
        // 选中并让显示名称
        this.getNavDatas.active = item.id
        this.navDatasChi.name = item.name
        // 区分全部和分类
        if (item.id == '999') {
          this.navDatasChi.list = this.getNavDatas.all
          // this.navDatasChi.active=this.navDatasChi.list[0].id;
          // // 向下传
          // this.childNeed=this.navDatasChi.list[0];
          // this.$store.commit('lottery/resetTrend',item.lottery[0]);
          // this.$router.push({
          //     path:`/trend/${this.childNeed.id}`
          // })
        } else {
          this.navDatasChi.list = item.lottery;
          this.navDatasChi.active = item.lottery[0].id
          // 向下传（默认第一个）
          this.childNeed = item.lottery[0]
          this.$store.commit('lottery/resetTrend', item.lottery[0])
          this.$router.push({
            path: `/trend/${this.childNeed.id}`
          })
        }
      },
      async getdatalist(id){
        let res = await this.$http.post(`${this.$HOST_NAME}/gameSortNew`, {
              id:id,
              device:"pc"
         })
         if(res && res.code==200){
            console.log(res.data)
            for (let key in res.data) {
                  this.getNavDatas.list.forEach((item=>{
                       if(item.id==key){
                           item.lottery=res.data[key]
                       }
                  }))
            }
            let saveDatas = []
            //  整理全部彩票
            this.getNavDatas.list && this.getNavDatas.list.forEach((item) => {
            if(item.lottery && item.lottery.length>1){
                 saveDatas.push(item.lottery[0])
            }
            item.lottery && item.lottery.forEach((innerItem) => {
              if (this.$route.path.split('/trend/')[1] == innerItem.id) {
                // 找到了向下传(父)
                this.childNeed = innerItem
                this.$store.commit('lottery/resetTrend', innerItem)
                //数据传递完毕选选中（父）
                this.getNavDatas.active = item.id
                //刷新时数据(子)
                this.navDatasChi.list = item.lottery
                //选中子类（子）
                this.navDatasChi.active = innerItem.id
              }
            })
          })
           this.getNavDatas.all = saveDatas
         }
      },
      // 点击子级（子）
      trendSelChil (item, index) {
        // 选中子级样式
        this.navDatasChi.active = item.id
        this.childNeed = item;
        this.$store.commit('lottery/resetTrend', item)
        this.$router.push({
          path: `/trend/${this.childNeed.id}`
        })
      },
      // 获取历史数据
      async getNavDatasFc () {
        let res = await this.$http.post(`${this.$HOST_NAME}/gameSortNew`, {
             id:10000,
             device:"pc"
         })
        if (res && res.code == 200) {
          res.data[10000].unshift({name: '全部彩票', lottery: [], id: '999'})
          this.getNavDatas.list = res.data[10000];
          console.log(this.getNavDatas.list)
          //循环把子数据放进去
            let allid=[]
            this.getNavDatas.list.forEach((item)=>{
                  if(item.id !="999"){
                    allid.push(item.id)
                   }
            })
            if(allid.length>1)  this.listid=allid.join("|")
            else this.listid=allid[0]
            this.getdatalist(this.listid)
        } else {
          // console.log('获取分类失败···')
        }
      }
    },
    watch: {
      // childNeed:{
      //     handler:function(val,oldVal){
      //          this.$store.commit('lottery/resetTrend',val);
      //     },
      //     deep:true
      // }
    },
    created () {
      this.getNavDatasFc()
    },
    computed: {},
    mounted () {
      this.lotHeadDatas = this.$store.state.mainState.downloadUrl;
    },
    beforeDestroy () {

    },
    components: {},
    store
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .vp-trend-header {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 1400px;

    .vp-trend-nav {
      position: relative;
      ul {
        zoom: 1;
        overflow: hidden;
        padding: 0;
        margin: 0;
        min-height: 42px;
        background: #f5f5f5;
        border: 1px solid #dadada;
        li {
          float: left;
          padding: 0 21px;
          line-height: 42px;
          cursor: pointer;
          a {
            font-size:15px;
            color: #515151;
          }
          &.active {
            background: url('/static/public/image/lottery/trend/vp-trend-nav-bg.png');
            a {
              color: #fff;
            }
          }
        }
      }
      .header-menu-right {
        line-height: 42px;
        position: absolute;
        top:0;
        right:25%;
        bottom:0;
        margin:0 auto;
        min-height: 42px;
        .textRight {
          cursor: pointer;
          i{
            color:#ff5050;
          }
          a{
            color:#696969;
          }
        }
      }
    }

    .vp-trend-navChild {
      position: relative;

      ul {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        overflow: hidden;
        transition: max-height .3s linear;
        padding-left: 16px;
        background: #fff;
        border: 1px solid #dadada;
        box-shadow: 0 1px 1px #e8e8de;
        border-top: none;
        max-height: 54px;
        min-height: 54px;
        padding-top: 10px;

        .arrow {
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-top-color: #ff5151;
          position: absolute;
          bottom: -6px;
          left: 50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          cursor: pointer;
          transition: display .3s linear;
        }

        &.active:hover {
          z-index: 1;
          max-height: 150px; //三行
          .arrow {
            display: none;
          }
        }

        .title {
          display: inline-block;
          margin-right: 16px;
          color: #ff5151;
          font-size: 15px;
          line-height: 39px;
        }

        li {
          display: inline-block;
          text-align: center;
          cursor: pointer;
          padding: 0 6px;
          height: 30px;
          line-height: 30px;
          border: 1px solid #dadada;
          border-radius: 4px;
          margin-right: 5px;
          margin-bottom: 10px;

          a {
            font-size: 15px;
            color: #515151;
          }

          &.active {
            border: 1px solid #ff5151;

            a {
              color: #ff5151;
            }
          }
        }
      }
    }
    
  }


</style>
