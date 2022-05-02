import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import saintStore from "../store/module/saint";
import offerStore from "../store/module/offer";
import expenditureStore from "../store/module/expenditure";
import positionStore from "../store/module/position";
import regionStore from "../store/module/region";
import teamStore from "../store/module/team";
import signStore from "../store/module/sign";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    saintStore,
    expenditureStore,
    offerStore,
    regionStore,
    positionStore,
    teamStore,
    signStore,
  },
});
