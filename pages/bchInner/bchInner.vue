<template>
	<view class="bchInner">
		<view class="title">
			<image class="icon" :src="list.icon" mode=""></image>
			<text class="name">{{list.name}}</text>
		</view>
		<uni-section class="se" title="类型" type="circle" padding>
			<text class="type">{{list.type}}</text>
		</uni-section>
		<uni-section class="se" title="物品介绍" type="line" padding>
			<text class="context">{{list.context}}</text>
		</uni-section>
		<uni-section class="se" title="防治方法" type="square" padding>
			<text class="pac">{{list.prevention_and_cure}}</text>
		</uni-section>
	</view>
</template>

<script>
	import {
		getNyList
	} from '@/common/api';
	export default {
		data() {
			return {
				id: 0,
				list: {
					id: 0,
					name: "",
					icon: "",
					type: "",
					context: "",
					prevention_and_cure: "暂无防治方法"
				}
			};
		},
		methods: {
			getLsit(id) {
				let array = getNyList();
				setTimeout(()=>{
					for (var i = 0; i < array.length; i++) {
						for (var j = 0; j < array[i].rows.length; j++) {
							// console.log(array[i].rows[j]);
							if (array[i].rows[j].id == id) {
								this.list = array[i].rows[j];
							}
						}
					}
				},500)
			}
		},
		onLoad(res) {
			this.id = Number.parseInt(res.id);
			this.getLsit(this.id);
		}
	}
</script>

<style lang="less" scoped>
	.bchInner{
		width: 95%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 10px auto;
		border-radius: 20px;
		box-sizing: border-box;
		box-shadow: 0 0 10px #aaa;
		overflow: hidden;
		
		.title{
			width: 100%;
			height: 150px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			background-color: #e9f1f6;
			
			.icon{
				width: 100px;
				height: 100px;
				border-radius: 50px;
				box-sizing: border-box;
				box-shadow: 0 0 10px #aaa;
				margin-top: 10px;
			}
			
			.name{
				width: 100px;
				height: 30px;
				line-height: 30px;
				font-size: 15px;
				font-weight: bold;
				text-align: center;
			}
		}
		
		.se{
			width: 95%;
			height: auto;
			margin:10px auto;
			box-sizing: border-box;
			box-shadow: 0 0 10px #ccc;
			border-radius: 10px;
			overflow: hidden;
		}
	}
</style>