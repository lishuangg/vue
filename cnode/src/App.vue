<template>
 <div id="root">
	<div id="header">
		<div class="head">
			<div id="left">
				<img style="height:30px;margin-right:20px;" src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"/>
				<input class="inp" />
			</div>
			<div id="right">
				<router-link to="/home" active-class="active" class="link">首页</router-link>
				<router-link to="/newhand" active-class="active" class="link">新手入门</router-link>
				<router-link to="/api" active-class="active" class="link">API</router-link>
				<router-link to="/about" active-class="active" class="link">关于</router-link>
				<router-link to="/register" active-class="active" class="link">注册</router-link>
				<router-link to="/login" active-class="active" class="link">登录</router-link>
			</div>
		</div>
	</div>
	<div class="content">
		<router-view></router-view>
	</div>
 </div>
</template>

<script>
export default {
	name:'root'
}
</script>

<style>
*{padding:0;margin:0}
body{background: #eeeeee;}
#header{width:100%;background:#333333;}
.head{width:90%;height:40px;margin:0 auto;}
#left{width:60%;float: left;}
#right{width:40%;float: left;}
.inp{width:300px;padding:3px;border-radius:8px;border:none;background:#eeeeee;font-size:20px;}
.link{text-decoration:none;margin:0 15px;color:#bbbbbb;line-height:40px;float:left;}
.active{color:#ffffff;}
.content{width:80%;margin:20px auto;background: #ffffff;border-radius:5px;}
</style>