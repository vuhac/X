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
    padding: 20px 0;
    background: #b62929;
  }
</style>
