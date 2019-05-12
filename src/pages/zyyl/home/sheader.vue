<template>
    <div>
        <div class="top fixed" id="header" attr-loginname="" attr-customertype="-1">
            <div class="top-con">
                <div class="icn-con-left">
                </div>
                <div class="icn-con-right" style="width: 430px;">
                    <a href="javascript:void(0)" class="fgp-link" @click="forget">忘记密码?</a>｜
                    <a href="javascript:void(0)" @click="goHelp" style="color: #E78F42" data-depth="1">常见问题</a>｜
                    <a href="javascript:void(0)" target="_blank" data-tag_id="header_show_licence" data-depth="1" @click="golingk">备用网址</a>｜
                    <a href="javascript:void(0)" @click="addFavorite('亿博')" data-depth="1">加入收藏</a>
                    <!-- <div class="free_play">
                        <a href="javascript:void(0)" @click="tryPlay" data-tag_id="header_logined_playFree" data-depth="1">免费试玩</a>
                    </div> -->
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>

        <div class="hdr-hld ">
            <a href="javascript:void(0)" @click="$router.push('/');$parent.getPopout1()" class="logo" data-tag_id="header_logo_yamei" data-depth="1"></a>
            <span style="margin-right: 15px;display: inline-block;border-left: 1px dashed rgb( 206, 206, 206 );width: 1px;height: 45px;margin-left: 15px;margin-top: 20px;"></span>
            <a  class="moonFestival2018_bundesliga_logo index-sprite _2" style="display: inline-block"></a>
            <!-- <div style="float: right;margin-top: 20px;text-align: center">
                <p style="font-size: 15px;color: #ccc;line-height:1">优惠永远多一点</p>
                <p style="border-top:1px solid #ccc;height: 0;margin: 6px 0;width: 110px;"></p>
                <p style="font-size: 14px;color: #ccc;line-height:1">首存送5000</p>
            </div> -->
            <div class="hdr-fcn" style="display: none"></div>
            <span class="clear"></span>
        </div>


    </div>
</template>
<script>
  import UserService from '@/service/public/UserService.js'
  import {postS,getS} from '@/service/public/service.js'
export default {
    data(){
        return {

        }
    },
    methods:{
        forget () {
            alert('忘记帐号密码，请联系在线客服人员取回！')
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
          /**
     * 收藏本站
     * @param title
     */
    addFavorite(title) {
      var url = "http://" + location.hostname + "/";
      try {
        window.external.addFavorite(url, title);
      } catch (e) {
        try {
          window.sidebar.addPanel(title, url, "");
        } catch (e) {
          alert(
            "抱歉，您所使用的浏览器无法完成此操作。\n加入收藏失败，电脑请使用Ctrl+D进行添加"
          );
        }
      }
    },
    goHelp(){
        this.$router.push({path:"/home/issue"})
    },
    golingk(){
        window.open("https://yb81.com/")
    }
    }
}
</script>
<style lang="less" scoped>
    .top {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 1000;
        height: 30px;
        background: #efefef;
        .top-con {
            line-height: 30px;
            width: 1200px;
            height: 30px;
            margin: 0 auto;
            .icn-con-left {
                float: left;
                color: #a5a1a9;
                display: none;
            }
            .icn-con-right {
                float: right;
                width: 405px;
                .fgp-link {
                    color: #ef2d5f;
                }
                a {
                    color: #7d7881;
                    font-size:14px;
                }

                .free_play {
                    float: right;
                    width: 90px;
                    height: 30px;
                    background: #e98f38;
                    text-align: center;
                    margin-left: 12px;
                    line-height: 26px;
                    a {
                        color: #FFF;
                        font-size: 14px;
                    }
                }
            }
        }
    }

    .clear {
        clear: both;
    }

    .hdr-hld {
        width: 1200px;
        height: 79px;
        margin: 0 auto;
        margin-top:30px;
        .logo {
            float: left;
            // margin-top: 20px;
            margin-top:14px;
        }
        .logo {
            background: url(/static/zyyl/img/homelogo.png) no-repeat;
            // background-position: 0 -273px;
            background-size:100%;
            // width: 153px;
            // height: 40px;
            width:200px;
            height:54px;
        }

        ._2 {
            height: 42px;
            width: 196px;
            background-position: 0 -127px;
        }
        .index-sprite {
            background: url(/static/zyyl/img/a_sprite.png) no-repeat;
            display: block;
        }

        .moonFestival2018_bundesliga_logo {
            position: absolute;
            width: 196px;
            height: 46px;
            top: 18px;
            left: 199px;
            cursor: pointer;
            display: none;
        }
        .moonFestival2018_bundesliga_logo {
            width: 196px;
            height: 42px;
            cursor: pointer;
            display: inline-block;
            position: relative;
            top: 0;
            left: 0;
            background: url(/static/zyyl/img/fl.png);
        }
        .hdr-fcn {
            float: right;
        }
    }

</style>
