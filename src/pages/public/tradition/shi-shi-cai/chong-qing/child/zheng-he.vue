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
          <div class="decial-1 lotFive">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listBot" class="decial-1-item">
              <div class="title">{{itemOut.title}}</div>
              <div class="all-item">
                <div :key="indexInner" @click="clickFocus(itemInner)" v-for="(itemInner,indexInner) in itemOut.mess"
                     class="box">
                  <span :class="{'active':itemInner.active}" class="theBall">{{indexOut==3?'总和'+itemInner.ball:itemInner.ball}}</span>
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
  import data from '@/pages/public/tradition/data/shi-shi-cai'
  import childIndex from '@/pages/public/tradition/data/child-index'

  export default {
    mixins: [childIndex],
    data () {
      return {
        allData: data.zhengHe,
        listTop: data.zhengHe[0].list,
        listBot: data.zhengHe[1].list,
      }
    },
    methods: {
      //分发赔率
      async oddsBelong () {
        this.listTop.forEach((outItem, v) => {
          outItem.mess && outItem.mess.forEach((inItem, v) => {
            if (+inItem.ball <= 9 && typeof (+inItem.ball) == 'number') {
              let numberString = '20101'
              inItem.code = numberString
              inItem.price = this.oddsList['' + numberString + '_' + inItem.ball + ''].odds
              // 固定一个赔率
              inItem.fixedOdds = this.oddsList['' + numberString + '_' + inItem.ball + ''].odds
              inItem.fsrate = this.oddsList['' + numberString + '_' + inItem.ball + ''].fsrate
            } else {
              let numberString = '20102'
              inItem.code = numberString
              inItem.price = this.oddsList['' + numberString + '_' + inItem.ball + ''].odds
              inItem.fixedOdds = this.oddsList['' + numberString + '_' + inItem.ball + ''].odds
              inItem.fsrate = this.oddsList['' + numberString + '_' + inItem.ball + ''].fsrate
            }

          })
        })
        this.listBot.forEach((outItem, v) => {
          outItem.mess && outItem.mess.forEach((inItem, v) => {
            if (inItem.id == '60' ||
              inItem.id == '61' ||
              inItem.id == '62' ||
              inItem.id == '63' ||
              inItem.id == '64'
            ) {
              inItem.code = '20104'
              inItem.price = this.oddsList['20104_' + inItem.ball + ''].odds
              inItem.fixedOdds = this.oddsList['20104_' + inItem.ball + ''].odds
              inItem.fsrate = this.oddsList['20104_' + inItem.ball + ''].fsrate
            }

            if (inItem.id == '70' ||
              inItem.id == '71' ||
              inItem.id == '72' ||
              inItem.id == '73' ||
              inItem.id == '74'
            ) {
              inItem.code = '20105'
              inItem.price = this.oddsList['20105_' + inItem.ball + ''].odds
              inItem.fixedOdds = this.oddsList['20105_' + inItem.ball + ''].odds
              inItem.fsrate = this.oddsList['20105_' + inItem.ball + ''].fsrate
            }

            if (inItem.id == '80' ||
              inItem.id == '81' ||
              inItem.id == '82' ||
              inItem.id == '83' ||
              inItem.id == '84'
            ) {
              inItem.code = '20106'
              inItem.price = this.oddsList['20106_' + inItem.ball + ''].odds
              inItem.fixedOdds = this.oddsList['20106_' + inItem.ball + ''].odds
              inItem.fsrate = this.oddsList['20106_' + inItem.ball + ''].fsrate
            }

            if (inItem.id == '90' ||
              inItem.id == '91' ||
              inItem.id == '92' ||
              inItem.id == '93'
            ) {
              inItem.code = '20103'
              inItem.price = this.oddsList['20103_' + inItem.ball + ''].odds
              inItem.fixedOdds = this.oddsList['20103_' + inItem.ball + ''].odds
              inItem.fsrate = this.oddsList['20103_' + inItem.ball + ''].fsrate
            }

            if (inItem.id == '00' ||
              inItem.id == '01' ||
              inItem.id == '02'
            ) {
              inItem.code = '20107'
              inItem.price = this.oddsList['20107_' + inItem.ball + ''].odds
              inItem.fixedOdds = this.oddsList['20107_' + inItem.ball + ''].odds
              inItem.fsrate = this.oddsList['20107_' + inItem.ball + ''].fsrate
            }

          })
        })
      },
      // 提交前检查，展示
      review () {
        if (!this.isopen) return false
        let reviewArr = []
        this.listTop.forEach((outItem, v) => {
          outItem.mess && outItem.mess.forEach((inItem, v) => {
            if (inItem.active && inItem.model) {
              reviewArr.push(inItem)
              // 有效金额检查
            }
          })
        })
        this.listBot.forEach((outItem, v) => {
          outItem.mess && outItem.mess.forEach((inItem, v) => {
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
   /deep/ .ivu-modal{
     margin:0
   }
</style>