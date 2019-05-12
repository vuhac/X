<template>
  <div class="game-wrap">
    <!-- <div class="game_slide">
      <div class="topLfet" id="wrap">
        <div class="wrap" >
          <ul id="wrap1">
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
          </ul>
          <ul id='wrap2'></ul>
        </div>
        
      </div>
    </div> -->
    <div class="geme_cont" :class="{night:colorbool}">
      <vp-header-pic style="margin-bottom:40px;" :headerImg="headerImg"></vp-header-pic >
      <vp-Games style="margin-top:-10px;"></vp-Games>
    </div>
  </div>
</template>
<script>
  import vpGames from '../../../public/games/t111_index'
  import vpHeaderPic from "../headerPic";

  export default {
    data () {
      return {
        headerImg:"/static/t111/img/carouel/dz.jpg"
        // random: [
        //   {
        //     account: '',
        //     name: 'PT游戏满月财富',
        //     ico: '/static/public/image/game/ptgame/ashfmf.jpg',
        //     in: 0,
        //     out: 0
        //   },
        //   {
        //     account: '',
        //     name: 'PT游戏丛林之心',
        //     ico: '/static/public/image/game/ptgame/ashhotj.jpg',
        //     in: 0,
        //     out: 0
        //   },
        //   {
        //     account: '',
        //     name: 'PT游戏猫女王',
        //     ico: '/static/public/image/game/ptgame/catqk.jpg',
        //     in: 0,
        //     out: 0
        //   },
        //   {
        //     account: '',
        //     name: 'PT游戏埃斯梅拉达',
        //     ico: '/static/public/image/game/ptgame/esmk.jpg',
        //     in: 0,
        //     out: 0
        //   },
        //   {
        //     account: '',
        //     name: 'PT游戏古怪猴子',
        //     ico: '/static/public/image/game/ptgame/fm.jpg',
        //     in: 0,
        //     out: 0
        //   },
        //   {
        //     account: '',
        //     name: 'PT游戏玛丽莲梦露',
        //     ico: '/static/public/image/game/ptgame/gtsmrln.jpg',
        //     in: 0,
        //     out: 0
        //   },
        //   {
        //     account: '',
        //     name: 'PT游戏年年有余',
        //     ico: '/static/public/image/game/ptgame/nian_k.jpg',
        //     in: 0,
        //     out: 0
        //   },
        //   {
        //     account: '',
        //     name: 'PT游戏幸运直击',
        //     ico: '/static/public/image/game/ptgame/sol.jpg',
        //     in: 0,
        //     out: 0
        //   },
        //   {
        //     account: '',
        //     name: 'PT游戏三倍猴子',
        //     ico: '/static/public/image/game/ptgame/trpmnk.jpg',
        //     in: 0,
        //     out: 0
        //   },
        //   {
        //     account: '',
        //     name: 'PT游戏招财进宝',
        //     ico: '/static/public/image/game/ptgame/zcjb.jpg',
        //     in: 0,
        //     out: 0
        //   }
        // ],
        // scrollDatas: [],
      }
    },
    methods: {
      // menuSlide(){
      //   let box = document.getElementById('wrap');
      //   let box1 = document.getElementById('wrap1');
      //   let box2 = document.getElementById('wrap2');

      //   var speed = 30;
      //   box2.innerHTML = box1.innerHTML;
      //   function Marquee(){
      //     if( box2.offsetWidth-box.scrollLeft<=0 ){
      //       box.scrollLeft -= box1.offsetWidth;
      //     }else{
      //       box.scrollLeft++;
      //     }
      //   }
      //   var time = setInterval(Marquee,speed);
      //   box.onmouseover = function(){
      //     clearInterval(time);
      //   }
      //   box.onmouseout = function(){
      //     time = setInterval(Marquee,speed);
      //   }
      // }
     
    },
    created() {
      // let chars = [
      //   '0',
      //   '1',
      //   '2',
      //   '3',
      //   '4',
      //   '5',
      //   '6',
      //   '7',
      //   '8',
      //   '9',
      //   'A',
      //   'B',
      //   'C',
      //   'D',
      //   'E',
      //   'F',
      //   'G',
      //   'H',
      //   'I',
      //   'J',
      //   'K',
      //   'L',
      //   'M',
      //   'N',
      //   'O',
      //   'P',
      //   'Q',
      //   'R',
      //   'S',
      //   'T',
      //   'U',
      //   'V',
      //   'W',
      //   'X',
      //   'Y',
      //   'Z',
      //   'a',
      //   'b',
      //   'c',
      //   'd',
      //   'e',
      //   'f',
      //   'g',
      //   'h',
      //   'j',
      //   'k',
      //   '-',
      //   'l',
      //   'm',
      //   'n',
      //   'o',
      //   'p',
      //   'q',
      //   'r',
      //   's',
      //   't',
      //   'u',
      //   'v',
      //   'w',
      //   'x',
      //   'y',
      //   'z'
      // ]

      // // 随机用户名
      // function generateMixed (n) {
      //   var res = ''
      //   for (var i = 0; i < n; i++) {
      //     var id = Math.ceil(Math.random() * 62)
      //     res += chars[id]
      //   }
      //   return res
      // }

      // //50个模型demo
      // let datas = []
      // for (let index = 0; index < 50; index++) {
      //   // debugger
      //   let obj = {}
      //   // for(let key in this.random[Math.floor(Math.random() * 10)]) {
      //   //   obj[key]=this.random[Math.floor(Math.random() * 10)][key]
      //   // }
      //   Object.assign(obj, obj, this.random[Math.floor(Math.random() * 10)])
      //   datas.push(obj)
      // }
      // // 求出随机数
      // datas.forEach((item, v) => {
      //   // console.log(v)
      //   // debugger
      //   item.in = Math.random().toFixed(2) * 1000
      //   item.out =
      //     Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 100 < 1
      //       ? 10000
      //       : Math.random().toFixed(2) * 1000 * Math.random().toFixed(1) * 100
      //   item.account = generateMixed(3)
      // })
      // this.scrollDatas = datas;
    },
    mounted () {
      // this.menuSlide();
    },
    watch: {},
    components: {
      vpGames,
      vpHeaderPic
    },
    computed:{
        colorbool(){
        return this.$store.state.mainState.color
      },
    }
  }
