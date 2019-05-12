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
    background: rgb(255, 255, 255);
  }
</style>
