<template>
  <div class="sports_main">
    <div class="wrapper">
      <ul>
        <li v-for="(item,i) in buyuData" :key="i" @click="getItemId (item)">
          <!-- <div class="cover_hover"></div> -->
          <div class="cover" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
          <!-- <div class="title">
            <h2>{{item.name}}</h2>
            <h3>{{item.content}}</h3>
          </div> -->
          <!-- <p><a class="btn" @click="getItemId (item)">开始游戏</a>
          </p> -->
          <!-- <p><a class="btn_ag" @click="getItemId (item)"
                href="javascript:void(0)">游戏说明</a>
          </p> -->
          <span></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import $ from 'jquery'
  import mixin from '../../../public/games/public.js'

  export default {
    mixins: [mixin],
    data () {
      return {
        buyuData: [
          {
            name: '皇冠体育',
            img: '/static/cjw/img/bg_sports_01.png',
            content: '简单操作，自由编排',
            platform: 'sport',
            gameName: '21',
            id:21
          },
          {
            name: 'BBIN体育',
            img: '/static/cjw/img/bg_sports_02.png',
            content: '全新竞技 多种体验',
            platform: 'sport',
            gameName: '41',
            id:41
          },
          {
            name: 'AG体育',
            img: '/static/cjw/img/bg_sports_03.png',
            content: '经典玩法 玩法丰富',
            platform: 'sport',
            gameName: '22',
            id:22
          },
          {
            name: '沙巴体育',
            img: '/static/cjw/img/bg_sports_04.png',
            content: '各式赔率，一触即发',
            platform: 'sport',
            gameName: '20',
            id:20
          }
        ],
        clientwidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      }
    },
    methods: {
      // async getItemId (item) {
      //   if (!localStorage.token || !localStorage.userinfo) {
      //     alert('未登录')
      //     return false
      //   }
      //   console.log(item)
      //   let routeData = this.$router.resolve({
      //     path: '/loading',
      //     query: {name: item.name, classId: item.gameName, platform: item.platform}
      //   })
      //   window.open(routeData.href, 'newwindow', 'height=750,width=1285, top=0, left=' + (window.screen.availWidth - 1295) / 2 + '')
      // },
      // async thirdParty (platform, gameName) {
      //   // 判断本地有没有登录
      //   if (!localStorage.token || !localStorage.userinfo) {
      //     this.tryPlay()
      //     return false
      //   }
      //   this.loading = window.open(
      //     '/static/loading/index.html',
      //     'newwindow',
      //     'height=750,width=1285, top=0, left=' +
      //     (window.screen.availWidth - 1295) / 2 +
      //     ''
      //   )
      //   let res = await this.$http.post(`${this.$HOST_NAME}/games/index`, {
      //     platform: platform,
      //     tag: '',
      //     classId: gameName,
      //     limit: 20
      //   })
      //   if (res && res.code == 200) {
      //     this.login(res.data)
      //   } else {
      //     // console.log('获取分页详情失败!')
      //   }
      // }
    }
  }
</script>

<style lang="less" scoped>
  .sports_main {
    position: relative !important;
    height: 900px;
    background: url("/static/cjw/img/bg_sports.png") center top;

    .wrapper {
      position:absolute;
      min-width: 2000px;
      height: 100%;
      left:50%;
      transform:translateX(-50%);
      padding-top:100px;
      ul:after{
        clear:both;
        content:'';
        display:block;
      }
      ul {
        width:100%;
        position:absolute;
        left:50%;
        transform:translateX(-50%);
        li {
          float: left;
          position: relative;
          text-align: center;
          width:25%;
          height:700px;
          position:relative;
          margin-top:0;
          transition: all 0.3s ease-in;
          .cover {
            width: 100%;
            height: 700px;
            // background: url("/static/cjw/img/bg_fish_01.png") center
            //   center no-repeat;
            background-position: center center;
            background-repeat: no-repeat;
            transition: all 0.3s ease-in;
            margin-top:0;
            z-index: 10;
          }
          span{
            position: absolute;
            bottom: 116px;
            right: 64px;
            width: 153px;
            height: 32px;
            background: url(/static/cjw/img/button.png) no-repeat center;
          }   
        }

        li:hover{
           margin-top:-10px;
           cursor:pointer;
        }

      }
    }

    // .wraap1{
    //      float: right;
    //      padding-top: 250px;
    //      padding-left: 60px;
        
    // }
    // .wraap2{
    //      position: absolute;
    //      top:250px;
    //      left: 35%;
    // }
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
