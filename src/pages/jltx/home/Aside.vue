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
        klk22k@163.com
      </div>
      <p>投诉信箱</p>
    </li>

    <li class="open-user" @click="goResiter">
      <div>
        <i></i>
      </div>
      <p>免费开户</p>
    </li>

    <li class="shi-pay" @click="tryPlay">
      <div>
        <i></i>
      </div>
      <p>免费试玩</p>
    </li>

    <!-- <li class="cs-app">
                    <div>
                  <i></i>
               </div>
               <p>APP下载</p>
            </li> -->

    <li class="cs-goTop" @click="goTop">
      <div>
        <i></i>
      </div>
      <p>一键置顶</p>
    </li>

  </ul>
  <!--<div class="new2019 animated fadeInUp mobile_auto" onclick="window.open('/static/jltx/html/active/pig2019/#')" v-if="showNew2019">
    <div class="clBtn clBtn1" @click.stop="hideNew2019"></div>
  </div>-->
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
        this.$router.push('/home/register')
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
          background: url("/static/jltx/img/cebianlan-sprite.png") no-repeat top left;
          width: 19px;
          height: 25px;
        }
      }

      p {
        font-size: 14px;
        text-align: center;
      }
    }

    li:hover {
      background: url("/static/jltx/img/service-bg.png");
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
        right: 70px;
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

    .open-user {
      i {
        width: 43px;
        height: 26px;
        display: inline-block;
        margin: 8px 0;
        background: url("/static/jltx/img/right_register.png") no-repeat;
      }
    }

    .shi-pay {
      i {
        width: 43px;
        height: 26px;
        display: inline-block;
        margin: 8px 0;
        background: url("/static/jltx/img/right_freeplay.png") no-repeat;
      }
    }

    .cs-app {
      i {
        width: 20px;
        height: 26px;
        display: inline-block;
        margin: 8px 0;
        background: url("/static/jltx/img/right_app.png") no-repeat;
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
    background-image: url('/static/jltx/img/new2019.gif');

    .clBtn{
      background: url('/static/jltx/img/new2019_close.png'); 
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
