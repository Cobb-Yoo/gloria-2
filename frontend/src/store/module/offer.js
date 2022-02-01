const offer = {
  state: {
    offer: [],
  },
  mutations: {
    setStateOffer(state, payload) {
      state.offer.push(payload);
    },
  },
  actions: {
    setOffer({ commit, state }, payload) {
      const data = {
        id: state.offer.length,
        name: payload,
      };

      commit("setStateOffer", data);
    },
  },
  getters: {
    getOffer: (state) => {
      return state.offer;
    },
  },
};

export default offer;
