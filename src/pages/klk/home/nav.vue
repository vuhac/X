<template>
  <div class="top_nav">
    <div class="nav-content">
      <div class="logo fl">
        <a href="javascript:void(0)" @click="goHome">
          <img src="/static/klk/img/logo.png">
        </a>
      </div>

      <ul class="nav-bar fl">
        <li class="tpT" style="width: 60px">
          <a href="javascript:void(0)" @click="goHome">
            <i class="bg-home" style="left: 32px;"></i>
          </a>
        </li>
        <li
          class="tpT"
          v-for="(item,i) in classifyList"
          :key="i"
          :class="{isColor:item.hotShow ==true}"
        >
          <img src="/static/klk/img/thirdparty/hot.gif" class="x-dh-i" alt v-if="item.hotShow">
          <span class="x-dh-t" @click="goLink(item)">{{item.name}}</span>
          <span class="x-dh-b" @click="goLink(item)">{{item.text}}</span>

          <div class="girl dropdown">
            <ol>
              <li v-for="(v,i) in item.list" :key="i" @click="thirdParty(v,item.platform)">
                <a href="javascript:void(0)">
                  <img :src="v.img" width="37" height="21" alt v-if="v.img">
                  <span>{{v.name}}</span>
                </a>
              </li>
            </ol>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import data from "../../public/games/public.js";

