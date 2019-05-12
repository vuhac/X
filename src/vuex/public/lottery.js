const state = {
  sideReady: false,
  childNeedMess: {
    title: '',//两面长龙用到
    issue: '',
    id: '',//所有彩票都用到
    total: '',
    plays: '',
    code: '',//两面长龙用到
    series: ''//类型两面长龙用到
  },
  // 历史数据共享
  shareData: {},
  //开奖走势
  childNeed: '',
  fetchTime: ''
}

const datas = {
  namespaced: true,
  state,
  mutations: {
    // 定位当前在哪个彩票位置,彩票页传
    resetChildMsg (state, obj) {
      state.childNeedMess.title = obj.title
      state.childNeedMess.id = obj.id
    },
    // 定位彩票code，series
    resetSeriesMsg (state, obj) {
      state.childNeedMess.code = obj.code
      state.childNeedMess.series = obj.series
      state.childNeedMess.id = obj.id
      state.childNeedMess.title = obj.title
      // console.log(state.childNeedMess)
    },
    //导航请求完毕
    setReady (state, bool) {
      state.sideReady = true
    },
    //重置历史记录
    resetShareData (state, obj) {
      state.shareData = obj
      // console.log(state.shareData)
    },
    //重置走势图
    resetTrend (state, obj) {
      state.childNeed = obj
    },
    //重置走势图
    fetchBetRecord(state, time) {
      state.fetchTime = time
    }
  },
  actions: {}
}

export default datas
