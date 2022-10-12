<template>
	<view class="ly_input">
		<input type="text" style="width: 50%;" value="" placeholder="说点什么" v-model="searchName" @confirm="result" />
		<view class="" @click="result">
			<!-- <view class="commentIndex">
				99
			</view> -->
			<!-- <view class=""> -->
				评论
			<!-- </view> -->
		</view>
		<view class=""  @click="like">
			收藏
		</view>
		<!-- <view class="" @click="share">
			分享
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchName:''
			};
		},
		methods:{
			result(e) {
				// 点击发送评论,之后输入值置为空
				let data = {
					content:this.searchName
				}
				this.$emit('result', data, 1)
				this.searchName = ''
			},
			like(){
				// 页面点赞事件参数传递
				this.$emit('like', '页面点赞事件参数传递')
			},
			share(){
				// 分享事件调用
				this.$emit('share', '分享事件调用')
			}
		}
	}
</script>

<style lang="less">
	page{
		width: 100vw;
		height: 100vh;
	}
	.ly_input{
		height: 150rpx;
		width: 750rpx;
		position: fixed;
		bottom: 10px;
		box-shadow: -2rpx -6rpx 13rpx 0rpx rgba(0, 0, 0, 0.09);
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		input{
			width: 250rpx;
			height: 60rpx;
			border-radius: 30rpx;
			border: 1rpx solid #2C405A;
			padding-left: 10rpx;
		}
		.comment{
			font-size: 28rpx;
			color: #000;
			position: relative;
			.commentIndex{
				height: 20rpx;
				position: absolute;
				color: #FFFFFF;
				background: #DD524D;
				padding: 0 10rpx;
				font-size: 14rpx;
				border-radius: 10rpx;
				text-align: center;
				right: -10rpx;
				top: 0;
			}
		}
	}
	
</style>
