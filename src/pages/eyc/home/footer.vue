<template>
  <div class="footer">
    <div class="w1200">
      <p class="foot_title"></p>
      <p class="foot">Copyright © E赢彩 Reserved</p>
    </div>
    <div class="mobile_auto" v-show="show_mobile">
      <img alt="" src="/static/eyc/img/red_packet.gif" @click="$router.push({path:'/home/youhui'})">
      <span @click="show_mobile=false" class="clBtn"></span>
    </div>
    <!-- 分为封盘、报错、恭喜 -->
    <Modal :scrollable=true title="提示信息" v-model="tipDatas.bool" class-name="vp-all-tipModel-wrap" width="450">
      <div class="tipModel-box">
        <span>
          <i v-if="tipDatas.model=='warn'" class="iconfont icon-baojing"></i>
          <i v-if="tipDatas.model=='error'" class="iconfont icon-cuowu"></i>
          <i v-if="tipDatas.model=='success'" class="iconfont icon-chenggong"></i>
        </span>
        <span>{{tipDatas.title}}</span>
      </div>
    </Modal>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import {Modal} from 'iview'

  export default {
    data() {
      return {
        show_mobile: true,
        animatedStaues: false
      }
    },
    methods: {},
    computed: {
      // 是否提示信息
      tipDatas() {
        return this.$store.state.alert.tipModel
      }
    },
    mounted() {
      setTimeout(() => {
        this.animatedStaues = true
      }, 1500)
    },
    store
  }
</script>

<style lang="less" scoped>
  .footer {
    height: 117px;
    background: #4b4d51;

    .foot_title {
      height: 68px;
      background: url(/static/eyc/img/foot-logo.png) center no-repeat;
    }

    .foot {
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #fff;
    }

    .mobile_auto {
      position: fixed;
      z-index: 99999;
      left: 10px;
      bottom: 10px;
      cursor: pointer;

      .clBtn {
        position: absolute;
        right: 0;
        top: 0;
        width: 36px;
        height: 36px;
        cursor: pointer;
      }

      /*&:hover {*/
      /*transform: scale(1.1);*/
      /*}*/

      /*&.active {*/
      /*-webkit-animation: animateSub 2s linear infinite;*/
      /*-o-animation: animateSub 2s linear infinite;*/
      /*-moz-animation: animateSub 2s linear infinite;*/
      /*animation: animateSub 2s linear infinite;*/
      /*}*/

      @-webkit-keyframes animateSub {
        25% {
          transform: translateY(5px);
        }
        75% {
          transform: translateY(-5px);
        }
      }
      @-moz-keyframes animateSub {
        25% {
          transform: translateY(5px);
        }
        75% {
          transform: translateY(-5px);
        }
      }
      @-o-keyframes animateSub {
        25% {
          transform: translateY(5px);
        }
        75% {
          transform: translateY(-5px);
        }
      }
      @-ms-keyframes animateSub {
        25% {
          transform: translateY(5px);
        }
        75% {
          transform: translateY(-5px);
        }
      }
      @keyframes animateSub {
        25% {
          transform: translateY(5px);
        }
        75% {
          transform: translateY(-5px);
        }
      }
    }
  }
</style>
