<template>
  <div class="new-index klk-home">
    <div class="newgong">
      <div class="newgong-content">
        <div class="notice">
          <i class="iconfont icon-sound"></i>
        </div>

        <div class="demolist list">
          <marquee align="middle" direction="left" loop="-1" scrollamount="3" onmouseout="this.start()"
                   onmouseover="this.stop()"
                   style="color: white; font-size: 15px; line-height: 40px;overflow: hidden;height: 40px;">
            <span v-html="lantern"></span>
          </marquee>
        </div>
      </div>
    </div>



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

    <!-- 老轮播图接口写法 -->
    <!-- <div class="carouse">
      <el-carousel :interval="5000" arrow="never" height="530px">
        <el-carousel-item v-for="(item,i) in carouselData" :key="i">
          <a :href="item.targets" target="_blank" v-if="item.targets !=='#'">
            <img :src="item.img" alt="">
          </a>
          <img :src="item.img" alt="" v-else>
        </el-carousel-item>
      </el-carousel>
    </div> -->





    <div class="downLoad-wrap">
      <div class="download">
        <div @click="downloadAppFc" class="app_part">
          <i class="iconfont icon-shoujiAppxiazai"></i>
          <h3>下载专区</h3>

        </div>
        <div class="down_part" @click="$router.push({path:'/home/partner'})">
          <i class="iconfont icon-dailijiameng"></i>
          <h3>代理加盟</h3>
          <!-- <a href="javascript:void(0)" onclick="menu_url(63)"> <span class="link-spanner"></span>
                    </a> -->

        </div>
      </div>
      <div class="jackpots active">
        <div class="light">
          <div class="jackpot-title">
            <img src="/static/klk/img/jockpot.png" alt="">
          </div>
          <div class="jackpot-number">
            <span>￥</span>
            <span>{{jackpotNum.toString().substring(0,3)}}</span>
            <span>，</span>
            <span>{{jackpotNum.toString().substring(3,6)}}</span>
            <span> ，</span>
            <span>{{jackpotNum.toString().substring(6,9)}}</span>
            <span>.</span>
            <span>{{jackpotNum.toString().substring(9,11)}}</span>
          </div>
          <div class="jackpots_bar">
            <img src="/static/klk/img/jack_bar.png">
          </div>
          <div class="jackpots_model">
            <img src="/static/klk/img/jack_model.png">
          </div>
        </div>
      </div>
    </div>
    <div class="kelake-bot-wrap">
      <div class="game-list-left">
        <div class="winner_list">
          <div class="section_title">
            <h4>
              <i class="iconfont icon-zhongjiangmingdan"></i>中奖名单</h4>
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
                    <div>存款
                      <span>{{item.in==0?100:item.in}}</span>元
                    </div>
                    <div>喜提￥
                      <span>{{+item.out==0?10000:Math.floor(item.out)}}</span>元
                    </div>
                  </div>
                </li>

              </div>

            </ul>
          </div>
        </div>
      </div>
      <div class="game-list-right">
        <div class="section_title">
          热门游戏推荐
          <ul class="type">
            <li @click="optionFc(item)" :key='index' v-for="(item,index) in optionList"
                :class="{'active':optionSel==item.name}">
              <a :class="{'active':optionSel==item.name}" href="javascript:void(0)">{{item.name}}</a>
            </li>
          </ul>
        </div>
        <div class="all">
          <div @click="upCarl" class="arrow left">
            <div class="bg-arrow_left"></div>
          </div>
          <Carousel ref='carousel' class="all-vrL" v-model="value3" :autoplay="setting.autoplay"
                    :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots" :trigger="setting.trigger"
                    :arrow="setting.arrow2">
            <Carousel-item :key='outIndex' v-for="(outItem,outIndex) in optionList">
              <ul class="type-ul">
                <li :key='index' v-for="(item,index) in showTypList" class="type-li">
                  <!-- lmm optionSel -->
                  <div :class="[{'active':optionSel=='MG'}]" class="img">
                    <img :src="publicUrl+item.images" alt="">
                  </div>
                  <div class="mask" :class="{'active':token}">
                    <div v-show="Public_User=='test'||!Public_User" class="try" @click="loginGame(item)">
                      <a href="javascript:void(0);">试玩游戏</a>
                    </div>
                    <div v-show="Public_User!='test'" class="play" @click="loginGame(item)">
                      <a href="javascript:void(0);">进入游戏</a>
                    </div>
                  </div>
                  <div class="text">{{item.name}}</div>
                </li>
              </ul>
            </Carousel-item>
          </Carousel>
          <div @click="downCarl" class="arrow right">
            <div class="bg-arrow_right"></div>
          </div>
        </div>
        <div class="slot_game game-bg">
          <Carousel class="slot-vrL" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed"
                    :dots="setting.dots" :trigger="setting.trigger" :arrow="setting.arrow">
            <Carousel-item>
              <ul class="item_list">
                <li class="item" @click="$router.push({path:'/home/games',query:{id:'10022'}})">
                  <div class="ball">MG</div>
                  <div class="text">MG老虎机</div>
                </li>
                <li class="item" @click="$router.push({path:'/home/games',query:{id:'10015'}})">
                  <div class="ball">AG</div>
                  <div class="text">AG老虎机</div>
                </li>
                <li class="item loy" @click="$router.push({path:'/home/games',query:{id:'10024'}})">
                  <div class="ball">PT</div>
                  <div class="text">PT老虎机</div>
                </li>
                <li class="item" @click="$router.push({path:'/home/games',query:{id:'10018'}})">
                  <div class="ball">CQ9</div>
                  <div class="text">CQ9老虎机</div>
                </li>
                <li class="item" @click="$router.push({path:'/home/games',query:{id:'10042'}})">
                  <div class="ball">棋牌</div>
                  <div class="text">开元棋牌</div>
                </li>
                <li class="item" @click="$router.push({path:'/home/games',query:{id:'10020'}})">
                  <div class="ball">FG</div>
                  <div class="text">FG老虎机</div>
                </li>
              </ul>
            </Carousel-item>
            <Carousel-item>
              <ul class="item_list">
                <li class="item" @click="$router.push({path:'/home/games',query:{id:'10021'}})">
                  <div class="ball">JDB</div>
                  <div class="text">JDB电子</div>
                </li>
                <li class="item loy" @click="$router.push({path:'/home/games',query:{id:'10016'}})">
                  <div class="ball">BBIN</div>
                  <div class="text">BBIN老虎机</div>
                </li>
                <li class="item" @click="$router.push({path:'/home/games',query:{id:'10014'}})">
                  <div class="ball">AE</div>
                  <div class="text">AE老虎机</div>
                </li>
                <li class="item" @click="$router.push({path:'/home/games',query:{id:'10019'}})">
                  <div class="ball">DT</div>
                  <div class="text">DT老虎机</div>
                </li>
                <li class="item" @click="$router.push({path:'/home/games',query:{id:'10023'}})">
                  <div class="ball">MW</div>
                  <div class="text">MW棋牌</div>
                </li>
                <li class="item" @click="$router.push({path:'/home/games',query:{id:'10025'}})">
                  <div class="ball">TTG</div>
                  <div class="text">TTG老虎机</div>
                </li>
              </ul>
            </Carousel-item>
          </Carousel>
        </div>
        <div class="live_game">
          <div class="live game-bg">
            <Carousel class="vrL" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed"
                      :dots="setting.dots" :trigger="setting.trigger" :arrow="setting.arrow">
              <Carousel-item>
                <ul class="item_list">
                  <li class="item" @click="getItemId({name:'OG视讯厅',id:'39',platform:'live_casino'})">
                    <div class="ball">OG</div>
                    <div class="text">OG视讯厅</div>
                  </li>
                  <li class="item" @click="getItemId({name:'eBET视讯厅',id:'34',platform:'live_casino'})">
                    <div class="ball">eBET</div>
                    <div class="text">eBET视讯厅</div>
                  </li>
                  <li class="item loy" @click="getItemId({name:'LMG视讯厅',id:'36',platform:'live_casino'})">
                    <div class="ball">LMG</div>
                    <div class="text">LMG视讯厅</div>
                  </li>
                  <li class="item" @click="getItemId({name:'欧博视讯厅',id:'37',platform:'live_casino'})">
                    <div class="ball">欧博</div>
                    <div class="text">欧博视讯厅</div>
                  </li>
                  <li class="item" @click="getItemId({name:'SA视讯厅',id:'40',platform:'live_casino'})">
                    <div class="ball">SA</div>
                    <div class="text">SA视讯厅</div>
                  </li>
                </ul>
              </Carousel-item>
              <Carousel-item>
                <ul class="item_list">
                  <li class="item" @click="getItemId({name:'AG视讯',id:'14',platform:'live_casino'})">
                    <div class="ball">AG</div>
                    <div class="text">AG视讯</div>
                  </li>
                  <li class="item" @click="getItemId({name:'BBIN视讯',id:'15',platform:'live_casino'})">
                    <div class="ball">BBIN</div>
                    <div class="text">BBIN视讯</div>
                  </li>
                  <li class="item loy" @click="getItemId({name:'BG视讯',id:'44',platform:'live_casino'})">
                    <div class="ball">BG</div>
                    <div class="text">BG视讯</div>
                  </li>
                  <li class="item" @click="getItemId({name:'DG视讯',id:'33',platform:'live_casino'})">
                    <div class="ball">DG</div>
                    <div class="text">DG视讯</div>
                  </li>
                  <li class="item" @click="getItemId({name:'DS视讯',id:'16',platform:'live_casino'})">
                    <div class="ball">DS</div>
                    <div class="text">DS视讯</div>
                  </li>
                  <li class="item" @click="getItemId({name:'LEBO视讯',id:'35',platform:'live_casino'})">
                    <div class="ball">LEBO</div>
                    <div class="text">LEBO视讯</div>
                  </li>
                </ul>
              </Carousel-item>
            </Carousel>
          </div>
          <div class="gym game-bg">
            <Carousel class="vrL" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed"
                      :dots="setting.dots" :trigger="setting.trigger" :arrow="setting.arrow">
              <Carousel-item>
                <ul class="item_list">
                  <li class="item " @click="getItemId({name:'BBIN体育',id:'41',platform:'sport'})">
                    <div class="ball">BBIN</div>
                    <div class="text">BBIN体育</div>
                  </li>
                  <li class="item " @click="getItemId({name:'沙巴体育',id:'20',platform:'sport'})">
                    <div class="ball">沙巴</div>
                    <div class="text">沙巴体育</div>
                  </li>
                </ul>
              </Carousel-item>
              <Carousel-item>
                <ul class="item_list">
                  <li class="item" @click="getItemId({name:'皇冠体育',id:'21',platform:'sport'})">
                    <div class="ball">皇冠</div>
                    <div class="text">皇冠体育</div>
                  </li>
                  <li class="item" @click="getItemId({name:'AG体育',id:'22',platform:'sport'})">
                    <div class="ball">AG</div>
                    <div class="text">AG体育</div>
                  </li>
                </ul>
              </Carousel-item>
            </Carousel>
          </div>
        </div>
        <div class="fish_game game-bg">
          <ul class="item_list">
            <li class="item" @click="trustLogin({name:'捕鱼王',platform:'AG_GAME',gameName:'548',id:265})">
              <div class="ball">AG</div>
              <div class="text">捕鱼王</div>
            </li>
            <li class="item" @click="trustLogin({name:'深海大赢家',platform:'PT_GAME',gameName:'cashfi',id:2628})">
              <div class="ball">PT</div>
              <div class="text">深海大赢家</div>
            </li>
            <li class="item loy" @click="trustLogin({name:'千炮捕鱼',platform:'MW_GAME',gameName:'1051',id:151})">
              <div class="ball">MW</div>
              <div class="text">千炮捕鱼</div>
            </li>
            <li class="item" @click="trustLogin({name:'龙王捕鱼',platform:'JDB_GAME',gameName:'7#7002',id:175})">
              <div class="ball">JDB</div>
              <div class="text">龙王捕鱼</div>
            </li>
            <li class="item" @click="trustLogin({name:'欢乐捕鱼',platform:'FG_GAME',gameName:'fish_hl',id:2626})">
              <div class="ball">FG</div>
              <div class="text">欢乐捕鱼</div>
            </li>
            <li class="item" @click="trustLogin({name:'美人捕鱼',platform:'FG_GAME',gameName:'fish_mm',id:2576})">
              <div class="ball">FG</div>
              <div class="text">美人捕鱼</div>
            </li>
          </ul>
        </div>
        <div class="lottery_game game-bg">
          <ul class="item_list">
            <li class="item loy" @click="$router.push({path:'/plays/hall'})">
              <div class="ball">传统</div>
              <div class="text">传统彩票</div>
            </li>
            <li class="item loy" @click="getItemId({id:'30',platform:'vr_lottery',name:'VR彩票',})">
              <div class="ball">VR</div>
              <div class="text">VR彩票</div>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <!-- <Modal :scrollable=true title="网站公告" ok-text="关闭" v-model="showPopout" width="657" class="vp-popout-box">
      <div class="popout-box">
        <span v-html="popups"></span>
      </div>
    </Modal> -->
  </div>
