<template>
  <div class="game-wrap">
    <vp-Games></vp-Games>
    <div class='gamesBgc'></div>
  </div>
</template>
<script>
  import vpGames from '../../../public/games/index'

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
      vpGames
    }
  }
</script>

<style lang="less" scoped>
  .game-wrap {
    padding-bottom: 20px;
    padding-top: 30px;
    background: url("/static/public/image/game/ptgame/slotGame_bg.jpg") top center no-repeat;
    background-size: 100% 100%;
    max-width: 1920px;
    min-width: 1200px;
    margin: 0 auto;
    position:relative;
    margin-bottom:80px;
    .gamesBgc{
      width:100%;
      height:30px;
      position:absolute;
      left: 0;
      bottom:0;
      background-color: #fff;
    }
  }
  
</style>
