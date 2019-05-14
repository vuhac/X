<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">

        <div class="select-menu-wrap">
          <div @click="selectModelFc('佰拾')" :class="{'active':selectModel.heshu=='佰拾'}">佰拾定位</div>
          <div @click="selectModelFc('佰个')" :class="{'active':selectModel.heshu=='佰个'}">佰个定位</div>
          <div @click="selectModelFc('拾个')" :class="{'active':selectModel.heshu=='拾个'}">拾个定位</div>
        </div>
        <!-- 独胆 -->
        <div class="lottery-content-min-height">
          <!-- 佰拾和数 -->
          <div class="lottery-header-common-all">
            <span>{{selectModel.heshu}}和数</span>
          </div>
          <div class="decial-1 ">
            <div :key="indexOut" v-for="(itemOut,indexOut) in list1" class="decial-1-item">
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
          <!-- 佰拾和数尾数 -->
          <div class="lottery-header-common-all">
            <span>{{selectModel.heshu}}和数尾数</span>
          </div>
          <div class="decial-1">
            <div :key="indexOut" v-for="(itemOut,indexOut) in list2" class="decial-1-item">
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
  import data from '@/pages/public/tradition/data/di-pin-cai'
  import childIndex from '@/pages/public/tradition/data/child-index'

  export default {
    mixins: [childIndex],
    data () {
      return {
        selectModel: {
          heshu: '佰拾'
        },
        allData: data.erZiHeShu,
        list1: data.erZiHeShu[0].list,
        list2: data.erZiHeShu[1].list,
        confirmbet:true
      }
    },
    methods: {
      selectModelFc (name) {
        this.selectModel.heshu = name
      },
      //分发赔率
      async oddsBelong () {
        // 冠、亚军和
        this.list1.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.code = '21012'
            inItem.price = this.oddsList['21012_' + inItem.ball + ''].odds
            inItem.fixedOdds = this.oddsList['21012_' + inItem.ball + ''].odds
            inItem.fsrate = this.oddsList['21012_' + inItem.ball + ''].fsrate
          })
        })
        this.list2.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.code = '21013'
            inItem.price = this.oddsList['21013_' + inItem.ball + ''].odds
            inItem.fixedOdds = this.oddsList['21013_' + inItem.ball + ''].odds
            inItem.fsrate = this.oddsList['21013_' + inItem.ball + ''].fsrate
          })
        })
      },
      // 提交前检查，展示
      review () {
        if (!this.isopen) return false
        let reviewArr = []
        this.list1.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.active && inItem.model) {
              inItem.title = this.selectModel.heshu
              reviewArr.push({
                code: '',
                title: this.selectModel.heshu,
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
        this.list2.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.active && inItem.model) {
              inItem.title = this.selectModel.heshu
              reviewArr.push({
                code: '',
                title: this.selectModel.heshu,
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
  .select-menu-wrap {
    display: flex;
    margin-bottom: 10px;

    div {
      flex: 1;
      font-size: 14px;
      background: #f1f1f1;
      text-align: center;
      line-height: 40px;
      cursor: pointer;

      &.active {
        background: #0093d9;
        color: #fff;
      }
    }
  }

  .lottery-content-all-wrap {
    .lottery-content-all-left {
      .lottery-content-min-height {
        .decial-1 {
          &:nth-child(2) {
            .decial-1-item {
              &:nth-child(3) {
                .all-item {
                  .box {
                    &:nth-child(3) {
                      .theBall {
                        width: 60px;
                        margin-left: -8px;
                        border-radius: 10px;
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
