<template>
	<view class="container">
		<view class="content">
			<view class="detail">
				<view class="title">{{ paper.doctitle }}</view>
				<view class="info">
					<view class="source-date">
						<text style="display: inline-block;" class="date hidden">{{ paper.doc_creator_name }}</text>
						<text style="display: inline-block;" class="date hidden">{{ paper.doc_created_at.split('T')[0] }}</text>
						<u-tag size="mini" style='display: inline-block;width: 70px;margin-left:15px;text-align: center;' :text=paper.doc_type_name type="success" plain></u-tag>
						<view style="display: inline-block; margin-left: 15px;" @click="collect()" class="price"><u-icon v-if="paper.is_collect==0" name="heart" size="38"></u-icon>
						<u-icon v-else name="heart-fill" color="#ff570a" size="38"></u-icon>
						</view>
					</view>
				</view>
				<view v-if="paper.file_urls.length>0" style="margin-top: 40px;"  class="swiper-view">
					<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true" >
						<swiper-item v-for="swiper in paper.file_urls" :key="swiper.sid" @tap="toSwiper(swiper)">
							<image mode="aspectFill" :src="swiper"></image>
						</swiper-item>
					</swiper>
					<view class="keep-out"></view>
				</view>
				<!-- <image style="display: block; margin-top: 40px;" :src="paper.file_urls"></image> -->
				<view class="desc"><parser :html="paper.doc_content"></parser></view>
				<hb-comment ref="hbComment" @add="add" @del="del" @like="like" @focusOn="focusOn" :deleteTip="'确认删除？'"
				    :cmData="commentData" v-if="commentData  && paper.doc_type_name!= '财务公开' &&paper.doc_type_name!= '政事发布' &&paper.doc_type_name!= '村事公告' "></hb-comment>
				<!-- <view>
					<view style="margin-top: 10px;" v-if="discussions.length>0" v-for="(item,index) in discussions" :key="index">
						<u-avatar
						            :text=item.discuss_user_name[0]
						            fontSize="18"
						            randomBgColor
						    ></u-avatar><u--text mode="name" style='display: inline-block;width: 35px;' :text=item.discuss_user_name format="encrypt"></u--text><v--text style='color: #f9ae3d;width: 35px;' v-if="item.discuss_user_name==paper.doc_creator_name">(作者)</v--text>
						对<u--text mode="name" style='display: inline-block;width: 35px;' v-if="item.reply_user_name!=null" :text=item.reply_user_name format="encrypt"></u--text><v--text style='color: #f9ae3d;' v-if="item.reply_user_name==paper.doc_creator_name">(作者)</v--text><v--text v-if="item.reply_user_name==null" >文章</v--text>评论：
						{{item.discuss_content}}
						<view style="margin-left: 20px;">
							<view v-for="(it,key) in item.children_discuss" :key="key">
								<u--text style='display: inline-block;width: 35px;' mode="name" :text=it.discuss_user_name format="encrypt"></u--text><v--text style='color: #f9ae3d;'  v-if="it.discuss_user_name==paper.doc_creator_name">(作者)</v--text>
								对<u--text style='display: inline-block;width: 35px;' mode="name" v-if="it.reply_user_name!=null" :text=it.reply_user_name format="encrypt"></u--text><v--text style='color: #f9ae3d;'  v-if="it.reply_user_name==paper.doc_creator_name">(作者)</v--text><v--text v-if="it.reply_user_name==null" >文章</v--text>评论：
								{{it.discuss_content}}
							</view>
						</view>
					</view>
				</view> -->
			</view>
				<!-- <lyInput commentIndex='321'   @result='submit' @like='like' /> -->
		</view>
		<pageLoading v-if="showPageLoading"></pageLoading>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import parser from '@/components/parser/parser.vue';
