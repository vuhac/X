<template>
  <div class="fishing_main">
    <div class="wrapper">
      <ul>
        <li v-for="(item,i) in buyuData" :key="i" @click="trustLogin(item)">
          <div class="cover_hover"></div>
          <div class="cover" :style="{backgroundImage: 'url(' + item.img + ')'}">
            <span class="startGame"></span>
          </div>
          <!-- <p><a class="btn" >开始游戏</a>
          </p> -->
          <!-- <p><a class="btn_ag" @click="trustLogin(item)"
                href="javascript:void(0)">游戏说明</a>
          </p> -->
        </li>
      </ul>
      <div class="gamelist">
          <div v-for="(item,i) in qipaiGame" :key="i" @click="getItemId(item)">
            <img :src="item.img"/>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import { _SetGet, _SetPost } from '@/service/public/service.js'
  import mixin from '../../../public/games/public.js'

  export default {
    mixins: [mixin],
    data () {
      return {
        buyuData: [
          {
            name: '开元棋牌',
            img: '/static/cjw/img/chess2.png',
            content: '经典玩法 玩法丰富',
            platform: 'KY_CHESS',
            gameName: '0',
            id:243
          },
            {
            name: 'VG棋牌',
            img: '/static/cjw/img/chess3.png',
            content: '经典玩法 玩法丰富',
            platform: 'VG_CHESS',
            gameName: '1000',
            id:10091

          }
        ],
        qipaiGame:[
            {
            classId: 42,
            className: "开元棋牌",
            code: "1",
            devices: "ios,h5,pc,android",
            id: 3605,
            name: "百人牛牛",
            platform: "chess",
            sequence: 20,
            special_setting: '{"platform":"KY_CHESS", "gameName":"1"}',
            status: "yes",
            tag: "HOT",
            show:true,
            img:'/static/cjw/img/3605.png'
          },
          {
            classId: 42,
            className: "开元棋牌",
            code: "1",
            devices: "ios,h5,pc,android",
            id: 254,
            name: "极速炸金花",
            platform: "chess",
            sequence: 20,
            special_setting: '{"platform":"KY_CHESS", "gameName":"1"}',
            status: "yes",
            tag: "HOT",
            show:true,
            img:'/static/cjw/img/254.png'
          },
          {
            classId: 42,
            className: "开元棋牌",
            code: "1",
            devices: "ios,h5,pc,android",
            id: 244,
            name: "斗地主",
            platform: "chess",
            sequence: 20,
            special_setting: '{"platform":"KY_CHESS", "gameName":"1"}',
            status: "yes",
            tag: "HOT",
            show:true,
            img:'/static/cjw/img/244.png'
          },
          {
            classId: 42,
            className: "开元棋牌",
            code: "1",
            devices: "ios,h5,pc,android",
            id: 247,
            name: "德州扑克",
            platform: "chess",
            sequence: 20,
            special_setting: '{"platform":"KY_CHESS", "gameName":"1"}',
            status: "yes",
            tag: "HOT",
            show:true,
            img:'/static/cjw/img/247.png'
          },
          {
            classId: 42,
            className: "开元棋牌",
            code: "1",
            devices: "ios,h5,pc,android",
            id: 256,
            name: "十三水",
            platform: "chess",
            sequence: 20,
            special_setting: '{"platform":"KY_CHESS", "gameName":"1"}',
            status: "yes",
            tag: "HOT",
            show:true,
            img:'/static/cjw/img/256.png'
          },
          {
            classId: 42,
            className: "开元棋牌",
            code: "1",
            devices: "ios,h5,pc,android",
            id: 246,
            name: "炸金花",
            platform: "chess",
            sequence: 20,
            special_setting: '{"platform":"KY_CHESS", "gameName":"1"}',
            status: "yes",
            tag: "HOT",
            show:true,
            img:'/static/cjw/img/246.png'
          },
          {
            classId: 42,
            className: "开元棋牌",
            code: "1",
            devices: "ios,h5,pc,android",
            id: 251,
            name: "21点",
            platform: "chess",
            sequence: 20,
            special_setting: '{"platform":"KY_CHESS", "gameName":"1"}',
            status: "yes",
            tag: "HOT",
            show:true,
            img:'/static/cjw/img/251.png'
          },
          {
            classId: 42,
            className: "开元棋牌",
            code: "1",
            devices: "ios,h5,pc,android",
            id: 248,
            name: "二八杠",
            platform: "chess",
            sequence: 20,
            special_setting: '{"platform":"KY_CHESS", "gameName":"1"}',
            status: "yes",
            tag: "HOT",
            show:true,
            img:'/static/cjw/img/248.png'
          },
        ]
      }
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  .fishing_main {
    position: relative !important;
    height: 900px;
    background: url("/static/cjw/img/chess_bg.jpg") center top;

    .wrapper {
      width: 1200px;
      height: 100%;
      padding-top: 236px;
      margin: 0 auto;
      position:relative;
      ul:after{
        clear:both;
        content:'';
        display:block;
      }
      ul {
        li {
          width: 314px;
          height: auto;
          float: left;
          position: relative;
          text-align: center;

          // .cover_hover {
          //   content: "";
          //   position: absolute;
          //   top: 0;
          //   left: 0;
          //   width: 100%;
          //   height: 390px;
          //   z-index: 20;
          //   cursor: pointer;
          // }

          .cover {
            width: 100%;
            height: 390px;
            background-position: center center;
            background-repeat: no-repeat;
            transition: all 0.3s ease-in;
            margin-top:0;
            z-index: 10;
            position:relative;
            .startGame{
              position:absolute;
              bottom:-4px;
              left:50%;
              transform:translate(-50%,-50%);
              width:153px;
              height:32px;
              background:url(/static/cjw/img/button.png) no-repeat center;
            }
          }
          .cover:hover{
            margin-top:-10px;
            cursor:pointer;
          }

          // .cover_hover:hover + .cover {
          //   transform: rotateY(180deg);
          // }

          // .cover_hover:hover ~ .title {
          //   animation: titleSlide 0.3s linear;
          // }

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
            margin-top: 8px;

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
        li:nth-child(1){
          margin-left:20px;
        }
      }
      .gamelist{
        position: absolute;
        height: 160px;
        bottom: 16px;
        left: 56px;
        width:1300px;
        div{
          width:135px;
          height:156px;
          margin-left:10px;
          margin-right:10px;
          float:left;
          position:relative;
          // overflow:hidden;
          img{
            display:inline-block;
            width:135px;
            height:130px;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            margin-top:0;
            transition:all ease .3s;
          }
        }
        div:hover img{
          margin-top:-10px;
          cursor:pointer;
        }
      }
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
