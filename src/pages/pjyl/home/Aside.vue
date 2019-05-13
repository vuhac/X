<!--<template>
<div>
 
</div>
 
</template>

<script>
  import $ from 'jquery'
  export default {
    data () {
      return {
        s1: true,
        s2: true,
        s3: true,
        bottmRight:true,
        bottmLeft:true,
        topLeft:true,
        topRight:true
      }
    },
    methods: {
       addWindow () {
        window.addEventListener('scroll', this.scrollFunc)
      },
      scrollFunc () {
        $('.TplFloatPic_1').stop().animate({top: window.pageYOffset + 180}, 1000)
      },
      openKefu () {
        // window.open('https://vm.providesupport.com/08ffyyacqwb2j1oavlhdaf13sx')
        let service = JSON.parse(localStorage.config).service;
        if (service) {
          let ser = service.find(item => item.status === 'on')
          if (ser) {
            window.open(ser.url);
          }
        }
      },
      goUserCen (name, num) {
        if (!localStorage.token || !localStorage.userinfo) {
          alert('您还没有登录,请先登录。')
          return false
        }
        //name的类型有 ：  recharge （充值）  personage （个人资料）
        //withdraw （提现）  agency  （代理） message （消息）  discounts （优惠）
        this.$store.commit('showPersonal', {bool: true})
        this.$store.commit('showContent', {parent: name})
        this.$store.commit('showNav', {child: num})
      },
      goLink(){
         if(!localStorage.token || !localStorage.userinfo){
            this.$router.push('/home/register')
         }
      }
    },
    mounted () {
      // let timer = setInterval(this.changeImg, 1500);
      this.addWindow()
    },
    created () {

    }
  }
</script>

