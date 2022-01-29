import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /*
    id
      memberId
      이름
      금액
      헌금id
      헌금명
      날짜
    */
    //헌금목록
    saintsOfferingList: [],

    /*
      이름
    */
    //사용자목록
    saintList: [],

    /*
      헌금id
      헌금명
    */
    //헌금목록
    offeringList: [],

    expenRootList: [],
    expenLeafList: [],

    offer: [],

    /*
    cid
    type
    name
    pid
    */

    id: 0,
  },
  mutations: {
    //테스트를 위한 초기 메서드
    setStateOfferingList(state, payload) {
      state.offeringList.push(payload);
    },

    //테스트를 위한 초기 메서드
    setStateSaintsOfferingList(state, payload) {
      state.saintsOfferingList.push(payload);
    },

    //테스트를 위한 초기 메서드
    setStateSaintList(state, payload) {
      state.saintList.push(payload);
    },

    setStateExpenRootList(state, payload) {
      state.expenRootList.push(payload);
    },

    setStateExpenLeafList(state, payload) {
      state.expenLeafList.push(payload);
    },

    setStateOffer(state, payload) {
      state.offer.push(payload);
    },
  },
  actions: {
    setSaintsOfferingList({ commit, state }, payload) {
      state.id = state.id + 1;

      const data = {
        id: state.id,
        name: payload.name,
        type: payload.type,
        offering: payload.offering,
        date: payload.date,
      };

      //console.log(payload);

      commit("setStateSaintsOfferingList", data);
    },
    setOfferingList({ commit, state }, payload) {
      const data = {
        id: state.offeringList.length,
        name: payload,
      };
      commit("setStateOfferingList", data);
    },
    setSaintList({ commit, state }, payload) {
      const data = {
        id: state.saintList.length,
        name: payload.name,
        gender: payload.gender,
        position: payload.position,
        region: payload.region,
        age: payload.age,
      };
      commit("setStateSaintList", data);
    },

    setExpenRoot({ commit, state }, payload) {
      const data = {
        id: state.expenRootList.length,
        name: payload,
      };
      commit("setStateExpenRootList", data);
    },

    setExpenLeaf({ commit, state }, payload) {
      const data = {
        id: state.expenLeafList.length,
        name: payload,
      };
      commit("setStateExpenLeafList", data);
    },

    setOffer({ commit, state }, payload) {
      console.log(payload);

      const data = {
        id: state.offer.length,
        type: payload.type,
        name: payload.name,
        pid: payload.pid,
      };

      commit("setStateOffer", data);
    },
  },
  getters: {
    getSaintsOfferingList: (state) => {
      //home에서 사용함
      return state.saintsOfferingList;
    },
    getOfferingList: (state) => {
      //manage/offering 에서 사용함

      return state.offeringList;
    },
    getSaintList: (state) => {
      //manage/saint 에서 사용함
      return state.saintList;
    },

    getExpenRootList: (state) => {
      return state.expenRootList;
    },

    getExpenLeafList: (state) => {
      return state.expenLeafList;
    },

    getOffer: (state) => {
      return state.offer;
    },
  },
  modules: {},
});
