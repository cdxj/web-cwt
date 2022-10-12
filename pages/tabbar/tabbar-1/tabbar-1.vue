  <template>
 	<view>
 		<!-- 状态栏 -->
 		<view class="status" :style="{position:headerPosition}"></view>
 		<!-- 漂浮头部 -->
 		<view class="header" style="" >
 			<view class="scan">
 				<!-- <view class="icon scan" @tap="scan"></view> -->
 				<!-- <uni-icons type="location-filled" color="white" size="20"></uni-icons> -->
 				<!-- <view v-if="userInfo.managerPart" style="font-size: 12;">
 					{{userInfo.managerPart}}
 				</view>	 -->
 				<view  style="margin-left: 70px;">
 					 <uni-data-select
 						  v-model="value"
 						  :localdata="range"
 						  @change="change"
 						  placeholder="地址"
 						  class='select'
						  style="width: 100px;font-size: 8px;"
 						></uni-data-select>
 						<!-- 						   -->
 				</view>	
 			</view>
 			<view style="margin-left: 65px;width:550px" class="input">
 				<view class="icon search"></view>
 				<input placeholder="热点新闻" @tap="toSearch()" />
 			</view>
 			<!-- <view style="margin-left: 35px;" class="input">
 				<view class="icon search"></view>
 				<input placeholder="热点新闻" @tap="toSearch()" />
 			</view> -->
 			<view class="menu">
 				<!-- <image mode="widthFix" src="/static/HM-shophome/face.png"></image> -->
				<!-- <u-icon name="edit-pen-fill" @click="edit" color="#e4d002" size="54"></u-icon> -->
 			</view>
 		</view>
 		<!-- 占位 -->
 		<view class="place"></view>
 		<!-- 轮播图 -->
 		<view class="swiper-view">
 			<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true" indicator-active-color="#ffffff">
 				<swiper-item v-for="swiper in swiperList" :key="swiper.sid" @tap="toSwiper(swiper)">
 					<image mode="aspectFill" :src="swiper.img"></image>
 				</swiper-item>
 			</swiper>
 			<view class="keep-out"></view>
 		</view>
 		<view class="category">
 			<view class="box" >
 				<swiper	class="swiper" duration="300" :style="{ height: categoryHeight }" @change="categoryChange">
 					<swiper-item v-for="(page, pageindex) in categoryList" :key="pageindex" >
 						<view  class="category-list">
 							<view style="height: 80px;" class="icon"  v-for="category in page" :key="category.cat_id" @tap="toCategory(category)">
 								<image mode="widthFix" :src="category.img" @load="categoryImgLoad"></image>
 								<view>{{ category.title }}</view>
 							</view>
 						</view>
 					</swiper-item>
 				</swiper>
 			</view>
 		</view>
 		<!-- 推荐 -->
 		<view class="pick">
 			<view class="box">
 				<view class="title">
 					<view class="big">文章推荐</view>
 				</view>
 			</view>
 		</view>
 		<!-- 文章列表 -->
 		<view class="goods-list">
			 <u-sticky style="padding: 0 10px;" bgColor="#fff">
			     <u-tabs :current="tabs" :list="list1" @click="changeTab"></u-tabs>
			   </u-sticky>
 			<view class="product-list">
 				<view class="product" v-for="(paper,i) in paperList" :key="i" @tap="toGoods(paper)">
					<navigator class="item" hover-class="none" :url="'/pages/details/details?id=' + paper.docid">
						<image mode="widthFix" :src="paper.pic_url"></image>
						<view class="name">{{paper.doctitle}}</view>
						<view class="info">
							<view @click="collect(paper,i)" class="price"><u-icon v-if="paper.is_collect==0" name="heart" size="38"></u-icon>
							<u-icon v-else name="heart-fill" color="#ff570a" size="38"></u-icon></view>
							<view class="slogan">{{paper.doc_creator_name}}</view>
						</view>
					</navigator>
 				</view>
 			</view>
 			<view class="loading-text">{{loadingText}}</view>
 		</view>
		<view>
			<zwy-popup :ishide="ishide">waiting....</zwy-popup>
		</view>
 	</view>
 </template>
 <script>
