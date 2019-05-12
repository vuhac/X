<template>
  <div class="homeLive-wrap">
    <div class="banner"></div>
    <loginBox></loginBox>
    <News></News>
    <vp-Home-Live></vp-Home-Live>
  </div>
</template>
<script>
  import vpHomeLive from '../../../public/home-live/index'
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
      vpHomeLive, News, loginBox
    }
  }
</script>

<style lang="less" scoped>
  .homeLive-wrap {
    padding: 20px 0;
    background: #ddd;

    .banner {
      height: 291px;
      background: url(/static/eyc/img/banner/live-banner.jpg) center no-repeat;
    }
  }
</style>
