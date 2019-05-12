<template>
  <div class="buyu-wrap">
    <Banner :headerImg="headerImg"></Banner>
    <vp-Bu-Yu></vp-Bu-Yu>
  </div>
</template>
<script>
import vpBuYu from "../../../public/buyu/index";
import Banner from "../banner.vue";
export default {
  data() {
    return {
      headerImg: "/static/szc/img/game/Fishing.png"
    };
  },
  methods: {},
  created: function() {},
  mounted() {},
  watch: {},
  components: {
    vpBuYu,
    Banner
  }
};
</script>

<style lang="less" scoped>
.buyu-wrap {
  background: url("/static/szc/img/home/bg_banner.23dee41.jpg") top center
      repeat-y,
    #f3f2ef;
  padding-bottom: 20px;
}
</style>
