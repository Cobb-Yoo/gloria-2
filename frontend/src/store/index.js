import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import saintStore from "../store/module/saint";
import offerDataStore from "./module/offerData";
import offerCateStore from "../store/module/offerCate";
import expenditureStore from "../store/module/expenditure";
import positionStore from "../store/module/position";
import regionStore from "../store/module/region";
import teamStore from "../store/module/team";
import signStore from "../store/module/sign";
import invitationStore from "../store/module/invitation";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    saintStore,
    expenditureStore,
    offerDataStore,
    offerCateStore,
    regionStore,
    positionStore,
    teamStore,
    signStore,
    invitationStore,
  },
});
