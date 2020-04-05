import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* eslint-disable */
const store = new Vuex.Store({
    state:{
        list:[],
		now:{},
    },
	mutations:{
		listAdd (state,n) {
			state.now = n;
		},
		listPlayAll (state,n){
			state.list.push(n);
		},
		listClear (state,n=0){
			state.list.length = n;
		}
	},
	actions:{}
})

export default store