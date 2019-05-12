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
                <div class="number" :class="{
                                  'bgActive1':item==1,
                                  'bgActive2':item==2,
                                  'bgActive3':item==3,
                                  'bgActive4':item==4,
                                  'bgActive5':item==5,
                                  'bgActive6':item==6
                                  }" :key='index' v-for="(item,index) in lotteryDatasShow"></div>
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
        <vp-ku-zhi-xuan ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                        v-if="navObj.model === '直选'"></vp-ku-zhi-xuan>
        <vp-ku-dian-shu ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                        v-if="navObj.model === '点数'"></vp-ku-dian-shu>
        <vp-san-tong ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                     v-if="navObj.model === '三同'"></vp-san-tong>
        <vp-san-bu-tong ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                        v-if="navObj.model === '三不同'"></vp-san-bu-tong>
        <vp-er-tong ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                    v-if="navObj.model === '二同'"></vp-er-tong>
        <vp-er-bu-tong ref="content" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess"
                       v-if="navObj.model === '二不同'"></vp-er-bu-tong>
      </transition>
    </div>
    <!-- <vp-lottery-animate v-on:LotteryAnimateFc='LotteryAnimateFc' v-show="LotteryAnimateStaue"></vp-lottery-animate> -->
  </div>
</template>

<script>
  import vpKuDianShu from './child/dian-shu'
  import vpSanTong from './child/san-tong'
  import vpSanBuTong from './child/san-bu-tong'
  import vpErTong from './child/er-tong'
  import vpErBuTong from './child/er-bu-tong'
  import data from '@/pages/public/tradition/data'

  export default {
    mixins: [data],
    data () {
      return {
        childNeedMess: {
          title: '江苏快3',
          issue: '',
          id: '',
          total: '41',
          plays: '传统玩法',
          code: '',
          type: ''
        },
        navObj: {
          model: '点数',
          list: [
            {title: '点数'},
            {title: '三同'},
            {title: '三不同'},
            {title: '二同'},
            {title: '二不同'}
          ]
        },
        lotteryDatasShow: ['', '', ''],
        lotteryDatasShowLength: 3,
        lotteryDatasSave: [
          1, 2, 3, 4, 5, 6
        ],
      }
    },
    methods: {},
    components: {
      vpKuDianShu,
      vpSanTong,
      vpSanBuTong,
      vpErTong,
      vpErBuTong
    }
  }
</script>

<style lang="less" scoped>
  @import '../../../../../assets/less/public/var.less';

  @lotteryHeight: 48px; //开奖号高度

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
          // border-right: 1px solid @theme-border-color;
          .lottery-wrap {
            .openNumber {
              border-radius: 0;

              .number {
                width: @lotteryHeight;
                height: @lotteryHeight;
                background: #fff;
                line-height: 48px;

                &.bgActive1 {
                  background: url('/static/public/image/lottery/kuai3/ksone@3x.png') no-repeat center;
                  background-size: 80% 80%;
                }

                &.bgActive2 {
                  background: url('/static/public/image/lottery/kuai3/kstwo@3x.png') no-repeat center;
                  background-size: 80% 80%;
                }

                &.bgActive3 {
                  background: url('/static/public/image/lottery/kuai3/ksthree@3x.png') no-repeat center;
                  background-size: 80% 80%;
                }

                &.bgActive4 {
                  background: url('/static/public/image/lottery/kuai3/ksfour@3x.png') no-repeat center;
                  background-size: 80% 80%;
                }

                &.bgActive5 {
                  background: url('/static/public/image/lottery/kuai3/ksfive@3x.png') no-repeat center;
                  background-size: 80% 80%;
                }

                &.bgActive6 {
                  background: url('/static/public/image/lottery/kuai3/kssix@3x.png') no-repeat center;
                  background-size: 80% 80%;
                }
              }

            }
          }
        }
      }
    }
  }
</style>
