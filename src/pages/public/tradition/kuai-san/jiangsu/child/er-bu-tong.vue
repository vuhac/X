<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">
        <!-- 二不同 -->
        <div class="lottery-content-min-height">
          <div class="lottery-header-common-all first">
            <span>二不同</span>
          </div>
          <div class="lottery-header-common-all first">
            <span>从11-66中任意选1个或者多个号码，选号与奖号（包含11-66，不限顺序）相同即为中奖（不含豹子）</span>
          </div>
          <div class="decial-1 alignItems sanTong erTong">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listMore" class="decial-1-item">
              <div class="all-item">
                <div :key="indexInner" @click="clickFocus(itemInner)" v-for="(itemInner,indexInner) in itemOut.mess"
                     class="box">
                  <span :class="{
                                      'bgActive1':itemThird.ball=='1',
                                      'bgActive2':itemThird.ball=='2',
                                      'bgActive3':itemThird.ball=='3',
                                      'bgActive4':itemThird.ball=='4',
                                      'bgActive5':itemThird.ball=='5',
                                      'bgActive6':itemThird.ball=='6'
                                      }" :key="indexThird" v-for="(itemThird,indexThird) in itemInner.list"
                        class="ksBall"></span>
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
  import data from '@/pages/public/tradition/data/kuai-san'
  import childIndex from '@/pages/public/tradition/data/child-index'

  export default {
    mixins: [childIndex],
    data () {
      return {
        allData: data.ziXuan,
        listMore: data.ziXuan[5].list
      }
    },
    methods: {
      //分发赔率
      async oddsBelong () {
        this.listMore.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.code = '20505'
            inItem.price = this.oddsList['20505_' + inItem.ball + ''].odds
            inItem.fixedOdds = this.oddsList['20505_' + inItem.ball + ''].odds
            inItem.fsrate = this.oddsList['20505_' + inItem.ball + ''].fsrate
          })
        })
      },
      // 提交前检查，展示
      review () {
        if (!this.isopen) return false
        let reviewArr = []
        this.listMore.forEach((outItem, v) => {
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
    /deep/ .ivu-modal{
      margin:0;
    }

  .lottery-content-all-wrap {
    .lottery-content-all-left {
      .bottom {
        display: flex;

        input {
          width: 58px;
          height: 30px;
          line-height: 30px;
          float: right;
          border: 1px solid #ededed;
          padding: 5px;
          color: #000000;
          opacity: 0.6;
          text-align: center;
          border-radius: 3px;
          font-size: 14px;
          box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05) inset;
          outline: none;
        }

        .item {
          flex: 1;
          padding: 10px;
          border: 1px solid #ededed;
          border-top: none;
          cursor: pointer;

          .child {
            display: flex;
            justify-content: center;
            align-items: center;

            span:nth-child(2) {
              margin: 0 15px;
            }
          }
        }

        .price.active {
          color: #ff5c5c;
        }

        input.active {
          color: #ff5c5c;
          border: 1px solid #ff5c5c;
        }
      }

      .decial-1 {
        &.listQuick1 {
          .decial-1-item {
            width: 100%;

            .all-item {
              display: flex;
              justify-content: center;

              .box {
                span {
                  float: left;
                  padding: 0 10px;
                }

                input {
                  float: left;
                }

                .gYHe-drop-down {
                  top: 40px;
                  left: 95px;
                }
              }
            }
          }
        }
      }

      .decial-1 {
        &-item {
          border: 1px solid @theme-border-color;
          border-left: 0;
          width: 175px;
          float: left;

          &:last-child {
            border-right: 1px solid @theme-border-color;
          }

          &:first-child {
            border-left: 1px solid @theme-border-color;
          }

          .num {
            height: 46px;
            letter-spacing: 6px;
            color: #444444;
            font-size: 16px;
            line-height: 46px;
            text-align: center;
            border-bottom: 2px solid #ebe9e9;
          }

          .all-item {
            padding-top: 5px;
            padding-bottom: 5px;

            .box {
              cursor: pointer;
              padding: 8px 12px 8px 12px;
              text-align: center;
              position: relative;
              line-height: 32px;

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

              .theBall {
                width: 34px;
                height: 34px;
                font-size: 18px;
                float: left;
                display: inline-block;
                background: #f8f5f5;
                border-radius: 50%;
                line-height: 34px;
                text-align: center;
                color: #666666;
                //   border: 1px solid #ececec;
                cursor: pointer;

                &.active {
                  background: #ff5c5c;
                  color: #fff;
                }
              }

              .price {
                color: #888;

                line-height: 32px;
                font-size: 16px;
                // padding: 0 10px;
                cursor: pointer;

                &.active {
                  color: #ff5c5c;
                  opacity: 1;
                }
              }
            }
          }
        }
      }

      .decial-1.hezhi {
        .gYHe-drop-down {
          right: 20px;
        }

        .decial-1-item {
          width: 300px;

          .all-item {
            .box {
              cursor: pointer;
              padding: 8px 20px;
            }
          }
        }
      }

      .decial-1.sanTong {
        .gYHe-drop-down {
          top: 46px;
          right: 18px;
        }

        .decial-1-item {
          width: 400px;

          .all-item {
            .box {
              cursor: pointer;
              padding: 8px 20px;

              .ksBall {
                display: inline-block;
                width: 37px;
                height: 37px;
                line-height: 37px;
                margin-top: -3px;
                float: left;
                margin-right: 10px;

                &:nth-child(3) {
                  margin-right: 0;
                }

                &.bgActive1 {
                  background: url("/static/public/image/lottery/kuai3/ksone@3x.png");
                  background-size: 100% 100%;
                }

                &.bgActive2 {
                  background: url("/static/public/image/lottery/kuai3/kstwo@3x.png");
                  background-size: 100% 100%;
                }

                &.bgActive3 {
                  background: url("/static/public/image/lottery/kuai3/ksthree@3x.png");
                  background-size: 100% 100%;
                }

                &.bgActive4 {
                  background: url("/static/public/image/lottery/kuai3/ksfour@3x.png");
                  background-size: 100% 100%;
                }

                &.bgActive5 {
                  background: url("/static/public/image/lottery/kuai3/ksfive@3x.png");
                  background-size: 100% 100%;
                }

                &.bgActive6 {
                  background: url("/static/public/image/lottery/kuai3/kssix@3x.png");
                  background-size: 100% 100%;
                }
              }

              .price {
                line-height: 16px;
              }
            }
          }
        }
      }

      .decial-1.sanTong.erTong {
        .gYHe-drop-down {
          right: 38px;
        }

        .decial-1-item {
          .all-item {
            .box {
              cursor: pointer;
              padding: 8px 40px;

              .ksBall {
                display: inline-block;
                width: 37px;
                height: 37px;
                line-height: 37px;
                float: left;

                &.bgActive1 {
                  background: url("/static/public/image/lottery/kuai3/ksone@3x.png");
                  background-size: 100% 100%;
                }

                &.bgActive2 {
                  background: url("/static/public/image/lottery/kuai3/kstwo@3x.png");
                  background-size: 100% 100%;
                }

                &.bgActive3 {
                  background: url("/static/public/image/lottery/kuai3/ksthree@3x.png");
                  background-size: 100% 100%;
                }

                &.bgActive4 {
                  background: url("/static/public/image/lottery/kuai3/ksfour@3x.png");
                  background-size: 100% 100%;
                }

                &.bgActive5 {
                  background: url("/static/public/image/lottery/kuai3/ksfive@3x.png");
                  background-size: 100% 100%;
                }

                &.bgActive6 {
                  background: url("/static/public/image/lottery/kuai3//kssix@3x.png");
                  background-size: 100% 100%;
                }
              }

              .price {
                line-height: 16px;
              }
            }
          }
        }
      }
    }
  }
</style>
