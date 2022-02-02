const saintStore = {
  state: {
    saint: [],
  },
  mutations: {
    setStateSaint(state, payload) {
      state.saint.push(payload);
    },
  },
  actions: {
    setSaint({ commit, state }, payload) {
      const data = {
        id: state.saint.length,
        name: payload.name,
        gender: payload.gender,
        position: payload.position,
        region: payload.region,
        age: payload.age,
      };

      commit("setStateSaint", data);
    },
  },
  getters: {
    getSaint: (state) => {
      return state.saint;
    },
  },
};

export default saintStore;
