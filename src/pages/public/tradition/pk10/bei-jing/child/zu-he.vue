<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">
        <div class="lottery-content-min-height">
          <!-- 位置 -->
          <div class="lottery-header-common-all first">
            <span>位置</span>
          </div>
          <div class="decial-1 zuhe-common">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listPosit" class="decial-1-item">
              <div class="all-item">
                <div @click="choosePosit(itemInner)" :key="indexInner" v-for="(itemInner,indexInner) in itemOut.mess"
                     class="box">
                  <span :class="{'active':itemInner.active}" ref="theBall" class="theBall">{{itemInner.ball=='第一名'?'冠军':itemInner.ball=='第二名'?'亚军':itemInner.ball}}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 号码 -->
          <div class="lottery-header-common-all">
            <span>号码</span>
          </div>
          <div class="decial-1 zuhe-common">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listNumber" class="decial-1-item">
              <div class="all-item">
                <div @click="chooseNumber(itemInner)" :key="indexInner" v-for="(itemInner,indexInner) in itemOut.mess"
                     class="box">
                  <span :class="{'active':itemInner.active}" ref="theBall"
                        class="theBall number">{{itemInner.ball}}</span>
                  <span :class="{'active':itemInner.active}" ref="theBall" class="price">{{itemInner.price}}</span>
                </div>
              </div>

            </div>
          </div>
          <!-- 玩法 -->
          <div class="lottery-header-common-all">
            <span>玩法</span>
          </div>
          <div class="decial-1 zuhe-common">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listStyle" class="decial-1-item">
              <div class="all-item">
                <div @click="chooseStyle(itemInner)" :key="indexInner" v-for="(itemInner,indexInner) in itemOut.mess"
                     class="box">
                  <span :class="{'active':itemInner.active}" ref="theBall"
                        class="theBall style">{{itemInner.ball}}</span>
                  <span :class="{'active':itemInner.active}" ref="theBall" class="price">{{itemInner.price}}</span>
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
  import data from '@/pages/public/tradition/data/pk10'
  import childIndex from '@/pages/public/tradition/data/child-index'
  import childZuhe from '@/pages/public/tradition/data/child-zuhe'

  export default {
    mixins: [childIndex, childZuhe],
    data () {
      return {
        allData: data.zuHe,
        listPosit: data.zuHe[0].list,
        listNumber: data.zuHe[1].list,
        listStyle: data.zuHe[2].list,
        confirmbet:true
      }
    },
    methods: {
      //分发赔率
      async oddsBelong () {
        // 数字分配赔率
        this.listNumber.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.code = '20302'
            inItem.price = this.oddsList['20302_' + inItem.ball + ''].odds
            inItem.fixedOdds = this.oddsList['20302_' + inItem.ball + ''].odds
            inItem.fsrate = this.oddsList['20302_' + inItem.ball + ''].fsrate
          })
        })
        // 玩法
        this.listStyle.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.ball == '龙' || inItem.ball == '虎') {
              inItem.code = '20304'
              inItem.price = this.oddsList['20304_' + inItem.ball + ''].odds
              inItem.fixedOdds = this.oddsList[
              '20304_' + inItem.ball + ''
                ].odds
              inItem.fsrate = this.oddsList['20304_' + inItem.ball + ''].fsrate
            } else {
              inItem.code = '20303'
              inItem.price = this.oddsList['20303_' + inItem.ball + ''].odds
              inItem.fixedOdds = this.oddsList[
              '20303_' + inItem.ball + ''
                ].odds
              inItem.fsrate = this.oddsList['20303_' + inItem.ball + ''].fsrate
            }
          })
        })
      }
    }
  }
</script>
<style lang="less" scoped>
   /deep/ .ivu-modal{
     margin:0
   }
</style>