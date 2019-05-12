<template>
  <div class="public-all-container">
    <Spin size="large" fix v-if="isLoading"></Spin>
    <div class="cp-container-wrap">
      <!-- <vp-activity :text="activityText"></vp-activity> -->
      <div class="cp-container-header">
        <span>热门彩票推荐</span>
      </div>
      <div class="cp-container-home-content">
        <div class="home-content-row">
          <div :key="indexInner" v-for="(itemInner,indexInner) in recommendList" class="home-content-item">
            <div class="box-top">
              <a href="#/2001" class="lottery-icon">
                <!-- <img :src="itemInner.lotteryName|capitalize"> -->
                <!-- <img :src="itemInner.lotteryId|capitalize"> -->
                <span :class="{
                  'logo_span_1':itemInner.lotteryId==1,
                  'logo_span_2':itemInner.lotteryId=='2',
                  'logo_span_3':itemInner.lotteryId=='3',
                  'logo_span_4':itemInner.lotteryId=='4',
                  'logo_span_5':itemInner.lotteryId=='5',
                  'logo_span_6':itemInner.lotteryId=='6',
                  'logo_span_7':itemInner.lotteryId=='7',
                  'logo_span_9':itemInner.lotteryId=='9',
                  'logo_span_10':itemInner.lotteryId=='10',
                  'logo_span_11':itemInner.lotteryId=='11',
                  'logo_span_12':itemInner.lotteryId=='12',
                  'logo_span_13':itemInner.lotteryId=='13',
                  'logo_span_14':itemInner.lotteryId=='14',
                  'logo_span_15':itemInner.lotteryId=='15',
                  'logo_span_16':itemInner.lotteryId=='16',
                  'logo_span_17':itemInner.lotteryId=='17',
                  'logo_span_18':itemInner.lotteryId=='18',
                  'logo_span_19':itemInner.lotteryId=='19',
                  'logo_span_20':itemInner.lotteryId=='20',
                  'logo_span_21':itemInner.lotteryId=='21',
                  'logo_span_22':itemInner.lotteryId=='22',
                  'logo_span_23':itemInner.lotteryId=='23',
                  'logo_span_24':itemInner.lotteryId=='24',
                  'logo_span_25':itemInner.lotteryId=='25',
                  'logo_span_26':itemInner.lotteryId=='26',
                  'logo_span_27':itemInner.lotteryId=='27',
                  'logo_span_28':itemInner.lotteryId=='28',
                  'logo_span_29':itemInner.lotteryId=='29',
                  'logo_span_2900':itemInner.lotteryId=='2900',
                  'logo_span_2901':itemInner.lotteryId=='2901',
                  'logo_span_2902':itemInner.lotteryId=='2902',
                  'logo_span_2903':itemInner.lotteryId=='2903',
                  'logo_span_2904':itemInner.lotteryId=='2904',
                  'logo_span_2905':itemInner.lotteryId=='2905',
                  'logo_span_2906':itemInner.lotteryId=='2906',
                  'logo_span_3630':itemInner.lotteryId=='3630',
                  'logo_span_3631':itemInner.lotteryId=='3631',
                  'logo_span_3632':itemInner.lotteryId=='3632',
                  'logo_span_10044':itemInner.lotteryId=='10044',
                  'logo_span_10045':itemInner.lotteryId=='10045',
                  }"></span>
              </a>
              <div class="hoverMaskBox">

              </div>
              <div class="box-top-right">
                <h3>{{itemInner.lotteryName}}</h3>
                <p>第
                  <span>&nbsp;{{itemInner.lotteryId==2||itemInner.lotteryId==10||itemInner.lotteryId==1?itemInner.issue:itemInner.issue.toString().substring(4,itemInner.issue.length)}}&nbsp;</span>
                  期</p>
                <vp-home-timer v-on:child-say="timeout" :timerDatas="itemInner"></vp-home-timer>
              </div>
            </div>
            <div class="box-mid">
              <div class="box-mid-left">开奖结果</div>
              <div v-if="itemInner.lastresultInfo" class="box-mid-right" :class="{
                              //六合彩
                              'home-middle-liuhe-xianggang':itemInner.lotteryId=='1'
                              ||itemInner.lotteryId=='18'||itemInner.lotteryId=='19',
                              //时时彩
                              'home-middle-shishicai-chongqing':itemInner.lotteryId=='4'
                              ||itemInner.lotteryId=='15'||itemInner.lotteryId=='16'
                              ||itemInner.lotteryId=='14'||itemInner.lotteryId=='17',
                              //pk10
                              'home-middle-pk-beijing':itemInner.lotteryId=='12'||itemInner.lotteryId=='3'
                              ||itemInner.lotteryId=='13'||itemInner.lotteryId=='2'||itemInner.lotteryId=='3630'||itemInner.lotteryId=='10044'||itemInner.lotteryId=='10045',
                              //pc蛋蛋
                              'home-middle-pc-dandan':itemInner.lotteryId=='10',
                              //江苏快三
                              'home-middle-kuai3-jiangsu':itemInner.lotteryId=='9'||itemInner.lotteryId=='26'
                              ||itemInner.lotteryId=='25'||itemInner.lotteryId=='27'||itemInner.lotteryId=='2900'||
                              itemInner.lotteryId=='2901'||itemInner.lotteryId=='2902'||itemInner.lotteryId=='2903'||
                              itemInner.lotteryId=='2904'||itemInner.lotteryId=='2905'||itemInner.lotteryId=='2906'||itemInner.lotteryId=='3631'||itemInner.lotteryId=='3632',
                              //=
                              'home-middle-11xuan5-guangdong':itemInner.lotteryId=='7'||itemInner.lotteryId=='21'
                              ||itemInner.lotteryId=='22'||itemInner.lotteryId=='23'||itemInner.lotteryId=='24',
                              //快乐十分
                              'home-middle-kuaile-guangdong':itemInner.lotteryId=='5'||itemInner.lotteryId=='6'
                              ||itemInner.lotteryId=='20',
                              //低频彩
                               'home-middle-dipin-3D':itemInner.lotteryId=='11'||itemInner.lotteryId=='28'
                              ||itemInner.lotteryId=='29'
                            }">
                                <span class="lotterySpan">
                                    <span class="ballOuside" :key="indexThir"
                                          v-for="(itemThir,indexThir) in itemInner.list">
                                        <span :class="{
                              'active1':itemThir.class=='kuai1',
                              'active2':itemThir.class=='kuai2',
                              'active3':itemThir.class=='kuai3',
                              'active4':itemThir.class=='kuai4',
                              'active5':itemThir.class=='kuai5',
                              'active6':itemThir.class=='kuai6'
                            }" :style="{'background':itemThir.color}">
                                            {{itemThir.class?'':itemThir.ball}}
                                        </span>
                                    </span>
                                </span>
              </div>
            </div>
            <div class="box-bot">
              <a :href="itemInner.trend" target="_blank" class="item">开奖结果</a>
              <a :href="itemInner.trend" target="_blank" class="item">开奖走势</a>
              <a v-if="itemInner.djs_next_kaipan || itemInner.djs_fengpan <0 &&itemInner.lotteryId == 1 "
                  class="item bg-primary" @click="goto(itemInner.router)">已封盘</a>
              <a v-else class="item bg-primary" @click="goto(itemInner.router)">立即投注</a>

              <!-- 立即投注 -->
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  // 要改的地方
  // 1、上面的名字，样式部分。
  // 2、自己写的数据对比部分。
  // 3、返回数据。
  // 4、核对ico部分
  // import vpActivity from '../components/activity/activity';
  import vpHomeTimer from './hall-time/timer'
  import UserService from '@/service/public/UserService.js'
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        isLoading: true,
        reloadTimeStaue: true,
        activityText: '★元宵节大礼★“十五团团吃汤圆，元宵圆圆像银元”元宵节大礼包已陆续派送，请留意帐号余额变化',
        lotteryDatas: [
          {
            title: 'row1',
            rowList: [
              //六合彩
              {
                'name': '香港六合彩',
                'lotyId': 1,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '快速六合彩',
                'lotyId': 18,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '5分六合彩',
                'lotyId': 19,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              //时时彩
              {
                'name': '重庆时时彩',
                'lotyId': 4,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '天津时时彩',
                'lotyId': 15,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '新疆时时彩',
                'lotyId': 14,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '快速时时彩',
                'lotyId': 16,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '3分时时彩',
                'lotyId': 17,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              //pk10
              {
                'name': '快速赛车',
                'lotyId': 12,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '3分赛车',
                'lotyId': 13,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '5分赛车',
                'lotyId': 3630,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '北京赛车',
                'lotyId': 2,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '幸运飞艇',
                'lotyId': 3,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
               {
                'name': '香港赛马',
                'lotyId': 10044,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '澳门赛马',
                'lotyId': 10045,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              //pc蛋蛋
              {
                'name': 'PC蛋蛋',
                'lotyId': 10,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}]
              },
              //快三
              {
                'name': '江苏快3',
                'lotyId': 9,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: '', class: ''}, {ball: '', class: ''}, {ball: '', class: ''}]
              },
              {
                'name': '安徽快3',
                'lotyId': 25,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: '', class: ''}, {ball: '', class: ''}, {ball: '', class: ''}]
              },
              {
                'name': '吉林快3',
                'lotyId': 26,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: '', class: ''}, {ball: '', class: ''}, {ball: '', class: ''}]
              },
              {
                'name': '快速快3',
                'lotyId': 27,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: '', class: ''}, {ball: '', class: ''}, {ball: '', class: ''}]
              },

              {
                'name': '北京快3',
                'lotyId': 2900,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: '', class: ''}, {ball: '', class: ''}, {ball: '', class: ''}]
              },
              {
                'name': '甘肃快3',
                'lotyId': 2901,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: '', class: ''}, {ball: '', class: ''}, {ball: '', class: ''}]
              },
              {
                'name': '广西快3',
                'lotyId': 2902,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: '', class: ''}, {ball: '', class: ''}, {ball: '', class: ''}]
              },
              {
                'name': '贵州快3',
                'lotyId': 2903,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: '', class: ''}, {ball: '', class: ''}, {ball: '', class: ''}]
              },
              {
                'name': '河北快3',
                'lotyId': 2904,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: '', class: ''}, {ball: '', class: ''}, {ball: '', class: ''}]
              },
              {
                'name': '湖北快3',
                'lotyId': 2905,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: '', class: ''}, {ball: '', class: ''}, {ball: '', class: ''}]
              },
              {
                'name': '上海快3',
                'lotyId': 2906,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: '', class: ''}, {ball: '', class: ''}, {ball: '', class: ''}]
              },
                {
                'name': '3分快3',
                'lotyId': 3631,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: '', class: ''}, {ball: '', class: ''}, {ball: '', class: ''}]
              },
                {
                'name': '5分快3',
                'lotyId': 3632,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: '', class: ''}, {ball: '', class: ''}, {ball: '', class: ''}]
              },
              //11选5
              {
                'name': '广东11选5',
                'lotyId': 7,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '江西11选5',
                'lotyId': 21,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '山东11选5',
                'lotyId': 23,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '快速11选5',
                'lotyId': 24,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '上海11选5',
                'lotyId': 22,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              //快乐十分
              {
                'name': '广东快乐十分',
                'lotyId': 5,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '湖南快乐十分',
                'lotyId': 20,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              //低频彩
              {
                'name': '幸运农场',
                'lotyId': 6,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '上海时时乐',
                'lotyId': 29,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '福彩3D',
                'lotyId': 11,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}]
              },
              {
                'name': '排列3',
                'lotyId': 28,
                'djs_fengpan': 0,
                'djs_next_kaipan': 0,
                'issue': '',
                'id': '',
                'list': [{ball: ''}, {ball: ''}, {ball: ''}]
              },
            ]
          }
        ],
        recommendList: ''
      }
    },
    methods: {
      async getDatas () {
        this.reloadTimeStaue = false
        let res = await this.$http.get(`${this.$HOST_NAME}/lottery/getIssues`, {})
        if (res && res.code == 200) {
          // res.data[0].fengpan = '2018-10-24 13:42:00'
          // res.data[0].djs_fengpan = 60
          this.recommendList = res.data;
          localStorage.setItem('fenleiData',JSON.stringify(this.recommendList));
          this.lotteryDatas.forEach((outItem, v1) => {
            outItem.rowList && outItem.rowList.forEach((inItem, v2) => {
              this.recommendList.forEach((matchItem, v3) => {
                if (inItem.lotyId == matchItem.lotteryId) {
                  // 分配球
                  matchItem.list = inItem.list
                  if (matchItem.lastresultInfo) {
                    let saveResult = matchItem.lastresultInfo.split(',')
                    matchItem.list.forEach((item4, v4) => {
                      item4.ball = saveResult[v4]
                    })
                  }
                  //快3特殊
                  if (matchItem.lotteryName.includes('快3')) {
                    matchItem.list.forEach((item4, v4) => {
                      item4.class = 'kuai' + (item4.ball)
                    })
                  }
                  this.classify(matchItem)
                }
              })
            })
          })
          this.isLoading = false
        } else {
          this.dNotify(res.message, 'error')
        }
        console.log(this.recommendList)
      },
      timeout () {
        setTimeout(() => {
          this.reloadTimeStaue = true
        }, 2000)
        if (this.reloadTimeStaue) {
          this.getDatas()
        }
      },
      goto(item){
        if(localStorage.token){
             if(localStorage.Public_User=='test'){
            this.dNotify("彩票暂无试玩，立即注册", "error")
            }else{
             var newitem=item.split("#")[1]
             this.$router.push({
              path: newitem
             })
          }
        }else{
           this.$store.commit('alert/showLogin', true)
           this.$store.commit('alert/setLoginTitle', '用户登录')
        }


      },
      classify (inItem) {
        inItem.trend = `#/trend/${inItem.lotteryId}`
        inItem.router = `#/plays/tradition/${inItem.lotteryId}`
        // 香港六合彩
        if (inItem.lotteryId == '1' || inItem.lotteryId == '18' || inItem.lotteryId == '19') {
          this.liuheCorBelong(inItem)
        }
        // 快速赛车
        if (inItem.lotteryId == '12' || inItem.lotteryId == '13' || inItem.lotteryId == '2' || inItem.lotteryId == '3'|| inItem.lotteryId == '3630'|| inItem.lotteryId == '10044'|| inItem.lotteryId == '10045') {
          this.pkCorBelong(inItem)
        }
      },
      // 六合彩球取色
      liuheCorBelong (inItem) {
        let red = [1, 7, 13, 19, 23, 29, 35, 45, 2, 8, 12, 18, 24, 30, 34, 40, 46]
        let blue = [3, 9, 15, 25, 31, 37, 41, 47, 4, 10, 14, 20, 26, 36, 42, 48]
        let green = [5, 11, 17, 21, 27, 33, 39, 43, 6, 16, 22, 28, 32, 38, 44, 49]
        inItem.list && inItem.list.forEach((item) => {
          if (red.includes(+item.ball)) {
            item.color = '#BC2A1B'
          }
          if (blue.includes(+item.ball)) {
            item.color = '#1C8CE2'
          }
          if (green.includes(+item.ball)) {
            item.color = '#49BB27'
          }
        })
      },
      //北京pk10取色
      pkCorBelong (inItem) {
        let lotteryDatas = [
          {ball: 1, color: '#E6DE0B'},
          {ball: 2, color: '#4B84F8'},
          {ball: 3, color: '#4C4C4C'},
          {ball: 4, color: '#D86F1A'},
          {ball: 5, color: '#80E7E6'},
          {ball: 6, color: '#4403F3'},
          {ball: 7, color: '#DFDFDF'},
          {ball: 8, color: '#D10108'},
          {ball: 9, color: '#650000'},
          {ball: 10, color: '#73C32E'},
        ]
        inItem.list && inItem.list.forEach((outItem) => {
          lotteryDatas.forEach((inItem) => {
            if (outItem.ball == inItem.ball) {
              outItem.color = inItem.color
            }
          })
        })
      },
      websoc () {
        if (this.websocketdata.type == 'user.lotteryOpen') {
         this.websocketdata.data.forEach((msgItem, index) => {
            this.recommendList.forEach((recoItem, i) => {
              if (msgItem.lotteryId == recoItem.lotteryId) {
                let saveResult = msgItem.lastresultInfo.split(',')
                recoItem.issue = msgItem.lastissue
                recoItem.list && recoItem.list.forEach((item4, v4) => {
                  item4.ball = saveResult[v4]
                })
                // console.log(recoItem)
              }
            })
          })
        }
      }
    },
    created: function () {
      this.getDatas()
      UserService.vpGetBasWebsoc.call(this)
    },
    mounted () {

    },
    computed:{
     websocketdata(){
      return this.$store.state.mainState.websoc
    }
    },
    watch:{
     websocketdata(){
          this.websoc();
     }
    },
    components: {
      // vpActivity,
      vpHomeTimer
    },
    filters: {
      capitalize: function (value) {
        try {
        //  return `/static/public/image/lottery/ico/vp-${ value.includes('赛车')? (value.includes('PK10') ? value : value + 'PK10'):value}.png`
         return `/static/public/image/lottery/nico/png/${value}.png`
        } catch (err) {
          return `/static/public/image/lottery/nico/png/438.png`
        }

      }
    },
    store
  }
