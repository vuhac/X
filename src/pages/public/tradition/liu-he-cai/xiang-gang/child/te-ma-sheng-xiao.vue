<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">
        <div class="he-xiao-header-wrap">
          <span>特码生肖</span>
        </div>
        <div class="decial-1 alignItems">
          <div :key="indexOut" v-for="(itemOut,indexOut) in listTop" class="decial-1-item">
            <div class="all-item">
              <div :key="indexInner" @click="clickFocus(itemInner)" v-for="(itemInner,indexInner) in itemOut.mess"
                   class="box">
                <div class="banBo-item-left">
                  <span :class="{'active':itemInner.active}" class="theBall">{{itemInner.ball}}</span>
                  <span :class="{'active':itemInner.active}" class="price">{{itemInner.price}}</span>
                  <input v-model="itemInner.model" @keyup="keyupInput(itemInner)" @keydown="keydownInput(itemInner)"
                         @click.stop="focusInput(itemInner)" :class="{'active':itemInner.active}" type="text">
                  <vp-drop-down class="select-toggle-add" v-on:drop-down-say="seletPrice"
                                v-on:drop-down-hide="hidePrice" :itemInner="itemInner"
                                v-if="seletPriceStaue==itemInner.id"></vp-drop-down>
                </div>
                <div class="banBo-item-right">
                  <div :style="{'background':itemThird.color}" class="number" :key="indexThird"
                       v-for="(itemThird,indexThird) in itemInner.list">
                    {{itemThird.ball}}
                  </div>
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
    props: {
      animalList: {
        type: Object
      }
    },
    data () {
      return {
        rangleType: '六合彩',
        allData: data.teMaShengXiao,
        listTop: data.teMaShengXiao[0].list
      }
    },
    methods: {
      //分发赔率
      async oddsBelong () {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            let numString = '20203'
            inItem.code = numString
            inItem.price = this.oddsList[
            '' + numString + '_' + inItem.ball + ''
              ].odds
            inItem.fixedOdds = this.oddsList[
            '' + numString + '_' + inItem.ball + ''
              ].odds
            inItem.fsrate = this.oddsList[
            '' + numString + '_' + inItem.ball + ''
              ].fsrate
          })
        })
      },
      //分发生肖对应号
      async animNumBelong () {
        this.listTop.forEach(outItem => {
          outItem &&
          outItem.mess.forEach(innerItem => {
            innerItem.list.forEach((thirdItem, v) => {
              thirdItem.ball =
                this.animaList['' + innerItem.ball + ''][v] > 9
                  ? this.animaList['' + innerItem.ball + ''][v].toString()
                  : '0' +
                  this.animaList['' + innerItem.ball + ''][v].toString()
            })
          })
        })
        this.animCorBelong()
      },
      //分发生肖颜色
      animCorBelong () {
        let red = [
          1,
          7,
          13,
          19,
          23,
          29,
          35,
          45,
          2,
          8,
          12,
          18,
          24,
          30,
          34,
          40,
          46
        ]
        let blue = [3, 9, 15, 25, 31, 37, 41, 47, 4, 10, 14, 20, 26, 36, 42, 48]
        let green = [
          5,
          11,
          17,
          21,
          27,
          33,
          39,
          43,
          6,
          16,
          22,
          28,
          32,
          38,
          44,
          49
        ]
        this.listTop.forEach(outItem => {
          outItem &&
          outItem.mess.forEach(innerItem => {
            innerItem.list.forEach(thirdItem => {
              if (red.includes(+thirdItem.ball)) {
                thirdItem.color = '#BC2A1B'
              }
              if (blue.includes(+thirdItem.ball)) {
                thirdItem.color = '#1C8CE2'
              }
              if (green.includes(+thirdItem.ball)) {
                thirdItem.color = '#49BB27'
              }
            })
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
    padding: 20px 0 20px 25px;
    display: flex;

    .lottery-content-all-left {
      width: @container-left-width;
      float: left;

      .he-xiao-header-wrap {
        width: 100%;
        height: 48px;
        border: 1px solid @theme-border-color;
        border-bottom: 2px solid #ebe9e9;
        padding: 10px 48px;
        text-align: center;

        .he-xiao-header-item {
          text-align: center;

          span {
            font-size: 14px;
            line-height: 24px;
            cursor: pointer;
            padding: 6px 11px;
            color: #444444;
            border-radius: 2px;
          }
        }
      }

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
              padding: 10px 0 10px 24px;
              padding-left: 15px;
              text-align: left;
              line-height: 32px;
              display: flex;

              .banBo-item-left {
                position: relative;
                width: 145px;
                text-align: center;

                .select-toggle-add.decial-select-down {
                  right: 0;
                }

                .theBall {
                  width: 34px;
                  height: 34px;
                  font-size: 18px;
                  float: left;
                  display: inline-block;
                  background: #f8f5f5;
                  line-height: 34px;
                  text-align: center;
                  color: #666666;
                  border: 1px solid #ececec;
                  border-radius: 50%;
                  cursor: pointer;
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

                .number {
                  float: left;
                  width: 32px;
                  height: 32px;
                  text-align: center;
                  border-radius: 50%;
                  margin-left: 10px;
                  color: #fff;
                  font-size: 18px;
                  border: 1px solid #ececec;
                }
              }
            }
          }
        }
      }
    }

    .lottery-content-all-right {
      width: @container-right-width;
      float: left;
      padding: 10px 0 0 30px;
    }
  }
</style>
