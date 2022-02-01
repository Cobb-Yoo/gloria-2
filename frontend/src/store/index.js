import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import saintStore from "../store/module/saint";
import offerStore from "../store/module/offer";
import expenditureStore from "../store/module/expenditure";

export default new Vuex.Store({
  modules: {
    saintStore,
    expenditureStore,
    offerStore,
  },
});
