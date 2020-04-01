//VueX是适用于在Vue项目开发时使用的状态管理工具。
import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

/* eslint-disable */
//创建VueX对象
const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态
        title:'VueX练习',
		count:1
    },
	mutations:{
		// 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
		// 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
		increment (state,n) { //调用 store.commit 方法
		  state.count += n;
		}
	},
	actions:{
	    aEdit(context,payload){
	        setTimeout(()=>{
	            context.commit('increment',payload)
	        },2000)
	    }
	}
})

export default store