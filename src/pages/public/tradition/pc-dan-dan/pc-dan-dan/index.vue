<template>
  <div class="container">
    <Spin size="large" fix v-if="isLoading"></Spin>
    <div class="cp-container-wrap">
      <vp-activity :text="activityText"></vp-activity>
      <div class=" lottery-header-item">
        <vp-lottery-logo v-on:plays-say="playsChoose" :childNeedMess="childNeedMess"></vp-lottery-logo>
        <vp-timer :childNeedMess='childNeedMess' v-on:child-say="timeout" ref="timer"></vp-timer>
        <div class="item item3">
          <div class="lottery-wrap" v-if='ifshowLottery'>
            <vp-Prize-Header v-on:LotteryAnimateFc='LotteryAnimateFc' :ifAnimateBt='ifAnimateBt'
                             :lastIssue='lastIssue'></vp-Prize-Header>
            <div class="lottery-openNumber-center">
              <div class="openNumber">
                <div class="number" :key='index' v-for="(item,index) in lotteryDatasShow">{{item}}</div>
              </div>
            </div>

            <div class="symbol">
              <div :class="{'active':!+item&&item.length>1}" :key='index' v-for="(item,index) in savelotteryIndex"
                   class="text">{{item||''}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <vp-navigation v-on:tsferTrend=tsferTrend :navObj="navObj"></vp-navigation>
      <transition name="fade" mode="out-in">
        <vp-pc-zhu-shi-pan ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                           v-if="navObj.model === '主势盘'"></vp-pc-zhu-shi-pan>
      </transition>
    </div>
    <!-- <vp-lottery-animate v-on:LotteryAnimateFc='LotteryAnimateFc' v-show="LotteryAnimateStaue"></vp-lottery-animate> -->
  </div>
</template>

<script>

  import vpPcZhuShiPan from './child/zhu-shi-pan'
  import data from '@/pages/public/tradition/data'

  export default {
    mixins: [data],
    data () {
      return {
        childNeedMess: {
          title: 'PC蛋蛋',
          issue: '',
          id: '10',
          total: '179',
          plays: '传统玩法',
          code: '',
          series: ''
        },
        navObj: {
          model: '主势盘',
          list: [
            {title: '主势盘'}
          ]
        },
        lotteryDatasShow: ['', '', ''],
        lotteryDatasShowLength: 3,
        lotteryDatasSave: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
          10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27
        ],
      }
    },
    methods: {},
    components: {
      vpPcZhuShiPan
    }
  }
</script>

<style lang="less" scoped>
  @import '../../../../../assets/less/public/var.less';

  @lotteryHeight: 40px; //开奖号高度

  .container {
    height: 100%;

    .cp-container-wrap {
      width: 100%;

      .lottery-header-item {
        .item3 {
          .lottery-wrap {
            .openNumber {
              .number {
                width: @lotteryHeight;
                height: @lotteryHeight;
                line-height: @lotteryHeight;
              }
            }
          }
        }
      }
    }
  }
</style>
