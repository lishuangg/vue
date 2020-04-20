<template>
	<div class="privateFM">
    <div class="fm-left">
      <img :src="nowSong.cover" alt="">
      <div class="icon">
        <i class="iconfont icon-xin"></i>
        <i class="iconfont icon-lajitong"></i>
        <i class="iconfont icon-xiayiqu101" @click="nextSong"></i>
        <i class="iconfont icon-other"></i>
      </div>
    </div>
    <div class="fm-right">
      <h2>{{nowSong.name}}</h2>
      <div>
        <span>专辑：{{nowAlbum}}</span>
        <span>歌手：{{nowSong.artist}}</span>
      </div>
      <scroll :lyric="lyric"></scroll>
    </div>
  </div>
</template>

<script>
import scroll from '../utils/scroll.vue';
export default{
  name:'privateFM',
  components:{'scroll':scroll},
  data(){
    return {
      songList:[],
      albumList:[],
      nowAlbum:'',
      nowSong:{},
      songurl:'',
      lyric:{}
    }
  },
  methods:{
    getSongList:function(){
      this.$http.get('/personal_fm')
      .then(res => {
        for(var i in res.data.data){
          this.albumList.push(res.data.data[i].album.name);
          this.nowAlbum = this.albumList[0];
          let obj = {
            id:res.data.data[i].id,
            name:res.data.data[i].name,
            artist:res.data.data[i].album.artists[0].name,
            cover:res.data.data[i].album.picUrl,
            url:''
          };
          this.$http.get('/song/url',{params:{id:res.data.data[i].id}})
          .then(res=>{
            obj.url = res.data.data[0].url;
          }).catch(err=>alert(err))
          this.songList.push(obj);
        }
        this.nowSong = this.songList[0];
        this.getLyric(this.nowSong.id);
      }).catch(err=>alert(err))
    },
    songStart:function(){
      this.getSongList();
      this.$store.commit('listClear');
      this.$store.commit('listPlayAll',this.songList);
      this.$store.commit('listAdd',this.nowSong);
      this.$store.commit('playSong');
      this.$store.commit('songIndexChange',0);
    },
    getLyric:function(id){
      this.$http.get('/lyric',{params:{id:id}})
      .then(res=>{
        this.lyric = this.parLyc(res.data.lrc.lyric)
      }).catch(err=>alert(err))
    },
    parLyc:function(lrc) {//解析歌词
      var lyrics = lrc.split("\n");
        var obj = {};
        for(var i=0;i<lyrics.length;i++){
          var lyric = decodeURIComponent(lyrics[i]);//对 encodeURIComponent() 函数编码的 URI 进行解码
          var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
          var timeRegExpArr = lyric.match(timeReg);
          if(!timeRegExpArr)continue;
          var clause = lyric.replace(timeReg,'&#8197;');
          for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
            var t = timeRegExpArr[k];
            var min = Number(String(t.match(/\[\d*/i)).slice(1)),
              sec = Number(String(t.match(/\:\d*/i)).slice(1));
            var time = min * 60 + sec;
            obj[time] = clause;
          }
        }
      return obj;
    },
    nextSong:function(){
      if(this.$store.state.next >= 2){
        this.songStart();
        this.$store.commit('changeNext');
      }else{
        this.$store.commit('nextSong');
      }
    }
  },
  created(){
    this.songStart();
  },
  computed: {
    getStoreItem () {
      return this.$store.state.now
    }
  },
  watch: {
    getStoreItem () {
      this.nowSong = this.$store.state.now;
    }
  }
}
</script>

<style scoped>
.privateFM{width:90%;margin:20px auto;display:flex;justify-content:space-between;}
.fm-left{width:35%;padding:30px 10% 30px 5%}
.fm-left>img{width:100%;height:auto;}
.fm-left .icon{width:100%;padding:15px 0;display:flex;justify-content:space-around;}
.fm-left .icon .iconfont{border:1px solid #ddd;padding:10px;border-radius:50%;}
.fm-left .icon .iconfont:hover{cursor:pointer;}
.fm-right{width:45%;padding-right:5%;}
.fm-right h2{font-weight:normal;}
.fm-right div{width:100%;padding:10px 0;display:flex;flex-direction:column;}
ul,li{list-style:none;font-size:14px;color:#888;}
/* .fm-right .lyric{width:100%;height:400px;overflow-y:auto} */
</style>
