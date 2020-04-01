<template>
	<!-- eslint-disable -->
	<div id="app">
		<div id="header">
			<div id="content">
				<label style="color:#ffffff;font-size:30px;">ToDoList</label>
				<input v-model="inputValue" style="width:400px;margin:10px;padding:5px;border-radius:8px;border:none;background:#eeeeee;font-size:20px;"/>
				<button @click="submit">提交</button>
			</div>
		</div>
		<div id="content">
			<label style="font-size:25px;font-weight:bold;">正在进行</label>
			<ul style="list-style:none">
				<todo-item 
					v-for="(item,index) of doingList" 
					:key="index" 
					:content="item"
					:index="index"
					@delete="handleDelete"
					@todo="handleToDo"
				></todo-item> 
			</ul>
			<label style="font-size:25px;font-weight:bold;">已经完成</label>
			<ul style="list-style:none">
				<todo-item
					v-for="(item,index) of doneList" 
					:key="index" 
					:content="item"
					:index="index"
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
  data:function() {
  	return{
		inputValue: '',
		doingList: [{text:'doing',finish:false}],
		doneList: []
	}
  },
  methods: {
  	submit: function(){
  		if(this.inputValue != ''){
  			this.doingList.unshift({text:this.inputValue,finish:false});
  			this.inputValue = ''
  		}else{
  			alert("输入不能为空");
  		}
  	},
  	handleDelete: function(index){
  		this.doingList.splice(index,1)
  	},
  	handleToDo: function(content,index){
  		if(!content.finish){
  			this.doingList.splice(index,1)
  			this.doneList.unshift({text:content.text,finish:true})
  		}else{
  			this.doneList.splice(index,1)
  			this.doingList.unshift({text:content.text,finish:false})
  		}
  	}
  }
}
</script>

<style>
*{
	padding:0;
	margin:0
}
#app{
  background-color: #bbbbbb;
}
#header{
	width:100%;
	background:#000000;
}
#content{
	width:750px;
	margin:0 auto;
}
</style>
