<template>
	<div class="Pages">
		<button @click="changePage">首页</button>
		<button @click="changePage">上一页</button>
		<button v-if="currentPage>5" @click="more" class="pre">...</button>
		<button v-for="(page,index) of pages" :key="index" @click="changePage(page)" :class="{current:page==currentPage}">{{page}}</button>
		<button @click="more" class="next">...</button>
		<button @click="changePage">下一页</button>
	</div>
</template>

<script>
/* eslint-disable */
export default {
	name:'Pages',
	data(){
		return{
			pages:[1,2,3,4,5],
			currentPage:1
		}
	},
	methods:{
		changePage(page){
			if(typeof page !='number'&& typeof page!='string'){
				switch(page.currentTarget.innerText){
					case '首页':
					this.pages=[1,2,3,4,5]
					this.changePage(1)
					break;
					case '上一页':
					if(this.currentPage > 3){
						this.pages=this.pages.slice(0,5).map(val=>val-1)
						this.currentPage=this.pages[2]
					}else if(this.currentPage <= 3 && this.currentPage >= 1){
						this.currentPage=this.currentPage-1;
					}
					break;
					case '下一页':
					if(this.currentPage > 3){
						this.pages=this.pages.slice(0,5).map(val=>val+1)
						this.currentPage=this.pages[2]
					}else if(this.currentPage <= 3 && this.currentPage >= 1){
						this.currentPage=this.currentPage+1;
					}
					break;
				}
				return
			}else{
				this.currentPage=page
				if(this.currentPage==this.pages[4]){
					this.pages.shift(0)
					this.pages.splice(4,0,this.pages[3]+1)
				}else if(this.currentPage==this.pages[0]&&this.currentPage!=1){
					this.pages.unshift(this.pages[0]-1)
					this.pages.splice(5,1)
				}				
			}
			this.$emit("sendPage",this.currentPage)
		},
		more(e){
			if(e.target.className=='pre'){
				this.pages=this.pages.slice(0,5).map(val=>val-2)
				this.currentPage=this.pages[2]
			}else{
				this.pages=this.pages.slice(0,5).map(val=>val+2)
				this.currentPage=this.pages[2]
			}	
			this.$emit("sendPage",this.currentPage)
		}
	}
}
</script>
<style scoped>
.Pages{	padding: 10px;}
.current{background-color:grey;color:white;}
button{width:50px;height: 25px;background-color: white;border:1px solid grey;vertical-align:middle}
button:focus{outline:none;}
</style>