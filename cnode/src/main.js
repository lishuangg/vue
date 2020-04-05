//入口文件main.js引入并挂在到节点
import Vue from 'vue';
import App from './App';
import router from '@/router';
import store from '@/store';
import axios from 'axios';
//引入字体图标
import './assets/font/iconfont.css';
//引入轮播图组件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
//引入音乐播放组件 yarn add @moefe/vue-aplayer
import APlayer from '@moefe/vue-aplayer';

Vue.config.productionTip = false
Vue.prototype.$http=axios
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