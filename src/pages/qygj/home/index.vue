<template>
  <div class="new-index klk-home">
    <div class="content_bg">
      <div class="content content-main-bg" :class="{night:colorbool}">
          <div class="wp">
          <div class="game-lists-container">
            <ul class="above-game-content" >
               <li class="slot-game-cont  t-default item slideLeft"   @click="$router.push({path:'/home/live'})" :style="{background: 'url(' + FristDataItem.ico + ') no-repeat center top/100% 100%'}"  v-for="(FristDataItem,FristDataIndex) in displayDatas.fristData" :key="FristDataIndex">
                 <a href="" target="_blank">
                  <div class="slot-game-context" >
                    <p class="title">{{FristDataItem.name}}</p>
                    <p class="desc">{{FristDataItem.text}}</p>
                  </div>
                 </a>
               </li>
               <li class="live-sport-cont">
                 <ul>
                   <li class="live-game slideRight1 t-default t1" @click="$router.push({path:'home/qipai?id=10042&name=开元棋牌'})" >
                       <a href="" target="_blank">
                        <div class="live-game-context" >
                          <p class="title">棋牌游戏</p>
                          <p class="desc">休闲益智 棋乐无穷</p>
                        </div>
                      </a>
                   </li>
                     <li class="sport-game t-default slideRight2 t1" @click="$router.push({path:'/home/caipiao'})">
                       <a href="" target="_blank">
                        <div class="sport-game-context" >
                          <p class="title">彩票游戏</p>
                          <p class="desc">主流玩法精彩加奖</p>
                        </div>
                      </a>
                   </li>
                 </ul>
               </li>
            </ul>
            <ul class="below-game-content">
                    <li class="lottery-game t-default slideLeft2 esports" @click="$router.push({path:'/home/games'})">
                        <a href="/lotteryGame.jsp" target="_blank">
                            <div class="game-context">
                                <p class="title">电子游戏</p>
                                <p class="desc">超级大奖池</p>
                            </div>
                        </a>
                    </li>
                    <li class="chess-game t-default slideTop1 esports" @click="$router.push({path:'/home/buyu'})">
                        <a href="/chess.jsp" target="_blank">
                            <div class="game-context">
                                <p class="title">捕鱼游戏</p>
                                <p class="desc">满屏暴金</p>
                            </div>
                        </a>
                    </li>
                    <li class="other-game t-default slideRight3 esports" @click="$router.push({path:'/home/tiyu'})">
                        <a href="/fish.jsp" target="_blank">
                            <div class="game-context">
                                <p class="title">体育电竞</p>
                                <p class="desc">丰富赛事 分秒精彩</p>
                            </div>
                        </a>
                    </li>
                </ul>
          </div>
          <div class="advantage" :class="{nightTage:colorbool}">
              <div class="slideTop2 animated" >
                <ul class="advantage-cont">
                  <li class="advan_box" v-for="(advanItem,advanIndex) in advanDatas" :key="advanIndex" @click="advantageClick(advanItem)">
                      <a href="javascript:" class="link-cont">
                        <div class="bg_box help-link" :style="{background: 'url(' + advanItem.icon + ') no-repeat center left'}">
                            <h3 class="link-title">{{advanItem.name}}</h3>
                            <p class="link-text">{{advanItem.text}}</p>
                        </div>
                      </a>
                  </li>
                </ul>
          </div>
          </div>
           <Modal :scrollable=true title="网站公告" ok-text="关闭" v-model="showPopout" width="657" class="vp-popout-box" >
              <div class="popout-box">
                <span v-html="popups"></span>
              </div>
         </Modal>
         <!-- <Modal width="657" height="546.67" :scrollable=true :mask-closable=false v-model="showimg" class='guanbi'><img width="100%" height="100%" :src="imgsrc"/><span class="close" @click="close"></span></Modal>  -->
         <!-- <vp-mc :imgsrc="imgsrc"></vp-mc> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import $ from 'jquery'
  import store from '@/vuex/store'
  import UserService from '@/service/public/UserService.js'
  import '@/assets/iconfont/klk/iconfont.css'
  import '@/assets/iconfont/public/iconfont.css'
  // import '/static/img/klk/font/iconfont.css'
  import data from '../../public/games/public.js'
  import vpMc from "./mc"

  export default {
    mixins: [data],
    data () {
      return {
        showimg:false,
        slideTrue:false,
        showPopout: false,
        nightColor:"#fff",
        imgsrc:'/static/qygj/img/pcAlert.png',
        imgdata:['/static/qygj/img/pcAlert1.png','/static/qygj/img/pcAlert2.png','/static/qygj/img/pcAlert3.png'],
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
       
        optionSel: 'PT',
        // 显示图片
        showTypList: [],
        jackpotNum: 41126438900,
        setInter: null,
        publicUrl: 'http://img.7900005.com/',
        downloadAppTarget: '',
        // 首页展示图
        displayDatas:{
          fristData:[
            {
              path:"/home/games",
              ico:"/static/qygj/img/slot-game1.png",
              name:"真人视讯",
              text:"美女主播  热火传情"
            },
           
          ],
          rightData:[
            {
              path:"",
              ico:"/static/qygj/img/live-game.png",
              name:"棋牌游戏",
              text:"休闲益智  棋乐无穷"
            },
            {
              path:"",
              ico:"/static/qygj/img/sport-game.png",
              name:"彩票游戏",
              text:"主流玩法精彩加奖"
            },
          ],
          lastData:[
            {
              path:"",
              ico:"/static/qygj/img/lottery-game1.png",
              name:"电子游戏",
              text:"超级大奖池"
            },
            {
              path:"",
              ico:"/static/qygj/img/chess-game1.png",
              name:"捕鱼游戏",
              text:"满屏暴金"
            },
            {
              path:"",
              ico:"/static/qygj/img/other-game1.png",
              name:"体育电竞",
              text:"丰富赛事 分秒精彩"
            }
          ]
        },
        advanDatas:[
          {
            icon:"/static/qygj/img/tip-demo-1.png",
            name:"试玩体验",
            text:"上百款游戏，不用花钱照样玩!",
            gamename:"tryplay"

          },
          {
            icon:"/static/qygj/img/tip-demo-2.png",
            name:"下载App",
            text:"防劫持，极致体验",
            gamename:"download"
          },
          {
            icon:"/static/qygj/img/tip-demo-3.png",
            name:"合作代理",
            text:"携手新葡京，走发财之路",
            gamename:"Cooperation"
          }
        ],
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
      close(){
          this.showimg=false;
      },
      async advantageClick(advanItem){
        if(advanItem.gamename=='tryplay'){
            let res = await this.$http.get("/frontend/test/demo", { headers: { 'Accept': 'application/x.tg.v2+json' },params:{}});
            if (res && res.code == 200) {
              UserService.setCache(res, 'test')
                 $('html,body')
                .stop()
                .animate({scrollTop: 0}, 500)
            }
        }
        else if(advanItem.gamename=="download"){
            window.open("/static/qygj/html/download/index.html")
        }
        else if(advanItem.gamename=="Cooperation"){
             this.$router.push('/home/about/4')
        }
      },  
      getMycount(){
        let date= new Date();
         if(date.getHours()>=15&&date.getHours()<18){
　　　　         this.imgsrc=this.imgdata[1]
　　     }else if(date.getHours()>=18&&date.getHours()<21){
                this.imgsrc=this.imgdata[2]
          }else{
　　　　        this.imgsrc=this.imgdata[0]
　     　}
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
      jackpotFc () {
        clearInterval(this.setInter)
        this.setInter = setInterval(() => {
          this.jackpotNum = this.jackpotNum + 8.56
        }, 100)
      },
     
      async getPopout () {
        if (!this.$store.state.mainState.ifpourT || localStorage.token)
          return false
        let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
          type: 'popups',
          desc_client_type: 'html'
        })
        if (res && res.code == 200) {
          if (!res.data.data.length){
              this.showimg=true
              return false
          } 
          this.showPopout = true
          this.showimg=true
          this.popups = res.data.data[0] && res.data.data[0].description
          this.$store.commit('mainState/resetPour', false)
        }
      },
   
   
      downloadAppFc () {
        window.open('/static/qygj/html/download/index.html')
      }

    },
    created () {
       setTimeout(() => {
         this.showimg=false
      }, 10000)

    },
    mounted () {
      clearInterval(this.setInter)
      this.jackpotFc()
      if (localStorage.config) {
        let config = JSON.parse(localStorage.config)
        this.publicUrl = config.statics
      }
    },
     computed: {
       colorbool(){
        return this.$store.state.mainState.color
      }
    },
    components: {
      vpMc
    },
    store
  }
