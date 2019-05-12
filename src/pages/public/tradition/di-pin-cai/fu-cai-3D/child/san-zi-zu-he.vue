<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">
        <div class="lottery-content-min-height">
          <!-- 独胆 -->
          <div class="lottery-header-common-all first">
            <span>三字组合</span>
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
        allData: [],
        listTop: []
      }
    },
    methods: {
      //分发赔率
      async oddsBelong () {
        let datas = [
          {
            list: [
              {title: '三字定位', start: 0, mess: []},
              {title: '三字定位', start: 200, mess: []},
              {title: '三字定位', start: 400, mess: []},
              {title: '三字定位', start: 600, mess: []},
              {title: '三字定位', start: 800, mess: []}
            ]
          }
        ]
        datas.forEach(outItem => {
          outItem.list.forEach((intItem, v2) => {
            for (let i = 0; i < 200; i++) {
              let ball
              if (intItem.start + i < 10) {
                ball = '00' + (intItem.start + i)
              } else if (intItem.start + i >= 10 && intItem.start + i < 100) {
                ball = '0' + (intItem.start + i)
              } else {
                ball = intItem.start + i
              }
              if (ball.toString() === '1000') {
                return false
              }
              console.log(ball)
              intItem.mess.push({
                code: '21006',
                title: '三字定位',
                ball: ball,
                id: '三字定位' + (intItem.start + i),
                model: '',
                price: '',
                fixedOdds: '',
                fsrate: '',
                active: false
              })
            }
          })
        })

        datas[0].list.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.ball = inItem.ball.toString()
            if (
              inItem.ball.substring(0, 1) != inItem.ball.substring(1, 2) &&
              inItem.ball.substring(1, 2) != inItem.ball.substring(2, 3) &&
              inItem.ball.substring(0, 1) != inItem.ball.substring(2, 3)
            ) {
              inItem.code = '21006'
              inItem.price = this.oddsList['21006_XOY'].odds
              inItem.fixedOdds = this.oddsList['21006_XOY'].odds
              inItem.fsrate = this.oddsList['21006_XOY'].fsrate
            } else if (
              inItem.ball.substring(0, 1) == inItem.ball.substring(1, 2) &&
              inItem.ball.substring(1, 2) == inItem.ball.substring(2, 3)
            ) {
              inItem.code = '21006'
              inItem.price = this.oddsList['21006_XXX'].odds
              inItem.fixedOdds = this.oddsList['21006_XXX'].odds
              inItem.fsrate = this.oddsList['21006_XXX'].fsrate
            } else {
              inItem.code = '21006'
              inItem.price = this.oddsList['21006_XXO'].odds
              inItem.fixedOdds = this.oddsList['21006_XXO'].odds
              inItem.fsrate = this.oddsList['21006_XXO'].fsrate
            }
          })
        })
        this.listTop = datas[0].list
        this.allData = datas
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
  .lottery-content-all-wrap {
    .lottery-content-all-left {
      .lottery-content-min-height {
        .decial-1 {
          height: 780px;
          overflow-y: auto;

          .decial-1-item {
            .all-item {
              .box {
                  padding: 8px 6px;
                .theBall {
                  width: 40px;
                  height: 30px;
                  line-height: 30px;
                  border-radius: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
