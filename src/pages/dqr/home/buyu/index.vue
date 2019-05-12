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
    padding-top: 20px;
    padding-bottom: 20px;
    background: rgb(7, 12, 31) url(/static/dqr/img/bg1.jpg) no-repeat !important;
    background-size: 100% 100%;
    background-position: center top;
    background-repeat: no-repeat;
  }
</style>
