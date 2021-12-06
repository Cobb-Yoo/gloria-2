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
    memberList: [],

    /*
      헌금id
      헌금명
    */
    //헌금목록
    offeringList: null,

    id: 0,
  },
  mutations: {
    //테스트를 위한 초기 메서드
    setStateMemberList(state, payload) {
      console.log(payload);
      state.memberList.push(payload);
    },

    //테스트를 위한 초기 메서드
    setStateMembersOfferingList() {},

    //테스트를 위한 초기 메서드
    setStateOfferingList() {},
  },
  actions: {
    //테스트 성도 추가 메서드
    //나중에는 교회 id까지 받아야함...
    setMemberList({ commit, state }, payload) {
      state.id = state.id + 1;

      let data = {
        id: state.id,
        name: payload.name,
        offering: payload.offering,
      };

      commit("setStateMemberList", data);
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
