import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let state = {
  First:{
    LogIn:[],
    // FirstWorkbench:[],
    Workbench:"6789",
    TaskinWaitting:[],
    ApplacationInf:[],
  },
  Final:{

  },
  Anit:{

  }

};
let mutations = {
workB(state,payload){
  state.First.Workbench=payload;
}
};

let getters = {

};
export default new Vuex.Store({
  state,
  mutations,
  getters
});