</template>

<script>
  // import $ from 'jquery'
  import store from '@/vuex/store'
  import '@/assets/iconfont/klk/iconfont.css'
  // import '/static/img/klk/font/iconfont.css'
  import data from '../../public/games/public.js'
  import service from '@/service/public/service.js'


  export default {
    mixins: [data],
    data () {
      return {
        showPopout: false,
        popups: '',
        lantern: '',
        value3: 0,
        // 轮播设置
        setting: {
          autoplay: false,
          autoplaySpeed: 2000,
          dots: 'none',
          trigger: 'click',
          arrow: 'hover',
          arrow2: 'never'
        },
        // 滚动名单
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
        // 选项选择
        optionList: [
          {name: 'PT', id: '10024', index: 0},
          {name: 'MG', id: '10023', index: 1},
          {name: 'AG', id: '10015', index: 2},
          {name: 'CQ9', id: '10018', index: 3},
          {name: 'DT', id: '10019', index: 4},
          {name: 'AE', id: '10014', index: 5},
          {name: 'TTG', id: '10025', index: 6},
          {name: 'BBIN', id: '10016', index: 7}
        ],
        optionSel: 'PT',
        // 显示图片
        showTypList: [],
        carouselData: [],
        jackpotNum: 41126438900,
        setInter: null,
        publicUrl: 'http://img.7900005.com/',
        downloadAppTarget: ''
      }
    },
    methods: {
      upCarl () {
        if (this.value3 == 0) return false
        this.value3--
        if (this.value3 <= 0) {
          this.value3 = 0
        }
        this.optionSel = this.optionList[this.value3].name
        this.getTypeL(this.optionList[this.value3].id)
      },
      downCarl () {
        if (this.value3 == this.optionList.length - 1) return false
        this.value3++
        if (this.value3 >= this.optionList.length - 1) {
          this.value3 = this.optionList.length - 1
        }
        this.optionSel = this.optionList[this.value3].name
        this.getTypeL(this.optionList[this.value3].id)
      },
      optionFc (item) {
        this.optionSel = item.name
        this.getTypeL(item.id)
        this.value3 = item.index
      },
      // async getTypeL (id) {
      //   let res = await this.$http.post(`${this.$HOST_NAME}/games/pages`, {
      //     classId: id,
      //     limit: 6,
      //     devices: 'pc',
      //     tag: 'HOT'
      //   })
      //   if (res && res.code == 200) {
      //     this.showTypList = res.data.data
      //   } else {
      //     this.$store.commit('alert/showTipModel', {
      //       bool: true,
      //       title: res.message,
      //       model: 'warn'
      //     })
      //   }
      // },
      //获取数据
      // async getTypeL(item) {
      //   this.gameData = [];
      //   let id=this.$route.query.id
      //   let res = await _SetPost(`${this.$HOST_NAME}/gameSortNew`, {
      //       device: "pc",
      //       id
      //   });
      //   if (res && res.code === 200) {
      //     console.log(res.data.data);
      //     this.gameData = res.data[id];
      //     this.total = res.data.last_page;
      //   }
      // },
      async getTypeL(id) {
      let selectid=id
      let res = await this.$http.post(`${this.$HOST_NAME}/gameSortNew`, {
        id: id,
        device: "pc",
      });
      if (res && res.code == 200) {
          this.showTypList = res.data[selectid].slice(0,6);
      } else {
        this.$store.commit("alert/showTipModel", {
          bool: true,
          title: res.message,
          model: "warn"
        });
      }
    },
      jackpotFc () {
        clearInterval(this.setInter)
        this.setInter = setInterval(() => {
          this.jackpotNum = this.jackpotNum + 8.56
        }, 100)
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
      // 老文字走马灯接口
      // async getLantern () {
      //   let res = await this.$http.post(`${this.$HOST_NAME}/site/newNotice`, {
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
          this.popups = res.data.data[0] && res.data.data[0].description
          this.$store.commit('mainState/resetPour', false)
        }
      },
      //获取banner新接口,改用老接口，已经进行了兼容
      async getBanner () {
        let res = await this.$http.post(`${this.$HOST_NAME}/site/position`, {
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
            // this.carouselData&&this.carouselData.forEach((item,index)=>{
            //   item.newPic="/static/test/img/0425test/banner"+(index+1)+".jpg";
            // })
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

      // 旧banner接口
      // async getBanner () {
      //   let res = await this.$http.post(`${this.$HOST_NAME}/site/position`, {
      //     position: 'banner',
      //     clientType: 'pc'
      //   })
      //   if (res && res.code == 200) {
      //     this.carouselData = res.data[0] && res.data[0].body
      //     this.downloadAppTarget = res.data[0] && res.data[0].downloadAppTarget
      //   }

      // },
      downloadAppFc () {
        window.open('/static/klk/html/download/index.html')
      }

    },
    created () {
      // this.getPopout()
      this.getBanner()
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
          var id = Math.ceil(Math.random() * 61)
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
      // console.log(datas)
      // console.log(this.scrollDatas)
      this.optionFc(this.optionList[0])
    },
    mounted () {
      clearInterval(this.setInter)
      this.jackpotFc()
      this.getLantern()
      if (localStorage.config) {
        let config = JSON.parse(localStorage.config)
        this.publicUrl = config.statics
      }
    },
    components: {},
    store
  }
</script>

<style lang="less" >


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
      }
    }

    .carouse {
      text-align: center;
      width: 100%;
      overflow:hidden;
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
        background: #ff0000;
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
</style>
