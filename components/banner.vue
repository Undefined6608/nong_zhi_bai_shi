<template>
	<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"  >
		<swiper-item v-for="(item,index) in banner" :key="index">
			<view class="swiper-item"><image class="img" :src="item"></image></view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name:"banner",
		data() {
			return {
				banner:["../static/banner-1.jpeg","../static/banner-2.jpeg","../static/banner-3.jpeg"]
			};
		}
	}
</script>

<style lang="less" scoped>
	.swiper{
		width: 95vw;
		height: 235rpx;
		margin-top: 10px;
		
		.swiper-item{
			width: 100%;
			height: 100%;
			border-radius: 20px;
			overflow: hidden;
			
			.img{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>