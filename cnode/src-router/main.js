//入口文件main.js引入并挂在到节点
import Vue from 'vue';
import App from './App';
import router from '@/router';
import store from '@/store';
 
 Vue.config.productionTip = false;
 
/* eslint-disable no-new */
new Vue({
 el: '#app',
 router,
 store,
 render: h => h(App)
 //挂载router
 // template: '<App/>',
 // components: { App },
});