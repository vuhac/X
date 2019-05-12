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
      <GDKLSF v-if="$route.query.id=='5'"></GDKLSF>
      <XYNC v-if="$route.query.id=='6'"></XYNC>
      <HNKLSF v-if="$route.query.id=='20'"></HNKLSF>
    </div>
  </div>
</template>
<script>
  import GDKLSF from './child/GDKLSF'
  import XYNC from './child/XYNC'
  import HNKLSF from './child/HNKLSF'

  export default {
    props:['sideNav'],
    data () {
      return {
        contentNav: [
          // {title: '广东快乐十分', id: 5},
          // {title: '幸运农场', id: 6},
          // {title: '湖南快乐十分', id: 20}
        ]
      }
    },
    components: {
      GDKLSF,
      XYNC,
      HNKLSF
    },
    methods: {
      contentSelectFc (item) {
        this.$router.push({
          path: `/rules/klsf`,
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
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @active-color: #ff0000;
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
