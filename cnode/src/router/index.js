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

import recommendation from '@/components/recommend/findMusic/recommendation';
import songSheet from '@/components/recommend/findMusic/songSheet';
import station from '@/components/recommend/findMusic/station';
import ranking from '@/components/recommend/findMusic/ranking';
import singer from '@/components/recommend/findMusic/singer';
import latestMusic from '@/components/recommend/findMusic/latestMusic';

import songList from '@/components/commont/songList';
import information from '@/components/commont/information';

// npm install vue-router --save
Vue.use(VueRouter);

/* eslint-disable */
export default new VueRouter({
	mode:'history',//使用history防止url中出现#
	routes: [
		{
			path:'/',
      component:findMusic,
      redirect:'/findmusic/recommendation'
		},
		{
			path:'/findmusic',
			name:'findmusic',
      redirect:'/findmusic/recommendation',
			component:findMusic,
			children:[
				{path:'recommendation',component:recommendation},
				{path:'songSheet',component:songSheet},
				{path:'station',component:station},
				{path:'ranking',component:ranking},
				{path:'singer',component:singer},
				{path:'latestMusic',component:latestMusic},
			]
		},
		{
			path:'/songlist',
			name:'songlist',
			component:songList
		},
    {
    	path:'/information',
    	name:'information',
    	component:information
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
