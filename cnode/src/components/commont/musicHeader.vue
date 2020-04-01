<template>
	<div id="music-header">
		<img src="@/assets/music.png"/>
		<input class="search" placeholder="搜索音乐,视频,歌词,电台"/>
		<div class="msg">
			<span class="font">登录</span>
			<span class="font">开通vip</span>
			<i class="iconfont icon-yifu"></i>
			<i class="iconfont icon-xinxi"></i>
			<i class="iconfont icon-shezhi_huaban"></i>
		</div>
	</div>
</template>

<script>
export default{
	name:'music-header',
}
</script>

<style scoped>
*{padding:0;margin:0;}
#music-header{position:fixed;top:0;left:0;z-index:99;width:100%;height:50px;background:firebrick;display:flex;align-items:center;}
#music-header>img{width:160px;height:40px;margin:5px 20px;}
.search{width:30%;height:30px;border:none;border-radius:15px;background:#a2161b;padding:0 15px;margin:0 10%;outline:none;color:#ffffff}
.msg{position:absolute;width:30%;right:5%;display:flex;justify-content:space-around;color:#cccccc;}
.font{font-size:16px;}
.iconfont{font-size:20px;}
</style>
