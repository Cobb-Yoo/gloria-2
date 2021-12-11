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
    membersOfferingList: null,

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

    id: 0,
  },
  mutations: {
    //테스트를 위한 초기 메서드
    setStateSaintList(state, payload) {
      state.saintList.push(payload);
    },

    //테스트를 위한 초기 메서드
    setStateMembersOfferingList() {},

    //테스트를 위한 초기 메서드
    setStateOfferingList(state, payload) {
      const data = {
        id: state.offeringList.length,
        name: payload,
      };
      state.offeringList.push(data);
      console.log(state.offeringList);
    },
  },
  actions: {
    //테스트 성도 추가 메서드
    //나중에는 교회 id까지 받아야함...
    setSaintList({ commit, state }, payload) {
      state.id = state.id + 1;

      const data = {
        id: state.id,
        name: payload.name,
        type: payload.type,
        offering: payload.offering,
        date: payload.date,
      };

      console.log(payload);

      commit("setStateSaintList", data);
    },
    setMembersOfferingList({ commit }, payload) {
      commit("setStateMembersOfferingList", payload);
    },
    setOfferingList({ commit }, payload) {
      commit("setStateOfferingList", payload);
    },
  },
  getters: {
    getSaintList: (state) => {
      return state.saintList;
    },
    getOfferingList: (state) => {
      return state.offeringList;
    },
  },
  modules: {},
});
