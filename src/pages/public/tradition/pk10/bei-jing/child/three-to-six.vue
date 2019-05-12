<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">
        <div class="lottery-content-min-height">
          <!-- 第一到第五名 -->
          <div class="decial-1">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listOneToFive" class="decial-1-item">
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
        <vp-fast-and-submit
          v-on:range-say="rangeChange"
          v-on:submit-Input-say="fastInput"
          v-on:submit-resetAll="resetAll"
          v-on:submit-review="review"
          :totalCount="totalCount"
          :selectFast="selectFast"
          :saveSelectMoney="saveSelectMoney"
        >
        </vp-fast-and-submit>
        <vp-ranking ref="vpRanking"></vp-ranking>
      </div>
    </form>
    <Modal :scrollable=true
           title="投注信息"
           v-model="modal" class-name="vp-betting-warp"
           width="584" height="400"
           @on-ok="submit">
      <!-- @on-cancel="cancel" -->

      <vp-betting ref="betting"></vp-betting>
    </Modal>
  </div>
</template>
<script>
  import data from '@/pages/public/tradition/data/pk10'
  import childIndex from '@/pages/public/tradition/data/child-index'

  export default {
    mixins: [childIndex],
    data () {
      return {
        allData: data.threeToSix,
        listOneToFive: data.threeToSix[0].list
      }
    },
    methods: {
      //分发赔率
      async oddsBelong () {
        this.listOneToFive.forEach((outItem, v) => {
          outItem.mess && outItem.mess.forEach((inItem, v) => {
            if (inItem.ball <= 10 && typeof (+inItem.ball) == 'number') {
              inItem.code = '20302'
              inItem.price = this.oddsList['20302_' + inItem.ball + ''].odds
              inItem.fixedOdds = this.oddsList['20302_' + inItem.ball + ''].odds
              inItem.fsrate = this.oddsList['20302_' + inItem.ball + ''].fsrate
            } else if (inItem.ball == '大' ||
              inItem.ball == '小' ||
              inItem.ball == '单' ||
              inItem.ball == '双'
            ) {
              inItem.code = '20303'
              inItem.price = this.oddsList['20303_' + inItem.ball + ''].odds
              inItem.fixedOdds = this.oddsList['20303_' + inItem.ball + ''].odds
              inItem.fsrate = this.oddsList['20303_' + inItem.ball + ''].fsrate
            } else {
              inItem.code = '20304'
              inItem.price = this.oddsList['20304_' + inItem.ball + ''].odds
              inItem.fixedOdds = this.oddsList['20304_' + inItem.ball + ''].odds
              inItem.fsrate = this.oddsList['20304_' + inItem.ball + ''].fsrate
            }
          })
        })
      },
      // 提交前检查，展示
      review () {
        if (!this.isopen) return false
        let reviewArr = []
        this.listOneToFive.forEach((outItem, v) => {
          outItem.mess && outItem.mess.forEach((inItem, v) => {
            if (inItem.active && inItem.model) {
              reviewArr.push({
                code: '', title: outItem.title, ball: inItem.ball,
                id: '', model: inItem.model, price: inItem.price, active: false
              })
              // 有效金额检查
            }
          })
        })
        this.publicReview(reviewArr)
      }
    },

  }
</script>
<style lang="less" scoped>
   /deep/ .ivu-modal{
     margin:0
   }
</style>