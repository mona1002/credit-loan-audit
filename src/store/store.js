import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
let state = {
  visitedViews: [],
  locFlag:null,
  judge: {
    flag: ''
  },
};
let mutations = {
  ADD_VISITED_VIEWS: (state, view) => {
    console.log("store.muattions")
    // console.log(view.flag)
    state.locFlag=JSON.parse(localStorage.getItem("judge")).flag;
    view.flag?view.flag:view.flag=state.locFlag;
   console.log(view.flag)
    if (state.visitedViews.some(v => v.name === view.name)) return
    state.visitedViews.push({
      name: view.name,
      path: view.path,
      flag:view.flag
      // flag:function(){
      //   return view.flag?view.flag:'';
      //   }
      // title: view.meta.title || 'no-name'
    })
    console.log(state.visitedViews)

    // if (!view.meta.noCache) {
    // state.cachedViews.push(view.name)
    // }
    // 新添加部分，改变flag进行判断
    // state.locFlag=view.flag;
  },
  HANDLE_CLOSE(state,tag) {
    state.visitedViews.splice(state.visitedViews.indexOf(tag), 1);
   history.go(-1)
  },
  handleInputConfirm() {
    let inputValue = this.inputValue;
    if (inputValue) {
      this.visitedViews.push(inputValue);
    }
    this.inputVisible = false;
    this.inputValue = '';
  }
};
let actions = {
  addVisitedViews({
    commit
  }, view) {
    commit('ADD_VISITED_VIEWS', view)
    console.log(commit,view)
  },
  handleClose({
    commit
  }, view) {
    commit('HANDLE_CLOSE', view)
  }
};
let getters = {

}

// export default Tags;
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