<style lang="less" scoped>
.activityImg{
  position:fixed;
  bottom:0;
  right:0;
  width:145px;
  height:160px;
  z-index:1001;
  img{
    width:100%;
  }
  .closed{
    position: absolute;
    right: 0;
    top: -10px;
    z-index: 11;
    width: 26px;
    height: 26px;
    cursor: pointer;
    background: url(https://cdn.weibo-hk.com/Web.Portal/_Common/Content/Views/Shared/images/close.png);
  }
}

.getMoney{
  position:fixed;
  top:0;
  left:0;
  width:150px;
  height:150px;
  z-index:1001;
  background:url(/static/pjyl/img/pjyl/head.gif) no-repeat top left;
  div{
    a{
      display: block;
      height: 157px;
      margin-top: 273px;
    }
  }
}

.getYouhui{
  position:fixed;
  top:0;
  right:0;
  width:150px;
  height:150px;
  z-index:1001;
  background:url(/static/pjyl/img/pjyl/rt.gif) no-repeat top right;
}
.getYouhui>div{
  position: absolute;
  top: 0;
  right: 0;
  width: 188px;
  height: 0;
  background: url(/static/pjyl/img/pjyl/rt_h.png) no-repeat center top;
  opacity: 0;
  filter: alpha(opacity=0);
  -moz-transform: skewX(-145deg);
  -ms-transform: skewX(-145deg);
  -o-transform: skewX(-145deg);
  -webkit-transform: skewX(-145deg);
  transform: skewX(-145deg);
  -moz-transform-origin: right top;
  -ms-transform-origin: right top;
  -o-transform-origin: right top;
  -webkit-transform-origin: right top;
  transform-origin: right top;
  -moz-transition: all .6s ease;
  -o-transition: all .6s ease;
  -webkit-transition: all .6s ease;
  transition: all .6s ease;
}
.getYouhui:hover>div {
    width: 188px;
    height: 700px;
    opacity: 1;
    filter: alpha(opacity=100);
    -moz-transform: scale(1,1);
    -ms-transform: scale(1,1);
    -o-transform: scale(1,1);
    -webkit-transform: scale(1,1);
    transform: scale(1,1);
}

.getMoney:hover>div {
    width: 188px;
    height: 700px;
    opacity: 1;
    filter: alpha(opacity=100);
    -moz-transform: scale(1,1);
    -ms-transform: scale(1,1);
    -o-transform: scale(1,1);
    -webkit-transform: scale(1,1);
    transform: scale(1,1);
}

.getMoney>div {
    position: absolute;
    top: 0;
    left: 0;
    width: 188px;
    height: 0;
    background: url(/static/pjyl/img/pjyl/body.png) no-repeat center top;
    opacity: 0;
    filter: alpha(opacity=0);
    -moz-transform: skewX(145deg);
    -ms-transform: skewX(145deg);
    -o-transform: skewX(145deg);
    -webkit-transform: skewX(145deg);
    transform: skewX(145deg);
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -o-transform-origin: left top;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    -moz-transition: all .6s ease;
    -o-transition: all .6s ease;
    -webkit-transition: all .6s ease;
    transition: all .6s ease;
}

.getMoney>span.closed, {
    position: absolute;
    top: 0;
    left: 0;
    width: 26px;
    height: 26px;
    background: url(https://cdn.weibo-hk.com/Web.Portal/_Common/Content/Views/Shared/images/close.png) no-repeat center top;
    cursor: pointer;
}
.getYouhui>span.closed{
    position: absolute;
    top: 0;
    right: 0;
    width: 26px;
    height: 26px;
    background: url(https://cdn.weibo-hk.com/Web.Portal/_Common/Content/Views/Shared/images/close.png) no-repeat center top;
    cursor: pointer;
}

.TplFloatSet {
    position: absolute;
    z-index: 1000;
    top: 190px;
    right: 0;
    width: 130px;
    height: 460px;
    background: url("/static/pjyl/img/pjyl/right.png") no-repeat right top;
    padding-top:93px;
    div {
      position: absolute;
      width: 100%;
      left: 0;
      &.kefu{
        height: 92px;
      }
      &.huiyuan{
        top: 73px;
        height: 40px;
        cursor: pointer;
        overflow: hidden;
      }
       &.zhifu{
        top: 113px;
        height: 40px;
        cursor: pointer;
        span{
        
          height: 40px;
          display: block;
          float: left;
        }
        span:nth-child(1){
           width: 50px;

        }
         span:nth-child(2){
           width: 40px;
           
        }
         span:nth-child(3){
           width: 50px;
           
        }
      }
      &.jiance{
        top: 155px;
        height: 56px;
      }
      &.newclose {
        height: 24px;
        bottom: 0;
        cursor:pointer;
      }
    }
  }

  .TplFloatSet0 {
    left: 0;
    background: url("/static/pjyl/img/pjyl/left.png") no-repeat left top;
    padding-top:93px;
  }

</style> -->
<template>
<div>
   <ul class="qy-service TplFloatPic_1" style="position:absolute;top:225px;right:20px;z-index:99;transition:all ease .3s">
    <li class="service" @click="goService">
      <div>
      </div>
    </li>

    <li class="cs-mail">
      <div>
      </div>
      <div class="shrink" style='width:166px;'>
        xpj@tgjt888.com
      </div>
    </li>
    
    <li class="Agency" @click="goNet">
      <div>
      </div>
    </li>

    <!-- <li class="jiebei" @click="$router.push('/home/youhui')">
      <div>
      </div>
    </li> -->

    <!-- <li class="gold_housekeeper" @click="$router.push('/home/youhui')">
      <div>
      </div>
    </li> -->

    <li class="download" @click="goDownload">
      <div>
        </div>
    </li>

    <li class="cs-goTop" @click="goTop">
      <div>
      </div>
    </li>

  </ul>
 
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
        // let url = JSON.parse(localStorage.config).service[0].url;
        let service = JSON.parse(localStorage.config).service;
        if (service) {
          let ser = service.find(item => item.status === 'on')
          if (ser) {
            window.open(ser.url);
          }
        }
      },
      goNet(){
         window.open('https://000p.com','_blank')
      },
      async tryPlay () {
        let res = await this.$http.get("/frontend/test/demo", { headers: { 'Accept': 'application/x.tg.v2+json' },params:{}});
        if (res && res.code == 200) {
          UserService.setCache(res, 'test')
          window.location.reload()
        }
      },
      addWindow () {
        window.addEventListener('scroll', this.scrollFunc)
      },
      scrollFunc (e) {
        // $('.TplFloatPic_1')
        //   .stop()
        //   .animate({top: window.pageYOffset+164}, 1000)
        var nodeitem = document.getElementsByClassName('TplFloatPic_1')[0];
        window.onscroll= function(){
            //变量t是滚动条滚动时，距离顶部的距离
            var t = document.documentElement.scrollTop||document.body.scrollTop;
            //当滚动时元素距离顶部距离225
            if(t>0){
                nodeitem.style.top=t+225+'px';
            }
        }
      },
      goDownload(){
         window.open("/static/pjyl/html/download/index.html")
      },
      goResiter () {
        this.$router.push('/home/register')
      },
     
      goTop () {
        // $('html,body')
        //   .stop()
        //   .animate({scrollTop: 0}, 500)
        //获取滚动条距离顶部的距离
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
      // hideNew2019(){
      //   this.showNew2019= false
      // }
     
    },
    mounted(){
      this.addWindow()
    }
  }
</script>

<style lang="less" scoped>
  .qy-service {
    // position: absolute;;
    // right: 20px;
    // z-index: 99;
    // top: 225px;
    li {
      position: relative;
      width: 65px;
      height: 65px;
      margin-bottom: 5px;
      border: 1px solid #a4b3d7;
      border-radius: 5px;
      background-color: #fff;
      cursor: pointer;
      background: -webkit-gradient(linear, left bottom, left top, from(#dee5fb), to(#fff));
      background: -webkit-linear-gradient(bottom, #dee5fb, #fff);
      background: -o-linear-gradient(bottom, #dee5fb, rgb(82, 81, 81));
      background: linear-gradient(0deg, #dee5fb, #fff);

      div {
        background-size: 100% 100%;
        height:65px;
        width:65px;
      }

      p {
        font-size: 14px;
        text-align: center;
        line-height: 1;
        color: inherit;;
      }
    }

    li:hover {
      background: url("/static/pjyl/img/thirdparty/service-bg.png");
      border: unset;
    }

    .service {
      div{
        background: url("/static/pjyl/img/thirdparty/kefu.png");
      }
    }
    .by-service{
      div{
        background:url(/static/pjyl/img/thirdparty/by-kefu.png)
      }
    }

    .cs-mail {
      div{
        background: url("/static/pjyl/img/thirdparty/tousu.png");
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
    .Agency{
      div{
         background:url(/static/pjyl/img/thirdparty/daili.png)
      }
    }
  

    .download{
      div{
        background: url("/static/pjyl/img/thirdparty/download.png")
      }
    }

    .cs-goTop {
      div{
        background: url("/static/pjyl/img/thirdparty/zhiding.png")
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
    background-image: url('/static/pjyl/img/new2019.gif');

    .clBtn{
      background: url('/static/pjyl/img/new2019_close.png'); 
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
