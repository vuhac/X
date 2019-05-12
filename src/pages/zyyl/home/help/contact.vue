<template>

  <div class="contact">

    <div class="banner"></div>


    <div class="content" v-html="articleData">
      <!-- <h2>联系我们</h2>

      <p>客拉客的客服中心全年无休，提供1周7天、每天24小时的优质服务。</p>
      <p>如果您对本网站的使用有任何疑问，可以透过下列任一方式与客服人员联系，享受最实时的服务</p>
      <p>点击"在线客服"链接，即可进入在线客服系统与客服人员联系。</p>
      <p>您亦可使用Email与客服人员取得联系</p>
      <p>官方邮箱：yibo22k@163.com</p> -->
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        articleData:""
      }
    },
    methods:{
        // 2019.04.25新文章接口
        // 文章
        async getArticle(title){
          let res=await this.$http.post(`${this.$HOST_NAME}/site/newNotice`,{
            type:"article",
            client_type:"PC",
            title
          })
          let articleData="";
          if(res&&res.code==200){
            // 请求成功
            // 存入本地存储，在对应的页面获取数据即可
            if(res.data.data){
              // 存在返回值为空的情况
              // articleData=JSON.stringify(res.data.data[0].description);
              // localStorage.setItem("articleData",articleData);
              this.articleData=res.data.data[0].description
            }
          }

        },
    },
    mounted(){
      // this.articleData=localStorage.getItem("articleData");
      // console.log(this.articleData)
    },
    created(){
        this.getArticle("联系我们")
    }
  }
</script>

<style lang="less" scoped>
  .contact {
    .banner {
      width: 100%;
      height: 200px;
      background: url("/static/zyyl/img/thirdparty/lxwm.jpg") no-repeat center top;
    }

    .content {
      width: 1200px;
      margin: 30px auto;
      border: 1px solid #b48c68;
      background: #f1f1f1;
      padding: 15px;

      h2 {
        font-size: 20px;
        font-family: 微软雅黑;
        color: #000;
        margin-bottom: 5px;
      }

      p {
        font-family: 微软雅黑;
        color: #000;
        font-size: 16px;
        line-height: 22px;
      }
    }


    /deep/ table {
        border-spacing: 0;
        border-collapse: collapse;
        border: 1px solid grey;

        tbody {
          display: table-row-group;
          vertical-align: middle;
          border-color: inherit;

          td {
            border: 1px solid #000;
            font-size: 14px;
            text-align: center;
            color: #000;
            line-height: 25px;
          }
        }
      }

  }
</style>
