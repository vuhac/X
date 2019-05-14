<template>
  <div :class="is_agency==1 ? 'message' : 'message1'">
    <ul v-if="$store.state.personal.contentView!='recharge'" :class="$store.state.personal.contentView=='personage'? 'perul':''">
      <li v-for="(item,i) in allList" :key="i" :class="{liActive:i==$store.state.personal.navView}" @click="toggle(i)">
        <span>{{item}}</span>
      </li>
    </ul>
    <ul v-else>
      <li v-for="(item,i) in allList" :key="i" :class="{liActive:i==$store.state.personal.navView}"
          @click="toggle2(i,item)">
        <span>{{item.className}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import store from '@/vuex/store'

  export default {
    data () {
      return {
        allList: [],
        agencyList: ['我的收益', '代理报表', '下级报表', '下级开户', '下级列表','下级财务','下级人数'],
        // discountsList: ['推荐好友', '实时返水'],
        discountsList: ['实时返水'],
        messageList: ['系统信息', '投诉建议', '已发信息'],
        personageList: [
          '我的资料',
          '投注记录',
          '存款记录',
          '取款记录',
          "优惠记录",
          '代理记录',
          '其它记录',
          '帐号安全'
        ],
        withdrawList: ['提款申请', '绑定银行卡', '提款记录'],
        is_agency:JSON.parse(localStorage.userinfo).is_agency,
      }
    },
    methods: {

      sortNum(arr){
        for(var i =0;i<=arr.length;i++){
          let oNum=arr[i];
          if(arr[i]>arr[i+1]){
            arr[i]=arr[i+1];
            arr[i+1]=oNum;
          }
        }
        return arr;
      },
      sortNum1(a,b){
        return a-b;
      },

      toggle (i) {
        this.$store.commit('showNav', {child: i})
      },
      toggle2 (i, item) {
        let onlineId=item.id;
        this.liActive = i
        if (i == 0) {
          this.$store.commit('showContent', {parent: 'recharge'})
          this.$store.commit('showNav', {child: i})
        } else {
          this.$store.commit('showContent', {parent: 'recharge'})
          this.$store.commit('showNav', {child: i})
          this.$store.commit('payment', item)
          let postUrl = ''
          if (item.classType == 'qr_code') {
            postUrl = '/deposit/qr_code'
          } else {
            postUrl = '/deposit/online'
          }
          this.$http
            .post(`${this.$HOST_NAME + postUrl}`, {
              categoryId: item.id,
              devices: 'pc'
            })
            .then(res => {
              if (res.code == 200) {
                // console.log(res)
                res.data.forEach(v => {

                  if (v.bankCode && v.bankCode !== 'null') {
                    v.bankCode = JSON.parse(v.bankCode)
                    //  console.log( JSON.parse(v.bankCode))
                    v.codeShow = true
                  } else {
                    v.codeShow = false
                  }
                })

                if(postUrl=="/deposit/online"){
                    console.log("online")
                    console.log(res.data);
                    let isFormatAmount="";
                    if(res.data.length>0){
                      // 存在支付方式，才处理
                      res.data.forEach((item,index)=>{
                        if(item.formatAmount){
                          // 存在，需要用到下拉框
                          // 还需要处理数据
                          item.priceList=item.formatAmount&&item.formatAmount.split(",").sort(this.sortNum1);
                          item.isFormatAmount=true;
                        }else{
                          // 不需要用到下拉框
                          item.isFormatAmount=false;
                        }
                      })
                    }




                  // if(res.data){
                    //           // debugger

                    //   res.data.forEach((item,index)=>{
                    //       if(item.limitAmount){
                    //         // 存在limit中
                    //         if(!item.formatAmount){
                    //           // format没有
                    //           // 直接false
                    //           item.isFormatAmount=false;
                    //         }else{
                    //           // 说明两种都存在
                    //         // 需要进一步判断
                    //           let flag=false;
                    //           console.log("sadasjd")
                    //           for(var i in item.limitAmount){
                    //             if(i==onlineId){
                    //               // 在limit中
                    //               flag=true;
                    //               // return false;

                    //             }
                    //           }
                    //           console.log(":sdajfl")
                    //           if(flag){
                    //             // 在limit中，不用下拉框
                    //             item.isFormatAmount=false;
                    //           }else{
                    //             item.isFormatAmount=true;
                    //             // item.priceList=this.sortNum(item.formatAmount&&item.formatAmount[onlineId].formatAmount.split(","));
                    //           item.priceList=item.formatAmount&&item.formatAmount[onlineId].formatAmount.split(",").sort(this.sortNum1);
                    //             // item.priceList=this.sortNum(item.formatAmount&&item.formatAmount[onlineId].formatAmount.split(","));
                    //           }

                    //         }
                    //       }else{
                    //         // 不存在limit
                    //         if(item.formatAmount){
                    //           // item.priceList=this.sortNum(item.formatAmount&&item.formatAmount[onlineId].formatAmount.split(","));
                    //           item.priceList=item.formatAmount&&item.formatAmount[onlineId].formatAmount.split(",").sort(this.sortNum1);
                    //           item.isFormatAmount=true;
                    //         }else{
                    //           // 两种都不存在，那么固定值
                    //           item.isFormatAmount=false;
                    //         }


                    //         // item.priceList = item.priceList.map((item,index)=>{
                    //         //   item['value'] = item
                    //         //   item['label'] = item
                    //         //   return item
                    //         // })


                    //       }


                    //       // if(!item.formatAmount){
                    //       //   // 不存在,就直接使用写死的数据，横排展示
                    //       //   item.isFormatAmount=false;
                    //       // }else if(item.limitAmount){
                    //       //   // console.log(item.formatAmount[onlineId])
                    //       //   // 判断另外一种情况
                    //       //   // 假设是format里面的情况
                    //       //  let flag=false;
                    //       //  if(item.limitAmount){
                    //       //   //  循环固定值
                    //       //     for(var i in item.limitAmount){

                    //       //       console.log(i);
                    //       //       // 如果在固定值里面，就直接flag为true
                    //       //       if(i==onlineId){
                    //       //         item.isFormatAmount=false;
                    //       //         flag=true;
                    //       //         return false;
                    //       //       }

                    //       //     }
                    //       //  }

                    //       //   console.log(flag);
                    //       //   // 如果是true,说明在limit里面
                    //       //   if(flag){
                    //       //     // 还是limitAmount
                    //       //     item.isFormatAmount=false;
                    //       //   }else{
                    //       //     // 在format里面
                    //       //     console.log("选矿")
                    //       //     // 能走这里说明不在limitAmount中
                    //       //     // 此处，说明存在formatAmount，并且是对应的，那么就要使用下拉框
                    //       //     item.priceList=item.formatAmount&&item.formatAmount[onlineId].formatAmount.split(",").sort();
                    //       //     item.isFormatAmount=true;
                    //       //   }

                    //       // }
                    //   })
                  // }

                }


                console.log(res.data);






                this.$store.commit('paymentDataFc', res.data)
              }
            })
          this.$store.commit('refresh', 1)
        }
      },
      payCategory () {
        if (this.$store.state.personal.contentView != 'recharge') {
          this.allList = this[this.contentView + 'List']
        } else {
          this.getNavDatas()
        }
      },
      getNavDatas () {
        this.allList = []
        this.$http
          .post(`${this.$HOST_NAME}/deposit/payment/category`, {devices: 'pc'})
          .then(res => {
            if (res.code == 200) {
              console.log(res.data);
              res.data.unshift({className: '网银转帐'})
              this.allList = res.data
              console.log(this.allList);
            }
          })
      }
    },
    created () {
      this.payCategory()
    },
    computed: {
      contentView () {
        return this.$store.state.personal.contentView
      }
    },
    watch: {
      contentView: {
        handler: function (val, oldVal) {
          this.payCategory()
        },
        deep: true
      }
    },
    store
  }
</script>

<style lang="less" scoped>
  .message {
    color: #fff;
    font-weight: 200;
    ul {
      li {
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 1.6em;
        cursor: pointer;
        span {
          padding: 8px 18px;
          border-radius: 10px;
          font-family: "Microsoft YaHei";
          font-weight: 400;
        }
      }
      .liActive {
        span {
          background-color: #d12323;
        }
      }
    }
  }
  .message1{
     color: #fff;
    font-weight: 200;
    ul {
       .ull{
          li:nth-child(5){
            display: none;
          }
       }
      li {
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 1.6em;
        cursor: pointer;
        span {
          padding: 8px 18px;
          border-radius: 10px;
          font-family: "Microsoft YaHei";
          font-weight: 400;
        }
      }
      // li:nth-child(5){
      //   display:none;
      // }
      .liActive {
        span {
          background-color: #d12323;
        }
      }
    }
    .perul{
        li:nth-child(6){
          display: none;
        }
      }

  }
</style>
