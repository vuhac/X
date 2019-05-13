<template>
<div>
   <ul class="qy-service">
    <li class="service" @click="goService">
      <div>
        <i></i>
      </div>
      <p>在线客服</p>
    </li>

    <li class="cs-mail">
      <div>
        <i></i>
      </div>

      <div class="shrink">
        <!-- klk22k@163.com -->
        <!-- <div></div> -->
        <div class="downloadcode" style="padding:7px 8px 0 8px;box-sizing:content-box;">
          <!-- <img src="/static/jlcp/img/code.png" alt=""> -->
          <div style="width: 100px; height: 100px" ref="qr-code" class="service-app"></div>
          <div style="font-size:14px;padding:5px 0;line-height:20px;height:20px;box-sizing:content-box;">APP扫码下载</div>
        </div>
      </div>
      <p>APP下载</p>
    </li>

    <li class="open-user" @click="goResiter">
      <div>
        <i></i>
      </div>
      <p>免费开户</p>
    </li>

    <!-- <li class="shi-pay" @click="tryPlay">
      <div>
        <i></i>
      </div>
      <p>免费试玩</p>
    </li> -->


    <li class="cs-goTop" @click="goTop">
      <div>
        <i></i>
      </div>
      <p>一键置顶</p>
    </li>

  </ul>
  <!--<div class="new2019 animated fadeInUp mobile_auto" onclick="window.open('/static/zyyl/html/active/pig2019/#')" v-if="showNew2019">
    <div class="clBtn clBtn1" @click.stop="hideNew2019"></div>
  </div>-->
  <!-- <div class="index-float" style="display: block;">
      <div class="_relative">
              <div class="index_event" onclick="location.href='deposit-btbpay.htm'">
                  <div class="event_num">1</div>
              </div>
        <div class="h24" onclick="javascript:prj.openOnlineChat()" data-tag_id="nav_icon_service" data-depth="1">
          <div class="icon-24"></div>
          <div class="info">在线客服</div>
        </div>
        <div class="ask">
          <div class="icon-right-tel"></div>
          <div class="info">免费开户</div>
        </div>

          <div class="askVip">
            <div class="icon-right-vip-tel"></div>
            <div class="info">免费试玩</div>
          </div>
              <div class="am8show_left" onclick="location.href='http://www.am8show.com/forum.php'">
                  <div class="icon_side"></div>
                  <div class="info">投诉信箱</div>
              </div>
        <div class="download" style="position: relative">
                  <div><img id="baseImg07" title="" src=""></div>
          <div class="info" style="margin-left: -4px;">APP下载</div>
                  <div class="bg-er-wei-ma-wrap">
                      <div id="qrCode" title="http://m.ymm16.com/am_app.htm?channal=0004">
                          <img id="baseImg08" style="position: absolute;width: 20px;height: 20px;top: 50%;left: 50%;margin-left: -10px;margin-top: -10px;" src="">
                      <canvas width="116" height="114" style="display: none;"></canvas><img alt="Scan me!" src="" style="display: block;"></div>
                  </div>
        </div>
        <div class="icon-onbg" style="display: block;"></div>
      </div>
  </div> -->



</div>
 
</template>