import { mapState, mapMutations } from 'vuex';
 export default {
	computed:{
	 	...mapState(['paperList']),
	},
 	data() {
 		return {
			tabs:0,
			maxNum:6,
			list1: [{
				name: '推荐',
			},{
				name: '财务公开',
			}, {
				name: '活动通知',
			}, {
				name: '村事公告'
			}, {
				name: '村民咨询'
			}, {
				name: '村民议事'
			}],
			value: 0,
			ishide:false,
			range: [],
 			//轮播
 			swiperList:[
 				{sid:0,src:'自定义src0',img:'/static/cwt/1.jfif'},
 				{sid:1,src:'自定义src1',img:'/static/cwt/2.jfif'},
 				{sid:2,src:'自定义src2',img:'/static/cwt/3.jfif'},
 				{sid:3,src:'自定义src3',img:'/static/cwt/4.jfif'}
 			],
 			//分类
 			categoryList: [
 				[//第一页
 					{ cat_id: 1, img: '/static/HM-shophome/category-img/0.png', title: '财务公开' },
 					{ cat_id: 2, img: '/static/HM-shophome/category-img/1.png', title: '活动通知' },
 					{ cat_id: 3, img: '/static/HM-shophome/category-img/2.png', title: '村事公告' },
 					{ cat_id: 4, img: '/static/HM-shophome/category-img/3.png', title: '村民咨询' },
 					{ cat_id: 5, img: '/static/HM-shophome/category-img/5.png', title: '村民议事' },
 				]
 			],
 			//猜你喜欢列表
 			categoryHeight: '80px',
 			currentPageindex: 0,
 			headerPosition:"fixed",
 			loadingText:"全部加载...",
			type:0,
			tabClick: false, 
			userInfo:{}
 			
 		};
 	},
	onTabItemTap(e) {
				if (e.index==0&&this.tabClick) { // 200ms 内再次点击
					// 这里就是模拟的双击事件，可以写类似数据刷新相关处理
					this.toTop();
				}
				this.tabClick = true
				setTimeout(() => {
					this.tabClick = false // 200ms 内没有第二次点击，就当作单击
				}, 200)
			},
 	onShow() {
 		// TODO
 		// this.$api.get('/api/part/listpart').then(res => {
 			
 		// });
		let user = {}
		uni.getStorage({
		    key: 'user',
		    success: function (res) {
		       user =  JSON.parse(JSON.stringify(res.data))
		    }
		});
		this.userInfo=user
		this.$store.commit('clearPL')
		this.getPages()
 	},
 	onPageScroll(e){
 		//兼容iOS端下拉时顶部漂移
 		if(e.scrollTop>=0){
 			this.headerPosition = "fixed";
 		}else{
 			this.headerPosition = "absolute";
 		}
 	},
 	//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
 	onPullDownRefresh() {
         setTimeout(function () {
             uni.stopPullDownRefresh();
         }, 1000);
     },
 	onLoad() {
		
	},
	// onPullDownRefresh(){
	// 	this.getPages()
	// },
	onReachBottom() {
		this.getPages()
	},
 	methods: {
		toTop() {
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 100,
			});
		},
		// TODO 调试token
		collect(paper,i,e){
			var ev = e || window.event;
			  if(ev && ev.stopPropagation) {
			    //非IE浏览器
			    ev.stopPropagation();
			  } else {
			    //IE浏览器(IE11以下)
			    ev.cancelBubble = true;
			  }
			  console.log(this.userInfo)

			  if(this.userInfo.session==null){
			  	uni.showToast({
			  		title: "请先登录",
			  		duration: 1000,
			  	})
			  	return 
			  }
			  this.paperList[i].is_collect=this.paperList[i].is_collect==0?1:0
			  let httpData = {
			  	user_id :this.userInfo.userId,
			  	doc_id : paper.docid,
			  	status:this.paperList[i].is_collect==0?2:1
			  }
			  
			  uni.request({
			  	url:'/api/doc/collect_doc',
			  	withCredentials:true,
			  	header:{
			  		'Xj-Token':this.userInfo.session
			  	},
			  	method:'POST',
			  	data:httpData,
			  	
			  	success: (res) => {
			  		
			  		uni.showToast({
			  			title: "操作成功",
			  			duration: 1000, 
			  		})
			  	},
			  	fail:(e)=>{
			  		uni.showToast({
			  			title: e,
			  			duration: 1000,
			  		})
			  	}
			  	
			  })
		},
		edit(){
			uni.navigateTo({
				url: '/pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video'
			})
		},
		changeTab(item){
			console.log('item',item)
			let index = 0
			if(item.index!=0){
				index = item.index+13
			}
			this.type =index
			this.$store.commit('clearPL')
			this.getPages()
			index=0
		},
		getPages(){
			console.log(2)
			let httpData = {
				nums:4,
				type:this.type,
				platform_id :3
			}
			uni.request({
				url:'/api/part/listpart',
				method:'GET',
				// data:httpData,
				success: (res) => {
					let tmp = res.data.data.parts
					tmp.forEach((item)=>{
						item['text']=item['text'].split('-').pop()
					})
					this.range = tmp
				}
			})
			uni.request({
				url:'/api/doc/get_recommend_doc',
				method:'POST',
				data:httpData,
				header:{
					'Xj-Token':this.userInfo.session
				},
				success: (res) => {
					this.$store.commit('setPaperList',res.data.data.docs)
				}
			})
			// this.$api.post('/api/doc/get_recommend_doc',httpData).then(res => {
			// 	this.paperList = res.data.data.docs
			// 	console.log(res)
			// });
		},
		change(event){
			// 申请认证
		console.log(event)
		// this.ishide = true
		},
 		//扫一扫
 		// scan(){
 		// 	uni.scanCode({
 		// 		success:(res)=>{
 		// 			uni.showToast({title: '条码内容：' + res.result});
 		// 		}
 		// 	});
 		// },
 		//搜索跳转
 		toSearch(){
			console.log('o')
 			// uni.switchTab({url: `../../search/search`})
			uni.navigateTo({
				url: '../../search/search?platform='+'snfw',
				fail (error) {
				        console.log(error)
				    }
			})
 		},
 		//轮播图跳转
 		toSwiper(e){
 			uni.showToast({title: e.src});
 		},
 		//分类跳转
 		toCategory(e){
			this.$store.commit('clearPL')
			if(e.cat_id!=0){
				this.tabs=e.cat_id-13
				uni.showToast({title: e.title+'Loading...'});
				this.type = e.cat_id
				// this.getPages()
			}
			// 索引存在问题
			uni.navigateTo({
				url:'/pages/bbx-type-info/bbx-type-info?type=' + e.cat_id+'&title='+e.title
			});  
 		},
 		toGoods(e){
 			uni.showToast({title: '文章'+e.doctitle});
 		},
 		//更新分类指示器
 		categoryChange(event) {
 			this.currentPageindex = event.detail.current;
 		},
 		//分类图片加载完毕
 		categoryImgLoad(e){
 			this.categoryImg = this.categoryImg?this.categoryImg+1:1;
 			//完成加载11个分类图片开始计算分类高度，若分类图片不足10个则修改此处的10。
 			if(this.categoryImg==10){
 				this.getCategoryHeight();
 			}
 		},
 		//更新分类高度
 		getCategoryHeight() {
 			let view = uni.createSelectorQuery().select('.category-list');
 			view.fields(
 				{
 					size: true
 				},
 				data => {
 					this.categoryHeight = data.height + 'px';
 				}
 			).exec();
 		}
 	}
 };
 </script>
 <style lang="scss">
