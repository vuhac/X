const state = {
  navActive: localStorage.navAvtive || 0,
  registerShow: false,
  loginShow:false,
  dianziData:"",
  publicImg:{}
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
      console.log(bool)
      state.registerShow = bool
    },
    showBanner(state,data){
      console.log(data)
      console.log(state.publicImg)
      state.publicImg = data
    },
    showLogin(state,bool){
      state.loginShow = bool
    },
    changedian(state,data){
      state.dianziData =data
    }
  }
}

export default datas