</script>
<style lang="less" scoped>
    .lottery-icon {
      border-radius:0!important;
      span{
        display:block;
        width:100%;
        height:100%;
        background-size:100%;
        background-repeat: no-repeat;
      }
    }
    // 只是大厅的图片改了
    .generate-logos(29);
    .generate-logos(@n,@i:1) when(@i=<@n){
      .logo_span_@{i} {
        background:url("/static/public/image/lottery/nico/png/@{i}.png") center center;
        background-image:url("/static/public/image/lottery/nico/svg/@{i}.svg");
      }
      .generate-logos(@n, @i+1)
    }
    .logo_span_2900{
      background:url("/static/public/image/lottery/nico/png/2900.png") center center;
      background-image:url("/static/public/image/lottery/nico/svg/2900.svg");
    }
     .logo_span_2901{
      background:url("/static/public/image/lottery/nico/png/2901.png") center center;
      background-image:url("/static/public/image/lottery/nico/svg/2901.svg");
    }
    .logo_span_2902{
      background:url("/static/public/image/lottery/nico/png/2902.png") center center;
      background-image:url("/static/public/image/lottery/nico/svg/2902.svg");
    }
     .logo_span_2904{
      background:url("/static/public/image/lottery/nico/png/2904.png") center center;
      background-image:url("/static/public/image/lottery/nico/svg/2904.svg");
    }
    .logo_span_2903{
      background:url("/static/public/image/lottery/nico/png/2903.png") center center;
      background-image:url("/static/public/image/lottery/nico/svg/2903.svg");
    }
    .logo_span_2905{
      background:url("/static/public/image/lottery/nico/png/2905.png") center center;
      background-image:url("/static/public/image/lottery/nico/svg/2905.svg");
    }
    .logo_span_2906{
      background:url("/static/public/image/lottery/nico/png/2906.png") center center;
      background-image:url("/static/public/image/lottery/nico/svg/2906.svg");
    }
    .logo_span_3630{
      background:url("/static/public/image/lottery/nico/png/3630.png") center center;
      background-image:url("/static/public/image/lottery/nico/svg/3630.svg");
    }
     .logo_span_3631{
      background:url("/static/public/image/lottery/nico/png/3631.png") center center;
      background-image:url("/static/public/image/lottery/nico/svg/3631.svg");
    }
      .logo_span_3632{
      background:url("/static/public/image/lottery/nico/png/3632.png") center center;
      background-image:url("/static/public/image/lottery/nico/svg/3632.svg");
    }
    .logo_span_10044{
         background:url("/static/public/image/lottery/nico/png/10044.png") center center;
         background-image:url("/static/public/image/lottery/nico/svg/10044.svg");
    }
    .logo_span_10045{
         background:url("/static/public/image/lottery/nico/png/10045.png") center center;
         background-image:url("/static/public/image/lottery/nico/svg/10045.svg");
    }
</style>

