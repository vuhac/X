<template>
  <div class="container">
    <Spin size="large" fix v-if="isLoading"></Spin>
    <div class="cp-container-wrap">
      <vp-activity :text="activityText"></vp-activity>
      <div class="lottery-header-item">
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

            <div class="symbol" v-if="ifAnimateBt">
              <div :class="{'active':!+item&&item.length>1}" :key='index' v-for="(item,index) in savelotteryIndex"
                   class="text">{{item||''}}
              </div>
            </div>
          </div>

        </div>
      </div>
      <vp-navigation v-on:tsferTrend=tsferTrend :navObj="navObj"></vp-navigation>
      <transition name="fade" mode="out-in">
        <vp-fu-one-to-three ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                            v-if="navObj.model === '1~3球'"></vp-fu-one-to-three>
        <vp-ch-zhe-he ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                      v-if="navObj.model === '整合'"></vp-ch-zhe-he>
        <vp-ch-zhu-shi ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                       v-if="navObj.model === '主势盘'"></vp-ch-zhu-shi>
        <vp-ch-yi-zi-zu-he ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                           v-if="navObj.model === '一字组合'"></vp-ch-yi-zi-zu-he>
        <vp-ch-er-zi-zu-he ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                           v-if="navObj.model === '二字组合'"></vp-ch-er-zi-zu-he>
        <vp-ch-san-zi-zu-he ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                            v-if="navObj.model === '三字组合'"></vp-ch-san-zi-zu-he>
        <vp-ch-er-zi-ding-wei ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                              v-if="navObj.model === '二字定位'"></vp-ch-er-zi-ding-wei>
        <vp-ch-san-zi-ding-wei ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                               v-if="navObj.model === '三字定位'"></vp-ch-san-zi-ding-wei>
        <vp-ch-er-zi-he-shu ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                            v-if="navObj.model === '二字和数'"></vp-ch-er-zi-he-shu>
        <vp-ch-san-zi-he-shu ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                             v-if="navObj.model === '三字和数'"></vp-ch-san-zi-he-shu>
      </transition>
    </div>
    <!-- <vp-lottery-animate v-on:LotteryAnimateFc='LotteryAnimateFc' v-show="LotteryAnimateStaue"></vp-lottery-animate> -->
  </div>
</template>

<script>
  import vpFuOneToThree from './child/one-to-three'
  import vpChZheHe from './child/zheng-he'
  import vpChZhuShi from './child/zhu-shi'
  import vpChYiZiZuHe from './child/yi-zi-zu-he'
  import vpChErZiZuHe from './child/er-zi-zu-he'
  import vpChSanZiZuHe from './child/san-zi-zu-he'
  import vpChErZiDingWei from './child/er-zi-ding-wei'
  import vpChSanZiDingWei from './child/san-zi-ding-wei'
  import vpChErZiHeShu from './child/er-zi-he-shu'
  import vpChSanZiHeShu from './child/san-zi-he-shu'

  import data from '@/pages/public/tradition/data'

  export default {
    mixins: [data],
    data () {
      return {
        childNeedMess: {
          title: '福彩3D',
          issue: '',
          id: '',
          total: '173',
          plays: '传统玩法',
          code: '',
          series: ''
        },
        navObj: {
          model: '1~3球',
          list: [
            {title: '1~3球'},
            {title: '整合'},
            {title: '主势盘'},
            {title: '一字组合'},
            {title: '二字组合'},
            {title: '三字组合'},
            {title: '二字定位'},
            {title: '三字定位'},
            {title: '二字和数'},
            {title: '三字和数'}
          ]
        },
        lotteryDatasShow: ['', '', ''],
        lotteryDatasShowLength: 3,
        lotteryDatasSave: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      }
    },
    methods: {},
    components: {
      vpFuOneToThree,
      vpChZheHe,
      vpChZhuShi,
      vpChYiZiZuHe,
      vpChErZiZuHe,
      vpChSanZiZuHe,
      vpChErZiDingWei,
      vpChSanZiDingWei,
      vpChErZiHeShu,
      vpChSanZiHeShu
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
        .item {
          float: left;
        }

        .item3 {
          float: left;

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
