<template>
  <div>
    <div class="vp-lottery-trend-content">
      <Spin size="large" fix v-if="isLoading"></Spin>
      <div ref="contentWrap" style="display:none;">
        <div class="trend-toggle">
          <span class="name">{{childNeed&&childNeed.name}}</span>
          <span class="issue">
            <span :class="{'active':issueDatas.name==='最近20期'}"
                  @click="issueFc('最近20期',20)"
                  class="periodbtn">最近20期</span>

            <span :class="{'active':issueDatas.name==='最近30期'}"
                  @click="issueFc('最近30期',30)"
                  class="periodbtn">最近30期</span>

            <span :class="{'active':issueDatas.name==='最近50期'}"
                  @click="issueFc('最近50期',50)"
                  class="periodbtn">最近50期</span>

            <span :class="{'active':issueDatas.name==='最近100期'}"
                  @click="issueFc('最近100期',100)"
                  class="periodbtn">最近100期</span>
          </span>
        </div>

        <div class="trend-table-wrapper">
          <div class="trend-table-inner">
            <div class="trend-left-box">
              <div class="trend-left-box-top">
                <!-- 期号 -->
                <div class="td-issue">
                  <div class="left-title">期号</div>
                  <div :key="index" v-for="(item,index) in newDatas.leftDatas.newIssue" class="issue-number">
                    {{lotteryId===2||lotteryId===10?item:item.toString().substring(4,item.length)}}
                  </div>
                </div>
                <!-- 期号 -->
                <div class="td-issue">
                  <div class="left-title">开奖时间</div>
                  <div :key="index" v-for="(item,index) in newDatas.leftDatas.newTime" class="issue-number">{{item}}
                  </div>
                </div>
                <!-- 开奖号 -->
                <div class="td-lottery-number">
                  <div class="left-title">开奖号</div>
                  <div class="td-lottery-number-item">
                    <div :key="outIndex" v-for="(outItem,outIndex) in newDatas.leftDatas.newResult"
                         class="lottery-number">
                      <div :key="intIndex" v-for="(intItem,intIndex) in outItem" class="left-td-ball">
                        <label :class="{
                                                blue:+intItem===3||+intItem===9||+intItem===15||
                                                +intItem===25||+intItem===31||+intItem===37||
                                                +intItem===41||+intItem===47||+intItem===4||
                                                +intItem===10||+intItem===14||+intItem===20||
                                                +intItem===26||+intItem===36||+intItem===42||
                                                +intItem===48,
                                                green:+intItem===5||+intItem===11||+intItem===17||
                                                +intItem===21||+intItem===27||+intItem===33||
                                                +intItem===39||+intItem===43||+intItem===6||
                                                +intItem===16||+intItem===22||+intItem===28||
                                                +intItem===32||+intItem===38||+intItem===44||
                                                +intItem===49,
                                                red:+intItem===1||+intItem===7||+intItem===13||
                                                +intItem===19||+intItem===23||+intItem===29||
                                                +intItem===35||+intItem===45||+intItem===2||
                                                +intItem===8||+intItem===12||+intItem===18||
                                                +intItem===24||+intItem===30||+intItem===34||
                                                +intItem===40||+intItem===46
                                            }">
                          <span>{{intItem}}</span>
                        </label>
                        <!-- {{intItem.animal}} -->
                      </div>
                    </div>
                  </div>
                  <!-- <div style="height:800px;width:150px;background:lightblue;"></div>                   -->
                </div>
                <!-- 时时彩-->
                <div class="td-lottery-wide">
                  <div class="left-title">
                    <div :key="index" v-for="(item,index) in titleLeft" class="td-lottery-wide-title">{{item}}</div>
                  </div>
                  <div class="wide-wrap" :key="outIndex" v-for="(outItem,outIndex) in newDatas.leftDatas.newSingle">
                    <div class="wide-inner-wrap">
                      <div :class="{
                                        'active':intItem==='大'||intItem==='双'||intItem==='上'||intItem==='奇',
                                        'active2':intItem==='总尾大',
                                        'active3':intItem==='和',
                                        'blue':intItem==='蓝',
                                        'green':intItem==='绿',
                                        'red':intItem==='红'
                                    }" :style="{'width':intItem.length>=3?88+'px':60+'px'}" :key="intIndex"
                           v-for="(intItem,intIndex) in outItem" class="item">{{intItem}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // 走势图计算公式：
  // width:(8-1）*40  后面的位置减前面位置乘以每个宽度。
  // height:80,固定不变，如果不是不能画。
  // left:（n-1）*40+0.5*40  当前位置减1加上一半 。
  // top:（n-1）*40+0.5*40  当前行数减1加上一半 。
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        isLoading: false,
        type: '', //彩票类型
        periodsNum: 20,
        titleLeft: [
          '色波',
          // "五行",
          '单双',
          '合单双',
          '大小',
          '合大小',
          '头数',
          '尾数',
          '家禽野兽',
          '总和',
          '总和大小',
          '总和单双'
        ],
        canvas: {
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          color: '#029BAE'
        },
        // 折线显示
        checkDatas: [
          {name: '折线显示', staue: true},
          {name: '遗漏显示', staue: true}
        ],
        // 选择期数
        issueDatas: {
          name: '最近20期'
        },
        // 画图数据
        drawDeclList: [],
        //所以数据
        allDatas: {},
        newDatas: {
          leftDatas: {
            //左边数据
            newIssue: '',
            newTime: '',
            newResult: '',
            newSingle: ''
          }
        }
      }
    },
    methods: {
      // 处理手动点击可不要
      drawPicFc (thirdItem, outInder, intInder, thirdIndex) {
        return false //暂时用不着
        // // 选中取消
        // this.drawDeclList[outInder].list[intInder].ballList.forEach((item) => {
        //   item.staue = false
        // })
        // thirdItem.staue = true
        // this.drawCanvasPic() //点击重画
      },
      //操作
      drawCanvasPic () {
        this.drawDeclList.forEach((_outItem, _v) => {
          //选择配色方案
          if (_v % 2 === 0) {
            this.canvas.color = '#029BAE'
          } else {
            this.canvas.color = '#FF5151'
          }
          // 定义变量
          let canvasList = this.$refs['trendCanvas' + (_v + 1)]
          let refBallList = this.$refs['postBall' + (_v + 1)]
          // console.log(canvasList)
          // console.log(refBallList)
          // console.log('打印canvasList[4]'+canvasList[4])
          // console.log('打印canvasList[4]'+refBallList[4])
          let drawPicList = []
          let itemH = 30
          let itemW = 30
          //可以不写,表示从1开始
          canvasList[0].style.display = 'none'
          // 定位位置
          _outItem.list.forEach((outItem, v1) => {
            outItem.ballList.forEach((intItem, v2) => {
              // 加行，从3开始,除去头部
              intItem.row = v1 + 3
              //加位置，从1开始
              intItem.posit = v2 + 1
              if (intItem.staue) {
                drawPicList.push(intItem)
              }
            })
          })
          drawPicList.forEach((item, v) => {
            let minus = ''
            if (v > 0) {
              minus = drawPicList[v].posit - drawPicList[v - 1].posit
              // 画布宽度
              this.canvas.width = Math.abs(minus) * itemW
              // 画布高度
              this.canvas.height = itemH
              //赋值画布高宽
              canvasList[v].width = this.canvas.width
              canvasList[v].height = this.canvas.height

              // 自身位置计算top：（行数-1）乘以间隔加高度
              // 自身位置计算left：（当前位置-1）乘以高度
              if (minus > 0) {
                //当前位置加减去间隔+0.5高度，画布top
                this.canvas.top = (item.row - 1) * itemH - itemH * 0.5
                canvasList[v].style.top = this.canvas.top + 'px'
                //当前位置减,画布left
                this.canvas.left =
                  (item.posit - 1) * itemW - this.canvas.width + 0.5 * itemW
                canvasList[v].style.left = this.canvas.left + 'px'
                let ctx = canvasList[v].getContext('2d')
                ctx.beginPath()
                ctx.strokeStyle = this.canvas.color
                ctx.lineWidth = 2
                ctx.moveTo(0, 0)
                ctx.lineTo(this.canvas.width, this.canvas.height)
                ctx.stroke()
              }
              if (minus < 0) {
                //当前位置减去间隔+0.5高度，画布top
                this.canvas.top = (item.row - 1) * itemH - itemH * 0.5
                canvasList[v].style.top = this.canvas.top + 'px'
                //当前位置+0.5高度,画布left
                this.canvas.left = (item.posit - 1) * itemW + itemW * 0.5
                canvasList[v].style.left = this.canvas.left + 'px'
                let ctx = canvasList[v].getContext('2d')
                ctx.beginPath()
                ctx.strokeStyle = this.canvas.color
                ctx.lineWidth = 2
                ctx.moveTo(0, this.canvas.height)
                ctx.lineTo(this.canvas.width, 0)
                ctx.stroke()
              }
              if (minus === 0) {
                this.canvas.height = 30
                this.canvas.width = 30
                canvasList[v].width = this.canvas.width
                canvasList[v].height = this.canvas.height
                //当前位置加减去间隔+0.5高度，画布top
                this.canvas.top = item.row * itemH - (itemH + itemH * 0.5)
                canvasList[v].style.top = this.canvas.top + 'px'
                //当前位置减,画布left
                this.canvas.left = (item.posit - 1) * itemW
                canvasList[v].style.left = this.canvas.left + 'px'
                let ctx = canvasList[v].getContext('2d')
                // canvasList[v].style.background='red';
                ctx.beginPath()
                ctx.strokeStyle = this.canvas.color
                ctx.lineWidth = 2
                ctx.moveTo(this.canvas.width * 0.5, 0)
                ctx.lineTo(this.canvas.width * 0.5, this.canvas.height)
                ctx.stroke()
              }
            }
          })
          // 计算球的位置
          drawPicList.forEach((item, v) => {
            // console.log(item.posit)
            // console.log(item.row)
            //加4因为总大30，里面22，padding:4
            refBallList[v].style.top = itemH * (item.row - 1) + 4 + 'px'
            refBallList[v].style.left = itemW * (item.posit - 1) + 4 + 'px'
          })
        })
      },
      // 折线显示按钮
      checkFc (item) {
        item.staue = !item.staue
      },
      // 选择期数
      issueFc (data, num) {
        this.issueDatas.name = data
        this.periodsNum = num
        this.getHisDatas()
      },
      // 获取数据
      async getHisDatas () {
        this.isLoading = true
        let idArr = this.$route.fullPath.split('/')
        this.lotteryId =
          idArr.filter(item => Number.isInteger(item * 1) && item !== '')[0] * 1
        if(this.$HOST_NAME=='/frontend/test') this.$HOST_NAME='/frontend/v1'
        let res = await this.$http.post(`${this.$HOST_NAME}/lottery/trend`, {
          lotteryId: this.lotteryId,
          pageSize: this.periodsNum
        })
        if (res && res.code === 200) {
          if (!res.data.data.list) {
            alert('暂无数据')
            return false
          }

          this.isLoading = false
          if (this.$refs.contentWrap) {
            this.$refs.contentWrap.style.display = 'block'
          }
          this.newDatas.leftDatas.newIssue = [] //期号
          this.newDatas.leftDatas.newTime = [] //开奖时间
          this.newDatas.leftDatas.newResult = [] //开奖球号
          this.newDatas.leftDatas.newSingle = [] //单，双，大小等
          let rankConfig = [
            {index: 0, name: 'sb'},
            // { index: 1, name: "wx" },
            {index: 1, name: 'ds'},
            {index: 2, name: 'hds'},
            {index: 3, name: 'dx'},
            {index: 4, name: 'hdx'},
            {index: 5, name: 'ts'},
            {index: 6, name: 'ws'},
            {index: 7, name: 'jqys'},
            {index: 8, name: 'zh'},
            {index: 9, name: 'zhdx'},
            {index: 10, name: 'zhds'}
          ]

          // console.table(res.data.data.list)
          // 2019.04.22彩票开奖走势中，ie下，打印不出上面的table数据，报错，导致六合彩页面数据不能正常展示
          res.data.data.list.forEach(item => {
            let newS = []
            for (let key in item) {
              switch (key) {
                case 'issue':
                  this.newDatas.leftDatas.newIssue.push(item.issue)
                  break
                case 'resultInfo':
                  this.newDatas.leftDatas.newResult.push(
                    item.resultInfo.split(',')
                  )
                  break
                case 'openingTime':
                  this.newDatas.leftDatas.newTime.push(this.getTime(item.openingTime * 1000))
                  break
                default:
                  rankConfig.forEach(c => {
                    if (c.name === key) {
                      newS[c.index] = item[key]
                    }
                  })
                  break
              }
            }
            this.newDatas.leftDatas.newSingle.push(newS)
          })
          this.getAnimal()
        } else {
          alert('获取开奖记录数据出错！！')
        }
      },
      async getAnimal (resultList) {
        let res = await this.$http.post(`${this.$HOST_NAME}/lottery/getZodiac`)
        if (res && res.code === 200) {
          resultList.forEach((outItem, v1) => {
            outItem.forEach((intItem, v2) => {
              for (let keyOut of Object.keys(res.data)) {
                res.data[keyOut].forEach(thirItem => {
                  if (thirItem === intItem) {
                    resultList[v1][v2] = {ball: intItem, animal: keyOut}
                  }
                })
              }
            })
          })
          this.newDatas.leftDatas.newResult = resultList
        }
      }
    },
    created () {
      if (this.childNeed) this.getHisDatas()
    },
    mounted () {},
    computed: {
      childNeed () {
        return this.$store.state.lottery.childNeed
      }
    },
    watch: {
      childNeed: {
        handler: function (val, oldVal) {
          console.log(val)
          if (!oldVal) {
            this.getHisDatas()
          }
          if (oldVal && val && val.className === oldVal.className) {
            this.getHisDatas()
          }
        },
        deep: true
      },
      "$route.fullPath":function(newVal,odlVal){
        if(newVal){
          console.log(this.$route.path)
          this.getHisDatas()
        }
      }
    },
    beforeDestroy () {},
    components: {},
    store
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .vp-lottery-trend-content {
    .ivu-spin-fix {
      position: fixed;
    }

    padding-top: 54px;
    font-size: 15px;
    text-align: center;
    background: #f8f6f7;

    .trend-toggle {
      min-width: 800px;
      position: fixed;
      z-index: 99;
      width: 100%;
      height: 56px;
      line-height: 56px;
      text-align: center;
      background: #f8f6f7;

      .name {
        color: #ff5151;
        margin-right: 23px;
      }

      .check {
        label {
          display: inline-block;
          margin: 0 3px 0 16px;

          .check-ico {
            width: 17px;
            height: 17px;
            vertical-align: text-top;
            display: inline-block;
            cursor: pointer;
            border: 1px solid gray;
            background: #f5f5f5;

            &.active {
              border: 0;
              background: url("/static/public/image/lottery/trend/vp-trend-true-bg.png") #ff5151 center no-repeat;
            }
          }

          .check-name {
            padding-left: 3px;
          }
        }
      }

      .issue {
        padding-left: 30px;

        .periodbtn {
          cursor: pointer;
          border: 1px solid #dadada;
          border-radius: 4px;
          padding: 3px 8px;
          margin-right: 8px;

          &.active {
            background-color: #ff5151;
            color: #fff;
            border-color: #ff5151;
          }
        }
      }
    }

    .trend-table-wrapper {
      margin-top: 56px;
      display: inline-block;
      height: calc(~"100vh - 175px"); //老板需要再打开
      text-align: center;
      color: #515151;
      overflow-y: auto;
      overflow-x: hidden;
      cursor: default;
      padding-right: 4px;

      .trend-table-inner {
        background-color: #f8f6f7;
        border: 1px solid #ddd;
        border-right: 0;
        border-bottom: 0;
        display: flex;

        .trend-left-box {
          .trend-left-box-top {
            display: flex;

            .left-title {
              border-right: 1px solid #ddd;
              border-bottom: 1px solid #ddd;
              height: 30px;
              line-height: 30px;
              min-width: 30px;
              white-space: nowrap;
              text-align: center;
              background: #f1edea;
            }

            .left-td-ball {
              border-right: 1px solid #ddd;
              border-bottom: 1px solid #ddd;
              height: 30px;
              line-height: 30px;
              min-width: 60px;
              text-align: center;
            }

            .td-issue {
              .issue-number {
                border-right: 1px solid #ddd;
                border-bottom: 1px solid #ddd;
                padding-left: 15px;
                padding-right: 15px;
                line-height: 30px;
                height: 30px;
                width: 175px;
                white-space: nowrap;
              }

              // margin: 2px;
              // height: 30px;
              // line-height: 30px;
              // min-width: 30px;
              // white-space: nowrap;
            }

            .td-lottery-number {
              .td-lottery-number-item {
                font-size: 12px;
                background: #f9faea;
              }

              .lottery-number {
                display: flex;

                div {
                  label {
                    display: inline-block;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    text-align: center;
                    background: #ff5151;
                    color: #fff;
                    font-size: 14px;

                    &.red {
                      color: #fff;
                      background-color: #ff5151;
                    }

                    &.blue {
                      color: #fff;
                      background-color: #2299d5;
                    }

                    &.green {
                      color: #fff;
                      background-color: #3fa93f;
                    }
                  }
                }
              }
            }

            .td-lottery-wide {
              .left-title {
                display: flex;

                .td-lottery-wide-title {
                  flex: 1;
                  min-width: 70px;
                  border-right: 1px solid #ddd;

                  &:last-child {
                    border-right: 0;
                  }
                }
              }

              .wide-wrap {
                background: #f9faea;

                .wide-inner-wrap {
                  display: flex;

                  .item {
                    min-width: 70px;
                    height: 30px;
                    border-right: 1px solid #ddd;
                    border-bottom: 1px solid #ddd;
                    line-height: 30px;
                    white-space: nowrap;
                    text-align: center;

                    &.active {
                      color: #ff5151;
                    }

                    &.active2 {
                      color: #2299d5;
                    }

                    &.active3 {
                      color: #9b9b9b;
                    }

                    &.red {
                      color: #ff5151;
                    }

                    &.blue {
                      color: #2299d5;
                    }

                    &.green {
                      color: #3fa93f;
                    }
                  }
                }
              }
            }
          }

          .trend-statistics {
            div {
              border-right: 1px solid #ddd;
              border-bottom: 1px solid #ddd;
              line-height: 30px;
              height: 30px;
              text-align: center;
            }
          }
        }

        .trend-center-box {
          .trend-center-canvas-list {
            display: flex;

            .vp-lottery-trend-cavans {
              position: relative;
              // min-width: 400px;
              .trend-cavans-title {
                text-align: center;
                border-bottom: 1px solid #ddd;
                height: 60px;
                background: #f1edea;

                .t1 {
                  line-height: 30px;
                  height: 30px;
                  border-bottom: 1px solid #ddd;
                  border-right: 1px solid #ddd;
                }

                .t2 {
                  display: flex;

                  div {
                    height: 30px;
                    width: 30px;
                    line-height: 30px;
                    border-right: 1px solid #ddd;
                    border-bottom: 1px solid #ddd;
                  }
                }
              }

              .trend-out-box {
                background: #f9faea;

                .row {
                  display: flex;

                  div {
                    width: 30px;
                    height: 30px;
                    border-right: 1px solid #ddd;
                    border-bottom: 1px solid #ddd;
                    text-align: center;
                    // cursor: pointer;
                    line-height: 30px;

                    span {
                      display: inline-block;
                      width: 20px;
                      height: 20px;
                      line-height: 20px;
                    }

                    &.active {
                      span {
                        border-radius: 50%;
                        background: #029bae;
                        border: 1px solid #029bae;
                        color: #fff;
                      }
                    }
                  }
                }
              }

              canvas {
                position: absolute;
                // background: lightcyan;
              }

              .refBall-list {
                span {
                  position: absolute;
                  display: inline-block;
                  width: 22px;
                  height: 22px;
                  line-height: 22px;
                  border-radius: 50%;
                  background: #029bae;
                  border: 1px solid #029bae;
                  color: #fff;
                  padding-right: 4px;

                  &.active {
                    background: #ff5151;
                    border: 1px solid #ff5151;
                  }

                  &.active2 {
                    font-size: 12px;
                    padding-right: 0;
                  }
                }
              }
            }
          }

          .statistics-item {
            display: flex;

            div {
              width: 30px;
              height: 30px;
              line-height: 30px;
              text-align: center;
              border-bottom: 1px solid #ddd;
              border-right: 1px solid #ddd;
            }
          }
        }
      }
    }
  }
</style>
