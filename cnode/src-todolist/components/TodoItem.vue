<template>
	<!-- eslint-disable -->
	<li v-if="content.finish == finish" class="task" :class="content.finish?'done':'doing'">
		<div @click="handleClick" class="taskInp">
			<input type="radio" :checked="content.finish"/>
			{{content.text}}
		</div>
		<button @click="handleClickDelete" class="btn">删除</button>
	</li>
</template>

<script>
/* eslint-disable */
export default {
	//父子组件传值通信
	props:['content','index','finish'],
	methods:{
		handleClickDelete: function(){
			this.$emit('delete',this.index);//触发父组件那边需要监听并处理 
		},
		handleClick: function() {
			this.$emit('todo',this.content,this.index);
		}
	}
}
</script>

<style scoped>
/* scoped定义局部样式，去掉scope，是全局样式 */
.task{
	width:90%;
	height:20px;
	padding:10px;
	margin:10px auto;
	border-radius:8px;
}
.doing{
	border-left:8px solid #427883;
	background: #ffffff;
}
.done{
	border-left:8px solid #888888;
	background: #eeeeee;
	color:#444444;
}
.taskInp{
	font-size:18px;
	float: left;
}
.btn{
	float:right;
}
</style>
