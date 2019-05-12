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
    padding-top: 20px;
    padding-bottom: 20px;
    background: rgb(7, 12, 31) url(/static/dqr/img/bg1.jpg) no-repeat !important;
    background-size: 100% 100%;
    background-position: center top;
    background-repeat: no-repeat;
  }
</style>
