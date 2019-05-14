<template>
  <div class="lottery-content-all-wrap">
    <form ref="formDynamic">
      <div class="lottery-content-all-left">
        <div class="he-xiao-header-wrap">
          <div :key="index" v-for="(item,index) in navigation.list" class="he-xiao-header-item">
            <span :class="{'active':item.title==navigation.navSelect}" @click="navSelectFc(item)">{{item.title}}</span>
          </div>
        </div>
        <div class="decial-1 alignItems">
          <div :key="indexOut" v-for="(itemOut,indexOut) in listTop" class="decial-1-item">
            <div class="all-item">
              <el-checkbox-group v-model="checkList">
                <div :key="indexInner" v-for="(itemInner,indexInner) in itemOut.mess" class="box lian-ma-cheacBox">
                  <span :style="{'background':itemInner.color}" :class="{'active':itemInner.active}" class="theBall">{{itemInner.ball}}</span>
                  <span :class="{'active':itemInner.active}" class="price">{{itemInner.price}}</span>
                  <el-checkbox @click.native.stop="''" @change="checkboxChange($event,itemInner)"
                               :disabled="itemInner.disabled" :label="itemInner"></el-checkbox>
                </div>
              </el-checkbox-group>
            </div>

          </div>
        </div>
      </div>
      <div class="lottery-content-all-right">
        <vp-fast-and-submit v-on:range-say="rangeChange" v-on:submit-Input-say="fastInput"
                            v-on:submit-resetAll="resetAll" v-on:submit-review="review" :totalCount="totalCount"
                            :selectFast="selectFast" :saveSelectMoney="saveSelectMoney" :rangleType="rangleType" :confirmbet="confirmbet">
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
  import vpBetting from '../../../components/betting/betting'
  import vpFastAndSubmit from '../../../components/fast-and-submit/submit'
  import UserService from '@/service/public/UserService.js'
  import LotterySev from '@/pages/public/tradition/data/LotterySev.js'
  import store from '@/vuex/store'
  import data from '@/pages/public/tradition/data/liu-he-cai'
  import vpHistory from '../../../components/history/history'

  export default {
    props: {
      childNeedMess: {
        type: Object
      },
      isopen: {
        type: Boolean
      },
      oddsListPar: {
        type: Object
      },
      animalList: {
        type: Object
      }
    },
    data () {
      return {
        modal: false,
        confirmbet:true,
        rangleType: '六合彩',
        oddsList: '',
        animaList: '',
        checkList: [],
        disabledRadio: false,
        totalCount: {
          number: 0,
          total: 0
        },
        saveSelectMoney: {
          money: ''
        },
        selectFast: {
          list: [{
            price: 10,
            active: false
          },
            {
              price: 20,
              active: false
            },
            {
              price: 50,
              active: false
            },
            {
              price: 100,
              active: false
            },
            {
              price: 500,
              active: false
            },
            {
              price: 1000,
              active: false
            }
          ],
          select: ''
        },
        submitList: [],
        navigation: {
          navSelect: '五不中',
          list: [{
            title: '五不中'
          },
            {
              title: '六不中'
            },
            {
              title: '七不中'
            },
            {
              title: '八不中'
            },
            {
              title: '九不中'
            },
            {
              title: '十不中'
            },
            {
              title: '十一不中'
            },
            {
              title: '十二不中'
            }
          ]
        },
        listTop: [{
          title: '连码',
          mess: [{
              code: '',
              title: '正码',
              ball: '01',
              color: '#BC2A1B',
              boSe: '红',
              he: '单',
              id: '01',
              model: '',
              price: '0.0',
              active: false,
              disabled: false
            },
            {
              code: '',
              title: '正码',
              ball: '02',
              color: '#BC2A1B',
              boSe: '红',
              he: '双',
              id: '02',
              model: '',
              price: '0.0',
              active: false,
              disabled: false
            },
            {
              code: '',
              title: '正码',
              ball: '03',
              color: '#1C8CE2',
              boSe: '蓝',
              he: '单',
              id: '03',
              model: '',
              price: '0.0',
              active: false,
              disabled: false
            },
            {
              code: '',
              title: '正码',
              ball: '04',
              color: '#1C8CE2',
              boSe: '蓝',
              he: '双',
              id: '04',
              model: '',
              price: '0.0',
              active: false,
              disabled: false
            },
            {
              code: '',
              title: '正码',
              ball: '05',
              color: '#49BB27',
              boSe: '绿',
              he: '单',
              id: '05',
              model: '',
              price: '0.0',
              active: false,
              disabled: false
            },
            {
              code: '',
              title: '正码',
              ball: '06',
              color: '#49BB27',
              boSe: '绿',
              he: '双',
              id: '06',
              model: '',
              price: '0.0',
              active: false,
              disabled: false
            },
            {
              code: '',
              title: '正码',
              ball: '07',
              color: '#BC2A1B',
              boSe: '红',
              he: '单',
              id: '07',
              model: '',
              price: '0.0',
              active: false,
              disabled: false
            },
            {
              code: '',
              title: '正码',
              ball: '08',
              color: '#BC2A1B',
              boSe: '红',
              he: '双',
              id: '08',
              model: '',
              price: '0.0',
              active: false,
              disabled: false
            },
            {
              code: '',
              title: '正码',
              ball: '09',
              color: '#1C8CE2',
              boSe: '蓝',
              he: '单',
              id: '09',
              model: '',
              price: '0.0',
              active: false,
              disabled: false
            },
            {
              code: '',
              title: '正码',
              ball: '10',
              color: '#1C8CE2',
              boSe: '蓝',
              he: '单',
              id: '10',
              model: '',
              price: '0.0',
              active: false,
              disabled: false
            }
          ]
        },
          {
            title: '连码',
            mess: [{
              code: '',
              title: '正码',
              ball: '11',
              color: '#49BB27',
              boSe: '绿',
              he: '双',
              id: '11',
              model: '',
              price: '0.0',
              active: false,
              disabled: false
            },
              {
                code: '',
                title: '正码',
                ball: '12',
                color: '#BC2A1B',
                boSe: '红',
                he: '单',
                id: '12',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '13',
                color: '#BC2A1B',
                boSe: '红',
                he: '双',
                id: '13',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '14',
                color: '#1C8CE2',
                boSe: '蓝',
                he: '单',
                id: '14',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '15',
                color: '#1C8CE2',
                boSe: '蓝',
                he: '双',
                id: '15',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '16',
                color: '#49BB27',
                boSe: '绿',
                he: '单',
                id: '16',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '17',
                color: '#49BB27',
                boSe: '绿',
                he: '双',
                id: '17',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '18',
                color: '#BC2A1B',
                boSe: '红',
                he: '单',
                id: '18',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '19',
                color: '#BC2A1B',
                boSe: '红',
                he: '双',
                id: '19',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '20',
                color: '#1C8CE2',
                boSe: '蓝',
                he: '双',
                id: '20',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              }
            ]
          },
          {
            title: '连码',
            mess: [{
              code: '',
              title: '正码',
              ball: '21',
              color: '#49BB27',
              boSe: '绿',
              he: '单',
              id: '21',
              model: '',
              price: '0.0',
              active: false,
              disabled: false
            },
              {
                code: '',
                title: '正码',
                ball: '22',
                color: '#49BB27',
                boSe: '绿',
                he: '双',
                id: '22',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '23',
                color: '#BC2A1B',
                boSe: '红',
                he: '单',
                id: '23',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '24',
                color: '#BC2A1B',
                boSe: '红',
                he: '双',
                id: '24',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '25',
                color: '#1C8CE2',
                boSe: '蓝',
                he: '单',
                id: '25',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '26',
                color: '#1C8CE2',
                boSe: '蓝',
                he: '双',
                id: '26',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '27',
                color: '#49BB27',
                boSe: '绿',
                he: '单',
                id: '27',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '28',
                color: '#49BB27',
                boSe: '绿',
                he: '双',
                id: '28',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '29',
                color: '#BC2A1B',
                boSe: '红',
                he: '单',
                id: '29',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '30',
                color: '#BC2A1B',
                boSe: '红',
                he: '单',
                id: '30',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              }
            ]
          },
          {
            title: '连码',
            mess: [{
              code: '',
              title: '正码',
              ball: '31',
              color: '#1C8CE2',
              boSe: '蓝',
              he: '双',
              id: '31',
              model: '',
              price: '0.0',
              active: false,
              disabled: false
            },
              {
                code: '',
                title: '正码',
                ball: '32',
                color: '#49BB27',
                boSe: '绿',
                he: '单',
                id: '32',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '33',
                color: '#49BB27',
                boSe: '绿',
                he: '双',
                id: '33',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '34',
                color: '#BC2A1B',
                boSe: '红',
                he: '单',
                id: '34',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '35',
                color: '#BC2A1B',
                boSe: '红',
                he: '双',
                id: '35',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '36',
                color: '#1C8CE2',
                boSe: '蓝',
                he: '单',
                id: '36',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '37',
                color: '#1C8CE2',
                boSe: '蓝',
                he: '双',
                id: '37',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '38',
                color: '#49BB27',
                boSe: '绿',
                he: '单',
                id: '38',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '39',
                color: '#49BB27',
                boSe: '绿',
                he: '双',
                id: '39',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '40',
                color: '#BC2A1B',
                boSe: '红',
                he: '双',
                id: '40',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              }
            ]
          },
          {
            title: '连码',
            mess: [{
              code: '',
              title: '正码',
              ball: '41',
              color: '#1C8CE2',
              boSe: '蓝',
              he: '单',
              id: '41',
              model: '',
              price: '0.0',
              active: false,
              disabled: false
            },
              {
                code: '',
                title: '正码',
                ball: '42',
                color: '#1C8CE2',
                boSe: '蓝',
                he: '双',
                id: '42',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '43',
                color: '#49BB27',
                boSe: '绿',
                he: '单',
                id: '43',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '44',
                color: '#49BB27',
                boSe: '绿',
                he: '双',
                id: '44',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '45',
                color: '#BC2A1B',
                boSe: '红',
                he: '单',
                id: '45',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '46',
                color: '#BC2A1B',
                boSe: '红',
                he: '双',
                id: '46',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '47',
                color: '#1C8CE2',
                boSe: '蓝',
                he: '单',
                id: '47',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '48',
                color: '#1C8CE2',
                boSe: '蓝',
                he: '双',
                id: '48',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              },
              {
                code: '',
                title: '正码',
                ball: '49',
                color: '#49BB27',
                boSe: '绿',
                he: '单',
                id: '49',
                model: '',
                price: '0.0',
                active: false,
                disabled: false
              }
            ]
          }
        ]
      }
    },
    methods: {
      //点击外框选中
      outSideCli (itemOut, itemInner) {},
      //切换合肖方式
      navSelectFc (item) {
        this.navigation.navSelect = item.title
        this.resetAll()
        // 顺序不能变
        this.getOdds()
      },
      // 生肖对碰
      async getAnimaNum (item, position) {
        if (!this.animaList) {
          this.animaList = this.animalList
          this.animNumBelong()
        } else {
          this.animNumBelong()
        }
      },
      //分发生肖对应号
      async animNumBelong (item, position) {
        //存在且相等
        if (
          this.footerAnima.modelT &&
          this.footerAnima.modelB &&
          this.footerAnima.modelT == this.footerAnima.modelB
        ) {
          this.$store.commit('alert/showTipModel', {
            bool: true,
            title: '对不起!请重新选择两个不一样的生肖!!',
            model: 'warn'
          })
          this.footerAnima.modelT = ''
          this.footerAnima.modelB = ''
          this.footerTail.modelT = ''
          this.footerTail.modelB = ''
          return false
        }

        // 赋值号码，为了统一
        if (
          this.footerAnima.modelT &&
          this.footerAnima.modelB &&
          this.footer.model == '生肖对碰'
        ) {
          // 还原
          this.listTop.forEach((outItem, v) => {
            outItem.mess &&
            outItem.mess.forEach((inItem, v) => {
              inItem.active = false
            })
          })
          let animaT = this.animaList[this.footerAnima.modelT]
          let animaB = this.animaList[this.footerAnima.modelB]
          this.listTop.forEach((outItem, v) => {
            outItem.mess &&
            outItem.mess.forEach((inItem, v) => {
              if (
                animaT.includes(+inItem.ball) ||
                animaB.includes(+inItem.ball)
              ) {
                inItem.active = true
              }
            })
          })
          this.calculationTotal()
        }
        // 肖串尾
        if (this.footerAnima.modelT && this.footer.model == '肖串尾') {
          // 尾不还原
          let selectNumT = this.footerTail.modelT.split('尾')[0]
          this.listTop.forEach((outItem, v) => {
            outItem.mess &&
            outItem.mess.forEach((inItem, v) => {
              if (
                (+inItem.ball > 9 && inItem.ball.split('')[1] != selectNumT) ||
                (+inItem.ball < 10 && +inItem.ball != +selectNumT)
              ) {
                inItem.active = false
              }
            })
          })

          let animaT = this.animaList[this.footerAnima.modelT]
          this.listTop.forEach((outItem, v) => {
            outItem.mess &&
            outItem.mess.forEach((inItem, v) => {
              if (animaT.includes(+inItem.ball)) {
                inItem.active = true
              }
            })
          })
          this.calculationTotal()
        }
      },
      // 选中取消checkbox
      checkboxChange ($event, datas) {
        // 全部不能过10个
        // if (this.checkList.length > 1) {
        //   this.$store.commit("alert/showTipModel", {
        //     bool: true,
        //     title: "最多选择10个数字!!",
        //     model: "warn"
        //   });
        //   this.checkList.splice(10, 1);
        //   return false;
        // }
        // 三全中胆拖或者三中二
        // if (
        //   (this.navigation.navSelect == '三全中' && this.footer.model == '胆拖') ||
        //   (this.navigation.navSelect == '三中二' && this.footer.model == '胆拖') ||
        //   (this.navigation.navSelect == '四中一' && this.footer.model == '胆拖')
        // ) {
        //   if (this.checkList.length && this.checkList.length == 1 && $event) {
        //     this.footer.dan1Model = this.checkList[0].ball
        //     datas.disabled = true
        //   }
        //   if (this.checkList.length && this.checkList.length == 2 && $event) {
        //     this.footer.dan2Model = this.checkList[1].ball
        //     datas.disabled = true
        //   }
        // }
        // // 二全中胆拖或者二中特
        // if (
        //   (this.navigation.navSelect == '二全中' && this.footer.model == '胆拖') ||
        //   (this.navigation.navSelect == '二中特' && this.footer.model == '胆拖') ||
        //   (this.navigation.navSelect == '特串' && this.footer.model == '胆拖')
        // ) {
        //   if (this.checkList.length && this.checkList.length == 1 && $event) {
        //     this.footer.dan1Model = this.checkList[0].ball
        //     datas.disabled = true
        //   }
        // }
        // //公共加选中为了后面提交验证
        // this.listTop.forEach((outItem, v) => {
        //   outItem.mess &&
        //   outItem.mess.forEach((inItem, v) => {
        //     if (inItem.ball == datas.ball) {
        //       inItem.active = $event
        //     }
        //     // if(this.saveSelectMoney.money&&inItem.active){
        //     //      inItem.model=this.saveSelectMoney.money;
        //     // }
        //   })
        // })

        if(this.navigation.navSelect == '五不中'){
          if(this.checkList.length>5){
              this.$store.commit("alert/showTipModel", {
                bool: true,
                title: "最多选择五项!!",
                model: "warn"
              });
              this.checkList.splice(5, 1);
              return false;
          }
        }
        if(this.navigation.navSelect == '六不中'){
          if(this.checkList.length>6){
              this.$store.commit("alert/showTipModel", {
                bool: true,
                title: "最多选择六项!!",
                model: "warn"
              });
              this.checkList.splice(6, 1);
              return false;
          }
        }
        if(this.navigation.navSelect == '七不中'){
          if(this.checkList.length>7){
              this.$store.commit("alert/showTipModel", {
                bool: true,
                title: "最多选择七项!!",
                model: "warn"
              });
              this.checkList.splice(7, 1);
              return false;
          }
        }
        if(this.navigation.navSelect == '八不中'){
          if(this.checkList.length>8){
              this.$store.commit("alert/showTipModel", {
                bool: true,
                title: "最多选择八项!!",
                model: "warn"
              });
              this.checkList.splice(8, 1);
              return false;
          }
        }
        if(this.navigation.navSelect == '九不中'){
          if(this.checkList.length>9){
              this.$store.commit("alert/showTipModel", {
                bool: true,
                title: "最多选择九项!!",
                model: "warn"
              });
              this.checkList.splice(9, 1);
              return false;
          }
        }
        if(this.navigation.navSelect == '十不中'){
          if(this.checkList.length>10){
              this.$store.commit("alert/showTipModel", {
                bool: true,
                title: "最多选择十项!!",
                model: "warn"
              });
              this.checkList.splice(10, 1);
              return false;
          }
        }
        if(this.navigation.navSelect == '十一不中'){
          if(this.checkList.length>11){
              this.$store.commit("alert/showTipModel", {
                bool: true,
                title: "最多选择十一项!!",
                model: "warn"
              });
              this.checkList.splice(11, 1);
              return false;
          }
        }
        if(this.navigation.navSelect == '十二不中'){
          if(this.checkList.length>12){
              this.$store.commit("alert/showTipModel", {
                bool: true,
                title: "最多选择十二项!!",
                model: "warn"
              });
              this.checkList.splice(12, 1);
              return false;
          }
        }
        console.log(datas)
        //公共加选中为了后面提交验证
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.ball == datas.ball) {
              inItem.active = $event
            }
            if(this.saveSelectMoney.money&&inItem.active){
                 inItem.model=this.saveSelectMoney.money;
            }
          })
        })


        // 算总共金额和单数
        this.calculationTotal()
      },
      //切换radio
      radioChange (item) {
        this.footer.modal = item.label
        if (this.footer.modal == '正常' || this.footer.modal == '胆拖') {
          this.footerAnima.disabledT = true
          this.footerAnima.disabledB = true
          this.footerTail.disabledT = true
          this.footerTail.disabledB = true
          this.listTop.forEach((outItem, v) => {
            outItem.mess &&
            outItem.mess.forEach((inItem, v) => {
              if (this.isopen) {
                inItem.disabled = false
              }
            })
          })
        }
        if (this.footer.modal == '生肖对碰') {
          this.footerAnima.disabledT = false
          this.footerAnima.disabledB = false
          this.footerTail.disabledT = true
          this.footerTail.disabledB = true
          this.listTop.forEach((outItem, v) => {
            outItem.mess &&
            outItem.mess.forEach((inItem, v) => {
              inItem['disabled'] = true
            })
          })
        }
        if (this.footer.modal == '尾数对碰') {
          this.footerAnima.disabledT = true
          this.footerAnima.disabledB = true
          this.footerTail.disabledT = false
          this.footerTail.disabledB = false
          this.listTop.forEach((outItem, v) => {
            outItem.mess &&
            outItem.mess.forEach((inItem, v) => {
              if (this.isopen) {
                inItem.disabled = true
              }
            })
          })
        }
        if (this.footer.modal == '肖串尾') {
          this.footerAnima.disabledT = false
          this.footerAnima.disabledB = true
          this.footerTail.disabledT = false
          this.footerTail.disabledB = true
          this.listTop.forEach((outItem, v) => {
            outItem.mess &&
            outItem.mess.forEach((inItem, v) => {
              if (this.isopen) {
                inItem.disabled = true
              }
            })
          })
        }
        this.resetAllSpecial(item.label)
        this.getOdds()
      },
      //快速替换填金额
      fastInput (type) {
        if (!this.isopen) return false
        this.calculationTotal()
      },
      //计算全部金额
      calculationTotal () {
        // 计算总数
        let number = 0
        let total = 0
        console.log("开始计算")
        // 五不中
        if (
          (this.navigation.navSelect == '五不中'&&this.checkList.length==5)
        ) {
          console.log(this.listTop)
          // this.listTop.forEach((outItem, v) => {
          //   outItem.mess &&
          //   outItem.mess.forEach((inItem, v) => {
          //     if (inItem.active) {
          //       number += 1
          //     }
          //   })
          // })
          number=1;
          if (this.saveSelectMoney.money) {
            total = number * +this.saveSelectMoney.money
            this.totalCount.total = total
          }
        }
        // 六不中
        if (
          (this.navigation.navSelect == '六不中'&&this.checkList.length==6)
        ) {
          console.log(this.listTop)
          // this.listTop.forEach((outItem, v) => {
          //   outItem.mess &&
          //   outItem.mess.forEach((inItem, v) => {
          //     if (inItem.active) {
          //       number += 1
          //     }
          //   })
          // })
          number=1;
          if (this.saveSelectMoney.money) {
            total = number * +this.saveSelectMoney.money
            this.totalCount.total = total
          }
        }
        // 七不中
        if (
          (this.navigation.navSelect == '七不中'&&this.checkList.length==7)
        ) {
          console.log(this.listTop)
          // this.listTop.forEach((outItem, v) => {
          //   outItem.mess &&
          //   outItem.mess.forEach((inItem, v) => {
          //     if (inItem.active) {
          //       number += 1
          //     }
          //   })
          // })
          number=1;
          if (this.saveSelectMoney.money) {
            total = number * +this.saveSelectMoney.money
            this.totalCount.total = total
          }
        }
        // 八不中
        if (
          (this.navigation.navSelect == '八不中'&&this.checkList.length==8)
        ) {
          console.log(this.listTop)
          // this.listTop.forEach((outItem, v) => {
          //   outItem.mess &&
          //   outItem.mess.forEach((inItem, v) => {
          //     if (inItem.active) {
          //       number += 1
          //     }
          //   })
          // })
          number=1;
          if (this.saveSelectMoney.money) {
            total = number * +this.saveSelectMoney.money
            this.totalCount.total = total
          }
        }
        // 九不中
        if (
          (this.navigation.navSelect == '九不中'&&this.checkList.length==9)
        ) {
          console.log(this.listTop)
          // this.listTop.forEach((outItem, v) => {
          //   outItem.mess &&
          //   outItem.mess.forEach((inItem, v) => {
          //     if (inItem.active) {
          //       number += 1
          //     }
          //   })
          // })
          number=1;
          if (this.saveSelectMoney.money) {
            total = number * +this.saveSelectMoney.money
            this.totalCount.total = total
          }
        }
        // 十不中
        if (
          (this.navigation.navSelect == '十不中'&&this.checkList.length==10)
        ) {
          console.log(this.listTop)
          // this.listTop.forEach((outItem, v) => {
          //   outItem.mess &&
          //   outItem.mess.forEach((inItem, v) => {
          //     if (inItem.active) {
          //       number += 1
          //     }
          //   })
          // })
          number=1;
          if (this.saveSelectMoney.money) {
            total = number * +this.saveSelectMoney.money
            this.totalCount.total = total
          }
        }
        // 十一不中
        if (
          (this.navigation.navSelect == '十一不中'&&this.checkList.length==11)
        ) {
          console.log(this.listTop)
          // this.listTop.forEach((outItem, v) => {
          //   outItem.mess &&
          //   outItem.mess.forEach((inItem, v) => {
          //     if (inItem.active) {
          //       number += 1
          //     }
          //   })
          // })
          number=1;
          if (this.saveSelectMoney.money) {
            total = number * +this.saveSelectMoney.money
            this.totalCount.total = total
          }
        }
        // 十二不中
        if (
          (this.navigation.navSelect == '十二不中'&&this.checkList.length==12)
        ) {
          console.log(this.listTop)
          // this.listTop.forEach((outItem, v) => {
          //   outItem.mess &&
          //   outItem.mess.forEach((inItem, v) => {
          //     if (inItem.active) {
          //       number += 1
          //     }
          //   })
          // })
          number=1;
          if (this.saveSelectMoney.money) {
            total = number * +this.saveSelectMoney.money
            this.totalCount.total = total
          }
        }
        console.log(number,total)
        // 统计的注数和钱数
        this.totalCount.number = number
        this.totalCount.total = total
      },
      //获取赔率信息
      async getOdds () {
        if (!this.oddsList) {
          this.oddsList = this.oddsListPar
          this.oddsBelong()
        } else {
          this.oddsBelong()
        }
      },
      // 分发赔率
      async oddsBelong () {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            let codeString = ''
            if (this.navigation.navSelect == '五不中') {
              codeString = '20270'
              inItem.title = '五不中'
            }
            if (this.navigation.navSelect == '六不中') {
              codeString = '20271'
              inItem.title = '六不中'
            }
            if (this.navigation.navSelect == '七不中') {
              codeString = '20272'
              inItem.title = '七不中'
            }
            if (this.navigation.navSelect == '八不中') {
              codeString = '20273'
              inItem.title = '八不中'
            }
            if (this.navigation.navSelect == '九不中') {
              codeString = '20274'
              inItem.title = '九不中'
            }
            if (this.navigation.navSelect == '十不中') {
              codeString = '20275'
              inItem.title = '十不中'
            }
            if (this.navigation.navSelect == '十一不中') {
              codeString = '20276'
              inItem.title = '十一不中'
            }
            if (this.navigation.navSelect == '十二不中') {
              codeString = '20277'
              inItem.title = '十二不中'
            }

            //保存提交code
            inItem.code = codeString
            inItem.price = this.oddsList[
            '' + codeString + '_' + inItem.ball + ''
              ].odds
            inItem.fsrate = this.oddsList[
            '' + codeString + '_' + inItem.ball + ''
              ].fsrate
          })
        })
      },
      // 该变赔率和返水
      rangeChange () {},
      // 重置所有信息
      resetAll () {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.active = false
            inItem.model = ''
            if (this.isopen) {
              inItem.disabled = false
            }
          })
        })
        //清空提交
        this.submitList = [] //提交清空
        this.checkList = [] //清空选中
        this.selectFast.list.forEach((item, v) => {
          item.active = false
        })
        this.totalCount.number = 0
        this.totalCount.total = 0
        this.saveSelectMoney.money = '' //清空输入钱
        this.seletPriceStaue = ''
      },
      // 重置所有信息(特殊)
      resetAllSpecial (label) {
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.active = false
            inItem.model = ''
            if (this.isopen && label == '胆拖') {
              inItem.disabled = false
            }
          })
        })
        //清空提交
        this.submitList = [] //提交清空
        this.checkList = [] //清空选中
        this.footer.dan1Model = ''
        this.footer.dan2Model = ''
        this.footerAnima.modelT = ''
        this.footerAnima.modelB = ''
        this.footerTail.modelT = ''
        this.footerTail.modelB = ''
        this.seletPriceStaue = ''
        this.selectFast.list.forEach((item, v) => {
          item.active = false
        })
        this.totalCount.number = 0
        this.totalCount.total = 0
        this.saveSelectMoney.money = '' //清空输入钱
        this.seletPriceStaue = ''
      },
      // 提交前检查，展示
      review () {
        if (!this.isopen) return false
        // debugger
        // if (
        //   (this.footer.model == "正常" &&
        //     this.navigation.navSelect == "三全中" &&
        //     this.checkList.length < 3) ||
        //   (this.footer.model == "正常" &&
        //     this.navigation.navSelect == "三中二" &&
        //     this.checkList.length < 3) ||
        //   (this.footer.model == "胆拖" &&
        //     this.navigation.navSelect == "三全中" &&
        //     this.checkList.length < 3) ||
        //   (this.footer.model == "胆拖" &&
        //     this.navigation.navSelect == "三中二" &&
        //     this.checkList.length < 3)
        // ) {
        //   this.$store.commit("alert/showTipModel", {
        //     bool: true,
        //     title: "至少选三项!!",
        //     model: "warn"
        //   });
        //   return false;
        // }
        // if (
        //   (this.footer.model == "正常" &&
        //     this.navigation.navSelect == "二全中" &&
        //     this.checkList.length < 2) ||
        //   (this.footer.model == "正常" &&
        //     this.navigation.navSelect == "二中特" &&
        //     this.checkList.length < 2) ||
        //   (this.footer.model == "正常" &&
        //     this.navigation.navSelect == "特串" &&
        //     this.checkList.length < 2) ||
        //   (this.footer.model == "胆拖" &&
        //     this.navigation.navSelect == "二全中" &&
        //     this.checkList.length < 2) ||
        //   (this.footer.model == "胆拖" &&
        //     this.navigation.navSelect == "二中特" &&
        //     this.checkList.length < 2) ||
        //   (this.footer.model == "胆拖" &&
        //     this.navigation.navSelect == "特串" &&
        //     this.checkList.length < 2)
        // ) {
        //   this.$store.commit("alert/showTipModel", {
        //     bool: true,
        //     title: "至少选两项!!",
        //     model: "warn"
        //   });
        //   return false;
        // }
        // if (
        //   (this.footer.model == "正常" &&
        //     this.navigation.navSelect == "四中一" &&
        //     this.checkList.length < 4) ||
        //   (this.footer.model == "胆拖" &&
        //     this.navigation.navSelect == "四中一" &&
        //     this.checkList.length < 4)
        // ) {
        //   this.$store.commit("alert/showTipModel", {
        //     bool: true,
        //     title: "至少选四项!!",
        //     model: "warn"
        //   });
        //   return false;
        // }
        // if (
        //   (this.footer.model == "肖串尾" && !this.footerAnima.modelT) ||
        //   (this.footer.model == "肖串尾" && !this.footerTail.modelT)
        // ) {
        //   this.$store.commit("alert/showTipModel", {
        //     bool: true,
        //     title: "请选择肖和尾!!",
        //     model: "warn"
        //   });
        //   return false;
        // }
        
        // 判断情况
        if(
          (this.navigation.navSelect == '五不中' && this.checkList.length != 5) ||
          (this.navigation.navSelect == '六不中' && this.checkList.length != 6) ||
          (this.navigation.navSelect == '七不中' && this.checkList.length != 7) ||
          (this.navigation.navSelect == '八不中' && this.checkList.length != 8) ||
          (this.navigation.navSelect == '九不中' && this.checkList.length != 9) ||
          (this.navigation.navSelect == '十不中' && this.checkList.length != 10) ||
          (this.navigation.navSelect == '十一不中' && this.checkList.length != 11) ||
          (this.navigation.navSelect == '十二不中' && this.checkList.length != 12) 
        ){
            this.$store.commit('alert/showTipModel', {
              bool: true,
              title: '请选择' + this.navigation.navSelect + '!!',
              model: 'warn'
            })
            return false
        }
        let ballString = ''
        let dantuo = '胆（'
        let minPrice = 0
        this.submitList = []
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            if (inItem.active) {
              this.submitList.push(inItem)
              // if (this.footer.model != "胆拖") {
              //   ballString += inItem.ball + ",";
              // } else {
              //被禁用
              if (inItem.disabled) {
                dantuo += inItem.ball + ','
              } else {
                ballString += inItem.ball + ','
              }
              // }

              // if (
              //   this.navigation.navSelect == "三中二" ||
              //   this.navigation.navSelect == "二中特"
              // ) {
              //   minPrice = inItem.price;
              // } else {
              +inItem.price > minPrice ?
                (minPrice = +inItem.price) :
                (minPrice = minPrice)
              // }
            }
          })
        })
        // // 切分文字显示
        // if (this.footer.model == "胆拖") {
        //   dantuo = dantuo.substring(0, dantuo.length - 1);
        //   ballString = dantuo + ")," + ballString;
        // }
        // if (this.footer.model == "生肖对碰") {
        //   ballString = "";
        //   ballString =
        //     this.footerAnima.modelT +
        //     ":[" +
        //     this.animaList[this.footerAnima.modelT] +
        //     "]" +
        //     "<br/>" +
        //     this.footerAnima.modelB +
        //     ":[" +
        //     this.animaList[this.footerAnima.modelB] +
        //     "],";
        // }
        // if (this.footer.model == "肖串尾") {
        //   ballString = "";
        //   this.listTop.forEach((outItem, v) => {
        //     outItem.mess &&
        //       outItem.mess.forEach((inItem, v) => {
        //         if (
        //           inItem.active &&
        //           !this.animaList[this.footerAnima.modelT].includes(+inItem.ball)
        //         ) {
        //           ballString += inItem.ball + ",";
        //         }
        //       });
        //   });
        //   ballString =
        //     this.footerAnima.modelT +
        //     ":[" +
        //     this.animaList[this.footerAnima.modelT] +
        //     "]" +
        //     "<br/>" +
        //     ballString;
        // }
        // 判断金额
        // if (this.saveSelectMoney.money < 10) {
        //   this.$store.commit("alert/showTipModel", {
        //     bool: true,
        //     title: "下注金额不可小於最低限度:10!!",
        //     model: "warn"
        //   });
        //   return false;
        // }
        if (this.submitList.length && this.saveSelectMoney.money) {
          this.modal = true
        } else {
          this.$store.commit('alert/showTipModel', {
            bool: true,
            title: '请选择并输金额!',
            model: 'warn'
          })
          return false
        }
        // console.log(this.submitList)
        this.$refs.betting.getList(
          [{
            title: this.submitList[0].title,
            ball: ballString.substring(0, ballString.length - 1),
            model: this.saveSelectMoney.money,
            price: minPrice
          }],
          this.totalCount,
          this.childNeedMess
        )
      },
      // 封盘
      disabled () {
        this.$nextTick(() => {
          for (let i = 0; 0 < this.$refs.formDynamic.length; i++) {
            if (i == this.$refs.formDynamic.length - 1) return false
            this.$refs.formDynamic[i].setAttribute('disabled', true)
            this.$refs.formDynamic[i].style.cursor = 'not-allowed'
          }
        })
        this.listTop.forEach((outItem, v) => {
          outItem.mess &&
          outItem.mess.forEach((inItem, v) => {
            inItem.disabled = true
          })
        })
        this.modal = false
        this.disabledRadio = true
      },
      // 开盘
      abled () {
        this.$nextTick(() => {
          for (let i = 0; 0 < this.$refs.formDynamic.length; i++) {
            if (i == this.$refs.formDynamic.length - 1) return false
            this.$refs.formDynamic[i].removeAttribute('disabled', false)
            this.$refs.formDynamic[i].style.cursor = 'text'
          }
        })
        this.listTop.forEach((outItem, v) => {
          outItem.mess && outItem.mess.forEach((inItem, v) => {
            inItem.disabled = false
          })
        })
        this.disabledRadio = false
      },
      //正式提交
      async submit () {
        if (!this.isopen) return false
        let submitArr = []
        this.submitList.forEach((item) => {
          let finalModel = this.saveSelectMoney.money
          // if (this.footer.model == "胆拖") {
          //   let dTARR = [];
          //   if (this.footer.dan1Model) dTARR.push(this.footer.dan1Model);
          //   if (this.footer.dan2Model) dTARR.push(this.footer.dan2Model);
          //   submitArr.push({
          //     "code": item.ball,
          //     "playway": item.code,
          //     "odds": item.price,
          //     "money": finalModel,
          //     "ball": item.title,
          //     "attach": dTARR.join()
          //   })
          // } else if (this.footer.model == "生肖对碰") {
          //   submitArr = [{
          //     "code": this.footerAnima.modelT,
          //     "playway": item.code,
          //     "odds": item.price,
          //     "money": finalModel,
          //     "ball": item.title,
          //     "attach": ""
          //   }, {
          //     "code": this.footerAnima.modelB,
          //     "playway": item.code,
          //     "odds": item.price,
          //     "money": this.saveSelectMoney.money,
          //     "ball": item.title,
          //     "attach": ""
          //   }]
          // } else if (this.footer.model == "尾数对碰") {
          //   submitArr = [{
          //     "code": this.footerTail.modelT,
          //     "playway": item.code,
          //     "odds": item.price,
          //     "money": finalModel,
          //     "ball": item.title,
          //     "attach": ""
          //   }, {
          //     "code": this.footerTail.modelB,
          //     "playway": item.code,
          //     "odds": item.price,
          //     "money": this.saveSelectMoney.money,
          //     "ball": item.title,
          //     "attach": ""
          //   }]
          // } else if (this.footer.model == "肖串尾") {
          //   submitArr = [{
          //     "code": this.footerAnima.modelT,
          //     "playway": item.code,
          //     "odds": item.price,
          //     "money": finalModel,
          //     "ball": item.title,
          //     "attach": ""
          //   }, {
          //     "code": this.footerTail.modelT,
          //     "playway": item.code,
          //     "odds": item.price,
          //     "money": this.saveSelectMoney.money,
          //     "ball": item.title,
          //     "attach": ""
          //   }]
          // } else {
          submitArr.push({
            'code': item.ball,
            'playway': item.code,
            'odds': item.price,
            'money': finalModel,
            'ball': item.title,
            'attach': ''
          })
          // }
        })
        // console.log(this.submitList)
        this.confirmbet=false
        let res = await this.$http.post(`${this.$HOST_NAME}/lottery/submit`, {
          lotteryId: this.$route.meta.id,
          issue: this.childNeedMess.issue,
          code: JSON.stringify(submitArr),
          rebate: this.rebate
        })
        if (res && res.code == 200) {
          this.confirmbet=true
          this.dNotify(res.data, 'success')
          this.resetAll()
          UserService.vpGetBasicInfo.call(this)
        } else {
          this.confirmbet=true
          this.dNotify(res.message, 'error')
        }
      },
      //发送走势数据
      getTrend (trend) {
        // this.$nextTick(()=>{
        //     this.$refs['vpHistory'].getData(trend.list);
        // })
      }
    },
    // 听封盘
    watch: {
      isopen (isopen) {
        if (isopen) {
          this.abled()
        } else {
          this.disabled()
        }
      },
      oddsListPar: {
        handler: function (val, oldVal) {
          this.getOdds()
        },
        deep: true
      },
      animalList: {
        handler: function (val, oldVal) {
          this.getAnimaNum()
        },
        deep: true
      }
    },
    created: function () {
      if (this.isopen) {
        //   this.abled();
      } else {
        this.disabled()
      }
      if (JSON.stringify(this.oddsListPar) != '{}') {
        this.getOdds()
      }

    },
    mounted () {},
    components: {
      vpBetting,
      vpFastAndSubmit,
      vpHistory
    },
    store
  }
