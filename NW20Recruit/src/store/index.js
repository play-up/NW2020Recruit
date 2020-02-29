import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    starryCurrent: 0,
    chooseNum:0,
    // submit组件是否展示
    isSubmitShow:true,
    //postcard是否展示
    isPostShow:false,
    // 信封是否出现
    isLetterShow:false
  },
  mutations: {
    starryNext(state) {
      state.starryCurrent++;
    },
    chooseNum(state,num){
      state.chooseNum = num;
    },
    isSubmitShow(state,val){
      state.isSubmitShow=val
    },
    isPostShow(state,val){
      state.isPostShow=val;
    },
    isLetterShow(state,val){
      state.isLetterShow=val
    }
  }
});
