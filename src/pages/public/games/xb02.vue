<template>
  <div class="xb_qipai">
    <div class="search-container">
      <div class="search-head">
        <div class="left">
          <div class="ipt-group">
            <input  v-model="iptVal" placeholder="请输入游戏名称" autocomplete="off" class="ipt" @keyup.enter="search()">
            <div class="searchbox" @click="search()"></div>
          </div>
        </div>
      </div>
      <div class="search-info">
        <div class="search-detail">
          <div class="search-type">
            <ul class="gameType clear">
              <li class="lf gameName ky" :class="active?'':'active'" @click="getData(gameList[0])">
                <a href="javascript:;" >开元棋牌</a>
              </li>
              <li class="lf gameName vg" :class="active?'active':''" @click="getData(gameList[1])">
                <a href="javascript:;" >VG棋牌</a>
              </li>
              <span class="allGame">全部游戏：</span>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="chess_list">
      <div class="filter-tab-content">
        <!-- 第一个tab内容开始 -->
        <div class="row filter-tab-pane" style="display:block!important;">
          <div class="col-md-3 col-sm-3" v-for="item in copGameDate" :key="item.id">
            <div class="filter-game-list">
              <img :src="item.icon" alt style="width:228px;height:180px">
              <h4>{{ item.name }}</h4>
              <div class="hover-shadow"></div>
              <div class="button-box">
                <a href="javascript:void(0)" @click="loginGame(item)"  class="btn btn-play">开始游戏</a>
              </div>
            </div>
          </div>
          <div v-if="copGameDate.length==0">暂无数据</div>
          <div style="clear:both"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { _SetGet, _SetPost } from "@/service/public/service.js";
import mixin from "./public.js";
export default {
    mixins: [mixin],
  props: {},
  data() {
    return {
        iptVal: "",
      gameList: [
        {
          id: "10042",
          name: "开元棋牌",
          class: "ky",
          type: { list: [] },
          line: { list: [] }
        },
        {
          id: "10041",
          name: "VG棋牌",
          class: "vg",
          type: { list: [] },
          line: { list: [] }
        }
      ],
      publicUrl: "http://img.7900005.com/",
      gameData:[],
      copGameDate:[],
      active:true
    };
  },
  computed: {},
  created() {
    this.getData(this.gameList[0]);
  },
  mounted() {
    if (localStorage.config) {
      let config = JSON.parse(localStorage.config);
      this.publicUrl = config.statics;
    }
  },
  watch: {},
  methods: {
    getData(item) {
        this.active = !this.active;
        let id=item.id
      let res = _SetPost(`${this.$HOST_NAME}/gameSortNew`, {
        id: id || 10041,
        device: "pc",
      }).then(res => {
        if (res && res.code === 200) {
          this.gameData = res.data[id];
          this.copGameDate = Object.assign([],this.gameData);
        }
      });
    },
    search() {
        let bossDate = Object.assign([],this.gameData)
        this.copGameDate = bossDate.filter(mm=> mm.name.includes(this.iptVal));
    },
  },
  components: {}
};
</script>

