<template>
	<div id="find-music">
		<div id="find-music-bar">
			<router-link to="" active-class="active-bar" class="link-bar">个性推荐</router-link>
			<router-link to="" active-class="active-bar" class="link-bar">歌单</router-link>
			<router-link to="" active-class="active-bar" class="link-bar">主播电台</router-link>
			<router-link to="" active-class="active-bar" class="link-bar">排行榜</router-link>
			<router-link to="" active-class="active-bar" class="link-bar">歌手</router-link>
			<router-link to="" active-class="active-bar" class="link-bar">最新音乐</router-link>
		</div>
		<my-carouse></my-carouse>
		<div class="song-list">
			<div class="title">
				<span class="title1">推荐歌单</span>
				<span>更多></span>
			</div>
			<div>
				<div v-for="(item,index) of songList" :key="index" class="song">
					<img :src="item.picUrl" class="songImg"/>
					<span class="songName">{{item.name}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import myCarouse from '@/components/utils/myCarouse.vue';
export default{
	name:"find-music",
	components:{
		"my-carouse":myCarouse
	},
	data() {
		return {
			songList:[]
		}
	},
	created(){
		this.$http.get('http://localhost:3000/personalized?limit=10')
		.then(res=>{
			this.songList=res.data.result
			console.log(res.data.result[1].picUrl)
		}).catch(err=>alert(err))
	}
}
</script>

<style scoped>
*{padding:0;margin:0}
#find-music{width:90%;margin:5px auto;}
#find-music-bar{width:100%;margin:10px auto;display:flex;justify-content:center;border-bottom:1px solid #cccccc}
.link-bar{width:70px;padding:10px;text-decoration:none;color:#444444;text-align:center;}
.active-bar{border-bottom:2px solid darkred;}
.song-list{padding:20px 0;}
.title{font-size:18px;color:#444444;height:30px;border-bottom:1px solid #cccccc;display:flex;justify-content: space-between;}
.song-list>div{display:flex;flex-direction:row;flex-wrap:wrap;}
.song{width:18%;height:auto;padding:1%;}
.songImg{width:auto;height:auto;max-width:100%;max-height:100%;}
.songName{font-size:14px;}
</style>