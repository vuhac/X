<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">
        <div class="decial-1 alignItems">
          <div :key="indexOut" v-for="(itemOut,indexOut) in listTop" class="decial-1-item">
            <div class="all-item">
              <div :key="indexInner"
                   @click="clickFocus(itemInner)"
                   v-for="(itemInner,indexInner) in itemOut.mess"
                   class="box">

                <div class="banBo-item-left">
                  <span :class="{'active':itemInner.active}" class="theBall">{{itemInner.ball}}</span>
                  <span :class="{'active':itemInner.active}" class="price">{{itemInner.price}}</span>

                  <input v-model="itemInner.model"
                         @keyup="keyupInput(itemInner)"
                         @keydown="keydownInput(itemInner)"
                         @click.stop="focusInput(itemInner)"
                         :class="{'active':itemInner.active}" type="text">

                  <vp-drop-down class="select-toggle-add"
                                v-on:drop-down-say="seletPrice"
                                v-on:drop-down-hide="hidePrice" :itemInner="itemInner"
                                v-if="seletPriceStaue===itemInner.id"></vp-drop-down>
                </div>
                <div class="banBo-item-right">
                  <span :key="indexThird"
                        v-for="(itemThird,indexThird) in sort(itemInner.list)"
                        :style="{'background':itemInner.color}">{{itemThird.num}}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="lottery-content-all-right">
        <vp-fast-and-submit v-on:range-say="rangeChange"
                            v-on:submit-Input-say="fastInput"
                            v-on:submit-resetAll="resetAll"
                            v-on:submit-review="review"
                            :totalCount="totalCount"
                            :selectFast="selectFast"
                            :saveSelectMoney="saveSelectMoney"
                            :rangleType="rangleType"></vp-fast-and-submit>
      </div>
    </form>

    <Modal :scrollable=true title="投注信息"
           v-model="modal"
           class-name="vp-betting-warp"
           width="584" height="400"
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
        allData: data.banBo,
        listTop: data.banBo[0].list
      }
    },
    methods: {
      sort (arr) {
        const newArr = JSON.parse(JSON.stringify(arr))
        newArr.sort((v1, v2) => {
          return parseInt(v1.num) - parseInt(v2.num)
        })
        return newArr
      },
      //分发赔率
      async oddsBelong () {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.code = '20204'
            inItem.price = this.oddsList['20204_' + inItem.ball + ''].odds
            inItem.fixedOdds = this.oddsList['20204_' + inItem.ball + ''].odds
            inItem.fsrate = this.oddsList['20204_' + inItem.ball + ''].fsrate
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
  @import "../../../../../../assets/less/public/var.less";


   /deep/ .ivu-modal{
     margin:0
   }


  .lottery-content-all-wrap {
    .lottery-content-all-left {
      .alignItems {
        display: flex;
        align-items: stretch;
      }

      .decial-1 {
        &-item {
          border: 1px solid @theme-border-color;
          border-left: 0;
          width: 50%;
          float: left;

          &:last-child {
            border-right: 1px solid @theme-border-color;
          }

          &:first-child {
            border-left: 1px solid @theme-border-color;
          }

          .all-item {
            padding-top: 5px;
            padding-bottom: 5px;

            .box {
              cursor: pointer;
              padding: 10px 0 10px 14px;
              padding-left: 15px;
              text-align: left;
              line-height: 32px;
              display: flex;

              .banBo-item-left {
                position: relative;
                width: 147px;
                text-align: center;

                .select-toggle-add.decial-select-down {
                  right: 0;
                }

                .theBall {
                  float: left;
                  cursor: pointer;
                  font-size: 16px;

                  &.active {
                    color: #ff5c5c;
                  }
                }

                input {
                  width: 58px;
                  height: 30px;
                  line-height: 30px;
                  float: right;
                  border: 1px solid @theme-border-color;
                  padding: 5px;
                  color: rgba(0, 0, 0, 1);
                  opacity: 0.6;
                  text-align: center;
                  border-radius: 3px;
                  font-size: 14px;
                  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05) inset;
                  outline: none;

                  &.active {
                    border: 1px solid #ff5c5c;
                    color: #ff5c5c;
                    opacity: 1;
                    box-shadow: 0 0 0 rgba(0, 0, 0, 0.05) inset;
                  }
                }

                .price {
                  color: #888;
                  line-height: 32px;
                  font-size: 16px;
                  cursor: pointer;

                  &.active {
                    color: #ff5c5c;
                    opacity: 1;
                  }
                }
              }

              .banBo-item-right {
                padding-left: 12px;

                span {
                  font-size: 16px;
                  display: inline-block;
                  width: 25px;
                  height: 25px;
                  line-height: 25px;
                  text-align: center;
                  border-radius: 50%;
                  color: #fff;
                  margin-right: 1px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
