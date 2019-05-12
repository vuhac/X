<template>
  <div class="new-home">

    <div class="container clearfloat">
      <!-- 左边 -->
      <div class="wrapL">
        <!-- 左边导航 -->
        <ul class="subnav">
          <li v-for="(item,key) in wraplData" :key="key">
            <a @click="goto(item.router)" target="_blank" class="MustLogin">
              <img :src="item.img" alt="">
              <span class="sortName">{{item.sortNmae}}</span>
              <span class="des">{{item.des}}</span>
            </a>
          </li>
        </ul>
        <ul class="subnav bottom">
          <li v-for="(item,key) in wraplCtData" :key="key" class="clearfix">
            <div class="fl title">{{item.name}}</div>
            <div class="fr initemWrapper clearfix">
              <a class="fl" v-for="(initem,i) in item.children" :key="i" @click="goto(initem.router)" target="_blank">
                {{initem.name}}
              </a>
            </div>
            <div class="links" :class="'links'+key">
              <h2>{{item.links.name}}</h2>
              <div class="paths">
                <ul class="clearfix">
                  <li class="fl" v-for="(link,i) in item.links.paths" :key="i">
                    <a  @click="goto(link.router)" target="_blank">{{link.name}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <!-- 中奖信息 -->
        <div class="winningList">
          <h6>中奖信息</h6>
          <div style="overflow:hidden;">
            <ul class="winerList">
              <li class="clearfloat" v-for="(item,key) in scrollDatas" :key="key">
                <img :src="item.ico">
                <p class="color">{{item.account}}**** {{item.name}}
                  <br>喜中
                  <span>¥{{item.out}}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <!-- 新手指引 -->
        <div class="palyerGuide">
          <h6 class="clearfix"><span class="fl">新手指引</span> <a class="fr" href="#/home/help" target="_blank">更多>></a>
          </h6>
          <div class="question" v-for="(que,i) in questions" :key="i">
            <router-link :to="que.path">{{que.name}}</router-link>
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <div class="wrapR fr">
        <div class="top clearfix">
          <div class="banner fl">
            <el-carousel :interval="2000" arrow="never" height="276px">
              <el-carousel-item v-for="(item,i) in carouselData" :key="i">
                <img :src="item.img" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- <div class="appCode fr">
            <div class="btns clearfix">
              <div @click="isCode='ios'" class="fl" :class="{active:isCode=='ios'}">IOS版</div>
              <div @click="isCode='android'" class="fl" :class="{active:isCode=='android'}">Android版</div>
            </div>
            <div class="wrapper">
              <div v-show="isCode=='ios'" class="ios">
                <img src="/static/cjw/img/ios.png" alt="">
              </div>
              <div v-show="isCode=='android'" class="android">
                <img src="/static/cjw/img/android.png" alt="">
              </div>
            </div>
          </div> -->
        </div>
        <div class="news">
          <div class="newsContent">
            <div class="demolist list" style="height:35px;">
              <div class="notice">
                <img src="/static/cjw/img/icon_notice.png" alt="">
              </div>
              <marquee v-if="lantern" align="middle" direction="left" loop="-1" scrollamount="3" onmouseout="this.start()"
                       onmouseover="this.stop()">
                <span v-html="lantern"></span>
              </marquee>
            </div>
          </div>
        </div>
        <div class="autoTab clearfix">
          <div class="left fl">
            <ul class="hd clearfloat">
              <li :class="{on:hdActive==0}" @click="getResult({name:'bjsc',id:2});hdActive=0">北京赛车</li>
              <li :class="{on:hdActive==1}" @click="getResult({name:'cqssc',id:4});hdActive=1">重庆时时彩</li>
              <li :class="{on:hdActive==2}" @click="getResult({name:'xglhc',id:1});hdActive=2">香港六合彩</li>
              <li :class="{on:hdActive==3}" @click="getResult({name:'kssc',id:12});hdActive=3">快速赛车</li>
              <li :class="{on:hdActive==4}" @click="getResult({name:'ksk3',id:27});hdActive=4">快速快三</li>
            </ul>

            <div class="bd clearfix">
              <div class="left fl">
                <img :src="allReData.img"/>
              </div>
              <div class="right fl">
                <div class="result">
                  <div class="issue">第<a>{{allReData.lastissue}}</a>期</div>
                  <div class="cycle">{{allReData.cycle}}</div>
                  <div class="number clearfloat">
                    <em :key="index" v-for="(item,index) in allReData.lastresultInfoArr">{{item}}</em>
                  </div>
                  <div class="btn">
                    <a @click="goto(allReData.router||'#/plays/tradition/18')" target="_blank" class="mainColorBtn">立即投注</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right fr">
            <div class="img">
              <i></i>
              <span>彩经网</span>
            </div>
            <div class="others">
              <div class="rule h32">
                <a :href="allReData.rulePath||'#/rules/ssc?id=18'" target="_blank">
                  <i class="r"></i>
                  <span>玩法规则</span>
                </a>
                <a :href="allReData.trendPath||'#/trend/18'" target="_blank">
                  <i class="trend"></i>
                  <span>玩法走势</span>
                </a>
              </div>
              <!-- <div class="describe h32">2元赢取1000万巨奖</div> -->
              <!-- <div class="h32">本期投注剩余时间：</div>
              <div class="time h32">
              </div> -->
            </div>
          </div>
        </div>
        <div class="lives">
          <div class="wrapper clearfix">
            <div class="liveItem" v-for="(item,i) in lives" :key="i" @click="gotolink(item)">
              <img :src="item.src" alt="">
              <span></span>
            </div>
          </div>
        </div>
        <div class="hotGames" ref="a">
          <div class="header clearfix">
            <h3 class="fl">热门游戏排行</h3>
            <a class="fr" href="#/plays/hall" target="_blank">查看全部>></a>
          </div>
          <div class="wrapper clearfix">
            <div class="gameItem fl" v-for="(game,i) in hotGames" :key="i">
              <a  @click="goto(game.router)" target="_blank">
                <img :src="game.img" alt="">
                <span>{{game.name}}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal :scrollable=true title="网站公告" ok-text="关闭" v-model="showPopout" width="657" class="vp-popout-box">
      <div class="popout-box">
        <span v-html="popups"></span>
      </div>
    </Modal>
      <Modal width="657" height="546.67" :scrollable=true v-model="showimg" class='guanbi'><img width="100%" height="100%" src="/static/cjw/img/pcAlert.png"/><span class="close" @click="close"></span></Modal>
  </div>
</template>

<script>
  import UserService from '@/service/public/UserService.js'
  import store from '@/vuex/store'
  import data from '@/pages/public/games/public.js'

  export default {
    mixins: [data],
    data () {
      return {
        showimg:false,
        showPopout: false,
        popups: '',
        lantern: '',
        isCode: 'ios',
        active: 0,
        lives: [
          {
            name: '购彩大厅',
            src: '/static/cjw/img/nhome/game2.png',
            // id: 14,
            path:"/plays/hall",
            // platform: 'live_casino'
          },
          {
            name: '棋牌游戏',
            src: '/static/cjw/img/nhome/game3.png',
            path:"/home/qipai",
            // id: 15,
            // platform: 'live_casino'
          },

          {
            name: '捕鱼达人',
            src: '/static/cjw/img/nhome/game1.png',
            path:"/home/buyu",
            // id: 16,
            // platform: 'live_casino'
          }
        ],
        carouselData: [],
        hotGames: [
          {
            name: '香港六合彩',
            img: '/static/public/image/lottery/nico/png/1.png',
            router: '#/plays/tradition/1'
          },
          {
            name: '北京赛车',
            img: '/static/public/image/lottery/nico/png/2.png',
            router: '#/plays/tradition/2'
          },
          {
            name: '重庆时时彩',
            img: '/static/public/image/lottery/nico/png/4.png',
            router: '#/plays/tradition/4'
          },
          {
            name: '快速时时彩',
            img: '/static/public/image/lottery/nico/png/16.png',
            router: '#/plays/tradition/16'
          },

          {
            name: '江苏快3',
            img: '/static/public/image/lottery/nico/png/9.png',
            router: '#/plays/tradition/9'
          },
          {
            name: '快速六合彩',
            img: '/static/public/image/lottery/nico/png/18.png',
            router: '#/plays/tradition/18'
          },
          {
            name: '幸运飞艇',
            img: '/static/public/image/lottery/nico/png/3.png',
            router: '#/plays/tradition/3'
          },
          {
            name: '三分赛车',
            img: '/static/public/image/lottery/nico/png/13.png',
            router: '#/plays/tradition/13'
          },
          {
            name: '三分时时彩',
            img: '/static/public/image/lottery/nico/png/17.png',
            router: '#/plays/tradition/17'
          },
          {
            name: '幸运农场',
            img: '/static/public/image/lottery/nico/png/6.png',
            router: '#/plays/tradition/6'
          }
        ],
        wraplData: [
          {
            img: '/static/public/image/lottery/nico/png/1.png',
            sortNmae: '香港六合彩',
            des: '',
            router: '#/plays/tradition/1'
          },
          {
            img: '/static/public/image/lottery/nico/png/2.png',
            sortNmae: '北京赛车',
            des: '',
            router: '#/plays/tradition/2'
          },
          {
            img: '/static/public/image/lottery/nico/png/4.png',
            sortNmae: '重庆时时彩',
            des: '',
            router: '#/plays/tradition/4'
          },
          {
            img: '/static/public/image/lottery/nico/png/9.png',
            sortNmae: '江苏快3',
            des: '',
            router: '#/plays/tradition/9'
          },
          {
            img: '/static/public/image/lottery/nico/png/27.png',
            sortNmae: '快速快3',
            des: '',
            router: '#/plays/tradition/27'
          },
          {
            img: '/static/public/image/lottery/nico/png/12.png',
            sortNmae: '快速赛车',
            des: '',
            router: '#/plays/tradition/12'
          },


        ],
        wraplCtData: [
          {
            name: '传统',
            children: [
              {name: '北京赛车', router: '#/plays/tradition/2'},
              {name: '重庆时时彩', router: '#/plays/tradition/4'},
              {name: '广东11选5', router: '#/plays/tradition/7'},
              {name: '香港六合彩', router: '#/plays/tradition/1'},
              {name: '江苏快3', router: '#/plays/tradition/9'},
              {name: '幸运农场', router: '#/plays/tradition/6'}
            ],
            links: {
              name: '传统彩票',
              paths: [
                {name: '北京赛车', router: '#/plays/tradition/2'},
                {name: '重庆时时彩', router: '#/plays/tradition/4'},
                {name: '广东11选5', router: '#/plays/tradition/7'},
                {name: '香港六合彩', router: '#/plays/tradition/1'},
                {name: '广东快乐十分', router: '#/plays/tradition/5'},
                {name: '幸运农场', router: '#/plays/tradition/6'},
                {name: '幸运飞艇', router: '#/plays/tradition/3'},
                {name: '新疆时时彩', router: '#/plays/tradition/14'},
                {name: '天津时时彩', router: '#/plays/tradition/15'},
                {name: '湖南快乐十分', router: '#/plays/tradition/20'},
                {name: '江苏快3', router: '#/plays/tradition/9'},
                {name: '北京快3', router: '#/plays/tradition/2900'},
                {name: '甘肃快3', router: '#/plays/tradition/2901'},
                {name: '广西快3', router: '#/plays/tradition/2902'},
                {name: '贵州快3', router: '#/plays/tradition/2903'},
                {name: '河北快3', router: '#/plays/tradition/2904'},
                {name: '湖北快3', router: '#/plays/tradition/2905'},
                {name: '上海快3', router: '#/plays/tradition/2906'},
                {name: '安徽快3', router: '#/plays/tradition/25'},
                {name: '吉林快3', router: '#/plays/tradition/26'},
                {name: '江西11选5', router: '#/plays/tradition/21'},
                {name: '上海11选5', router: '#/plays/tradition/22'},
                {name: '山东11选5', router: '#/plays/tradition/23'},
                {name: '福彩3D', router: '#/plays/tradition/11'},
                {name: '排列3', router: '#/plays/tradition/28'},
                {name: '上海时时乐', router: '#/plays/tradition/29'}
              ]
            }
          },
          {
            name: '快速',
            children: [
              {name: '快速赛车', router: '#/plays/tradition/12'},
              {name: '三分赛车', router: '#/plays/tradition/13'},
              {name: '快速六合彩', router: '#/plays/tradition/18'},
              {name: '五分六合彩', router: '#/plays/tradition/19'},
              {name: '快速快3', router: '#/plays/tradition/27'}
            ],
            links: {
              name: '快速彩票',
              paths: [
                {name: '快速赛车', router: '#/plays/tradition/12'},
                {name: '三分赛车', router: '#/plays/tradition/13'},
                {name: '快速六合彩', router: '#/plays/tradition/18'},
                {name: '五分六合彩', router: '#/plays/tradition/19'},
                {name: '快速快3', router: '#/plays/tradition/27'},
                {name: '快速11选5', router: '#/plays/tradition/24'},
                {name: '快速时时彩', router: '#/plays/tradition/16'},
                {name: '三分时时彩', router: '#/plays/tradition/17'}
              ]
            }
          },
          {
            name: '全部',
            children: [
              {name: '北京赛车', router: '#/plays/tradition/2'},
              {name: '重庆时时彩', router: '#/plays/tradition/4'},
              {name: '江苏快3', router: '#/plays/tradition/9'},
              {name: '快速快3', router: '#/plays/tradition/27'},
              {name: '香港六合彩', router: '#/plays/tradition/1'}
            ],
            links: {
              name: '全部玩法',
              paths: [
                {name: '快速赛车', router: '#/plays/tradition/12'},
                {name: '三分赛车', router: '#/plays/tradition/13'},
                {name: '北京赛车', router: '#/plays/tradition/2'},
                {name: '幸运飞艇', router: '#/plays/tradition/3'},
                {name: '重庆时时彩', router: '#/plays/tradition/4'},
                {name: '新疆时时彩', router: '#/plays/tradition/14'},
                {name: '天津时时彩', router: '#/plays/tradition/15'},
                {name: '快速时时彩', router: '#/plays/tradition/16'},
                {name: '三分时时彩', router: '#/plays/tradition/17'},
                {name: '快速六合彩', router: '#/plays/tradition/18'},
                {name: '五分六合彩', router: '#/plays/tradition/19'},
                {name: '香港六合彩', router: '#/plays/tradition/1'},
                {name: '广东快乐十分', router: '#/plays/tradition/5'},
                {name: '幸运农场', router: '#/plays/tradition/6'},
                {name: '湖南快乐十分', router: '#/plays/tradition/20'},
                {name: '江苏快3', router: '#/plays/tradition/9'},
                {name: '北京快3', router: '#/plays/tradition/2900'},
                {name: '甘肃快3', router: '#/plays/tradition/2901'},
                {name: '广西快3', router: '#/plays/tradition/2902'},
                {name: '贵州快3', router: '#/plays/tradition/2903'},
                {name: '河北快3', router: '#/plays/tradition/2904'},
                {name: '湖北快3', router: '#/plays/tradition/2905'},
                {name: '上海快3', router: '#/plays/tradition/2906'},
                {name: '安徽快3', router: '#/plays/tradition/25'},
                {name: '吉林快3', router: '#/plays/tradition/26'},
                {name: '快速快3', router: '#/plays/tradition/27'},
                {name: '快速11选5', router: '#/plays/tradition/24'},
                {name: '广东11选5', router: '#/plays/tradition/7'},
                {name: '江西11选5', router: '#/plays/tradition/21'},
                {name: '上海11选5', router: '#/plays/tradition/22'},
                {name: '山东11选5', router: '#/plays/tradition/23'},
                {name: 'PC蛋蛋', router: '#/plays/tradition/10'},
                {name: '福彩3D', router: '#/plays/tradition/11'},
                {name: '排列3', router: '#/plays/tradition/28'},
                {name: '上海时时乐', router: '#/plays/tradition/29'}
              ]
            }
          }
        ],
        hdActive: 0,
        // 滚动名单
        random: [
          {
            account: '',
            name: '江苏快3',
            ico: '/static/cjw/img/home/slder1.jpg',
            out: 0
          },
          {
            account: '',
            name: '湖北快3',
            ico: '/static/cjw/img/home/slder.jpg',
            out: 0
          },
          {
            account: '',
            name: '5分六合',
            ico: '/static/cjw/img/home/slder2.jpg',
            out: 0
          },
          {
            account: '',
            name: '极速赛车',
            ico: '/static/cjw/img/home/slder3.jpg',
            out: 0
          },
          {
            account: '',
            name: '北京赛车',
            ico: '/static/cjw/img/home/slder4.jpg',
            out: 0
          },
          {
            account: '',
            name: '快速11选5',
            ico: '/static/cjw/img/home/slder5.jpg',
            out: 0
          },
          {
            account: '',
            name: '幸运飞艇',
            ico: '/static/cjw/img/home/td1.jpg',
            out: 0
          },
          {
            account: '',
            name: '重庆时时彩',
            ico: '/static/cjw/img/home/slder6.jpg',
            out: 0
          },
          {
            account: '',
            name: '幸运农场',
            ico: '/static/cjw/img/home/slder7.jpg',
            out: 0
          },
          {
            account: '',
            name: '广东快乐十分',
            ico: '/static/cjw/img/home/slder8.jpg',
            out: 0
          }
        ],
        questions: [
          {name: '有银行卡就可以充值了吗？', path: 'home/question?helpId=4'},
          {name: '如何开通网上支付？', path: 'home/question?helpId=5'},
          {name: '如何进行充值？', path: 'home/question?helpId=6'},
          {name: '充值要手续费吗？', path: 'home/question?helpId=7'},
          {name: '如何提款？', path: 'home/question?helpId=12'},
          {name: '提款需要手续费吗？', path: 'home/question?helpId=13'},
          {name: '提款不成功怎么办？', path: 'home/question?helpId=16'}
        ],
        scrollDatas: [],
        allReData: {
          router: '#/plays/tradition/18',
          img: '',
          cycle: '',
          rulePath: '#/rules/ssc?id=18',
          trendPath: '#/trend/18',
          lastissue: '',
          lastresultInfoArr: []
        }
      }
    },
    methods: {
      // 游戏跳转
      gotolink(item){
        // console.log(item)
          //  if(localStorage.token){
          //        if(localStorage.Public_User=='test' ){
          //          this.dNotify("彩票暂无试玩,立即注册", "error")
          //      }else{
          //        this.$router.push({path:item.path})
          //      }
          //   }else{
          //        this.dNotify("请先登录", 'error')
          //   }
          this.$router.push(item.path)

      },
      async getPopout () {
        if (!this.$store.state.mainState.ifpourT || localStorage.token)
          return false
        let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
          type: 'popups',
          desc_client_type: 'html'
        })
        if (res && res.code == 200) {
          if (!res.data.data.length) return false
          this.showPopout = true
          this.showimg=false
          this.popups = res.data.data[0] && res.data.data[0].description
          this.$store.commit('mainState/resetPour', false)
        }
      },
      //获取banner
      async getBanner () {
        let res = await this.$http.post(`${this.$HOST_NAME}/site/position`, {
          position: 'banner',
          clientType: 'pc'
        })
        if (res && res.code == 200) {
          this.carouselData = res.data[0] && res.data[0].body
        }
      },
       close(){
          this.showimg=false;
      },
      goThirdParty (item) {
        // 第三方跳转
        this.getItemId(item)
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
      // async getLantern () {
      //   let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
      //     type: 'lantern',
      //     desc_client_type: 'html'
      //   })
      //   if (res && res.code == 200) {
      //     if (!res.data.data.length) return false
      //     this.lantern = res.data.data[0] && res.data.data[0].description
      //   }
      //   // 参数： type: lantern 走马灯
      //   // 参数： type: popups 弹窗
      //   // 参数： type: notice 提示
      // },

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
      async getResult (item) {
        let res = await this.$http.get(
          `${this.$HOST_NAME}/lottery/getIssue/${item.id}`,
          {}
        )
        if (res && res.code == 200) {
          let config = [
            {
              name: 'ksk3',
              id: 27,
              router: '#/plays/tradition/27',
              cycle: '每75秒一期',
              img: '/static/public/image/lottery/nico/png/27.png',
              rulePath: '#/rules/k3?id=27',
              trendPath: '#/trend/27'
            },
            {
              name: 'bjsc',
              id: 2,
              router: '#/plays/tradition/2',
              cycle: '每20分钟一期',
              img: '/static/public/image/lottery/nico/png/2.png',
              rulePath: '#/rules/pk10?id=2',
              trendPath: '#/trend/2'
            },
            {
              name: 'cqssc',
              id: 4,
              router: '#/plays/tradition/4',
              cycle: '每20分钟一期',
              img: '/static/public/image/lottery/nico/png/4.png',
              rulePath: '#/rules/ssc?id=4',
              trendPath: '#/trend/4'
            },
            {
              name: 'xglhc',
              id: 1,
              router: '#/plays/tradition/1',
              cycle: '一周三期',
              img: '/static/public/image/lottery/nico/png/1.png',
              rulePath: '#/rules/lhc?id=1',
              trendPath: '#/trend/1'
            },
            {
              name: 'kssc',
              id: 12,
              router: '#/plays/tradition/12',
              cycle: '每75秒一期',
              img: '/static/public/image/lottery/nico/png/12.png',
              rulePath: '#/rules/pk10?id=12',
              trendPath: '#/trend/12'
            }
          ]
          let target = config.filter(con => con.id == item.id)[0]
          console.log(target);
          if (target) {
            this.allReData.router = target.router
            this.allReData.img = target.img
            this.allReData.cycle = target.cycle
            this.allReData.rulePath = target.rulePath
            this.allReData.trendPath = target.trendPath
            this.allReData.lastissue = res.data.lastissue
            this.allReData.lastresultInfoArr = res.data.lastresultInfo.split(',')
          }
        }
      },
      setNavCurr () {
        this.$store.commit('setCurr', 1)
        this.$router.push('/home/youhui')
      },
      logout () {
        UserService.logout.call(this)
      }
    },
    created () {
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

      function generateMixed (n) {
        var res = ''
        for (var i = 0; i < n; i++) {
          var id = Math.ceil(Math.random() * 61)
          res += chars[id]
        }
        return res
      }

      //50个模型demo
      let datas = []
      for (let index = 0; index < 50; index++) {
        // debugger;
        let obj = {}
        Object.assign(obj, obj, this.random[Math.floor(Math.random() * 10)])
        datas.push(obj)
      }
      // 求出随机数
      datas.forEach((item, v) => {
        let arr = [2, 3, 5, 4]
        item.out =
          Math.ceil(Math.random() * 10) *
          Math.pow(
            arr[Math.floor(Math.random() * arr.length)],
            arr[Math.floor(Math.random() * arr.length)]
          )
        item.account = generateMixed(3)
      })
      this.scrollDatas = datas
      // console.log(datas);
    },
    mounted () {
      // this.getPopout()
      this.getResult({name: 'bjsc', id: 2})
      this.getLantern()
      this.getBanner()
    },
    computed: {
      userinfo () {
        return this.$store.state.mainState.userinfo
      }
    },
    store
  }
