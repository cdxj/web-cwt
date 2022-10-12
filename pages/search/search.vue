<template>
	<view>
		<!-- <u-navbar placeholder=true leftIconSize='20px' leftText="搜索" :backTextStyle="backTextColor" backIconColor="#fff"  :titleStyle ="background"></u-navbar> -->
		<f-navbar :title="title"  fontColor="#fff" gradient="linear-gradient(-90deg, #e4d002, #ff570a)">
		</f-navbar>
		<view style="margin: 14px;">
			<u-search @search="search()" @custom='search' style='margin-bottom: 14px;' :placeholder='placeholder' searchIconSize='30px' v-model="keyword" :actionStyle="actionStyle"></u-search>
			<view >
				<view class="title">历史记录 <u-icon @click=clear style="display:inline-block;margin-left: 10px" name="trash" size="32"></u-icon></view>
			</view>
		</view>
		<view class="" style=" margin:0 20rpx;">
		    <view style="display: inline-block;margin-top:10px;margin-left: 10px;" v-for="(val,key) in seachTabs" :key="key">
				<u-tag style='display: inline-block;' @click="searchFromTag(val)" shape='circle ' mode="light" :text="val" type="info" />
			</view>
		</view>



	</view>
</template>

<script>
import fNavbar  from '@/uni_modules/f-navbar/components/f-navbar/f-navbar.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	computed:{
	 	...mapState(['seachTabs']),
	},
	data() {
		return {
			placeholder:'请输入关键词搜索',
			background: {
				'background-image': 'linear-gradient(45deg, #ff570a, #e4d002)'
			},
			keyword:'',
			backTextColor: {
				'color': '#ffffff'
			},
			actionStyle:{
				'color':'#39CCCC',
			},
			title:'',
			type:'',
			platform:''
		}
	},
	onLoad(e) {
		if(e){
			console.log(e)
			// 替换搜索框内容
			this.placeholder =!e.title?'请输入关键词':'请搜索与'+e.title+'相关内容'
			this.title = !e.title ?'搜索':e.title
			this.type = e.type
			this.platform = e.platform
		}
	},
	methods:{
		clear(){
			this.$store.commit('clearST')
			console.log('清楚')
		},
		search(){
			if(this.keyword.trim()!=''){
				this.$store.commit('setSearchTabs',this.keyword)
			}
			this.s(this.keyword)
			this.keyword=''
		},
		searchFromTag(tag){
				this.s(tag)
		},
		s(tag){
			console.log('platfomr',this.platform)
			uni.navigateTo({
				url:'/pages/bbx-type-info/bbx-type-info?type=' + this.type+'&title='+this.title+'&keyword='+tag+'&platform='+this.platform
			});  
		}
		
	}
}
</script>

<style lang="scss" scoped>

.container{
    margin:0 20rpx;
    // border:1rpx solid red;
    display: grid;
    //第一个属性：行与行间隔，第二个属性列与列间隔
    grid-gap:10rpx 10rpx;
    //内容整体平均分布
    justify-content: left;
    //单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充
    grid-template-columns: repeat(auto-fill, 100px);

}
.container>view{
    // width:120rpx;
    // height:200rpx;
    // border:1rpx solid red;
}

	.title{
		font-size: 32rpx;
		font-weight: 700;
	}
</style>