<style scoped lang="less">
.xb_qipai {
  .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  margin: 0 auto;
  width: 1200px;
  padding-bottom: 1px;
  color: #fff;
  .gameType {
    padding-left: 82px;
    position: relative;
    li.active {
      a {
        color: #7d34c7;
        border-bottom: 2px solid #7d34c7;
      }
    }
  }
  .allGame {
    position: absolute;
    left: 0;
    top: 8px;
    margin-right: 10px;
    color: #fff;
    display: inline-block;
    vertical-align: middle;
    font-size: 17px;
    line-height: 28px;
  }
  .gameName {
    margin: 8px -3px;
    padding: 0 10px;
    line-height: 28px;
    text-decoration: none;
    text-align: center;
    background-color: transparent;
    font-size: 17px;
    a {
      color: #fff;
    }
    a:hover {
      color: #7d34c7;
      border-bottom: 2px solid #7d34c7;
      cursor: pointer;
    }
  }
  .lf {
    float: left;
  }
  .rt {
    float: right;
  }
  .clear:after {
    content: "";
    display: block;
    clear: both;
  }
}
.search-container {
  width: 100%;
  // min-height: 150px;
  margin: 0 auto;
  margin-top: 10px;
  position: relative;
  .search-head {
    height: 33px;
    padding: 0;
    padding-right: 60px;
    position: absolute;
    /* display: inline-block; */
    right: 0;
    // border-bottom: 1px dashed #c1c1c1;
    .left {
      float: right;

      .label {
        display: inline-block;
        vertical-align: middle;
        color: #b48c68;
        text-align: left;
        font-size: 18px;
        font-weight: 600;
        padding: 0.2em 0.6em 0.3em;
        line-height: 1;
      }

      .ipt-group {
        width: 253px;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        border-radius: 3px 0 0 3px;
        border: 1px solid #afafb4;
        box-sizing: border-box;

        .ipt {
          border: none;
          width: 100%;
          padding: 0 10px;
          height: 32px;
          line-height: 32px;
          color: #c1c1c1;
          background-color: transparent;
          outline: none;
          box-sizing: border-box;
        }
        .searchbox {
          position: absolute;
          right: -60px;
          top: -1px;
          width: 60px;
          height: 34px;
          z-index: 8;
          background: url(/static/public/image/game/ptgame/gobtn.jpg) no-repeat
            center;
          background-size: cover;
          cursor: pointer;
        }

        .right {
          position: absolute;
          right: 10px;
          top: 2px;
          span {
            font-size: 26px;
            color: #d1d1d1;
            cursor: pointer;
          }
        }
      }

      .btn-search {
        width: 92px;
        height: 36px;
        vertical-align: middle;
        background: #b48c68;
        border-radius: 7px;
        font-size: 16px;
        color: #fff;
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        cursor: pointer;
        user-select: none;
        border: 1px solid transparent;
        outline: none;
      }
    }
  }
  .search-info {
    width: 800px;
    padding-top: 0px;

    .search-detail {
      margin-top: 15px;
      padding-left: 7px;
      padding-bottom: 16px;
      overflow: hidden;
      text-align: left;
      border: none;

      .search-type {
        .search-game {
          margin-bottom: 10px;
          height: 40px;
          line-height: 40px;

          dt {
            margin-right: 10px;
            color: #636363;
            display: inline-block;
            vertical-align: middle;
            font-size: 15px;
          }

          dd {
            display: inline-block;
            vertical-align: middle;

            a {
              display: inline-block;
              margin: 0 4px;
              padding: 0 10px;
              line-height: 28px;
              color: #636363;
              text-decoration: none;
              text-align: center;
              background-color: transparent;
              font-size: 15px;

              &:hover {
                color: #7d34c7;
                border-bottom: 2px solid #7d34c7;
              }
            }

            .active {
              color: #7d34c7;
              border-bottom: 2px solid #7d34c7;
              padding: 0 7px;
            }
          }
        }
      }
    }
  }

  .list_winner {
    position: absolute;
    width: 250px;
    background: #fff;
    top: 38px;
    right: 0;
    border-bottom: 1px solid #b48c68;
    overflow: hidden;

    .section_title {
      padding-left: 20px;
      background: #b48c68;
      line-height: 50px;
      color: #fff;
    }

    .topLoop {
      ul {
        overflow: hidden;
        border-left: 1px solid #b48c68;
        border-right: 1px solid #b48c68;

        .wrap {
          position: relative;
          top: 0;
          -webkit-animation: animateSub 120s linear infinite;
          -o-animation: animateSub 120s linear infinite;
          -moz-animation: animateSub 120s linear infinite;
          animation: animateSub 120s linear infinite;
          @keyframes animateSub {
            0% {
              top: 0;
            }
            100% {
              top: -5000px;
            }
          }

          li {
            padding: 20px 20px 0;
            border-bottom: 2px solid #f1f1f1;
            height: 100px;
            width: 100%;

            .gamepic {
              width: 55px;
              height: 65px;
              float: left;
              margin-right: 15px;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .wintext {
              width: 135px;
              float: left;
              font-size: 12px;
              color: #555;

              div {
                span {
                  color: red;
                }
              }
            }
          }
        }
      }
    }
  }
}
.chess_list {
  background-color: #222539;
  border: 1px solid #3d4057;
  padding: 25px;
  color: #ffedb3;
  height: auto;
  margin: auto;
  max-width: 1200px;
}

.chess_list .col-md-3,
.col-sm-3 {
  width: 23%;
}

.chess_list .col-md-3 {
  float: left;
  text-align: center;
  min-height: 280px;
  padding-right: 10px;
  padding-left: 10px;
}
.chess_list .filter-game-list {
  background-color: #2c2f43;
  border: 1px solid #3e425e;
  border-radius: 5px;
  padding: 15px;
  position: relative;
  margin: 10px 0;
}

.filter-game-list .button-box {
  width: 130px;
  z-index: 4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}

.filter-game-list .hover-shadow {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  background-color: #000 \9;
  filter: alpha(opacity=40);
  border-radius: 5px;
  display: none;
  z-index: 3;
}

.filter-game-list h4 {
  margin-top: 20px;
  font-size: 14px;
}
.filter-game-list .button-box {
  width: 130px;
  z-index: 4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  a {
    display: inline-block;
    height: 40px;
    line-height: 20px;
    width: 100%;
    color: #fff;
    background-color: #f66767;
    background-image: -webkit-linear-gradient(top, #f66767 0%, #e22d3e 100%);
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#f66767),
      to(#e22d3e)
    );
    background-image: linear-gradient(to bottom, #f66767 0%, #e22d3e 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff66767', endColorstr='#ffe22d3e', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    background-repeat: repeat-x;
    margin-bottom: 5px;
    -webkit-transition: all 0.6s ease-out;
    transition: all 0.6s ease-out;
  }
}
.filter-game-list:hover .hover-shadow {
  display: block;
}
.filter-game-list:hover .button-box {
  display: block;
}
</style>
