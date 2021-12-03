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
    memberList: null,

    /*
      헌금id
      헌금명
    */
    //헌금목록
    offeringList: null,
  },
  mutations: {
    //테스트를 위한 초기 메서드
    setStateMemberList({ state }, payload) {
      state.memberList += payload;
    },

    //테스트를 위한 초기 메서드
    setStateMembersOfferingList() {},

    //테스트를 위한 초기 메서드
    setStateOfferingList() {},
  },
  actions: {
    //테스트 성도 추가 메서드
    //나중에는 교회 id까지 받아야함...
    setMemberList({ commit }, payload) {
      commit("setStateMemberList", payload);
    },
    setMembersOfferingList({ commit }, payload) {
      commit("setStateMembersOfferingList", payload);
    },
    setOfferingList({ commit }, payload) {
      commit("setStateOfferingList", payload);
    },
  },
  getters: {
    getMemberList: (state) => {
      return state.memberList;
    },
  },
  modules: {},
});
