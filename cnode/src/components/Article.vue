<template>
	<div id="article">
		<div class="header">
			<h1 class="title">{{data.title}}</h1>
			<ul>
				<li v-if="data.author">作者{{data.author.loginname}}</li>
				<li>发布于{{data.create_at|formatDate}}</li>
				<li>{{data.visit_count}}次浏览</li>
			</ul>
			<div class="art-content" v-html="data.content"></div>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
export default{
	name:'article',
	data(){
		return {
			data:{},
		}
	},
	methods:{
		getData(){	
			var id=this.$route.params.id;
			this.$http.get('https://cnodejs.org/api/v1/topic/'+id,{
				mdrender:'true'
			})
			.then(res=>{					
				this.data=res.data.data			
			})
		}
	},
	beforeMount(){
		this.getData()
	},
}
</script>

<style scoped>
/* 通过 v-html 创建的 DOM 内容不受作用域内的样式影响，
   但是你仍然可以通过深度作用选择器来为他们设置样式。 */
.art-content >>> img{max-width:100%;}
.title{margin:30px;text-align:center;}
ul{list-style:none;}
ul li{display:inline;padding:0 50px;}
</style>
