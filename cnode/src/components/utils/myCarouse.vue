<template>
  <swiper :options="swiperOption">
	<swiper-slide v-for="(item,index) of imageList" :key="index">
		<img :src="item.imageUrl" />
	</swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
/* eslint-disable */
export default {
	name: 'myCarouse',
	data() {
      return {
		imageList:[],
        swiperOption: {
			speed:800,
			autoplay:2000,
			pagination: {
			    el:'.swiper-pagination',
			    type:'bullets',
			    hideOnClick:true,
			    clickable:true
			},
			navigation: {
			    nextEl:'.swiper-button-next',
			    prevEl:'.swiper-button-prev',
			    hideOnClick:true
			},
			loop:true
        }
      }
    },
	created(){
		this.$http.get('http://localhost:3000/banner')
		.then(res=>{
			this.imageList=res.data.banners
		}).catch(err=>alert(err))
	}
}
</script>

<style scoped>
img{width:auto;height:auto;max-width:100%;max-height:100%;}
</style>
