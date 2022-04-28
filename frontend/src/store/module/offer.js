const offer = {
  state: {
    offer: [],
    offering: [],
  },
  mutations: {
    setStateOffer(state, payload) {
      state.offer.push(payload);
    },
    setStateOffering(state, payload) {
      state.offering.push(payload);
    },
  },
  actions: {
    setOffer({ commit, state }, payload) {
      const data = {
        id: state.offer.length,
        name: payload.name,
        quick: payload.quick,
      };

      commit("setStateOffer", data);
    },
    setOffering({ commit, state }, payload) {
      const data = {
        id: state.offering.length,
        name: payload.name,
        offering: payload.offering,
        type: payload.type,
        date: payload.date,
      };

      commit("setStateOffering", data);
    },
  },
  getters: {
    getOffer: (state) => {
      return state.offer;
    },
    getOffering: (state) => {
      return state.offering;
    },
  },
};

export default offer;
