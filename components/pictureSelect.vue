<template>
	<view class="pic_select">
		<text>请选择或拍摄一张害虫/植物图片</text>
		<view class="picker">
			<uni-file-picker class="file_picker" limit="1" :image-styles="imageStyles" @select="select"></uni-file-picker>
		</view>
		<view>
			<radio-group @change="radioChange">
				<label class="radio">
					<radio value="0" checked="true" />
					害虫
					</label>
				<label class="radio">
					<radio value="1" />
					植物
				</label>
			</radio-group>
		</view>
	</view>
</template>

<script>
	export default {
		name: "pictureSelect",
		data() {
			return {
				imageStyles: {
					width: 100,
					height: 100,
					margin: '0 auto',
					border: {
						color: "#e7eaf5",
						width: 2,
						style: 'dashed',
						radius: '2px'
					}
				},
				radio:0
			};
		},
		methods:{
			radioChange(res){
				console.log(res);
				this.radio = Number.parseInt(res.detail.value);
				uni.$emit('type',this.radio);
			},
			select(res){
				console.log(res);
				this.$emit("show",true);
			}
		}
	}
</script>

<style lang="less" scoped>
	.pic_select {
		width: 95vw;
		height: 100%;
		box-shadow: 0 0 10px #ccc;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		background-color: #fcefe8;

		.picker {
			width: 90px;
			height: 90px;
			background-color: #fff;
			display: flex;
			flex-direction: column;

			.file_picker {
				width: 100%;
				height: 100%;
			}

		}
	}
</style>