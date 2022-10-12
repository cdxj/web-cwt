<template>
	<view class="container">
		<editor class="ql-container" :placeholder="placeholder" @ready="onEditorReady" id="editor" @focus="editFocus" @blur="editBlur" ref="bwinEmoticonInput"></editor>
		<!-- 表情按钮 -->
		<view class="tool-wrap">
			<image class="face-btn" src="../../static/emotion.png" mode="aspectFill" @click="emoticonListShow = !emoticonListShow"></image>
			<button class="submit-btn" size="mini" type="primary" @click="submit()">发送</button>
		</view>

		<!-- 表情弹出 -->
		<view v-if="emoticonListShow" class="emoticon-list">
			<image v-for="(item, index) in emoticonList" class="emoticon" :src="item.src" mode="aspectFill" :key="index" @click="insertEmoticon(index)"></image>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 占位符
		placeholder: {
			type: String,
			default: '开始输入...'
		},
		// 初始化html
		html: {
			type: String
		}
	},
	computed: {},
	data() {
		return {
			emoticonListShow: false,
			emoticonList: [
				{
					name: 'nanguo',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/7c2ca206-2124-403b-b6a8-f51725e06bf8.png'
				},
				{
					name: 'keai',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/3b7e513a-b3c3-4d05-8a80-39699db73586.png'
				},
				{
					name: 'yukuai',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/6abf129f-3178-4cb0-84be-54002b693dd6.png'
				},
				{
					name: 'weixiao',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/0aba119c-de62-4b46-9dfd-cfd1f50b35d1.png'
				},
				{
					name: 'gaxiao',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/5044fb7a-8c15-4646-afcc-4fdefc0decb3.png'
				},
				{
					name: 'xiudaliao',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/ca3ce883-0910-471e-8e97-cdfeed575038.png'
				},
				{
					name: 'deyi',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/7c2ca206-2124-403b-b6a8-f51725e06bf8.png'
				},
				{
					name: 'zhiqi',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/f57104ed-be26-49ec-b9db-6a499d253225.png'
				},
				{
					name: 'kaixin',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/8f05e9dd-7b4d-4bd5-af09-1b36aa6c82d3.png'
				},
				{
					name: 'xiaoku',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/5272f514-a61b-4084-9e30-4d367b9874f8.png'
				},
				{
					name: 'nanshou',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/62a39d3e-7fac-471a-844a-4f925ebb92af.png'
				},
				{
					name: 'bulini',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/6d5f5b88-ddde-4f91-80cc-87a4cb9edb7d.png'
				},
				{
					name: 'bishi',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/ae3f0388-12d7-4e04-bb5b-66516ff79d5c.png'
				},
				{
					name: 'jiaxiao',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/6ec157a1-dd15-40c2-b19f-fc01b4f82221.png'
				},
				{
					name: 'bizui',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/efda4240-348a-4c90-a2cf-3ff0096db815.png'
				},
				{
					name: 'daku',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/2235540d-3faf-48cb-b4bd-37ff43fb0b78.png'
				},
				{
					name: 'liuhan',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/e3bd8a49-da46-442e-88a9-749e1ebc6393.png'
				},
				{
					name: 'aini',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/404b241d-5cf1-442a-8785-527f9c7c17ff.png'
				},
				{
					name: 'se',
					src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-57a97edc-bf2c-4a21-8f19-542cb2124eff/1e21e6d7-fe38-44b9-b5be-ac697bb02389.png'
				}
			],
			activeColor: '#F56C6C'
		};
	},
	created() {
		this.emoticonListTop = '140rpx';
	},
	mounted() {},
	methods: {
		onEditorReady(e) {
			uni.createSelectorQuery()
				.in(this)
				.select('.ql-container')
				.fields(
					{
						size: true,
						context: true
					},
					res => {
						this.editorCtx = res.context;
						this.editorCtx.setContents({
							html: this.html
						});
					}
				)
				.exec();
		},
		// 插入表情
		insertEmoticon(index) {
			let that = this;
			// 上传完成后处理
			this.editorCtx.insertImage({
				src: that.emoticonList[index].src, // 此处需要将图片地址切换成服务器返回的真实图片地址
				alt: that.emoticonList[index].name,
				width: '16px',
				height: '16px',
				extClass: 'emoticon-item',
				success: function(e) {}
			});
		},
		async editFocus(e) {},
		editBlur(e) {},
		submit() {
			this.showSettingLayer = false;
			this.editorCtx.getContents({
				success: res => {
					Object.assign(res, {
						isPublic: true
					});
					this.$emit('post', res.html);
				}
			});
			this.editorCtx.setContents({
				html: ''
			});
		}
	}
};
</script>

<style lang="scss">
.container {
	position: relative;
	display: flex;
	align-items: flex-start;

	.tool-wrap {
		z-index: 2;
		display: flex;
		align-items: center;

		.face-btn {
			width: 48rpx;
			height: 48rpx;
			margin-right: 20rpx;
		}
		.submit-btn {
			padding: 0 20rpx;
			font-size: 22rpx;
			margin: 0;
		}
	}
	.ql-container {
		z-index: 2;
		width: 530rpx;
		font-size: 28rpx;
		background: #fff;
		margin-right: 20rpx;
		border-radius: 10rpx;
		padding: 10rpx;
		height: auto;
		min-height: 40rpx;
		border: 1rpx solid #666;

		.emoticon-item {
			margin: 0 4rpx -4rpx 0;
		}
	}
	
	/* 表情选择窗口 */
	.emoticon-list {
		z-index: 1;
		position: absolute;
		top: -140rpx;
		left: -20rpx;
		height: 140rpx;
		overflow-y: scroll;
		background-color: #fff;
		transition: 0.3s all linear;
		width: 100%;
		padding: 20rpx;
	
		.emoticon {
			width: 48rpx;
			height: 48rpx;
			margin-right: 10rpx;
		}
	}
}


</style>
