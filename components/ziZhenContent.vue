<template>
	<view class="zi_zhen_content">
		<uni-section class="select" :title="item.name" type="line" padding v-for="(item,index) in list" :key="index">
			<view class="list">
				<view class="item" v-for="(item2,index2) in item.inner" :key="index2" @click="pop(item2.id)">
					<image class="icon" :src="item2.icon" mode=""></image>
					<text class="drup_name">{{item2.name}}</text>
				</view>
			</view>
		</uni-section>
	</view>
</template>

<script>
import { ziZhenList } from '@/common/api';
	export default {
		name:"ziZhenContent",
		data() {
			return {
				
			};
		},
		methods:{
			pop(id){
				this.$emit("show",true);
			}
		},
		computed:{
			list(){
				return ziZhenList();
			}
		}
	}
</script>

<style lang="less" scoped>
	.zi_zhen_content{
		width: 95vw;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		
		.select{
			width: 100%;
			height: auto;
			margin-bottom: 20px;
			box-shadow: 0 0 10px #ccc;
			border-radius: 10px;
			overflow: hidden;
			
			.list{
				width: 100%;
				height: auto;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				align-items: center;
				
				.item{
					width: 22%;
					height: 80px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-around;
					background-color: #f3f9f1;
					box-shadow: 0 0 10px #ccc;
					margin-top: 20px;
					
					.icon{
						width: 60px;
						height: 45px;
					}
					
					.drup_name{
						font-size: 13px;
					}
				}
			}
		}
	}
</style>