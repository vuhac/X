<template>
<div>
  <!-- <div id="hdpublic"></div>
  <div id="news" popup-news="" popup-page="register home">
    <div class="wrapper">
      <div class="marquee">
         <marquee v-if="lantern" align="middle" direction="left" loop="-1" scrollamount="3" onmouseout="this.start()"
                     onmouseover="this.stop()"
                     style="color: white; font-size: 14px; line-height: 34px;overflow: hidden;height: 34px;"
            >
              <span v-html="lantern"></span>
            </marquee>
      </div>
    </div>
  </div> -->
  <div class="game-wrap">
    <vp-Games></vp-Games>
  </div>
</div>

</template>
<script>
  import vpGames from '../../../public/games/xpj_index.vue'

  export default {
    data () {
      return {
        // lantern: ''
      }
    },
    methods: {
      // async getLantern () {
      //   let res = await this.$http.post(`${this.$HOST_NAME}/site/notice`, {
      //     type: 'lantern',
      //     desc_client_type: 'html'
      //   })
      //   if (res && res.code == 200) {
      //     if (!res.data.data.length) return false
      //     this.lantern = res.data.data[0] && res.data.data[0].description
      //   }
      //   // 参数： type: lantern 走马灯
      //   // 参数： type: popups 弹窗
      //   // 参数： type: notice 提示
      // },
    },
    created: function () {
    },
    mounted () {
    },
    watch: {},
    components: {
      vpGames
    }
  }
</script>

<style lang="less" scoped>
  // #hdpublic{
  //   margin-top: -148px;
  //   height: 431px;
  //   background: #1a2a56 url(/static/xpj/img/banner_dianzi.jpg) no-repeat center top;
  // }
  // #news {
  //   position: relative;
  //   z-index: 1;
  //   margin-top: -35px;
  //   height: 34px;
  //   border-bottom: 1px solid #263c78;
  //   background: url(/static/xpj/img/newbg.png);
  //   .wrapper {
  //     position: relative;
  //     width: 1040px;
  //     margin: 0 auto;
  //     padding: 0 0 0 95px;
  //     height: 34px;
  //     line-height: 34px;
  //     background: url(/static/xpj/img/news.png) no-repeat left center;

  //     .marquee {
  //       float: left;
  //       width: 945px;
  //       color: #FFFFFF;
  //       font-size: 10px;
  //     }
  //   }
  // }
  .game-wrap {
    padding-top: 20px;
    padding-bottom: 20px;
    background: #142044 url(/static/xpj/img/background.jpg) repeat-y center top;
  }
</style>
