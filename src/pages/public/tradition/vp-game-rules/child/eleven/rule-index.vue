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
      <KSSYXW v-if="$route.query.id=='24'"></KSSYXW>
      <GDSYXW v-if="$route.query.id=='7'"></GDSYXW>
      <JXSYXW v-if="$route.query.id=='21'"></JXSYXW>
      <SHSYXW v-if="$route.query.id=='22'"></SHSYXW>
      <SDSYXW v-if="$route.query.id=='23'"></SDSYXW>
    </div>
  </div>
</template>
<script>
  import KSSYXW from './child/KSSYXW'
  import GDSYXW from './child/GDSYXW'
  import JXSYXW from './child/JXSYXW'
  import SHSYXW from './child/SHSYXW'
  import SDSYXW from './child/SDSYXW'

  export default {
    props:['sideNav'],
    data () {
      return {
        contentNav: [
          // {title: '快速11选5', id: '24'},
          // {title: '广东11选5', id: '7'},
          // {title: '江西11选5', id: '21'},
          // {title: '上海11选5', id: '22'},
          // {title: '山东11选5', id: '23'}
        ]
      }
    },
    components: {
      KSSYXW,
      GDSYXW,
      JXSYXW,
      SHSYXW,
      SDSYXW
    },
    methods: {
      contentSelectFc (item) {
        this.$router.push({
          path: `/rules/cp11x5`,
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

<style lang="less" rel="stylesheet/less">
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

    p.b {
      font-weight: bold;
      margin-bottom: 15px;
      margin-top: 15px;
    }
  }
</style>
