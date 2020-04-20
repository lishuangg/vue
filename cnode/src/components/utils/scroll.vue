<template>
  <ul class="scroll">
    <li v-for="(item,index) in lyric" :key="index" v-html="item" class=""></li>
  </ul>
</template>

<script>
export default{
  name:'scroll',
  props:["lyric"],
  data(){
    return{

    }
  },
  methods:{
    lyricScroll:function(){
      // console.log(this.$props.lyric);
      for(var index in this.$props.lyric){
        console.log(index);
        console.log(this.$props.lyric[index]);
      }
    }
  },
  created(){
    this.lyricScroll();
  }
}
</script>

<style scoped>
*{padding:0;margin:0;}
.scroll{width:100%;height:370px;overflow-y:auto};
</style>
