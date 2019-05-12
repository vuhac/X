<template>
  <div class="buyu-wrap">
    <div class="banner">
    </div>
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
    background: black;
    padding-bottom: 30px;

    .banner {
      height: 298px;
      background: url('/static/hqyl/img/home/banner/buyu.png') top center no-repeat;
      margin-bottom: 20px;
    }
  }
</style>
