//入口文件main.js引入并挂在到节点
import Vue from 'vue';
import App from './App';
import router from '@/router';
import store from '@/store';
//npm install axios
import axios from 'axios';
//引入字体图标
import './assets/font/iconfont.css';
//引入轮播图组件  yarn add swiper vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
//引入音乐播放组件 yarn add @moefe/vue-aplayer
import APlayer from '@moefe/vue-aplayer';

Vue.config.productionTip = false
Vue.prototype.$http=axios
axios.defaults.baseURL = process.env.VUE_APP_BASE_API
// dev.env.js（开发环境）VUE_APP_BASE_API:'"/api"',
// prod.env.js(生产环境）VUE_APP_BASE_API:'"http://192.168.xx:xxx"' ,项目api地址
// VUE_APP_BASE_API可以通过process.env.VUE_APP_BASE_API来访问。

axios.defaults.headers={'Content-Type':'application/x-www-form-urlencoded'}
Vue.use(VueAwesomeSwiper)
Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});

/* eslint-disable no-new */
new Vue({
 el: '#app',
 router,
 store,
 render: h => h(App)
});
