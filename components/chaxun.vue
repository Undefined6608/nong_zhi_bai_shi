<template>
	<view class="cx">
		<view class="com">
			<input :class="!isShow?'input_no':'input'" type="text" v-model="s_text" placeholder="请输入需要查询的内容">
			<button class="btn" :class="!isShow?'show':''">查询</button>
		</view>
	</view>
</template>

<script>
	export default {
		name:"chaxun",
		data() {
			return {
				s_text:"",
				isShow:false,
			};
		},
		watch:{
			s_text(){
				if(this.s_text==""){
					this.isShow = false;
				}else{
					this.isShow = true;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.cx{
		width: 100vw;
		height: 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #f5f5f5;
		
		.com{
			width: 80%;
			height: 30px;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			.input{
				width: 70%;
				height: 30px;
				border: 1px solid #ccc;
				border-top-left-radius: 15px;
				border-bottom-left-radius: 15px;
				padding-left: 10px;
			}
			.input_no{
				width: 100%;
				height: 30px;
				border: 1px solid #ccc;
				border-radius: 15px;
				padding-left: 10px;
			}
			.btn{
				display: block;
				width: 25%;
				height: 32px;
				background-color: #003472;
				color: #fff;
				line-height: 32px;
				font-size: 15px;
				border-radius: 0;
				border-top-right-radius: 15px;
				border-bottom-right-radius: 15px;
			}
			
			.show{
				display: none;
			}
		}
	}
</style>