 <template>
  <aplayer
    :audio="audio"
    :lrcType="0"
    fixed
    ref="player"
    storageName="aplayer"
    @listSwitch="handleSong"
  />
 </template>

 <script>
/* eslint-disable */
 export default {
  data() {
    return {
      audio: this.$store.state.list,
      now: {},
      aplayer:JSON.parse(localStorage.aplayer)[1],
      index:this.$store.state.songIndex
    };
  },
  methods:{
    handleSong:function(){
      this.$store.commit('listAdd',this.$refs.player.currentMusic);
    }
  },
  // computed: {
  //   watchCurrentTime () {
  //     console.log($store.state.);
  //     // console.log(JSON.parse(localStorage.aplayer)[1]);
  //     return this.$refs.player;
  //   }
  // },
	watch:{
    // watchCurrentTime () {
    //   console.log(this.aplayer);
    //   console.log(this.$refs.player.currentTime);
    // },
		'$store.state.list':function(){
			this.audio = this.$store.state.list;
			this.$refs.player.switch(this.$store.state.now.name);
		},
		'$store.state.play':function(){
			if(this.$store.state.play){
				this.$refs.player.play();
			}else{
				this.$refs.player.pause();
			}
		},
    '$store.state.next':function(){
      this.$refs.player.skipForward();
    },
		'$store.state.now':function(){
			this.now = this.$store.state.now;
		},
		'$store.state.songIndex':function(){
			this.$refs.player.switch(this.$store.state.now.name);
		}
	},
  // mounted(){
  //   // console.log(this.aplayer);
  //   const { media } = this.$refs.player;
  //   console.log(media.currentTime);
  //   console.log(this.$refs.player.currentMusic);
  // }
 };
 </script>
