<template>
	<view class="content">
		<view class="title">
			<image class="img" :src="avatar" mode=""></image>
			<text class="name">{{name}}</text>
		</view>
		<view class="msg">
			<text class="context">{{message}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"leftMsg",
		data() {
			return {
				
			};
		},
		props:["avatar","name","message"]
	}
</script>

<style lang="less" scoped>
	.content{
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		
		.title{
			width: auto;
			height: 60px;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			
			.img{
				width: 40px;
				height: 40px;
				margin: 10px 0;
			}
			
			.name{
				width: auto;
				height: 40px;
				margin-left: 10px;
				size: 15px;
				font-weight: bold;
				text-align: left;
				line-height: 40px;
			}
		}
		
		.msg{
			width: 90%;
			height: auto;
			margin-left: 20px;
			background-color: #fff;
			border-radius: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			
			.context{
				width: 90%;
				height: auto;
				size: 12px;
				line-height: 40px;
				white-space: normal;
				word-break: break-all;
				word-wrap: break-word;
			}
		}
	}
</style>