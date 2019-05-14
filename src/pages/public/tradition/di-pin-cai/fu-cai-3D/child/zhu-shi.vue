<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">
        <div class="lottery-content-min-height">
          <div class="decial-1 lotFour">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listTop" class="decial-1-item">
              <div class="title">{{itemOut.title}}</div>
              <div class="all-item">
                <div :key="indexInner" @click="clickFocus(itemInner)" v-for="(itemInner,indexInner) in itemOut.mess"
                     class="box">
                  <span :class="{'active':itemInner.active}" class="theBall">{{itemInner.ball}}</span>
                  <span :class="{'active':itemInner.active}" class="price">{{itemInner.price}}</span>
                  <input v-model="itemInner.model" @keyup="keyupInput(itemInner)" @keydown="keydownInput(itemInner)"
                         @click.stop="focusInput(itemInner)" :class="{'active':itemInner.active}" type="text">
                  <vp-drop-down v-on:drop-down-say="seletPrice" v-on:drop-down-hide="hidePrice" :itemInner="itemInner"
                                v-if="seletPriceStaue==itemInner.id"></vp-drop-down>
                </div>
              </div>

            </div>
          </div>
          <div class="decial-1 lotFour haveMargin">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listBot" class="decial-1-item">
              <div class="title">{{itemOut.title}}</div>
              <div class="all-item">
                <div :key="indexInner" @click="clickFocus(itemInner)" v-for="(itemInner,indexInner) in itemOut.mess"
                     class="box">
                  <span :class="{'active':itemInner.active}" class="theBall">{{itemInner.ball}}</span>
                  <span :class="{'active':itemInner.active}" class="price">{{itemInner.price}}</span>
                  <input v-model="itemInner.model" @keyup="keyupInput(itemInner)" @keydown="keydownInput(itemInner)"
                         @click.stop="focusInput(itemInner)" :class="{'active':itemInner.active}" type="text">
                  <vp-drop-down v-on:drop-down-say="seletPrice" v-on:drop-down-hide="hidePrice" :itemInner="itemInner"
                                v-if="seletPriceStaue==itemInner.id"></vp-drop-down>
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
           @on-ok="submit({code:'dpc-zsp',name:'低频彩-主势盘'})">
      <!-- @on-cancel="cancel" -->

      <vp-betting ref="betting"></vp-betting>
    </Modal>
  </div>
</template>
<script>
  import data from '@/pages/public/tradition/data/di-pin-cai'
  import childIndex from '@/pages/public/tradition/data/child-index'

  export default {
    mixins: [childIndex],
    data () {
      return {
        allData: data.zhuShi,
        listTop: data.zhuShi[0].list,
        listBot: data.zhuShi[1].list,
        confirmbet:true
      }
    },
    methods: {
      //分发赔率
      async oddsBelong () {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (
              inItem.ball == '佰' ||
              inItem.ball == '拾' ||
              inItem.ball == '个'
            ) {
              inItem.code = '21003'
              inItem.price = this.oddsList['21003_' + inItem.title + ''].odds
              inItem.fixedOdds = this.oddsList[
              '21003_' + inItem.title + ''
                ].odds
              inItem.fsrate = this.oddsList[
              '21003_' + inItem.title + ''
                ].fsrate
            } else if (inItem.ball == '佰拾个和尾数') {
              inItem.code = '21015'
              inItem.price = this.oddsList['21015_' + inItem.title + ''].odds
              inItem.fixedOdds = this.oddsList[
              '21015_' + inItem.title + ''
                ].odds
              inItem.fsrate = this.oddsList[
              '21015_' + inItem.title + ''
                ].fsrate
            } else {
              inItem.code = '21015'
              inItem.price = this.oddsList['21015_' + inItem.title + ''].odds
              inItem.fixedOdds = this.oddsList[
              '21015_' + inItem.title + ''
                ].odds
              inItem.fsrate = this.oddsList[
              '21015_' + inItem.title + ''
                ].fsrate
            }
          })
        })
        this.listBot.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (
              inItem.ball == '佰' ||
              inItem.ball == '拾' ||
              inItem.ball == '个'
            ) {
              inItem.code = '21003'
              inItem.price = this.oddsList['21003_' + inItem.title + ''].odds
              inItem.fixedOdds = this.oddsList[
              '21003_' + inItem.title + ''
                ].odds
              inItem.fsrate = this.oddsList[
              '21003_' + inItem.title + ''
                ].fsrate
            } else if (inItem.ball == '佰拾个和尾数') {
              inItem.code = '21015'
              inItem.price = this.oddsList['21015_' + inItem.title + ''].odds
              inItem.fixedOdds = this.oddsList[
              '21015_' + inItem.title + ''
                ].odds
              inItem.fsrate = this.oddsList[
              '21015_' + inItem.title + ''
                ].fsrate
            } else {
              inItem.code = '21015'
              inItem.price = this.oddsList['21015_' + inItem.title + ''].odds
              inItem.fixedOdds = this.oddsList[
              '21015_' + inItem.title + ''
                ].odds
              inItem.fsrate = this.oddsList[
              '21015_' + inItem.title + ''
                ].fsrate
            }
          })
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
              reviewArr.push(inItem)
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
        this.publicReview(reviewArr)
      }
    }
  }
</script>
<style lang="less" scoped>
  .lottery-content-all-wrap {
    .lottery-content-all-left {
      .lottery-content-min-height {
        .decial-1 {
          .decial-1-item {
            &:nth-child(1), &:nth-child(2) {
              .all-item {
                .box {
                  &:nth-child(n+4) {
                    .theBall {
                      background: #fff;
                      margin-left: -10px;
                      border-radius: 100%;
                      width: 100px;
                    }

                    .price {
                      margin-left: -20px;
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
