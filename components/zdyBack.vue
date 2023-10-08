<template>
	<view>
		<view class="toBack">
			<image class="arrow-icon" src="../static/left.png"
				@click="navigateBack"></image>
			<view class="title"> {{title}}</view>
			<view class="more"> </view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			url: {
				type: String,
				default: () => {
					return ''
				}
			},
			title: {
				type: String,
				required: false,
				default: ''
			}
		},
		methods: {
			/**
			 * @description: H5 App通用方案 解决H5刷新返回失败问题
			 * @param {*} params
			 */
			navigateBack() {
				uni.switchTab({
					url:this.url
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.toBack {
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		padding: 70rpx 20rpx;
		width: 100%;
		height: calc(96rpx + 20px);
		background-color: #ededed;
		text-align: center;
		font-size: 32rpx;
		font-weight: 400;
		color: #333333;
		border-top: 1px solid #FFF8F8F8;

		.arrow-icon {
			width: 40rpx;
			height: 40rpx;
			margin: auto 0;
			line-height: 40rpx;
		}
		
		.title{
			font-weight: bold;
		}
	}
</style>