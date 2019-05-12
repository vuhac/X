<template>
  <div class="homeLive-wrap">
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
    margin-bottom: 20px;
    padding-top: 30px;
    background: url("/static/public/image/game/live/zr.jpg") no-repeat top center #f1f1f1;
  }
</style>
