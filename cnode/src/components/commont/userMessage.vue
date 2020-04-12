<template>
  <div class="userMessage">
    <div class="head">
      <img :src='this.message.avatarUrl' class="pic" />
      <span class="name">{{this.message.nickname}}</span>
    </div>
    <ul class="msg">
      <li>
        <span class="count">{{this.message.eventCount}}</span>
        <span class="count-name">动态</span>
      </li>
      <li class="line"></li>
      <li>
        <span class="count">{{this.message.follows}}</span>
        <span class="count-name">关注</span>
      </li>
      <li class="line"></li>
      <li>
        <span class="count">{{this.message.followeds}}</span>
        <span class="count-name">粉丝</span>
      </li>
    </ul>
    <ul class="content">
      <li>会员中心</li>
      <li>等级</li>
      <li>商城</li>
      <li>个人信息设置</li>
      <li>绑定社交账号</li>
    </ul>
    <el-button class="loginout" @click="loginout()">退出登录</el-button>
  </div>
</template>

<script>
export default{
  name:'userMessage',
  props:['message'],
  methods:{
    loginout:function(){
      this.$emit('loginout');
    }
  }
}
</script>

<style scoped>
*{padding:0;margin:0}
ul,li{list-style:none;}
.userMessage{margin:10px;}
.head{display:flex;justify-content: flex-start;align-items:center;}
.pic{width:44px;height:44px;border-radius:22px;}
.name{font-size:16px;padding-left:15px;}
.msg{display:flex;justify-content:space-around;align-items:center;padding:20px 0;border-bottom:1px solid #dddddd;}
.msg>li{width:30%;height:40px;display:flex;justify-content:center;align-items:center;flex-direction:column;}
.msg>.line{width:1px;background:#dddddd;}
.count{font-size:16px;font-weight:bold;color:#000000;}
.content{margin:10px 0;}
.content>li{line-height:30px;font-size:14px;}
.loginout{width:100%;height:40px;border:1px solid #bbbbbb;border-radius:5px;}
</style>
