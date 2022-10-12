//本页面由uniapp切片工具生成，uni-app切片-可视化设计工具(一套代码编译到7个平台iOS、Android、H5、小程序)，软件下载地址：http://www.ymznkf.com/new_view_669.htm
// import app from "../../App.vue"


	// 定义全局参数,控制数据加载
	var _self, page = 1,timer = null;
import { mapState, mapMutations } from 'vuex';
	export default {
		computed:{
		 	...mapState(['paperList']),
		},
		data() {
			return {
				loadingText: '',
				userInfo:{},
				list_Messages: [
				{
					subject:'百宝乡消息通知【官方】',
					time:'',
					smallTitle:'',
					vote:'0',
					icon:'/static/msg/images/msg_icon_40.jpg',
					type:'bbx'
				},{
					subject:'村务通消息通知【官方】',
					time:'',
					smallTitle:'',
					vote:'0',
					icon:'/static/msg/images/msg_icon_40.jpg',
					type:'cwt'
				},{
					subject:'三农消息通知【官方】',
					time:'',
					smallTitle:'',
					vote:'0',
					icon:'/static/msg/images/msg_icon_40.jpg',
					type:'snfw'
				},
				],
				
			
				
				page:0,//当前分页页码
				apiUrl:'',//后端接口地址
				id:'',//传值使用,方便存在本地的locakStorage  
				del_id:'',//方便存在本地的locakStorage 
				offset:0,
				limit:9,
				platform_id:1,
				pusher_type :1	
			}
		},
		components:{

		},
		
		onLoad(options) {
			_self = this;
			let user = {}
			uni.getStorage({
			    key: 'user',
			    success: function (res) {
			       user =  JSON.parse(JSON.stringify(res.data))
			    }
			});
			this.userInfo=user
			// this.$store.commit('clearPL')
			// this.getPages()
			//检查是否登录参考代码,需要用的时候，可以把注释取掉
			//if(this.checkLogin()==false){
			//	return;
			//}
			
			//this.getLaction();//得到gps

			this.page=0;

			//检测有没有传入id参数
			if (options.id != null && options.id !=""){
				this.id=options.id;
			}   
			//执行初始化,需要用的时候，可以把注释取掉
			//this.Refresh("init");

		},
		onShow() {
			if(this.userInfo.session==null){
				uni.showToast({
					title: "请先登录",
					duration: 1000,
				})
				return 
			}
			console.log("on show");
			//if(this.checkLogin()==false){
			//	return;
			//}
			this.$store.commit('clearPL')	
			//执行初始化,需要用的时候，可以把注释取掉
			//this.Refresh("init");
			this.offset=0
			this.limit=9
			this.platform_id=1
			this.pusher_type=1
			this.getData()
		},
		onPullDownRefresh: function() {
			//下拉刷新的时候请求一次数据
			this.Refresh();
		},
		onReachBottom(){
			console.log('pull')
			this.offset +=9
			this.getData()
		},
		methods: {
			opData(){
				let datalist = this.paperList,res=[]
				for(let i =0;i<datalist.length;i++){
					let obj={}
					obj.subject = datalist[i].pusher_type==1?'文章评论通知':'文章回复通知',
					obj.time = datalist[i].created_at.split('T').pop()
					obj.smallTitle = datalist[i].pushe_content
					obj.vote=datalist[i].status
					obj.icon ='/static/msg/images/msg_icon_40.jpg'
					obj.url = datalist[i].target_url
					obj.msg_id = datalist[i].msg_id
					res.push(obj)
				}
				console.log(res)
				return res
			},
			getData(){
				
				let httpData = {
					offset:this.offset,
					limit:this.limit,
					platform_id:this.platform_id,
					pusher_type:this.pusher_type
				}
				
				uni.request({
					url:'/api/pusher/get_unread_num',
					withCredentials:true,
					header:{
						'Xj-Token':this.userInfo.session
					},
					method:'GET',
					data:httpData,
					
					success: (res) => {
						console.log(res.data.data)
						this.list_Messages[0].vote = res.data.data.bbx
						this.list_Messages[1].vote = res.data.data.cwt
						this.list_Messages[2].vote = res.data.data.snfw
						
						// this.$store.commit('setPaperList',res.data.data.msgs)
						// this.list_Messages= this.opData()
					},
					fail:(e)=>{
						this.list_Messages[0].vote = 0
						this.list_Messages[1].vote = 0
						this.list_Messages[2].vote = 0
						uni.showToast({
							title: e,
							duration: 1000,
						})
					}
					
				})
			},
			/**
			* icon_4处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			icon_4_click:function(event){
				this.$store.commit('clearPL')
				this.offset = 0
				this.pusher_type=1
				this.getData()
			},
			
			/**
			* icon_5处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			icon_5_click:function(event){
				this.$store.commit('clearPL')
				this.offset = 0
				this.pusher_type=2
				this.getData()
			
			},
			icon_66_click(){
				console.log('一键阅读')
				uni.request({
					url:'/api/pusher/set_readable_types',
					withCredentials:true,
					header:{
						'Xj-Token':this.userInfo.session
					},
					method:'POST',
					data:{
						platform_id:this.platform_id
					},
					
					success: (res) => {
						// console.log()
						console.log('访问未知消息成功')
						this.list_Messages.forEach((e)=>{
							e.vote=0
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
			/**
			* icon_6处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			icon_6_click:function(event){
				console.log(6)
			
			},
			
			/**
			* msg_17_17处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			msg_17_17_click:function(event){
			
			},
			icon_44_click(event,index){
				var ev = event || window.event;
				  if(ev && ev.stopPropagation) {
				    //非IE浏览器
				    ev.stopPropagation();
				  } else {
				    //IE浏览器(IE11以下)
				    ev.cancelBubble = true;
				  }
				this.list_Messages[index].vote=0
				uni.request({
					url:'/api/pusher/set_readable_single',
					withCredentials:true,
					header:{
						'Xj-Token':this.userInfo.session
					},
					method:'POST',
					data:{
						msg_id:event.msg_id
					},
					
					success: (res) => {
						// console.log()
						console.log('访问未知消息成功')
					},
					fail:(e)=>{
						uni.showToast({
							title: e,
							duration: 1000,
						})
					}
					
				})
			},
			/**
			* icon_40处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			icon_40_click:function(event){
				// console.log(event.url.split('?')[1].split('=')[1])
				console.log(event.type)
				if(event!=0){
					uni.navigateTo({
						url:'/pages/tabbar/tabbar-4/tabbar-4?type='+event.type
					})
				}
			},
			
			

			//刷新数据
			Refresh:function(_action) {
			
				uni.showLoading();
				
				//提交到服务器
				var that = this
				var url=that.apiUrl+'{server_code_file_path}';
				console.log(url);
				uni.request({
				url: url,//后端接口地址，需要改成自己的接口地址
				data: {
					action: _action,//上传动作，如按钮点击会产生click动作，分页也会产生，在后端根据具体的动作来判断事件
					uid: that.getUid(),//上传用户id,在登录中获得
					//上传页面中的变量
					//定义变量---start
					
					//定义变量---end
					id: that.id,//上传id值，后端可以根据此值来操作当前id
					del_id: that.del_id,//在列表中删除按钮选中时，上传到有后端，进行删除操作
					page:that.page
				},
				method: 'GET',
				success: function (res) {//后端返回数据

					// 隐藏导航栏加载框  
					uni.hideNavigationBarLoading();
					// 停止下拉动作  
					uni.stopPullDownRefresh();  

					// 隐藏加载框  
					uni.hideLoading();  

					var tmp = res.data;

					//初始化，对页面上的控件进行赋值操作
					if(_action=="init"){

					}

// {deal_listpages}

					that.subject=tmp.subject;
					that.smallTitle=tmp.smallTitle;
					that.time=tmp.time;
					that.vote=tmp.vote;
					that.icon=tmp.icon;
					


					//如果后端有返回消息，则弹出消息提示
					if (tmp.message != null && tmp.message != "") {
						uni.showToast({
						title: tmp.message,
						icon: 'none',
						duration: 2000
						})
					}



					//如果后端有返回页码，则更改当前页码
					if(tmp.page!=null && tmp.page!=""){
						page=tmp.page;
					}					

				},
				fail: function (res) {
					uni.showToast({
						title: "服务器访问失败",
						icon: 'none',
						duration: 2000
					})
					console.log(res.data);
					console.log('is failed')
				}
				})
			},
		}
	}
