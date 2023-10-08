<template>
	<view class="m_f_t_w">
		<view class="selector">
			<view class="item" v-for="(item,index) in list" :key="index" @click="selectorClick(index)">
				<text class="selector_title" :class="selector==index?'s_title':''">{{item.selector}}</text>
			</view>
		</view>
		<mftwContent :i="selector"></mftwContent>
	</view>
</template>

<script>
	import mftwContent from '@/components/mftwContent.vue';
	import {
		mftwList
	} from '@/common/api';
	export default {
		data() {
			return {
				selector: 0
			};
		},
		methods: {
			selectorClick(index) {
				this.selector = index;
			}
		},
		computed: {
			list() {
				return mftwList();
			}
		},
		components:{
			mftwContent
		}
	}
</script>

<style lang="less" scoped>
	.m_f_t_w {
		width: 100vw;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		.selector {
			width: 100%;
			height: 35px;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			padding-top: 5px;
			position: fixed;
			background-color: #fff;
			z-index: 2;

			.item {
				flex: 1;
				height: 100%;
				display: flex;
				flex-wrap: wrap;
				align-items: center;

				.selector_title {
					width: 100%;
					height: 100%;
					font-size: 13px;
					line-height: 30px;
					font-family: "宋体";
					font-weight: bold;
					color: #505050;
					text-align: center;
					border-bottom: 1px solid #ccc;
				}

				.s_title {
					border-bottom: 2px solid #057748;
					color: #057748;
				}
			}
		}
	}
</style>