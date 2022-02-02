const offer = {
  state: {
    offer: [],
    offering: [],
    quick_offering: [],
  },
  mutations: {
    setStateOffer(state, payload) {
      state.offer.push(payload);
    },
    setStateOffering(state, payload) {
      state.offering.push(payload);
    },
    setStateQuickOffering(state, payload) {
      state.quick_offering.push(payload);
    },
  },
  actions: {
    setOffer({ commit, state }, payload) {
      const data = {
        id: state.offer.length,
        name: payload.name,
        quick: payload.quick,
      };

      console.log(data);

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

      console.log(data);

      commit("setStateOffering", data);
    },
    setQuickOffering({ commit, state }, payload) {
      const data = {
        id: state.quick_offering.length,
        name: payload.name,
        quick: payload.quick,
      };

      console.log(this.quick_offering);

      commit("setStateQuickOffering", data);
    },
  },
  getters: {
    getOffer: (state) => {
      return state.offer;
    },
    getOffering: (state) => {
      return state.offering;
    },
    getQuickOffering: (state) => {
      return state.offering.find((offering) => offering.quick == true);
    },
  },
};

export default offer;
