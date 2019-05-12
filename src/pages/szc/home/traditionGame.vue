<template>
  <div class="sy-middle">
    <div class="sy-pc28-cp">
      <div class="pc-28">
        <div class="title_cms">彩票游戏</div>
        <ul class="pc-room clearfix">
          <li
            :key="indexInner"
            v-for="(item,indexInner) in lotterList">
            <img class="pc-room-bg" :src="item.src" alt/>
            <div class="game-name-ol">
              <span class="lotteryname">{{item.name}}</span>
              <span id="timeleave">{{item.text}}</span>
            </div>
            <div class="mencen-room">
              <div class="all-room">
                <div class="common-room">
                  <a target="_blank" @click="startGame(item.path)">进入游戏</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 右侧 彩票  #plays/tradition/item.lotteryId   -->
      <div class="sy-cp">
        <div>
          <div class="title_cms jdc">棋牌游戏</div>
          <ul class="game-type-ol clearfix jdc0">
            <li class="list-ol" v-for="(item,i) in gamelist" :key="i" @click="loginGame(item)">
              <div class="cpimg">
                <img :src="item.ico" alt>
              </div>
              <div class="cpname">{{item.name}}</div>
            </li>
          </ul>
        </div>
        <div>
          <div class="title_cms official-lottery">电子游戏</div>
          <ul class="game-type-ol clearfix official-lottery1">
            <li
              class="list-ol-li"
              v-for="(item,i) in guanfanglist"
              :key="i"
              @click="fetchgames(item)"
            >
              <!-- <div>{{item.icon}}</div> -->
              <div>
                <img :src="item.ico" alt>
              </div>
              <div>{{item.name}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { _SetGet, _SetPost } from "@/service/public/service.js";
import data from '../../public/games/public.js'
import vpHomeTimer from "@/pages/public/tradition/vp-hall/hall-time/timer";
export default {
  data() {
    return {
      imgburl: "/static/szc/img/home/lotter",
      gamelist: [
        {
          name: "炸金花",
          ico: "/static/szc/img/home/zjh.png",
          rulePath: "/rules/pk10",
          special_setting: { platform: "KY_CHESS", gameName: "220" },
          id: 254
        },
        {
          name: "21点",
          ico: "/static/szc/img/home/21d.png",
          rulePath: "/rules/klsf",
          special_setting: { platform: "KY_CHESS", gameName: "600" },
          id: 251
        },
        {
          name: "斗地主",
          ico: "/static/szc/img/home/ddz.png",
          special_setting: { platform: "KY_CHESS", gameName: "610" },
          rulePath: "/rules/ssc",
          id: 244
        },

        {
          name: "德州扑克",
          ico: "/static/szc/img/home/dzpk.png",
          special_setting: { platform: "KY_CHESS", gameName: "620" },
          rulePath: "/rules/pk10",
          id: 247
        },
        {
          name: "十三水",
          ico: "/static/szc/img/home/sss.png",
          special_setting: { platform: "KY_CHESS", gameName: "630" },
          rulePath: "/rules/lhc",
          id: 256
        },
        {
          name: "抢庄牛牛",
          ico: "/static/szc/img/home/qznn.png",
          special_setting: { platform: "KY_CHESS", gameName: "830" },
          rulePath: "/rules/cp11x5",
          id: 245
        },

        {
          name: "百家乐",
          ico: "/static/szc/img/home/bjl.png",
          special_setting: { platform: "KY_CHESS", gameName: "910" },
          rulePath: "/rules/lhc",
          id: 3603
        },
        {
          name: "百人斗牛",
          ico: "/static/szc/img/home/brdn.png",
          special_setting: { platform: "KY_CHESS", gameName: "930" },
          rulePath: "/rules/pk10",
          id: 3605
        }
      ],
      lotterList: [
        {
          name: "北京赛车PK10",
          text: "超高收益,超大福利",
          src: "/static/szc/img/home/lotter1.png",
          path: "/plays/tradition/2"
        },
        {
          name: "快速赛车PK10",
          text: "轻轻松松,执掌财务",
          src: "/static/szc/img/home/lotter2.png",
          path: "/plays/tradition/12"
        },
        {
          name: "快速快3",
          text: "百万礼券,返现爆款",
          src: "/static/szc/img/home/lotter3.png",
          path: "/plays/tradition/27"
        },
        {
          name: "江苏快三",
          text: "免费筹码,一学就会",
          src: "/static/szc/img/home/lotter4.png",
          path: "/plays/tradition/9"
        },
        {
          name: "快速时时彩",
          text: "惊喜不断,福利只为你",
          src: "/static/szc/img/home/lotter5.png",
          path: "/plays/tradition/16"
        },
        {
          name: "幸运飞艇",
          text: "首创极速服务新体验",
          src: "/static/szc/img/home/lotter6.png",
          path: "/plays/tradition/3"
        },
        {
          name: "三分快三",
          text: "独家电子优惠券,豪礼送不停",
          src: "/static/szc/img/home/lotter7.png",
          path: "/plays/tradition/3631"
        },
        {
          name: "香港六合彩",
          text: "亿万彩池,等你来挑战",
          src: "/static/szc/img/home/lotter8.png",
          path: "/plays/tradition/1"
        }
      ],
      guanfanglist: [
        {
          text: "BBIN电子",
          router: "/plays/tradition/16",
          name: "BBIN老虎机",
          ico: "/static/szc/img/home/bbin.png",
          rulePath: "/rules/ssc",
          id: 10016,
          type: {
            list: [
              { name: "全选", tag: "" },
              { name: "最新游戏", tag: "NEW" },
              { name: "热门游戏", tag: "HOT" },
              { name: "老虎机", tag: "SLO" },
              { name: "刮刮乐", tag: "SCR" },
              { name: "桌上游戏", tag: "TBL" },
              { name: "大型机台", tag: "LMC" }
            ]
          },
          line: { list: [] }
        },
        {
          text: "AG电子",
          router: "/plays/tradition/13",
          name: "AG老虎机",
          ico: "/static/szc/img/home/ag.png",
          id: 10015,
          type: {
            list: [
              { name: "全选", tag: "" },
              { name: "最新游戏", tag: "NEW" },
              { name: "热门游戏", tag: "HOT" },
              { name: "老虎机", tag: "SLO" },
              { name: "大额投注", tag: "MAX" },
              { name: "小额投注", tag: "MIN" },
              { name: "经典拉霸", tag: "FRT" },
              { name: "消消乐", tag: "CLH" }
            ]
          },
          line: {
            list: [
              { name: "全选", tag: "" },
              { name: "5-10线", tag: "5-10" },
              { name: "15-20线", tag: "15-20" },
              { name: "25-30线", tag: "25-30" },
              { name: "更多", tag: "MOR" }
            ]
          }
        },
        {
          text: "AE电子",
          router: "/plays/tradition/3630",
          ico: "/static/szc/img/home/ae.png",
          name: "AE老虎机",
          id: 10014,
          type: { list: [] },
          line: { list: [] }
        },

        {
          text: "TTG电子",
          router: "/plays/tradition/29",
          name: "TTG老虎机",
          ico: "/static/szc/img/home/ttg.png",
          id: 10025,
          type: {
            list: [
              { name: "全选", tag: "" },
              { name: "最新游戏", tag: "NEW" },
              { name: "热门游戏", tag: "HOT" },
              { name: "老虎机", tag: "SLO" },
              { name: "经典游戏", tag: "CLA" }
            ]
          },
          line: {
            list: [
              { name: "全选", tag: "" },
              { name: "单线", tag: "1-1" },
              { name: "5-10线", tag: "5-10" },
              { name: "15-20线", tag: "15-20" },
              { name: "243线", tag: "243" },
              { name: "更多", tag: "MOR" }
            ]
          }
        },
        {
          text: "DT电子",
          router: "/plays/tradition/1",
          name: "DT老虎机",
          ico: "/static/szc/img/home/dt.png",
          id: 10019,
          type: {
            list: [
              { name: "全选", tag: "" },
              { name: "最新游戏", tag: "NEW" },
              { name: "热门游戏", tag: "HOT" },
              { name: "老虎机", tag: "SLO" },
              { name: "奖池游戏", tag: "JPT" },
              { name: "经典游戏", tag: "CLA" }
            ]
          },
          line: {
            list: [
              { name: "全选", tag: "" },
              { name: "单线", tag: "1-1" },
              { name: "5-10线", tag: "5-10" },
              { name: "15-20线", tag: "15-20" },
              { name: "243线", tag: "243" },
              { name: "更多", tag: "MOR" }
            ]
          }
        },

        {
          text: "MG电子",
          router: "/plays/tradition/2904",
          name: "MG老虎机",
          ico: "/static/szc/img/home/mg.png",
          id: 10022,
          type: {
            list: [
              { name: "全选", tag: "" },
              { name: "最新游戏", tag: "NEW" },
              { name: "热门游戏", tag: "HOT" },
              { name: "经典游戏", tag: "CLA" },
              { name: "老虎机", tag: "SLO" },
              { name: "奖池游戏", tag: "JPT" }
            ]
          },
          line: {
            list: [
              { name: "全选", tag: "" },
              { name: "单线", tag: "1-1" },
              { name: "5-10", tag: "5-10" },
              { name: "15-20", tag: "15-20" },
              { name: "243游戏", tag: "243" },
              { name: "更多", tag: "MOR" }
            ]
          }
        },
        {
          text: "PT电子",
          router: "/plays/tradition/11",
          name: "PT老虎机",
          ico: "/static/szc/img/home/pt.png",
          id: 10024,
          type: {
            list: [
              { name: "全选", tag: "" },
              { name: "最新游戏", tag: "NEW" },
              { name: "热门游戏", tag: "HOT" },
              { name: "经典游戏", tag: "CLA" },
              { name: "奖池游戏", tag: "JPT" },
              { name: "老虎机", tag: "SLO" }
            ]
          },
          line: {
            list: [
              { name: "全选", tag: "" },
              { name: "单线", tag: "1-1" },
              { name: "5-10线", tag: "5-10" },
              { name: "15-20线", tag: "15-20" },
              { name: "243线", tag: "243" },
              { name: "更多", tag: "MOR" }
            ]
          },
          thirt: {
            list: [
              { name: "全选", tag: "" },
              { name: "卡通", tag: "ANI" },
              { name: "洛奇", tag: "RCK" },
              { name: "少女", tag: "GIR" }
            ]
          }
        },
        {
          text: "CQ9电子",
          router: "/plays/tradition/15",
          name: "CQ9老虎机",
          ico: "/static/szc/img/home/cq9.png",
          id: 10018,
          type: {
            list: [
              { name: "全选", tag: "" },
              { name: "最新游戏", tag: "NEW" },
              { name: "热门游戏", tag: "HOT" },
              { name: "老虎机", tag: "SLO" },
              { name: "捕鱼游戏", tag: "FSH" }
            ]
          },
          line: {
            list: [
              { name: "全选", tag: "" },
              { name: "单线", tag: "1-1" },
              { name: "5-10线", tag: "5-10" },
              { name: "15-20线", tag: "15-20" },
              { name: "243线", tag: "243" }
            ]
          }
        }
      ],
      recommendList: "",
      recom: [],
      nowTypeList: {
        type: { list: [] },
        line: { list: [] },
        thirt: { list: [] }
      },
      iptVal: "",
      currenttype: "",
      currentline: "",
      currentTag: "",
      pageDatas: {
        page: 1
      }
    };
  },
  components: {
    vpHomeTimer
  },
  methods: {
    async fetchgames(item) {
      
      let scrollTop = document.documentElement.scrollTop;
      this.$router.push({
        path: `/home/games`,
        query: {
          id: item.id,
          name: item.name,
          login:true
        }
      });
      window.scrollTo(0, scrollTop);
      this.nowTypeList.type.list = item.type.list;
      this.nowTypeList.line.list = item.line.list;
      if (item.thirt) {
        this.nowTypeList.thirt.list = item.thirt.list;
      } else {
        this.nowTypeList.thirt.list = [];
      }
      this.getData();
      // this.$nextTick(() => {
      //   // console.log( this.$refs['search-container'].offsetHeight)
      //   this.offsetHeight =
      //     this.$refs["search-container"].offsetHeight < 100
      //       ? 100
      //       : this.$refs["search-container"].offsetHeight;
      //   // console.log( this.$refs['list_winner'])
      // });
    },
    timeout() {
      setTimeout(() => {
        this.reloadTimeStaue = true;
      }, 2000);
      if (this.reloadTimeStaue) {
      }
    },
    async getData(item) {
        this.gameData = [];
        let id=this.$route.query.id
        let res = await _SetPost(`${this.$HOST_NAME}/gameSortNew`, {
            device: "pc",
            id
        });
        if (res && res.code === 200) {
          console.log(res.data.data);
          this.gameData = res.data[id];
          this.total = res.data.last_page;
        }
      },
     loginGame (item) {
      if (!localStorage.token || !localStorage.userinfo) {
        alert('未登录')
        return false
      }
      let routeData = this.$router.resolve({
        path: '/loading',
        query: {
          id: item.id,
          login: true
        }
      })
      window.open(routeData.href, 'newwindow', 'height=750,width=1285, top=0, left=' + (window.screen.availWidth - 1295) / 2 + '')
    },
    async clear() {
      this.iptVal = "";
      this.currenttype = "";
      this.currentline = "";
      this.currentTag = "";
      this.pageDatas.page = 1;
    },
    startGame(path) {
      if (localStorage.token) {
        if (localStorage.Public_User == "test") {
          this.dNotify("彩票暂无试玩,立即注册", "error");
        } else {
          this.$router.push({ path: path });
          return false;
        }
      } else {
        this.dNotify("请先登录", "error");
      }
    },

    goTo(item) {
      if (!localStorage.token || !localStorage.userinfo) {
        alert("未登录");
        return false;
      }
      if (localStorage.Public_User == "test") {
        alert("彩票暂无试玩,立即注册");
        // this.dNotify("彩票暂无试玩,立即注册", "error")
      }
      if (localStorage.Public_User == "v1" && item.router) {
        if (item.router == "/plays/hall") {
          window.open("#/plays/hall");
          return false;
        } else {
          this.$router.push(item.router);
        }
      }
    }
  },
};
</script>
<style lang="less" scoped>
.sy-middle {
  width: 100%;

  overflow: hidden;
  .sy-pc28-cp {
    width: 1360px;
    margin: 0 auto;
    overflow: hidden;
    .pc-28 {
      width: 820px;
      height: 708px;
      float: left;
      overflow: hidden;
      .title_cms {
        padding-top: 10px;
        padding-left: 31px;
        line-height: 40px;
        font-size: 30px;
        width: 100%;
        border-bottom: 1px solid #e0e0e0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        margin-bottom: 15px;
        &:before {
          content: "";
          display: inline-block;
          width:10px;
          height:30px;
          background: rgba(205, 16, 20, 0.7);
          position: absolute;
          top: 13px;
          left: 0;
        }
      }
      .pc-room {
        width: 897.6px;
        height: 470px;

        .pc-room-bg {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          transition: all 0.3s;
        }

        li {
          float: left;
          width: 264px;
          height: 200px;
          margin-right: 13.6px;
          margin-bottom: 10px;
          border-radius: 10px;
          position: relative;
          overflow: hidden;

          .game-name-ol {
            width: 92%;
            height: 75px;
            margin-left: 19px;
            margin-top: 20px;
            position: relative;

            & > span:first-child {
              font-size: 24px;
              color: #fff;
              display: block;
            }
            & > span:last-child {
              margin-top: 11px;
              display: block;
              font-size: 14px;
              color: white;
            }
          }
          .mencen-room {
            position: absolute;
            width: 100%;
            // height: 33%;
            top: 0;
            border-radius: 5px;
            background: rgba(50, 81, 121, 0);
            -webkit-transition: background 0.3s linear;
            transition: background 0.3s linear;
            // padding: 49% 0;
            .all-room {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              div {
                width: 98px;
                height: 33px;
                text-align: center;
                border: 1px solid #fff;
                font-size: 15px;
                line-height: 33px;
                display: none;
                border-radius: 30px;
                margin: 0 auto 8px;
                cursor:-webkit-pointer;
                cursor: pointer;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                -webkit-transition: all 0.3s linear;
                transition: all 0.3s linear;
                a {
                  color: #fff;
                }
              }
              div:hover {
                background: #fff;
              }
              div:hover a {
                color: #000;
              }
            }
          }
          .mencen-room-ol {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            border-radius: 5px;
            background: rgba(50, 81, 121, 0);
            -webkit-transition: background 0.3s linear;
            transition: background 0.3s linear;
          }
        }
        li:nth-child(8) {
          margin-right: 0;
          margin-bottom: 0;
        }
        li:hover .mencen-room {
          background: rgba(50, 81, 121, 0.702);
          height: 100%;
          -webkit-animation: mask_anmation-data-v-40310473 0.2s ease-in-out;
          animation: mask_anmation-data-v-40310473 0.2s ease-in-out;
        }
        li:hover {
          .pc-room-bg {
            transform: scale(1.1);
          }
        }
        li:hover .mencen-room div {
          display: block;
        }
        li:first-child {
          height: 410px;
        }
      }
    }

    // 经典彩票
    .sy-cp {
      float: right;
      width: 510px;
      height: auto;
      .title_cms {
        padding-top: 10px;
        padding-left: 31px;
        line-height: 40px;
        font-size: 30px;
        width: 100%;
        border-bottom: 1px solid #e0e0e0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        margin-bottom: 15px;
      }
      .title_cms:before {
        content: "";
        display: inline-block;
        width: 10px;
        height: 30px;
        background: rgba(205, 16, 20, 0.7);
        position: absolute;
        top: 13px;
        left: 0;
      }
      .game-type-ol {
        display: block;
        width: 528px;
        height: auto;
        padding-top: 12px;
        overflow: hidden;
        .list-ol {
          float: left;
          width: 132px;
          height: 132px;
          cursor:-webkit-pointer;
          cursor: pointer;
          position: relative;
          top: 0;
          -webkit-transition: top 0.2s ease-in;
          transition: top 0.2s ease-in;
          div:first-child {
            width: 73px; //71
            height: 73px; //71
            margin: 0 auto;
            // background-image: url('/static/szc/img/game-pic.3d0dea2.png');
            -webkit-transition: opacity 0.3s ease-in;
            transition: opacity 0.3s ease-in;
            img {
              width: 100%;
              // border-radius: 50%;
            }
          }

          div:last-child {
            margin-top: 16px;
            margin-bottom: 18px;
            text-align: center;
            font-size: 18px;
            color: #565f74;
          }
        }
        .list-ol:first-child > div:first-child {
          background-position-x: 0;
        }
        .list-ol:nth-child(2) > div:first-child {
          background-position-x: -54px;
        }
        .list-ol:nth-child(3) > div:first-child {
          background-position-x: -108px;
        }
        .list-ol:nth-child(4) > div:first-child {
          background-position-x: -162px;
        }
        .list-ol:nth-child(5) > div:first-child {
          background-position-x: -216px;
        }
        .list-ol:nth-child(6) > div:first-child {
          background-position-x: -270px;
        }
        .list-ol:nth-child(7) > div:first-child {
          background-position-x: -324px;
        }
        .list-ol:nth-child(8) > div:first-child {
          background-position-x: -378px;
        }

        .list-ol-li {
          float: left;
          width: 132px;
          height: 132px;
          cursor:-webkit-pointer;
          cursor: pointer;
          position: relative;
          top: 0;
          -webkit-transition: top 0.2s ease-in;
          transition: top 0.2s ease-in;
          div:first-child {
            width: 73px;
            height: 73px;
            margin: 0 auto;
            // background-image: url('/static/szc/img/game-pic1.62dfd19.png');
            -webkit-transition: opacity 0.3s ease-in;
            transition: opacity 0.3s ease-in;
            img {
              width: 100%;
            }
          }
          div:last-child {
            margin-top: 16px;
            margin-bottom: 18px;
            text-align: center;
            font-size: 18px;
            color: #565f74;
          }
        }

        .list-ol-li:first-child > div:first-child {
          background-position-x: 0;
        }
        .list-ol-li:nth-child(2) > div:first-child {
          background-position-x: -54px;
        }
        .list-ol-li:nth-child(3) > div:first-child {
          background-position-x: -108px;
        }
        .list-ol-li:nth-child(4) > div:first-child {
          background-position-x: -162px;
        }
        .list-ol-li:nth-child(5) > div:first-child {
          background-position-x: -216px;
        }
        .list-ol-li:nth-child(6) > div:first-child {
          background-position-x: -270px;
        }
        .list-ol-li:nth-child(7) > div:first-child {
          background-position-x: -324px;
        }
        .list-ol-li:nth-child(8) > div:first-child {
          background-position-x: -378px;
        }

        .list-ol:hover,
        .list-ol-li:hover {
          top: -5px;
        }

        .list-ol:hover div,
        .list-ol-li:hover div {
          color: #cd1014;
        }
      }
    }
  }
}
.clearfix {
  content: "";
  display: block;
  clear: both;
}
#timeleave {
  /deep/ .time {
    background: transparent;
    float: left;
    text-align: left;
    color: #fff;
    img {
      display: none;
    }
    span {
      font-size: 24px;
    }
  }
  .lotteryStatus {
    display: inline-block;
    margin-top: 6px;
    color: red;
    font-size: 20px;
  }
}
</style>
