<template>
  <div class="write">
    <div class="header">
       投诉建议
    </div>
    <div class="content">

      <div class="row">
        <label>标题：</label>
        <input type="text" v-model="title">
      </div>
      <div class="bar">
        <label>内容：</label>
        <textarea v-model="content"></textarea>
      </div>
    </div>

    <div class="submit" @click="messageSubmit">确认提交</div>

    <div class="toast" v-if="toastShow" :style="{top:toastNum+'px'}">
      {{toastText}}
    </div>
    <div class="remark">备注：站内信是为方便会员的服务功能，类似于邮箱，主要由收件箱、发件箱组成，但该功能仅对网站的注册会员开放。 会员可对管理员发送站内信息得到帮助
    </div>
  </div>
</template>

<script>
  // import store from "@/vuex/store";
  export default {
    data () {
      return {
        title: '',
        content: '',
        toastShow: false,
        toastNum: 86,

        toastText: ''
      }
    },
    methods: {
      messageSubmit () {
        if (!this.title) {
          this.toastText = '请输入标题'
          this.toastNum = 86
          this.toastShow = true
          return false
        }

        if (!this.content) {
          this.toastText = '请输入内容'
          this.toastNum = 145
          this.toastShow = true
          return false
        }
        this.toastShow = false
        this.$http
          .post(`${this.$HOST_NAME}/member/messageSubmit`, {
            title: this.title,
            content: this.content
          })
          .then(res => {
            if (res.code == 200) {
              this.$success(res.data)
              this.title = ''
              this.content = ''
            } else {
              this.$error(res.message)
            }
          })
      }
    },
    mounted () {
      // console.log(this);
    }
    //   store
  }
</script>

<style lang="less" scoped>
  .write {
    padding: 0 14px;
    position: relative;
    .header {
      height: 66px;
      border-bottom: 1px solid #f3f3f3;
      font-size: 1.8em;
      padding-left: 10px;
      color: #696969;
      line-height: 85px;
      font-weight: 400;
    }
    .content {
      border-bottom: 1px solid #f3f3f3;
      padding: 20px 0;
      label {
        display: inline-block;
        width: 140px;
        text-align: right;
        font-size: 15px;
        font-family: "Microsoft YaHei";
      }
      .row {
        input {
          height: 36px;
          font-size: 16px;
          background: #f5f5f5;
          border: 0 solid #f5f5f5;
          border-radius: 10px;
          // padding: 0 16px;
          text-align: left;
          text-indent: 1em;
          -webkit-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
          -moz-box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
          box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06);
          color: #666;

          &:not(.other) {
            width: 240px;
            height: 36px;
            background: #f9f9f9;
          }
        }
        input:focus {
          outline: none !important;
          border: 1px solid rgba(254, 134, 93, 0.6);
          box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06),
          0 1px 10px 5px rgba(254, 134, 93, 0.14);
        }
      }
      .bar {
        margin-top: 20px;
        textarea {
          height: 200px;
          width: 400px;
          border: 0 solid #f5f5f5;
          text-indent: 1em;
          border-radius: 10px;
          vertical-align: top;
          background: #f9f9f9;
          outline: none;
          resize: none;
          padding-top: 1em;
          line-height: 16px;
        }
        textarea:focus {
          outline: none !important;
          border: 1px solid rgba(254, 134, 93, 0.6);
          box-shadow: inset 0 1px 10px 0 RGBA(0, 0, 0, 0.06),
          0 1px 10px 5px rgba(254, 134, 93, 0.14);
        }
      }
    }
    .submit {
      margin-top: 26px;
      margin-left: 155px;
      height: 40px;
      width: 130px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      font-size: 16px;
      border-radius: 8px;
      background: linear-gradient(180deg, #ff3492, #ff1e4f);
      cursor: pointer;
    }
    .toast {
      width: 200px;
      height: 30px;
      line-height: 30px;
      background: #ff9900;
      color: #fff;
      font-size: 14px;
      font-weight: 200;
      position: absolute;
      right: 420px;
      top: 30px;
      border-radius: 5px;
      z-index: 99;
      text-indent: 1em;
    }
    .toast::after {
      content: "";
      width: 0;
      height: 0;
      border-width: 4px 8px 4px 0px;
      border-style: solid;
      border-color: transparent #f90 transparent transparent;
      display: block;
      position: absolute;
      top: 10px;
      left: -8px;
    }
    .remark {
      margin-top: 20px;
      font-size: 13px;
      padding: 10px;
    }
  }
</style>
