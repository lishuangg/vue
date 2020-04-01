import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home';
import News from '@/components/News';
import Message from '@/components/Message';
import AboutMe from '@/components/AboutMe';
 //@是在webpack.base.conf.js里修改的配置，目的是每一次引入组件之类的文件都要写相对路径太麻烦
 //"@":resolve('src')
 
Vue.use(VueRouter);
 
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
			path:'/news/:id',
			name:'news',
			component:News,
			//第二种组件引入方法
			// component: (resolve) => require(['../components/News.vue'],resolve),
		},
		{
			path:'/message/:id',//传参
			props:true,
			name:'message',
			component:Message
		},
		{
			path:'/aboutme',
			name:'aboutme',
			component:AboutMe
		},
		{
			path:'*',
			redirect:'/'
		}
	]
})