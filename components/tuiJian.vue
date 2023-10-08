<template>
	<view class="tuijian">
		<view class="item" :class="index%2==0?'back_ground1':'back_ground2'" v-for="(item,index) in list" :key="index"
			@click="go(item.url,index)">
			<image class="img" :src="item.avatar" mode=""></image>
			<view class="msg">
				<text class="title">{{item.title}}</text>
				<text class="context">( {{item.content}} )</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		TuiJianList
	} from '@/common/api.js'
	export default {
		name: "tuiJian",
		data() {
			return {

			};
		},
		methods: {
			go(load_url, index) {
				if (index == 1) {
					uni.navigateTo({
						url: load_url
					})
					return;
				}
				uni.switchTab({
					url: load_url
				})
			}
		},
		computed: {
			list() {
				return TuiJianList();
			}
		}
	}
</script>

<style lang="less" scoped>
	.tuijian {
		width: 95vw;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 30px;

		.item {
			width: 100%;
			height: 120px;
			border-radius: 20px;
			box-shadow: 0 0 20px #ccc;
			margin-bottom: 30px;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-around;

			.img {
				width: 60px;
				height: 60px;
			}

			.msg {
				width: 70%;
				height: 70%;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-around;

				.title {
					font-size: 20px;
					font-weight: bold;
				}

				.context {
					margin-left: 40px;
					font-size: 15px;
					color: #a0a0a0;
				}
			}
		}

	}
</style>