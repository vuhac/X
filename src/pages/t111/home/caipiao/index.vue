<template>
  <div class="content content-main-bg"  :class="{night:colorbool}">
    <vp-header-pic :headerImg="headerImg"></vp-header-pic>
    <div class="wp">
      <div id="items">
        <!--vr-->
        <div class="vr-lottery-cont vr-lottery-cont1">
          <div class="left-cont">
            <h3 class="title">传统彩票</h3>
            <p class="text">超高赔率</p>
            <p class="text">极致体验玩出精彩</p>
            <!-- <p class="text1">让您随时随地极速游玩</p> -->
            <div class="join-game-btn js-join-game-btn" data-type="vr">
              <a href="#/plays/hall" target="_blank"></a>
            </div>
          </div>
          <img src="/static/t111/img/caipiao/vr.png" alt class="vr-img">
        </div>

        <!-- <div class="vr-lottery-cont vr-lottery-cont2" style="margin-top:20px">
          <div class="left-cont">
            <h3 class="title">VR彩票</h3>
            <p class="text">高清画质专业VR</p>
            <p class="text">彩票互动平台</p>
            <p class="text1">让您随时随地极速游玩</p>
            <div class="join-game-btn js-join-game-btn" data-type="vr">
              <a href="javascript:;" target="_blank" @click="goto"></a>
            </div>
          </div>
          <img src="/static/t111/img/caipiao/vr.png" alt class="vr-img">
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
 import data from "../../../public/games/public.js";
  import vpHeaderPic from "../headerPic";

export default {
  mixins: [data],
  data() {
    return {
      headerImg:"/static/t111/img/carouel/cp.jpg"
    };
  },
  methods: {
     goto(){
        this.getItemId({id:'30',platform:'vr_lottery',name:'VR彩票',})
     }
  },
  created() {},
  mounted() {},
  watch: {},
  computed:{
     colorbool(){
        return this.$store.state.mainState.color
      },
  },
  components: {
      vpHeaderPic
  },
};
</script>

<style lang="less" scoped>
.content {
  position: relative;
  max-width: 1920px;
  min-width: 1200px;
  margin: 0 auto;
  // padding: 50px 0 50px;
  padding-bottom: 50px;
  background: #eaeaea url('/static/t111/img/caipiao/main-bg.png') repeat-y center top;
}
.wp {
    width: 1200px;
    margin: 0 auto;
    // margin-top:20px;
    margin-top:50px;
}
.content #items {
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
}
#items .vr-lottery-cont {
  overflow: hidden;
  position: relative;
  right:0;
  width: 1200px;
  height: 450px;
  margin:0 auto;
  background: url('/static/t111/img/caipiao/vr-bg.png') no-repeat center bottom;
  // background-position: -20px;
  background-size: 100% 100%;
  
}
.vr-lottery-cont:nth-child(2){
  margin-top:20px; 
}
#items .vr-lottery-cont .left-cont {
  width: 400px;
  position: absolute;
  right:0;
  padding: 165px 0 0 60px;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
#items .vr-lottery-cont .left-cont .title {
  margin-bottom: 20px;
  font-size: 40px;
  color: #ef6085;
}
#items .vr-lottery-cont .left-cont .text {
  font-size: 22px;
  color: #333;
  line-height: 1.5;
}
#items .vr-lottery-cont .left-cont .text1 {
  font-size: 20px;
  color: #999;
  line-height: 1.5;
}
.vr-img {
  position: absolute;
  left: -20px;
  bottom: 0;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.join-game-btn {
  width: 120px;
  height: 38px;
  margin-top: 30px;
  background: url('/static/t111/img/caipiao/join-game.png') no-repeat center top;
}
.join-game-btn a {
  display: block;
  width: 100%;
  height: 100%;
}
#items .vr-lottery-cont:hover  .left-cont {
  right:10px;
}
#items .vr-lottery-cont:hover .vr-img{
  left: -10px;
}
#items .vr-lottery-cont:hover .vr-lottery-cont {
  background-position: 0px;
}


.top_nav .navbar .navbar-list {
  color: #333;
}
.night{
      background: rgba(18,21,66,.8)
  }
</style>
