<template>
	<div id="play-bar">
		<div class="play">
			<button class="play-btn"><i class="iconfont icon-shangyishou"></i></button>
			<button class="play-btn btn-center"><i class="iconfont icon-center icon-bofang"></i></button>
			<button class="play-btn"><i class="iconfont icon-xiayishou"></i></button>
			时间<span class="span1"></span>时间
			<i class="iconfont icon-other icon-shengyin_shiti"></i>
			<span class="span2"></span>
		</div>
		<div class="other">
			<button>标准</button>
			<i class="iconfont icon-other icon-ertongerbihou-shengyinyichang"></i>
			<i class="iconfont icon-other icon-geciweidianji"></i>
			<i class="iconfont icon-other icon-liebiao"></i>
		</div>
	</div>
</template>

<script>
export default{
	name:'playBar'
}
</script>

<style scoped>
*{padding:0;margin:0;}
#play-bar{position:fixed;bottom:0;left:0;display:flex;width:90%;height:70px;background:#ffffff;padding:0 5%;border-top:1px solid #dddddd;display:flex;align-items:center;}
.play{width:75%;display:flex;align-items:center;justify-content:space-around;}
.play-btn{width:30px;height:30px;border:none;border-radius:15px;background:firebrick;display:flex;justify-content:center;align-items:center;outline:none;}
.iconfont{padding-right:0 !important;font-size:16px;color:#ffffff;}
.btn-center{width:40px;height:40px;border-radius:20px;}
.icon-center{font-size:20px;}
.play>.span1{width:60%;height:5px;background:firebrick;}
.play>.span2{width:10%;height:5px;background:firebrick;}
.other{width:25%;display:flex;align-items:center;justify-content:space-around;}
.icon-other{color:#888888;font-size:20px;}
</style>
