<template>
  <div class="maincontainer" style="background:#f8f8f8;">
    <div class="main">
      <div class="content">
        <div style="width: 1000px; margin: 0 auto;">
          <div>


            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="redb" href="/static/zyyl/html/active/czjhb/index.html" target="_blank"><img
                src="/static/zyyl/img/youhui/redb.gif"/></a>
              <div class="Content_box" style="display: none;" id="img_redb">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="jgj" href="/static/zyyl/html/active/jgj/index.html" target="_blank"><img
                src="/static/zyyl/img/youhui/jgj.png"/></a>
              <div class="Content_box" style="display: none;" id="img_jgj">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="zhuanpan" href="/static/zyyl/html/active/opportunity/index.html" target="_blank"><img
                src="/static/zyyl/img/youhui/zhuanpan.png"/></a>
              <div class="Content_box" style="display: none;" id="img_zhuanpan">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="dmw"><img
                src="/static/zyyl/img/youhui/dmw.png"/></a>
              <div class="Content_box" style="display: none;" id="img_dmw">
                <img src="/static/zyyl/img/youhui/dmwc.png" alt="">
              </div>
            </div>


             <div style="margin-bottom: 10px;">
            <a class="menuHead" style="margin-bottom: 10px;" id="daili"><img
              src="/static/zyyl/img/youhui/huikui.png"/></a>
            <div class="Content_box" style="display: none;" id="img_daili">
              <img src="/static/zyyl/img/youhui/huikuic.png" alt="">
            </div>
          </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="xhy"><img
                src="/static/zyyl/img/youhui/yhk.png"/></a>
              <div class="Content_box" style="display: none;" id="img_xhy">
                <img src="/static/zyyl/img/youhui/yhkc.png" alt="">
              </div>
            </div>

            <!-- <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="niuniu"><img
                src="/static/zyyl/img/youhui/niuniu.png"/></a>
              <div class="Content_box" style="display: none;" id="img_niuniu">
                <img src="/static/zyyl/img/youhui/niuniuc.png" alt="">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="qkds"><img
                src="/static/zyyl/img/youhui/qkds.png"/></a>
              <div class="Content_box" style="display: none;" id="img_qkds">
                <img src="/static/zyyl/img/youhui/qkdsc.png" alt="">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="kscp"><img
                src="/static/zyyl/img/youhui/kscp.png"/></a>
              <div class="Content_box" style="display: none;" id="img_kscp">
                <img src="/static/zyyl/img/youhui/kscpc.png" alt="">
              </div>
            </div> -->

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="ysf"><img
                src="/static/zyyl/img/youhui/ysf.png"/></a>
              <div class="Content_box" style="display: none;" id="img_ysf">
                <img src="/static/zyyl/img/youhui/ysfc.png" alt="">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="zfb"><img
                src="/static/zyyl/img/youhui/zfb.png"/></a>
              <div class="Content_box" style="display: none;" id="img_zfb">
                <img src="/static/zyyl/img/youhui/zfbc.png" alt="">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="wxx"><img
                src="/static/zyyl/img/youhui/wxx.png"/></a>
              <div class="Content_box" style="display: none;" id="img_wxx">
                <img src="/static/zyyl/img/youhui/wxxc.png" alt="">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="wxsm"><img
                src="/static/zyyl/img/youhui/wxsm.png"/></a>
              <div class="Content_box" style="display: none;" id="img_wxsm">
                <img src="/static/zyyl/img/youhui/wxsmc.png" alt="">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="dns"><img
                src="/static/zyyl/img/youhui/dns.png"/></a>
              <div class="Content_box" style="display: none;" id="img_dns">
                <img src="/static/zyyl/img/youhui/dnsc.png" alt="">
              </div>
            </div>

           

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'

  export default {
    data () {
      return {
        dateTime:0
      }
    },
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

  body {
    background: #f8f8f8;
  }

  td {
    vertical-align: middle;
  }

  .promotContent {
    padding: 10px;
    color: rgb(245, 245, 245);
  }

  .promotContent table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
    margin: 10px 0;
  }

  .promotContent table td {
    border: 1px solid #ccc;
    text-align: center;
    padding: 8px 0;
    font-size: 16px;
  }

  .promotContent p {
    font-size: 16px;
    line-height: 25px;
    color: rgb(235, 235, 235);
    text-align: justify;
  }

  .promotContent hr {
    height: 1px;
    background-color: rgb(250, 220, 75);
    border: 0;
  }

  .promotContent .top_title {
    font-size: 20px;
    font-weight: bold;
    margin: 5px 0;
  }

  .promotContent .con_title {
    font-size: 19px;
    line-height: 1.5;
    margin-top: 12px;
    color: rgb(250, 220, 75);
  }

  #yh_pic a img {
    padding: 0 20px;
  }

</style>
