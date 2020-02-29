import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    starryCurrent: 0,
    chooseNum:0
  },
  mutations: {
    starryNext(state) {
      state.starryCurrent++;
    },
    chooseNum(state,num){
      state.chooseNum = num;
    }
  }
});
