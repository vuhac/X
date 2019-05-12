<template>
  <div class="tiyu_cont" :class="{night:colorbool}">
    <div class="tiyu">
      <div id="items">
        <div :class="item.bigclass" class="clear" v-for="(item,index) in tiyulist" :key="index">
          <img :src="item.img" alt :class="item.divclass" @click="goto(item)">
        </div>
        <div  class="clear">
          <img src="/static/szc/img/zhenren/more.png" alt class="more">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from "../games/public.js";

export default {
  mixins: [data],
  data() {
    return {
      tiyulist: [
        {
          name: "AG视讯",
          img: "/static/szc/img/zhenren/ag.png",
          id: "31"
        },
        {
          name: "BBIN视讯",
          img: "/static/szc/img/zhenren/bbin.png",
          id: "32"
        },
        {
          name: "BG视讯",
          img: "/static/szc/img/zhenren/bg.png",
          id: "3180"
        },
        {
          name: "DG视讯",
          img: "/static/szc/img/zhenren/dg.png",
          id: "42"
        },
        {
          name: "DS视讯",
          img: "/static/szc/img/zhenren/ds.png",
          id: "34"
        },
        {
          name: "LEBO视讯",
          img: "/static/szc/img/zhenren/lebo.png",
          id: "44"
        },
        {
          name: "OG视讯",
          img: "/static/szc/img/zhenren/og.png",
          id: "48"
        },
        {
          name: "eBET视讯",
          img: "/static/szc/img/zhenren/ebet.png",
          id: "43"
        },
        {
          name: "LMG视讯",
          img: "/static/szc/img/zhenren/lmg.png",
          id: "45"
        },
        {
          name: "欧博视讯",
          img: "/static/szc/img/zhenren/oubo.png",
          id: "46"
        },
        {
          name: "SA视讯",
          img: "/static/szc/img/zhenren/sa.png",
          id: "49"
        }
      ]
    };
  },
  methods: {
    goto(item) {
      this.getItemId(item);
    }
  },
  created() {},
  mounted() {
  },
  watch: {},
  components: {},
  computed: {
    colorbool() {
      return this.$store.state.mainState.color;
    }
  }
};
</script>

<style lang="less" scoped>
.tiyu_cont {
  width: 100%;
  background: url("/static/szc/img/home/bg_banner.23dee41.jpg") top center
    no-repeat;
  background-size: 100% 100%;
  position: relative;
  max-width: 1920px;
  min-width: 1360px;
  margin: 0 auto;
  padding: 0 0 50px 0;
  overflow: hidden;
  margin-top: -2px;
  .tiyu {
    width: 1360px;
    margin: auto;
    #items {
      cursor: -webkit-pointer;
      cursor: pointer;
      width: 1362px;
      height: auto;
      background: rgba(255, 255, 255, 1);
      overflow: hidden;
      position: relative;
      padding: 41px 28px 31px 27px;
      .clear {
        width: 641px;
        height: 285px !important;
        float: left;
        margin-bottom: 28px;
        transition: all 0.7s !important;
        &:hover {
          transform: translateY(-10px);
        }
      }
      .clear:nth-child(odd) {
        margin-right: 25px;
      }
      .clear:nth-child(3) {
        margin-bottom: 27px;
      }
      .clear:nth-child(4) {
        margin-bottom: 27px;
      }
      .ag-game-item {
        position: relative;
        height: 541px;
        margin-bottom: 10px;
        overflow: hidden;

        .ag-join-game-btn {
          position: absolute;
          bottom: 20px;
          right: 232px;
          height: 99px;
          width: 152px;
          background: url("/static/qygj/img/tiyu/ag-join-game.png") no-repeat
            center top;
          cursor: pointer;
        }
        .ag-sport {
          transition: all 0.3s;
        }
        &:hover .ag-sport {
          left: 50px;
        }
      }
      .sb-game-item {
        position: relative;
        height: 530px;
        overflow: hidden;

        .sb-join-game-btn {
          position: absolute;
          bottom: 20px;
          left: 288px;
          height: 99px;
          width: 152px;
          background: url("/static/qygj/img/tiyu/sb-join-game.png") no-repeat
            center top;
          cursor: pointer;
        }
        .sb-sport {
          transition: all 0.3s;
        }
        &:hover .sb-sport {
          right: 50px;
        }
      }

      &.ag-game-item a,
      &.sb-game-item a {
        display: block;
        width: 100%;
        height: 100%;
      }
      .ag-game-item1 {
        position: relative;
        height: 541px;
        margin-bottom: 10px;
        overflow: hidden;

        .ag-join-game-btn {
          position: absolute;
          bottom: 20px;
          right: 232px;
          height: 99px;
          width: 152px;
          background: url("/static/qygj/img/tiyu/bb-join-game.png") no-repeat
            center top;
          cursor: pointer;
        }
        .ag-sport {
          transition: all 0.3s;
        }
        &:hover .ag-sport {
          left: 50px;
        }
      }
      .sb-game-item1 {
        position: relative;
        height: 530px;
        overflow: hidden;

        .sb-join-game-btn {
          position: absolute;
          bottom: 20px;
          left: 288px;
          height: 99px;
          width: 152px;
          background: url("/static/qygj/img/tiyu/ag1-join-game.png") no-repeat
            center top;
          cursor: pointer;
        }
        .sb-sport {
          transition: all 0.3s;
        }
        &:hover .sb-sport {
          right: 50px;
        }
      }
      &.ag-game-item1 a,
      &.sb-game-item1 a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
.night {
  background: rgba(18, 21, 66, 0.8);
}
</style>
