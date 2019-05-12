const state = {
  //当前选中保存
  navActive: '首页'
}

const datas = {
  namespaced: true,
  state,
  mutations: {
    setHomeNav (state, datas) {
      state.navActive = datas
    }
  },
  actions: {}
}

export default datas