.uni-page-head {
	margin-top: -10px !important;
}
 @font-face {font-family:"HMfont-home";src:url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAP8AAsAAAAACFwAAAOwAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqEEINSATYCJAMQCwoABCAFhG0HTxtLBxHVmzvJfhS4scOeC1v4zNNRK/hO5b0IHqg/8838ye5XsIDanmAkhZ1NSZygm4SsbYYkp17ICsOUxIP/ZZm9xejtQAD8zzX10geY387mEtXapUd7A5xF6oAi2pJoE8YNY1dexGkIwCSZQoiq1es2RUdhTBKA6N2jWwf0lAlVky3QEYSUrFSIOTjQ5VR5GZjt/168obDQQeLQMGY27FqtMxWf5z5fpgWCgdYugng8B8DWgQYUAhSI7qWujmhhqBAaptJfURzQ0ZEwVkfB58uCQSTZi0o3//JAItBAhGBk2gAURUrtxMQ2BQnPC1IQ8HyZmpvE1XgdMIDtwHVEJt4qkThsZwFPVHiEFTHKtWBBYGGUe/HmsZu6TluCStw+fXGMY9GyUb4b133Xrze9etV77VqzxcuXbYq8bF6/7rtxo5lY6A1cLcuCQJS3oXHswOYKUSaI71xkXr3ayZy2SIix0YumRS6AwEnLmr58WS9z2pKlYcJCCGzcXOU81Xuhp1osIWbBiUQWehda7lTvaNeCJX0WbYgksMA0hdlLo6zDp1PEomIdVu7YE4wN7nH7uGPdHXz2R3uHnX68tcP6SPE5ZSdObNpN/9dybtfmr6tHoy6+rN+DqdvnW9lUbkHTdcUWfKp1yzVr5Ag5HCqGU0Hca3jpAt2GiWFRwxYvdpYFo2b3tN/HvLeFd+BAr5Bu7CXnzKFlJb8dtP3ucx1djc+589Pep+W7X706stfvml+7i8fsWunxp7/f/uzsrgzj9Sv3p+6T7yqwvrfdy3nk/J6eZ84fnHp2lSvf/m/7H7569dDvuY/fTX+Mwdog+QVAGyB/IHmGyK8/exQrX13Maucu+y23rrbi5tQ1T3yTor3oj4kV8a8VtyxSqtQwKyXLbJF2kaI5DgAkYGICPzQG4dwfQxPVOhMEOlExSEJJAg2dTFSRhcCBRVEIQacCmBSkxnqLCAaiIZQBFGAiAIGH3SBxcRo0PFxBFXkPHETzDkLwCA1MfCJiR4tswStWxeEccIPlAbXSxS1rYEH2G0U8ZpeU+sw/Oq+80JR1NjrghW6MOT6JNgQO3NEJPTgPj4PAONK4hlKGYLqq4mVvKlc6M0YVh3PADZYH1EoXd8sHlvv+G0U8ZldDq/D+0XnVPTRl3QIdVFcr2rX090m0IXA8jjs6oYcOPMwQgSkfpnENpewRMF2FSvG2qnJ+zfmE6wATY6YSUmhCCQehg9V8advwun0+nHuJ0VP0kYrcz/Qox5hl') format('woff2');}
 .icon {
 	font-family:"HMfont-home" !important;
 	font-size:60upx;
 	font-style:normal;
 	color:#ffffff;
 	&.scan {
 		&:before{content:"\e69a";}
 	}
 	&.menu {
 		&:before{content:"\e62b";}
 	}
 	&.search {
 		&:before{content:"\e628";}
 	}
 }
 page {
 	background-color: #fff;
 }
 .status {
 	width: 100%;
 	height: 0;
 	/*  #ifdef  APP-PLUS  */
 	height: var(--status-bar-height);
 	/*  #endif  */
 	background-color: #020643;
 	position: fixed;
 	top: 0;
 	z-index: 999;
 }
 .header {
 	width: 100%;
 	height: 100upx;
 	background-color: #020643;
 	display: flex;
 	position: fixed;
 	top: 0;
 	/*  #ifdef  APP-PLUS  */
 	top: var(--status-bar-height);
 	/*  #endif  */
 	
 	z-index: 996;
 	.scan {
 		width: 100upx;
 		height: 100upx;
 		flex-shrink: 1;
 		display: flex;
 		justify-content: center;
 		align-items: center;
 	}
 	.input {
 		width: calc(100% - 200upx);
 		display: flex;
 		justify-content: center;
 		align-items: center;
 		position:relative;
 		input {
 			width: calc(100% - 60upx);
 			height: 60upx;
 			background-color: #ffffff;
 			border-radius: 60upx;
 			padding-left: 60upx;
 			font-size: 30upx;
 			
 		}
 		.icon{
 			width: 60upx;
 			height: 60upx;
 			position: absolute;
 			color: #a18090;
 			z-index: 996;
 			top: 20upx;
 			left: 0;
 			font-size: 40upx;
 			display: flex;
 			justify-content: center;
 			align-items: center;
 		}
 	}
 	.menu {
 		width: 100upx;
 		height: 100upx;
 		flex-shrink: 1;
 		display: flex;
 		justify-content: center;
 		align-items: center;
 		image{
 			width: 60upx;
 			height: 60upx;
 			border-radius: 60upx;
 		}
 	}
 }
 .place{
 	/*  #ifdef  APP-PLUS  */
 	margin-top: var(--status-bar-height);
 	/*  #endif  */
 	background-color: #ffef34;
 	height: 100upx;
 }
 .swiper-view {
 	.swiper {
 		width: 100%;
 		height: 280upx;
 		image {
 			width: 100%;
 			height: 280upx;
 		}
 	}
 	.keep-out {
 		width: 100%;
 		height: 30upx;
 		border-radius: 100% 100% 0 0;
 		background-color: #f8f9f9;
 		margin-top: -15upx;
 		position: absolute;
 	}
 }
 .category {
 	width: 95%;
 	padding: 2.5vw 2.5vw;
 	background-color: #ffffff;
 	.box {
 		width: 100%;
 		border-radius: 20upx;
 		background-color: #ffffff;
 		.dots {
 			display: flex;
 			justify-content: center;
 			height: 15upx;
 			width: 100%;
 			view{
 				width: 30upx;
 				height: 5upx;
 				background-color: rgba(0, 0, 0, 0.2);
 				&.active {
 					background-color: #2d65d9;
 				}
 			}
 		}
 		.swiper {
 			width: 100%;
 			padding: 10upx 0;
 			.uni-swiper-dot {
 				width: 20upx;
 			}
 			.category-list {
 				width: 100%;
 				height: auto;
 				display: flex;
 				justify-content: flex-start;
 				padding: 10upx 0;
 				flex-flow: wrap;
 				.icon {
 					width: 20%;
 					display: flex;
 					flex-flow: wrap;
 					justify-content: center;
 					font-size: 22upx;
 					color: #666;
 					image {
 						width: 70%;
 						height: 13.3vw;
 					}
 					view{
 						width: 100%;
 						display: flex;
 						justify-content: center;
 					}
 				}
 			}
 		}
 	}
 }
 .pick{
 	width: 95%;
 	padding: 0 2.5vw 2.5vw 2.5vw;
 	background: linear-gradient(to bottom, #fffbe5 0%,#ffffff 105%);
 	.box{
 		width: 100%;
 		border-radius: 20upx;
 		background-color: #ffffff;
 		.title{
 			display: flex;
 			justify-content: flex-start;
 			align-items: flex-end;
 			height: 60upx;
 			border-bottom: solid 1upx #eee;
 			padding-bottom: 10upx;
 			.big{
 				font-size: 34upx;
 				padding-left: 20upx;
 				color: #46434f;
 			}
 			.small{
 				font-size: 24upx;
 				padding-left: 20upx;
 				color: #827f8b;
 			}
 		}
 		.product-list{
 			padding: 15upx 20upx 15upx 20upx;
 			column-count: 2;
 			column-width: 50%;
 			column-gap: 10upx;
 			>view{
 				display: flex;
 				background-color: #f8f8f8;
 				position:relative;
 				&:nth-child(1){
 					.price{
 						color: #e65339;
 						font-size: 30upx;
 						position: absolute;
 						bottom: 8upx;
 						left: 8upx;
 					}
 					.slogan{
 						color: #807c87;
 						font-size: 30upx;
 						position: absolute;
 						bottom: 8upx;
 						right: 8upx;
 					}
 					image{
 						width: 100%;
 						height: 0;
 					}
 				}
 				&:nth-child(2),&:nth-child(3){
 					image{
 						width: calc(50% - 5upx);
 						height: 0;
 					}
 					.price{
 						position: absolute;
 						top: 25%;
 						left: 55%;
 						color: #e65339;
 						font-size: 30upx;
 					}
 					.slogan{
 						position: absolute;
 						top: 60%;
 						left: 55%;
 						color: #807c87;
 						font-size: 20upx;
 					}
 				}
 				&:nth-child(2){
 					margin-bottom: 10upx;
 				}
 			}
 		}
 	}
 }
 .banner{
 	image{
 		width: 100%;
 	}
 }
 .goods-list{
 	background-color: #f4f4f4;
 	.title{
 		width: 100%;
 		display: flex;
 		justify-content: center;
 		align-items: center;
 		height: 60upx;
 		color: #979797;
 		font-size: 24upx;
 	}
 	.loading-text{
 		width: 100%;
 		display: flex;
 		justify-content: center;
 		align-items: center;
 		height: 60upx;
 		color: #979797;
 		font-size: 24upx;
 	}
 	.product-list{
 		width: 95%;
 		padding: 0 2.5% 2.5vw 2.5%;
 		display: flex;
 		justify-content: space-between;
 		flex-wrap: wrap;
 		.product{
 			width: 48.75%;
 			border-radius: 20upx;
 			background-color: #fff;
 			margin: 0 0 15upx 0;
 			image{
 				width: 100%;
 				border-radius: 20upx 20upx 0 0;
 			}
 			.name{
 				width: 92%;
 				padding: 10upx 4%;
 				display: -webkit-box;
 				-webkit-box-orient: vertical;
 				-webkit-line-clamp: 2;
 				text-align: justify;
 				overflow: hidden;
 				font-size: 30upx;
 			}
 			.info{
 				display: flex;
 				justify-content: space-between;
 				align-items: flex-end;
 				width: 92%;
 				padding: 10upx 4% 10upx 4%;
 				
 				.price{
 					color: #e65339;
 					font-size: 30upx;
 					font-weight: 600;
 				}
 				.slogan{
 					color: #807c87;
 					font-size: 24upx;
 				}
 			}
 		}
 		
 	}
 }
 </style>
 