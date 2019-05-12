<template>
  <div class="youhui">

    <div class="promotions_banner">

    </div>

    <div id="MemberExclusive_area" class="MemberExclusive_area">

      <!--   <div style="margin-bottom: 10px;">
            <a class="menuHead" style="margin-bottom: 10px;" id="redb" href="/static/ly88/html/active/czjhb/index.html" target="_blank"><img
              src="/static/ly88/img/youhui/redb.gif"/></a>
            <div class="Content_box" style="display: none;" id="img_redb">
            </div>
          </div>

          <div style="margin-bottom: 10px;">
            <a class="menuHead" style="margin-bottom: 10px;" id="jgj" href="/static/ly88/html/active/jgj/index.html" target="_blank"><img
              src="/static/ly88/img/youhui/jgj.png"/></a>
            <div class="Content_box" style="display: none;" id="img_jgj">
            </div>
          </div>

          <div style="margin-bottom: 10px;">
            <a class="menuHead" style="margin-bottom: 10px;" id="zhuanpan" href="/static/ly88/html/active/opportunity/index.html" target="_blank"><img
              src="/static/ly88/img/youhui/zhuanpan.png"/></a>
            <div class="Content_box" style="display: none;" id="img_zhuanpan">
            </div>
          </div>-->

     <!-- <div style="margin-bottom: 10px;">
        <a class="menuHead" style="margin-bottom: 10px;" id="zhaomu"><img
          src="/static/ly88/img/youhui/zhaomu.png"/></a>
        <div class="Content_box" style="display: none;" id="img_zhaomu">
          <img src="/static/ly88/img/youhui/zhaomuc.png" alt="">
        </div>
      </div>-->

      <div style="margin-bottom: 10px;">
        <a class="menuHead" style="margin-bottom: 10px;" id="xhy"><img
          src="/static/ly88/img/youhui/xhy.png"/></a>
        <div class="Content_box" style="display: none;" id="img_xhy">
          <img src="/static/ly88/img/youhui/xhyc.png" alt="">
        </div>
      </div>

      <div style="margin-bottom: 10px;">
        <a class="menuHead" style="margin-bottom: 10px;" id="daili"><img
          src="/static/ly88/img/youhui/daili.png"/></a>
        <div class="Content_box" style="display: none;" id="img_daili">
          <img src="/static/ly88/img/youhui/dailic.png" alt="">
        </div>
      </div>

      <div style="margin-bottom: 10px;">
        <a class="menuHead" style="margin-bottom: 10px;" id="huikuan"><img
          src="/static/ly88/img/youhui/huikuan.png"/></a>
        <div class="Content_box" style="display: none;" id="img_huikuan">
          <img src="/static/ly88/img/youhui/huikuanc.png" alt="">
        </div>
      </div>

      <div style="margin-bottom: 10px;">
        <a class="menuHead" style="margin-bottom: 10px;" id="niuniu"><img
          src="/static/ly88/img/youhui/niuniu.png"/></a>
        <div class="Content_box" style="display: none;" id="img_niuniu">
          <img src="/static/ly88/img/youhui/niuniuc.png" alt="">
        </div>
      </div>

      <div style="margin-bottom: 10px;">
        <a class="menuHead" style="margin-bottom: 10px;" id="qkds"><img
          src="/static/ly88/img/youhui/qkds.png"/></a>
        <div class="Content_box" style="display: none;" id="img_qkds">
          <img src="/static/ly88/img/youhui/qkdsc.png" alt="">
        </div>
      </div>

      <div style="margin-bottom: 10px;">
        <a class="menuHead" style="margin-bottom: 10px;" id="kscp"><img
          src="/static/ly88/img/youhui/kscp.png"/></a>
        <div class="Content_box" style="display: none;" id="img_kscp">
          <img src="/static/ly88/img/youhui/kscpc.png" alt="">
        </div>
      </div>

      <div style="margin-bottom: 10px;">
        <a class="menuHead" style="margin-bottom: 10px;" id="ysf"><img
          src="/static/ly88/img/youhui/ysf.png"/></a>
        <div class="Content_box" style="display: none;" id="img_ysf">
          <img src="/static/ly88/img/youhui/ysfc.png" alt="">
        </div>
      </div>

      <div style="margin-bottom: 10px;">
        <a class="menuHead" style="margin-bottom: 10px;" id="wxx"><img
          src="/static/ly88/img/youhui/wxx.png"/></a>
        <div class="Content_box" style="display: none;" id="img_wxx">
          <img src="/static/ly88/img/youhui/wxxc.png" alt="">
        </div>
      </div>

      <div style="margin-bottom: 10px;">
        <a class="menuHead" style="margin-bottom: 10px;" id="zfb"><img
          src="/static/ly88/img/youhui/zfb.png"/></a>
        <div class="Content_box" style="display: none;" id="img_zfb">
          <img src="/static/ly88/img/youhui/zfbc.png" alt="">
        </div>
      </div>

      <div style="margin-bottom: 10px;">
        <a class="menuHead" style="margin-bottom: 10px;" id="wxsm"><img
          src="/static/ly88/img/youhui/wxsm.png"/></a>
        <div class="Content_box" style="display: none;" id="img_wxsm">
          <img src="/static/ly88/img/youhui/wxsmc.png" alt="">
        </div>
      </div>

      <div style="margin-bottom: 10px;">
        <a class="menuHead" style="margin-bottom: 10px;" id="dns"><img
          src="/static/ly88/img/youhui/dns.png"/></a>
        <div class="Content_box" style="display: none;" id="img_dns">
          <img src="/static/ly88/img/youhui/dnsc.png" alt="">
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import * as $ from 'jquery'

