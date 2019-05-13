<template>
  <!-- <div>
    <div class="right-nav">
      <ul>
        <li class="li1">
          <a
            href="javascript:;"
            @click="kefuFc"
            target="_blank"
          ></a>
        </li>
        <li class="li2" @mouseenter="isWchet=true" @mouseleave="isWchet=false">
          <a href="javascript:;"></a>
          <div class="wechatImg" v-if="isWchet">
            <img src="/static/ly88/img/wechat.16de58f.jpg" alt>
          </div>
        </li>
        <li class="li3">
          <a
            href="http://wpa.qq.com/msgrd?v=3&amp;uin=134564455&amp;site=qq&amp;menu=yes"
            target="_blank"
          ></a>
        </li>
        <li class="li4">
          <a href="mailto:lycsr2@gmail.com" target="_blank"></a>
        </li>
        <a href="#" class="gotop">返回顶部</a>
      </ul>
      <span class="j-closeThis"></span>
    </div>
  </div> -->
<div>
    <ul class="qy-service">
      <li class="service" @click="goService">
        <div>

        </div>

      </li>

      <li class="cs-mail" @click="goQq">
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
          <!--        <img src="/static/ly88/img/code.png" alt="">-->
          <div style="width: 128px; height: 128px" ref="qr-code"></div>
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
    <!--<div class="new2019 animated fadeInUp mobile_auto" onclick="window.open('/static/ly88/html/active/pig2019/#')" v-if="showNew2019">
      <div class="clBtn clBtn1" @click.stop="hideNew2019"></div>
    </div>-->
  </div>



</template>

<script>
// import store from "@/vuex/store";
// import $ from "jquery";

