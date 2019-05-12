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
    created: function () {},
    mounted () {},
    watch: {},
    components: {
      vpBuYu
    }
  }
</script>

<style lang="less" scoped>
  .buyu-wrap {
    background: #000 url(/static/ecp/img/bg_promotions.jpg) center top no-repeat;
    padding: 20px 0;
  }
</style>
