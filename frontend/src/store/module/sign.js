const sign = {
  state: {
    info: {},
    logined: false,
  },
  mutations: {
    setStateInfo(state, payload) {
      state.info = payload;
      state.logined = true;
    },
  },
  actions: {
    setInfo({ commit, state }, payload) {
      console.log("hello");
      console.log(state.info);
      commit("setStateInfo", payload);
    },
  },
  getters: {
    getInfo: (state) => {
      return state.info;
    },
    getLoginState: (state) => {
      return state.logined;
    },
  },
};

export default sign;
