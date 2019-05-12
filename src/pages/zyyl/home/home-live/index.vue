<template>
  <div class="homeLive-wrap">
    <!-- <vp-Home-Live></vp-Home-Live> -->
    <div class="liveBanner">
       <img src="/static/zyyl/img/livebg.jpg"/>
       <vp-new-notice />
    </div>

    <div class="liveGameBox clear">
      <div class="big_game mid" v-for="(item,i) in liveGame" :key="i">
          <img class="lazy" alt="" :src="item.img" style="display: inline;">
				  <div class="b_hover">
					 	<a class="btn violetbtn" @click="getItemId(item)">立即游戏</a>
						<a href="javascript:void(0);" class="btn whitebtn">
              <!-- <router-link tag="a" to="/home/register">免费开户</router-link> -->
              <a href="javascript:void(0)" @click="goRegister">免费开户</a>
            </a> 
				  </div>
		  </div>
    </div>


  </div>
</template>
<script>
  // import vpHomeLive from '../../../public/home-live/index'
  import mixin from '../../../public/games/public.js'
  import vpNewNotice from '../newNotice.vue'
  export default {
    mixins: [mixin],
    data () {
      return {
        liveGame: [
          {name: 'AG视讯厅', platform: 'live_casino', id: '31', img:'/static/zyyl/img/AG.jpg'},
          {name: 'BBIN视讯厅', platform: 'live_casino', id: '32', img:'/static/zyyl/img/BBIN.jpg'},
          {name: 'BG视讯厅', platform: 'live_casino', id: '3180', img:'/static/zyyl/img/BG.jpg'},
          {name: 'DG视讯厅', platform: 'live_casino', id: '42', img:'/static/zyyl/img/DG.jpg'},
          {name: 'DS视讯厅', platform: 'live_casino', id: '34', img:'/static/zyyl/img/DS.jpg'},
          {name: 'LEBO视讯厅', platform: 'live_casino', id: '44', img:'/static/zyyl/img/LEBO.jpg'},
          {name: 'OG视讯厅', platform: 'live_casino', id: '48', img:'/static/zyyl/img/OG.jpg'},
          {name: 'eBET视讯厅', platform: 'live_casino', id: '43', img:'/static/zyyl/img/EBET.jpg'},
          {name: 'LMG视讯厅', platform: 'live_casino', id: '45', img:'/static/zyyl/img/LMG.jpg'},
          {name: '欧博视讯厅', platform: 'live_casino', id: '46', img:'/static/zyyl/img/OB.jpg'},
          {name: 'SA视讯厅', platform: 'live_casino', id: '49', img:'/static/zyyl/img/SA.jpg'}
        ]
      }
    },
    methods: {
      goRegister(){
        this.$store.commit('yibo/showBox',{showBox:true,isLogin:false})

      },
    },
    created: function () {
    },
    mounted () {
    },
    watch: {},
    components: {
      // vpHomeLive
      vpNewNotice
    }
  }
</script>

<style lang="less" scoped>
  .homeLive-wrap {
    // margin-bottom: 20px;
    // padding-top: 30px;
    // background: url("/static/public/image/game/live/zr.jpg") no-repeat top center #f1f1f1;
  }
  .liveBanner{
    background:#000;
    position:relative;
    height:300px;
    img{
      position:absolute;
      height:300px;
      left:50%;
      transform:translateX(-50%)
    }
  }
  .liveGameBox{
    width:1200px;
    margin:20px auto;
    .big_game:nth-child(odd){
      margin-right:20px;
    }
  }
  .clear:after{
    clear:both;
    content:'';
    display:block;
  }
  .big_game{
    width: 590px;
    height: 320px;
    float: left;
    position: relative;
    margin-bottom:10px
  }
//   .big_game.mid {
//     margin: 0 13px;
// }
.b_hover {
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,.6);
    position: absolute;
    top: 0;
    display: none;
}
.big_game:hover .b_hover {
    display: block;
}
.big_game .b_hover .violetbtn {
    bottom: 175px;
    color: #fff;
    background-color: rgba(117, 68, 217, 0.85);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#D97544D9', endColorstr='#D97544D9', GradientType=0);
    border-radius: 30px;
}
.big_game .b_hover .btn {
    width: 171px;
    height: 44px;
    line-height: 44px;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    text-indent: 0;
    font-size: 18px;
}
.b_hover .violetbtn {
    bottom: 75px;
    color: #fff;
    background-color: rgba(117, 68, 217, 0.85);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#D97544D9', endColorstr='#D97544D9', GradientType=0);
    border-radius: 15px;
    /* background: url(__images/live-casino_082017/violetbtn.png) no-repeat center; */
    /* opacity: 0.6; */
}
.b_hover .btn {
    width: 110px;
    height: 30px;
    line-height: 30px;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
}
.big_game .b_hover .whitebtn {
    bottom: 100px;
    background-color: rgba(77 , 71, 194,0.7);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#D97544D9', endColorstr='#D97544D9', GradientType=0);
    border-radius: 30px;
    a{
      color:#fff;
    }
}

.big_game .b_hover .whitebtn:hover {
    background-color: rgb(117, 68, 217);
    background-image: -webkit-linear-gradient(top, #5666da 0%, #6b31e1 100%);
    background-image: -o-linear-gradient(top, #5666da 0%, #6b31e1 100%);
    background-image: -webkit-gradient(linear, left top, left bottom, from(#5666da), to(#6b31e1));
    background-image: linear-gradient(to bottom, #5666da 0%, #6b31e1 100%);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF5666DA', endColorstr='#FF6B31E1', GradientType=0);
}
.big_game .b_hover .violetbtn:hover{
    background-color: rgba(77 , 71, 194);
    background-image: -webkit-linear-gradient(top, #5666da 0%, #6b31e1 100%);
    background-image: -o-linear-gradient(top, #5666da 0%, #6b31e1 100%);
    background-image: -webkit-gradient(linear, left top, left bottom, from(#5666da), to(#6b31e1));
    background-image: linear-gradient(to bottom, #5666da 0%, #6b31e1 100%);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF5666DA', endColorstr='#FF6B31E1', GradientType=0);
}
</style>
