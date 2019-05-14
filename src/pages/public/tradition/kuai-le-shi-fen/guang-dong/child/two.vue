<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">
        <div class="lottery-content-min-height">
          <!-- 第二球 -->
          <div class="lottery-header-common-all first">
            <span>第二球</span>
          </div>
          <div class="decial-1">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listTop" class="decial-1-item">
              <div class="all-item">
                <div :key="indexInner" @click="clickFocus(itemInner)" v-for="(itemInner,indexInner) in itemOut.mess"
                     class="box">
                  <span :class="{'active':itemInner.active}" class="theBall">{{itemInner.ball}}</span>
                  <span :class="{'active':itemInner.active}" class="price">{{itemInner.price}}</span>
                  <input v-model="itemInner.model" @keyup="keyupInput(itemInner)" @keydown="keydownInput(itemInner)"
                         @click.stop="focusInput(itemInner)" :class="{'active':itemInner.active}" type="text">
                  <vp-drop-down class="gYHe-drop-down" v-on:drop-down-say="seletPrice" v-on:drop-down-hide="hidePrice"
                                :itemInner="itemInner" v-if="seletPriceStaue==itemInner.id"></vp-drop-down>
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
  import data from '@/pages/public/tradition/data/kuai-le-shi-fen'
  import childIndex from '@/pages/public/tradition/data/child-index'

  export default {
    mixins: [childIndex],
    data () {
      return {
        allData: data.two,
        listTop: data.two[0].list,
        confirmbet:true
      }
    },
    methods: {
      //分发赔率
      async oddsBelong () {
        // 冠、亚军和
        this.listTop.forEach((outItem, v) => {
          outItem.title = '第二球'
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.title = '第二球'
            if (
              inItem.ball == '合单' ||
              inItem.ball == '合双' ||
              inItem.ball == '大' ||
              inItem.ball == '小' ||
              inItem.ball == '单' ||
              inItem.ball == '双' ||
              inItem.ball == '尾大' ||
              inItem.ball == '尾小'
            ) {
              let code = '20602'
              // if (this.$route.meta.id== "6") {
              //   code = "20902";
              // }
              inItem.code = code
              inItem.price = this.oddsList[code + '_' + inItem.ball + ''].odds
              inItem.fixedOdds = this.oddsList[
              code + '_' + inItem.ball + ''
                ].odds
              inItem.fsrate = this.oddsList[
              code + '_' + inItem.ball + ''
                ].fsrate
            } else {
              let code = '20601'
              // if (this.$route.meta.id== "6") {
              //   code = "20901";
              // }
              inItem.code = code
              inItem.price = this.oddsList[code + '_' + inItem.ball + ''].odds
              inItem.fixedOdds = this.oddsList[
              code + '_' + inItem.ball + ''
                ].odds
              inItem.fsrate = this.oddsList[
              code + '_' + inItem.ball + ''
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
    /deep/ .ivu-modal{
      margin:0;
    }

  .lottery-content-all-wrap {
    .lottery-content-all-left {
      .lottery-content-min-height {
        .decial-1 {
          &:nth-child(2) {
            .decial-1-item {
              &:nth-child(n+3) {
                .all-item {
                  .box {
                    &:nth-child(6), &:nth-child(7) {
                      .theBall {
                        width: 50px;
                        border-radius: 16px;
                        margin-left: -8px;
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
  }
</style>
