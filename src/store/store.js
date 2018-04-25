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
  initial: [{
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
    if (localStorage.getItem("judge") != 'undefined') {
      state.locFlag = JSON.parse(localStorage.getItem("judge")).flag;
      view.flag ? view.flag : view.flag = state.locFlag;
    }
    if (state.visitedViews.some(v => v.name === view.name)) return;
    state.visitedViews.push({
      name: view.name,
      path: view.path,
      flag: view.flag,
      params: view.params,
      StatefullPath: view.StatefullPath
    })
    // 新添加部分，改变flag进行判断
    // state.locFlag=view.flag;
  },
  HANDLE_CLOSE(state, tag) {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.name === tag.name) {
        state.visitedViews.splice(i, 1)
        break
      }
    }
  },
  handleInputConfirm() {
    let inputValue = this.inputValue;
    if (inputValue) {
      this.visitedViews.push(inputValue);
    }
    this.inputVisible = false;
    this.inputValue = '';
  },
  DEL_VISITED_VIEWS: (state, view) => {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.name === view.name) {
        state.visitedViews.splice(i, 1)
        break
      }
    }
  },
  DEL_OTHERS_VIEWS: (state, view) => {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.name === view.name) {
        state.visitedViews = state.initial.concat(state.visitedViews.slice(i, i + 1));
        break
      }
    }
  },
  DEL_ALL_VIEWS: (state) => {
    state.visitedViews =  [{
      name: '工作台',
      path: '/',
      flag: '',
      params: '',
      StatefullPath: "/"
    }];
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
  },
  delVisitedViews({
    commit,
    state
  }, view) {
    return new Promise((resolve) => {
      commit('DEL_VISITED_VIEWS', view)
      resolve([...state.visitedViews])
    })
  },
  delOthersViews({
    commit,
    state
  }, view) {
    return new Promise((resolve) => {
      commit('DEL_OTHERS_VIEWS', view)
      resolve([...state.visitedViews])
    })
  },
  delAllViews({
    commit,
    state
  }) {
    return new Promise((resolve) => {
      commit('DEL_ALL_VIEWS')
      resolve([...state.visitedViews])
    })
  }
};
export default new Vuex.Store({
  state,
  mutations,
  actions
});
