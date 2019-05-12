<template>
  <div class="game-wrap">
    <div class="liveBanner">
       <img src="/static/zyyl/img/3.jpg"/>
       <!-- <vp-new-notice /> -->
    </div>
    <vp-Games></vp-Games>
  </div>
</template>
<script>
  import vpGames from '../../../public/games/newIndex'
  import vpNewNotice from '../newNotice.vue'

  export default {
    data () {
      return {}
    },
    methods: {},
    created: function () {
    },
    mounted () {
    },
    watch: {},
    components: {
      vpGames,
      vpNewNotice
    }
  }
</script>

<style lang="less" scoped>
  .game-wrap {
    padding-bottom: 20px;
    // padding-top: 30px;
    // background: url("/static/public/image/game/ptgame/slotGame_bg.jpg") top center no-repeat,
    // #f3f2ef;
    background-size: 100% 100%;
    // max-width: 1920px;
    // min-width: 1200px;
    margin: 0 auto;

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
  }
</style>
