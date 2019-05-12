<template>
  <div class="footer-main">
    <ul class="footer-child footer-nav clear-fix">
      <li class="nav-item">
        <div
          style="width: 202px;height: 47px;background: url('/static/cpzj/img/bottom_wy.png') no-repeat 0 0;background-size: 202px 47px;"></div>
        <div class="head-foot"
             style="width: 100px;height: 87px;background-position: 0 -113px;margin-top: 20px;margin-left: 48px"></div>
      </li>
      <li class="nav-item">
        <div class="head-foot head" style="width: 104px;height: 34px;background-position: -100px -113px;"></div>
        <ol>
          <li><a href="#/rules/ssc?id=4" target="_blank">游戏规则</a></li>
          <li><a href="#/home/issue" target="_blank">常见问题</a></li>
          <li><a href="#/home/duty" target="_blank">责任博彩</a></li>
        </ol>
      </li>
      <li class="nav-item">
        <div class="head-foot head" style="width: 104px;height: 34px;background-position: -204px -113px;"></div>
        <ol>
          <li><a href="#/home/save-help" target="_blank">存款帮助</a></li>
          <li><a href="#/home/pull-help" target="_blank">取款帮助</a></li>
          <li><a href="#/home/relation" target="_blank">联系我们</a></li>
        </ol>
      </li>
      <li class="nav-item">
        <div class="head-foot head" style="width: 104px;height: 34px;background-position: -100px -147px;"></div>
        <ol>
          <li><a href="javascript: void(0)" @click="goto('recharge',0)">存款</a></li>
          <li><a href="javascript: void(0)" @click="goto('withdraw',0)">取款</a></li>
          <li><a href="javascript: void(0)" @click="goto('personage',1)">财务记录</a></li>
        </ol>
      </li>
      <li class="nav-item">
        <div class="head-foot head" style="width: 104px;height: 34px;background-position: -204px -147px;"></div>
        <ol>
          <li><a href="#/home/about-page" target="_blank">关于我们</a></li>
          <li><a href="#/home/partner-page" target="_blank">合作伙伴</a></li>
          <li><a href="/m">手机投注</a></li>
        </ol>
      </li>
    </ul>
    <div class="footer-child images clear-fix">
      <div class="footer-img" style="background-position: 0 0"></div>
      <div class="footer-img" style="background-position: 0 -45px"></div>
      <div class="footer-img" style="background-position: 0 -90px"></div>
      <div class="footer-img" style="background-position: 0 -135px"></div>
      <div class="footer-img" style="background-position: 0 -180px"></div>
    </div>
    <div class="footer-child other">
      彩票之家版权所有 ©2008-2020
      <br/>
      彩票之家提醒您：理性购彩，热心公益。未满18周岁的未成年人禁止购彩及兑奖！
    </div>
     <Modal :scrollable=true title="提示信息" v-model="tipDatas.bool" class-name="vp-all-tipModel-wrap" width="450">
      <div class="tipModel-box">
                <span>
                    <i v-if="tipDatas.model=='warn'" class="iconfont icon-baojing"></i>
                    <i v-if="tipDatas.model=='error'" class="iconfont icon-cuowu"></i>
                    <i v-if="tipDatas.model=='success'" class="iconfont icon-chenggong"></i>
                </span>

        <span>{{tipDatas.title}}</span>

      </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    methods: {
      goUserCen (name, num) {
        //name的类型有 ：  recharge （充值）  personage （个人资料）
        //withdraw （提现）  agency  （代理） message （消息）  discounts （优惠）
        this.$store.commit('showPersonal', {
          bool: true
        })
        this.$store.commit('showContent', {
          parent: name
        })
        this.$store.commit('showNav', {
          child: num
        })
      },
      goto(item,index){
          if(localStorage.token){
              this.goUserCen(item,index)
          }else{
             alert("请先登录")
          }
      } 
    },
    computed: {
      // 是否提示信息
      tipDatas () {
        return this.$store.state.alert.tipModel
      }
    },
  }
</script>

<style type="text/less" lang="less" scoped>
  .footer-main {
    border-top: 2px solid #f13131;
    padding-top: 10px;
    background-color: #f7f7f7;

    .footer-child {
      width: 1000px;
      margin: 10px auto;
    }

    .footer-nav {
      width: 960px;

      .nav-item {
        float: left;
        box-sizing: border-box;
        border-left: 1px dotted #f13131;
        width: 180px;

        &:first-child {
          width: 240px;
          border: none;
        }

        .head-foot {
          background: url("/static/cpzj/img/headfoot.png") no-repeat;
        }

        .head {
          margin-top: 10px;
          margin-left: 20px;
        }

        ol {
          margin: 16px 20px;
          font-size: 12px;

          li {
            color: #888888;
            height: 28px;
            line-height: 28px;

            a {
              color: inherit;
            }

            &:hover {
              color: #f13131;
            }

            &:before {
              content: '·';
              font-weight: 700;
              margin: 0 5px;
            }
          }
        }
      }
    }

    .images {
      width: 700px;

      .footer-img {
        width: 120px;
        height: 45px;
        margin: 0 10px;
        float: left;
        background: url("/static/cpzj/img/footer_img.png") no-repeat;
      }
    }

    .other {
      text-align: center;
      margin: 10px auto 10px;
      line-height: 26px;
      color: #999;
      font-size: 12px;
      padding-top: 4px;
    }
  }
</style>
