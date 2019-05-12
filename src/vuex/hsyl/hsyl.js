const state = {
  navActive: localStorage.navAvtive || 0,
  registerShow: false
}

const datas = {
  namespaced: true,
  state,
  mutations: {
    setNav (state, num) {
      state.navActive = num
      localStorage.setItem('navAvtive', num)
    },
    //弹出注册框
    showRegister (state, bool) {
      state.registerShow = bool
    }
  }
}

export default datas
