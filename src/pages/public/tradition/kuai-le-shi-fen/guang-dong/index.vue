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
        <vp-liang-mian-pan ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                           v-if="navObj.model === '两面盘'"></vp-liang-mian-pan>
        <vp-one ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                v-if="navObj.model === '第一球'"></vp-one>
        <vp-two ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                v-if="navObj.model === '第二球'"></vp-two>
        <vp-three ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                  v-if="navObj.model === '第三球'"></vp-three>
        <vp-four ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                 v-if="navObj.model === '第四球'"></vp-four>
        <vp-five ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                 v-if="navObj.model === '第五球'"></vp-five>
        <vp-six ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                v-if="navObj.model === '第六球'"></vp-six>
        <vp-sevent ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                   v-if="navObj.model === '第七球'"></vp-sevent>
        <vp-eight ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                  v-if="navObj.model === '第八球'"></vp-eight>
        <vp-zong-he ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                    v-if="navObj.model === '总和'"></vp-zong-he>
        <vp-zu-he ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                  v-if="navObj.model === '快捷'"></vp-zu-he>

      </transition>
    </div>
    <!-- <vp-lottery-animate v-on:LotteryAnimateFc='LotteryAnimateFc' v-show="LotteryAnimateStaue"></vp-lottery-animate> -->
  </div>
</template>

<script>
  import vpLiangMianPan from './child/liang-mian-pan'
  import vpOne from './child/one'
  import vpTwo from './child/two'
  import vpThree from './child/three'
  import vpFour from './child/four'
  import vpFive from './child/five'
  import vpSix from './child/six'
  import vpSevent from './child/sevent'
  import vpEight from './child/eight'
  import vpZongHe from './child/zong-he'
  import vpZuHe from './child/zu-he'
  import data from '@/pages/public/tradition/data'

  export default {
    mixins: [data],
    data () {
      return {
        childNeedMess: {
          title: '广东快乐十分',
          issue: '',
          id: '',
          total: '42',
          plays: '传统玩法',
          code: '',
          series: ''
        },
        navObj: {
          model: '两面盘',
          list: [
            {title: '两面盘'},
            {title: '第一球'},
            {title: '第二球'},
            {title: '第三球'},
            {title: '第四球'},
            {title: '第五球'},
            {title: '第六球'},
            {title: '第七球'},
            {title: '第八球'},
            {title: '总和'},
            {title: '快捷'}
          ]
        },
        lotteryDatasShow: ['', '', '', '', '', '', '', ''],
        lotteryDatasShowLength: 8,
        lotteryDatasSave: [
          1, 2, 3, 4, 5, 6, 7, 8, 9,
          11, 12, 13, 14, 15, 16, 17, 18, 19, 20
        ],
      }
    },
    methods: {},
    components: {
      vpOne, vpTwo, vpThree, vpFour, vpFive, vpSix, vpSevent, vpEight,
      vpLiangMianPan,
      vpZongHe,
      vpZuHe
    }
  }
</script>

<style lang="less" scoped>
  @import '../../../../../assets/less/public/var.less';

  @lotteryHeight: 35px; //开奖号高度
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
                font-size: 20px;
                line-height: 35px;
              }
            }
          }
        }
      }
    }
  }
</style>