export default {
  methods: {
    refresh () {
      $('.menuHead').bind('click', function () {
        var hid = $(this).attr('id')
        var im = $('#img_' + hid)
        if (im.css('display') === 'none') {
          $('.Content_box').hide()
          im.show()
        } else {
          im.hide()
        }
      })
    }
  },
  created: function () {
  },
  async mounted () {
    const res = await this.$http.create().get('/')
    if (res && res.status === 200) {
      this.dateTime = new Date(res.headers.date).getTime()
    }
    this.refresh()
  },
  updated () {

  },
  watch: {},
  components: {}
}
</script>

<style lang="less" scoped>
  .youhui {
    .promotions_banner {
      height: 360px;
      background: url("/static/ly88/img/youhui/index_banner.jpg") center no-repeat;
    }

    #MemberExclusive_area {
      width: 1000px;
      margin: 40px auto;
    }

    #MemberExclusive_area .menuHead img {
      width: 1000px;
      margin-top: 20px;
      cursor: pointer;
    }

    #MemberExclusive_area .eventtext {
      padding: 0;
      width: 1000px;
    }

    #MemberExclusive_area .promotContent .content {
      border: 9px solid #4f8ffc;
      padding: 15px;
      background-color: #e5eeff;
    }

    #MemberExclusive_area .promotContent img {
      width: 1000px;
    }

    body {
      font-family: "Microsoft YaHei", Arial, Verdana, SimSun, SimHei, STHeiti,
      Helvetica, sans-serif !important;
    }

    #MemberExclusive_area p,
    #MemberExclusive_area h2 {
      margin: 0;
      padding: 0;
    }

    #MemberExclusive_area .promotContent {
      /*color: rgb(245, 245, 245);*/
      width: 1000px;
      text-align: left;
      margin: 0 auto;
      font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif, "宋体";
    }

    #MemberExclusive_area .promotContent .top_title {
      font-size: 20px;
      margin: 5px 0;
    }

    #MemberExclusive_area .promotContent hr {
      height: 1px;
      background-color: rgb(250, 220, 75);
      border: 0;
    }

    #MemberExclusive_area .promotContent .con_title {
      display: inline-block;
      padding: 10px 25px;
      background: #4d90fb;
      border-radius: 5px;
      box-shadow: 0 2px 1px #6b8cbf;
      color: #eff8f8;
      font-size: 19px;
      margin-top: 15px;
      margin-bottom: 5px;
      /*color: rgb(250, 220, 75);*/
    }

    #MemberExclusive_area .promotContent p {
      font-size: 16px;
      line-height: 25px;
      /*color: rgb(235, 235, 235);*/
      text-align: justify;
    }

    #MemberExclusive_area .promotContent table {
      width: 100%;
      margin: 10px 0;
      border-spacing: 0;
      border-collapse: collapse;
      /*color: rgb(235, 235, 235);*/
    }

    #MemberExclusive_area .promotContent table td {
      /*border: 1px solid rgb(235, 235, 235);*/
      border: 1px solid rgb(0, 0, 0);
      text-align: center;
      padding: 8px 0;
      font-size: 16px;
      vertical-align: middle;
    }
  }
</style>
