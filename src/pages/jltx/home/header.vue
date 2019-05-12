<template>
    <header class="robin-header-box">
        <section class="public-contance">
            <div class="beijing-time">北京时间：<span id="x_time">{{time}}</span></div>
            <div class="robin-header-nav">
                <ul>
                    <!-- <li><a class="txt1" :class="{blinkYellow:isyellow,blinkRed:!isyellow}" href="javascript:void(0);" @click="tryPlay" v-if="!userinfo">立即试玩</a></li> -->
                    <li><a :class="{blinkYellow:!isyellow,blinkRed:isyellow}" class="txt3 blink-yellow" href="/static/jltx/html/download/index.html" target="_blank" >下载APP</a></li>
                    <!-- <li><a :class="{blinkYellow:isyellow,blinkRed:!isyellow}" class="txt2 blink-red" href="javascript:void(0);" target="_blank" >免息借呗</a></li>
                    <li><a class="txt1 blink-yellow" :class="{blinkYellow:!isyellow,blinkRed:isyellow}" href="javascript:void(0);" target="_blank" >金管家</a></li>
                    <li><a :class="{blinkYellow:isyellow,blinkRed:!isyellow}" class="txt3" href="javascript:void(0);" target="_blank" >线路检测</a></li> -->
                    <li><a style="border-right:none" href="javascript:void(0);" onclick="alert('抱歉，您的浏览器无法完成此操作，请使用Ctrl+D进行添加！');">加入收藏</a></li>
                </ul>
            </div>
        </section> 
    </header>
</template>

<script>
  import UserService from '@/service/public/UserService.js'
  import {postS,getS} from '@/service/public/service.js'
  export default {
    data () {
      return {
        time:"",
        isyellow:false,
        left: 5,
        top: -193,
      }
    },
    methods: {
      //头部颜色闪烁
      blink(){
        setInterval(()=>{
          // console.log(222);
          this.isyellow=!this.isyellow;
        },300)
      },
      //获取时间
      ee(num) {
        if (num < 10) {
          num = "0" + num;
        }
        return num;
      },
      we(num){
        switch (num) {
          case 1: num = "一"; break;
          case 2: num = "二"; break;
          case 3: num = "三"; break;
          case 4: num = "四"; break;
          case 5: num = "五"; break;
          case 6: num = "六"; break;
          case 7: num = "七"; break;
        }
        return num;
      },
      getTimes() {
        var that = this;
        let timestam = new Date().getTime();
        // let time = timestam - 43200000;
        let dateObj = new Date(timestam),
            p0 = this.ee,
            Y = dateObj.getFullYear(),
            Mh = dateObj.getMonth() + 1,
            D = p0(dateObj.getDate()),
            X = this.we(dateObj.getDay()),
            H = p0(dateObj.getHours()),
            M = p0(dateObj.getMinutes()),
            S = p0(dateObj.getSeconds());

        if (Mh > 12) {
            Mh = "01";
        } else if (Mh < 10) {
            Mh = "0" + Mh;
        }
        let str = `${Y}-${Mh}-${D} ${H}:${M}:${S}`;
        this.time = str ;
      },
      // 试玩
      async tryPlay() {
        let res = await this.$http.get("/frontend/test/demo", {
          headers: { Accept: "application/x.tg.v2+json" },
          params: {}
        });
        if (res && res.code == 200) {
          UserService.setCache(res, "test");

          this.$http.post(`${this.$HOST_NAME}/member/refundInfo`).then(res => {
            let platform = res.data.platform;
            let alias = res.data.alias;
            let keys = Object.keys(platform);
            let refund = [];
            keys.forEach((v, i) => {
              refund[i] = {};
              refund[i].title = v;
              refund[i].list = [];
              platform[v].forEach((a, j) => {
                refund[i].list[j] = {};
                refund[i].list[j].key = Object.keys(a)[0];
                refund[i].list[j].refund = Object.values(a)[0];
                refund[i].list[j].name = alias[refund[i].list[j].key];
              });
            });
            localStorage.setItem("refund", JSON.stringify(refund));
          });
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      },
    },
    computed: {
        userinfo () {
          return this.$store.state.mainState.userinfo
        }
    },
    created () {
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState == 'hidden') {
          if (!localStorage.userinfo) {
            let timer = setInterval(() => {
              if (localStorage.userinfo) {
                clearInterval(timer)
                window.location.reload()
              }
            }, 1000)
          }
        }
      })
      if (!this.userinfo) return false
      switch (this.userinfo.levelId) {
        case 2:
          this.top = 1
          break
        case 3:
          this.top = -31
          break
        case 4:
          this.top = -64
          break
        case 5:
          this.top = -96
          break
      }
    },
    mounted(){
      this.blink();
      //获取时间
      let time = setInterval( this.getTimes, 1000);
    },
    destroyed(){

    },
  }
</script>

<style lang="less" scoped>
    .blinkYellow{
      color:rgba(255,240,0)!important;
    }
    .blinkRed{
      color:rgba(255,0,0)!important;
    }
    .robin-header-box{
        width: 100%;
        height: 27px;
        line-height: 27px;
        background: #971e1a;
        color: #fff;
        font-size: 12px;
    }
    body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, input, button, textarea, p, blockquote, th, td, form {
        margin: 0;
        padding: 0;
    }
    .robin-header-nav{
        width: auto;
        float: right;
    }
    .robin-header-nav li {
        float: left;
    }
    .robin-header-nav li a{
        color: #fff;
        border-right: 2px solid #fff;
        padding: 0 12px;
    }
    .public-contance div>ul>li>a{
        width:105px;
    }
</style>
