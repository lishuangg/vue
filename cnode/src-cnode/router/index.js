import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home';
import Newhand from '@/components/Newhand';
import Api from '@/components/Api';
import About from '@/components/About';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Article from '@/components/Article';
 
Vue.use(VueRouter);

/* eslint-disable */
export default new VueRouter({
	mode:'history',//使用history防止url中出现#
	routes: [
		{
			path:'/',
			component:Home,
		},
		{
			path:'/home',
			name:'home',
			component:Home,
		},
		{
			path:'/home/:id',
			name:'home',
			component:Home,
		},
		{
			path:'/newhand',
			name:'newhand',
			component:Newhand,
		},
		{
			path:'/api',
			name:'api',
			component:Api,
		},
		{
			path:'/about',
			name:'about',
			component:About
		},
		{
			path:'/register',
			name:'register',
			component:Register
		},
		{
			path:'/login',
			name:'login',
			component:Login
		},
		{
			path:'/article/:id',
		    name:'article',
		    component: Article
		},
		{
			path:'*',
			redirect:'/'
		}
	]
})