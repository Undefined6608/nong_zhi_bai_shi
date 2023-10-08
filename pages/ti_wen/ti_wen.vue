<template>
	<zdyBack class="zdyBack" url="/pages/mian_fei_ti_wen/mian_fei_ti_wen" title="消息页面"></zdyBack>
	<view class="m_f_t_w">
		<tiWenContent class="ti_wen_content"></tiWenContent>
		<search class="search" @pChangeType="pageUpdate"></search>
	</view>
</template>

<script>
	import zdyBack from '@/components/zdyBack.vue';
	import search from '@/components/search.vue';
	import tiWenContent from '@/components/tiWenContent.vue';
	export default {
		data() {
			return {
				selectorID:0
			};
		},
		components: {
			search,
			tiWenContent,
			zdyBack
		},
		onBackPress() {
			this.back();
			return true;
		},
		methods: {
			back(){
				uni.switchTab({
					url:'/pages/mian_fei_ti_wen/mian_fei_ti_wen'
				})
			},
			/* 获取当前页带参数的url */
			splicePageUrlWithParams(obj) {
				const path = obj.route
				const query = obj.options
				// 拼接url的参数
				var urlWithParams = '/' + path + '?'
				for (let key in query) {
					const value = query[key]
					urlWithParams += key + '=' + value + '&'
				}
				urlWithParams = urlWithParams.substring(0, urlWithParams.length - 1)
				return urlWithParams
			},
			getPageUrl(lastIndex, withParams = true) {
				const pages = getCurrentPages()
				if (pages.length > 0 && pages.length >= lastIndex) {
					const thePage = pages.splice(-lastIndex, 1)[0]
					if (withParams) {
						return this.splicePageUrlWithParams(thePage)
					} else {
						return `/${thePage.route}`
					}
				} else {
					console.log('pages are empty or lastIndex error')
					return ''
				}
			},
			pageUpdate() {
				// 获取当前页面路由 具体请看该函数的实现
				const url = this.getPageUrl(1)
				uni.reLaunch({
					url,
					success: () => {
						// console.log('reload触发了!!!!!! url====>' + url)
					}
				})
			}
		},
		onLoad(res) {
			console.log(res);
			this.selectorID = Number.parseInt(res.id);
		}
	}
</script>

<style lang="less" scoped>
	.zdyBack{
		width: 100%;
		height: calc(96rpx + 20px);
		position: fixed;
		z-index: 2;
	}
	.m_f_t_w {
		width: 100vw;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #ededed;
		padding-top: calc(96rpx + 20px);

		.ti_wen_content {
			width: 95vw;
			height: auto;
			flex: 1;
			padding-bottom: 80px;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #eef1f9;
		}

		.search {
			width: 100vw;
			height: 60px;
			position: fixed;
			bottom: 0;
		}
	}
</style>