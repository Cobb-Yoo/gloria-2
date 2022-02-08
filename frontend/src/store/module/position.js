const position = {
  state: {
    position: [],
  },
  mutations: {
    setStatePosition(state, payload) {
      state.position.push(payload);
    },
  },
  actions: {
    setPosition({ commit, state }, payload) {
      const data = {
        id: state.position.length,
        name: payload,
      };

      commit("setStatePosition", data);
    },
  },
  getters: {
    getPosition: (state) => {
      return state.position;
    },
  },
};

export default position;
