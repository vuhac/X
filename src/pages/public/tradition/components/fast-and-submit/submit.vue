<template>
  <div class="lottery-content-all-right-submit">
    <div class="decial-right-title">共 <span>{{totalCount.number}}</span> 注，总额 <span>{{totalCount.total.length>10?totalCount.total.toFixed(4):totalCount.total}}</span>
      元
    </div>
    <div v-if="rangleType!='六合彩'" class="decial-right-range">
      <Slider @on-input="sliderChange" :step="0.5" :min="0" :max="13" v-model="rangeVal"></Slider>
      <div class="tip">
        <span>0.0%</span> <span>{{rangeVal}}%</span>
      </div>
    </div>
    <div class="decial-right-select">
      <div :key="index" v-for="(item,index) in selectFast.list" @click="chooseFastMoney(item,index)"
           :class="{'active':item.active}">
        <span>{{item.price}}</span>
      </div>
    </div>
    <div v-if="rangleType!='六合彩'" class="decial-right-yuanJiao">
      <div class="single-money">
        <div class="btn">
          <span @click="decrease">-</span>
          <input type="tel" v-model="totalCount.db" @blur="blurFc">
          <span @click="add">+</span>
        </div>
        <div class="mydiv">倍</div>
        <div class="select">
          <div class="lt-select" @click.stop="dropStaue=!dropStaue">
            <span class="left">{{totalCount.mol}}</span>
            <span class="right">
                        <span></span>
                    </span>
          </div>
          <ul class="lt-select-box" v-if="dropStaue">
            <div class="arrow">

            </div>
            <li @click="changeMol('元')" class="lt-select-option">
              元
            </li>
            <li @click="changeMol('角')" class="lt-select-option">
              角
            </li>
            <li @click="changeMol('分')" class="lt-select-option">
              分
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="decial-right-submit">
      <input @keyup="fastInput" v-model="saveSelectMoney.money" placeholder="输入自定义金额" type="text">
      <div class="sure" @click="review"><i class="iconfont icon-enter"></i> 确认投注</div>
      <a href=" #javascript;">
        <button class="clear" @click="resetAll" type="reset"><i class="iconfont icon-icon-pc-del"></i>清空</button>
      </a>
    </div>
  </div>

</template>
<script>
  export default {
    props: {
      totalCount: {
        type: Object
      },
      selectFast: {
        type: Object
      },
      saveSelectMoney: {
        type: Object
      },
      rangleType: {
        type: String
      }
    },
    data () {
      return {
        rangeVal: 0,
        dropStaue: false,
      }
    },
    methods: {
      //改变反水
      sliderChange (num) {
        this.$emit('range-say', num)
      },
      //快速金额
      chooseFastMoney (datas, index) {
        this.saveSelectMoney.money = ''
        this.selectFast.list.forEach((item, v) => {
          if (index != v) {
            item.active = false
          }
        })
        datas.active = !datas.active
        if (datas.active) {
          this.saveSelectMoney.money = +datas.price
        }

        this.$emit('submit-Input-say')
      },
      //输入倍数框失去焦点
      blurFc () {
        let status = this.dInvalidMoney(this.totalCount.db)
        if (!status || !this.totalCount.db) {
          this.totalCount.db = 1
        }
      },
      //下拉框选中
      changeMol (mol) {
        this.totalCount.mol = mol
        if (mol == '元') {
          this.totalCount.ratio = 1
        } else if (mol == '角') {
          this.totalCount.ratio = .1
        } else if (mol == '分') {
          this.totalCount.ratio = .01
        }
        this.hide()
        this.$emit('submit-Input-say', 'countOnly')
      },
      fastInput () {
        if (this.dInvalidMoney(this.saveSelectMoney.money)) {
          this.$emit('submit-Input-say')
        } else {
          this.saveSelectMoney.money = ''
        }
      },
      resetAll () {
        //快速选择样式
        this.saveSelectMoney.money = ''//清空输入钱
        this.selectFast.list.forEach((item, v) => {
          item.active = false
        })
        this.totalCount.number = 0
        this.totalCount.total = 0
        this.$emit('submit-resetAll')
      },
      //提交查看提交详情
      review () {
        this.$emit('submit-review')
      },
      //减少倍数
      decrease () {
        this.totalCount.db = +this.totalCount.db - 1
        if (this.totalCount.db < 2) {
          this.totalCount.db = 1
        }
        this.$emit('submit-Input-say', 'countOnly')
      },
      //增加倍数
      add () {
        this.totalCount.db = +this.totalCount.db + 1
        this.$emit('submit-Input-say', 'countOnly')
      },
      //隐藏下拉框（元角分）
      hide () {
        this.dropStaue = false
      }
    },
    watch: {},
    created: function () {
    },
    mounted () {
      let $this = this
      document.querySelector('body').addEventListener('click', $this.hide, false)
    },
    beforeDestroy () {
      let $this = this
      //必须传入同一个否则取消不了
      document.querySelector('body').removeEventListener('click', $this.hide, false)

    },
    components: {}
  }
</script>
