<template>
  <div v-show="ifTrend" class="lottery-luzhu">
    <div class="decial-3-title">
      <Select @on-change="selBall" v-model="ball" class="select-common-css">
        <Option v-for="item in ballList" :value="item.title" :key="item.title">{{ item.title}}</Option>
      </Select>
      <span>
          <label :class="{
              'active':datas.nowSelect===item.title,
              'over':datas.nowSelect.length>4
              }" @click="changeTab(item)" v-for="(item,index) in itemList" :key='index'>
              {{item.title}}
          </label>
      </span>
    </div>
    <div class="decial-3-history">
      <!-- <div class="loading" v-if="!datas.lastData.length">暂无数据</div> -->
      <div class="list" :key="indexOut" v-for="(itemOut,indexOut) in datas.lastData">
        <div class="list-item" :style="{zIndex:datas.lastData.length+100-indexInner-indexOut}" :key="indexInner"
             v-for="(itemInner,indexInner) in itemOut.list">
                      <span :class="{
                        'red':itemInner.ball==='大'||itemInner.ball==='双'||itemInner.ball==='龙',
                        'blue':itemInner.ball==='小'||itemInner.ball==='单'||itemInner.ball==='虎'||itemInner.ball,
                        'green':itemInner.ball==='和'
                      }">{{itemInner.ball}}</span>
          <!-- <div class="zoom" v-show="itemInner.ball">
                {{itemInner.issue}}期<br>
                开奖结果：{{itemInner.result}}
          </div>                         -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      childNeedMess: {
        type: Object
      }
    },
    data () {
      return {
        ball: '第1球',
        ballList: [],//所有数据
        itemList: [],//二级导航数据
        datas: {
          lastData: [], //最终数据
          nowSelect: '',//当前选择哪一个三级导航
          datasTotal: []
        },
        ifTrend: true,
        showLengt: 1
      }
    },
    methods: {

      // 获取历史记录
      async getData (data) {
        this.ballList = JSON.parse(JSON.stringify(data))

        if (!data) {
          this.ifTrend = false
          return false
        }

        this.ball = data[0].title
        this.ballList.forEach((outItem) => {
          outItem.list.forEach((intItem) => {
            intItem.list = intItem.list.reverse()
          })
        })

        this.getSecTab()

        this.$nextTick(() => {
          this.showLengt >= 38 ? document.querySelector('.decial-3-history').scrollLeft = 9000 : 0
        })

      },
      //获取list切换
      getSecTab (status) {
        this.ballList.forEach((item) => {
          if (this.ball === item.title) {
            this.itemList = item.list
            if (!status) {
              this.datas.nowSelect = item.list[0].title
            }
          }
        })
        this.lastDataFc()
        this.$nextTick(() => {
          this.showLengt >= 38 ? document.querySelector('.decial-3-history').scrollLeft = 9000 : 0
        })
      },
      //改变导切换
      changeTab (item) {
        this.datas.nowSelect = item.title
        this.lastDataFc()
        this.$nextTick(() => {
          this.showLengt >= 38 ? document.querySelector('.decial-3-history').scrollLeft = 9000 : 0
        })
      },
      // 处理大小方法
      lastDataFc () {
        this.datas.datasTotal = []
        this.datas.lastData = []
        let recieveForWard = []
        let index = 0
        console.log(this.itemList)
        this.itemList.forEach((item) => {
          if (item.title === this.datas.nowSelect) {
            this.datas.datasTotal = item.list
          }
        })
        // return false;
        this.datas.datasTotal.forEach((item, v) => {
          // 通过前后比较得出结果，由于0没有比较直接跳过
          if (v > 0 && this.datas.datasTotal[v].ball !== this.datas.datasTotal[v - 1].ball) {
            let forWard = []
            for (let i = index; i < v; i++) {
              forWard.push(this.datas.datasTotal[i])
            }
            //处理球不够8个的情况
            let forWardArr = forWard.length
            if (forWardArr < 8) {
              for (let j = 1; j <= 8 - forWardArr; j++) {
                forWard.push({})
              }
            }
            //  处理完毕传送最后数据
            recieveForWard.push({list: forWard})
            
            index = v//操作完了再记录
            // console.log("------------")
          }
          // 通过前后比较得出结果，由于最后一个没比较，直接取等于
          if (v === this.datas.datasTotal.length - 1) {
            let last = []
            for (let i = index; i <= v; i++) {
              // console.log(this.datas.datasTotal[i])
              last.push(this.datas.datasTotal[i])
            }
            //处理球不够8个的情况
            let listArr = last.length
            if (listArr < 8) {
              for (let j = 1; j <= 8 - listArr; j++) {
                last.push({})
              }
            }
            //处理龙虎无限重复问题
            // if(listArr>=36){
            //     last.splice(0,listArr-36);
            // }
            // console.log(last)
            //  处理完毕传送最后数据
            recieveForWard.push({list: last})
            //  最后处理列数不够18的情况
            let lastDataLength = recieveForWard.length
            this.showLengt = lastDataLength//用于判断是否滚动
            // console.log(lastDataLength)
            if (lastDataLength < 38) {
              for (let j = 1; j <= 40 - lastDataLength; j++) {
                //  if(j<=2){
                //    recieveForWard.push({list:[{},{},{},{},{},{},{},{}]});
                recieveForWard.push({list: [{}, {}, {}, {}, {}, {}, {}, {}]})
               
                //    }else{
                //         recieveForWard.unshift({list:[{},{},{},{},{},{},{},{}]});
                //    }
              }
            } else if (lastDataLength >= 38) {
              for (let j = 1; j <= 2; j++) {
                //    if(j<=1){
                recieveForWard.push({list: [{}, {}, {}, {}, {}, {}, {}, {}]})
                console.log(888)
                //        recieveForWard.push({list:[{},{},{},{},{},{},{},{}]});

                //    }else{
                //         recieveForWard.unshift({list:[{},{},{},{},{},{},{},{}]});
                //           recieveForWard.unshift({list:[{},{},{},{},{},{},{},{}]});
                //    }
              }
            }

            //进一步处理大于8个球的情况，拐弯
            this.handleTurn(recieveForWard)
          }
        })

      },
      //公共处理转弯
      handleTurn (recieveForWard) {

        let turnArr = []
        let span = -1
        // 处理过29个的情况
        // if(recieveForWard.length>=29){
        //     recieveForWard.splice(29,recieveForWard.length)
        // }

        recieveForWard.forEach((item, v) => {
          let spliceArr = []
          // 第一个大于8长度的
          if (item.list.length > 8 && !turnArr.length && span === -1) {
            //获取大于8长度的数值
            spliceArr = item.list.splice(8, item.list.length - 8)
            //添加循环数
            turnArr.push({list: spliceArr, index: v, length: 8})
            console.log(turnArr);
            //拆分
            item.list.splice(8, item.list.length - 8)
            //前面第几个大于8记录
            span = v
            //前面在前面范围以内的
          } else if (item.list.length > 7 && turnArr.length && span !== -1 && item.list[7].name &&
            turnArr[0].list.length + span >= v
          ) {
            //获取大于7长度的数值
            spliceArr = item.list.splice(7, item.list.length - 7)
            //添加循环数
            turnArr.push({list: spliceArr, index: v, length: 7})
            //拆分
            console.log(turnArr)
            item.list.splice(7, item.list.length - 7)
            //前面第几个大于7记录
            span = v
          } else if (item.list.length > 8 && turnArr.length && span !== -1) {
            //获取大于8长度的数值
            spliceArr = item.list.splice(8, item.list.length - 8)
            //添加循环数
            turnArr.push({list: spliceArr, index: v, length: 8})
            //拆分
            item.list.splice(8, item.list.length - 8)
            //前面第几个大于8记录
            span = v
          }
        })
        this.datas.lastData = recieveForWard
        // console.log(this.datas.lastData)
        if (!turnArr.length) {
          return false
        }
        //2.处理拐弯
        turnArr.forEach((item, j) => {
          //留着看
          //被比较的大于8的长度
          //  console.log(item.length)
          if (item.length === 8) {
            for (let k = 0; k < item.list.length; k++) {
              if (!this.datas.lastData[item.index + k + 1]) {
                return false
              }
              this.datas.lastData[item.index + k + 1]['list'][7] = item.list[k]
            }
          } else if (item.length === 7) {
            for (let k = 0; k < item.list.length; k++) {
              if (!this.datas.lastData[item.index + k + 1]) {
                return false
              }
              this.datas.lastData[item.index + k + 1]['list'][6] = item.list[k]
            }
          }
        })
      },
      //选球
      selBall (val) {
        this.ball = val
        this.getSecTab('click')
      }
    },
    watch: {},
    created: function () {
    },
    mounted () {
      // console.log(this.childNeedMess)
    },
    components: {},
    computed: {}
  }
</script>


