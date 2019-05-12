// import { state } from "fs";

const state = {
  navActive: localStorage.navAvtive || 0,
  registerShow: false,
 

    isLogin:false,
    showBox:false,

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
    // showRegister (state, bool) {
    //   state.registerShow = bool
    // },
    // 注册
    showBox(state,{showBox,isLogin}){
      state.showBox=showBox;
      state.isLogin=isLogin;
    }

  }
}

export default datas
