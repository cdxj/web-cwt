(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video"],{"099c":function(e,t,a){"use strict";a.r(t);var r=a("b00d"),n=a("c636");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("577d");var c,i=a("f0c5"),u=Object(i["a"])(n["default"],r["b"],r["c"],!1,null,"fad0da96",null,!1,r["a"],c);t["default"]=u.exports},3817:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("26cb");function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var i=function(){Promise.all([a.e("common/vendor"),a.e("components/active-form/active-form")]).then(function(){return resolve(a("758a"))}.bind(null,a)).catch(a.oe)},u={computed:o({},(0,r.mapState)(["userInfo"])),components:{ActiveForm:i},data:function(){return{formData:[{id:"kjjnsasd",placeholder:"输入文章",label:"标题",type:"text",disabled:!1,rules:{name:"name",value:"",verify:!0,errMess:"文章标题未填写",regexp:"^赵"}},{id:"asdfdfgd",label:"图片 ",type:"file",accept:"image",capture:["album","camera"],maxCount:2,sizeType:["original","compressed"],compressed:!0,camera:"back",multiple:!0,maxSize:Number.MAX_VALUE,previewImage:!0,disabled:!1,rules:{name:"photo",fileList:[],verify:!1,errMess:"请选择图片"}},{id:"oodsndf",placeholder:"请选择类型",label:"类型",type:"checkbox",list:[{value:1,name:"类型1",disabled:!0},{value:2,name:"类型2"},{value:3,name:"类型3"},{value:4,name:"类型4"},{value:5,name:"类型5"},{value:6,name:"类型6"},{value:7,name:"类型7"},{value:8,name:"类型8"},{value:9,name:"类型9"}],rules:{name:"interest",value:[],label:["类型1"],verify:!1,errMess:"请选择文章类型"}},{id:"koptymk",placeholder:"Tag",label:"Tag",type:"text",rules:{name:"company",value:"",verify:!1,errMess:"Tag名称不能为空"}},{id:"asdfgf",placeholder:"(文章详情)",label:"文章内容",type:"textarea",rules:{name:"experience",value:"",verify:!0,errMess:"请输入文章内容"}}]}},onLoad:function(){},watch:{formData:{handler:function(e,t){},deep:!0}},methods:{sub:function(){var e={title:this.formData[0].rules.value,pic_lists:this.formData[1].rules.fileList,doc_type_id:1,tag:this.formData[3].rules.value,content:this.formData[4].rules.value,user_id:this.userInfo.id,part_id:1};this.$api.post("/api/doc/doc_create",e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}};t.default=u},"577d":function(e,t,a){"use strict";var r=a("adf7"),n=a.n(r);n.a},adf7:function(e,t,a){},b00d:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return r}));var r={activeForm:function(){return Promise.all([a.e("common/vendor"),a.e("components/active-form/active-form")]).then(a.bind(null,"758a"))}},n=function(){var e=this,t=e.$createElement;e._self._c},o=[]},c636:function(e,t,a){"use strict";a.r(t);var r=a("3817"),n=a.n(r);for(var o in r)"default"!==o&&function(e){a.d(t,e,(function(){return r[e]}))}(o);t["default"]=n.a},e271:function(e,t,a){"use strict";(function(e){a("962e");r(a("66fd"));var t=r(a("099c"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=a,e(t.default)}).call(this,a("543d")["createPage"])}},[["e271","common/runtime","common/vendor"]]]);