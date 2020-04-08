import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* eslint-disable */
const store = new Vuex.Store({
    state:{
        list:localStorage.songList != null ? JSON.parse(localStorage.songList) : [],
		now:localStorage.songnow != null ? JSON.parse(localStorage.songnow) : {},
		songIndex:0,
		play:false
    },
	mutations:{
		listAdd (state,n) {
			state.now = n;
			localStorage.setItem('songnow',JSON.stringify(state.now))
		},
		songIndexChange (state,n){
			state.songIndex = n;
		},
		listPlayAll (state,n){
			state.list = n;
			localStorage.setItem('songList',JSON.stringify(state.list))
		},
		listClear (state,n=0){
			state.list.length = n;
		},
		playSong (state){
			state.play = true;
		}
	},
	actions:{}
})

export default store