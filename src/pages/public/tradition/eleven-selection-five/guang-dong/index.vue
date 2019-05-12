<template>
  <div class="container">
    <Spin size="large" fix v-if="isLoading"></Spin>
    <div class="cp-container-wrap">
      <vp-activity :text="activityText"></vp-activity>
      <div class="lottery-header-item">
        <vp-lottery-logo v-on:plays-say="playsChoose" :childNeedMess=childNeedMess></vp-lottery-logo>
        <vp-timer :childNeedMess='childNeedMess' v-on:child-say="timeout" ref="timer"></vp-timer>
        <div class="item item3">

          <div class="lottery-wrap" v-if='ifshowLottery'>
            <vp-Prize-Header v-on:LotteryAnimateFc='LotteryAnimateFc' :ifAnimateBt='ifAnimateBt'
                             :lastIssue='lastIssue'></vp-Prize-Header>
            <div class="lottery-openNumber-center">
              <div class="openNumber">
                <div class="number" :key='index' v-for="(item,index) in lotteryDatasShow">{{+item>9?item:'0'+item}}
                </div>
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
        <vp-ch-zhe-he ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                      v-if="navObj.model === '整合'"></vp-ch-zhe-he>
        <vp-ch-lia-mian-pan ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                            v-if="navObj.model === '两面盘'"></vp-ch-lia-mian-pan>
        <vp-ch-zu-he ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                     v-if="navObj.model === '快捷'"></vp-ch-zu-he>
      </transition>
    </div>
    <!-- <vp-lottery-animate v-on:LotteryAnimateFc='LotteryAnimateFc' v-show="LotteryAnimateStaue"></vp-lottery-animate> -->
  </div>
</template>

<script>
  import vpChZheHe from './child/zheng-he'
  import vpChLiaMianPan from './child/liang-mian-pan'
  import vpChZuHe from './child/zu-he'
  import data from '@/pages/public/tradition/data'

  export default {
    mixins: [data],
    data () {
      return {
        childNeedMess: {
          title: '广东11选5',
          issue: '',
          id: '',
          total: '42',
          plays: '传统玩法',
          code: '',
          series: ''
        },
        navObj: {
          model: '整合',
          list: [{title: '整合'}, {title: '两面盘'}, {title: '快捷'}]
        },
        lotteryDatasShow: ['', '', '', '', ''],
        lotteryDatasShowLength: 5,
        lotteryDatasSave: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      }
    },
    methods: {},
    components: {
      vpChZheHe,
      vpChLiaMianPan,
      vpChZuHe
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