import pageLoading from '@/components/loading/pageLoading.vue';
import iconfont from '@/components/iconfont/iconfont.vue';
import loading from '@/components/loading/loading.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import util from '@/common/util.js';
import lyInput from "@/uni_modules/ly-input/components/ly-input/input.vue";
export default {
	computed:{
	 	...mapState([]),
	},
	components: {
		lyInput,
		parser,
		pageLoading,
		loading,
		iconfont,
		uniPopup
	},
	data() {
		return {
			id: 0,
			// info: { comment: { count: 0, list: [] } },
			paper:{},
			result:'',
			showAddComment: false,
			showCommenBar: true,
			addCommentFocus: false,
			commentContent: '',
			replyCommentId: 0,
			replyNickname: '',
			page_index: 1,
			page_size: 10,
			hasMoreData: false,
			showPageLoading: true,
			currentUrl: '',
			shareUrl: '',
			showShareTip: false,
			showBrowserShareTip: false,
			swiperList:[],
			discussions:[],
			commentData:{
				"readNumer": 0,
				"commentSize": 0,
				"comment": []
			},
			userInfo:{}
		};
	},
	onShow(e) {
	},
	onLoad(e) {
		if (e.id > 0) {
			this.id = e.id;
		}
		// #ifdef H5
		this.currentUrl = encodeURIComponent(window.location.href);
		// #endif
		let user = {}
		uni.getStorage({
		    key: 'user',
		    success: function (res) {
		       user =  JSON.parse(JSON.stringify(res.data))
		    }
		});
		this.userInfo=user
		this.getData();
	},
	onPullDownRefresh() {
		uni.showLoading({
			title: '刷新中'
		});
		this.page_index = 1;
	},
	onReachBottom(e) {
		if (this.hasMoreData) {
			this.getComment();
		}
	},
	methods: {
		collect(){
			// if(this.userInfo.session==null){
			// 	uni.showToast({
			// 		title: "请先登录",
			// 		duration: 1000,
			// 	})
			// 	return 
			// }
			if(this.paper.is_collect==0){
				this.paper.is_collect=1
				
			}else{
				this.paper.is_collect=0
			}
			
			let httpData = {
				user_id :this.userInfo.userId,
				doc_id : this.paper.docid,
				status:this.paper.is_collect==0?2:1
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
					
					// uni.showToast({
					// 	title: "操作成功",
					// 	duration: 1000, 
					// })
				},
				fail:(e)=>{
					uni.showToast({
						title: e,
						duration: 1000,
					})
				}
				
			})
		},
		submit(e){
			let that = this
			console.log(e.content)
			// uni.showToast({
			// 	title: "服务端待建ing...",
			// 	duration: 1000,
			// })
		},
		getTree(arr){
			let res=[]
			for(let i  = 0 ;i<arr.length;i++){
				let tmp = {}
				tmp.id = arr[i].id
				tmp.owner =  arr[i].is_doc_creator
				tmp.avatarUrl= "/static/img/icon.webp"
				tmp.nickName = arr[i].discuss_user_name
				tmp.parentId = null
				tmp.hasLike = false
				tmp.likeNum = 0
				tmp.content = arr[i].discuss_content
				tmp.createTime = arr[i].created_at
				tmp.reply_user_id = arr[i].reply_user_id
				tmp.discuss_user_id = arr[i].discuss_user_id
				tmp.is_doc_creator = arr[i].is_doc_creator
				if(arr[i].children_discuss.length>0){
					tmp.children = []
					let child = arr[i].children_discuss
					let t= {}
					for(let j  = 0 ;j<child.length;j++){
						t.id = child[j].id
						t.owner =  child[j].is_doc_creator
						t.avatarUrl= "/static/img/icon.webp"
						t.nickName = child[j].discuss_user_name
						t.parentId = child[j].parent_id
						t.createTime = child[j].created_at
						t.hasLike = false
						t.likeNum = 0
						t.content = child[j].discuss_content
						t.reply_user_id = child[j].reply_user_id
						t.discuss_user_id = child[j].discuss_user_id
						t.is_doc_creator = child[j].is_doc_creator
						tmp.children.push(t)
						t = {}
					}
				}
				res.push(tmp)
				tmp = {}
			}
			return res
		},
		/*加载数据*/
		loadData() {
			this.getData();
		},
		
		/*获取文章详情*/
		getData() {
			let httpData = {
				doc_id:this.id
			}
			uni.request({
				url:'/api/doc/get_docall_by_id',
				method:'POST',
				data:httpData,
				success: (res) => {
					this.paper = res.data.data
					// console.log(this.paper)
					this.commentData.readNumer = this.paper.read_num
					this.showPageLoading=false
				}
			})
			uni.request({
				url:'/api/doc/doc_get_discuss',
				method:'POST',
				data:httpData,
				success: (res) => {
					this.discussions = res.data.data.discuss
					this.commentData.comment = this.getTree(res.data.data.discuss)
					this.commentData.commentSize = this.commentData.comment.length |0
					// this.commentData.readNumer = this.commentData.commentSize |0
					// console.log(this.commentData)
					this.$forceUpdate()
					this.showPageLoading=false
				},
				
			})
			this.$forceUpdate() 
		},

		/*点赞*/
		like() {
				uni.showToast({
					title: "服务端代建ing...",
					duration: 1000,
				})
		},
		add(e){
			// console.log(this.userInfo.session)
			if(this.userInfo.session==null){
				uni.showToast({
					title: "请先登录",
					duration: 1000,
				})
				this.$refs.hbComment.submit = false
				return 
			}
			let httpData = {
				doc_id :this.paper.docid,
				discuss_content : e.content,
				parent_id : null,
				reply_user_id:0
			}
			console.log('e',e)
			if(e.pId != null){
				httpData.parent_id = e.pId
				httpData.reply_user_id = e.reply_user_id
			}
			
			uni.request({
				url:'/api/doc/doc_discuss',
				withCredentials:true,
				header:{
					'Xj-Token':this.userInfo.session
				},
				method:'POST',
				data:httpData,
				
				success: (res) => {
					
					// uni.showToast({
					// 	title: "评论成功",
					// 	duration: 1000, 
					// })
					this.$refs.hbComment.submit = false
					this.getData()
				},
				fail:(e)=>{
					uni.showToast({
						title: e,
						duration: 1000,
					})
				}
				
			})
		},
		

	
		/*初始化添加评论*/
		initAddComment(status) {
			if (status) {
				this.$app.initLogin();
			}
			this.showAddComment = status;
			this.commentContent = '';
			if (this.replyCommentId > 0) {
				this.replyCommentId = 0;
				this.replyNickname = '';
			}
			setTimeout(() => {
				this.addCommentFocus = status;
			}, 200);
		},

		/*添加评论或回复*/
		addCommentOrReply() {
			if (this.commentContent == '') {
				this.$alert('评论内容不能为空');
				return;
			}
			if (this.replyCommentId > 0) {
				this.addReply();
			} else {
				this.addComment();
			}
		},



		/*添加回复*/
		addReply() {
			if (this.commentContent == '') {
				this.$alert('回复内容不能为空');
				return;
			}
			this.$app.request({
				url: this.$api.article.addReply,
				data: {
					comment_id: this.replyCommentId,
					content: this.commentContent,
					page_size: this.page_size
				},
				method: 'POST',
				dataType: 'json',
				success: res => {
					if (res.code == 0) {
						this.info.comment = res.data;
						this.showAddComment = false;
						this.replyCommentId = 0;
						this.replyNickname = '';
						this.commentContent = '';
						this.$alert('评论成功');
					} else {
						this.$alert(res.msg);
					}
				}
			});
		},

		/*获取评论*/
		getComment() {
			this.$app.request({
				url: this.$api.article.comment,
				data: {
					article_id: this.id,
					page_index: this.page_index,
					page_size: this.page_size
				},
				method: 'POST',
				dataType: 'json',
				success: res => {
					if (res.code == 0) {
						console.log(this.info.comment);
						this.info.comment.list = this.info.comment.list.concat(res.data.list);
						this.info.comment.count = res.data.count;
						if (res.data.page > this.page_index) {
							this.hasMoreData = true;
						} else {
							this.hasMoreData = false;
						}
						this.page_index += 1;
					} else {
						// this.$alert(res.msg);
					}
				},
				complete: res => {
					uni.stopPullDownRefresh();
					uni.hideLoading();
				}
			});
		},
	}
};
</script>

