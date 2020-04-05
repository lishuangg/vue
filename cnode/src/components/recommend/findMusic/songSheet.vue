<template>
	<div id="songsheet">
		<ul class="tags">
			热门标签：
			<li 
				v-for="(item,index) of tags" 
				:key="index"
				@click="getData(item.playlistTag.name)"
			>{{item.playlistTag.name}}</li>
		</ul>
		<div class="song-list">
			<div v-for="(item,index) of data" :key="index" class="song">
				<router-link :to="{ name:'songlist',query:{listId:item.id}}" class="link">
					<div class="image">
						<img :src="item.coverImgUrl" class="songImg"/>
						<span class="img-right-top">{{Math.round(item.playCount/10000)}}万</span>
						<span class="img-left-bottom">{{item.creator.nickname}}</span>
					</div>
					<span class="songName">{{item.name}}</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:"songsheet",
	data(){
		return {
			tags:[],
			data:[]
		}
	},
	methods:{
		getData:function(tag){
			this.$http.get('http://localhost:3000/top/playlist',{
				params:{
					order:"hot",
					limit:32,
					cat:tag
				}
			}).then(res=>{
				this.data=res.data.playlists;
				console.log(this.data);
			}).catch(err=>alert(err))
		}
	},
	created(){
		this.$http.get('http://localhost:3000/playlist/hot')
		.then(res=>{
			this.tags=res.data.tags;
			console.log(this.tags);
		}).catch(err=>alert(err))
		this.getData("");
	}
}
</script>

<style scoped>
*{padding:0;margin:0}
ul,li{list-style:none;}
li{color:#444444;cursor:pointer;}
.tags{width:90%;margin:20px 0;display:flex;justify-content:space-around;flex-direction:row;}
.song-list{display:flex;flex-direction:row;flex-wrap:wrap;}
.song{width:23%;height:auto;padding:1%;}
.link{text-decoration:none;}
.songImg{width:100%;height:auto;}
.image{position:relative;}
.img-right-top{position:absolute;right:5px;top:5px;color:#ffffff;background:rgba(0,0,0,.3);}
.img-left-bottom{position:absolute;left:5px;bottom:5px;color:#ffffff;background:rgba(0,0,0,.3);}
.songName{font-size:14px;}
</style>
