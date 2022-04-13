const sign = {
  state: {
    info: {},
  },
  mutations: {
    setStateInfo(state, payload) {
      state.info = payload;
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
  },
};

export default sign;
