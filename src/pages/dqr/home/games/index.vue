<template>
  <div class="game-wrap">
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
    padding-top: 20px;
    padding-bottom: 20px;
    background: rgb(7, 12, 31) url(/static/dqr/img/bg1.jpg) no-repeat !important;
    background-size: 100% 100%;
    background-position: center top;
    background-repeat: no-repeat;
  }
</style>