// export default {
//   data() {
//     return {
//       isWchet:false
//     };
//   },
//   methods: {
//     addWindow() {
//       window.addEventListener("scroll", this.scrollFunc);
//     },
//     kefuFc() {
//       let service = JSON.parse(localStorage.config).service;
//       if (service) {
//         let ser = service.find(item => item.status === "on");
//         if (ser) {
//           window.open(ser.url);
//         }
//       }
//     },
//     goView(link) {
//       this.$router.push(link);
//     }
//   },
//   mounted() {
//     this.addWindow();
//   },
//   store
// };


  import UserService from '@/service/public/UserService.js'
  // import $ from 'jquery'

  export default {
    data () {
      return {
        showNew2019: true
      }
    },
    mounted () {
      this.createDownloadQRCode({
        el: this.$refs['qr-code'],
        url: window.location.origin + '/m#/download',
        size: 128
      })
    },
    methods: {
      goService () {
        let service = JSON.parse(localStorage.config).service
        if (service) {
          let ser = service.find(item => item.status === 'on')
          if (ser) {
            window.open(ser.url)
          }
        }
      },
      async tryPlay () {
        let res = await this.$http.get('/frontend/test/demo', {
          headers: { 'Accept': 'application/x.tg.v2+json' },
          params: {}
        })
        if (res && res.code === 200) {
          UserService.setCache(res, 'test')
          window.location.reload()
        }
      },
      goQq () {
        window.open('https://d3373.com')
      },
      goResiter () {
        this.$router.push('/home/register')
      },
      goTop () {
        // $('html,body')
        //   .stop()
        //   .animate({ scrollTop: 0 }, 500)
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
      hideNew2019 () {
        this.showNew2019 = false
      }

    }
  }
</script>

<style lang="less" scoped>
// .right-nav {
//   position: fixed;
//   right: 0;
//   top: 235px;
//   width: 138px;
//   height: 367px;
//   z-index: 102;
// }
// .right-nav > span {
//   display: block;
//   width: 20px;
//   height: 20px;
//   cursor: pointer;
//   position: absolute;
//   right: 0;
//   top: 15px;
// }

// .right-nav ul {
//   margin-top: 59px;
//   margin-left: 4px;
//   position: relative;
// }

// .right-nav li {
//   width: 138px;
//   background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAA2CAMAAAA4c2GRAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURQAAADY2NiwsLC0tLRwcHCEhIR8fHx0dHR4eHiAgIDU1NTQ0NC4uLjIyMi8vLzMzMzExMTAwMG42iS4AAAABdFJOU6Z/U967AAAAbUlEQVRYw+3OxwHAIBAEscU4Eo/+m3UZw2NVgZRgShfKgaTCBooDDvCBygaqAw7wgckGpgN8oH+o7oADCjYQDihuVGixgeUAHxhsYGwQeFEODDU20BxQe1AbBDIbyA5sEDhRDmQdbODYIAAT7QeqkaK9toj6uQAAAABJRU5ErkJggg==)
//     no-repeat top;
//   cursor: pointer;
//   position: relative;
// }

// .right-nav li:hover {
//   background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAA2CAMAAAA4c2GRAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURQAAAFpaWkpKSkxMTDU1NTY2NjExMTg4ODAwMDMzM1lZWVdXV01NTU9PT1RUVFVVVVJSUlFRUaVFrA4AAAABdFJOU6Z/U967AAAAbUlEQVRYw+3OxwHAIBAEscU4Eo/+m3UZw2NVgZRgSg/KgaTCBooDDvCBygaqAw7wgckGpgN8YFyo4YADCjYQDihOVGixgeUAH+hsoG8Q+FAOdDU20BxQu1EbBDIbyA5sEHhRDmQdbODYIAAT7QfzdqilPdG6owAAAABJRU5ErkJggg==)
//     no-repeat top;
// }

// .right-nav li a {
//   width: 105px;
//   height: 48px;
//   margin: 0 16px;
//   display: inline-block;
//   background: url(/static/ly88/img/rn1.554d652.png) no-repeat 0;
// }

// .right-nav li.li2 a {
//   background: url(/static/ly88/img/rn2.fffc6c1.png) no-repeat 0;
// }

// .right-nav li.li3 a {
//   background: url(/static/ly88/img/rn3.75c7b39.png) no-repeat 0;
// }

// .right-nav li.li4 a {
//   background: url(/static/ly88/img/rn4.77ccf5e.png) no-repeat 0;
// }

// .right-nav li.li5 a {
//   background: url(/static/ly88/img/rn5.610c349.png) no-repeat 0;
// }

// .right-nav li:hover a {
//   background-position: -105px;
// }

// .gotop {
//   position: absolute;
//   width: 90px;
//   height: 25px;
//   line-height: 25px;
//   bottom: -25px;
//   left: 30px;
//   cursor: pointer;
//   border: 1px solid #2c2c2c;
//   border-top: none;
//   background-color: #1c1c1c;
//   -webkit-border-radius: 0 0 5px 5px;
//   -moz-border-radius: 0 0 5px 5px;
//   border-radius: 0 0 5px 5px;
//   text-align: center;
//   color: #676767;
//   font-size: 12px;
// }

// .gotop:hover {
//   color: #fff;
// }

// .wechatImg {
//   width: 138px;
// }

// .wechatImg img {
//   width: 100%;
//   margin: 0 6px;
// }

// .close,
// .kefu,
// .btn_reg,
// .wechat,
// .zhifubao,
// .qq,
// .bank,
// .webs,
// .zhuanpan {
//   padding: 15px 50px;
//   position: absolute;
//   bottom: 12px;
//   left: 10px;
//   // background: RED;
// }

// .kefu {
//   bottom: 165px;
// }

// .btn_reg {
//   bottom: 130px;
// }

// .wechat {
//   bottom: 228px;
// }

// .zhifubao {
//   bottom: 188px;
// }

// .qq {
//   bottom: 148px;
// }

// .bank {
//   bottom: 112px;
// }

// .webs {
//   bottom: 80px;
// }

// .zhuanpan {
//   bottom: 45px;
// }

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
        //   background: url("/static/ly88/img/thirdparty/cebianlan-sprite.png") no-repeat top left;
        //   width: 19px;
        //   height: 25px;
        // }
      }

      p {
        font-size: 14px;
        text-align: center;
      }
    }

    li:first-child > div {
      background: url("/static/ly88/img/thirdparty/11.png") no-repeat center;
      background-size: cover;
    }

    li:first-child > div:hover {
      background: url("/static/ly88/img/thirdparty/1.png") no-repeat center;
      background-size: cover;
    }

    li:nth-child(2) > div {
      background: url("/static/ly88/img/thirdparty/55.png") no-repeat center;
      background-size: cover;
    }

    li:nth-child(2) > div:hover {
      background: url("/static/ly88/img/thirdparty/5.png") no-repeat center;
      background-size: cover;
    }

    li:nth-child(3) > div {
      background: url("/static/ly88/img/thirdparty/22.png") no-repeat center;
      background-size: cover;
    }

    li:nth-child(3) > div:hover {
      background: url("/static/ly88/img/thirdparty/2.png") no-repeat center;
      background-size: cover;
    }


    li:nth-child(4) > div {
      background: url("/static/ly88/img/thirdparty/44.png") no-repeat center;
      background-size: cover;
    }

    li:nth-child(4) > div:hover {
      background: url("/static/ly88/img/thirdparty/4.png") no-repeat center;
      background-size: cover;
    }


    // li:hover {
    //   background: url("/static/ly88/img/thirdparty/service-bg.png");
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
        right: 60px;
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

    .cs-mail-phone {
      .downloadcode {
        position: absolute;
        width: 128px;
        height: 150px;
        border: 1px solid #dedede;
        display: none;
        top: -30px;
        // right:70px;
        right: 60px;

        img {
          width: 100%;
          // height:100%;
        }
      }

    }

    .cs-mail-phone:hover {
      .downloadcode {
        display: block;
      }
    }

    .open-user {
      i {
        width: 43px;
        height: 26px;
        display: inline-block;
        margin: 8px 0;
        background: url("/static/ly88/img/thirdparty/right_register.png") no-repeat;
      }
    }

    .shi-pay {
      i {
        width: 43px;
        height: 26px;
        display: inline-block;
        margin: 8px 0;
        background: url("/static/ly88/img/thirdparty/right_freeplay.png") no-repeat;
      }
    }

    .cs-app {
      i {
        width: 20px;
        height: 26px;
        display: inline-block;
        margin: 8px 0;
        background: url("/static/ly88/img/thirdparty/right_app.png") no-repeat;
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

  .new2019 {
    position: fixed;
    z-index: 9999;
    right: 20px;
    bottom: 30px;
    cursor: pointer;
    width: 230px;
    height: 230px;
    background-image: url('/static/ly88/img/new2019.gif');

    .clBtn {
      background: url('/static/ly88/img/new2019_close.png');
      z-index: 99999;
      position: absolute;
      width: 23px;
      height: 23px;
      top: 0px;
      right: 0px;
      display: none;
    }

    &:hover .clBtn {
      display: block;
    }
  }

</style>



