<template>
	<view class="pop_out" @click="bottom" catchtouchmove="true">
		<view class="pop_view" @click.stop="inner">
			<image class="img" :src="list.avatar"></image>
			<text>名称：{{list.name}}</text>
			<uni-section class="msg" title="动/植物介绍" type="line" padding>
				<text class="context">{{list.context}}</text>
			</uni-section>
			<uni-section class="section" title="推荐药品" type="line" padding>
				<view class="list">
					<view class="item" v-for="(item,index) in list.drug" :key="index" @click="se(index)">
						<image class="icon" :src="item.icon" mode=""></image>
						<text class="drup_name">{{item.name}}</text>
					</view>
				</view>
			</uni-section>
		</view>
	</view>
</template>

<script>
	import {
		popList
	} from '@/common/api';
	export default {
		name: "picturePop",
		data() {
			return {
				typeRadio: 0,
			};
		},
		methods: {
			change(res) {
				console.log(res);
			},
			bottom() {
				this.$emit("show", false);
			},
			inner() {

			},
			se(res) {

			}
		},
		onLoad() {
			uni.$on('type', (res) => {
				this.typeRadio = Number.parseInt(res);
				console.log(res);
			})
		},
		computed: {
			list() {
				return popList(this.typeRadio, 0);
			}
		}
	}
</script>

<style lang="less" scoped>
	.pop_out {
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 2;

		.pop_view {
			width: 80%;
			height: 75%;
			background-color: #fff;
			border-radius: 10px;
			box-shadow: 0 0 10px #707070;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;

			.img {
				width: 50px;
				height: 50px;
				border-radius: 10px;
			}

			.msg {
				width: 90%;
				height: 150px;

				.context {
					font-size: 12px;
					text-indent: 2em;
				}
			}

			.section {
				width: 90%;
				height: 100px;
				box-shadow: 0 0 10px #ccc;

				.list {
					width: 100%;
					height: 40px;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-around;
					align-items: center;

					.item {
						width: 22%;
						height: 100%;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: space-around;

						.icon {
							width: 30px;
							height: 30px;
						}

						.drup_name {
							font-size: 10px;
						}
					}
				}
			}
		}
	}
</style>