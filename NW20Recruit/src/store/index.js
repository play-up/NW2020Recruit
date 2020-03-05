import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //首页状态
    starryCurrent: -1,
    chooseNum:0,
    // submit组件是否展示
    isSubmitShow:false,
    //postcard是否展示
    isPostShow:false,
    // 信封是否出现
    isLetterShow:false,
    isFilterShow:false,
    //是否加载loading
    isLoading: true,
    isRoll:0,//信封是否翻转
    isBlingShow:false,
    // 是否经过报名表
    isPass:false,
    // 后台返回的状态值
    status:null
  },
  mutations: {
    starryNext(state) { //首页进入下一个状态
      state.starryCurrent++;
    },
    updateLoading(state,payload) { //更新loading状态
      state.isLoading = payload.isLoading
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
    },
    isFilterShow(state,val){
      state.isFilterShow=val;
    },
    isRoll(state,val){
      state.isRoll=val
    },
    isBlingShow(state,val){
      state.isBlingShow=val
    },
    isPass(state,val){
      state.isPass=val;
    },
    status(state,val){
      state.status=val
    }
  }
});
