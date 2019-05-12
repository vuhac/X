<template>
  <div class="main">
    <div class="body">
      <div class="item">
        <a href="/static/500wcp/html/active/czjhb/index.html" target="_blank">
          <img src="/static/500wcp/img/youhui/redb.gif"/>
        </a>
      </div>
      <div class="item">
        <a href="/static/500wcp/html/active/jgj/index.html" target="_blank">
          <img src="/static/500wcp/img/youhui/jgj.png"/>
        </a>
      </div>
      <div class="item">
        <a href="/static/500wcp/html/active/opportunity/index.html" target="_blank">
          <img src="/static/500wcp/img/youhui/zhuanpan.png"/>
        </a>
      </div>
      <div v-for="(item, i) in list" :key="i" class="item">
        <img :src="'/static/500wcp/img/youhui/' + item.img[0]" @click="item.unfold = !item.unfold"/>
        <img :src="'/static/500wcp/img/youhui/' + item.img[1]" v-show="item.unfold"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {img: ['kscp.png', 'kscpc.jpg'], unfold: false},
          {img: ['ky_hl.png', 'ky_hlc.jpg'], unfold: false},
          {img: ['ky_ks.png', 'ky_ksc.jpg'], unfold: false},
          {img: ['xhy.png', 'xhyc.jpg'], unfold: false},
          {img: ['smcj.png', 'smcjc.jpg'], unfold: false},
          {img: ['yhk.png', 'yhkc.jpg'], unfold: false},
          {img: ['ysf.png', 'ysfc.jpg'], unfold: false},
          {img: ['wxx.png', 'wxxc.jpg'], unfold: false},
          {img: ['zfb.png', 'zfbc.jpg'], unfold: false},
          {img: ['wxsm.png', 'wxsmc.jpg'], unfold: false},
          {img: ['srlj.png', 'srljc.jpg'], unfold: false},
          {img: ['fw.png', 'fwc.jpg'], unfold: false},
          {img: ['jdys.png', 'jdysc.jpg'], unfold: false},
        ]
      }
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  .main {
    background: url(/static/500wcp/img/bg-article.png) #fff no-repeat center 96px;

    .body {
      width: 1000px;
      margin: 20px auto;
      border: 1px solid #ececec;
      border-radius: 4px;
      padding: 10px;
      box-sizing: border-box;

      .item {
        width: 100%;

        &:first-child {
          margin-top: 0;
        }

        margin-top: 20px;

        img {
          width: 100%;
        }
      }
    }
  }
</style>
