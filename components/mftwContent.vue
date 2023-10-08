<template>
	<view class="mftw_content">
		<uni-section class="section" :title="item.type" type="line" padding v-for="(item,index) in array" :key="index">
			<view class="list">
				<view class="item" v-for="(item1,index1) in item.inner" :key="index1">
					<image class="img" :src="item1.icon" mode=""></image>
					<view class="msg">
						<text class="name">{{item1.name}}</text>
						<text class="type">{{item1.type}}</text>
						<text class="context">{{item1.context}}</text>
					</view>
					<text class="gz" :class="item1.is?'ygz':''">{{!item1.is?"+关注":"已关注"}}</text>
					<text class="tw" @click="tw(item1.id)">提问</text>
				</view>
			</view>
		</uni-section>
	</view>
</template>

<script>
	import {
		mftwList
	} from '@/common/api';
	export default {
		name: "mftwContent",
		data() {
			return {
				s_i: 0,
				array: [],
			};
		},
		computed: {
			list() {
				return mftwList();
			}
		},
		methods: {
			update(val) {
				this.array = this.list[Number.parseInt(val)].rows;
			},
			tw(val){
				uni.navigateTo({
					url:'/pages/ti_wen/ti_wen?id='+val
				})
			}
		},
		props: ["i"],
		watch: {
			i(curVal, oldVal) {
				this.s_i = Number.parseInt(curVal);
				this.update(this.s_i);
			}
		},
		mounted() {
			this.update(0);
		},
	}
</script>

<style lang="less" scoped>
	.mftw_content {
		width: 100vw;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20px;

		.section {
			width: 100%;
			height: auto;
			margin-top: 20px;

			.list {
				width: 100%;
				height: auto;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin: 0 auto;

				.item {
					width: 100%;
					height: 80px;
					margin-bottom: 10px;
					box-shadow: 0 0 10px #ccc;
					border-radius: 5px;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-around;
					align-items: center;

					.img {
						width: 60px;
						height: 60px;
						border-radius: 30px;
						margin-left: 5px;
					}

					.msg {
						flex: 1;
						height: 60px;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						align-items: center;
						margin: 0 5px;

						.name,
						.type,
						.context {
							font-family: "宋体";
							width: 100%;
						}

						.name {
							font-size: 13px;
							font-weight: bold;
						}

						.type {
							font-size: 12px;
						}
						
						.context{
							font-size: 10px;
							color: #6a6a6a;
						}
					}

					.gz,
					.tw {
						width: 50px;
						height: 20px;
						font-size: 13px;
						line-height: 20px;
						text-align: center;
						margin-right: 5px;
					}

					.gz {
						color: #eacd76;
						border: 2px solid #eacd76;
					}
					.ygz{
						color: #ccc;
						border: 2px solid #ccc;
					}

					.tw {
						color: #21a675;
						border: 2px solid #21a675;
					}
				}
			}
		}
	}
</style>