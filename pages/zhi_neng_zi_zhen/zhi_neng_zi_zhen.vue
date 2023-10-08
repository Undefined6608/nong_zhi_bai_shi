<template>
	<view class="z_n_z_z">
		<pictureSelect class="pic" @show="popShow"></pictureSelect>
		<ziZhenContent class="zi_zhen" @show="popShow"></ziZhenContent>
		<picturePop class="pop" v-show="popDisplay" @show="popShow"></picturePop>
	</view>
</template>

<script>
	import pictureSelect from '@/components/pictureSelect.vue';
	import ziZhenContent from '@/components/ziZhenContent.vue';
	import picturePop from '@/components/picturePop.vue';
	export default {
		data() {
			return {
				popDisplay: false
			};
		},
		methods: {
			popShow(type) {
				this.popDisplay = type;
			}
		},
		components: {
			pictureSelect,
			ziZhenContent,
			picturePop
		}
	}
</script>

<style lang="less">
	.z_n_z_z {
		width: 100vw;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;

		.pic {
			width: 95%;
			height: 200px;
			margin-top: 10px;
		}

		.zi_zhen {
			width: 95%;
			flex: 1;
			margin: 20px auto;
		}

		.pop {
			position: absolute;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
		}
	}
</style>