export default {
  mixins: [data],
  data() {
    return {
      classifyList: [
        {
          name: "体育赛事",
          text: "SPORTS",
          platform: "sport",
          list: [
            {
              name: "皇冠体育",
              img: "/static/klk/img/thirdparty/hg.png",
              id: "39"
            },
            {
              name: "沙巴体育",
              img: "/static/klk/img/thirdparty/saba.png",
              id: "38"
            },
            {
              name: "BBIN体育",
              img: "/static/klk/img/thirdparty/bb.png",
              id: "41"
            },
            {
              name: "AG体育",
              img: "/static/klk/img/thirdparty/agty.png",
              id: "40"
            }
          ]
        },
        {
          name: "真人娱乐",
          text: "LIVE CASINO",
          link: "/home/live",
          platform: "live_casino",
          hotShow: true,
          list: [
            {
              name: "AG视讯",
              img: "/static/klk/img/thirdparty/agty.png",
              id: "31"
            },
            {
              name: "BBIN视讯",
              img: "/static/klk/img/thirdparty/bb.png",
              id: "32"
            },
            {
              name: "BG视讯",
              img: "/static/klk/img/thirdparty/bg.png",
              id: "3180"
            },
            {
              name: "DG视讯",
              img: "/static/klk/img/thirdparty/gpi.png",
              id: "42"
            },
            {
              name: "DS视讯",
              img: "/static/klk/img/thirdparty/DS.png",
              id: "34"
            },
            {
              name: "LEBO视讯",
              img: "/static/klk/img/thirdparty/lebo.png",
              id: "44"
            },
            {
              name: "OG视讯",
              img: "/static/klk/img/thirdparty/evo.png",
              id: "48"
            },
            {
              name: "eBET视讯",
              img: "/static/klk/img/thirdparty/ebet.png",
              id: "43"
            },
            {
              name: "LMG视讯",
              img: "/static/klk/img/thirdparty/LMG.png",
              id: "45"
            },
            {
              name: "欧博视讯",
              img: "/static/klk/img/thirdparty/ab.png",
              id: "46"
            },
            {
              name: "SA视讯",
              img: "/static/klk/img/thirdparty/sa.png",
              id: "49"
            }
          ]
        },
        {
          name: "棋牌游戏",
          text: "CHESS",
          platform: "KY_CHESS",
          hotShow: true,
          link: "/home/games?id=10042&name=开元棋牌",
          gameName: "0",
          list: [
            {
              name: "开元棋牌",
              platform: "KY_CHESS",
              link: "/home/games?id=10042&name=开元棋牌",
            },
            {
              name: "VG棋牌",
              platform: "KY_CHESS",
              link: "/home/games?id=10041&name=VG棋牌",
            }
          ]
        },
        {
          name: "MG老虎机",
          text: "MG CASINO",
          platform: "MG_GAME",
          link: "/home/games?id=10022&name=MG老虎机",
          hotShow: true,
          list: [
            {
              name: "冰上曲棍球",
              platform: "MG_GAME",
              gameName: "breakaway",
              id:"1824"
            },
            {
              name: "不朽的浪漫",
              platform: "MG_GAME",
              gameName: "ImmortalRomance",
              id:"1825"
            },
            {
              name: "银行抢匪2",
              platform: "MG_GAME",
              gameName: "BreakDaBank",
              id:"1841"
            },
            {
              name: "淑女派对",
              platform: "MG_GAME",
              gameName: "LadiesNite",
              id:"1836"
            },
            {
              name: "宝石之轮",
              platform: "MG_GAME",
              gameName: "ReelGems",
              id:"1828"
            }
          ]
        },
        {
          name: "老虎机大厅",
          text: "ELECT RONIC",
          platform: "MG_GAME",
          hotShow: true,
          link: "/home/games?id=10022&name=MG老虎机",
          list: [
            {
              name: "PT老虎机",
              img: "/static/klk/img/thirdparty/pt.png",
              num: "19"
            },
            {
              name: "AG老虎机",
              img: "/static/klk/img/thirdparty/agty.png",
              num: "17"
            },
            {
              name: "CQ9电子",
              img: "/static/klk/img/thirdparty/CQ9.png",
              num: "32"
            },
            {
              name: "MG老虎机",
              img: "/static/klk/img/thirdparty/mg.png",
              num: "26"
            },
            {
              name: "FG老虎机",
              img: "/static/klk/img/thirdparty/fg.png",
              num: "31"
            }
          ]
        },
        {
          name: "彩票游戏",
          text: "LOTTERY",
          platform: "vr_lottery",
          link: "/plays/hall"
        },
        {
          name: "捕鱼达人",
          text: "FISH",
          link: "/home/buyu"
        },
        {
          name: "优惠活动",
          text: "PROMOTION",
          link: "/home/youhui"
        },
        {
          name: "在线客服",
          text: "SERVICE",
          link: "service"
        }
      ]
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    goLink(item) {
      if (item.link) {
        if (item.link == "service") {
          let service = JSON.parse(localStorage.config).service;
          if (service) {
            let ser = service.find(item =>item.status === 'on')
            if (ser) {
              window.open(ser.url);
            }
          }
        } else if (item.link == "/plays/hall") {
             window.open("#/plays/hall");
             return false; 
        }else if(item.link=="/home/youhui"){
          this.$router.push(item.link);

        } else {
          this.$router.push(item.link);
        }
      } else if (item.gameName) {
        this.trustLogin(item);
      }
    },
    thirdParty(item, platform) {
      if (item.link == "/plays/hall") {
        window.open("#/plays/hall");
        return false;
      }
      if (item.id) {
        this.getItemId(item);
      } else if (item.gameName) {
        this.trustLogin(item);
      } else if (item.num) {
        this.$router.push("/home/games?id=" + item.num);

      } else {
        this.$router.push(item.link);

      }
    }
  },
  mounted() {
    setInterval(() => {
      $(".isColor:odd .x-dh-t").css("color", "rgb(0,255,0)");
      $(".isColor:odd .x-dh-b").css("color", "rgb(0,255,0)");

      $(".isColor:even .x-dh-t").css("color", "rgb(255,0,0)");
      $(".isColor:even .x-dh-b").css("color", "rgb(255,0,0)");
    }, 150);
    setInterval(() => {
      $(".isColor:odd .x-dh-t").css("color", "rgb(255,0,0)");
      $(".isColor:odd .x-dh-b").css("color", "rgb(255,0,0)");

      $(".isColor:even .x-dh-t").css("color", "rgb(135,8,156)");
      $(".isColor:even .x-dh-b").css("color", "rgb(135,8,156)");
    }, 300);
  }
};
</script>

<style lang="less">
.top_nav {
  height: 90px;

  .nav-content {
    width: 1200px;
    height: 90px;
    margin: 0 auto;

    .logo {
      width: 221px;
      padding-top: 19px;
    }

    .nav-bar {
      height: 90px;

      li {
        height: 90px;
        float: left;
        margin: 0 10px;
        position: relative;
        font-size: 12px;
        color: #000;
        line-height: 90px;
        cursor: pointer;
        text-align: center;

        &.tpT {
          padding-top: 35px;
          line-height: 20px;

          &:nth-child(2) {
            padding-left: 20px;
          }

          &:nth-child(1) {
            padding-top: 18px;
          }
        }

        a {
          width: 100%;
          height: 100%;
          display: inline-block;

          .bg-home {
            width: 25px;
            height: 23px;
            display: block;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            background: url("/static/public/image/userImg/header_nav_sprites.png") -10px -10px;
          }

          .bg-home:hover {
            background: url("/static/public/image/userImg/header_nav_sprites.png") -55px -10px;
          }
        }

        .x-dh-i {
          position: absolute;
          top: 12px;
          right: 0px;
        }

        .x-dh-t {
          display: block;
          font-size: 14px;
        }

        .x-dh-b {
          font-size: 14px;
          white-space: nowrap;
        }

        .dropdown {
          left: -20px;
          display: none;
          position: absolute;
          top: 90px;
          z-index: 999;
          background: rgba(0, 0, 0, 0.8);
          line-height: normal;
          color: #fff;
          font-size: 13px;
          border: 2px solid rgb(180, 140, 104);

          li {
            line-height: 40px;
            color: #fff;
            width: 120px;
            height: 40px;
            border-bottom: 1px dashed #ccc;
            margin: 0;

            a {
              width: 100%;
              height: 100%;
              display: inline-block;
              text-align: center;

              color: #fff;

              img {
                border: 0;
                vertical-align: middle;
              }
            }
          }

          li:hover {
            background: rgb(180, 140, 104);
          }
        }
      }

      li:hover {
        .x-dh-t {
          color: #ff5555;
        }

        .x-dh-b {
          color: #ff5555;
        }

        .dropdown {
          display: block;
        }
      }
    }
  }
}
</style>
