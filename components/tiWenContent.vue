<template>
	<view class="ti_wen_content">
		<scroll-view class="scroll" scroll-y="true">
			<view class="content">
				<view class="group" v-for="(item,index) in msg_list" :key="index">
					<leftMsg class="left" :avatar="item.avatar" v-if="!item.load" :name="item.name"
						:message="item.message">
					</leftMsg>
					<rightMsg class="right" :avatar="item.avatar" v-else :name="item.name" :message="item.message">
					</rightMsg>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import leftMsg from '@/components/leftMsg.vue';
	import rightMsg from '@/components/rightMsg.vue';
	import {
		msgList
	} from '@/common/api';
	export default {
		data() {
			return {
				msg_list: [],
			};
		},
		methods: {
			getMsgList() {
				this.msg_list = msgList();
				// console.log(this.msg_list);
			},
		},
		computed: {

		},
		onLoad() {
			uni.$on("update", (update) => {
				this.getMsgList();
			})
		},
		mounted() {
			this.getMsgList();
		},
		components: {
			leftMsg,
			rightMsg
		}
	}
</script>

<style lang="less" scoped>
	.ti_wen_content {
		width: 95vw;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		.scroll {
			width: 100%;
			height: 100%;

			.content {
				width: 100%;
				height: auto;
				display: flex;
				flex-direction: column;

				.left {
					width: 80%;
					height: auto;
					position: relative;
					margin-left: 0;
					margin-top: 20px;

				}

				.right {
					width: 80%;
					height: auto;
					margin-top: 20px;
					margin-left: 20%;
					position: relative;
					right: 0;
				}
			}
		}
	}
</style>