<script>
  import UserService from '@/service/public/UserService.js'
  // import $ from 'jquery'

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
        // this.$router.push('/home/register')
         this.$store.commit('yibo/showBox',{showBox:true,isLogin:false})
      },
      goTop () {
        // $('html,body')
        //   .stop()
        //   .animate({scrollTop: 0}, 500)
        let curr_top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        let time_id = setInterval(()=>{

                curr_top -= 40;

                document.body.scollTop = curr_top;

                document.documentElement.scrollTop = curr_top;

                if(curr_top <= 0){

                    clearInterval(time_id);

                }

            } , 10);

      },
      hideNew2019(){
        this.showNew2019= false
      }
     
    },
    mounted(){
      console.log(this.$refs['qr-code'])
          this.createDownloadQRCode({
            el: this.$refs['qr-code'],
            url: window.location.origin + '/m#/download',
            size: 100
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
      width: 65px;
      height: 65px;
      background-color: #fff;
      margin-bottom: 5px;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid #d6d6d6;

      div {
        height: 40px;
        line-height: 56px;
        text-align: center;
        i {
          display: inline-block;
          background: url("/static/zyyl/img/thirdparty/cebianlan-sprite.png") no-repeat top left;
          width: 19px;
          height: 25px;
        }
      }

      p {
        font-size: 14px;
        text-align: center;
      }
      li>div{
        height: 40px;
        line-height: 56px;
        text-align: center;
      }
    }

    li:hover {
      background: url("/static/zyyl/img/thirdparty/service-bg.png");
      border: unset;
    }

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
        right: 66px;
        background: #eee;
        // border: 2px solid #bb9a55;
        position: absolute;
        top: 0px;
        // width: 150px;
        // height: 62px;
        // line-height: 62px;
        height:136px;
        text-align: center;
        display: none;
        &:hover{
          background-color: #9da4d6;
          color:#fff;
        }
      }
    }

    .cs-mail:hover {
      .shrink {
        display: block;
      }
    }

    .open-user {
      i {
        width: 43px;
        height: 26px;
        display: inline-block;
        margin: 8px 0;
        background: url("/static/zyyl/img/thirdparty/right_register.png") no-repeat;
      }
    }

    .shi-pay {
      i {
        width: 43px;
        height: 26px;
        display: inline-block;
        margin: 8px 0;
        background: url("/static/zyyl/img/thirdparty/right_freeplay.png") no-repeat;
      }
    }

    .cs-app {
      i {
        width: 20px;
        height: 26px;
        display: inline-block;
        margin: 8px 0;
        background: url("/static/zyyl/img/thirdparty/right_app.png") no-repeat;
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
    background-image: url('/static/zyyl/img/new2019.gif');

    .clBtn{
      background: url('/static/zyyl/img/new2019_close.png'); 
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




  .index-float {
      cursor: pointer;
      position: fixed;
      width: 161px;
      right: -63px;
      z-index: 150;
      top: 303px;
      // display: none;
      ._relative {
          position: fixed;
          .h24 {
              padding-left: 20px;
              padding-top: 12px;
              width: 57px;
              height: 60px;
              background: #9da4d6;
              color: #FFF;
              margin-left: 21px;
              .icon-24 {
                  background-image: url(/static/zyyl/img/icon.png);
                  background-position: -117px -429px;
                  width: 38px;
                  height: 37px;
              }
              .info {
                  padding-top: 5px;
                  margin-left: -4px;
              }
          }

          .ask {
              padding-left: 20px;
              padding-top: 12px;
              width: 57px;
              height: 60px;
              background: #9da4d6;
              color: #FFF;
              margin-left: 21px;
              .icon-right-tel {
                  background-image: url(/static/zyyl/img/icon.png);
                  background-position: -240px -150px;
                  width: 28px;
                  height: 34px;
                  
              }
              .info {
                  padding-top: 5px;
                  margin-left: -4px;
              }
          }


          .askVip {
              padding-left: 20px;
              padding-top: 12px;
              width: 57px;
              height: 60px;
              background: #9da4d6;
              color: #FFF;
              margin-left: 21px;
              .icon-right-vip-tel {
                    background-image: url(/static/zyyl/img/icon.png);
                    background-position: -469px -38px;
                    width: 36px;
                    height: 39px;
                }
          }
          .am8show_left {
              padding-left: 20px;
              padding-top: 12px;
              width: 57px;
              height: 60px;
              background: #9da4d6;
              color: #FFF;
              margin-left: 21px;
              .icon_side {
                  background-image: url(/static/zyyl/img/nav/hi.png);
                  height: 32px;
                  width: 41px;
              }
              .info {
                  padding-top: 5px;
                  margin-left: -6px;
              }
          }
          .info {
              padding-top: 5px;
              margin-left: -4px;
          }

          .download {
              padding-left: 20px;
              padding-top: 12px;
              width: 57px;
              height: 60px;
              background: #9da4d6;
              color: #FFF;
              margin-left: 21px;
              .bg-er-wei-ma-wrap {
                  position: absolute;
                  top: -83px;
                  left: -156px;
                  display: none;
                  width: 155px;
                  height: 205px;
                  background: url(/static/zyyl/img/nav/down.png);
                  #qrCode {
                      width: 120px;
                      height: 114px;
                      position: relative;
                      left: 20px;
                      top: 20px;
                  }
              }
              .info {
                    padding-top: 5px;
                    margin-left: -12px;
                }

                &:hover{
                  .bg-er-wei-ma-wrap {
                      display: block;
                  }
                }
          }

          .icon-onbg {
              display: none;
              margin-left: 21px;
          }
          .icon-onbg {
              background-image: url(/static/zyyl/img/nav/icon.png);
              background-position: -160px -194px;
              width: 77px;
              height: 60px;
          }
      }
      .index_event {
          background: url() no-repeat;
          width: 122px;
          height: 109px;
          margin-left: -24px;
          display: none;
          .event_num {
              position: absolute;
              right: 8px;
              top: 4px;
              color: #FFF;
          }
      }
  }





</style>
