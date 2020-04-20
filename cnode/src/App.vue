<template>
 <div id="root">
	<music-header @reviseInforHandle="reviseUserInfor()"></music-header>
	<header></header>
	<div id="menu" style="overflow:auto">
		<span>推荐</span>
		<div class="recommend">
			<router-link to="/findmusic" active-class="active" class="link">
				<i class="iconfont icon-music"></i>发现音乐
			</router-link>
			<router-link to="/privatefm" active-class="active" class="link">
				<i class="iconfont icon-dianboxindiantu"></i>私人 FM
			</router-link>
			<router-link to="/looklive" active-class="active" class="link">
				<i class="iconfont icon-zhibo1"></i>LOOK直播
			</router-link>
			<router-link to="/video" active-class="active" class="link">
				<i class="iconfont icon-zhibo"></i>视频
			</router-link>
			<router-link to="/friend" active-class="active" class="link">
				<i class="iconfont icon-pengyou"></i>朋友
			</router-link>
		</div>
		<span>我的音乐</span>
		<div class="my-music">
			<router-link to="/localmusic" active-class="active" class="link">
				<i class="iconfont icon-dilanxianxingiconyihuifu_huabanfuben"></i>本地音乐
			</router-link>
			<router-link to="/download" active-class="active" class="link">
				<i class="iconfont icon-xiazai"></i>下载管理
			</router-link>
			<router-link to="/clouddisk" active-class="active" class="link">
				<i class="iconfont icon-yunpan"></i>我的音乐云盘
			</router-link>
			<router-link to="/collect" active-class="active" class="link">
				<i class="iconfont icon-shoucang"></i>我的收藏
			</router-link>
		</div>
    <el-collapse accordion>
      <el-collapse-item title="我创建的歌单">
        <div v-for="item in create" :key="item.id" @click="goSongList(item.id)">
        	<i class="el-icon-s-unfold"></i>{{item.name}}
        </div>
      </el-collapse-item>
      <el-collapse-item title="我收藏的歌单">
        <div v-for="item in collect" :key="item.id" @click="goSongList(item.id)">
        	<i class="el-icon-s-unfold"></i>{{item.name}}
        </div>
      </el-collapse-item>
      <footer></footer>
    </el-collapse>
	</div>
	<div class="content">
		<router-view :key="$route.fullPath"></router-view>
		<footer></footer>
	</div>
	<play-bar></play-bar>
 </div>
</template>

<script>
/* eslint-disable */
import musicHeader from '@/components/commont/musicHeader.vue';
import playBar from '@/components/commont/playBar.vue';
export default{
	name:"root",
	components:{
		'music-header':musicHeader,
		'play-bar':playBar
	},
  data(){
    return {
      create:[],
      collect:[],
      id:''
    }
  },
  methods:{
    reviseUserInfor:function(){
      this.$router.push({path:'/information'});
    },
    goSongList:function(id){
      this.id = id;
      this.$router.push({ name:'songlist',query:{listId:id}});
    }
  },
  created(){
    this.$http.get('/user/playlist',{params:{uid:this.$store.state.userId}})
    .then(res=>{
      var list = res.data.playlist;
      for(var i in list){
        if(list[i].subscribed){
          this.collect.push({id:list[i].id,name:list[i].name})
        }else{
          this.create.push({id:list[i].id,name:list[i].name})
        }
      }
    }).catch(err=>alert(err))
  },
}
</script>

<style>
*{padding:0;margin:0}
#root{position:relative;}
#menu{position:fixed;top:50px;left:0;width:20%;height:100%;border-right:5px solid #dddddd;display:flex;flex-direction:column;}
#menu>span{color:#666666;padding:10px;}
.recommend,.my-music{display:flex;flex-direction:column;}
.link{text-decoration:none;width:80%;height:24px;padding:5px 10%;line-height:24px;color:#666666;}
.active{color:#000000;background:#dddddd;border-left:5px solid firebrick}
.iconfont{font-size:18px;padding-right:8px}
.content{width:78%;margin-left:22%;}
header{width:100%;height:50px;}
footer{width:100%;height:80px;}
</style>
