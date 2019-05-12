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
    padding: 20px 0;
    background: #b62929;
    max-width: 1920px;
    min-width: 1200px;
    margin: 0 auto;
  }
</style>
