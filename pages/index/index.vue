<template>
	<view>
		<view class="header all" style="margin-top: 0px;">
			<view class="item">
				<uni-nav-bar :title="title" color="#ffffff" background-color="transparent" right-icon="scsan" @clickLeft="showmajor" @clickRight="scan">
					<block slot="left">
						<view class="major">
							<view><text class="uni-nav-bar-text">{{  }}</text></view>
							<!-- <uni-icons type="arrowdown" color="#ffffff" size="22" /> -->
						</view>
					</block>
				</uni-nav-bar>
			</view>
		</view>
		<view class="exam-content" style="margin-top: -15px;">
			<view class="bottom">
				<view class="left">
					<view class="pictrue">
						<image src="@/static/index/zs.png" mode=""></image>
						<view @click="record" class="text">百宝乡</view>
					</view>	
				</view>
				<view class="right">
					<view class="item">
						<view @click="simulation" class="text">三农服务</view>
					</view>
					<view class="item">
						<view @click="secret" class="text">村务通</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <lw-notice :showScale="true" :list="advanceListTwo"></lw-notice> -->
		<view class="formal">
			<view class="header">
				<view class="title">百宝乡</view>
			</view>
			<view class="list">
				<view class="item" @tap="goNext(index)" v-for="(item,index) in list1" :key="index">
					<image :src="item.img"></image>
					<view class="text">{{item.title}}</view>
				</view>
			</view>
		</view>
		<view class="formal">
			<view class="header">
				<view class="title">三农服务</view>
			</view>
			<view class="list">
				<view class="item" @tap="goNext(index)" v-for="(item,index) in list2" :key="index">
					<image :src="item.img"></image>
					<view class="text">{{item.title}}</view>
				</view>
			</view>
		</view>
		<view class="formal">
			<view class="header">
				<view class="title">村务通</view>
			</view>
			<view class="list">
				<view class="item" @tap="goNext(index)" v-for="(item,index) in list3" :key="index">
					<image :src="item.img"></image>
					<view class="text">{{item.title}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '乡界',
				major: '地区',
				list1:[{
						img: '/static/index/4s店.png',
						title: '农技'
					},{
						img: '/static/index/保险-01.png',
						title: '农资'
					},{
						img: '/static/index/PK-01.png',
						title: '就业需求'
					},{
						img: '/static/index/保险-01.png',
						title: '乡村野事'
					},{
						img: '/static/index/估值-01.png',
						title: '咨询'
					},{
						img: '/static/index/人.png',
						title: '本地服务'
					}],
				list2:[{
						img: '/static/index/汽车4s店.png',
						title: '生活农品'
					},{
						img: '/static/index/人.png',
						title: '亲子农旅'
					},{
						img: '/static/index/附近-01.png',
						title: '租房租地'
					},{
						img: '/static/index/推广.png',
						title: '农村美食'
					},{
						img: '/static/index/直通车.png',
						title: '名代特产'
					},{
						img: '/static/index/行驶-01.png',
						title: '农村XX'
					},{
						img: '/static/index/附近-01.png',
						title: 'XXXX'
					}],
				list3:[{
						img: '/static/index/汽车4s店.png',
						title: '政事发布'
					},{
						img: '/static/index/排行榜-01.png',
						title: 'XXXX'
					},{
						img: '/static/index/钱袋-01-01.png',
						title: '财务公开'
					},{
						img: '/static/index/AR-01.png',
						title: '村品展示'
					},{
						img: '/static/index/VR体验-01.png',
						title: '便民咨询'
					},{
						img: '/static/index/钱袋-01-01.png',
						title: '协商议事'
					}]
			}
		},
		onLoad() {

		},
		methods: {
			showmajor() {
				uni.showToast({
					icon: 'none',
					title: '点击了切换专业'
				});
			},
			scan(){
				uni.showToast({
					icon: 'none',
					title: '当前功能未开放'
				});
			},
			goNext(item) {
				console.log(item)
				if (item == 0) {
					uni.navigateTo({
						url: ''
					})
				} 
			},
			simulation() {
				console.log('to 三农')
				uni.switchTab({
					url: '../tabbar/tabbar-1/tabbar-1',
					fail (error) {
					        console.log(error)
					    }
				})
			},
			record() {
				console.log('to 百宝乡')
				uni.navigateTo({
					url: '/pages/tabbar/tabbar-1/tabbar-1',
					fail (error) {
					        console.log(error)
					    }
				})
			},
			secret() {
				console.log('to 村务通')
				uni.switchTab({
					url: '../tabbar/tabbar-1/tabbar-1',
					fail (error) {
					        console.log(error)
					    }
				})
			},
			entrance() {
				uni.navigateTo({
					url:'../tabbar/tabbar-1/tabbar-1'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%);
		background-attachment: fixed;
	}

	.header.all {
		background: linear-gradient(180deg, #4687FF, #79ACFF, #FFFFFF);

		.item {
			display: flex;
			height: 50px;
			padding: 0;
		}

		.card-swiper {
			height: 150px;
			width: 100%;
			box-sizing: border-box;
			padding: 0 20px;

			image {
				width: 100% !important;
				height: 150px;
			}
		}
	}

	.major {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		// width: 260px;
		margin-left: 4px;

		.uni-nav-bar-text {
			font-size: 28rpx;
		}
	}

	.list {
		border-radius: 10px;
		margin: 0 0px 10px;
		background-color: #FFFFFF;

		.item {
			display: inline-block;
			width: 25%;
			min-width: 0;
			padding-top: 15px;
			padding-bottom: 10px;
			text-align: center;
			cursor: pointer;

			image {
				height: 30px;
				width: 30px;
				touch-callout: none;
			}

			.text {
				margin-top: 6px;
				font-size: 12px;
				line-height: 16px;
				color: #282828;
			}
		}
	}

	.exam-content {
		margin: 10px 0px 10px;
		background-color: #fff;

		.header {
			height: 30px;

			.title {
				padding-left: 10px;
				line-height: 40px;
			}
		}

		.bottom {
			display: flex;
			margin-top: 10px;

			.left {
				width: 50%;
				height: 140px;
				border-top: 1px solid #dedede;
				padding-top: 10px;
				text-align: center;

				.pictrue {
					width: 75px;
					height: 75px;
					margin: 10px auto 0;

					image {
						display: block;
						width: 100%;
						height: 100%;
					}

					.text {
						margin-top: 10px;
						line-height: 30px;
						width: 90px;
						height: 30px;
						color: #fff;
						font-size: 14px;
						border-radius: 10px;
						background-color: #18b4ed;
					}
				}
			}

			.right {
				border-left: 1px solid #dedede;
				width: 50%;

				.item {
					display: flex;
					width: 100%;
					height: 70px;
					padding-right: 10px;
					padding-left: 10px;
					border-top: 1px solid #dedede;
					background: url('@/static/index/jilu.png') 30px center/20px 20px no-repeat;

					.text {
						text-align: center;
						vertical-align: middle;
						flex: 1;
						min-width: 0;
						font-size: 14px;
						line-height: 70px;

					}
				}

				.item~.item {
					margin-top: 10px;
					background: url('@/static/index/mijuan.png') 30px center/20px 20px no-repeat;
				}
			}
		}
	}

	.formal {
		background-color: #fff;

		.header {
			height: 40px;
			border-bottom: 1px solid #dedede;

			.title {
				padding-left: 10px;
				line-height: 40px;
			}
		}

		.bottom {
			display: flex;
			height: 100px;
			background: url('@/static/index/formal.png') 250px center/75px 75px no-repeat;

			.text {
				margin-left: 20px;

				.top {
					margin-top: 30px;
					font-size: 16px;
					font-weight: bold;
				}

				.bottom {
					font-size: 14px;
					color: #999;
				}
			}
		}
	}
</style>
