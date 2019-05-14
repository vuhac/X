<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">
        <div class="lottery-content-min-height">
          <!-- 和值 -->
          <div class="lottery-header-common-all first">
            <span>和&nbsp;值</span>
          </div>
          <div class="decial-1">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listTop" class="decial-1-item">
              <div class="all-item">
                <label :key="indexInner"
                       style="display: block"
                       @click="clickFocus(itemInner)"
                       v-for="(itemInner,indexInner) in itemOut.mess"
                       class="box">

                  <span
                    :class="'theBall ' + (itemInner.active? 'active ' : '') + getBallColor(parseInt(itemInner.ball))">
                    {{itemInner.ball}}
                  </span>

                  <span :class="{'active':itemInner.active}" class="price">{{itemInner.price}}</span>

                  <input v-model="itemInner.model" @keyup="keyupInput(itemInner)" @keydown="keydownInput(itemInner)"
                         @click.stop="focusInput(itemInner)" :class="{'active':itemInner.active}" type="text"/>

                  <vp-drop-down class="gYHe-drop-down" v-on:drop-down-say="seletPrice" v-on:drop-down-hide="hidePrice"
                                :itemInner="itemInner" v-if="seletPriceStaue===itemInner.id"></vp-drop-down>
                </label>
              </div>

            </div>
          </div>
          <!-- 两面 -->
          <div class="lottery-header-common-all">
            <span>两&nbsp;面</span>
          </div>
          <div class="decial-1 lotFive">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listCenter" class="decial-1-item">
              <div class="all-item">
                <div :key="indexInner"
                     @click="clickFocus(itemInner)"
                     v-for="(itemInner,indexInner) in itemOut.mess"
                     class="box">

                  <span :class="{'active':itemInner.active}" class="theBall">{{itemInner.ball}}</span>

                  <span :class="{'active':itemInner.active}" class="price">{{itemInner.price}}</span>

                  <input v-model="itemInner.model" @keyup="keyupInput(itemInner)" @keydown="keydownInput(itemInner)"
                         @click.stop="focusInput(itemInner)" :class="{'active':itemInner.active}" type="text">

                  <vp-drop-down class="gYHe-drop-down" v-on:drop-down-say="seletPrice" v-on:drop-down-hide="hidePrice"
                                :itemInner="itemInner" v-if="seletPriceStaue===itemInner.id"></vp-drop-down>
                </div>
              </div>

            </div>
          </div>
          <!-- 色波/豹子-->
          <div class="lottery-header-common-all">
            <span>色波&nbsp;/&nbsp;豹子&nbsp;</span>
          </div>
          <div class="decial-1 lotFour">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listBot" class="decial-1-item">
              <div class="all-item">
                <div :key="indexInner" @click="clickFocus(itemInner)" v-for="(itemInner,indexInner) in itemOut.mess"
                     class="box">
                  <span :class="{'active':itemInner.active}" class="theBall">{{itemInner.ball}}</span>
                  <span :class="{'active':itemInner.active}" class="price">{{itemInner.price}}</span>
                  <input v-model="itemInner.model" @keyup="keyupInput(itemInner)" @keydown="keydownInput(itemInner)"
                         @click.stop="focusInput(itemInner)" :class="{'active':itemInner.active}" type="text">
                  <vp-drop-down class="gYHe-drop-down" v-on:drop-down-say="seletPrice" v-on:drop-down-hide="hidePrice"
                                :itemInner="itemInner" v-if="seletPriceStaue===itemInner.id"></vp-drop-down>
                </div>
              </div>

            </div>
          </div>
          <!-- 包三 -->
          <div class="lottery-header-common-all">
            <span>包三</span>
          </div>
          <div class="decial-1 more">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listMore" class="decial-1-item">
              <div class="all-item">
                <div :key="indexInner" @click="clickFocus(itemInner)" v-for="(itemInner,indexInner) in itemOut.mess"
                     class="box">
                  <span :class="{'active':itemInner.active}" class="theBall">{{itemInner.ball}}</span>
                  <span :class="{'active':itemInner.active}" class="price">{{itemInner.price}}</span>
                  <input v-model="itemInner.model" @keyup="keyupInput(itemInner)" @keydown="keydownInput(itemInner)"
                         @click.stop="focusInput(itemInner)" :class="{'active':itemInner.active}" type="text">
                  <vp-drop-down class="gYHe-drop-down" v-on:drop-down-say="seletPrice" v-on:drop-down-hide="hidePrice"
                                :itemInner="itemInner" v-if="seletPriceStaue===itemInner.id"></vp-drop-down>
                </div>
              </div>
            </div>
            <div class="decial-1-item">
              <div class="all-item">
                <div class="box">
                  <Select v-model="selectBaoSan.ball1" class="select-common-css baosan">
                    <Option v-for="item in selectBaoSan.ballList1" :value="item.num" :key="item.id">{{ item.num }}
                    </Option>
                  </Select>
                </div>
              </div>
            </div>
            <div class="decial-1-item">
              <div class="all-item">
                <div class="box">
                  <Select v-model="selectBaoSan.ball2" class="select-common-css baosan">
                    <Option v-for="item in selectBaoSan.ballList2" :value="item.num" :key="item.id">{{ item.num }}
                    </Option>
                  </Select>
                </div>
              </div>
            </div>
            <div class="decial-1-item">
              <div class="all-item">
                <div class="box">
                  <Select v-model="selectBaoSan.ball3" class="select-common-css baosan">
                    <Option v-for="item in selectBaoSan.ballList3" :value="item.num" :key="item.id">{{ item.num }}
                    </Option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <vp-history ref="vpHistory"></vp-history>
        </div>

      </div>
      <div class="lottery-content-all-right">
        <vp-fast-and-submit v-on:range-say="rangeChange" v-on:submit-Input-say="fastInput"
                            v-on:submit-resetAll="resetAll" v-on:submit-review="review" :totalCount="totalCount"
                            :selectFast="selectFast" :saveSelectMoney="saveSelectMoney" :confirmbet="confirmbet">
        </vp-fast-and-submit>
        <vp-ranking ref="vpRanking"></vp-ranking>
      </div>
    </form>
    <Modal :scrollable=true title="投注信息" v-model="modal" class-name="vp-betting-warp" width="584" height="400"
           @on-ok="submit">
      <!-- @on-cancel="cancel" -->

      <vp-betting ref="betting"></vp-betting>
    </Modal>
  </div>
