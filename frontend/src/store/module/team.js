const team = {
  state: {
    team: [],
  },
  mutations: {
    setStateTeam(state, payload) {
      state.team.push(payload);
    },
  },
  actions: {
    setTeam({ commit, state }, payload) {
      const data = {
        id: state.team.length,
        name: payload,
      };

      commit("setStateTeam", data);
    },
  },
  getters: {
    getTeam: (state) => {
      return state.team;
    },
  },
};

export default team;
