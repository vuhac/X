<template>
  <div class="main">
    <div class="body">
       <div class="item">
        <a href="/static/fhcp/html/active/czjhb/index.html" target="_blank">
          <img src="/static/fhcp/img/youhui/redb.gif" style="width:978px;"/>
        </a>
      </div>
      <div class="item">
        <a href="/static/fhcp/html/active/jgj/index.html" target="_blank">
          <img src="/static/fhcp/img/youhui/jgj.png" style="width:978px;"/>
        </a>
      </div>
      <div class="item">
        <a href="/static/fhcp/html/active/opportunity/" target="_blank">
          <img src="/static/fhcp/img/youhui/zhuanpan.png" style="width:978px;"/>
        </a>
      </div>
      <div v-for="(item, i) in list" :key="i" class="item">
        <img :src="'/static/fhcp/img/youhui/' + item.img[0]" @click="item.unfold = !item.unfold"/>
        <img :src="'/static/fhcp/img/youhui/' + item.img[1]" v-show="item.unfold"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {img: ['huikuan.jpg', 'huikuan1.jpg'], unfold: false},
          {img: ['x_kscp.png', 'x_kscpc.jpg'], unfold: false},
          {img: ['qipai_jz.png', 'qipai_jzc.jpg'], unfold: false},
          {img: ['ky_ks.png', 'qipai_jmc.jpg'], unfold: false},
          {img: ['ttck.png', 'ttckc.jpg'], unfold: false},
          {img: ['81.png', '81c.jpg'], unfold: false},
          {img: ['84.png', '84c.jpg'], unfold: false},
          {img: ['yhk.png', 'yhkc.jpg'], unfold: false},
          {img: ['323.png', '323c.jpg'], unfold: false},
          {img: ['9.png', '9c.jpg'], unfold: false},
          {img: ['10.png', '10c.jpg'], unfold: false},
          {img: ['83.png', '83c.jpg'], unfold: false},
          {img: ['85.png', '85c.jpg'], unfold: false},
          {img: ['423.png', '423c.jpg'], unfold: false},
          {img: ['86.png', '86c.jpg'], unfold: false},
        ]
      }
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  .main {
    background: url(/static/fhcp/img/bg-article.png) #fff no-repeat center 96px;

    .body {
      width: 1000px;
      margin: 20px auto;
      border: 1px solid #ececec;
      border-radius: 4px;
      padding: 10px;
      box-sizing: border-box;

      .item {
        width: 100%;
        margin-top: 10px;

        &:first-child {
          margin-top: 0;
        }

        img {
          width: 100%;
        }
        a{
          display: inline-block;
          overflow: hidden;
        }
      }
    }
  }
</style>
