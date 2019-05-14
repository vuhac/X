import UserService from '@/service/public/UserService.js'

function LotterySev () {
  //子页面分割线 ——————————————————————————————————————————————————————————————————————————————————————————
  //提交注单
  this.vpSubmit = async function (submitArr) {
    if (!localStorage.token) {
      this.$store.commit('alert/showLogin', true)
      return false
    }
    this.confirmbet=false
    let totalCount = JSON.parse(localStorage.totalCount)
    if (totalCount.mol == '角') {
      submitArr[0].money = String(submitArr[0].money / 10)
    } else if (totalCount.mol == '分') {
      submitArr[0].money = String(submitArr[0].money / 100)
    }
    submitArr[0].money = submitArr[0].money * totalCount.db

    let res = await Post.call(this, `${this.$HOST_NAME}/lottery/submit`, {
      lotteryId: this.$route.meta.id,
      issue: this.childNeedMess.issue,
      code: JSON.stringify(submitArr),
      rebate: this.rebate
    })
    if (res && res.code == 200) {
      this.confirmbet=true
      this.dNotify(res.data, 'success')
      this.resetAll()
      UserService.vpGetBasicInfo.call(this)
    } else {
      this.confirmbet=true
      this.dNotify(res.message, 'error')
    }
  }

  //网络请求Post
  function Post (url, data) {
    return this.$http.post('' + url, data)
  }

  //网络请求Get
  function Get (url, data) {
    return this.$http.get('' + url, data)
  }
}

export default new LotterySev
