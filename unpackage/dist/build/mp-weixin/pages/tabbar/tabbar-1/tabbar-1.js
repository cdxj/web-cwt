(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-1/tabbar-1"],{"143f":function(t,e,i){},"2c4f":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}));var n={uniDataSelect:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uni-data-select/components/uni-data-select/uni-data-select")]).then(i.bind(null,"a5b1"))},uniIcons:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(i.bind(null,"b1f0"))},zwyPopup:function(){return i.e("uni_modules/zwy-popup/components/zwy-popup/zwy-popup").then(i.bind(null,"8e8c"))}},o=function(){var t=this,e=t.$createElement;t._self._c},c=[]},"6c25":function(t,e,i){"use strict";(function(t){i("962e");n(i("66fd"));var e=n(i("b409"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},7738:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("26cb");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var a={computed:c({},(0,n.mapState)(["userInfo"])),data:function(){return{value:0,ishide:!1,range:[],swiperList:[{sid:0,src:"自定义src0",img:"/static/HM-shophome/swiper-img/3.jpg"},{sid:1,src:"自定义src1",img:"/static/HM-shophome/swiper-img/1.jpg"},{sid:2,src:"自定义src2",img:"/static/HM-shophome/swiper-img/2.jpg"},{sid:3,src:"自定义src3",img:"/static/HM-shophome/swiper-img/3.jpg"}],categoryList:[[{cat_id:0,img:"/static/HM-shophome/category-img/0.png",title:"生态产品"},{cat_id:1,img:"/static/HM-shophome/category-img/1.png",title:"XXXX"},{cat_id:2,img:"/static/HM-shophome/category-img/2.png",title:"民宿"},{cat_id:3,img:"/static/HM-shophome/category-img/3.png",title:"租房租地"},{cat_id:4,img:"/static/HM-shophome/category-img/4.png",title:"农村美食"},{cat_id:5,img:"/static/HM-shophome/category-img/5.png",title:"农村投资"},{cat_id:6,img:"/static/HM-shophome/category-img/6.png",title:"定点帮扶"},{cat_id:7,img:"/static/HM-shophome/category-img/7.png",title:"特产"}]],paperList:[],categoryHeight:"120px",currentPageindex:0,headerPosition:"fixed",loadingText:"正在加载..."}},onLoad:function(){var t=this;this.$api.get("/api/part/listpart").then((function(e){t.range=e.data.data.parts})),this.getPages()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){setTimeout((function(){t.stopPullDownRefresh()}),1e3)},onReady:function(){},methods:{getPages:function(){var t=this,e={nums:6};this.$api.post("/api/doc/get_recommend_doc",e).then((function(e){t.paperList=e.data.data.docs,console.log(e)}))},change:function(t){console.log(t)},toSearch:function(){t.showToast({title:"建议跳转到新页面做搜索功能"})},toSwiper:function(e){t.showToast({title:e.src})},toCategory:function(e){t.showToast({title:e.title})},toGoods:function(e){t.showToast({title:"文章"+e.doctitle})},categoryChange:function(t){this.currentPageindex=t.detail.current},categoryImgLoad:function(t){this.categoryImg=this.categoryImg?this.categoryImg+1:1,10==this.categoryImg&&this.getCategoryHeight()},getCategoryHeight:function(){var e=this,i=t.createSelectorQuery().select(".category-list");i.fields({size:!0},(function(t){e.categoryHeight=t.height+"px"})).exec()}}};e.default=a}).call(this,i("543d")["default"])},b409:function(t,e,i){"use strict";i.r(e);var n=i("2c4f"),o=i("ba79");for(var c in o)"default"!==c&&function(t){i.d(e,t,(function(){return o[t]}))}(c);i("bd96");var r,a=i("f0c5"),s=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);e["default"]=s.exports},ba79:function(t,e,i){"use strict";i.r(e);var n=i("7738"),o=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=o.a},bd96:function(t,e,i){"use strict";var n=i("143f"),o=i.n(n);o.a}},[["6c25","common/runtime","common/vendor"]]]);