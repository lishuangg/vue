<template>
  <div class="information">
    <header>编辑个人信息</header>
    <el-form ref="form" :model="form" label-width="60px" label-position="left">
      <el-form-item label="头像:">
        <el-avatar shape="square" :size="100" fit="cover" :src="this.form.avatar"></el-avatar>
      </el-form-item>
      <el-form-item label="昵称:">
        <el-input v-model="form.name" @change="chanceName()"></el-input>
      </el-form-item>
      <el-form-item label="介绍:">
        <el-input type="textarea" v-model="form.desc" @change="chanceDesc()"></el-input>
      </el-form-item>
      <el-form-item label="性别:">
        <el-radio-group v-model="form.sex" @change="chanceSex()">
          <el-radio label="保密"></el-radio>
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="生日:">
        <el-date-picker type="date" v-model="form.date" style="width: 100%;" @change="chanceDate()"></el-date-picker>
      </el-form-item>
      <el-form-item label="地区:">
        <el-select v-model="form.area1" @change="selectArea1()">
          <el-option
            v-for="item in area"
            :key="item.areaId"
            :value="item.areaName">
          </el-option>
        </el-select>
        <el-select v-model="form.area2" @change="selectArea2()">
          <el-option
            v-for="item in area2"
            :key="item.areaId"
            :value="item.areaName">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit()">保存</el-button>
        <el-button @click="onCancel()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import area from '@/data/area.js';
  // import qs from 'qs';
  export default {
    name:'information',
    data() {
      return {
        form: {
          avatar: '',
          name: '',
          sex: '',
          date: '',
          desc: '',
          area1: '',
          area2: ''
        },
        // submit:{
        //   nickname:'',
        //   signature:'',
        //   gender:'',
        //   birthday:'',
        //   province:'',
        //   city:'',
        // },
        params: new URLSearchParams(),
        area:area,
        area2:[]
      }
    },
    methods: {
      onSubmit() {
        this.$http.post('/user/update',this.params)
        .then(res=>{
          console.log(res);
        }).catch(err=>alert(err))
        // this.$http.get('/user/update',{params:this.submit})
        // .then(res=>{
        //   console.log(res);
        // }).catch(err=>alert(err))
      },
      onCancel(){
        // this.$router.go(-1)
        this.$router.back(-1);
      },
      chanceName(){
        // this.submit.nickname = this.form.name;
        this.params.set('nickname',this.form.name);
      },
      chanceDesc(){
        // this.submit.signature = this.form.desc;
        this.params.set('signature',this.form.desc);
      },
      chanceDate(){
        // this.submit.birthday = new Date(this.form.date).getTime();
        this.params.set('birthday',new Date(this.form.date).getTime());
      },
      chanceSex(){
        if(this.form.sex == '男'){
          this.params.set('gender','1');
          // this.submit.gender = 1;
        }else if(this.form.sex == '女'){
          this.params.set('gender','2');
          // this.submit.gender = 2;
        }else{
          this.params.set('gender','0');
          // this.submit.gender = 0;
        }
      },
      selectArea1() {
        for(var i in this.area){
          if(this.area[i].areaName == this.form.area1){
            this.area2 = this.area[i].child;
            this.form.area2 = this.area[i].child[0].areaName;
            this.params.set('province',this.area[i].areaId);
            this.params.set('city',this.area[i].child[0].areaId);
            // this.submit.province = this.area[i].areaId;
            // this.submit.city = this.area[i].child[0].areaId;
          }
        }
      },
      selectArea2() {
        for(var i in this.area2){
          if(this.area2[i].areaName == this.form.area2){
            // this.submit.city = this.area2[i].areaId;
            this.params.set('city',this.area2[i].areaId);
          }
        }
      }
    },
    created(){
      this.$http.get('/user/detail',{params:{uid:this.$store.state.userId}})
      .then(res=>{
        //头像
        this.form.avatar = res.data.profile.avatarUrl;
        //昵称
        this.form.name = res.data.profile.nickname;
        // this.submit.nickname = res.data.profile.nickname;
        this.params.append('nickname',res.data.profile.nickname);
        //简介
        this.form.desc = res.data.profile.signature;
        // this.submit.signature = res.data.profile.signature;
        this.params.append('signature',res.data.profile.signature);
        //性别
        if(res.data.profile.gender == 1){
          this.form.sex = '男';
        }else if(res.data.profile.gender == 2){
          this.form.sex = '女';
        }else{
          this.form.sex = '保密';
        }
        // this.submit.gender = res.data.profile.gender;
        this.params.append('gender',res.data.profile.gender);
        //生日
        this.form.date = (new Date(res.data.profile.birthday)).toLocaleDateString().replace(/\//g, "-");
        // this.submit.birthday = res.data.profile.birthday;
        this.params.append('birthday',res.data.profile.birthday);
        //地区
        for(var i in this.area){
          if(this.area[i].areaId == res.data.profile.province){
            this.form.area1 = this.area[i].areaName;
            // this.submit.province = res.data.profile.province;
            this.params.append('province',res.data.profile.province);
            this.area2 = this.area[i].child;
            for(var j in this.area2){
              if(this.area2[j].areaId == res.data.profile.city){
                this.form.area2 = this.area2[j].areaName;
                // this.submit.city = res.data.profile.city;
                this.params.append('city',res.data.profile.city);
              }
            }
          }
        }
      }).catch(err=>alert(err))
    }
  }
</script>

<style scoped>
  .information{width:90%;margin:10px auto;}
  .information>header{width:100%;border-bottom:1px solid #bbb;font-size:20px;height:30px;margin:30px 0;}
</style>
