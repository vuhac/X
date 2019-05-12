<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">
        <!-- 独胆 -->
        <div class="select-menu-wrap">
          <div @click="selectModelFc('佰拾定位')" :class="{'active':selectModel.dingWei=='佰拾定位'}">佰拾定位</div>
          <div @click="selectModelFc('佰个定位')" :class="{'active':selectModel.dingWei=='佰个定位'}">佰个定位</div>
          <div @click="selectModelFc('拾个定位')" :class="{'active':selectModel.dingWei=='拾个定位'}">拾个定位</div>
        </div>
        <div class="lottery-content-min-height">
          <div class="lottery-header-common-all">
            <span>二字定位</span>
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
  import LotterySev from '@/pages/public/tradition/data/LotterySev.js'

  export default {
    mixins: [childIndex],
    data () {
      return {
        selectModel: {
          dingWei: '佰拾定位'
        },
        allData: data.erZiDingWei,
        listTop: data.erZiDingWei[0].list
      }
    },
    methods: {
      selectModelFc (name) {
        this.selectModel.dingWei = name
      },
      //分发赔率
      async oddsBelong () {
        // 冠、亚军和
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.title = '二字定位'
            inItem.code = '21010'
            inItem.price = this.oddsList['21010_' + inItem.ball].odds
            inItem.fixedOdds = this.oddsList['21010_' + inItem.ball].odds
            inItem.fsrate = this.oddsList['21010_' + inItem.ball].fsrate
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
      },
      submit () {
        this.submitList = []
        this.allData.forEach((outItem) => {
          outItem.list.forEach((intItem) => {
            intItem.mess.forEach((thirItem) => {
              if (thirItem.active && thirItem.model) {
                this.submitList.push(thirItem)
              }
            })
          })
        })
        let submitArr = []
        this.submitList.forEach((item) => {
          let finalModel
          if (this.childNeedMess.series == 'lhc') {
            finalModel = item.model
          } else {
            finalModel = ((+item.model) * (+this.totalCount.ratio) * (+this.totalCount.db)).toFixed(2)
          }

          submitArr.push({
            'code': item.ball,
            'playway': item.code,
            'odds': item.fixedOdds,
            'money': finalModel,
            'ball': this.selectModel.dingWei.substring(0, 2),
            'attach': ''
          })
        })
        LotterySev.vpSubmit.call(this, submitArr)
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
</style>
