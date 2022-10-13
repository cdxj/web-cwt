<template>
    <ir-tabs :curr="cur"  :navs="navs" @navChange='change'  navBgColor='#020643'  :multiple="true">
        <template v-slot:page1>
            <view>
				<u-list
				style='margin-top: 0px;'
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
									<view class="price" style="margin-top: 30px;margin-left: 80px;"><u-icon  @click="collect(item,index)" name="heart-fill" color="red" size="48"></u-icon></view>
									<view class="slogan">{{item.doc_creator_name}}</view>
								</view>
							</view>
						</navigator>
					</u-list-item>
				</u-list>
			</view>
        </template>

        <template v-if="cur==1" v-slot:page2>
            <view>
				<u-list
				style='margin-top: 0px;'
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
									<view class="slogan"  style="margin-top: 30px;margin-left: 70px;" >{{item.doc_create_datetime}}</view>
									<view class="price" style="position: relative;top:-10px"  ><!-- <u-icon name="trash" color="#2979ff" size="38"></u-icon> -->
										<u-button type="error" size='mini' @click="deleteItem(item,index,$event)" :plain='true' text="删除"></u-button>
									</view>
								</view>
							</view>
						</navigator>
					</u-list-item>
				</u-list>
			</view>
        </template>
    </ir-tabs>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
 export default {
	computed:{
	 	...mapState(['paperList']),
	},
        data() {
            return {
                navs: ['收藏', '文章管理'],
				title:'文章列表',
				type:0,
				pageSize:0,
				limit:3,
				cur:0,
				userInfo:{}
            }
        },
		onShow(){
			let user = {}
			uni.getStorage({
			    key: 'user',
			    success: function (res) {
			       user =  JSON.parse(JSON.stringify(res.data))
			    }
			});
			this.userInfo=user
			if(this.userInfo.session==null){
				uni.showToast({
					title: "请先登录",
					duration: 1000, 
				})
			}
			this.pageSize=0
			this.$store.commit('clearPL')
			// this.cur=0
			// console.log(this.cur)
			// this.getData()
			if(!this.doAnything){
				uni.showToast({
					title: "请先认证村镇",
					duration: 1000,
				})
				return
			}
			this.change(this.cur)
		},
		onReachBottom() {
			if(!this.doAnything){
				uni.showToast({
					title: "请先认证村镇",
					duration: 1000,
				})
				return
			}
			this.pageSize++;
			console.log(this.cur)
			if(this.cur==0){
				this.getData()
			}else{
				this.getownPaper()
			}
			console.log(this.pageSize)
			// this.loadmore()
		},
		methods:{
			deleteItem(item,i,e){
				if(!this.doAnything){
					uni.showToast({
						title: "请先认证村镇",
						duration: 1000,
					})
					return
				}
				console.log('item',item,i)
				var ev = e || window.event;
				  if(ev && ev.stopPropagation) {
				    //非IE浏览器
				    ev.stopPropagation();
				  } else {
				    //IE浏览器(IE11以下)
				    ev.cancelBubble = true;
				  }
				  if(this.userInfo.session==null){
				  	uni.showToast({
				  		title: "请先登录",
				  		duration: 1000,
				  	})
				  	return 
				  }
				  let httpData = {
				  	user_id :this.userInfo.userId,
				  	doc_id : item.docid,
				  	status:2
				  }
				  
				  uni.request({
				  	url:'/api/doc/doc_change_status',
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
						this.$store.commit('deletePaper',i)
						
				  	},
				  	fail:(e)=>{
				  		uni.showToast({
				  			title: e,
				  			duration: 1000,
				  		})
				  	}
				  	
				  })
			},
			collect(paper,i,e){
				if(!this.doAnything){
					uni.showToast({
						title: "请先认证村镇",
						duration: 1000,
					})
					return
				}
				var ev = e || window.event;
				  if(ev && ev.stopPropagation) {
				    //非IE浏览器
				    ev.stopPropagation();
				  } else {
				    //IE浏览器(IE11以下)
				    ev.cancelBubble = true;
				  }
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
						if(this.paperList[i].is_collect==0){
							this.$store.commit('deletePaper',i)
						}
				  	},
				  	fail:(e)=>{
				  		uni.showToast({
				  			title: e,
				  			duration: 1000,
				  		})
				  	}
				  	
				  })
			},
			getData(offset=5){
				if(!this.doAnything){
					uni.showToast({
						title: "请先认证村镇",
						duration: 1000,
					})
					return
				}
				let httpData = {
					user_id :this.userInfo.userId,
					offset:this.pageSize*this.limit,
					limit:this.limit,
					order:'desc',
					platform_id :3
				}
				
				uni.request({
					url:'/api/doc/get_collect_docs',
					withCredentials:true,
					header:{
						'Xj-Token':this.userInfo.session
					},
					method:'POST',
					data:httpData,
					
					success: (res) => {
						this.$store.commit('setPaperList',res.data.data.docs)
					},
					fail:(e)=>{
						uni.showToast({
							title: e,
							duration: 1000,
						})
					}
					
				})
			},
			change(cur){
				if(!this.doAnything){
					uni.showToast({
						title: "请先认证村镇",
						duration: 1000,
					})
					return
				}
				this.cur=cur
				if(cur==0){
					this.$store.commit('clearPL')
					this.pageSize=0
					this.getData()
				}
				if(cur==1){
					this.$store.commit('clearPL')
					this.pageSize=0
					this.getownPaper()
					console.log('文章管理')
				}
			},
			getownPaper(){
				if(!this.doAnything){
					uni.showToast({
						title: "请先认证村镇",
						duration: 1000,
					})
					return
				}
				let httpData = {
					user_id :this.userInfo.userId,
					offset:this.pageSize*this.limit,
					limit:this.limit,
					order:'desc',
					platform_id:3
				}
				
				uni.request({
					url:'/api/doc/get_create_docs',
					withCredentials:true,
					header:{
						'Xj-Token':this.userInfo.session
					},
					method:'POST',
					data:httpData,
					
					success: (res) => {
						this.$store.commit('setPaperList',res.data.data.docs)
					},
					fail:(e)=>{
						uni.showToast({
							title: e,
							duration: 1000,
						})
					}
					
				})
			}
		}
    }
</script>
<style scoped lang="scss">
	.info{
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		// border: 1px solid red;
		margin-top: -60px;
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
</style>