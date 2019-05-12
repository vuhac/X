<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">
        <div class="lottery-content-min-height">
          <!-- 独胆 -->
          <div class="lottery-header-common-all first">
            <span>一字组合(独胆)</span>
          </div>
          <div class="decial-1 ">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listTop" class="decial-1-item">
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
          <!-- 两面 -->
          <div class="decial-1 haveMargin">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listCenter" class="decial-1-item">
              <div class="title">{{itemOut.title+'(两面)'}}</div>
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
                            :selectFast="selectFast" :saveSelectMoney="saveSelectMoney">
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
        allData: data.yiZiZuHe,
        listTop: data.yiZiZuHe[0].list,
        listCenter: data.yiZiZuHe[1].list,
      }
    },
    methods: {
      //分发赔率
      async oddsBelong () {
        // 冠、亚军和
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.code = '21004'
            inItem.price = this.oddsList['21004_' + inItem.ball + ''].odds
            inItem.fixedOdds = this.oddsList['21004_' + inItem.ball + ''].odds
            inItem.fsrate = this.oddsList['21004_' + inItem.ball + ''].fsrate
          })
        })
        this.listCenter.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            // console.log(inItem.ball)
            inItem.code = '21003'
            inItem.price = this.oddsList['21003_' + inItem.ball + ''].odds
            inItem.fixedOdds = this.oddsList['21003_' + inItem.ball + ''].odds
            inItem.fsrate = this.oddsList['21003_' + inItem.ball + ''].fsrate
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
          &:nth-child(3) {
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
  }
</style>
