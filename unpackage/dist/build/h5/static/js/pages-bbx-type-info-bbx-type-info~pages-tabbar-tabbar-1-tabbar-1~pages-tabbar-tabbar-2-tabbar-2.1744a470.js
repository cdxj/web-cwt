(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bbx-type-info-bbx-type-info~pages-tabbar-tabbar-1-tabbar-1~pages-tabbar-tabbar-2-tabbar-2"],{"009e":function(e,t,n){"use strict";n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{type:{type:String,default:uni.$u.props.text.type},show:{type:Boolean,default:uni.$u.props.text.show},text:{type:[String,Number],default:uni.$u.props.text.text},prefixIcon:{type:String,default:uni.$u.props.text.prefixIcon},suffixIcon:{type:String,default:uni.$u.props.text.suffixIcon},mode:{type:String,default:uni.$u.props.text.mode},href:{type:String,default:uni.$u.props.text.href},format:{type:[String,Function],default:uni.$u.props.text.format},call:{type:Boolean,default:uni.$u.props.text.call},openType:{type:String,default:uni.$u.props.text.openType},bold:{type:Boolean,default:uni.$u.props.text.bold},block:{type:Boolean,default:uni.$u.props.text.block},lines:{type:[String,Number],default:uni.$u.props.text.lines},color:{type:String,default:uni.$u.props.text.color},size:{type:[String,Number],default:uni.$u.props.text.size},iconStyle:{type:[Object,String],default:uni.$u.props.text.iconStyle},decoration:{tepe:String,default:uni.$u.props.text.decoration},margin:{type:[Object,String,Number],default:uni.$u.props.text.margin},lineHeight:{type:[String,Number],default:uni.$u.props.text.lineHeight},align:{type:String,default:uni.$u.props.text.align},wordWrap:{type:String,default:uni.$u.props.text.wordWrap}}};t.default=i},"039f":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}));var i={uIcon:n("8f9a").default,uLink:n("c0a5").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("v-uni-view",{staticClass:"u-text",class:[],style:{margin:e.margin,justifyContent:"left"===e.align?"flex-start":"center"===e.align?"center":"flex-end"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickHandler.apply(void 0,arguments)}}},["price"===e.mode?n("v-uni-text",{class:["u-text__price",e.type&&"u-text__value--"+e.type],style:[e.valueStyle]},[e._v("￥")]):e._e(),e.prefixIcon?n("v-uni-view",{staticClass:"u-text__prefix-icon"},[n("u-icon",{attrs:{name:e.prefixIcon,customStyle:e.$u.addStyle(e.iconStyle)}})],1):e._e(),"link"===e.mode?n("u-link",{attrs:{text:e.value,href:e.href,underLine:!0}}):e.openType&&e.isMp?[n("v-uni-button",{staticClass:"u-reset-button u-text__value",style:[e.valueStyle],attrs:{"data-index":e.index,openType:e.openType,lang:e.lang,"session-from":e.sessionFrom,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"app-parameter":e.appParameter},on:{getuserinfo:function(t){arguments[0]=t=e.$handleEvent(t),e.onGetUserInfo.apply(void 0,arguments)},contact:function(t){arguments[0]=t=e.$handleEvent(t),e.onContact.apply(void 0,arguments)},getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.onGetPhoneNumber.apply(void 0,arguments)},error:function(t){arguments[0]=t=e.$handleEvent(t),e.onError.apply(void 0,arguments)},launchapp:function(t){arguments[0]=t=e.$handleEvent(t),e.onLaunchApp.apply(void 0,arguments)},opensetting:function(t){arguments[0]=t=e.$handleEvent(t),e.onOpenSetting.apply(void 0,arguments)}}},[e._v(e._s(e.value))])]:n("v-uni-text",{staticClass:"u-text__value",class:[e.type&&"u-text__value--"+e.type,e.lines&&"u-line-"+e.lines],style:[e.valueStyle]},[e._v(e._s(e.value))]),e.suffixIcon?n("v-uni-view",{staticClass:"u-text__suffix-icon"},[n("u-icon",{attrs:{name:e.suffixIcon,customStyle:e.$u.addStyle(e.iconStyle)}})],1):e._e()],2):e._e()},u=[]},"21ec":function(e,t,n){var i=n("d956");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("0bb79a5c",i,!0,{sourceMap:!1,shadowMode:!1})},"316e":function(e,t,n){"use strict";n.r(t);var i=n("3409"),r=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=r.a},3409:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("793d")),u=i(n("009e")),a={name:"u--text",mixins:[uni.$u.mpMixin,u.default,uni.$u.mixin],components:{uvText:r.default}};t.default=a},3464:function(e,t,n){"use strict";var i=n("761d"),r=n.n(i);r.a},"3bf2":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("uvText",{attrs:{type:e.type,show:e.show,text:e.text,prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,mode:e.mode,href:e.href,format:e.format,call:e.call,openType:e.openType,bold:e.bold,block:e.block,lines:e.lines,color:e.color,decoration:e.decoration,size:e.size,iconStyle:e.iconStyle,margin:e.margin,lineHeight:e.lineHeight,align:e.align,wordWrap:e.wordWrap,customStyle:e.customStyle},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("click")}}})},u=[]},"3c32":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-text",{staticClass:"u-link",style:[e.linkStyle,e.$u.addStyle(e.customStyle)],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.openLink.apply(void 0,arguments)}}},[e._v(e._s(e.text))])},u=[]},4890:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{lang:String,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:Boolean,appParameter:String,formType:String,openType:String}};t.default=i},"555c":function(e,t,n){"use strict";var i=n("21ec"),r=n.n(i);r.a},"6c90":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("a1ef")),u={name:"u-link",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],computed:{linkStyle:function(){var e={color:this.color,fontSize:uni.$u.addUnit(this.fontSize),lineHeight:uni.$u.addUnit(uni.$u.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"};return e}},methods:{openLink:function(){window.open(this.href),this.$emit("click")}}};t.default=u},"6d0f":function(e,t,n){"use strict";n("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={computed:{value:function(){var e=this.text,t=this.mode,n=this.format,i=this.href;return"price"===t?(/^\d+(\.\d+)?$/.test(e)||uni.$u.error("金额模式下，text参数需要为金额格式"),uni.$u.test.func(n)?n(e):uni.$u.priceFormat(e,2)):"date"===t?(!uni.$u.test.date(e)&&uni.$u.error("日期模式下，text参数需要为日期或时间戳格式"),uni.$u.test.func(n)?n(e):n?uni.$u.timeFormat(e,n):uni.$u.timeFormat(e,"yyyy-mm-dd")):"phone"===t?uni.$u.test.func(n)?n(e):"encrypt"===n?"".concat(e.substr(0,3),"****").concat(e.substr(7)):e:"name"===t?("string"!==typeof e&&uni.$u.error("姓名模式下，text参数需要为字符串格式"),uni.$u.test.func(n)?n(e):"encrypt"===n?this.formatName(e):e):"link"===t?(!uni.$u.test.url(i)&&uni.$u.error("超链接模式下，href参数需要为URL格式"),e):e}},methods:{formatName:function(e){var t="";if(2===e.length)t=e.substr(0,1)+"*";else if(e.length>2){for(var n="",i=0,r=e.length-2;i<r;i++)n+="*";t=e.substr(0,1)+n+e.substr(-1,1)}else t=e;return t}}};t.default=i},"761d":function(e,t,n){var i=n("a32b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("48247cbe",i,!0,{sourceMap:!1,shadowMode:!1})},"793d":function(e,t,n){"use strict";n.r(t);var i=n("039f"),r=n("a275");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("555c");var a,o=n("f0c5"),l=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"ed1d90b6",null,!1,i["a"],a);t["default"]=l.exports},"7ca2":function(e,t,n){"use strict";n.r(t);var i=n("3bf2"),r=n("316e");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);var a,o=n("f0c5"),l=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);t["default"]=l.exports},"9f68":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("6d0f")),u=(i(n("4890")),i(n("d5d64")),i(n("009e"))),a={name:"u--text",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default,u.default],computed:{valueStyle:function(){var e={textDecoration:this.decoration,fontWeight:this.bold?"bold":"normal",wordWrap:this.wordWrap,fontSize:uni.$u.addUnit(this.size)};return!this.type&&(e.color=this.color),this.isNvue&&this.lines&&(e.lines=this.lines),this.lineHeight&&(e.lineHeight=uni.$u.addUnit(this.lineHeight)),!this.isNvue&&this.block&&(e.display="block"),uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))},isNvue:function(){var e=!1;return e},isMp:function(){var e=!1;return e}},data:function(){return{}},methods:{clickHandler:function(){this.call&&"phone"===this.mode&&uni.makePhoneCall({phoneNumber:this.text}),this.$emit("click")}}};t.default=a},a1ef:function(e,t,n){"use strict";n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{color:{type:String,default:uni.$u.props.link.color},fontSize:{type:[String,Number],default:uni.$u.props.link.fontSize},underLine:{type:Boolean,default:uni.$u.props.link.underLine},href:{type:String,default:uni.$u.props.link.href},mpTips:{type:String,default:uni.$u.props.link.mpTips},lineColor:{type:String,default:uni.$u.props.link.lineColor},text:{type:String,default:uni.$u.props.link.text}}};t.default=i},a275:function(e,t,n){"use strict";n.r(t);var i=n("9f68"),r=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=r.a},a32b:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-2b5fb029], uni-scroll-view[data-v-2b5fb029], uni-swiper-item[data-v-2b5fb029]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-link[data-v-2b5fb029]{line-height:1;display:flex;flex-direction:row;flex-wrap:wrap;flex:1}',""]),e.exports=t},c0a5:function(e,t,n){"use strict";n.r(t);var i=n("3c32"),r=n("d7ff");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("3464");var a,o=n("f0c5"),l=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"2b5fb029",null,!1,i["a"],a);t["default"]=l.exports},d5d64:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{openType:String},methods:{onGetUserInfo:function(e){this.$emit("getuserinfo",e.detail)},onContact:function(e){this.$emit("contact",e.detail)},onGetPhoneNumber:function(e){this.$emit("getphonenumber",e.detail)},onError:function(e){this.$emit("error",e.detail)},onLaunchApp:function(e){this.$emit("launchapp",e.detail)},onOpenSetting:function(e){this.$emit("opensetting",e.detail)}}};t.default=i},d7ff:function(e,t,n){"use strict";n.r(t);var i=n("6c90"),r=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=r.a},d956:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-ed1d90b6], uni-scroll-view[data-v-ed1d90b6], uni-swiper-item[data-v-ed1d90b6]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-text[data-v-ed1d90b6]{display:flex;flex-direction:row;align-items:center;flex-wrap:nowrap;flex:1;width:100%}.u-text__price[data-v-ed1d90b6]{font-size:14px;color:#606266}.u-text__value[data-v-ed1d90b6]{font-size:14px;display:flex;flex-direction:row;color:#606266;flex-wrap:wrap;text-overflow:ellipsis;align-items:center}.u-text__value--primary[data-v-ed1d90b6]{color:#3c9cff}.u-text__value--warning[data-v-ed1d90b6]{color:#f9ae3d}.u-text__value--success[data-v-ed1d90b6]{color:#5ac725}.u-text__value--info[data-v-ed1d90b6]{color:#909399}.u-text__value--error[data-v-ed1d90b6]{color:#f56c6c}.u-text__value--main[data-v-ed1d90b6]{color:#303133}.u-text__value--content[data-v-ed1d90b6]{color:#606266}.u-text__value--tips[data-v-ed1d90b6]{color:#909193}.u-text__value--light[data-v-ed1d90b6]{color:#c0c4cc}',""]),e.exports=t}}]);