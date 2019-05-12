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
      <SHSSL v-if="$route.query.id=='29'"></SHSSL>
      <FC3D v-if="$route.query.id=='11'"></FC3D>
      <PL3 v-if="$route.query.id=='28'"></PL3>
    </div>
  </div>
</template>
<script>
  import SHSSL from './child/SHSSL'
  import FC3D from './child/FC3D'
  import PL3 from './child/PL3'

  export default {
    props:['sideNav'],
    data () {
      return {
        contentNav: [
          // {title: '上海时时乐', id: 29},
          // {title: '福彩3D', id: 11},
          // {title: '排列3', id: 28}
        ],
        contentSelect: '上海时时乐'
      }
    },
    components: {SHSSL, FC3D, PL3},
    methods: {
      contentSelectFc (item) {
        this.$router.push({
          path: `/rules/sd`,
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
