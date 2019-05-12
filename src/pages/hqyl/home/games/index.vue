<template>
  <div class="game-wrap">
    <div class="banner">
    </div>
    <vp-Games></vp-Games>
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
    background: black;
    padding-bottom: 30px;

    .banner {
      height: 298px;
      background: url('/static/hqyl/img/home/banner/games.png') top center no-repeat;
      margin-bottom: 20px;
    }
  }
</style>
