<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">
        <div class="lottery-content-min-height">
          <div class="decial-1">
            <div class="decial-1-item">
              <div class="title">项目</div>
              <div class="all-item">
                <div class="box title">
                  <span>单</span>
                </div>
                <div class="box title">
                  <span>双</span>
                </div>
                <div class="box title">
                  <span>大</span>
                </div>
                <div class="box title">
                  <span>小</span>
                </div>
                <div class="box title">
                  <span>红波</span>
                </div>
                <div class="box title">
                  <span>蓝波</span>
                </div>
                <div class="box title">
                  <span>绿波</span>
                </div>
                <div class="box title">
                  <span>合大</span>
                </div>
                <div class="box title">
                  <span>合小</span>
                </div>
                <div class="box title">
                  <span>合单</span>
                </div>
                <div class="box title">
                  <span>合双</span>
                </div>
                <div class="box title">
                  <span>尾大</span>
                </div>
                <div class="box title">
                  <span>尾小</span>
                </div>
              </div>
            </div>
            <div :key="indexOut" v-for="(itemOut,indexOut) in listTop" class="decial-1-item">
              <div class="title">{{itemOut.title}}</div>
              <div class="all-item">
                <div :key="indexInner" @click="clickFocus(itemInner)" v-for="(itemInner,indexInner) in itemOut.mess"
                     class="box">
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
        <!-- <vp-history ref="vpHistory"></vp-history> -->
      </div>
      <div class="lottery-content-all-right">
        <vp-fast-and-submit v-on:range-say="rangeChange" v-on:submit-Input-say="fastInput"
                            v-on:submit-resetAll="resetAll" v-on:submit-review="review" :totalCount="totalCount"
                            :selectFast="selectFast" :saveSelectMoney="saveSelectMoney" :rangleType="rangleType">
        </vp-fast-and-submit>
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
  import data from '@/pages/public/tradition/data/liu-he-cai'
  import childIndex from '@/pages/public/tradition/data/child-index'

  export default {
    mixins: [childIndex],
    data () {
      return {
        rangleType: '六合彩',
        allData: data.oneToSix,
        listTop: data.oneToSix[0].list
      }
    },
    methods: {
      //分发赔率
      async oddsBelong () {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.code = '20213'
            inItem.price = this.oddsList['20213_' + inItem.ball + ''].odds
            inItem.fixedOdds = this.oddsList['20213_' + inItem.ball + ''].odds
            inItem.fsrate = this.oddsList['20213_' + inItem.ball + ''].fsrate
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


  .lottery-content-all-wrap {
    .lottery-content-all-left {
      .lottery-content-min-height {
        .decial-1 {
          .decial-1-item {
            &:nth-child(n+2) {
              .all-item {
                .box {
                  padding:8px 6px;
                  span {
                    padding-right: 8px;
                  }
                }
              }
            }

            &:nth-child(1) {
              .all-item {
                .box {
                  padding: 8px;

                  &:nth-child(n+1) {
                    height: 48px;
                    border-bottom: 0;

                    span {
                      text-indent: 5px;
                      height: 34px;
                      width: 34px;
                      font-size: 18px;
                      display: inline-block;
                      line-height: 34px;
                      text-align: center;
                      border: 1px solid #ececec;
                      background: #f8f5f5;
                      color: #666;
                      border-radius: 50%;
                    }
                  }

                  &:nth-child(n+5) {
                    span {
                      width: 60px;
                      border-radius: 16px;
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
