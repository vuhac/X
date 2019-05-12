<template>
  <div class="wrapper">
    <div class="othergame">
      <div class="gametitle">其他游戏</div>
      <ul>
        <li
          v-for="(item,i) in gamelist"
          :key="i"
          :style="{background:'url('+imgUrl+(i+1)+'.png'+')'}"
        >
          <div class="mask">
            <div class="maskContent">
              <div class="maskitem" v-for="(v,i) in item.mask_list" :key="i">
                <a @click="goto(v)">
                  <span>{{v.mask_item}}</span>
                </a>
              </div>
            </div>
          </div>
          <div class="list_title">{{item.title_name}}</div>
          <div class="list_introduce" v-if="typeof item.title_introduce!='String'">
            <p
              v-for="(introItem,introIndex) in item.title_introduce" :key="introIndex"
            >{{introItem}}</p>
          </div>
          <div class="list_introduce" v-else>{{item.title_introduce}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import mixin from "../../public/games/public.js";

export default {
    mixins:[mixin],

  data() {
    return {
      gamelist: [
        {
          title_name: "真人视讯",
          title_introduce: "美女荷官 中文聊天",
          mask_list: [
            { mask_item: "AG视讯", link: "AG_LIVE" ,id:31},
            { mask_item: "BBIN视讯", link: "BBIN_LIVE",id:32}
          ],

          img: ""
        },
        {
          title_name: "棋牌游戏",
          title_introduce: "顶级竞技棋牌  万人同时在线",
          mask_list: [
            { mask_item: "VG棋牌", link: "VG_CHESS" ,id:10091},
            { mask_item: "KY棋牌", link: "KY_CHESS" ,id:243}
          ],
          img: ""
        },
        {
          title_name: "电子游艺",
          title_introduce: ["分分钟中大奖", "电游手游一网打尽"],
          mask_list: [
            { mask_item: "AG电游", link: "home/games?id=10015&name=AG老虎机" ,id:10015,},
            { mask_item: "PT电游", link: "home/games?id=10024&name=AG老虎机" ,id:10024},
            { mask_item: "MG电游", link: "home/games?id=10022&name=AG老虎机" ,id:10022},
            { mask_item: "BBIN电游", link: "home/games?id=10016&name=AG老虎机",id:10016 }
          ],
          img: ""
        },
        {
          title_name: "体育赛事",
          title_introduce: ["超给力多平台", "结算最快速"],
          mask_list: [
            { mask_item: "皇冠体育", link: "SX_SPORT",id:39 },
            { mask_item: "BBIN体育", link: "BBIN_SPORT" ,id:41},
            { mask_item: "AG体育", link: "AG_SPORT" ,id:40}
          ],

          img: ""
        }
      ],
      imgUrl: "/static/szc/img/top"
    };
  },
  methods: {
    goto(item){
        if(item.mask_item.includes("电游")){
          this.$router.push({path:item.link})
        }else{
          this.loginGame(item)
        }
    }


    // 进入游戏
    // loginGame(item) {
    //   if (!localStorage.token || !localStorage.userinfo) {
    //     alert("未登录");
    //     return false;
    //   }

    //   if (
    //     localStorage.Public_User == "v1" ||
    //     localStorage.Public_User == "test"
    //   ) {
    //     let routeData = this.$router.resolve({
    //       path: "/loading",
    //       query: {
    //         name: item.name,
    //         platform: item.link,
    //         //gameName: item.mask_item,
    //         login: true,
    //         id:item.id
    //       }
    //     });
    //     window.open(
    //       routeData.href,
    //       "newwindow",
    //       "height=750,width=1285, top=0, left=" +
    //         (window.screen.availWidth - 1295) / 2 +
    //         ""
    //     );
    //   }
    // }
  }
};
</script>
<style lang="less" scoped>
.wrapper{
  width: 100%;
 
  overflow: hidden;
  .othergame {
  width: 1360px;
  margin: 0 auto;
  .gametitle {
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
  .gametitle:before {
    content: "";
    display: inline-block;
    width: 10px;
    height:30px;
    background: rgba(205, 16, 20, 0.7);
    position: absolute;
    top: 14px;
    left: 0;
  }
  ul {
    display: block;
    width: 100%;
    overflow: hidden;
    li {
      //background: url("/static/szc/img/anther-game.4b2a4c1.png") no-repeat;
      //background-repeat: no-repeat;
      width: 538px;
      height: 610px;
      margin-right: 10px;

      float: left;
      position: relative;
      overflow: hidden;
      //border-radius: 8px;
      .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        border-radius: 8px;
        background: rgba(50, 81, 121, 0);
        -webkit-transition: background 0.3s linear;
        transition: background 0.3s linear;
        z-index: 2;
        .maskContent {
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          opacity: 0;
          .maskitem {
            width: 110px;
            height: 32px;
            text-align: center;
            border: 1px solid #fff;
            font-size: 15px;
            line-height: 32px;
            border-radius: 30px;
            margin: 2px auto 4px;
            cursor: -webkit-pointer;
            cursor: pointer;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #fff;
            -webkit-transition: all 0.3s linear;
            transition: all 0.3s linear;
            a {
              color: #fff;
            }
          }
          .maskitem:hover {
            background: #fff;
          }
          .maskitem:hover a {
            color: #000;
          }
        }
      }
      .list_title {
        font-size: 50px;
        line-height: 70px;
        margin-left: 24px;
        position: relative;
        z-index: 1;
        color: #ff385b;
      }
      .list_introduce {
        font-size: 24px;
        margin-left: 24px;
        position: relative;
        z-index: 1;
        color: #ff385b;
      }
    }
    li:nth-child(1) {
      .list_title {
        margin-top: 64px;
        margin-left: 35px;
      }
      .list_introduce {
        margin-left: 35px;
      }
    }
    li:nth-child(2) {
      width: 811px;
      height: 300px;
      margin-bottom: 10px;
      margin-right: 0;
      div {
        color: #9540bd;
      }
      .list_title {
        margin-top: 130px;
        margin-left: 85px;
      }
      .list_introduce {
        margin-left: 85px;
      }
    }
    li:nth-child(3) {
      width: 401px;
      height: 300px;
      margin-right: 10px;
      .list_title {
        margin-top: 41px;
        margin-left: 31px;
      }
      .list_introduce {
        margin-left: 31px;
        p:nth-child(2){
          margin-top:5px;
        }
      }
      div {
        color: #0087ff;
      }
    }
    li:nth-child(4) {
      margin-right: 0;
      width: 401px;
      height: 300px;
      .list_title {
        margin-top: 41px;
        margin-left: 31px;
      }
      .list_introduce {
        margin-left: 31px;
        p:nth-child(2){
          margin-top:5px;
        }
      }
      div {
        color: #01989a;
      }
    }
    li:first-of-type:before {
      background-position-x: -1px;
      background-position-y: 0;
    }
    li:nth-of-type(2):before {
      background-position-x: -424px;
      background-position-y: 0;
    }
    li:nth-of-type(3):before {
      background-position-x: -426px;
      background-position-y: -342px;
    }
    li:nth-of-type(4):before {
      background-position-x: -912px;
      background-position-y: -338px;
    }
    li:hover .mask {
      background: rgba(50, 81, 121, 0.702);
    }
    li:hover .mask .maskContent {
      opacity: 1;
    }
    li:hover:before {
      top: -3%;
      left: -3%;
      -webkit-transform: scale3d(1.08, 1.08, 1.08);
      transform: scale3d(1.08, 1.08, 1.08);
    }
  }
}
}

</style>
