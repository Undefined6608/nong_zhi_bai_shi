<template>
	<view class="b_c_h_z_z_d">
		<uni-section class="s" :title="item.type" type="line" padding v-for="(item,index) in list" :key="index">
			<view class="list">
				<view class="item" v-for="(item1,index1) in item.rows" :key="index" @click="go(item1.id)">
					<image class="icon" :src="item1.icon" mode=""></image>
					<text class="name">{{item1.name}}</text>
				</view>
			</view>
		</uni-section>
	</view>
</template>

<script>
import { getNyList } from '@/common/api'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			go(id){
				uni.navigateTo({
					url:'/pages/bchInner/bchInner?id='+id
				})
			}
		},
		computed:{
			list(){
				return getNyList();
			}
		}
	}
</script>

<style lang="less" scoped>
	.b_c_h_z_z_d{
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		
		.s{
			width: 95%;
			height: auto;
			margin: 10px auto;
			box-sizing: border-box;
			box-shadow: 0 2px 10px #ccc;
			border-radius: 10px;
			overflow: hidden;
			
			.list{
				width: 100%;
				height: auto;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				
				
				.item{
					width: 23%;
					height: 100px;
					margin: 1%;
					box-sizing: border-box;
					box-shadow: 0 0 10px #ccc;
					border-radius: 10px;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					
					.icon{
						width: 60px;
						height: 60px;
						border-radius: 30px;
						box-sizing: border-box;
						box-shadow: 0 0 10px #ccc;
					}
					
					.name{
						width: 70%;
						height: 25px;
						line-height: 25px;
						text-align: center;
						background-color: #f0fcff;
						border-radius: 12.5px;
					}
				}
			}
		}
	}
</style>
