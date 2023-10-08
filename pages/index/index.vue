<template>
	<view class="container">
		<banner class="banner"></banner>
		<tuiJian class="tuijian"></tuiJian>
	</view>
</template>

<script>
	import banner from '@/components/banner.vue';
	import tuiJian from '@/components/tuiJian.vue';
	export default {
		data() {
			return {
				
			}
		},
		methods: {

		},
		components:{
			banner,
			tuiJian
		}
	}
</script>

<style lang="less" scoped>
	.container{
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		
		.banner{
			width: 95vw;
			height: 235rpx;
		}
		
		.tuijain{
			width: 95vw;
			height: auto;
		}
		
		
	}
</style>
