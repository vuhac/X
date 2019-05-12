<template>
  <div class="game-wrap">
    <div class="banner"></div>
    <loginBox></loginBox>
    <News></News>
    <vp-Games></vp-Games>
  </div>
</template>
<script>
  import vpGames from '../../../public/games/index'
  import News from '../news'
  import loginBox from '../loginBox'

  export default {
    data () {
      return {}
    },
    methods: {},
    created: function () {},
    mounted () {},
    watch: {},
    components: {
      vpGames, News, loginBox
    }
  }
</script>

<style lang="less" scoped>
  .game-wrap {
    padding-bottom: 20px;
    max-width: 1920px;
    min-width: 1200px;
    background-color: #ddd;
    margin: 0 auto;

    .banner {
      height: 291px;
      background: url(/static/eyc/img/banner/slots-banner.jpg) center no-repeat;
    }
  }
</style>
