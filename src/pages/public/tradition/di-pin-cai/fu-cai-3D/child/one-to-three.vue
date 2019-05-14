<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">
        <div class="lottery-content-min-height">
          <div class="decial-1">
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
        </div>
        <vp-history ref="vpHistory"></vp-history>
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
  import data from '@/pages/public/tradition/data/di-pin-cai'
  import childIndex from '@/pages/public/tradition/data/child-index'

  export default {
    mixins: [childIndex],
    data () {
      return {
        allData: data.oneToThree,
        listTop: data.oneToThree[0].list,
        confirmbet:true,
      }
    },
    methods: {
      //分发赔率
      async oddsBelong () {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball <= 9 && typeof +inItem.ball == 'number') {
              let numberString = '21001'
              inItem.code = numberString
              inItem.price = this.oddsList[
              '' + numberString + '_' + inItem.ball + ''
                ].odds
              // 固定一个赔率
              inItem.fixedOdds = this.oddsList[
              '' + numberString + '_' + inItem.ball + ''
                ].odds
              inItem.fsrate = this.oddsList[
              '' + numberString + '_' + inItem.ball + ''
                ].fsrate
            } else {
              let numberString = '21002'
              inItem.code = numberString
              inItem.price = this.oddsList[
              '' + numberString + '_' + inItem.ball + ''
                ].odds
              inItem.fixedOdds = this.oddsList[
              '' + numberString + '_' + inItem.ball + ''
                ].odds
              inItem.fsrate = this.oddsList[
              '' + numberString + '_' + inItem.ball + ''
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
        this.publicReview(reviewArr)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../../../../../assets/less/public/var.less";

  .lottery-content-all-wrap {
    .lottery-content-all-left {
      .lottery-content-min-height {
        .decial-1 {
          .decial-1-item {
            .all-item {
              .box {
                padding: 8px 25px 8px 25px;

                .decial-select-down {
                  right: 25px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
