<template>
	<!-- eslint-disable -->
	<div id="root">
		<div id="header">
			<div id="haeder-content">
				<label class="title">ToDoList</label>
				<input class="inp" v-model="inputValue" />
				<button class="sub" @click="submit">提交</button>
			</div>
		</div>
		<div id="content">
			<label class="subtitle">正在进行</label>
			<ul>
				<todo-item 
					v-for="(item,index) of list" 
					:key="index" 
					:content="item"
					:index="index"
					:finish="false"
					@delete="handleDelete"
					@todo="handleToDo"
				></todo-item> 
			</ul>
			<label class="subtitle">已经完成</label>
			<ul>
				<todo-item
					v-for="(item,index) of list" 
					:key="index" 
					:content="item"
					:index="index"
					:finish="true"
					@delete="handleDelete"
					@todo="handleToDo"
				></todo-item> 
			</ul>
		</div>
	</div>
</template>

<script>
// app.vue为组件的入口
/* eslint-disable */
import TodoItem from './components/TodoItem.vue';

export default {
  components: {
    'todo-item':TodoItem
  },
  /* ?? data 函数 */
  data:function(){
      return{
        inputValue:'',
		list: localStorage.todoitem != null ? JSON.parse(localStorage.todoitem) : [],
      }
  },
  methods: {
	submit: function(){
		if(this.inputValue != ''){
			this.list.unshift({text:this.inputValue,finish:false});
			localStorage.setItem('todoitem',JSON.stringify(this.list));
			this.inputValue = ''
		}else{
			alert("输入不能为空");
		}
	},
	handleDelete: function(index){
		this.list.splice(index,1);
		localStorage.setItem('todoitem',JSON.stringify(this.list));
	},
	handleToDo: function(content,index){
		content.finish = !content.finish;
		localStorage.setItem('todoitem',JSON.stringify(this.list));
	}
  }
}
</script>

<style>
body{background-color:#dddddd;}
*{padding:0;margin:0}
ul{list-style:none;}
#header{width:100%;background:#000000;}
#haeder-content{width:750px;margin:0 auto;}
#content{width:750px;margin:20px auto;}
.title{color:#ffffff;font-size:30px;padding-right:140px}
.inp{width:400px;margin:10px;padding:5px;border-radius:8px;border:none;background:#eeeeee;font-size:20px;}
.subtitle{font-size:25px;font-weight:bold;}
</style>