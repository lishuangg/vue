<template>
 <div id="root">
	<div>
		<h3>{{msg}}</h3>
		<router-link to="/home" active-class="active" class="link">首页</router-link>
		<!-- 第一种传参，path添加/:id和props:true，to="/*/id"，在组件中有props获取id值 -->
		<router-link to="/message/hello" active-class="active" class="link">消息</router-link>
		<!-- 第二种传参，path添加/:id，直接在组件中由{{ $route.params.id }}引入 -->
		<router-link :to="{ name:'news',params:{ id: 123456789 }}" class="link">新闻</router-link>
		<!-- 第三种传参，path取别名name，然后直接在组件中由{{ $route.query.userId }}获取 -->
		<router-link :to="{ name:'aboutme',query:{ userId: 20200325 }}" active-class="active" class="link">个人中心</router-link>
	</div>
	<div class="content">
		<router-view></router-view>
	</div>
	<div @readystatechange="handlechange">
		<h3>{{ $store.state.title }}</h3>
		<button @click="counthandle(1)">点击+1</button>
		<button @click="counthandle(2)">点击+2</button>
		<br/>{{ $store.state.count }}<br>
	</div>
 </div>
</template>

<script>
export default {
	name:'root',
	data(){
		return {
			msg:"router练习"
		}
	},
	methods:{
		handlechange:function(){
			this.$store.dispatch('increment',1)
		},
		counthandle:function(n){
			this.$store.commit('increment',n);
		}
	}
}
</script>

<style scoped>
.link{text-decoration:none;padding:5px;margin:10px;background:#BBBBBB;border-radius:5px;color:#000000}
.active{background:#42B983;color:#ffffff;}
.content{padding:10px;width:280px;height:100px;border:1px solid #427883;border-radius:10px;}
</style>