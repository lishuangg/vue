import Vue from 'vue';
import VueRouter from 'vue-router';
import findMusic from '@/components/recommend/findMusic';
import privateFM from '@/components/recommend/privateFM';
import lookLive from '@/components/recommend/lookLive';
import video from '@/components/recommend/video';
import friend from '@/components/recommend/friend';
import localMusic from '@/components/myMusic/localMusic';
import download from '@/components/myMusic/download';
import cloudDisk from '@/components/myMusic/cloudDisk';
import collect from '@/components/myMusic/collect';
 
Vue.use(VueRouter);

/* eslint-disable */
export default new VueRouter({
	mode:'history',//使用history防止url中出现#
	routes: [
		{
			path:'/',
			component:findMusic,
		},
		{
			path:'/findmusic',
			name:'findmusic',
			component:findMusic,
		},
		{
			path:'/privatefm',
			name:'privatefm',
			component:privateFM,
		},
		{
			path:'/looklive',
			name:'looklive',
			component:lookLive,
		},
		{
			path:'/video',
			name:'video',
			component:video
		},
		{
			path:'/friend',
			name:'friend',
			component:friend
		},
		{
			path:'/localmusic',
		    name:'localmusic',
		    component: localMusic
		},
		{
			path:'/download',
			name:'download',
			component:download
		},
		{
			path:'/clouddisk',
			name:'clouddisk',
			component:cloudDisk
		},
		{
			path:'/collect',
			name:'collect',
			component:collect
		},
		{
			path:'*',
			redirect:'/'
		}
	]
})