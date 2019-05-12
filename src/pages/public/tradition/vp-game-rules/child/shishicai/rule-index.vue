<template>
  <div>
    <div class="rules-container-header">
      <ul>
        <li @click="contentSelectFc(item)" :class="{'active':item.lotteryId==$route.query.id}"
            v-for="(item,index) in contentNav" :key="index">
          <a>{{item.lotteryName}}</a>
        </li>
      </ul>
    </div>
    <div class="rules-container-text">
      <!-- 彩种介绍 -->
      <CQSSC v-if="$route.query.id==4"></CQSSC>
      <XJSSC v-if="$route.query.id==14"></XJSSC>
      <TJSSC v-if="$route.query.id==15"></TJSSC>
      <KSSSC v-if="$route.query.id==16"></KSSSC>
      <SFSSC v-if="$route.query.id==17"></SFSSC>

    </div>
  </div>
</template>
<script>
  import CQSSC from './child/CQSSC'
  import SFSSC from './child/SFSSC'
  import KSSSC from './child/KSSSC'
  import TJSSC from './child/TJSSC'
  import XJSSC from './child/XJSSC'

  export default {
    props:['sideNav'],
    data () {
      return {
        contentNav: [
          // {title: '重庆时时彩', id: '4'},
          // {title: '新疆时时彩', id: '14'},
          // {title: '天津时时彩', id: '15'},
          // {title: '快速时时彩', id: '16'},
          // {title: '三分时时彩', id: '17'}
        ]
      }
    },
    components: {
      CQSSC,
      SFSSC,
      KSSSC,
      TJSSC,
      XJSSC
    },
    created(){
      this.getContentNav()
    },
    methods: {
      getContentNav(){
        this.sideNav.forEach((sideItem,sideIndex)=>{
          if(sideItem.id==this.$route.query.id){
            console.log("11111")
            this.contentNav = sideItem.childList;
          }else{
            sideItem.childList.forEach((contentItem,contentIndex)=>{
                if(contentItem.lotteryId == this.$route.query.id){
                  this.contentNav = sideItem.childList;
                }
            })
          }
        })
      },
      contentSelectFc (item) {
        this.$router.push({
          path: `/rules/ssc`,
          query: {
            id:item.lotteryId
          }
        })
      }
    },
  }
</script>
<style lang="less" rel="stylesheet/less">
  .rules-container-header {
    height: 63px;
    border-bottom: 1px solid #e4e0e0;
    padding: 0 10px;
    ul {
      li {
        float: left;
        padding: 0 20px;
        cursor: pointer;

        a {
          color: #666;
          line-height: 60px;
        }

        &:hover {
          //  border-bottom: 3px solid #FF6600;
          a {
            color: #ff6600;
            // line-height: 60px;
          }
        }

        &.active {
          border-bottom: 3px solid #ff6600;

          a {
            color: #ff6600;
            line-height: 60px;
          }
        }
      }
    }
  }

  .rules-container-text {
    padding: 25px 30px;
    font-size: 14px;
    line-height: 30px;
    color: #444444;
    text-align: justify;
  }
</style>
