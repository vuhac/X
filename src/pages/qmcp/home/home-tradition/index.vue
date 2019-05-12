<template>
  <div class="fishing_main">
    <div class="wrapper0">
      <div class="promotions_banner" :class="active">
      </div>
      <div class="live-video-contance">
        <div class="bocai-public-cenernt wrapper">
          <div class="lettry-box-list">
            <ul>
              <li :key="outIndex" v-for="(outItem,outIndex) in showData">
                <a href="javascript:;">
                  <div class="letter-header-box">
                    <div class="letty-logo">
                      <img :src=outItem.id|capitalize>
                    </div>
                    <div class="lettery-right-box">
                      <h1>{{outItem.name}}</h1>
                      <p>一般彩票</p>
                      <div @click="$router.push({path:outItem.router})" class="lettey-game-box">开始游戏</div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  // import $ from "jquery";
  export default {
    data () {
      return {
        listData: [
          {name: '北京赛车', router: '/plays/tradition/2', id: '1'},
          {name: '重庆时时彩', router: '/plays/tradition/4', id: '2'},
          // {name:'江西时时彩',router:'/plays/tradition/1',id:'3'},//vc

          {name: '天津时时彩', router: '/plays/tradition/15', id: '4'},
          {name: '新疆时时彩', router: '/plays/tradition/14', id: '5'},
          {name: '广东快乐十分', router: '/plays/tradition/5', id: '6'},

          {name: '幸运农场', router: '/plays/tradition/6', id: '7'},
          // {name:'江苏快3',router:'/plays/tradition/9',id:'8'},//vc
          // {name:'广西快3',router:'/plays/tradition/1',id:'9'},//vc

          // {name:'上海时时彩',router:'/plays/tradition/1',id:'10'},//vc
          // {name:'云南时时彩',router:'/plays/tradition/1',id:'11'},//vc
          {name: '安徽快3', router: '/plays/tradition/25', id: '12'},

          // {name:'广西快乐十分',router:'/plays/tradition/1',id:'13'},//vc
          {name: '吉林快3', router: '/plays/tradition/26', id: '14'},
          // {name:'天津快乐十分',router:'/plays/tradition/1',id:'15'},//vc
          {name: '湖南快乐十分', router: '/plays/tradition/20', id: '16'},

        ],
        listData2: [
          {name: '香港彩', router: '/plays/tradition/1', id: '24'},
          {name: '重庆时时彩', router: '/plays/tradition/4', id: '2'},
          {name: '天津时时彩', router: '/plays/tradition/15', id: '4'},
          {name: '幸运飞艇', router: '/plays/tradition/3', id: '27'},
          {name: '广东快乐十分', router: '/plays/tradition/5', id: '6'},
          {name: '幸运农场', router: '/plays/tradition/6', id: '7'},
        ],
        showData: [],
        active: 'active1'
      }
    },
    methods: {
      setDatas () {
        if (this.$route.query.id == 2) {
          this.showData = this.listData2
          this.active = 'active2'
        } else {
          this.showData = this.listData
          this.active = 'active1'
        }
      }
    },
    mounted () {
      this.setDatas()
    },
    filters: {
      capitalize: function (value) {
        try {
          return `/static/huasheng/home/img1-${value}.png`
        } catch (err) {
          return `/static/img/lottery/ico/img1-1.png`
        }

      }
    },
    computed: {
      navActive () {
        return this.$store.state.mainState.navActive
      }
    },
    watch: {
      navActive () {
        this.setDatas()
      },
    }
  }
</script>

<style lang="less" scoped>
  .fishing_main {
    // background: url("../../../assets/images/qmcp/chess_bg.jpg") center top;
    .wrapper0 {
      background: #e6e9f0;
      // width: 1200px;
      height: 100%;
      // margin: auto;
    }

    .promotions_banner {
      height: 360px;

      &.active1 {
        background: url(/static/huasheng/home/lottery_banner.jpg) center no-repeat;
      }

      &.active2 {
        background: url(/static/huasheng/home/lotto_banner.jpg) center no-repeat;
      }
    }

    .live-video-contance {
      background: url(/static/huasheng/home/lottery-bg.jpg) center no-repeat;
      background-size: 100% 100%;
      overflow: hidden;
      padding: 20px 0px;

      .wrapper {
        width: 1200px;
        height: 100%;
        margin: auto;

        .lettry-box-list {
          width: 1200px;
          margin: auto;
          overflow: hidden;
          height: auto;

          ul {
            zoom: 1;
            overflow: hidden;

            li {
              width: 340px;
              height: 160px;
              float: left;
              margin: 0 0px 30px 0;
              border: 4px #2abeec solid;
              background-size: 100% 100%;
              transition: .2s all ease-in-out;
              margin-right: 78px;

              &:nth-child(3n) {
                margin-right: 0;
              }

              &:hover, &.active {
                border: 4px #fd8240 solid;
              }

              .letter-header-box {
                width: 100%;
                height: 155px;

                .letty-logo {
                  width: 165px;
                  height: 100%;
                  float: left;
                  text-align: center;
                  margin-top: 5px;
                  margin-left: 20px;

                  img {
                    width: 141px;
                    height: 141px;
                  }

                  transition: transform 0.5s;

                  &:hover {
                    transform: rotate(360deg);
                  }
                }

                .lettery-right-box {
                  width: auto;
                  height: 100%;
                  float: left;
                  margin-left: 20px;

                  h1 {
                    font-size: 20px;
                    color: #e6e6e6;
                    margin-top: 30px;
                    font-weight: 600;
                  }

                  p {
                    font-size: 14px;
                    color: #dadada;
                    margin: 15px 0;
                  }

                  .lettey-game-box {
                    width: 85px;
                    height: 30px;
                    border-radius: 5px;
                    background: #ec8291;
                    text-align: center;
                    line-height: 30px;
                    color: #fff;
                    font-size: 14px;

                    &:hover {
                      background: #fd8240;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }


</style>
