<template>
    <div>
      <div class="header_bg"></div>
      <div class="fishing_main">
        <div
          :class="clientwidth>=2100 ? 'wrapper1' : clientwidth<=1600?'wrapper3':'wrapper2'"
          class="wrapper"
        >
          <ul>
            <li v-for="(item,i) in buyuData" :key="i">
              <div class="cover_hover"></div>
              <div class="cover" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
              <!-- <div class="title">
                <h2>{{item.name}}</h2>
                <h3>{{item.content}}</h3>
              </div>-->
              <p>
                <a
                  class="btn"
                  @click="trustLogin({platform:item.platform,gameName:item.gameName,name:item.name,id:item.id})"
                >开始游戏</a>
              </p>
              <p>
                <a
                  class="btn_ag"
                  @click="trustLogin({platform:item.platform,gameName:item.gameName,name:item.name,id:item.id})"
                  href="javascript:void(0)"
                >游戏说明</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import store from "@/vuex/store";
import { _SetGet, _SetPost } from "@/service/public/service.js";
import mixin from "../../../public/games/public.js";

export default {
  mixins: [mixin],
  data() {
    return {
      buyuData: [
        {
          name: "VG棋牌",
          img: "/static/pjyl/img/pjyl/chess3.png",
          content: "经典玩法 玩法丰富",
          platform: "VG_CHESS",
          gameName: "1000",
          id:243
        },
        {
          name: "开元棋牌",
          img: "/static/pjyl/img/pjyl/chess2.png",
          content: "经典玩法 玩法丰富",
          platform: "KY_CHESS",
          gameName: "0",
          id:10091
        }
        // {name:'欢乐捕鱼',img:require('/static/hsyl/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'FG_GAME',gameName:'fish_hl'}
        // {name:'龙王捕鱼2',img:require('/static/hsyl/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'JDB_GAME',gameName:'7002'},
        // {name:'千炮捕鱼',img:require('/static/hsyl/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'MW_GAME',gameName:'1051'},
        // {name:'皇金渔场',img:require('/static/hsyl/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'CQ9_GAME',gameName:'AB3'},
        // {name:'深海大赢家',img:require('/static/hsyl/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'PT_GAME',gameName:'cashfi'},
        // {name:'财神捕鱼',img:require('/static/hsyl/img/bg_fish_01.png'),content:'经典玩法 玩法丰富',platform:'JDB_GAME',gameName:'7003'}
      ],
      clientwidth:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    };
  },
  methods: {
    resizeDiv() {
      var div = document.getElementsByClassName("fishing_main")[0];
      var style = div.currentStyle || window.getComputedStyle(div, null);
      var img_src = style.backgroundImage
        .replace(/^url\(["']?/, "")
        .replace(/["']?\)$/, "");
      var img = new Image();
      img.onload = function() {
        var ratio = img.width / img.height;
        let clientwidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        // if (clientwidth > img.width) {
        //   div.style.height = parseInt(div.offsetWidth / ratio) + "px";
        // }
        img = null;
      };
      img.src = img_src;
    }
  },
  mounted() {
    this.resizeDiv();
    const that = this;
    window.onresize = () => {
      return (() => {
        window.clientwidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        that.clientwidth = window.clientwidth;
      })();
    };
  },
  watch: {
    clientwidth(val) {
      console.log(val);
      this.clientwidth = val;
    }
  }
};
</script>

<style lang="less" scoped>
.header_bg{
  position: relative;
  margin-top:-122px;
  height:120px;
  z-index: -99;
  // background:#142044 url(/static/pjyl/img/banner_dianzi.jpg) no-repeat top;
}
.fishing_main {
  height: 900px;
  position: relative !important;
  background:#c89752 url("/static/pjyl/img/pjyl/chess_bg.jpg") center center no-repeat;
  @media screen and (max-width: 1442px) {
    .wrapper2 {
      position: absolute;
      top: 300px;
      right: 18%;
    }
  }
  .wrapper {
    width: 1200px;
    height: 100%;
    // margin: 0 auto;

    ul {
      li {
        width: 314px;
        // padding: 10px;
        // margin: 0 220px;
        // background: #000;
        height: auto;
        float: right;
        position: relative;
        text-align: center;
        .cover_hover {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 390px;
          z-index: 20;
          cursor: pointer;
        }
        .cover {
          width: 100%;
          height: 390px;
          // background: url("/static/hsyl/img/bg_fish_01.png") center
          //   center no-repeat;
          background-position: center center;
          background-repeat: no-repeat;
          transition: all 0.3s ease-in;

          z-index: 10;
        }

        .cover_hover:hover + .cover {
          transform: rotateY(180deg);
        }

        .cover_hover:hover ~ .title {
          animation: titleSlide 0.3s linear;
        }

        .title {
          position: absolute;
          left: 40px;
          top: 30px;
          color: #fff;
          text-align: left;

          h2 {
            font-size: 24px;
            line-height: 2;
          }

          h3 {
            font-size: 14px;
            line-height: 1.5;
            font-weight: normal;
          }
        }

        p {
          margin-top: 20px;

          a {
            display: inline-block;
            // width: 280px;
            width: 280px;
            height: 54px;
            line-height: 54px;
            text-align: center;
            color: #fff;
            font-size: 22px;
            box-sizing: border-box;
            border: 2px solid #fd7328;
            background: #fd7328;
            border-radius: 6px;
          }

          .btn_ag {
            color: #fd7328;
            border-color: #fd7328;
            background: transparent;
          }

          .btn_ag:hover {
            color: #fff;
            border-color: #fd7328;
            background: #fd7328;
          }
        }
      }
      li:nth-child(1) {
        margin-left: 20px;
      }
    }
  }
  .wrapper1 {
    position: absolute;
    top: 300px;
    right: 26%;
  }
  .wrapper2 {
    position: absolute;
    top: 300px;
    right: 17%;
  }
  .wrapper3 {
    position: absolute;
    top: 300px;
    right: 5%;
  }
}

@keyframes titleSlide {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(20px);
    opacity: 0;
  }
  51% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
