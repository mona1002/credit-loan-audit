import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
let state = {
  visitedViews: [{
    name: '工作台',
    path: '/',
    flag: '',
    params: '',
    StatefullPath: "/"
  }],
  locFlag: null,
  judge: {
    flag: ''
  },
};
let mutations = {
  ADD_VISITED_VIEWS: (state, view) => {
    state.locFlag = JSON.parse(localStorage.getItem("judge")).flag;
    view.flag ? view.flag : view.flag = state.locFlag;
    if (state.visitedViews.some(v => v.name === view.name)) return //v,currentValue
    state.visitedViews.push({
      name: view.name,
      path: view.path,
      flag: view.flag,
      params: view.params,
      StatefullPath: view.StatefullPath
      // title: view.meta.title || 'no-name'
    })
    // if (!view.meta.noCache) {
    // state.cachedViews.push(view.name)
    // }
    // 新添加部分，改变flag进行判断
    // state.locFlag=view.flag;
  },
  HANDLE_CLOSE(state, tag) {
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
  },
  handleClose({
    commit
  }, view) {
    commit('HANDLE_CLOSE', view)
  }
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
