<template>
  <div class="live-video animated   bounceInDown">
    <!-- <iframe ref='myFrame' name="myFrame"  :src="src" width="1000px" height="1000px"></iframe> -->
    <a href="#/trend/1" target="_blank"
       v-if="$route.query.id === '1' || $route.query.id === '18' || $route.query.id === '19'">
      <div class="btn-box">
      </div>
    </a>

    <div class="noDatas" v-if="!src">
      <img src="/static/public/image/lottery/noDatas.jpg" alt="">
    </div>

    <iframe class="animated  bounceInDown" v-if="!noDataStatus" ref='myFrame' :src="src" width="100%" scrolling="no"
            height="100%" frameborder="0" style="width: 1128px; height: 719.902px;"></iframe>
    <div @click="upClose" class="closeBt">X</div>
  </div>
</template>
<script>
  export default {
    props: {},
    data () {
      return {
        src: '',
        noDataStatus: false
      }
    },
    watch: {
      $route () {}
    },
    methods: {
      upClose () {
        this.$emit('LotteryAnimateFc',false)
      },
      // 能用的
      // this.src='/static/html/lottery-animate/speed5.html'   //急速时时彩
      // this.src='/static/html/lottery-animate/pk10.html' //pk10
      // this.src='/static/html/lottery-animate/speed10.html' //急速赛车
      // this.src='/static/html/lottery-animate/gdklsf.html'
      // this.src='/static/html/lottery-animate/xync.html'

      classify () {
        let id = this.$route.meta.id;
        if (id === 1 || id === 18 || id === 19) { //六合彩
          if (id === 1) {this.src = 'https://kj.kai861.com/view/video/SixColor_animate/index.html?10048?1682018.cn'}

          // this.src='https://kj.kai861.com/view/video/SixColor_animate/index.html?10048?1682018.cn'
          // switch (id) {
          //   case '1'://香港
          //   this.src='https://kj.kai861.com/view/video/SixColor_animate/index.html?10048?1682018.cn'
          //   break;
          //   case '18'://快速
          //   this.noDataStatus=true
          //   break;
          //   case '19'://五分
          //   this.noDataStatus=true
          //   break;
          // }
        } else if (id === 4 || id === 14 || id === 15 || id === 16 || id === 17) {//时时彩
          if (id === 4) {this.src = 'https://kj.kai861.com/view/video/SSC/index.html?10002?1682018.cn'}

          if (id === 14) {this.src = 'https://kj.kai861.com/view/video/SSC/index.html?10004?1682018.cn'}

          if (id === 15) {this.src = 'https://kj.kai861.com/view/video/SSC/index.html?10003?1682018.cn'}

          // switch (id) {
          //   case '4'://重庆
          //   this.src='https://kj.kai861.com/view/video/SSC/index.html?10002?1682018.cn'
          //   break;
          //   case '14'://新疆
          //   this.src='https://kj.kai861.com/view/video/SSC/index.html?10004?1682018.cn'
          //   break;
          //   case '15'://天津
          //    this.src='https://kj.kai861.com/view/video/SSC/index.html?10003?1682018.cn'
          //   break;
          //   case '16'://快速
          //   this.noDataStatus=true
          //   break;
          //   case '17'://3分
          //   this.noDataStatus=true
          //   break;
          // }
        } else if (id === 2 || id === 12 || id === 3 || id === 13) {//pk10
          if (id === 2) {this.src = 'https://kj.kai861.com/view/video/PK10/video.html?10001?1682018.cn'}
          // switch (id) {
          //   case '2'://北京
          //   this.src='https://kj.kai861.com/view/video/PK10/video.html?10001?1682018.cn'
          //   break;
          //   case '12'://快速赛车
          //   this.noDataStatus=true
          //   break;
          //   case '3'://飞艇
          //   this.noDataStatus=true
          //   break;
          //   case '13'://3分
          //   this.noDataStatus=true
          //   break;
          // }
        } else if (id === 10) {//pc蛋蛋
          if (id === 10) {this.src = 'https://kj.kai861.com/view/video/pcEgg_video/index.html?10046?1682018.cn'}
        } else if (id === 2900 || id === 2901 || id === 2902 || id === 2903 || id === 2904 || id === 2905 || id === 2906 || id === 9 || id === 25 || id === 26 || id === 27) {//k3
          if (id === 2902) {this.src = 'https://kj.kai861.com/view/video/kuai3_video/Kuai3.html?10026?1682018.cn'}

          if (id === 26) {this.src = 'https://kj.kai861.com/view/video/kuai3_video/Kuai3.html?10027?1682018.cn'}

          if (id === 25) {this.src = 'https://kj.kai861.com/view/video/kuai3_video/Kuai3.html?10030?1682018.cn'}

          if (id === 2905) {this.src = 'https://kj.kai861.com/view/video/kuai3_video/Kuai3.html?10032?1682018.cn'}

          if (id === 2900) {this.src = 'https://kj.kai861.com/view/video/kuai3_video/Kuai3.html?10033?1682018.cn'}

          // switch (id) {
          //   case '2902'://广西
          //   this.src='https://kj.kai861.com/view/video/kuai3_video/Kuai3.html?10026?1682018.cn'
          //   break;
          //   case '26'://吉林
          //   this.src='https://kj.kai861.com/view/video/kuai3_video/Kuai3.html?10027?1682018.cn'
          //   break;
          //   case '25'://安徽
          //   this.src='https://kj.kai861.com/view/video/kuai3_video/Kuai3.html?10030?1682018.cn'
          //   break;
          //   case '2905'://湖北
          //   this.src='https://kj.kai861.com/view/video/kuai3_video/Kuai3.html?10032?1682018.cn'
          //   break;
          //   case '2900'://北京
          //   this.src='https://kj.kai861.com/view/video/kuai3_video/Kuai3.html?10033?1682018.cn'
          //   break;
          //   default:
          //   this.noDataStatus=true
          // }
        } else if (id === 7 || id === 21 || id === 22 || id === 23 || id === 24) {//11选5
          if (id === 21) {this.src = 'https://kj.kai861.com/view/video/11x5_video/index.html?10015?1682018.cn'}

          if (id === 22) {this.src = 'https://kj.kai861.com/view/video/11x5_video/index.html?10018?1682018.cn'}

          // switch (id) {
          //   case '21'://江西
          //   this.src='https://kj.kai861.com/view/video/11x5_video/index.html?10015?1682018.cn'
          //   break;
          //   case '22'://上海
          //   this.src='https://kj.kai861.com/view/video/11x5_video/index.html?10018?1682018.cn'
          //   break;
          //   default:
          //   this.noDataStatus=true
          // }
        } else if (id === 5 || id === 20 || id === 6) {//快乐十分
          // this.noDataStatus=true
          // this.src='/static/html/lottery-animate/gdklsf.html'
        } else if (id === 11 || id === 28 || id === 29) {//低频彩
          if (id === 11) {this.src = 'https://kj.kai861.com/view/video/fc3DVideo/index.html?10041?1682018.cn'}

          if (id === 28) {this.src = 'https://kj.kai861.com/view/video/fc3DVideo/index.html?10043?1682018.cn'}

          // switch (id) {
          //   case '11'://福彩
          //   this.src='https://kj.kai861.com/view/video/fc3DVideo/index.html?10041?1682018.cn'
          //   break;
          //   case '28'://排列
          //   this.src='https://kj.kai861.com/view/video/fc3DVideo/index.html?10043?1682018.cn'
          //   break;
          //   default:
          //   this.noDataStatus=true
          // }
        }
      }
    },
    created () {
    },
    mounted () {
      // setTimeout(()=>{
      //   this.classify();
      // },500);
      this.$nextTick(() => {
        this.classify()
      })
    }
  }
</script>

<style lang="less" scoped>
  .live-video {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: rgba(0, 0, 0, 0.7);
    text-align: center;
    padding-top: 100px;
    overflow: hidden;
    z-index: 9999;

    .btn-box {
      width: 200px;
      height: 240px;
      position: absolute;
      top: 220px;
      right: 0;
      cursor: pointer;
    }

    .noDatas {
      text-align: center;
    }

    .closeBt {
      position: absolute;
      right: 0;
      color: #fff;
      font-size: 28px;
      top: 0;
      padding: 50px 60px;
      cursor: pointer;

      &:hover {
        color: #ff5050;
      }
    }
  }
</style>
