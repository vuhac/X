<template>
  <div>
    <div class="rules-container-header">
      <ul>
        <li @click="contentSelectFc(item)" :class="{'active':item.lotteryId==$route.query.id}"
            v-for="(item,index) in contentNav" :key='index'>
          <a>{{item.lotteryName}}</a>
        </li>
      </ul>
    </div>
    <div class="rules-container-text">
      <!-- 彩种介绍 -->
      <XGLHC v-if="$route.query.id==1"></XGLHC>
      <KSLHC v-if="$route.query.id==18"></KSLHC>
      <WFLHC v-if="$route.query.id==19"></WFLHC>

    </div>
  </div>
</template>
<script>
  import KSLHC from './child/KSLHC'
  import WFLHC from './child/WFLHC'
  import XGLHC from './child/XGLHC'

  export default {
    props:['sideNav'],
    data () {
      return {
        contentNav: [
          // {title: '香港六合彩', id: 1},
          // {title: '快速六合彩', id: 18},
          // {title: '5分六合彩', id: 19}
        ]
      }
    },
    methods: {
      contentSelectFc (item) {
        this.$router.push({
          path: `/rules/lhc`,
          query: {
            id: item.lotteryId
          }
        })
      }
    },
    created(){
       this.sideNav.forEach((sideItem,sideIndex)=>{
        if(sideItem.id==this.$route.query.id){
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
    components: {
      KSLHC,
      WFLHC,
      XGLHC
    }
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
