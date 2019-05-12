<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">
        <div class="lottery-content-min-height">
          <div class="he-xiao-header-wrap">
            <div :key="index" v-for="(item,index) in navigation" class="he-xiao-header-item">
              <span :class="{'active':item.title==navSelect}" @click="navSelectFc(item)">{{item.title}}</span>
            </div>
          </div>
          <div class="decial-1">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listTop" class="decial-1-item">
              <div class="all-item">
                <div :key="indexInner" @click="clickFocus(itemInner)" v-for="(itemInner,indexInner) in itemOut.mess"
                     class="box">
                  <span :class="{'active':itemInner.active}" :style="{'background':itemInner.color}" class="theBall">{{itemInner.ball}}</span>
                  <span :class="{'active':itemInner.active}" class="price">{{itemInner.price}}</span>
                  <input v-model="itemInner.model" @keyup="keyupInput(itemInner)" @keydown="keydownInput(itemInner)"
                         @click.stop="focusInput(itemInner)" :class="{'active':itemInner.active}" type="text">
                  <vp-drop-down v-on:drop-down-say="seletPrice" v-on:drop-down-hide="hidePrice" :itemInner="itemInner"
                                v-if="seletPriceStaue==itemInner.id"></vp-drop-down>
                </div>
              </div>

            </div>
          </div>
          <div class="decial-1 lotFour haveMargin">
            <div :key="indexOut" v-for="(itemOut,indexOut) in listBot" class="decial-1-item">
              <!-- <div class="title">{{itemOut.title}}</div> -->
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
          <!-- <vp-history ref="vpHistory"></vp-history> -->
        </div>
      </div>
      <div class="lottery-content-all-right">
        <vp-fast-and-submit v-on:range-say="rangeChange" v-on:submit-Input-say="fastInput"
                            v-on:submit-resetAll="resetAllAdd" v-on:submit-review="review" :totalCount="totalCount"
                            :selectFast="selectFast" :saveSelectMoney="saveSelectMoney" :rangleType="rangleType">
        </vp-fast-and-submit>
        <div class="tema-cheackbox-wrap">
          <div class="cheackbox-wrap">
            <RadioGroup v-model="temaType">
              <Radio value="" label="红大"></Radio>
              <Radio value="" label="红单"></Radio>
              <Radio value="" label="红合单"></Radio>
              <Radio value="" label="红合双"></Radio>
              <Radio value="" label="红双"></Radio>
              <Radio value="" label="红小"></Radio>
              <Radio value="" label="绿大"></Radio>
              <Radio value="" label="绿单"></Radio>
              <Radio value="" label="绿合单"></Radio>
              <Radio value="" label="绿合双"></Radio>
              <Radio value="" label="绿双"></Radio>
              <Radio value="" label="绿小"></Radio>
              <Radio value="" label="蓝大"></Radio>
              <Radio value="" label="蓝单"></Radio>
              <Radio value="" label="蓝合单"></Radio>
              <Radio value="" label="蓝合双"></Radio>
              <Radio value="" label="蓝双"></Radio>
              <Radio value="" label="蓝小"></Radio>
            </RadioGroup>
          </div>
          <div class="selsect-wrap">
            <div class="row">
              <div class="row-item">
                <div @click="rightFastHalfFc('单')" :class="{'active':active.rightFastHalf=='单'}">单</div>
              </div>
              <div class="row-item">
                <div @click="rightFastHalfFc('双')" :class="{'active':active.rightFastHalf=='双'}">双</div>
              </div>
              <div class="row-item">
                <div @click="rightFastHalfFc('大')" :class="{'active':active.rightFastHalf=='大'}">大</div>
              </div>
              <div class="row-item">
                <div @click="rightFastHalfFc('小')" :class="{'active':active.rightFastHalf=='小'}">小</div>
              </div>
              <div :key=index v-for="(item,index) in listRigTemaAnima" class="row-item">
                <div :class="{'active':item.active}" @click="rightFastAnimaFc(item)">{{item.title}}</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </form>
    <Modal :scrollable=true title="投注信息" v-model="modal" class-name="vp-betting-warp" width="584" height="400"
           @on-ok="submit">
      <vp-betting ref="betting"></vp-betting>
    </Modal>
  </div>
</template>
<script>
  import data from '@/pages/public/tradition/data/liu-he-cai'
  import childIndex from '@/pages/public/tradition/data/child-index'
  import childTeMa from '@/pages/public/tradition/data/child-teMa'

  export default {
    mixins: [childIndex, childTeMa],
    props: {
      animalList: {
        type: Object
      }
    },
    data () {
      return {
        rangleType: '六合彩',
        temaType: '',
        navSelect: '正A',
        active: {
          rightFastHalf: ''
        },
        navigation: [{title: '正A'}, {title: '正B'}],
        allData: data.zhengMa,
        listTop: data.zhengMa[0].list,
        listBot: data.zhengMa[1].list,
        listRigTemaAnima: data.listRigTemaAnima,
        listRigTemaDanShuang: data.listRigTemaDanShuang,
        baseTitle: data.zhengMa[0].list[0].title //暂存title
      }
    },
    methods: {
      //分发赔率
      async oddsBelong () {
        let codeString
        if (this.navSelect == '正A') {
          codeString = '20205'
        }
        if (this.navSelect == '正B') {
          codeString = '20206'
        }
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.code = codeString
            inItem.price = this.oddsList[
            '' + codeString + '_' + inItem.ball + ''
              ].odds
            inItem.fixedOdds = this.oddsList[
            '' + codeString + '_' + inItem.ball + ''
              ].odds
            inItem.fsrate = this.oddsList[
            '' + codeString + '_' + inItem.ball + ''
              ].fsrate
            inItem.title = this.baseTitle + this.navSelect
          })
        })
        this.listBot.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.code = codeString
            inItem.price = this.oddsList[
            '' + codeString + '_' + inItem.ball + ''
              ].odds
            inItem.fixedOdds = this.oddsList[
            '' + codeString + '_' + inItem.ball + ''
              ].odds
            inItem.fsrate = this.oddsList[
            '' + codeString + '_' + inItem.ball + ''
              ].fsrate
            inItem.title = this.baseTitle + this.navSelect
          })
        })
        // 遍历生肖对应号
        this.getAnimaNum()
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../../../../../assets/less/public/var.less";
  /deep/ .ivu-modal{
     margin:0
  }
  .he-xiao-header-wrap {
    width: 100%;
    height: 48px;
    border: 1px solid @theme-border-color;
    padding: 10px 10px;

    .he-xiao-header-item {
      float: left;
      margin-right: 29px;

      span {
        font-size: 14px;
        line-height: 24px;
        cursor: pointer;
        padding: 6px 11px;
        color: #888888;
        border-radius: 2px;

        &.active {
          background: #0093d9;
          color: #fff;
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .lottery-content-all-wrap {
    .lottery-content-all-left {
      .lottery-content-min-height {
        .decial-1 {
          &:nth-child(2) {
            .decial-1-item {
              .all-item {
                .box {
                  padding:8px 6px;
                  .theBall {
                    color: #fff;
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
