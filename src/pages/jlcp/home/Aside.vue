<template>
<div>
   <ul class="qy-service">
    <li class="service" @click="goService">
      <div>
     
      </div>

    </li>

    <li class="cs-mail">
      <div>
    
      </div>

      <!-- <div class="shrink" style="background:#fff;">
        ccjjwwts@126.com
      </div> -->
  
    </li>

    <!-- <li class="open-user" @click="goResiter">
      <div>
        <i></i>
      </div>
      <p>免费开户</p>
    </li> -->

    <li class="cs-mail-phone">
      <div>
       
      </div>

      <div class="downloadcode" style="padding:5px 8px 10px 8px;box-sizing:content-box;background:#fff;">
        <!-- <img src="/static/jlcp/img/code.png" alt=""> -->
        <div style="width: 100px; height: 100px" ref="qr-code" class="service-app"></div>
        <div style="font-size:14px;padding:5px 0">APP扫码下载</div>
      </div>
      
    </li>
<!-- 
    <li class="shi-pay" @click="tryPlay">
      <div>
        <i></i>
      </div>
      <p>免费试玩</p>
    </li> -->

    <!-- <li class="cs-app">
                    <div>
                  <i></i>
               </div>
               <p>APP下载</p>
            </li> -->

    <li class="cs-goTop" @click="goTop">
      <div>
      
      </div>
    
    </li>

  </ul>
  <!--<div class="new2019 animated fadeInUp mobile_auto" onclick="window.open('/static/jlcp/html/active/pig2019/#')" v-if="showNew2019">
    <div class="clBtn clBtn1" @click.stop="hideNew2019"></div>
  </div>-->
</div>
 
</template>

<script>
  import UserService from '@/service/public/UserService.js'
  import $ from 'jquery'

  export default {
    data () {
      return {
        showNew2019:true
      }
    },
    methods: {
      goService () {
        let service = JSON.parse(localStorage.config).service;
        if (service) {
          let ser = service.find(item => item.status === 'on')
          if (ser) {
            window.open(ser.url);
          }
        }
      },
      async tryPlay () {
        let res = await this.$http.get("/frontend/test/demo", { headers: { 'Accept': 'application/x.tg.v2+json' },params:{}});
        if (res && res.code == 200) {
          UserService.setCache(res, 'test')
          window.location.reload()
        }
      },
      goResiter () {
        this.$router.push('/home/register')
      },
      goTop () {
        $('html,body')
          .stop()
          .animate({scrollTop: 0}, 500)
      },
      hideNew2019(){
        this.showNew2019= false
      }
     
    },
    mounted(){
      this.createDownloadQRCode({
        el: this.$refs['qr-code'],
        url: window.location.origin + '/m#/download',
        size:100
      })
    }
  }
</script>

<style lang="less" scoped>
  .qy-service {
    position: fixed;
    right: 20px;
    z-index: 99;
    top: 212px;

    li {
      position: relative;
      // width: 65px;
      // height: 65px;
      width: 50px;
      height: 50px;
      background-color: #fff;
      margin-bottom: 5px;
      border-radius: 5px;
      cursor: pointer;
      // border: 1px solid #d6d6d6;

      div {
        // height: 65px;
        height: 52px;
        // line-height: 65px;
        text-align: center;

        // i {
        //   display: inline-block;
        //   background: url("/static/jlcp/img/thirdparty/cebianlan-sprite.png") no-repeat top left;
        //   width: 19px;
        //   height: 25px;
        // }
      }

      p {
        font-size: 14px;
        text-align: center;
      }
    }

    li:first-child>div{
      background:url("/static/jlcp/img/thirdparty/11.png") no-repeat center;
      background-size:cover;
    }
    li:first-child>div:hover{
      background: url("/static/jlcp/img/thirdparty/1.png") no-repeat center;
      background-size:cover;
    }

    li:nth-child(2)>div{
      background:url("/static/jlcp/img/thirdparty/33.png") no-repeat center;
      background-size:cover;
    }
    li:nth-child(2)>div:hover{
      background: url("/static/jlcp/img/thirdparty/3.png") no-repeat center;
      background-size:cover;
    }

    li:nth-child(3)>div{
      background:url("/static/jlcp/img/thirdparty/22.png") no-repeat center;
      background-size:cover;
    }
    li:nth-child(3)>div:hover{
      background: url("/static/jlcp/img/thirdparty/2.png") no-repeat center;
      background-size:cover;
    }


    li:nth-child(4)>div{
      background:url("/static/jlcp/img/thirdparty/44.png") no-repeat center;
      background-size:cover;
    }
    li:nth-child(4)>div:hover{
      background: url("/static/jlcp/img/thirdparty/4.png") no-repeat center;
      background-size:cover;
    }


    // li:hover {
    //   background: url("/static/jlcp/img/thirdparty/service-bg.png");
    //   border: unset;
    // }

    .service {
      i {
        background-position: 0 -33px;
      }
    }

    .cs-mail {
      i {
        background-position: 0 -68px;
      }

      .shrink {
        // right: 70px;
        right:60px;
        background: #fff;
        border: 2px solid #bb9a55;
        position: absolute;
        top: 0px;
        width: 150px;
        height: 62px;
        line-height: 62px;
        text-align: center;
        display: none;
      }
    }

    .cs-mail:hover {
      .shrink {
        display: block;
      }
    }

    .cs-mail-phone{
      .downloadcode{
        position:absolute;
        width:100px;
        height:120px;
        border:1px solid #dedede;
        display:none;
        top:-30px;
        // right:70px;
        right:60px;
        img{
          width:100%;
          // height:100%;
        }
      }

    }
    .cs-mail-phone:hover{
      .downloadcode{
        display:block;
      }
    }

    .open-user {
      i {
        width: 43px;
        height: 26px;
        display: inline-block;
        margin: 8px 0;
        background: url("/static/jlcp/img/thirdparty/right_register.png") no-repeat;
      }
    }

    .shi-pay {
      i {
        width: 43px;
        height: 26px;
        display: inline-block;
        margin: 8px 0;
        background: url("/static/jlcp/img/thirdparty/right_freeplay.png") no-repeat;
      }
    }

    .cs-app {
      i {
        width: 20px;
        height: 26px;
        display: inline-block;
        margin: 8px 0;
        background: url("/static/jlcp/img/thirdparty/right_app.png") no-repeat;
      }
    }

    .cs-goTop {
      i {
        background-position: 0 -168px;
        height: 15px;
        width: 26px;
      }
    }
  }
  .new2019{
    position:fixed;
    z-index:9999;
    right:20px;
    bottom:30px;
    cursor:pointer;
    width: 230px;
    height: 230px;
    background-image: url('/static/jlcp/img/new2019.gif');

    .clBtn{
      background: url('/static/jlcp/img/new2019_close.png'); 
      z-index: 99999; 
      position: absolute; 
      width: 23px;
      height: 23px; 
      top: 0px;
      right: 0px; 
      display: none;
    }
    &:hover .clBtn{
      display: block;
    }
  }
</style>
