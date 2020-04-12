import Vue from 'vue'
import Vuex from 'vuex'
// npm install vuex --save
Vue.use(Vuex)

/* eslint-disable */
const store = new Vuex.Store({
    state:{
      login:localStorage.songUserId != null,
      userId:localStorage.songUserId != null ? JSON.parse(localStorage.songUserId) : '',
      list:localStorage.songList != null ? JSON.parse(localStorage.songList) : [],
      now:localStorage.songnow != null ? JSON.parse(localStorage.songnow) : {},
      songIndex:0,
      play:false
    },
	mutations:{
    login (state,n){
      state.login = n;
    },
    getUser (state,n){
      state.userId = n;
      localStorage.setItem('songUserId',JSON.stringify(n));
    },
    clearUser (state){
      state.userId = '';
      login:false;
      localStorage.removeItem('songUserId');
    },
		listAdd (state,n) {
			state.now = n;
			localStorage.setItem('songnow',JSON.stringify(n))
		},
		songIndexChange (state,n){
			state.songIndex = n;
		},
		listPlayAll (state,n){
			state.list = n;
			localStorage.setItem('songList',JSON.stringify(n))
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
