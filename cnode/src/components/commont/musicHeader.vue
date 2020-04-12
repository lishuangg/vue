<template>
	<div id="music-header">
		<img src="@/assets/music.png"/>
		<input class="search" placeholder="搜索音乐,视频,歌词,电台"/>
		<div class="msg">
      <div v-if="$store.state.login">
        <el-popover
          placement="bottom"
          width="300"
          v-model="loginUserVisible"
          trigger="click">
          <user-message :message="this.user.profile" @loginout="userLoginout()"></user-message>
          <el-button class="login" slot="reference">
            <img class="pic" :src="this.user.profile.avatarUrl" alt="">
            <span class="font">{{this.user.profile.nickname.length>5?this.user.profile.nickname.slice(0,5)+'...':this.user.profile.nickname}}</span>
          </el-button>
        </el-popover>
      </div>
      <div v-else>
        <el-button round @click="submitForm()" class="login">
          <img class="pic" src="http://img1.imgtn.bdimg.com/it/u=794864434,2078288985&fm=15&gp=0.jpg" alt="">
          <span class="font">未登录</span>
        </el-button>
        <el-dialog title="登陆" :visible.sync="dialogTableVisible" center :append-to-body='true' :lock-scroll="false" width="30%">
          <login @submitLogin="loginHandle()"></login>
        </el-dialog>
      </div>
			<span class="font">开通vip</span>
			<i class="iconfont icon-yifu"></i>
			<i class="iconfont icon-xinxi"></i>
			<i class="iconfont icon-shezhi_huaban"></i>
		</div>
	</div>
</template>

<script>
import login from '@/components/commont/login.vue';
import userMessage from '@/components/commont/userMessage.vue';
export default {
  components: {
    login,
    'user-message':userMessage
  },
	name:'music-header',
  data(){
    return {
      user:{},
      dialogTableVisible: false,
      loginUserVisible: false,
    }
  },
  methods:{
    submitForm:function(){
      this.dialogTableVisible = true;
    },
    loginHandle:function(){
      this.dialogTableVisible = false;
      // this.$store.commit("login",true);
      this.getUserMsg(this.$store.state.userId);
    },
    userLoginout:function(){
      this.loginUserVisible = false;
      this.$store.commit('clearUser');
    },
    getUserMsg:function(id){
      this.$http.get('/user/detail',{params:{uid:id}})
      .then(res=>{
        this.user = res.data;
        console.log(res.data.profile);
      }).catch(err=>alert(err))
    }
  },
  created(){
    if(this.$store.state.userId != ''){
      this.getUserMsg(this.$store.state.userId);
    }
  }
}
</script>

<style scoped>
*{padding:0;margin:0;}
#music-header{position:fixed;top:0;left:0;z-index:99;width:100%;height:50px;background:firebrick;display:flex;align-items:center;}
#music-header>img{width:160px;height:40px;margin:5px 20px;}
.search{width:30%;height:30px;border:none;border-radius:15px;background:#a2161b;padding:0 15px;margin:0 10%;outline:none;color:#ffffff}
.msg{position:absolute;width:30%;right:5%;display:flex;align-items:center;justify-content:space-around;color:#cccccc;}
.login{border:none;background:firebrick;margin:0;padding:0;display:flex;align-items:center;}
.pic{width:24px;height:24px;border-radius: 12px;}
.font{font-size:14px;color:#cccccc;}
.iconfont{font-size:20px;}
</style>
