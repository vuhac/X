<template>
  <div class="homeLive-wrap">
     <Banner :headerImg="headerImg"></Banner>
    <vp-Home-Live></vp-Home-Live>
  </div>
</template>
<script>
  import vpHomeLive from '../../../public/home-live/szc_index.vue'
  import Banner from '../banner.vue'
  export default {
    data () {
      return {
        headerImg:'/static/szc/img/game/casino_banner.688d1aa.png'
      }
    },
    methods: {},
    created: function () {
    },
    mounted () {
    },
    watch: {},
    components: {
      vpHomeLive,
      Banner
    }
  }
</script>

<style lang="less" scoped>
  .homeLive-wrap {
    margin-bottom: 20px;
    background: url("/static/szc/img/home/bg_banner.23dee41.jpg") no-repeat top center #f1f1f1;
  }
</style>