</script>

<style lang="less" scoped>
 .geme_cont{
    position: relative;
    // padding: 50px 0;
    padding-bottom:50px;
    max-width: 1920px;
    min-width: 1200px;
    margin: 0 auto;
    background: #eaeaea url("/static/public/image/game/ptgame/slotGame_bg1.png") repeat-y center top;
  }
  // .game_slide{
  //   width: 100%;
  //   height: 117px;

  //   .topLfet {
  //     width: 100%;
  //     height: 100%;
  //     position: relative;
  //     overflow: hidden;

  //     .wrap{
  //       width: 35030px;
  //       position: absolute;
  //       left: 0;
        
  //       ul{
  //         overflow: hidden;
  //         border-left: 1px solid #b48c68;
  //         border-right: 1px solid #b48c68;
  //         width: 17500px;
  //         float: left;

  //         li {
  //           width: 295px;
  //           height: 87px;
  //           margin: 15px 50px 15px 0;
  //           padding: 15px 20px;
  //           display: inline-block;
  //           border-radius: 10px;
  //           box-shadow: 0 0 5px 5px rgba(0,0, 0,0.2);

  //           .gamepic {
  //             width:40px;
  //             height: 40px;
  //             float: left;
  //             margin-right:20px;

  //             img {
  //               width: 100%;
  //               height: 100%;
  //               border-radius: 50%;
  //             }
  //           }

  //           .wintext {
  //             text-align: left;
  //             float: left;
  //             font-size: 12px;
  //             width: 195px;

  //             div {
  //               span {
  //                 color: red;
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }  
  // }
  .night{
      background: rgba(18,21,66,.8)
  }
</style>
