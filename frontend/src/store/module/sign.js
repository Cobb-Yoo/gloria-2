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
    clearStateInfo(state) {
      state.info = {};
      state.logined = false;
    },
  },
  actions: {
    setInfo({ commit }, payload) {
      commit("setStateInfo", payload);
    },
    clearInfo({ commit }) {
      commit("clearStateInfo");
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