</template>
<script>
  import data from '@/pages/public/tradition/data/pc-dan-dan'
  import childIndex from '@/pages/public/tradition/data/child-index'
  import LotterySev from '@/pages/public/tradition/data/LotterySev.js'

  export default {
    mixins: [childIndex],
    data () {
      return {
        ballColors: ['red-ball', 'green-ball', 'blue-ball'],
        confirmbet:true,
        selectBaoSan: {
          ball1: 0,
          ballList1: [
            {num: 0, id: 0},
            {num: 1, id: 1},
            {num: 2, id: 2},
            {num: 3, id: 3},
            {num: 4, id: 4},
            {num: 5, id: 5},
            {num: 6, id: 6},
            {num: 7, id: 7},
            {num: 8, id: 8},
            {num: 9, id: 9},
            {num: 10, id: 10},
            {num: 11, id: 11},
            {num: 12, id: 12},
            {num: 13, id: 13},
            {num: 14, id: 14},
            {num: 15, id: 15},
            {num: 16, id: 16},
            {num: 17, id: 17},
            {num: 18, id: 18},
            {num: 19, id: 19},
            {num: 20, id: 20},
            {num: 21, id: 21},
            {num: 22, id: 22},
            {num: 23, id: 23},
            {num: 24, id: 25},
            {num: 26, id: 26},
            {num: 27, id: 27}
          ],
          ball2: 0,
          ballList2: [
            {num: 0, id: 0},
            {num: 1, id: 1},
            {num: 2, id: 2},
            {num: 3, id: 3},
            {num: 4, id: 4},
            {num: 5, id: 5},
            {num: 6, id: 6},
            {num: 7, id: 7},
            {num: 8, id: 8},
            {num: 9, id: 9},
            {num: 10, id: 10},
            {num: 11, id: 11},
            {num: 12, id: 12},
            {num: 13, id: 13},
            {num: 14, id: 14},
            {num: 15, id: 15},
            {num: 16, id: 16},
            {num: 17, id: 17},
            {num: 18, id: 18},
            {num: 19, id: 19},
            {num: 20, id: 20},
            {num: 21, id: 21},
            {num: 22, id: 22},
            {num: 23, id: 23},
            {num: 24, id: 25},
            {num: 26, id: 26},
            {num: 27, id: 27}
          ],
          ball3: 0,
          ballList3: [
            {num: 0, id: 0},
            {num: 1, id: 1},
            {num: 2, id: 2},
            {num: 3, id: 3},
            {num: 4, id: 4},
            {num: 5, id: 5},
            {num: 6, id: 6},
            {num: 7, id: 7},
            {num: 8, id: 8},
            {num: 9, id: 9},
            {num: 10, id: 10},
            {num: 11, id: 11},
            {num: 12, id: 12},
            {num: 13, id: 13},
            {num: 14, id: 14},
            {num: 15, id: 15},
            {num: 16, id: 16},
            {num: 17, id: 17},
            {num: 18, id: 18},
            {num: 19, id: 19},
            {num: 20, id: 20},
            {num: 21, id: 21},
            {num: 22, id: 22},
            {num: 23, id: 23},
            {num: 24, id: 25},
            {num: 26, id: 26},
            {num: 27, id: 27}
          ]
        },
        allData: data.zhuShiPan,
        listTop: data.zhuShiPan[0].list,
        listCenter: data.zhuShiPan[1].list,
        listBot: data.zhuShiPan[2].list,
        listMore: data.zhuShiPan[3].list
      }
    },
    methods: {
      getBallColor (num) {
        if ([0, 13, 14, 27].includes(num)) return 'black-ball'
        else return this.ballColors[num % 3]
      },
      //分发赔率
      async oddsBelong () {
        // 冠、亚军和
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.code = '20801'
            inItem.price = this.oddsList['20801_' + inItem.ball + ''].odds
            inItem.fixedOdds = this.oddsList['20801_' + inItem.ball + ''].odds
            inItem.fsrate = this.oddsList['20801_' + inItem.ball + ''].fsrate
          })
        })
        this.listCenter.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.code = '20802'
            inItem.price = this.oddsList['20802_' + inItem.ball + ''].odds
            inItem.fixedOdds = this.oddsList['20802_' + inItem.ball + ''].odds
            inItem.fsrate = this.oddsList['20802_' + inItem.ball + ''].fsrate
          })
        })
        this.listBot.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.ball === '豹子') {
              inItem.code = '20802'
              inItem.price = this.oddsList['20802_' + inItem.ball + ''].odds
              inItem.fixedOdds = this.oddsList[
              '20802_' + inItem.ball + ''
                ].odds
              inItem.fsrate = this.oddsList['20802_' + inItem.ball + ''].fsrate
            } else {
              inItem.code = '20803'
              inItem.price = this.oddsList['20803_' + inItem.ball + ''].odds
              inItem.fixedOdds = this.oddsList[
              '20803_' + inItem.ball + ''
                ].odds
              inItem.fsrate = this.oddsList['20803_' + inItem.ball + ''].fsrate
            }
          })
        })
        this.listMore.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.ball === '特码包三') {
              inItem.code = '20804'
              inItem.price = this.oddsList['20804_' + 15 + ''].odds
              inItem.fixedOdds = this.oddsList['20804_' + 15 + ''].odds
              inItem.fsrate = this.oddsList['20804_' + 15 + ''].fsrate
            }
          })
        })
        // 下拉框也赋值
        this.selectBaoSan.ballList1.forEach((outItem, v) => {
          outItem.code = '20804'
          outItem.price = this.oddsList['20804_' + outItem.num + ''].odds
          outItem.fixedOdds = this.oddsList['20804_' + outItem.num + ''].odds
          outItem.fsrate = this.oddsList['20804_' + outItem.num + ''].fsrate
        })
        this.selectBaoSan.ballList2.forEach((outItem, v) => {
          outItem.code = '20804'
          outItem.price = this.oddsList['20804_' + outItem.num + ''].odds
          outItem.fixedOdds = this.oddsList['20804_' + outItem.num + ''].odds
          outItem.fsrate = this.oddsList['20804_' + outItem.num + ''].fsrate
        })
        this.selectBaoSan.ballList3.forEach((outItem, v) => {
          outItem.code = '20804'
          outItem.price = this.oddsList['20804_' + outItem.num + ''].odds
          outItem.fixedOdds = this.oddsList['20804_' + outItem.num + ''].odds
          outItem.fsrate = this.oddsList['20804_' + outItem.num + ''].fsrate
        })
      },
      // 提交前检查，展示
      review () {
        if (!this.isopen) return false
        let reviewArr = []
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.active && inItem.model) {
              reviewArr.push({
                code: '',
                title: inItem.title,
                ball: inItem.ball,
                id: '',
                model: inItem.model,
                price: inItem.price,
                active: false
              })
              // 有效金额检查
            }
          })
        })
        this.listCenter.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.active && inItem.model) {
              reviewArr.push({
                code: '',
                title: inItem.title,
                ball: inItem.ball,
                id: '',
                model: inItem.model,
                price: inItem.price,
                active: false
              })
              // 有效金额检查
            }
          })
        })
        this.listBot.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.active && inItem.model) {
              reviewArr.push(inItem)
              // 有效金额检查
            }
          })
        })
        let baosanStaue = false
        this.listMore.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.active && inItem.model) {
              reviewArr.push({
                code: '',
                title: inItem.title,
                ball:
                  inItem.ball +
                  '[' +
                  this.selectBaoSan.ball1 +
                  ',' +
                  this.selectBaoSan.ball2 +
                  ',' +
                  this.selectBaoSan.ball3 +
                  ']',
                id: '',
                model: inItem.model,
                price: inItem.price,
                active: false
              })
              // 有效金额检查
              baosanStaue = true
            }
          })
        })
        if (baosanStaue) {
          if (
            this.selectBaoSan.ball1 === this.selectBaoSan.ball2 ||
            this.selectBaoSan.ball2 === this.selectBaoSan.ball3 ||
            this.selectBaoSan.ball1 === this.selectBaoSan.ball3
          ) {
            this.$store.commit('alert/showTipModel', {
              bool: true,
              title: '特码包三号码不能一样！！',
              model: 'error'
            })
            return false
          }
        }

        this.publicReview(reviewArr)
      },
      // 提交
      submit () {
        this.submitList = []
        this.allData.forEach((outItem) => {
          outItem.list.forEach((intItem) => {
            intItem.mess.forEach((thirItem) => {
              if (thirItem.active && thirItem.model) {
                this.submitList.push(thirItem)
              }
            })
          })
        })
        let submitArr = []
        this.submitList.forEach((item) => {
          let finalModel
          if (this.childNeedMess.series === 'lhc') {
            finalModel = item.model
          } else {
            finalModel = ((+item.model) * (+this.totalCount.ratio) * (+this.totalCount.db)).toFixed(2)
          }
          if (item.ball === '特码包三') {
            submitArr.push({
              'code': this.selectBaoSan.ball1,
              'playway': item.code,
              'odds': item.fixedOdds,
              'money': finalModel,
              'ball': item.title,
              'attach': ''
            })
            submitArr.push({
              'code': this.selectBaoSan.ball2,
              'playway': item.code,
              'odds': item.fixedOdds,
              'money': finalModel,
              'ball': item.title,
              'attach': ''
            })
            submitArr.push({
              'code': this.selectBaoSan.ball3,
              'playway': item.code,
              'odds': item.fixedOdds,
              'money': finalModel,
              'ball': item.title,
              'attach': ''
            })
          } else {
            submitArr.push({
              'code': item.ball,
              'playway': item.code,
              'odds': item.fixedOdds,
              'money': finalModel,
              'ball': item.title,
              'attach': ''
            })
          }
        })
        LotterySev.vpSubmit.call(this, submitArr)
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  @import "../../../../../../assets/less/public/var.less";

   /deep/ .ivu-modal{
     margin:0
   }

  .lottery-content-all-wrap {
    .lottery-content-all-left {
      .decial-1.more {
        .gYHe-drop-down {
          right: 20px;
        }

        .decial-1-item {
          width: 300px;

          .all-item {
            .box {
              cursor: pointer;
              padding: 8px 20px;

              .theBall {
                background: #fff;
                border: 0;
                font-size: 16px;

                &.active {
                  background: #fff;
                  color: #ff5c5c;
                }
              }
            }
          }

          &:first-child {
            .all-item {
              .box {
                cursor: pointer;

                &:last-child {
                  text-align: left;

                  .theBall {
                    width: 65px;
                    margin-left: -15px;
                  }

                  .price {
                    padding-left: 11px;
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
