<template>
  <div class="content">
    <div class="subPage-wrap">
      <div class="subPage-box">
        <div style="" id="ActivityContent">
          <img alt="" src="/static/dalao/img/youhui/redb.gif"
               onclick="window.open('/static/dalao/html/active/czjhb/index.html','_blank')">
          <img alt="" src="/static/dalao/img/youhui/qipai_jmc.jpg" style="display: none;width: 0;height: 0;">  <!-- 占位置 -->

          <img alt="" src="/static/dalao/img/youhui/jgj.png"
               onclick="window.open('/static/dalao/html/active/jgj/index.html','_blank')">

          <img alt="" src="/static/dalao/img/youhui/qipai_jmc.jpg" style="display: none;width: 0;height: 0;"> <!-- 占位置 -->


          <!--<img alt="" src="/static/dalao/img/youhui/mayday.png">
          <img alt="" src="/static/dalao/img/youhui/maydayc.png" style="display: none;">-->


          <img alt="" src="/static/dalao/img/youhui/tjhc.png">
          <img alt="" src="/static/dalao/img/youhui/tjhcc.png" style="display: none;">


          <img alt="" src="/static/dalao/img/youhui/dmw.png">
          <img alt="" src="/static/dalao/img/youhui/dmwc.png" style="display: none;">

          <!--<img alt="" src="/static/dalao/img/youhui/zhuanpan.png"
               onclick="window.open('/static/dalao/html/active/opportunity/','_blank')">
          <img alt="" src="/static/dalao/img/youhui/qipai_jmc.jpg" style="display: none;width: 0;height: 0;"> &lt;!&ndash; 占位置 &ndash;&gt;-->

          <img alt="" src="/static/dalao/img/youhui/ky_hl.png">
          <img alt="" src="/static/dalao/img/youhui/ky_hlc.png" style="display: none;">


          <img alt="" src="/static/dalao/img/youhui/ky_ks.png">
          <img alt="" src="/static/dalao/img/youhui/ky_ksc.png" style="display: none;">

          <img alt="" src="/static/dalao/img/youhui/wuye.png">
          <img alt="" src="/static/dalao/img/youhui/wuyec.png" style="display: none;">


          <img alt="" src="/static/dalao/img/youhui/xhy.png">
          <img alt="" src="/static/dalao/img/youhui/xhyc.png" style="display: none;">

          <img alt="" src="/static/dalao/img/youhui/smcj.png">
          <img alt="" src="/static/dalao/img/youhui/smcjc.png" style="display: none;">

          <img alt="" src="/static/dalao/img/youhui/ysf.png">
          <img alt="" src="/static/dalao/img/youhui/ysfc.png" style="display: none;">

          <img alt="" src="/static/dalao/img/youhui/guanzhu.png">
          <img alt="" src="/static/dalao/img/youhui/guanzhuc.png" style="display: none;">

          <img alt="" src="/static/dalao/img/youhui/srlj.png">
          <img alt="" src="/static/dalao/img/youhui/srljc.png" style="display: none;">

          <img alt="" src="/static/dalao/img/youhui/dns.png">
          <img alt="" src="/static/dalao/img/youhui/dnsc.png" style="display: none;">

          <img alt="" src="/static/dalao/img/youhui/wxsm.png">
          <img alt="" src="/static/dalao/img/youhui/wxsmc.png" style="display: none;">

          <img alt="" src="/static/dalao/img/youhui/wxx.png">
          <img alt="" src="/static/dalao/img/youhui/wxxc.png" style="display: none;">

          <img alt="" src="/static/dalao/img/youhui/yhk.png">
          <img alt="" src="/static/dalao/img/youhui/yhkc.png" style="display: none;">

          <img alt="" src="/static/dalao/img/youhui/zfb.png">
          <img alt="" src="/static/dalao/img/youhui/zfbc.png" style="display: none;">


          <img alt="" src="/static/dalao/img/youhui/fw.png">
          <img alt="" src="/static/dalao/img/youhui/fwc.png" style="display: none;">

          <img alt="" src="/static/dalao/img/youhui/jdys.png">
          <img alt="" src="/static/dalao/img/youhui/jdysc.png" style="display: none;">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'

  export default {
    data () {
      return {}
    },
    methods: {},
    created: function () {},
    mounted () {
      $('#ActivityContent img:odd').hide()
      $('#ActivityContent img:even').each(function (index, obj) {
        $(obj).attr('id', 'img' + index)
        $(obj).click(function () {
          $('#ActivityContent img:odd').not('[src=\'' + $(this).next().attr('src') + '\']').hide()
          var inline = $(this).next().css('display')
          if (inline != 'none') {
            $(this).next().hide()
          } else {
            $(this).next().show()
          }
          //window.location.hash = "img" + index;
        })
      })
    },
    watch: {},
    components: {}
  }
</script>

<style lang="less" scoped>
  .content {
    background: #000 url(/static/dalao/img/bg_promotions.jpg) center 0 no-repeat;
    background-size: 100% auto;

    .subPage-wrap {
      width: 1000px;
      position: relative;
      margin: 0 auto;

      .subPage-box {
        width: 960px;
        margin: 0 auto;

        img {
          vertical-align: middle;
          margin-top: 12px;
        }

        img:nth-child(odd) {
          cursor: pointer;
        }
      }
    }
  }

  body {
    background: #000;
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
