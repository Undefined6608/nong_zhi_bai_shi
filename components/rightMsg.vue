<template>
	<view class="content">
		<view class="title">
			<text class="name">{{name}}</text>
			<image class="img" :src="avatar" mode=""></image>
		</view>
		<view class="msg">
			<text class="context">{{message}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "rightMsg",
		data() {
			return {

			};
		},
		props: ["avatar", "name", "message",]
	}
</script>

<style lang="less" scoped>
	.content {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;

		.title {
			width: auto;
			height: 60px;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: flex-end;

			.name {
				width: auto;
				height: 40px;
				margin: 0 10px;
				size: 15px;
				font-weight: bold;
				text-align: right;
				line-height: 40px;
			}
			
			.img {
				width: 40px;
				height: 40px;
				margin: 10px 0;
			}
		}

		.msg {
			width: 90%;
			height: auto;
			margin-left: 20px;
			background-color: #00bc12;
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