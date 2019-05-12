<template>
  <div class="buyu-wrap">
    <div class="banner"></div>
    <loginBox></loginBox>
    <News></News>
    <div>
      <vp-Bu-Yu></vp-Bu-Yu>
    </div>
  </div>
</template>
<script>
  import vpBuYu from '../../../public/buyu/index'
  import News from '../news'
  import loginBox from '../loginBox'

  export default {
    data () {
      return {}
    },
    methods: {},
    created: function () {},
    mounted () {},
    watch: {},
    components: {
      vpBuYu, News, loginBox
    }
  }
</script>

<style lang="less" scoped>
  .buyu-wrap {
    padding-bottom: 20px;
    background: #dddddd;

    .banner {
      height: 291px;
      background: url(/static/eyc/img/banner/slots-banner1.jpg) center no-repeat;
    }
  }
</style>
