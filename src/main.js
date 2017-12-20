// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "babel-polyfill"
// import store from './store/store'
import qs from 'qs'
import http from '@/util/http' 
// import validation from '@/util/validation' 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
// import promise from 'es6-promise';
// promise.polyfill();

Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.use(http)

// 设置options 不进行发送option 验证  ------错误用法？
// Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})

// 定义全局 过滤器
// 日期过滤器
Vue.filter('dateFilter',function(value){
	if(!value) return ''
	console.log(value);
	// console.log(new Date(value).toLocaleString().replace(/\//g,'-').match(/\d{4}\-\d{2}\-\d{1,2}/)[0])
	return new Date(value).toLocaleString().replace(/\//g,'-').match(/\d{4}\-\d{2}\-\d{1,2}/)[0]
})