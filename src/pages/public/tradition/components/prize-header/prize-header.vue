<template>
  <div class="lottery-wrap">
    <div class="title">
      <label v-if="ifAnimateBt">{{showIssue}}</label>
      <label v-if="!ifAnimateBt">{{'0'+(+showIssue+1)}}</label> 期
      <span>
                <span v-if="ifAnimateBt">开奖结果</span>
                <span v-if="!ifAnimateBt">正在开奖</span>
                <i @click="goto({'path':`/trend/${$route.meta.id}`})" class="orange  iconfont icon-curve">
                  <span class="iconfont_tip_text" >开奖走势</span>
                </i>
                <i @click="gotoLive" class="iconfont icon-pc-live">
                  <span class="iconfont_tip_text1" >开奖直播</span>
                </i>
                <i @click="goto({'path':`/rules/${$route.meta.series}`,query:{id:$route.meta.id}})"
                   class="iconfont icon-rule">
                  <span class="iconfont_tip_text2" >玩法规则</span>   
                </i>
            </span>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['ifAnimateBt', 'lastIssue'],
    data () {
      return {
        showIssue: ''
      }
    },
    methods: {
      goto (router) {
        let routeData = this.$router.resolve(router)
        window.open(routeData.href, '_blank')
      },
      gotoLive () {
        let code = '';
        switch(this.$route.meta.id){
          case 2:
            code = 'pk10';
            break;
          case 3:
            code = 'xyft';
            break;
          case 4:
            code = 'shishicai';
            break;
          case 5:
            code = 'gdkl10';
            break; 
          case 9:
            code = 'jsk3';
            break;
          default:
            code = '';
            break;
        }
        if(code!=''){
          window.open('https://kjzb.com/'+ code +'/shipin');
        }else{
          this.$emit('LotteryAnimateFc', true)
        }
      }
    },
    mounted () {
      if (this.$route.meta.code != 'bjsc' && this.$route.meta.code != 'bjpcdd' && this.$route.meta.id != 1) {
        this.showIssue = this.lastIssue && this.lastIssue.toString().substring(4, this.lastIssue.length);
      } else {
        this.showIssue = this.lastIssue;
      }
    },
    watch: {
      lastIssue: {
        handler: function (val, oldVal) {
          if (this.$route.meta.code != 'bjsc' && this.$route.meta.code != 'bjpcdd' && this.$route.meta.id != 1) {
            this.showIssue = this.lastIssue && this.lastIssue.toString().substring(4, this.lastIssue.length);
          } else {
            this.showIssue = this.lastIssue;
          }
        },
        deep: true
      }
    },
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  
</style>
