<template>
  <div class="home-help">
    <div class="container clearfloat">
      <!-- 左边导航 -->
      <div class="helpSlider">
        <ul class="helpMenu">
          <li :class="active==key?'curr':''" v-for="(item,key) in aboutData" :key="key" @click="active=key">
            <router-link :to="item.path">{{item.name}}</router-link>
          </li>
        </ul>
      </div>

      <div class="helpContent" v-if="active ==0">
        <div class="help-info">
          <div class="help-cent" @click="$router.push({name:'register'})">
            <div class="helpetin-left">
              <div class="help-icon">
                <a class="orange" @click="$router.push({name:'register'})" target="_self"></a>
              </div>
              <span>1.注册登录</span>
            </div>
          </div>

          <div class="help-cent" @click="$router.push({name:'question',query:{helpId:4}})">
            <div class="helpetin-left">
              <div class="help-icon">
                <a class="orange" target="_self"></a>
              </div>
              <span>2.帐号充值</span>
            </div>
          </div>

          <div class="help-cent" @click="$router.push('/plays/hall')">
            <div class="helpetin-left">
              <div class="help-icon">
                <a class="orange" target="_self"></a>
              </div>
              <span>3.购买彩票</span>
            </div>
          </div>

          <div class="help-cent" @click="$router.push('/trend/1')">
            <div class="helpetin-left">
              <div class="help-icon">
                <a class="orange" target="_self"></a>
              </div>
              <span>4.查看中奖</span>
            </div>
          </div>

          <div class="help-cent" @click="$router.push({name:'question',query:{helpId:12}})">
            <div class="helpetin-left">
              <div class="help-icon">
                <a class="orange" target="_self"></a>
              </div>
              <span>5.中奖提款</span>
            </div>
          </div>

        </div>
        <div class="help-center-box">
          <div class="help-center-tit">
            <!-- <a class="more-fr" href="/views/html/help.html" target="_self">更多</a> -->
            新手指引
          </div>
          <div class="help-center-list">
            <ul>
              <li><span class="orange f16">Q</span><a href="#/home/question?helpId=1">如何注册成为多多彩票用户？</a></li>
              <li><span class="orange f16">Q</span><a href="#/home/question?helpId=38">多多彩票支持哪些充值方式？</a></li>
              <li><span class="orange f16">Q</span><a href="#/home/question?helpId=7">本站充值要手续费吗？</a></li>
              <li><span class="orange f16">Q</span><a href="#/home/question?helpId=8">如何查看是否中奖？</a></li>
              <li><span class="orange f16">Q</span><a href="#/home/question?helpId=10">中奖后如何兑奖？</a></li>
              <li><span class="orange f16">Q</span><a href="#/home/question?helpId=23">注册时为什么需要完善个人信息？</a></li>
              <li><span class="orange f16">Q</span><a href="#/home/question?helpId=44">提款不成功怎么办？</a></li>
              <li><span class="orange f16">Q</span><a href="#/home/question?helpId=37">如何修改绑定的联系电话？</a></li>
              <li><span class="orange f16">Q</span><a href="#/home/question?helpId=33">为保证帐号资金安全应注意哪些事项？</a></li>
              <li><span class="orange f16">Q</span><a href="#/home/question?helpId=46">我从未买过彩票，这些彩种怎么玩？</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        aboutData: [
          {name: '帮助中心首页', path: '/home/help'},
          {name: '常见问题', path: '/home/question'},
          {name: '充值提款', path: '/home/question?helpId=39'},
          {name: '规则说明', path: '/home/question?helpId=46'},
          {name: '注册登录', path: '/home/question?helpId=1'},
          {name: '信息安全', path: '/home/question?helpId=3'},
          {name: '帐号充值', path: '/home/question?helpId=4'},
          {name: '中奖提款', path: '/home/question?helpId=12'},
          {name: '网上投注', path: '/home/question?helpId=47'}
        ],
        active: 0
      }
    }
  }
</script>

<style lang="less" scoped>
  .home-help {
    background: #fff;
    padding-bottom: 10px;

    .container {
      width: 1000px;
      margin: 0 auto;
      padding-top: 15px;

      .helpSlider {
        background: #fff;
        width: 228px;
        float: left;
        min-height: 500px;
        border-top: 2px solid #e4393c;

        .helpMenu {
          border-bottom: 1px solid #eff0f1;

          li {
            border-top: 1px solid #eff0f1;
            border-left: 1px solid #eff0f1;
            border-right: 1px solid #eff0f1;
            font-size: 14px;
            height: 52px;
            line-height: 52px;
            text-align: center;
            position: relative;

            a {
              display: block;
              font-size: 14px;
              color: #666;
            }

            a::after {
              width: 2px;
              height: 100%;
              content: "";
              background-color: #e4393c;
              position: absolute;
              left: 0;
              top: 0;
              display: block;
              visibility: hidden;
            }
          }

          li:hover a::after {
            visibility: visible;
          }

          li:hover {
            background-color: #e6e6e6;
          }

          .curr {
            a {
              color: #e4393c;
            }
          }
        }
      }

      .helpContent {
        width: 750px;
        float: left;
        background: #fff;
        min-height: 500px;
        margin-left: 20px;
        box-sizing: border-box;

        .help-info {
          position: relative;
          height: 160px;
          border: 1px solid #ddd;
          background: #fff url(/static/jhcp/img/icon/help_icon_03.png) 32px 24px no-repeat;

          .help-cent {
            float: left;
            width: 149px;
            height: 160px;
            cursor: pointer;
            position: relative;

            .helpetin-left span {
              font-size: 14px;
              position: absolute;
              left: 40px;
              bottom: 25px;
              color: #555;
            }
          }
        }

        .help-center-box {
          margin-top: 12px;

          .help-center-tit {
            border: 1px solid #ddd;
            background: #fff;
            height: 47px;
            line-height: 47px;
            color: #e4393c;
            padding: 0 15px;
            font-size: 18px;
            overflow: hidden;
            //   .more-fr {
            //     font-size: 12px;
            //     color: #2369d1;
            //     float: right;
            //   }
          }

          .help-center-list ul li {
            line-height: 44px;
            border: 1px solid #dfdfdf;
            border-top: 0;
            padding-left: 20px;

            .f16 {
              font-size: 16px;
              margin-right: 10px;
              color: #e4393c;
            }
          }
        }
      }
    }
  }
</style>
