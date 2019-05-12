<template>
  <div>
    <div class="container">
      <Spin size="large" fix v-if="isLoading"></Spin>
      <div class="cp-container-wrap">
        <vp-activity :text="activityText"></vp-activity>
        <div class=" lottery-header-item">
          <vp-lottery-logo v-on:plays-say="playsChoose" :childNeedMess=childNeedMess></vp-lottery-logo>
          <vp-timer :childNeedMess='childNeedMess' v-on:child-say="timeout" ref="timer"
                    v-on:fengpan="fengpan"></vp-timer>
          <div class="item item3">

            <div class="lottery-wrap" v-if='ifshowLottery'>
              <vp-Prize-Header v-on:LotteryAnimateFc='LotteryAnimateFc' :ifAnimateBt='ifAnimateBt'
                               :lastIssue='lastIssue'></vp-Prize-Header>
              <div class="lottery-openNumber-center">
                <div class="openNumber">
                  <div :class="{'liuActiveRed':
                                +item === 1||+item === 7||
                                +item === 13||+item === 19||
                                +item === 23||+item === 29 ||
                                +item === 35||+item === 45||
                                +item === 2||+item === 8 ||
                                +item === 12 ||+item === 18||
                                +item === 24||+item === 30||
                                +item === 34||+item === 40||
                                +item === 46,
                                'liuActiveBlue':
                                +item === 3||+item === 9||
                                +item === 15||+item === 25||
                                +item === 31||+item === 37 ||
                                +item === 41||+item === 47||
                                +item === 4||+item === 10||
                                +item === 14||+item === 20||
                                +item === 26||+item === 36||
                                +item === 42||+item === 48,
                                'liuActiveGreen':
                                +item === 5||+item === 11||
                                +item === 17||+item === 21||
                                +item === 27||+item === 33||
                                +item === 39||+item === 43||
                                +item === 6||+item === 16||
                                +item === 22||+item === 28||
                                +item === 32||+item === 38||
                                +item === 44||+item === 49||
                                item === '?'
                                }" class="number" :key='index' v-for="(item,index) in lotteryDatasShow">
                    {{+item>9?item:'0'+item}}
                  </div>
                </div>
              </div>

              <!-- v-if="ifAnimateBt" -->
              <div class="symbol">
                <div :key=index v-for="(item,index) in savelotteryIndex" class="text">{{item||''}}</div>
              </div>
            </div>

          </div>
        </div>
        <vp-navigation :navObj="navObj"></vp-navigation>
        <transition name="fade" mode="out-in">
          <vp-xg-te-ma :animalList="animalList"
                       :oddsListPar="oddsListPar"
                       :isopen="isopen"
                       :childNeedMess="childNeedMess"
                       v-if="navObj.model === '特码'"></vp-xg-te-ma>

          <vp-xg-zheng-ma :animalList="animalList"
                          :oddsListPar="oddsListPar"
                          :isopen="isopen"
                          :childNeedMess="childNeedMess"
                          v-if="navObj.model === '正码'"></vp-xg-zheng-ma>

          <vp-xg-zheng-te-ma :animalList="animalList"
                             :oddsListPar="oddsListPar"
                             :isopen="isopen"
                             :childNeedMess="childNeedMess"
                             v-if="navObj.model === '正特码'"></vp-xg-zheng-te-ma>

          <vp-xg-zheng-ma-one-to-six :animalList="animalList"
                                     :oddsListPar="oddsListPar"
                                     :isopen="isopen"
                                     :childNeedMess="childNeedMess"
                                     v-if="navObj.model === '正码1-6'"></vp-xg-zheng-ma-one-to-six>

          <!-- <vp-xg-guo-guan :animalList="animalList" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess" v-if="navObj.model === '过关'"></vp-xg-guo-guan>         -->

          <vp-xg-lian-ma :animalList="animalList"
                         :oddsListPar="oddsListPar"
                         :isopen="isopen"
                         :childNeedMess="childNeedMess"
                         v-if="navObj.model === '连码'"></vp-xg-lian-ma>

          <vp-xg-ban-bo :animalList="animalList"
                        :oddsListPar="oddsListPar"
                        :isopen="isopen"
                        :childNeedMess="childNeedMess"
                        v-if="navObj.model === '半波'"></vp-xg-ban-bo>

          <vp-xg-yi-xiao-and-wei-shu :animalList="animalList"
                                     :oddsListPar="oddsListPar"
                                     :isopen="isopen"
                                     :childNeedMess="childNeedMess"
                                     v-if="navObj.model === '一肖/尾数'"></vp-xg-yi-xiao-and-wei-shu>

          <vp-xg-te-ma-sheng-xiao :animalList="animalList"
                                  :oddsListPar="oddsListPar"
                                  :isopen="isopen"
                                  :childNeedMess="childNeedMess"
                                  v-if="navObj.model === '特码生肖'"></vp-xg-te-ma-sheng-xiao>

          <vp-xg-he-xiao :animalList="animalList"
                         :oddsListPar="oddsListPar"
                         :isopen="isopen"
                         :childNeedMess="childNeedMess"
                         v-if="navObj.model === '合肖'"></vp-xg-he-xiao>

          <vp-xg-sheng-xiao-lian :animalList="animalList"
                                 :oddsListPar="oddsListPar"
                                 :isopen="isopen"
                                 :childNeedMess="childNeedMess"
                                 v-if="navObj.model === '生肖连'"></vp-xg-sheng-xiao-lian>

          <vp-xg-wei-shu-lian :animalList="animalList"
                              :oddsListPar="oddsListPar"
                              :isopen="isopen"
                              :childNeedMess="childNeedMess"
                              v-if="navObj.model === '尾数连'"></vp-xg-wei-shu-lian>

          <!-- <vp-se-bo :animalList="animalList" :oddsListPar="oddsListPar" :isopen="isopen" :childNeedMess="childNeedMess" v-if="navObj.model === '色波'"></vp-se-bo>    -->

          <vp-quan-bu-zhong :animalList="animalList"
                            :oddsListPar="oddsListPar"
                            :isopen="isopen"
                            :childNeedMess="childNeedMess"
                            v-if="navObj.model === '全不中'"></vp-quan-bu-zhong>
        </transition>
      </div>
    </div>
    <!-- <vp-lottery-animate v-on:LotteryAnimateFc='LotteryAnimateFc' v-show="LotteryAnimateStaue"></vp-lottery-animate> -->
  </div>

