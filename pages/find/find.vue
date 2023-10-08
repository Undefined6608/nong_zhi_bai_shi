<template>
	<view class="find">
		<chaxun class="chaxun"></chaxun>
		<view class="select">
			<view class="item" v-for="(item,index) in list" :key="index" @click="positioning(item.id)">
				{{item.name}}
			</view>
		</view>
		<uni-section :id="'item'+item.id" class="section" :title="item.name" v-for="(item,index) in list" padding type="line" :key="index">
			<view class="list">
				<view class="item" v-for="(item1,index1) in item.rows" :key="index1">
					<image class="icon" :src="item1.icon" mode=""></image>
					<view class="name">
						<text>药品名称：</text>
						<text class="name_con">{{item1.name}}</text>
					</view>
					<view class="context">
						<text class="title">介绍：</text>
						<text class="content">{{item1.context}}</text>
					</view>
					<view class="context">
						<text class="title">用途：</text>
						<text class="content">{{item1.using}}</text>
					</view>
					<view class="shopping">
						<text class="title">购买：</text>
						<button class="btn">进入购买页面</button>
					</view>
				</view>
			</view>
		</uni-section>
	</view>
</template>

<script>
	import chaxun from "@/components/chaxun.vue";
	import {
		getFind
	} from "@/common/api";
	export default {
		data() {
			return {

			};
		},
		methods: {
			positioning(val) {
				uni.pageScrollTo({
					selector:'#item'+val,
					duration:500
				})
			}
		},
		computed: {
			list() {
				return getFind();
			}
		},
		components: {
			chaxun
		}
	}
</script>

<style lang="less" scoped>
	.find {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 40px;

		.chaxun {
			width: 100vw;
			height: 40px;
			display: flex;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 2;
		}

		.select {
			width: 95%;
			height: auto;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;

			.item {
				width: 20%;
				height: 25px;
				line-height: 25px;
				font-size: 12px;
				background-color: #e7eaf5;
				color: #000;
				margin: 5px;
				text-align: center;
				border-radius: 12.5px;
				box-sizing: border-box;
				box-shadow: 0 0 5px #aaa;
			}
		}

		.section {
			width: 95%;
			height: auto;
			margin: 10px auto;
			border-radius: 10px;
			overflow: hidden;

			.list {
				width: 100%;
				height: auto;
				display: flex;
				flex-direction: column;
				align-items: center;

				.item {
					width: 95%;
					height: auto;
					display: flex;
					flex-direction: column;
					align-items: center;
					margin: 10px auto;
					box-sizing: border-box;
					border-radius: 10px;
					box-shadow: 0 0 10px #ccc;

					.icon {
						width: 80px;
						height: 80px;
						border-radius: 40px;
						margin-top: 10px;
						box-sizing: border-box;
						box-shadow: 0 0 10px #ccc;
					}

					.name {
						width: 60%;
						height: 25px;
						line-height: 25px;
						margin-top: 5px;
						font-size: 13px;
						border-radius: 12.5px;
						background-color: #eef1f9;
						text-align: center;

						.name_con {
							font-weight: bold;
						}
					}

					.context,
					.shopping {
						width: 90%;
						height: auto;
						line-height: 30px;
						margin: 5px auto;
						font-size: 13px;
						display: flex;
						flex-direction: column;
						border: 1px dashed #ccc;
						border-radius: 10px;
						overflow: hidden;
						padding: 5px;
						box-sizing: border-box;
						box-shadow: 0 0 5px #aaa;

						.title {
							font-size: 15px;
							font-weight: bold;
						}

						.content {
							width: 95%;
							height: auto;
							margin: 10px auto;
						}

						.btn {
							width: 100px;
							height: 32px;
							font-size: 15px;
							line-height: 30px;
							margin: 10px auto;
							border: 0;
							background-color: #f2ecde;
							border-radius: 10px;
							box-sizing: border-box;
							box-shadow: 0 0 10px #ccc;
						}
					}
				}
			}
		}
	}
</style>