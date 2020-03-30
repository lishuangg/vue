import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* eslint-disable */
const store = new Vuex.Store({
    state:{
        list:[]
    },
	mutations:{
		increment (state,n) {
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