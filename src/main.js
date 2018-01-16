// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "babel-polyfill"
// import store from './store/store'
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
	return new Date(value).toLocaleString().replace(/\//g,'-').match(/\d{4}\-\d{1,2}\-\d{1,2}/)[0]
})
// 信审审批 - 审批 计算倍数
Vue.filter('formatValue',function(value){
	if(!value) return ''
	console.log(value);
	if(Number(value)>0)
	return Math.round(Number(value)*10000)/100;
	
})
// 金额过滤
Vue.filter('formatMoney',function(value){
	if(!value) return ''
	console.log(value)
	return value.toLocaleString()
})
