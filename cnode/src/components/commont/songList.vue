<template>
	<div id="songlist">
		<div>
			<div class="song-img">
				<img :src="data.coverImgUrl"/>
			</div>
			<div class="song-data">
				<div class="data-a">
					<h2 class="a-title">{{data.name}}</h2>
					<span class="trackCount">歌曲数<br/>{{data.trackCount}}</span>
					<span class="playCount">播放数<br/>{{Math.round(data.playCount/10000)}}万</span>
				</div>
				<div class="data-b">
					<img :src="data.creator.avatarUrl" class="b-img"/>
					<span class="b-name">{{data.creator.nickname}}</span>
				</div>
				<div class="data-c">
					<button class="c-play" @click="playAllSongs()">播放全部</button>
					<button>分享({{data.shareCount}})</button>
					<button>收藏({{Math.round(data.subscribedCount/10000)}}万)</button>
					<button>下载全部</button>
				</div>
				<div class="data-d">
					<p>标签：<span v-for="(item,index) of data.tags" :key="index">{{item}}/</span></p>
					<p>简介：{{data.description.substring(0,40)}}...</p>
				</div>
			</div>
		</div>
		<table>
			<tr>
				<th class="t1"></th>
				<th class="t2">音乐标题</th>
				<th class="t3">歌手</th>
				<th class="t4">专辑</th>
				<th class="t5">时长</th>
			</tr>
			<tr v-for="(item,index) of data.tracks" :key="item.id" @click="songClick(index,item.id,item.name,item.ar[0].name,item.al.picUrl)">
				<td class="t1">{{index+1}}</td>
				<td class="t2">{{item.name}}</td>
				<td class="t3">{{item.ar[0].name}}</td>
				<td class="t4">{{item.al.name}}</td>
				<td class="t5"></td>
			</tr>
		</table>
	</div>
</template>

<script>
export default{
	name:'songlist',
	data(){
		return {
			songId:this.$route.query.listId,
			data:{},
			song:{},
			list:[]
		}
	},
	methods:{
		songClick:function(index,id,name,artist,pic){
			this.$store.commit('listClear');
      this.$store.commit('listPlayAll',this.list);
			this.song.name = name;
			this.song.artist = artist;
			this.song.cover = pic;
			this.$http.get('/song/url',{params:{id:id}})
			.then(res=>{
				this.song.url = res.data.data[0].url;
				this.$store.commit('listAdd',this.song);
				this.$store.commit('songIndexChange',index);
        this.$store.commit('playSong');
			}).catch(err=>alert(err))
		},
		playAllSongs:function(){
			this.$store.commit('listClear');
			this.$store.commit('playSong');
			this.$store.commit('songIndexChange',0);
			this.$store.commit('listPlayAll',this.list);
		}
	},
	created(){
		this.$http.get('/playlist/detail',{params:{id:this.songId}})
		.then(res=>{
			this.data=res.data.playlist;
			for(var i=0;i<this.data.trackCount;i++){
				let obj = {
					id:this.data.trackIds[i].id,
					name:this.data.tracks[i].name,
					artist:this.data.tracks[i].ar[0].name,
					cover:this.data.tracks[i].al.picUrl,
				}
				this.$http.get('/song/url',{params:{id:this.data.trackIds[i].id}})
				.then(res=>{
					obj.url = res.data.data[0].url;
					this.list.push(obj);
				}).catch(err=>alert(err))
			}
		}).catch(err=>alert(err))
	}
}
</script>

<style scoped>
*{padding:0;margin:0;}
#songlist>div{margin:30px 20px;display:flex;flex-direction:row;}
.song-img{width:30%}
.song-img>img{width:auto;height:auto;max-width:240px;max-height:240px;border:1px solid #888888}
.song-data{width:70%}
.song-data>div{margin:15px 0;}
.data-a{display:flex;flex-direction:row;justify-content:space-around;}
.data-a>h2{width:80%}
.data-a>span{color:#888888;padding:0 10px;}
.data-b{display:flex;flex-direction:row;align-items:center;}
.b-img{width:40px;height:40px;border-radius:20px;}
.b-name{padding-left:10px;}
.data-c>button{width:90px;height:30px;margin:0 5px;border:1px solid #888888;border-radius:5px;background:#ffffff;}
.data-c>.c-play{background-color:firebrick;color:#ffffff;}
table{width:95%;margin:10px auto;}
table>tr>th{text-align:left;}
table>tr:hover{background:#dddddd;}
.t1{width:5%;}
.t2{width:40%;}
.t3{width:20%;}
.t4{width:25%;}
.t5{width:10%;}
</style>
