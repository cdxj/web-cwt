<template>
	<view class="content">
		<view class="headBox" >
		    <!-- 登录 -->
		    <view style='margin-left: 20px;' class="u-flex u-p-l-30 u-p-r-20 u-p-t-30 u-p-b-30">
		    	<block v-if="userInfo.session" >
		    		<view class="u-m-r-20" >
		                <image class="avatar"  mode="aspectFill" :src="userInfo.headLogo || 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'"></image>
		            </view>
		    		<view  class="u-flex-1" @click="onJump('/pages/user/set')" style='margin-left: 10px;'>
		    			<view class="nickName u-flex">
		                    <view class="name u-m-r-10" v-if="userInfo.name">{{userInfo.name}}</view>
		                </view>
		    			<view  class="detail" v-if="userInfo.phone">手机号：{{userInfo.phone }}</view>
		                <view class="detail" v-else>手机号:未绑定</view>
		    		</view>
		    	</block>
		        <block  v-else>
		        	<view class="u-m-r-20">
		                <view class="avatar u-flex" style="justify-content: left">
		                    <u-icon name="account-fill" color="#fff" size="30"></u-icon>
		                </view>
		            </view>
		        	<view style="justify-content: left" class="u-flex-1" @click="openLogin">
		                <view class="u-font-lg" style="color: #fff;font-weight: bold;">请点击登录</view>
		                <view class="detail">登录后享受更好的服务体验</view>
		            </view>
		        </block>
		    	<!-- <view><u-icon name="arrow-right" color="#fff" size="13"></u-icon></view> -->
		    </view>
			<view class="itemBox" style="padding: 15px;padding-bottom:0px">
			    <view class="titleBox u-flex" style="border: none; float:left">
			        <view class="title">功能与服务</view>
			    </view>
				
			</view>
			
		</view>
		<view style="margin-top:30px;position: absolute;">
			<view style="padding-left: 35rpx" v-for="(item,index) in moreFun" :key="index"  @click="navClick(item.onPlate)">
				<image style="width: 70rpx;height: 70rpx;" :src="item.icon" /><view style="display: inline-block;margin-left: 24rpx;position: relative;top:-10px">{{item.word}}</view>	
			</view>
		<!-- <u-grid :col="5" :border="false">
		    <u-grid-item v-for="(item,index) in moreFun" :key="index"  @click="navClick(item.onPlate)">
		        <view class="u-flex u-p-t-30 u-p-b-30" style="position: relative;flex-direction: column;justify-content: center;">
		            <image style="width: 70rpx;height: 70rpx;" :src="item.icon" />
		            <view class="grid-text" style="color: #666;font-size: 22rpx;">{{item.word}}</view> -->
		            <!-- #ifdef MP-WEIXIN -->
		            <!-- <button style="opacity: 0;width: 100%;height: 100%;position: absolute;left: 0;top: 0;" :open-type="item.word=='客服帮助'?'contact':''"></button> -->
		            <!-- #endif -->
		        <!-- </view>
		    </u-grid-item>
		</u-grid> -->
		</view>
		<u-toast ref="uToast"></u-toast>
		<f-login></f-login>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import fLogin from '@/uni_modules/f-login/components/f-login/f-login';
	export default {
		computed:{
			// ...mapState([]),
			f1(){
				return this.$store.state.userInfo
			}
		},
		watch: {
		    f1(curVal, oldVal) {
		          //这里的curVal就是需要监听的值
				  if(curVal.session!=''){
					  console.log('refresh')
					 uni.reLaunch({
						 url:'/pages/tabbar/tabbar-5/tabbar-5'
					 })
				  }
		    }
		 },
		data() {
			return {
				userInfo:{},
				title: 'Hello',
				scrollTop:0,
				moreFun: [{
				    icon: '/static/img/page5/funMoreIcon2.png',
				    word: '管理员',
				    onPlate: 'goMyAddressList',
				}, {
				    icon: '/static/img/page5/funMoreIcon1.png',
				    word: '个人设置',
				    onPlate: 'goCashCouponList',
				}, 
				{
				    icon: '/static/img/page5/funMoreIcon3.png',
				    word: '客服帮助',
				    onPlate: 'onHelp',
				}, 
				{
				    icon: '/static/img/page5/funMoreIcon4.png',
				    word: '意见反馈',
				    onPlate: 'goFeedback',
				}, {
				    icon: '/static/img/page5/funMoreIcon5.png',
				    word: '关于我们',
				    onPlate: 'goAbout',
				}, {
				    icon: '/static/img/page5/funMoreIcon1.png',
				    word: '退出应用',
				    onPlate: 'goExit',
				}],
				           
			}
		},
		onShow() {
let user = {}
		uni.getStorage({
		    key: 'user',
		    success: function (res) {
		       user =  JSON.parse(JSON.stringify(res.data))
		    }
		});
		this.userInfo=user
		},
		methods: {
		...mapMutations(['setLoginPopupShow']),
		onJump(url){
			console.log('个人设置')
		    // uni.navigateTo({
		    //     url:url
		    // })
		},
		navClick(event){
			if(event=='goExit'){
				uni.removeStorage({key: 'user'});
				this.userInfo={}

			}else{
				this.$refs.uToast.show({
					type: 'error',
					title:'警告',
					message:'权限缺失,请切换账号!'
				})
			}
			
		},
		openLogin(){
			this.$store.commit('setLoginPopupShow',true)
			
		    // this.userInfo.loginPopupShow=true
			console.log(this.userInfo)
			
		},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		// text-align: left;
		height: 400upx;
		// margin-top: -30px;
	}
	.u-flex-1{
		margin-bottom:10px
	}
	.headBox {
	    padding-top: 128rpx;
	    background: linear-gradient(to left top, #f32735, #fc674d);
	    border-radius: 50% / 0 0 5% 5%;
	    overflow: hidden;
	    .avatar{
	        width: 50px;
	        height: 50px;
	        border-radius: 25px;
	        background-color: #ccc;
	    }
	    .nickName{
	        .btn{
	            font-size: 22rpx;
	            font-weight: normal;
	            color: #666;
	            background: #fff;
	            border-radius: 5rpx;
	            height: 45rpx;
	            line-height: 45rpx;
	            padding: 0 10rpx;
	            position: relative;
	            .itemButton{
	                border-radius: 0;
	                text-align: left;
	                opacity: 0;
	                width: 100%;
	                height: 100%;
	                position: absolute;
	                left: 0;
	                top: 0;
	            }
	        }
	        .name{
	            color: #fff;
	            font-weight: bold;
	            font-size: 32rpx;
	        }
	        .placardVip{
	            background: #2a2e44;
	            color: #f4d6a1;
	            font-size: 22rpx;
	            padding: 4rpx 10rpx;
	            text-align: center;
	            border-radius: 4rpx;
	        }
	        
	    }
	    .detail{
	        color: #fff;
	        font-size: 24rpx;
	        padding-top: 6rpx;
	    }
	}
	.main {
	    padding: 0 24rpx;
	}
	.itemBox {
	    background: #fff;
	    padding: 0 24rpx;
	    border-radius: 20rpx;
	    overflow: hidden;
	    // margin-top: 24rpx;
	    .titleBox {
	        // padding: 32rpx 0;
			padding-top: 10rpx;
			padding-bottom: 50rpx;
	        border-bottom: 1rpx solid #eee;
	        .title {
	            font-size: 18rpx;
	            font-weight: bold;
	        }
	        .word {
	            font-size: 24rpx;
	            color: #999;
	        }
	    }
	    .grid-text{
	        font-size: 24rpx;
	        color: #333;
	        padding-top: 10rpx;
	    }
	}
</style>
