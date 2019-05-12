<template>
  <div class="homeLive-wrap">
    <div class="banner">
    </div>
    <vp-Home-Live></vp-Home-Live>
  </div>
</template>
<script>
  import vpHomeLive from '../../../public/home-live/index'

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
      vpHomeLive
    }
  }
</script>

<style lang="less" scoped>
  .homeLive-wrap {
    background: black;
    padding-bottom: 30px;

    .banner {
      height: 298px;
      background: url('/static/hqyl/img/home/banner/home-live.png') top center no-repeat;
      margin-bottom: 20px;
    }
  }
</style>
