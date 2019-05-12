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
    background: rgb(255, 255, 255);
  }
</style>
