(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bbx-type-info-bbx-type-info"],{"29f7":function(t,e,i){"use strict";i.r(e);var n=i("dd8c"),a=i("bf25");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("e147");var s,o=i("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"150e631e",null,!1,n["a"],s);e["default"]=l.exports},"7db2":function(t,e,i){var n=i("a622");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("490f1a73",n,!0,{sourceMap:!1,shadowMode:!1})},a622:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.info[data-v-150e631e]{display:flex;justify-content:space-between;align-items:flex-end;margin-top:-30px;width:92%;padding:%?10?% 4% %?10?% 4%}.info .price[data-v-150e631e]{color:#e65339;font-size:%?30?%;font-weight:600}.info .slogan[data-v-150e631e]{color:#807c87;font-size:%?24?%}.header[data-v-150e631e]{width:100%;height:%?100?%;background-color:#ff570a;display:flex;position:fixed;top:0;z-index:996}.header .scan[data-v-150e631e]{width:%?100?%;height:%?100?%;flex-shrink:1;display:flex;justify-content:center;align-items:center}.header .input[data-v-150e631e]{width:calc(100% - %?200?%);display:flex;justify-content:center;align-items:center;position:relative}.header .input uni-input[data-v-150e631e]{width:calc(100% - %?60?%);height:%?60?%;background-color:#fff;border-radius:%?60?%;padding-left:%?60?%;font-size:%?30?%}.header .input .icon[data-v-150e631e]{width:%?60?%;height:%?60?%;position:absolute;color:#a18090;z-index:996;top:%?20?%;left:0;font-size:%?40?%;display:flex;justify-content:center;align-items:center}.header .menu[data-v-150e631e]{width:%?100?%;height:%?100?%;flex-shrink:1;display:flex;justify-content:center;align-items:center}.header .menu uni-image[data-v-150e631e]{width:%?60?%;height:%?60?%;border-radius:%?60?%}',""]),t.exports=e},bf25:function(t,e,i){"use strict";i.r(e);var n=i("f8ce"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},d8a7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{lang:String,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:Boolean,appParameter:String,formType:String,openType:String}};e.default=n},dd8c:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={fNavbar:i("b006").default,uIcon:i("4bbd").default,uList:i("3104").default,uListItem:i("2b70").default,uCell:i("d9fe").default,uAvatar:i("f081").default,uTag:i("a222").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("f-navbar",{attrs:{title:t.title,fontColor:"#fff",gradient:"linear-gradient(-90deg, #e4d002, #ff570a)"}},[i("v-uni-view",{staticClass:"u-flex",attrs:{slot:"right"},slot:"right"},[i("v-uni-view",{staticStyle:{"margin-left":"165px"}},[i("u-icon",{attrs:{name:"search",color:"#2979ff",size:"55"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSearch()}}})],1)],1)],1),i("u-list",{on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.scrolltolower.apply(void 0,arguments)}}},t._l(t.paperList,(function(e,n){return i("u-list-item",{key:n,staticStyle:{height:"80px"}},[i("v-uni-navigator",{staticClass:"item",attrs:{"hover-class":"none",url:"/pages/details/details?id="+e.docid}},[i("u-cell",{attrs:{title:e.doctitle,size:"max"}},[i("u-avatar",{attrs:{slot:"icon",shape:"square",size:"125",src:e.pic_url,customStyle:"margin: -3px 5px -3px 0"},slot:"icon"})],1),i("v-uni-view",[i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"price",staticStyle:{"margin-left":"80px"}},[1==e.is_collect?i("u-icon",{attrs:{name:"heart-fill",color:"red",size:"28"}}):i("u-icon",{attrs:{name:"heart",size:"28"}}),6==e.doc_type_id?i("u-tag",{staticStyle:{"margin-top":"-20px","margin-left":"20px"},attrs:{size:"mini",text:"租房租地",type:"warning",plain:!0}}):t._e(),7==e.doc_type_id?i("u-tag",{staticStyle:{"margin-top":"-20px","margin-left":"20px"},attrs:{size:"mini",text:"生态农品",type:"warning",plain:!0}}):t._e(),8==e.doc_type_id?i("u-tag",{staticStyle:{"margin-top":"-20px","margin-left":"20px"},attrs:{size:"mini",text:"亲子农旅",type:"warning",plain:!0}}):t._e(),9==e.doc_type_id?i("u-tag",{staticStyle:{"margin-top":"-20px","margin-left":"20px"},attrs:{size:"mini",text:"民宿民居",type:"warning",plain:!0}}):t._e(),10==e.doc_type_id?i("u-tag",{staticStyle:{"margin-top":"-20px","margin-left":"20px"},attrs:{size:"mini",text:"农村美食",type:"warning",plain:!0}}):t._e(),11==e.doc_type_id?i("u-tag",{staticStyle:{"margin-top":"-20px","margin-left":"20px"},attrs:{size:"mini",text:"农村投资",type:"warning",plain:!0}}):t._e(),12==e.doc_type_id?i("u-tag",{staticStyle:{"margin-top":"-20px","margin-left":"20px"},attrs:{size:"mini",text:"定点帮扶",type:"warning",plain:!0}}):t._e(),13==e.doc_type_id?i("u-tag",{staticStyle:{"margin-top":"-20px","margin-left":"20px"},attrs:{size:"mini",text:"名优特新",type:"warning",plain:!0}}):t._e()],1),i("v-uni-view",{staticClass:"slogan"},[t._v(t._s(e.doc_creator_name))])],1)],1)],1)],1)})),1)],1)},r=[]},e147:function(t,e,i){"use strict";var n=i("7db2"),a=i.n(n);a.a},ee7c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{openType:String},methods:{onGetUserInfo:function(t){this.$emit("getuserinfo",t.detail)},onContact:function(t){this.$emit("contact",t.detail)},onGetPhoneNumber:function(t){this.$emit("getphonenumber",t.detail)},onError:function(t){this.$emit("error",t.detail)},onLaunchApp:function(t){this.$emit("launchapp",t.detail)},onOpenSetting:function(t){this.$emit("opensetting",t.detail)}}};e.default=n},f8ce:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("ade3")),r=n(i("5530")),s=(n(i("b006")),i("26cb")),o={computed:(0,r.default)({},(0,s.mapState)(["paperList"])),data:function(){return{title:"文章列表",type:0,keyword:"",pageSize:0,limit:9,platform:"",userInfo:{}}},onLoad:function(t){console.log("e",t),t&&(this.title=t.title,this.type=0|t.type,this.keyword=t.keyword,this.platform=void 0!=t.platform?t.platform:"cwt"),console.log("type",this.platform)},onShow:function(){this.$store.commit("clearPL");var t={};uni.getStorage({key:"user",success:function(e){t=JSON.parse(JSON.stringify(e.data))}}),this.userInfo=t,this.getPages()},methods:{toSearch:function(){uni.navigateTo({url:"/pages/search/search?title="+this.title+"&type="+this.type,fail:function(t){console.log(t)}})},onReachBottom:function(){this.pageSize++,this.getPages(),console.log(this.pageSize)},loadmore:function(){var t=this,e=(0,a.default)({limit:3,type:this.type,order:"desc",offset:3,doc_like:this.keyword,platform:this.platform},"offset",this.paperList.length);uni.request({url:"/api/doc/get_type_docinfo",method:"POST",header:{"Xj-Token":this.userInfo.session},data:e,success:function(e){t.$store.commit("setPaperListAll",e.data.data.docs),console.log("文章分类",t.paperList)}})},getPages:function(){var t=this,e={limit:this.limit,type:this.type,order:"desc",offset:this.pageSize*this.limit,platform:this.platform,doc_like:this.keyword};uni.request({url:"/api/doc/get_type_docinfo",method:"POST",header:{"Xj-Token":this.userInfo.session},data:e,success:function(e){t.$store.commit("setPaperList",e.data.data.docs),console.log("文章分类",t.paperList)}})}}};e.default=o}}]);