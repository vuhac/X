<template>
  <div class="game-wrap">
    <Banner :headerImg="headerImg"></Banner>
    <vp-Games></vp-Games>
  </div>
</template>
<script>
import vpGames from "../../../public/games/index";
import Banner from "../banner.vue";
export default {
  data() {
    return {
      headerImg: ""
    };
  },
  methods: {
    getRoute() {
      let path = this.$route.query.name;
      if (path && path.includes("棋牌")) {
        this.headerImg = "/static/szc/img/game/arrow_sprites.png";
      } else {
        this.headerImg = "/static/szc/img/game/slot.3daa21a.png";
      }
    }
  },
  created: function() {},
  mounted() {
    this.getRoute()
  },
  watch: {
    "$route.query.name": function() {
        this.getRoute()
    }
  },
  components: {
    vpGames,
    Banner
  }
};
</script>

<style lang="less" scoped>
.game-wrap {
  padding-bottom: 20px;
  background: url("/static/szc/img/home/bg_banner.23dee41.jpg") repeat-y,
    #f3f2ef;
  max-width: 1920px;
  min-width: 1200px;
  margin: 0 auto;
}
</style>
