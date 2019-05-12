<template>
  <div class="buyu-wrap">
    <vp-Bu-Yu></vp-Bu-Yu>
  </div>
</template>
<script>
  import vpBuYu from '../../../public/buyu/index'

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
      vpBuYu
    }
  }
</script>

<style lang="less" scoped>
  .buyu-wrap {
    // background: url('/static/wycp/img/game/buyu/pro_bg.jpg') top center no-repeat, #f3f2ef;
    padding-bottom: 20px;
    padding-top: 30px;
  }
</style>
