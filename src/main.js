// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "babel-polyfill"
import store from './store/store'
import qs from 'qs'
import http from '@/util/http' 
import validation from '@/util/validation' 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'

import 'vue-pdf-shower/lib/dist/pdf.js'
PDFJS.workerSrc = 'vue-pdf-shower/lib/dist/pdf.worker.js'
PDFJS.cMapUrl = '/static/web/cmaps/'
PDFJS.cMapPacked = true;

Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.use(http)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
// 定义全局 过滤器
// 日期过滤器
Vue.filter('dateFilter',function(value){
	if(!value) return ''
	console.log(value);
	// console.log(new Date(value).toLocaleString().replace(/\//g,'-').match(/\d{4}\-\d{2}\-\d{1,2}/)[0])
	// return new Date(value).toLocaleString().replace(/\//g,'-').match(/\d{4}\-\d{1,2}\-\d{1,2}/)[0]
	return String(new Date(value).getFullYear()) + '-' + String(new Date(value).getMonth()+1)  + '-' + String(new Date(value).getDate());

})
// 信审审批 - 审批 计算倍数
Vue.filter('formatValue',function(value){
	if(!value) return ''
	console.log(value);
	return Number(value)>0?Math.round(Number(value)*10000)/100 +'%':'0.00%';
})
// 金额过滤
Vue.filter('formatMoney',function(value){
	if(!value) return ''
	console.log(value)
	return value.toLocaleString()
})
// 精度问题
Vue.filter('formatAppmult',function(value){
	if(!value) return ''
	return Math.ceil(Number(value))
})