</script>

<style lang="less" scoped>
  @import "../../../assets/less/cjw/flipclock.css";

  @keyframes animatesub {
    0% {
      top: 0;
    }
    100% {
      top: -2000px;
    }
  }

  .new-home {
    padding-bottom: 10px;
    background-image: url(/static/cjw/img/home_bj.png);
    background-position: center -200px;
    background-repeat: no-repeat;
    background-color: #f6f1f1;

    .container {
      width: 1000px;
      margin: 0 auto;

      .wrapL {
        float: left;
        margin-top: 7px;
        width: 200px;

        .palyerGuide {
          height: 361px;
          margin-top: 10px;
          background-color: #fff;

          h6 {
            padding: 0 5px;
            height: 42px;
            line-height: 42px;
            color: #4677c4;
            background: #aaaaaa40;

            span {
              font-weight: bold;
            }

            a {
              font-size: 13px;
            }
          }

          .question {
            height: 35px;
            line-height: 35px;
            padding: 0 5px;

            a {
              font-size: 12px;
              color: #666;
            }

            a:hover {
              color: #4677c4;
            }
          }
        }

        .winningList {
          background-color: #fff;
          margin-top: 12px;
          border: 1px solid #dce1e5;
          height: 311px;
          overflow: hidden;

          h6 {
            margin: 0;
            padding: 0 8px;
            line-height: 30px;
            border-bottom: 1px solid #eee;
            font-size: 14px;
            font-weight: 600;
          }

          .winerList {
            position: relative;
            animation: animatesub 80s linear infinite;

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

                span {
                  color: #f63745;
                  margin: 0 5px;
                }
              }
            }
          }
        }

        .subnav {
          background-color: #fff;

          li {
            height: 50px;
            line-height: 50px;
            padding: 0 8px;
            border-bottom: 1px solid #e4e3e3;

            a {
              display: block;
              height: 100%;

              img {
                margin: 4px 5px 0px 5px;
                width: 38px;
                height: 38px;
                display: inline-block;
              }

              .sortName {
                margin-right: 5px;
                margin-bottom: 10px;
                vertical-align: top;
                font-size: 14px;
                color: #333;
                font-weight: 700;
              }

              .des {
                margin-right: 5px;
                margin-bottom: 10px;
                vertical-align: top;
                color: #999;
                font-size: 12px;
                font-weight: 100;
              }
            }
          }
        }

        .subnav.bottom {
          li {
            height: 83px;
            padding: 0 10px;
            position: relative;
            border: none;
          }

          li:hover {
            background-color: #f8f8f8;
          }

          li:hover .links {
            display: block;
          }

          .title {
            width: 30px;
            height: 60px;
            text-align: center;
            border-radius: 7px;
            margin-top: 9px;
            line-height: 24px;
            margin-right: 15px;
            margin-left: 5px;
            border: 1px solid #f1adad;
            padding-top: 7px;
            background: #f5c8c8;
            color: #f31819;
          }

          .initemWrapper {
            width: 130px;

            a {
              width: 60px;
              height: 28px;
              margin: 0 1px;
              line-height: 28px;
              color: #666;
              font-size: 12px;
            }

            a:hover {
              color: #f31819;
            }
          }

          .links {
            width: 800px;
            height: 253px;
            position: absolute;
            left: 200px;
            top: 0;
            background-color: #f8f8f8;
            padding-left: 20px;
            display: none;
            z-index:1000;

            li {
              width: 102px;
              text-align: left;
              height: 30px;
              line-height: 30px;
              font-size: 12px;

              a {
                color: #666;
              }
            }

            h2 {
              height: 50px;
              line-height: 50px;
              text-indent: 20px;
            }

            a:hover {
              color: #f31819;
            }
          }

          .links1 {
            top: -85px;
          }

          .links2 {
            top: -170px;
          }
        }
      }

      .wrapR {
        margin-left: 8px;
        margin-top: 8px;
        border-radius: 3px;

        .hotGames {
          background-color: #fff;
          width: 100%;
          margin-top: 10px;
          cursor: pointer;

          .header {
            height: 42px;
            line-height: 42px;
            color: #4677c4;
            font-weight: 500;
            border-bottom: 1px solid #e6e3e3;
            padding: 0 16px;

            a {
              font-size: 13px;
            }
          }

          .wrapper {
            // width: 675px;
            width:720px;
            margin: auto;
            padding: 10px 0;

            .gameItem {
              width: 115px;
              height: 120px;
              font-size: 13px;
              text-align: center;
              // margin: 10px;
              margin:9px 14px;
            }

            a {
              color: #666;
            }

            img {
              margin-bottom:10px;
              width: 100px;
              height: 100px;
            }

            span {
              font-size:16px;
              margin-top: 5px;
            }
          }
        }

        .top {
          .banner {
            width: 777px;
            overflow: hidden;
            cursor: pointer;

            /deep/ .el-carousel__indicators {
              bottom: 5px;
            }

            /deep/ .el-carousel__button {
              width: 10px;
              height: 10px;
              border-radius: 50%;
            }

            img {
              width: 100%;
              height: 100%;
            }
          }

          .appCode {
            height: 222px;
            width: 180px;
            margin-left: 8px;
            background-color: #fff;

            .wrapper {
              width: 130px;
              margin: auto;
            }

            .btns {
              font-size: 16px;
              color: #666;

              div {
                width: 90px;
                height: 48px;
                line-height: 48px;
                text-align: center;
                border-radius: 3px;
                cursor: pointer;
              }

              div.active {
                background: #e4393c;
                color: #fff;
              }
            }

            img {
              width: 130px;
              margin-top: 25px;
            }
          }
        }

        .news {
          // height: 21px;
          height:35px;
          width: 100%;
          margin: 10px 0;
          background-color: #fff;
          z-index: 12;

          img {
            width:20px;
            margin-top: 2px;
          }

          .newsContent {
            width: 700px;
            // height: 21px;
            height:35px;
            margin: 0 auto;

            .demolist {
              display: inline-block;
              width: 740px;
              position: relative;

              .notice {
                display: inline-block;
                position: absolute;
                top: 5px;
                left: -30px;
              }
            }
          }

          marquee {
            color: #666;
            font-size: 13px;
            // height: 21px;
            height:35px;
            // line-height: 21px;
            line-height: 35px;

            overflow: hidden;
          }
        }

        .autoTab {
          // height: 251px;
          height: 244px;

          // margin-top: 13px;
          border: 1px solid #d7e2f7;
          box-sizing: border-box;
          background-color: #fff;

          .right {
            width: 260px;
            font-size: 12px;

            .img {
              height: 48px;
              line-height: 48px;
              text-align: right;
              padding-right: 40px;

              i {
                display: inline-block;
                width: 32px;
                height: 32px;
                vertical-align: middle;
                background: url(/static/cjw/img/icon/home.fw.png) no-repeat -142px
                6px;
              }

              span {
                vertical-align: middle;
              }
            }

            .h32 {
              height: 32px;
              line-height: 32px;
            }

            a {
              color: #cc0000;
            }

            a:hover {
              text-decoration: underline;
            }

            .rule {
              // margin-top: 30px;
              // margin-top: 80px;
              margin-top:93px;

              i {
                display: inline-block;
                width: 32px;
                height: 32px;
                background: url(/static/cjw/img/icon/home.fw.png) no-repeat;
                line-height: 32px;
                color: #cc0000;
                vertical-align: middle;
              }

              i.r {
                background-position: -448px 0;
              }

              i.trend {
                background-position: -482px 0;
              }

              span {
                vertical-align: middle;
              }
            }
          }

          .hd {
            li {
              width: 103px;
              text-align: center;
              height: 48px;
              line-height: 48px;
              box-sizing: border-box;
              cursor: pointer;
              float: left;
              font-size: 16px;
              color: #666;
            }

            .on {
              width: 103px;
              border-bottom: 2px solid #e4393c;
              background: #fff;
            }
          }

          .bd {
            text-align: left;

            .left {
              width: 128px;
              height: 194px;
              text-align: center;

              img {
                width: 100px;
                height: 100px;
                margin-top: 30px;
              }
            }

            .right {
              width: 387px;

              .issue {
                height: 24px;
                width: 100%;
                font-size: 12px;
                color: #000000;
                margin-top: 30px;
                line-height: 24px;

                a {
                  color: #cc0000;
                }
              }

              .cycle {
                color: #cc0000;
                font-size: 12px;
                margin: 4px 0;
              }

              .result {
                .number {
                  height: 70px;
                  line-height: 70px;

                  em {
                    border: 1px solid #b13032;
                    background: linear-gradient(180deg, #e46062 2%, #de2f2e);
                    font-size: 20px;
                    color: #fff;
                    font-weight: 700;
                    border-radius: 50%;
                    width: 34px;
                    height: 34px;
                    display: inline-block;
                    // line-height: 36px;
                    line-height: 32px;
                    text-align: center;
                    font-weight: 100;
                    margin: 2px;
                    cursor: default;
                  }
                }

                .btn {
                  text-align: center;

                  .mainColorBtn {
                    display: inline-block;
                    line-height: 30px;
                    color: #fff !important;
                    padding: 0 15px;
                    border-radius: 3px;
                    font-size: 14px;
                    margin-right: 10px;
                    min-width: 55px;
                    text-align: center;
                    cursor: pointer;
                    background: #e4393c;
                  }
                }
              }
            }
          }
        }

        .lives {
          width: 100%;
          height: 310px;
          margin-top: 10px;
          // padding: 11px 0;
          background: url(/static/cjw/img/livebg.png) repeat;

          .wrapper {
            // width: 732px;
            // margin: auto;
            cursor: pointer;

            .liveItem {
              float: left;
              // border: 1px solid #cccccc;
              // margin-left: 5px;
              // margin-left:16px;
              position: relative;

              img {
                width: 256px;
                // height: 286px;
              }

              span {
                position: absolute;
                bottom: 23px;
                left: 10px;
                padding: 13px 58px;
                display: none;
                background: url(/static/cjw/img/livebtn-enter.png) no-repeat;
              }

            }
            .liveItem:nth-child(2){
              margin:0 5px;
            }
            .liveItem:hover span {
              display: block;
            }
          }
        }
      }
    }

    .vp-popout-box {
      /deep/ .ivu-modal {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -328px;
        margin-top: -273px;
      }

      /deep/ .ivu-modal-close {
        z-index: 2;
        top: 6px;

        i {
          color: #fff;
        }
      }

      /deep/ .ivu-modal-header {
        width: 650px;
        height: 34px;
        margin-top: 5px;
        margin-left: 3px;
        padding: 0;
        border-radius: 10px;
        border: 1px solid #494437;
        background-color: #ff0000;
        color: #ffffff;
        font-weight: bold;
        position: relative;
        top: 4px;

        .ivu-modal-header-inner {
          color: #fff;
          line-height: 34px;
          height: 34px;
          padding-left: 15px;
        }
      }

      /deep/ .ivu-modal-footer {
        border-top: 1px solid #cdd5da;

        .ivu-btn-text {
          display: none;
        }

        .ivu-btn-primary {
          background: #ff0000;
          border-color: #ff0000;
          padding: 3px 12px 3px 12px;
          border-radius: 6px;
        }
      }

      .popout-box {
        min-height: 427px;
        font-family: "Microsoft YaHei";
        font-size: 24px;
        line-height: 1.5;
        color: #383838;
      }

      // /deep/
    }
  }


  .guanbi img{
    position: relative;
  }
  .guanbi  /deep/ .ivu-modal-footer{
    display: none;
  }
  .guanbi  /deep/ .ivu-modal-body{
    padding: 0 !important;
    height: 546.67px;
  }
  .guanbi  /deep/ .ivu-modal-close{
    display: none;
  }
  .guanbi  /deep/ .ivu-modal {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -328px;
        margin-top: -273px;
  }
  .guanbi .close{
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    top: 3px;
    right: 3px;
    cursor: pointer;
  }
</style>
