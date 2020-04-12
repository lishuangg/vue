<template>
 <el-form ref="user" :model="user" label-width="40px">
   <el-form-item label="手机" class="item">
     <el-input v-model="user.phone"></el-input>
   </el-form-item>
   <el-form-item label="密码" class="item">
     <el-input v-model="user.pwd" type="password"></el-input>
   </el-form-item>
   <el-button class="login" :plain="true" @click="submitLogin()">登录</el-button>
   <el-button class="register">注册</el-button>
 </el-form>
 </template>
 <script>
 export default {
   data() {
     return {
       user:{
         phone:'',
         pwd:''
       },
     }
   },
   methods: {
    submitLogin:function(){
      if(this.user.phone === '' || this.user.pwd === ''){
        this.$message.error('手机号或密码不能为空');
      }else{
        this.$http.get('/login/cellphone',{params:{phone:this.user.phone,password:this.user.pwd}})
        .then(res=>{
          if(res.data.code == '502'){
            this.$message.error(res.data.message);
          }else{
            this.$store.commit('login',res.data.profile.userId);
            this.$emit("submitLogin");
          }
        }).catch(err=>{
          this.$message.error('手机号不正确或者未注册');
        })
      }
    }
   }
 }
 </script>

<style scoped>
*{padding:0;margin:0}
.input{outline:none;}
.item{margin:10px 0;}
.login{width:100%;height:40px;background:indianred;color:#ffffff;margin:5px 0;}
.register{width:100%;height:40px;margin:5px 0;}
</style>
