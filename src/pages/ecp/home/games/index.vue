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
    background: #000 url(/static/ecp/img/bg_promotions.jpg) center top no-repeat;
    padding: 20px 0;
  }
</style>
