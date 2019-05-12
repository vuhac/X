<template>
  <div class="container">
    <Spin size="large" fix v-if="isLoading"></Spin>
    <div class="cp-container-wrap">
      <vp-activity :text="activityText"></vp-activity>
      <div class=" lottery-header-item">
        <vp-lottery-logo v-on:plays-say="playsChoose" :childNeedMess=childNeedMess></vp-lottery-logo>
        <vp-timer :childNeedMess='childNeedMess' v-on:child-say="timeout" ref="timer"></vp-timer>
        <div class="item item3">

          <div class="lottery-wrap" v-if='ifshowLottery'>
            <vp-Prize-Header v-on:LotteryAnimateFc='LotteryAnimateFc' :ifAnimateBt='ifAnimateBt'
                             :lastIssue='lastIssue'></vp-Prize-Header>
            <div class="lottery-openNumber-center">
              <div class="openNumber">
                <div class="number" :class="'pkActive'+item" :key='index' v-for="(item,index) in lotteryDatasShow">
                  {{+item>9?item:'0'+item}}
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
        <vp-pk-lia-mian-pan ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                            v-if="navObj.model === '两面盘'"></vp-pk-lia-mian-pan>
        <vp-pk-pai-ming-one-to-ten ref="content" :oddsListPar="oddsListPar" :isopen="isopen"
                                   :childNeedMess="childNeedMess"
                                   v-if="navObj.model === '排名1~10'"></vp-pk-pai-ming-one-to-ten>
        <vp-pk-g-y-zu-he ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                         v-if="navObj.model === '冠、亚军组合'"></vp-pk-g-y-zu-he>
        <vp-pk-three-to-Six ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                            v-if="navObj.model === '三、四、五、六名'"></vp-pk-three-to-Six>
        <vp-pk-seven-to-ten ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                            v-if="navObj.model === '七、八、九、十名'"></vp-pk-seven-to-ten>
        <vp-pk-zu-he ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                     v-if="navObj.model === '快捷'"></vp-pk-zu-he>
      </transition>
    </div>
    <!-- <vp-lottery-animate v-on:LotteryAnimateFc='LotteryAnimateFc' v-show="LotteryAnimateStaue"></vp-lottery-animate> -->
  </div>
</template>

<script>

  import vpPkLiaMianPan from './child/liang-mian-pan'
  import vpPkPaiMingOneToTen from './child/pai-ming-one-to-ten'
  import vpPkGYZuHe from './child/g-y-zu-he'
  import vpPkThreeToSix from './child/three-to-six'
  import vpPkSevenToTen from './child/seven-to-ten'
  import vpPkZuHe from './child/zu-he'
  import data from '@/pages/public/tradition/data'

  export default {
    mixins: [data],
    data () {
      return {
        childNeedMess: {
          title: '北京赛车',
          issue: '',
          id: '',
          total: '44',
          plays: '传统玩法',
          code: '',
          series: ''
        },
        navObj: {
          model: '两面盘',
          list: [
            {title: '两面盘'},
            {title: '排名1~10'},
            {title: '冠、亚军组合'},
            {title: '三、四、五、六名'},
            {title: '七、八、九、十名'},
            {title: '快捷'}
          ]
        },
        lotteryDatasShow: ['', '', '', '', '', '', '', '', '', ''],
        lotteryDatasShowLength: 10,
        lotteryDatasSave: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      }
    },
    methods: {},
    components: {
      vpPkLiaMianPan,
      vpPkPaiMingOneToTen,
      vpPkGYZuHe,
      vpPkThreeToSix,
      vpPkSevenToTen,
      vpPkZuHe
    }
  }
</script>

<style lang="less" scoped>
  @import '../../../../../assets/less/public/var.less';

  @lotteryHeight: 30px; //开奖号高度

  .container {
    height: 100%;

    .cp-container-wrap {
      width: 100%;

      .lottery-header-item {
        .item {
          &.item3 {
            .lottery-wrap {
              .lottery-openNumber-center {
                padding: 5px 0;

                .openNumber {
                  .number {
                    width: @lotteryHeight;
                    height: @lotteryHeight;
                    font-size: 18px;
                    line-height: 30px;
                    border-radius: 0;

                    &.pkActive1 {
                      background: #E6DE0B;
                    }

                    &.pkActive2 {
                      background: #4B84F8;
                    }

                    &.pkActive3 {
                      background: #4C4C4C;
                    }

                    &.pkActive4 {
                      background: #D86F1A;
                    }

                    &.pkActive5 {
                      background: #80E7E6;
                    }

                    &.pkActive6 {
                      background: #4403F3;
                    }

                    &.pkActive7 {
                      background: #DFDFDF;
                    }

                    &.pkActive8 {
                      background: #D10108;
                    }

                    &.pkActive9 {
                      background: #650000;
                    }

                    &.pkActive10 {
                      background: #73C32E;
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
