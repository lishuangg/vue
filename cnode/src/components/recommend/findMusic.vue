<template>
	<div id="find-music">
		<div id="find-music-bar">
			<router-link to="/findmusic/recommendation" active-class="active-bar" class="link-bar">个性推荐</router-link>
			<router-link to="/findmusic/songsheet" active-class="active-bar" class="link-bar">歌单</router-link>
			<router-link to="/findmusic/station" active-class="active-bar" class="link-bar">主播电台</router-link>
			<router-link to="/findmusic/ranking" active-class="active-bar" class="link-bar">排行榜</router-link>
			<router-link to="/findmusic/singer" active-class="active-bar" class="link-bar">歌手</router-link>
			<router-link to="/findmusic/latestmusic" active-class="active-bar" class="link-bar">最新音乐</router-link>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
export default{
	name:"find-music",
}
</script>

<style scoped>
*{padding:0;margin:0}
#find-music{width:90%;margin:5px auto;}
#find-music-bar{width:100%;margin:10px auto;display:flex;justify-content:center;border-bottom:1px solid #cccccc}
.link-bar{width:70px;padding:10px;text-decoration:none;color:#444444;text-align:center;}
.active-bar{border-bottom:2px solid darkred;}
.content{width:100%}
</style>