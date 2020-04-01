// main.js是整个程序的入口文件，加载各个公用组件

import Vue from 'vue'
import App from './App.vue'  //页面入口文件

Vue.config.productionTip = false
// 阻止启动生产消息，常用作指令
// 没有Vue.config.productionTip = false这句代码，它会显示你生产模式的消息

new Vue({
  render: h => h(App), //ES6箭头函数
  
  // Vue.js 里面的 createElement 函数，这个函数的作用就是生成一个 VNode节点
  // render 函数得到这个 VNode 节点之后，返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上。
  // render: function (createElement) {
  //     return createElement(App);
  // }
}).$mount('#app')