<style scoped lang="scss">
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
		// background-color: #ff570a;
		margin-top: -15upx;
		position: absolute;
	}
}
.detail {
	padding: 40rpx 32rpx;
	background: #fff;
	.title {
		font-size: 44rpx;
		color: #262626;
		line-height: 70rpx;
		font-weight: bold;
	}
	.info {
		margin-top: 32rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		.source-date {
			.source {
				color: #666;
			}
			.date {
				color: #999;
				margin-left: 24rpx;
			}
		}
		.read {
			color: #999;
		}
	}
	.desc {
		margin-top: 56rpx;
		overflow: hidden;
		color: #262626;
		.wxParse {
			color: #262626;
		}
	}
}
.comment {
	padding: 20rpx 32rpx 0;
	background: #fff;
	.title {
		display: flex;
		align-items: center;
		font-size: 36rpx;
		color: #262626;
		font-weight: bold;
		border-bottom: 1rpx solid #eee;
		text {
			padding-bottom: 20rpx;
			line-height: normal;
		}
		.count {
			padding-bottom: 20rpx;
			font-size: 30rpx;
			color: #999;
			margin-left: 10rpx;
			line-height: normal;
		}
	}
	.item {
		display: flex;
		justify-content: space-between;
		padding: 30rpx 0 20rpx;
		border-bottom: 1rpx solid #eee;
		&:last-child {
			border-bottom: 0;
		}
		.avatar {
			flex-grow: 0;
			flex-shrink: 0;
			margin-right: 20rpx;
			image {
				width: 45rpx;
				height: 45rpx;
				border-radius: 50%;
			}
		}
		.comment-info {
			flex-grow: 1;
			flex-shrink: 1;
			.nickname-like {
				display: flex;
				justify-content: space-between;
				.nickname {
					font-size: 32rpx;
					color: #444;
					font-weight: bold;
				}
				.like {
					display: flex;
					align-items: center;
					image {
						width: 32rpx;
						height: 32rpx;
						margin-right: 14rpx;
					}
					.like-count {
						color: #999;
						font-size: 30rpx;
					}
				}
			}
			.comment-desc {
				color: #444;
				font-size: 32rpx;
				line-height: 1.6;
				margin-top: 15rpx;
			}
			.reply-count {
				background: #f2f2f2;
				padding: 8rpx 20rpx;
				font-size: 30rpx;
				color: #999;
				margin: 20rpx 0 24rpx;
			}
			.date-reply {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.date {
					display: flex;
					align-items: center;
					color: #b4b4b4;
					font-size: 28rpx;
					margin-right: 20rpx;
					margin-top: 4rpx;
				}
				.reply {
					flex-grow: 0;
					flex-shrink: 0;
					font-size: 28rpx;
					color: #999;
				}
			}
		}
	}
	.no-comment {
		padding: 40rpx 0;
		color: #999;
		font-size: 30rpx;
	}
}
.comment-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 120rpx;
	background-color: #ffffff;
	box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.3);
	display: flex;
	flex-direction: row;
	.input {
		flex-grow: 0;
		flex-shrink: 0;
		margin: 20rpx 10rpx 20rpx 20rpx;
		display: flex;
		align-items: center;
		background: #f2f2f2;
		width: 420rpx;
		border-radius: 40rpx 40rpx 0 40rpx;
		text {
			font-size: 32rpx;
			color: #aaa;
			margin-left: 38rpx;
		}
	}
	.operate {
		width: 100%;
		flex-grow: 1;
		flex-shrink: 1;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-right: 10rpx;
		view,
		navigator {
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 25%;
			image {
				width: 45rpx;
				height: 45rpx;
			}
		}
		.info,
		.like {
			position: relative;
			.count {
				position: absolute;
				top: -15rpx;
				right: -4rpx;
				background-image: linear-gradient(140deg, #bee7e9 9%, #8cc7b5 75%);
				display: flex;
				align-items: center;
				border-radius: 50rpx;
				padding: 0 10rpx;
				font-size: 22rpx;
				color: #fff;
				height: 30rpx;
				line-height: 30rpx;
			}
		}
		.share {
			display: flex;
			justify-content: space-around;
			padding: 0;
			background: transparent;
			image {
				width: 45rpx;
				height: 45rpx;
				border: 0;
			}
			&:after {
				display: none;
			}
		}
	}
}
.float-empty {
	height: 120rpx;
	width: 100%;
	display: block;
	background: #fff;
}
.add-comment {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #ffffff;
	z-index: 9999;
	.info {
		display: flex;
		flex-direction: row;
		padding: 20rpx 20rpx 20rpx 20rpx;
		.input {
			flex-grow: 1;
			flex-shrink: 1;
			display: flex;
			align-items: center;
			background: #f2f2f2;
			border-radius: 40rpx 40rpx 0 40rpx;
			padding: 20rpx 32rpx 20rpx;
			line-height: normal;
			textarea {
				//padding: 10rpx 0;
				width: 100%;
				font-size: 32rpx;
				line-height: 42rpx;
				background: #f2f2f2;
			}
		}
		.add {
			flex-grow: 0;
			flex-shrink: 0;
			width: 150rpx;
			display: flex;
			align-items: center;
			margin-left: 10rpx;
		}
		.cancel {
			position: absolute;
			right: 10rpx;
			top: 2rpx;
			/deep/.icon {
				font-size: 40rpx;
				color: #ccc;
			}
		}
	}
}
.h5-share {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #ffffff;
	border-top: 1rpx solid #ddd;
	padding-top: 20rpx;
	padding-bottom: 20rpx;
	.title {
		font-size: 30rpx;
		text-align: center;
		height: 50rpx;
	}
	.share-icon {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		view {
			flex-grow: 0;
			flex-shrink: 0;
			text-align: center;
			image {
				margin-top: 35rpx;
				width: 80rpx;
				height: 80rpx;
			}
			text {
				display: block;
			}
		}
	}
	.share-btn {
		margin: 30rpx 30rpx 15rpx;
		border: 1rpx solid #8cc7b5;
		background: #8cc7b5;
		border-radius: 15rpx;
		font-size: 32rpx;
		text-align: center;
		padding: 12rpx 0;
		color: #fff;
	}
}
.share-maske {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	z-index: 99999;
	.share-tip {
		position: absolute;
		top: 100rpx;
		left: 0;
		text-align: center;
		.share-tip-info {
			height: 240rpx;
		}
		.share-tip-btn {
			margin-top: 400rpx;
			height: 82rpx;
		}
	}
	.share-browser-tip {
		top: 300rpx;
		.share-tip-info {
			height: 240rpx;
		}
		.share-tip-btn {
			margin-top: 200rpx;
		}
	}
}
.declaration {
	margin: 50rpx 0;
	font-size: 34rpx;
	color: #999;
}
</style>
