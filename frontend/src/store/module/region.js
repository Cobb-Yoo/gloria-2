const region = {
  state: {
    region: [],
  },
  mutations: {
    setStateRegion(state, payload) {
      state.region.push(payload);
    },
  },
  actions: {
    setRegion({ commit, state }, payload) {
      const data = {
        id: state.region.length,
        name: payload,
      };

      commit("setStateRegion", data);
    },
  },
  getters: {
    getRegion: (state) => {
      return state.region;
    },
  },
};

export default region;
