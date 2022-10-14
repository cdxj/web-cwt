<template>
	<view>
		<view>
			<f-navbar :title="titleTop" fontColor="#fff" gradient="linear-gradient(-90deg, #fff, #2979ff)">
				<view v-if="!userInfo.isManager" class="u-flex" slot="right">
				   <view @click="renzhen" style="margin-left: 165px;" >
					   认证
					<!-- <u-icon name="search" color="#2979ff" @click="toSearch()" size="55"></u-icon> -->
				   </view>
				</view>
			</f-navbar>
		</view>
		
		<!-- 管理记录 -->
		<view v-if="userInfo.isManager">
			<u-cell-group v-for="(item,index)  in shenqingList">
				<u-cell
				@click="shenhe(item,index)"
					v-if='item.status==0'
						size="large"
						:title=item.title
						:value='item.content'
						:label='item.label'
					>
			</u-cell>
			 <u-cell v-if='item.status==1'  value="已审核">
				<view
					slot="title"
					class="u-slot-title"
				>
					<text class="u-cell-text">{{item.title}}</text>
					<u-tag
						text="已批准"
						plain
						size="mini"
						type="success"
						style='width: 50px;'
					>
					
					</u-tag>
				</view>
			</u-cell>
			<u-cell v-if='item.status==2' value="已审核">
				<view
					slot="title"
					class="u-slot-title"
				>
					<text class="u-cell-text">{{item.title}}</text>
					<u-tag
						text="已拒绝"
						plain
						size="mini"
						type="error"
						style='width: 50px;'
					>
					</u-tag>
				</view>
			</u-cell>
			</u-cell-group>
		</view>	
		
		<!-- 申请记录 -->
		<view v-else>
			<u-cell-group >
				<u-cell
				@click="shanchu($event)"
					size="large"
					:title='renzhenInfo.title'
					:value='renzhenInfo.content'
					:label='renzhenInfo.label'
				></u-cell>
			</u-cell-group>
		</view>		
		
		
		
		<view>
			<u-action-sheet @close="closeSheet" :actions="list" @select="selectClick" :title="title" :show="show"></u-action-sheet>
			<!-- <u-button @click="show = true">打开ActionSheet</u-button> -->
		</view>
		<view >
			<!-- <u-modal showCancelButton buttonReverse @confirm='confirm' @cancel="close" :show="show_sure" style='text-align: center;' :title="title_sure" :content='content_sure'></u-modal> -->
		<!-- 	<modal v-if="show_sure" :title="content_sure" confirm-text="确定" cancel-text="取消" @cancel="close" @confirm="confirm"> 
						<input type='password' placeholder="姓名" v-model="name" />
						<input type='password' placeholder="身份证" v-model="idcard" />
					</modal> -->
			<view :hidden="userFeedbackHidden" class="popup_content">
						<view class="popup_title" style="color='#4e5667'">{{content_sure}}</view>
						<view style="margin-top: 30px;">
						 <u--input
						    placeholder="请输入姓名"
						    border="surround"
						    v-model="name"
						  ></u--input>
						  <view style="height: 20px;"></view>
						  <u--input
						     placeholder="请输入身份证"
						     border="surround"
						     v-model="idcard"
						   ></u--input>
						   
						  </view>
				
							<view style="margin-top: 20px;">
								<u-button style='display: inline-block;width:80px;font-size: 22px;margin-left:30px' type="primary" @click="confirm" :plain="true" :hairline="true" text="确认"></u-button>
								<u-button style='display: inline-block;width:80px;font-size: 22px;margin-left:40px' type="info" @click="close" :plain="true" :hairline="true" text="取消"></u-button>
							</view>
						<!-- </view> -->
					<!-- </view> -->
				</view>
			<view class="popup_overlay" :hidden="userFeedbackHidden" @click="hideDiv()"></view>
			<!-- <u-button @click="show_sure = true">打开</u-button> -->.
			
			<!-- 进行审核的弹窗 -->
			<view :hidden="userFeedbackHidden1" style="height: 180px;" class="popup_content">
						<view class="popup_title" style="color='#4e5667'">{{content_sure}}</view>
						<view style="margin-top: 30px;">
						 <u--input
						    placeholder="拒绝请输入理由"
						    border="surround"
						    v-model="liyou"
						  ></u--input>
						   
						  </view>
				
							<view style="margin-top: 20px;">
								<u-button style='display: inline-block;width:80px;font-size: 22px;margin-left:30px' type="success " @click="confirm1" :plain="true" :hairline="true" text="通过"></u-button>
								<u-button style='display: inline-block;width:80px;font-size: 22px;margin-left:40px' type="error" @click="close1" :plain="true" :hairline="true" text="拒绝"></u-button>
							</view>
						<!-- </view> -->
					<!-- </view> -->
				</view>
			<view class="popup_overlay" :hidden="userFeedbackHidden1" @click="hideDiv()"></view>
			
			
			<!-- 删除弹出框 -->
			<view >
				<u-modal showConfirmButton showCancelButton :show="scshow" :title="sctitle" :content='sccontent' @confirm="scqueren" ref="uModal" @cancel="scquxiao"></u-modal>
			</view>
		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sctitle:'删除',
				scshow:false,
				sccontent:'请确认是否删除本条请求认证记录',
				userFeedbackHidden1: true, // 默认隐藏
				userFeedbackHidden: true, // 默认隐藏
				feedbackContent: '' ,// 输入数量
				name:'',
				idcard:null,
				titleTop: '认证管理',
				title:'可认证村镇',
				list: [

				],
				show: false,
				
				show_sure:false,
				title_sure: '认证警告',
				content_sure: "认证",
				cur:{},
				userInfo:{},
				renzhenInfo:{},
				shenqingList:[],
				liyou:'',
				info:{},
				cur_index:0
			}
		},
		onLoad(){
			let user = {}
			uni.getStorage({
			    key: 'user',
			    success: function (res) {
			       user =  JSON.parse(JSON.stringify(res.data))
			    }
			});
			this.userInfo=user
			this.getList()
			this.getrenzhenList()
			this.getshenqingList()
		},
		methods: {
			scquxiao(){
				this.scshow=false
			},
			scqueren(){
				console.log(this.renzhenInfo)
				this.scshow=false
				uni.request({
					url:'/api/ident/drop_ident',
					method:'POST',
					header:{
						'Xj-Token':this.userInfo.session
					},
					data:{
						identid:this.renzhenInfo.id
					},
					success: (res) => {
						if(res.statusCode==400){
							uni.showToast({
								title: res.data.msg,
								duration: 1000,
							})
							return
						}
						this.renzhenInfo={}
					}
				})
			},
			shanchu(item){
				this.scshow=true
				console.log(item)
			},
			close1(){
				this.userFeedbackHidden1=true
				uni.request({
					url:'/api/ident/partmanager_check_ident',
					method:'POST',
					header:{
						'Xj-Token':this.userInfo.session
					},
					data:{
						identid:this.info.id,
						status:2,
						reject_reason:this.liyou
					},
					success: (res) => {
						this.liyou=''
						if(res.statusCode==400){
							uni.showToast({
								title: res.data.msg,
								duration: 1000,
							})
							return
						}
						this.shenqingList[this.cur_index].status=2
					}
				})
			},
			confirm1(){
				this.userFeedbackHidden1=true
				uni.request({
					url:'/api/ident/partmanager_check_ident',
					method:'POST',
					header:{
						'Xj-Token':this.userInfo.session
					},
					data:{
						identid:this.info.id,
						status:1,
						reject_reason:''
					},
					success: (res) => {
						this.liyou=''
						if(res.statusCode==400){
							uni.showToast({
								title: res.data.msg,
								duration: 1000,
							})
							return
						}
						this.shenqingList[this.cur_index].status=1
					}
				})
			},
			shenhe(item,index){
				this.userFeedbackHidden1=false
				console.log('审核',item)
				this.info = item
				this.cur_index = index
				// uni.request({
				// 	url:'/api/ident/partmanager_check_ident',
				// 	method:'POST',
				// 	header:{
				// 		'Xj-Token':this.userInfo.session
				// 	},
				// 	data:{
				// 		identid:item.id,
				// 	},
				// 	success: (res) => {
				// 		if(res.statusCode==400){
				// 			uni.showToast({
				// 				title: res.data.msg,
				// 				duration: 1000,
				// 			})
				// 			return
				// 		}
				// 	}
				// })
			},
			getshenqingList(){
				if(this.userInfo.session==null || this.userInfo.isManager!=1){
					return
				}
				uni.request({
					url:'/api/ident/partmanager_list_ident',
					method:'POST',
					header:{
						'Xj-Token':this.userInfo.session
					},
					data:{
						status:100
					},
					success: (res) => {
						if(res.statusCode==400){
							uni.showToast({
								title: res.data.msg,
								duration: 1000,
							})
							return
						}
						let tmp = res.data.data.idents
						tmp.forEach(item=>{
							item.title = this.list[item.ident_part-1].text.split('-').pop()+"认证记录"
							if(item.status==0){
								item.label = item.ident_name+"  "+item.ident_idcard
								item.content = '等待审核'
							}else if(item.status==1){
								item.content = '审核通过'
							}else if(item.status==2){
								item.content = '审核未通过'
							}
							
						})
						this.shenqingList = tmp
					}
				})
			},
			getrenzhenList(){
				if(this.userInfo.session==null || this.userInfo.isManager==1){
					return
				}
				uni.request({
					url:'/api/ident/get_ident_record',
					method:'GET',
					header:{
						'Xj-Token':this.userInfo.session
					},
					data:{
						userid:this.userInfo.userId
					},
					success: (res) => {
						if(res.statusCode==400){
							uni.showToast({
								title: res.data.msg,
								duration: 1000,
							})
							return
						}
						let tmp = res.data.data.idents
						// tmp.forEach(item=>{
							tmp.title = this.list[tmp.ident_part-1].text.split('-').pop()+"认证记录"
							if(tmp.status==0){
								tmp.label = '等待审核中'
								tmp.content = '审核中'
							}else if(tmp.status==1){
								tmp.content = '审核通过'
								this.userInfo.identPart = tmp.ident_part
								uni.setStorage({key: 'user',data: this.userInfo});
							}else if(tmp.status==2){
								tmp.content = '审核未通过'
							}else{
								tmp.label = '审核完成'
							}
							 if(tmp.reject_reason!=null){
								tmp.label = tmp.reject_reason
							}
							console.log(tmp)
							this.renzhenInfo = tmp
						// })
					}
				})
			},
			showDiv() { // 显示输入弹出框
				this.userFeedbackHidden = false;
			},
			hideDiv() { // 隐藏输入弹出框
				this.userFeedbackHidden = true;
			},
			submitFeedback(){ //提交

			},
			renzhen(){
				if(this.renzhenInfo.title){
					uni.showToast({
						title: '还存在未完成的认证记录',
						type:'error',
						duration: 1000,
					})
					return
				}
				this.show = true
			},
			closeSheet(){
				this.show = false
			},
			getList(){
				uni.request({
					url:'/api/part/listpart',
					method:'GET',
					// data:httpData,
					success: (res) => {
						let tmp = res.data.data.parts
						tmp.forEach((item)=>{
							item['name']= item.text
						})
						this.list= tmp
					}
				})
			},
			selectClick(item){
				this.cur = item
				this.content_sure = "您是否在"+this.cur.text.split('-').pop()+"进行认证"
				this.userFeedbackHidden = false 
				// console.log(item)
			},
			confirm(){
				console.log('认证确认')
				
				let reg1 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/        //正则表达式定义身份证号正确格式
				
				if (!this.idcard) {      //判断如果身份证号（this.card)num）为空，提示用户输入身份证号
					uni.showToast({
						title: '请输入身份证号',
						icon: 'none'
					})
					return
				}
				
				if (!reg1.test(this.idcard)) {      //判断身份证号格式时候正确
					uni.showToast({
						title: '请输入正确的身份证号',
						icon: 'none'
				        })
				return
				}
				
				let httpData = {
					ident_name:this.name,
					ident_idcard:this.idcard,
					ident_part:this.cur.value,
					
				}
				uni.request({
					url:'/api/ident/create_ident',
					method:'POST',
					header:{
						'Xj-Token':this.userInfo.session
					},
					data:httpData,
					success: (res) => {
						if(res.statusCode==400){
							uni.showToast({
								title: res.data.msg,
								duration: 1000,
							})
						}
						this.name=''
						this.idcard=null
						this.getrenzhenList()
					}
				})
				this.userFeedbackHidden = true
				this.name=''
				this.idcard=null
			},
			shenfen(){
				let reg1 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/        //正则表达式定义身份证号正确格式
				
				if (!this.idcard) {      //判断如果身份证号（this.card)num）为空，提示用户输入身份证号
					uni.showToast({
						title: '请输入身份证号',
						icon: 'none'
					})
					return
				}
				
				if (!reg1.test(this.idcard)) {      //判断身份证号格式时候正确
					uni.showToast({
						title: '请输入正确的身份证号',
						icon: 'none'
				        })
				return
				}
			},
			close(){
				this.userFeedbackHidden = true
				this.name=''
				this.idcard=null
				console.log('取消')
			},
		}
	}
</script>

<style>
.popup_overlay {
			position: fixed;
			top: 0%;
			left: 0%;
			width: 100%;
			height: 100%;
			background-color: black;
			z-index: 1001;
			-moz-opacity: 0.8;
			opacity: .80;
			filter: alpha(opacity=88);
		}
			 
		.popup_content {
			position: fixed;
			top: 50%;
			left: 50%;
			width: 520rpx;
			height: 420rpx;
			margin-left: -270rpx;
			margin-top: -270rpx;
			border: 10px solid white;
			background-color: white;
			z-index: 1002;
			overflow: auto;
		}
			 
		.popup_title {
			width: 480rpx;
			text-align: center;
			font-size: 32rpx;
		}
			 
		.popup_textarea_item {
			padding-top: 5rpx;
			height: 80rpx;
			width: 440rpx;
			background-color: #F1F1F1;
			margin-top: 20rpx;
			margin-left: 20rpx;
			padding-top: 25rpx;
		}
			 
		.popup_textarea {
			width: 410rpx;
			font-size: 26rpx;
			margin-left: 20rpx;
		}
			 
		.popup_button {
			color: #000000;
		}
		.buttons{
			text-align: center;
			font-size: 32rpx;
			margin-top: 40rpx;
			}
</style>
