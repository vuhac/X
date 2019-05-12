<template>
  <footer id="footer" :class="{homeColor:$route.path=='/home'}">
      <div class="wrapper">
          <ul id="footer-info">
              <li @click="godown">下载专区<span><a target="_blank" href="#">DOWNLOAD</a></span></li>
              <li>存款平均到帐速度<span class="ng-binding">0分52秒</span></li>
              <li>取款平均到帐速度<span  class="ng-binding">0分52秒</span></li>
              <li  @click="goLink('/service')">在线客服 / Online<span>7x24小时</span></li>
          </ul>
          <div id="footer-logo"></div>
          <ul id="footer-nav">
            <li v-for="(item,i) in goInfo" :key="i"><a @click="goLink(item.link)">{{item.name}}</a></li>
          </ul>
          <p id="footer-suggest">
              <span>新葡京赌场</span>所提供的产品和服务，是由澳门特别行政区 The Macao Special Administrative Region.授权和监管。选择我们，您将拥有可靠的资金保障和优质的服务。 <br>
              Copyright © 新葡京赌场 Reserved
          </p>
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

  </footer>
</template>

<script>
  import store from '@/vuex/store'

  export default {
    name:"vpHomeFooter",
    data () {
      return {
        goInfo:[
          { name:'关于我们',link:'/home/about/guanyu' },
          // { name:'手机投注',link:' '},
          { name:'常见问题', link:'/home/about/question'},
          { name:'存款帮助', link:'/home/about/cunkuan'},
          { name:'取款帮助', link:'/home/about/qukuan'},
          { name:'联系我们', link:'/home/about/lianxi'},
        ]
      }
    },
    methods: {
      goLink (link) {
        if(link=='/service'){
          let service = JSON.parse(localStorage.config).service;
          if (service) {
            let ser = service.find(item => item.status === 'on')
            if (ser) {
              window.open(ser.url);
            }
          }
        }else{
          this.$router.push(link)
        }

      },
      godown(){
          window.open('/static/xpj/html/download/index.html')
      }

    },
    computed: {
          tipDatas () {
        return this.$store.state.alert.tipModel
      }
    },
    mounted () {

    },
    store
  }
</script>

<style lang="less" scoped>
  #footer{
    padding-top: 24px;
    background-color: #142044;

    .wrapper{
      position: relative;
      width: 1040px;
      margin: 0 auto;

      #footer-info {
        font-size: 0;
        text-align: center;
        background: url('/static/xpj/img/footer_info.png') no-repeat center bottom;

        &>li {
          display: inline-block;
          width: 250px;
          height: 73px;
          color: #416bef;
          font-size: 14px;
          text-align: center;
          line-height: 1.428571429;
          font-family: 'Microsoft YaHei',"Helvetica Neue",Helvetica,Arial,sans-serif;
          cursor: pointer;

          &>span {
            display: block;
            color: #fff;
            font-size: 16px;

            a {
              color: #fff;
              text-decoration: none;
            }
          }
        }
      }

      #footer-logo {
        display: inline-block;
        width: 100%;
        height: 92px;
        background: url(/static/xpj/img/footer_logo.png) no-repeat center;
      }
      #footer-nav {
        display: block;
        height: 53px;
        text-align: center;
        background: url(/static/xpj/img/footer_nav.png) no-repeat center top;

        li{
          display: inline-block;

          a {
            color: #fff;
            font-size: 14px;
            text-align: center;
            line-height: 53px;
            text-decoration: none;
          }
          &:hover{
            text-decoration: underline;
          }
        }
        li+li:before {
          content: '|';
          padding: 0 10px;
          color: #fff;
        }
      }
      #footer-suggest {
        padding: 23px 0 16px;
        color: #436ff8;
        font-size: 12px;
        text-align: center;
        line-height: 28px;
      }
    }

  }
  .homeColor{
    background-color:transparent!important;
  }
</style>
