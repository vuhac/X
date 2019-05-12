const state = {

  curr: localStorage.navCurr || 0
}

const datas = {
  state,
  mutations: {
    setCurr (state, num) {
      state.curr = num
      localStorage.setItem('navCurr', num)

    }
  }
}

export default datas
