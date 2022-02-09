const expenditure = {
  state: {
    expenditure: [],
  },
  mutations: {
    setStateExpenditure(state, payload) {
      state.expenditure.push(payload);
    },
  },
  actions: {
    setExpenditure({ commit, state }, payload) {
      const data = {
        id: state.expenditure.length,
        name: payload,
      };

      commit("setStateExpenditure", data);
    },
  },
  getters: {
    getExpenditure: (state) => {
      return state.expenditure;
    },
  },
};

export default expenditure;