</template>

<script>
  import vpXgTeMa from './child/te-ma'
  import vpXgZhengMa from './child/zheng-ma'
  import vpXgZhengTeMa from './child/zheng-te-ma'
  import vpXgZhengMaOneToSix from './child/one-to-six'
  // import vpXgGuoGuan from './child/guo-guan';
  import vpXgLianMa from './child/lian-ma'
  import vpXgBanBo from './child/ban-bo'
  import vpXgYiXiaoAndWeiShu from './child/yi-xiao-and-wei-shu'
  import vpXgTeMaShengXiao from './child/te-ma-sheng-xiao.vue'
  import vpXgHeXiao from './child/he-xiao'
  import vpXgShengXiaoLian from './child/sheng-xiao-lian.vue'
  import vpXgWeiShuLian from './child/wei-shu-lian.vue'
  import vpSeBo from './child/se-bo.vue'
  import vpQuanBuZhong from './child/quan-bu-zhong'
  import data from '@/pages/public/tradition/data'
  import store from '@/vuex/store'

  export default {
    mixins: [data],
    data () {
      return {
        childNeedMess: {
          title: '香港六合彩',
          issue: '',
          id: '',
          total: '153',
          plays: '传统玩法',
          code: '',
          series: ''
        },
        navObj: {
          model: '特码',
          list: [
            {title: '特码'},
            {title: '正码'},
            {title: '正特码'},
            {title: '正码1-6'},
            //  {title:"过关"},
            {title: '连码'},
            {title: '半波'},
            {title: '一肖/尾数'},
            {title: '特码生肖'},
            {title: '合肖'},
            {title: '生肖连'},
            {title: '尾数连'},
            //  {title:"色波"},
            {title: '全不中'}
          ]
        },
        animalList: {},
        lotteryDatasShow: ['', '', '', '', '', '', ''],
        lotteryDatasShowLength: 7,
        lotteryDatasSave: [
          1, 2, 3, 4, 5, 6, 7, 8, 9,
          10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
          30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
          40, 41, 42, 43, 44, 45, 46, 47, 48, 49
        ],
      }
    },
    methods: {
      // 分配动物号(没用)
      /*belongNum (v) {
        if (this.animalList['鼠'].includes(this.trueAward[v])) {
          this.lotteryIndex[v].animal = '鼠'
        }
        if (this.animalList['兔'].includes(this.trueAward[v])) {
          this.lotteryIndex[v].animal = '兔'
        }
        if (this.animalList['牛'].includes(this.trueAward[v])) {
          this.lotteryIndex[v].animal = '牛'
        }
        if (this.animalList['狗'].includes(this.trueAward[v])) {
          this.lotteryIndex[v].animal = '狗'
        }
        if (this.animalList['猪'].includes(this.trueAward[v])) {
          this.lotteryIndex[v].animal = '猪'
        }
        if (this.animalList['猴'].includes(this.trueAward[v])) {
          this.lotteryIndex[v].animal = '猴'
        }
        if (this.animalList['羊'].includes(this.trueAward[v])) {
          this.lotteryIndex[v].animal = '羊'
        }
        if (this.animalList['虎'].includes(this.trueAward[v])) {
          this.lotteryIndex[v].animal = '虎'
        }
        if (this.animalList['蛇'].includes(this.trueAward[v])) {
          this.lotteryIndex[v].animal = '蛇'
        }
        if (this.animalList['马'].includes(this.trueAward[v])) {
          this.lotteryIndex[v].animal = '马'
        }
        if (this.animalList['鸡'].includes(this.trueAward[v])) {
          this.lotteryIndex[v].animal = '鸡'
        }
        if (this.animalList['龙'].includes(this.trueAward[v])) {
          this.lotteryIndex[v].animal = '龙'
        }
      },*/
      //获取生肖号码
      async getAnimal () {
        let res = await this.$http.get(`${this.$HOST_NAME}/lottery/getZodiac`, {})
        if (res && res.code === 200) {
          this.animalList = res.data
        } else {
          this.dNotify(res.message, 'error')
        }
      },
      fengpan () {
        this.isopen = false
      }
    },

    components: {
      vpXgTeMa,
      vpXgZhengMa,
      vpXgZhengTeMa,
      vpXgZhengMaOneToSix,
      vpXgYiXiaoAndWeiShu,
      // vpXgGuoGuan,
      vpXgLianMa,
      vpXgBanBo,
      vpXgTeMaShengXiao,
      vpXgHeXiao,
      vpXgShengXiaoLian,
      vpXgWeiShuLian,
      vpQuanBuZhong,
      vpSeBo
    },
    store
  }
</script>

<style lang="less" scoped>
  @import '../../../../../assets/less/public/var.less';

  @lotteryHeight: 38px; //开奖号高度9310

  .container {
    height: 100%;

    .cp-container-wrap {
      width: 100%;

      .lottery-header-item {
        .item3 {
          .lottery-wrap {
            .openNumber {
              position: relative;
              margin-left: -5px;

              .add {
                position: absolute;
                font-size: 30px;
                color: #666;
                right: 49px;
                top: 5px;
              }

              .number {
                width: 38px;
                height: 38px;
                line-height: 38px;

                &.liuActiveRed {
                  background: #BC2A1B;
                }

                &.liuActiveBlue {
                  background: #1C8CE2;
                }

                &.liuActiveGreen {
                  background: #49BB27;
                }

                &:nth-child(6) {
                  margin-right: 30px;
                }
              }
            }

            .symbol {
              .text {
                width: 33px;
                height: 28px;
                border-radius: 2px;
                line-height: 28px;
                margin-right: 8px;

                &:nth-child(6) {
                  margin-right: 36px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