</script>

<style lang="less">
  .new-index {
    position: relative;
    max-width: 1920px;
    min-width: 1200px;
    margin: 0 auto;
    background: #f1f1f1;

    .content_bg{
      background-color: #f1f1f1;
      overflow: hidden;
      
      .content-main-bg{
        position: relative;
        padding-bottom:10px;
        background:url(/static/qygj/img/index-main-bg-1.jpg) no-repeat center top;
        background-size: 100% 100%;
        .wp{
          width: 1200px;
          margin: 0 auto;
         
          .game-lists-container{
            // padding: 25px 0 0;
             padding:10px 0 0;
            .above-game-content{
              height:462px;
              display: flex;
              -webkit-box-pack:justify;
              justify-content: space-between;
              flex-wrap: wrap;
              // padding-left: 20px;
              position: relative;
              .item{
                transform: scale(1);
                transition: transform 100ms;
                cursor: pointer;
                &:hover {
                   transform: scale(1.03)
                }
              }
              .slot-game-cont{
                  position: relative;
                  display: inline-block;
                  width: 633px;
                  height: 100%;
                  background: url(/static/qygj/img/slot-game1.png) no-repeat center top;
                  background-size:100% 100%;   
                  -moz-background-size:100% 100%;   
                  -webkit-background-size:100% 100%;   
                  -o-background-size:100% 100%;
                  left:-2000px; 
                .slot-game-context{
                  position: absolute;
                  right: 30px;
                  top: 60px;
                  color: #fff;
                  font-size: 16px;
                  font-style: italic;
                  text-align: right;
                 
                  .title{
                    line-height:42px;
                    font-size: 26px;
                    font-weight: bold;
                  }
                  .desc{
                    line-height: 28px;
                    font-size: 18px
                  }
                }
              }
              .live-sport-cont{
                position: absolute;
                right: 0;
                top: 0;
                height: 462px;
                font-style: italic;
                ul{
                  .live-game{
                    cursor: pointer;
                    position: absolute;
                    right: 15px;
                    top:5px;
                    height: 240px;
                    width: 590px;
                    background: url(/static/qygj/img/live-game.png) no-repeat center top;
                    background-size: 100% 100%;
                    right:-2000px;
                    .live-game-context{
                      position: absolute;
                      left: 36px;
                      text-align: center;
                      bottom: 15px;
                      color: #fff;
                      .title{
                        line-height: 42px;
                        margin-left: 12px;
                        font-size: 26px;
                        font-weight: bold;
                      }
                      .desc{
                        font-size: 18px;
                        line-height: 29px;
                      }
                    }
                  }
                  .sport-game{
                    position: absolute;
                    // right: -26px;
                    right:-10px;
                    top: 251px;
                    height: 210px;
                    width: 680px;
                    background: url(/static/qygj/img/sport-game.png) no-repeat center top;
                    background-size: 100% 100%;
                    right:-2000px;
                    .sport-game-context{
                      position: absolute;
                      left: 36px;
                      bottom: 15px;
                      color: #fff;
                      text-align: center;
                      .title{
                        line-height: 42px;
                        margin-left:12px;
                        font-size: 26px;
                        font-weight: bold;
                      }
                      .desc{
                        line-height: 29px;
                        font-size: 18px;
                      }
                    }
                  }
                  .t1{
                    transform: scale(1);
                    transition: transform 100ms;
                     &:hover {
                      transform: scale(1.03)
                    }
                  }
                }
              }
            } 
            .below-game-content{
              position: relative;
              height: 219px;
              margin: 5px 0 30px;
              display: flex;
              -webkit-box-pack: justify;
              justify-content: space-between;
              flex-wrap: wrap;
              // padding-left: 20px;
              li{
                .game-context{
                  position: absolute;
                  right: 15px;
                  bottom: 15px;
                  text-align: right;
                  color: #fff;
                  font-style: italic;
                  .title{
                    margin-right: 10px;
                    font-size: 22px;
                    font-weight: bold;
                    line-height: 35px;
                  }
                  .desc{
                    font-size: 16px;
                    line-height: 25px;
                  }
                }
              }
              .esports{
                 transform: scale(1);
                 transition: transform 100ms;
                  &:hover {
                      transform: scale(1.03)
                  }
              }
              .lottery-game{
                  position: absolute;
                  top: 9px;
                  height: 219px;
                  width: 470px;
                  background:url(/static/qygj/img/lottery-game1.png) no-repeat center top;
                  background-size: 100% 100%;
                  left:-2000px
              }
              .chess-game{
                    position: absolute;
                    right: 406px;
                    top: 6px;
                    width: 420px;
                    height: 222px;
                    background: url(/static/qygj/img/chess-game1.png) no-repeat center top;
                    background-size: 100% 100%;
                    top:2000px;
                }
              .other-game{
                    position: absolute;
                    top: 9px;
                    width: 396px;
                    height: 219px;
                    background: url(/static/qygj/img/other-game1.png) no-repeat center top;
                    background-size: 100% 100%;
                    right:-2000px;
                }  
              }
            }
          .advantage{
            max-width: 1164px;
            height: 200px;
            // margin: 0 auto;
            .advantage-cont{
              display: flex;
              -webkit-box-pack: justify;
              justify-content: space-between;
              width:100%;
              height:200px;
              .advan_box{
                  -webkit-box-flex: 1;
                  -ms-flex: 1;
                  flex: 1;
                  display: inline-block;
                  width: 33%;
                  padding: 67px 0;
                  vertical-align: top;
                  cursor: pointer;
                  transition: all .2s;
                  .link-cont{
                    display: block;
                    text-align: left;
                    .help-link{
                       transform: translateY(0);
                       transition: transform 500ms;
                    
                      &:hover {
                        transform: translateY(-20px)
                      }
                      height: 67px;
                      padding-left: 66px;
                      .link-title{
                        line-height: 40px;
                        padding: 0 0 5px;
                        font-size: 22px;
                        color: #666;
                        font-weight: bold;
                      }
                      .link-text{
                        font-size: 18px;
                        color: #999;
                    }
                  }
                }
              }
              .advan_box:nth-child(1){
                .help-link{
                  width:305px; 
                }
              }
              .advan_box:nth-child(2){
                margin-left:100px;
                .help-link{
                   padding-left: 72px;
                }
              }
              .advan_box:nth-child(3){
                 margin-left:40px;
                .help-link{
                   padding-left: 80px;
                }
              }
            }
          }
          .nightTage{
            background:rgba(18, 21, 66, 0.8);
            h3,p{
              color:white!important;
            }
          }
        }
      }
     .night{
        background:url(/static/qygj/img/index-main-bg-n.jpg) no-repeat center top;
        background-size:100% 100%; 
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
        background: #ff0000 url(/static/qygj/img/ui-bg_gloss-wave_45_817865_500x100.png) 50% 50% repeat-x;
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
    .slideTop2{
      padding: 0 70px;
      background-color: white;
      border-radius: 20px;
      position: relative;
      bottom:-2000px;
    }


  .animationName(@name,@time){
      animation-delay:2s;
      animation: @name 0.5s @time 1;
      animation-timing-function: ease;
      animation-direction: normal;
      animation-fill-mode:forwards;
  }

  .keyFrames(@name,@value,@value1){
     @keyframes @name {
       0%{
        left:@value;opacity: 0;
       } 
       50%{
        left:@value;opacity:0;
       }
       100%{
        left:@value1;opacity:1;
       }
    }
  }
   .keyFrames2(@name,@value,@value1){
     @keyframes @name {
       0%{
        right:@value;opacity: 0;
       } 
       50%{
        right:@value;opacity:0;
       }
       100%{
        right:@value1;opacity:1;
       }
    }
  }
   .keyFrames3(@name,@value,@value1){
      @keyframes @name {
       0%{
        top:@value;opacity: 0;
       } 
       50%{
        top:@value;opacity:0;
       }
       100%{
        top:@value1;opacity:1;
       }
    }
   }
 
    .slideLeft{.animationName(slideLeft,.8s)}
    .keyFrames(slideLeft,-2000px,0);

    .slideRight1{.animationName(slideRight1,1.2s)}
    .keyFrames2(slideRight1,-2000px,15px);
  
    .slideRight2{.animationName(slideRight2,1.5s)}
    .keyFrames2(slideRight2,-2000px,-10px);

    .slideLeft2{.animationName(slideLeft2,1.8s)}
    .keyFrames(slideLeft2,-2000px,-68px);
 
    .slideTop1{.animationName(slideTop1,2.4s)}
    .keyFrames3(slideTop1,2000px,6px);

    .animated{.animationName(slideTop2,2.7s)}
    .keyFrames3(slideTop2,2000px,0);

    .slideRight3{.animationName(slideRight3,2.1s)} 
    .keyFrames2(slideRight3,-2000px,38px);
  
</style>
