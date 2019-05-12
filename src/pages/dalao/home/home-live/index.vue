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
    created: function () {},
    mounted () {},
    watch: {},
    components: {
      vpHomeLive
    }
  }
</script>

<style lang="less" scoped>
  .homeLive-wrap {
    background: #000 url(/static/dalao/img/bg_promotions.jpg) center top no-repeat;
    padding: 20px 0;
  }
</style>