</script>
<style lang="less" scoped>
  @import "../../../../../../assets/less/public/var.less";

  /deep/ .ivu-modal{
     margin:0
  }

  .lottery-content-all-wrap {
    .lottery-content-all-left {
      .he-xiao-header-wrap {
        width: 100%;
        height: 48px;
        border: 1px solid @theme-border-color;
        padding: 10px 48px;

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

      .alignItems {
        display: flex;
        align-items: stretch;
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

          .all-item {
            padding-top: 5px;
            padding-bottom: 5px;

            .box {
              position: relative;
              height: 54px;
              cursor: pointer;
              padding: 8px 20px 8px 20px;
              line-height: 32px;
              width: 100%;

              .theBall {
                width: 34px;
                height: 34px;
                font-size: 18px;
                float: left;
                display: inline-block;
                line-height: 34px;
                text-align: center;
                color: #fff;
                //   border: 1px solid #ececec;
                border-radius: 50%;

                &.active {
                  // background: #FF5C5C;
                  // color: #fff;
                }
              }

              .price {
                padding-left: 30px;
                color: #888;
                line-height: 32px;
                font-size: 16px;
                min-width: 32px;

                &.active {
                  // color: #FF5C5C;
                  // opacity: 1;
                }
              }

              .el-checkbox {
                float: right;
              }

              &:first-child {
                //    margin-top: 15px;
              }

              &:last-child {
                //    margin-bottom: 15px;
              }
            }
          }
        }
      }

      .zheng-ma-footer-wrap {
        border: 1px solid #ededed;
        padding: 0 20px;
        zoom: 1;
        overflow: hidden;
        position: relative;

        .zheng-ma-footer-left {
          .el-radio-group {
            float: left;

            div {
              float: left;
              margin-right: 20px;
              font-size: 14px;
              color: #666;

              .el-radio {
                padding: 17px 0;
              }
            }
          }
        }

        .zheng-ma-footer-right {
          position: absolute;
          right: 20px;
          top: 8px;

          .footer-right-item {
            float: left;

            &:first-child {
              margin-right: 18px;
            }

            div {
              width: 58px;
              height: 30px;
              line-height: 30px;
              display: inline-block;
              border: 1px solid @theme-border-color;
              padding: 5px;
              color: #888;
              opacity: 0.6;
              text-align: center;
              border-radius: 3px;
              font-size: 14px;
              box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05) inset;
              outline: none;
              line-height: 20px;
            }

            span {
              padding-right: 12px;
              font-size: 14px;
              color: #666;
              line-height: 57 xp;
              padding-bottom: 3px;
              display: inline-block;
              float: left;
              line-height: 37px;
            }
          }
        }
      }

      .lian-ma-table {
        tr {
          td {
            width: 80px;
            text-align: center;
            line-height: 32px;
            font-size: 14px;
            color: #666666;
            border: 1px solid #ededed;

            .el-radio {
              padding: 6px 16px;
            }
          }
        }
      }

      .lian-ma-table.bot {
        tr {
          td {
            width: 90px;
          }
        }
      }
    }
  }
</style>
