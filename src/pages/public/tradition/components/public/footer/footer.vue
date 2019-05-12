<template>
  <div class="vp-footer">
    <div class="footer-wrapper">
      <div class="footer-wrapper-top">
        <div class="footer-wrapper-top-box">
          <div class="footer-wrapper-top-item">
            <i class="iconfont icon-zengzhang"></i>
            <div class="right-content">
              <div class="title">超高赔率</div>
              <div class="text">
                行业最优赔率<br>
                带给您更多的盈利
              </div>
            </div>
          </div>
          <div class="footer-wrapper-top-item">
            <i class="iconfont icon-caizhong"></i>
            <div class="right-content">
              <div class="title">丰富的彩种</div>
              <div class="text">
                拥有时时彩等丰富的高频彩种
                同步官网数据，精彩无限
              </div>
            </div>
          </div>
          <div class="footer-wrapper-top-item">
            <i class="iconfont icon-kuaijie"></i>
            <div class="right-content">
              <div class="title">快捷支付</div>
              <div class="text">
                支持微信支付宝等一键支付<br>
                和各种银行入款通道
              </div>
            </div>
          </div>
          <div class="footer-wrapper-top-item">
            <i class="iconfont icon-handle"></i>
            <div class="right-content">
              <div class="title">手机投注</div>
              <div class="text">
                所有彩种支持手机投注<br>
                让您随时随地游戏
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="footer-wrapper-bottom">
          <div class="wrapper-bottom-box">
              <span class="wrapper-left">
                  <span>关于我们 </span>
                      <label for="">|</label>
                  <span>取款帮助</span>
                      <label for="">|</label>
                  <span>存款帮助</span>
                      <label for="">|</label>
                  <span>常见问题</span>
                     <label for="">|</label>
                  <span>规则条例</span>
                      <label for="">|</label>
                  <span>下载客户端</span>
              </span>
              <span class="wrapper-right">
                  Copyright©2011-2017幸运彩票版权所有 Reserved
              </span>

          </div>
      </div>             -->
    </div>
    <!-- 分为封盘、报错、恭喜 -->
    <Modal
      title="提示信息"
      v-model="tipDatas.bool" class-name="vp-all-tipModel-wrap"
      width="450">
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
  import store from '@/vuex/store'

  export default {
    data () {
      return {}
    },
    mounted () {
    },
    computed: {
      // 是否提示信息
      tipDatas () {
        return this.$store.state.alert.tipModel
      },

    },
    store
  }
</script>

<style lang='less'>
  @import '../../../../../../assets/less/public/var.less';

  .vp-footer {
    .footer-wrapper-top {
      text-align: center;
      border-top: 2px solid #ecebeb;
      background: #fff;

      .footer-wrapper-top-box {
        width: 1345px;
        margin: 0 auto;
        display: flex;
        align-items: stretch;
        background: #fff;

        .footer-wrapper-top-item {
          width: 24.5%;
          height: 168px;
          text-align: left;
          padding: 40px 0 40px 25px;

          i {
            display: inline-block;
            float: left;
            width: 86px;
            height: 86px;
            font-size: 86px;
            color: #bfbfbf;
          }

          .right-content {
            float: left;
            padding-left: 25px;

            .title {
              font-size: 24px;
              color: #f44646;
              padding-bottom: 20px;
            }

            .text {
              text-align: justify;
              font-size: 16px;
              line-height: 24px;
              color: #999;
            }
          }

          &:nth-child(2) {
            width: 26.5%;

            .right-content {
              .text {
                width: 208px;
              }
            }
          }
        }
      }

    }

    .footer-wrapper-bottom {
      width: @base-width;
      margin: 0 auto;

      .wrapper-bottom-box {
        height: 65px;

        .wrapper-left {
          float: left;
          padding: 27px 0;
          font-size: 14px;
          color: #676767;

          label {
            color: #bbb;
            padding: 0 15px;
          }

          span {
            cursor: pointer;
          }
        }

        .wrapper-right {
          float: right;
          padding: 27px 0;
          font-size: 14px;
          color: #676767;
        }
      }
    }
  }
</style>
