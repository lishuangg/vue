<template>
 <div id="home">
	<div class="menu">
		<router-link to="/home/all" active-class="active" class="link"><span @click="getData('')">全部</span></router-link>
		<router-link to="/home/good" active-class="active" class="link"><span @click="getData('good')">精华</span></router-link>
		<router-link to="/home/share" active-class="active" class="link"><span @click="getData('share')">分享</span></router-link>
		<router-link to="/home/ask" active-class="active" class="link"><span @click="getData('ask')">问答</span></router-link>
		<router-link to="/home/job" active-class="active" class="link"><span @click="getData('job')">招聘</span></router-link>
	</div>
	<div class="content">
		<div class="line" v-for="(item,index) of list" :key="index">
			<div>
				<img class="pic" :src="item.author.avatar_url" alt="">
				<span class="replyVisit">
					<span class="reply">{{item.reply_count}}</span>/{{item.visit_count}}
				</span>
				<router-link class="article" :to="{name:'article',params:{id:item.id}}">
					<span class="title">{{item.title}}</span>
				</router-link>
			</div>
			<div>
				<img class="pic_right" :src="item.author.avatar_url" alt="">
				<span class="reply_time">{{item.last_reply_at.substring(0,10)}}</span>
			</div>
		</div>
	</div>
	<Pages @sendPage="getPage"></Pages>
 </div>
</template>

<script>
/* eslint-disable */
import Pages from '@/components/Pages'
export default {
	name:"home",
	components:{Pages},
	data(){
		return {
			list:[],
			currentPage:1,
			myTab:'',
			tag:''
		}
	},
	methods:{
		getData:function(myTab){
			this.myTab=myTab
			this.$http.get('https://cnodejs.org/api/v1/topics',{
				params:{
					page:this.currentPage,
					limit:20,
					tab:this.myTab
				}
			}).then(res=>{
				this.list=res.data.data
			}).catch(err=>alert(err))
		},
		getPage:function(page){
			this.currentPage = page;
			this.getData(this.myTab);
		}
	},
	beforeMount(){
		this.getData("");
	}
}
</script>

<style scoped>
.menu{width:100%;padding:20px;}
.link{text-decoration:none;padding:2px 5px;margin:0 15px;color:#00aa00;line-height:20px;float:left;border-radius:4px;}
.active{color:#ffffff;background: #00aa00;}
.content{width:100%;}
.line{width:95%;padding:15px;display:flex;justify-content:space-between;}
.line>div{display:flex;align-items:center;}
.pic{width:40px;height:40px;border-radius:5px;}
.replyVisit{width:60px;font-size:12px;color:#BBBBBB;padding:5px;}
.reply{font-size:14px;color:#888888}
.article{text-decoration:none;color:#444444;}
.pic_right{width:25px;height:25px;border-radius:5px;}
</style>