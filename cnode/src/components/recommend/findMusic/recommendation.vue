<template>
	<div id="recommendation">
		<my-carouse></my-carouse>
		<div class="song-list">
			<div class="title">
				<span class="title1">推荐歌单</span>
				<span>更多></span>
			</div>
			<div>
				<div v-for="(item,index) of songList" :key="index" class="song">
					<router-link :to="{ name:'songlist',query:{listId:item.id}}" class="link">
						<img :src="item.picUrl" class="songImg"/>
						<span class="songName">{{item.name}}</span>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import myCarouse from '@/components/utils/myCarouse.vue';
export default{
	name:"recommendation",
	components:{
		"my-carouse":myCarouse
	},
	data() {
		return {
			songList:[]
		}
	},
	created(){
    this.$http.get('/personalized',{params:{limit:10}})
		.then(res=>{
			this.songList=res.data.result
		}).catch(err=>alert(err))
	}
}
</script>

<style scoped>
*{padding:0;margin:0}
#recommendation{width:100%}
.song-list{padding:20px 0;}
.title{font-size:18px;color:#444444;height:30px;border-bottom:1px solid #cccccc;display:flex;justify-content: space-between;}
.song-list>div{display:flex;flex-direction:row;flex-wrap:wrap;}
.song{width:18%;height:auto;padding:1%;}
.link{text-decoration:none;}
.songImg{width:auto;height:auto;max-width:100%;max-height:100%;}
.songName{font-size:14px;}
</style>
