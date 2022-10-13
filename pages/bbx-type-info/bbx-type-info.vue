<template>
	<view>
		<!-- <u-navbar
			:title=title
			:autoBack="true"
		>
		</u-navbar> -->
		<f-navbar :title="title" fontColor="#fff" gradient="linear-gradient(-90deg, #e4d002, #ff570a)">
			<view class="u-flex" slot="right">
       <view style="margin-left: 165px;" >
		<u-icon name="search" color="#2979ff" @click="toSearch()" size="55"></u-icon>
       </view>
    </view></f-navbar>
		<u-list
		style=''
			@scrolltolower="scrolltolower"
		>
			<u-list-item
				v-for="(item, index) in paperList"
				:key="index"
				style='height: 80px;'
			>
			<navigator class="item" hover-class="none" :url="'/pages/details/details?id=' + item.docid">
				<u-cell
					:title=item.doctitle
					size="max"
				>
					<u-avatar
						slot="icon"
						shape="square"
						size="125"
						:src="item.pic_url"
						customStyle="margin: -3px 5px -3px 0"
					></u-avatar>
				</u-cell>
				<view>
					<view class="info">
						<view class="price" style="margin-left: 80px;">
							<u-icon v-if="item.is_collect==1"  name="heart-fill" color="red" size="28"></u-icon><u-icon v-else  name="heart"  size="28"></u-icon>
							<u-tag style="margin-top: -20px;margin-left: 20px;" v-if="item.doc_type_id==6" size="mini"  text="租房租地" type="warning" plain></u-tag>
							<u-tag style="margin-top: -20px;margin-left: 20px;" v-if="item.doc_type_id==7" size="mini"  text="生态农品" type="warning" plain></u-tag>
							<u-tag style="margin-top: -20px;margin-left: 20px;" v-if="item.doc_type_id==8" size="mini"  text="亲子农旅" type="warning" plain></u-tag>
							<u-tag style="margin-top: -20px;margin-left: 20px;" v-if="item.doc_type_id==9" size="mini"  text="民宿民居" type="warning" plain></u-tag>
							<u-tag style="margin-top: -20px;margin-left: 20px;" v-if="item.doc_type_id==10" size="mini"  text="农村美食" type="warning" plain></u-tag>
							<u-tag style="margin-top: -20px;margin-left: 20px;" v-if="item.doc_type_id==11" size="mini"  text="农村投资" type="warning" plain></u-tag>
							<u-tag style="margin-top: -20px;margin-left: 20px;" v-if="item.doc_type_id==12" size="mini"  text="定点帮扶" type="warning" plain></u-tag>
							<u-tag style="margin-top: -20px;margin-left: 20px;" v-if="item.doc_type_id==13" size="mini"  text="名优特新" type="warning" plain></u-tag>
							</view>
							<!-- <view style="display: inline-block;"></view> -->
						<view class="slogan">{{item.doc_creator_name}}</view>
					</view>
				</view>
				</navigator>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	import fNavbar  from '@/uni_modules/f-navbar/components/f-navbar/f-navbar.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	computed:{
	 	...mapState(['paperList']),
	},
		data() {
			return {
				title:'文章列表',
				type:0,
				// paperList:[],
				keyword:'',
				pageSize:0,
				limit:9,
				platform:'',
				userInfo:{}
			}
		},
		onLoad(e) {
			console.log('e',e)
			if(e){
				this.title = e.title,
				this.type = e.type|0
				this.keyword=e.keyword
				this.platform = e.platform !=undefined ?e.platform:'cwt'
			}
			console.log('type',this.platform)
		},
		onShow() {
			
			this.$store.commit('clearPL')	
			let user = {}
			uni.getStorage({
			    key: 'user',
			    success: function (res) {
			       user =  JSON.parse(JSON.stringify(res.data))
			    }
			});
			this.userInfo=user
			
			this.getPages()
		},
		methods: {
			toSearch(){
				
				// uni.switchTab({url: `../../search/search`})
				uni.navigateTo({
					url: '/pages/search/search?title='+this.title+'&type='+this.type,
					fail (error) {
					        console.log(error)
					    }
				})
			},
			onReachBottom() {
				this.pageSize++;
				this.getPages()
				console.log(this.pageSize)
				// this.loadmore()
			},
			loadmore() {
				let httpData = {
					limit:3,
					type:this.type,
					order:'desc',
					offset:3,
					doc_like:this.keyword,
					platform:this.platform,
					offset:this.paperList.length
				}
				uni.request({
					url:'/api/doc/get_type_docinfo',
					method:'POST',
					header:{
						'Xj-Token':this.userInfo.session
					},
					data:httpData,
					success: (res) => {
						this.$store.commit('setPaperListAll',res.data.data.docs)
						console.log('文章分类',this.paperList)
					}
				})

			},
			getPages(offset=0){
				let httpData = {
					limit:this.limit,
					type:this.type,
					order:'desc',
					offset:this.pageSize*this.limit,
					platform:this.platform,
					doc_like:this.keyword
				}
				uni.request({
					url:'/api/doc/get_type_docinfo',
					method:'POST',
					header:{
						'Xj-Token':this.userInfo.session
					},
					data:httpData,
					success: (res) => {
						this.$store.commit('setPaperList',res.data.data.docs)
						console.log('文章分类',this.paperList)
					}
				})

			},
		}
	}
</script>

<style lang="scss">
.info{
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-top: -30px;
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
 .header {
 	width: 100%;
 	height: 100upx;
 	background-color: #ff570a;
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
</style>
