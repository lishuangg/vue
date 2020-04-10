 <template>
   <aplayer :audio="audio" :lrcType="0" fixed ref="aplayer"/>
 </template>
 
 <script>
/* eslint-disable */
 export default {
    data() {
	    return {
		    audio: this.$store.state.list,
			now: {},
		};
    },
	watch:{
		'$refs.aplayer.currentMusic'(){
			console.log(this.$refs.aplayer.currentMusic);
		},
		'$store.state.list'(){
			this.audio = this.$store.state.list;
			this.$refs.aplayer.switch(this.$store.state.now.name);
		},
		'$store.state.play'(){
			if(this.$store.state.play){
				this.$refs.aplayer.play();
			}else{
				this.$refs.aplayer.pause();
			}
		},
		'$store.state.now'(){
			this.now = this.$store.state.now;
		},
		'$store.state.songIndex'(){
			this.$refs.aplayer.switch(this.$store.state.now.name);
		}
	}
 };
 </script>