<template>
  <div class="maincontainer">
    <div class="main">
      <div class="content">
        <div style="width: 1200px; margin: 0 auto;">
          <div style="padding: 20px 54px;">
       

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="daili"><img
                src="/static/pjyl/img/youhui/dailiT.png"/></a>
              <div class="Content_box" style="display: none;" id="img_daili">
                <img src="/static/pjyl/img/youhui/dailiC.png" alt="">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="niuniu"><img
                src="/static/pjyl/img/youhui/niuniuT.png"/></a>
              <div class="Content_box" style="display: none;" id="img_niuniu">
                <img src="/static/pjyl/img/youhui/niuniuC.png" alt="">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="qkds"><img
                src="/static/pjyl/img/youhui/qipaiT.png"/></a>
              <div class="Content_box" style="display: none;" id="img_qkds">
                <img src="/static/pjyl/img/youhui/qipaiC.png" alt="">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="kscp"><img
                src="/static/pjyl/img/youhui/kuaisT.png"/></a>
              <div class="Content_box" style="display: none;" id="img_kscp">
                <img src="/static/pjyl/img/youhui/kuaisC.png" alt="">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="ysf"><img
                src="/static/pjyl/img/youhui/ysfT.png"/></a>
              <div class="Content_box" style="display: none;" id="img_ysf">
                <img src="/static/pjyl/img/youhui/ysfC.png" alt="">
              </div>
            </div>


            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="zfb"><img
                src="/static/pjyl/img/youhui/zfbT.png"/></a>
              <div class="Content_box" style="display: none;" id="img_zfb">
                <img src="/static/pjyl/img/youhui/zfbC.png" alt="">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="wxx"><img
                src="/static/pjyl/img/youhui/weiT.png"/></a>
              <div class="Content_box" style="display: none;" id="img_wxx">
                <img src="/static/pjyl/img/youhui/weiC.png" alt="">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="wxsm"><img
                src="/static/pjyl/img/youhui/weisT.png"/></a>
              <div class="Content_box" style="display: none;" id="img_wxsm">
                <img src="/static/pjyl/img/youhui/weisC.png" alt="">
              </div>
            </div>

            <div style="margin-bottom: 10px;">
              <a class="menuHead" style="margin-bottom: 10px;" id="dns"><img
                src="/static/pjyl/img/youhui/dnsT.png"/></a>
              <div class="Content_box" style="display: none;" id="img_dns">
                <img src="/static/pjyl/img/youhui/dnsC.png" alt="">
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
      // this.refresh()
    },
    watch: {},
    components: {}
  }
</script>

<style lang="less" scoped>
  .maincontainer {
    padding-top: 60px;
    background:#c89752 url(/static/pjyl/img/pjyl/content_bg1.jpg) no-repeat;
    background-size:100%;
  }

  td {
    vertical-align: middle;
  }

  .promotContent {
    padding: 10px;
    color: #000;
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
    color: #000;
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
    margin-top: 12px;
    /*color: rgb(250,220,75);*/
  }

  #yh_pic a img {
    padding: 0 20px;
  }

</style>
