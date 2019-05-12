<template>
  <div class="tiyu_cont" :class="{night:colorbool}">
    <Banner :headerImg="headerImg"></Banner>
    <div class="tiyu">
      <div id="items">
        <div :class="item.bigclass" class="clear" v-for="(item,index) in tiyulist" :key="index">
          <img :src="item.img" alt :class="item.divclass"  @click="getItemId(item)">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from "../../../public/games/public.js";
import Banner from '../banner.vue'

export default {
  mixins: [data],
  data() {
    return {
      headerImg:'/static/szc/img/game/Sports_banner.f19eb64.png',
      tiyulist: [
        {
          name: "皇冠体育",
          id: "39",
          platform: "sport",
          img: "/static/szc/img/game/hg.png",
          divclass: "ag-sport",
          bigclass: "ag-game-item",
          btnclass: "ag-join-game-btn",
          type: "fanya"
        },
        {
          name: "沙巴体育",
          id: "38",
          platform: "sport",
          img: "/static/szc/img/game/sb.png",
          divclass: "sb-sport",
          bigclass: "sb-game-item",
          btnclass: "sb-join-game-btn",
          type: "sb"
        },
        {
          name: "BBIN体育",
          id: "41",
          platform: "sport",
          img: "/static/szc/img/game/bbin.png",
          divclass: "ag-sport",
          bigclass: "ag-game-item1",
          btnclass: "ag-join-game-btn",
          type: "fanya"
        },
        {
          name: "AG体育",
          id: "40",
          platform: "sport",
          img: "/static/szc/img/game/ag.png",
          divclass: "sb-sport",
          bigclass: "sb-game-item1",
          btnclass: "sb-join-game-btn",
          type: "sb"
        }
      ]
    };
  },
  methods: {
    
  },
  created() {},
  mounted() {
  },
  watch: {},
  components: {
    Banner
  },
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
  background:url('/static/szc/img/home/bg_banner.23dee41.jpg') top center no-repeat;
  background-size: 100% 100%;
  position: relative;
  max-width: 1920px;
  min-width: 1360px;
  margin: 0 auto;
  padding: 0 0 50px 0;
  .tiyu {
    width: 1360px;
    margin: auto;
    #items {
      width: 1362px;
      height: 656px;
      background: rgba(255, 255, 255, 1);
      overflow: hidden;
      position: relative;
      padding:41px 28px 31px 27px;
      .clear {
          width:641px;
          height:285px!important;
          float:left;
          transition: all .7s!important;
          &:hover{
            transform: translateY(-10px);
          }
      }
      .clear:nth-child(odd){
          margin-right: 25px;
      }
      .clear:nth-child(3){
          margin-bottom:27px;
      }
      .clear:nth-child(4){
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
          cursor:-webkit-pointer;
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
          cursor:-webkit-pointer;
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
          cursor:-webkit-pointer;
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
