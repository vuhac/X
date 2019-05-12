<template>
  <div>
    <div class="vp-lottery-betting-style">
      <div class="vp-betting-header">
        <div>{{title}}</div>
        <div>第 <span>{{issue}}</span> 期</div>
        <div>共计￥ <span>{{totalCount.total}}/{{totalCount.number}}</span> 注</div>
      </div>
      <div class="vp-betting-container">
        <!-- <table>
            <tr>
                <td>玩法</td><td>玩法</td><td>玩法</td>
            </tr>
        </table> -->
        <div class="betting-container-header">
          <div class="title">玩法</div>
          <div class="title">内容</div>
          <div class="title">赔率</div>
          <div class="title">单注金额（元）</div>
        </div>
        <div class="vp-overfloat-out">
          <div class="vp-overfloat-in">
            <div class="betting" :key="outIndex" v-for="(outItem,outIndex) in submitList">
              <div class="text">{{outItem.title}}</div>
              <div class="text" v-html="outItem.ball"></div>
              <div class="text">{{outItem.price}}</div>
              <div v-if="$route.meta.series!='lhc'" class="text">
                {{(outItem.model*totalCount.db*totalCount.ratio).toFixed(2)}}
              </div>
              <div v-if="$route.meta.series=='lhc'" class="text">
                {{outItem.model}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    props: {
      list: {
        type: Array
      }
    },
    data () {
      return {
        message: {},
        submitList: [
          {title: '玩法'},
          {title: '内容'},
          {title: '注数'},
          {title: '倍数'},
          {title: '单注金额（元）'}
        ],
        totalCount: {},
        title: '',
        issue: ''
      }
    },
    methods: {
      getList (list, totalCount, childNeedMess) {

        this.submitList = list
        this.totalCount = totalCount
        localStorage.setItem('totalCount', JSON.stringify(totalCount))
        this.title = childNeedMess.title
        this.issue = childNeedMess.issue
        // console.log(this.totalCount)
      }
    },
    watch: {},
    created: function () {
    },
    mounted () {

      // this.$nextTick(()=>{
      //   scrollY("#scrollbox");
      // })
    },
    components: {},
  }
</script>

