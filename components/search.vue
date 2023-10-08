<template>
	<view class="search">
		<input class="msg" type="text" v-model="msg1.message" placeholder="请输入您的问题">
		<button class="btn" @click="req">发送</button>
	</view>
</template>

<script>
	import {msglist} from '@/common/api.js';
	export default {
		name: "search",
		data() {
			return {
				msg1:{
					load: true,
					avatar: "../static/uni.png",
					name: "用户",
					message: ""
				},
				msg2:{
					load: false,
					avatar: "../static/uni.png",
					name: "电脑",
					message: "暂无回答"
				}
			};
		},
		methods: {
			req(){
				msglist.push(this.msg1);
				msglist.push(this.msg2);
				uni.$emit("update","");
				this.$emit("pChangeType");
			}
		}
	}
</script>

<style lang="less" scoped>
	.search{
		width: 100vw;
		height: 60px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		background-color: #ededed;
		border-top: 2px solid #aaa;
		
		.msg{
			width: 65%;
			height: 40px;
			border: 1px solid #ccc;
			border-radius: 15px;
			background-color: #fff;
			padding-left: 10px;
			margin-left: 10px;
		}
		
		.btn{
			width: 25%;
			height: 40px;
			border-radius: 20px;
			background-color: cornflowerblue;
			color: #fff;
			line-height: 40px;
		}
	}
</style>