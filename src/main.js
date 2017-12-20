// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "babel-polyfill"
import qs from 'qs'
import http from '@/util/http' 
import validation from '@/util/validation' 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'

Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.use(http)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
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