(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-checkbox/u-checkbox"],{402:function(e,t,i){"use strict";i.r(t);var n=i(403),a=i(405);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i(408);var r,s=i(13),c=Object(s["default"])(a["default"],n["render"],n["staticRenderFns"],!1,null,"c4a74aee",null,!1,n["components"],r);c.options.__file="uni_modules/uview-ui/components/u-checkbox/u-checkbox.vue",t["default"]=c.exports},403:function(e,t,i){"use strict";i.r(t);var n=i(404);i.d(t,"render",(function(){return n["render"]})),i.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]})),i.d(t,"recyclableRender",(function(){return n["recyclableRender"]})),i.d(t,"components",(function(){return n["components"]}))},404:function(e,t,i){"use strict";var n;i.r(t),i.d(t,"render",(function(){return a})),i.d(t,"staticRenderFns",(function(){return r})),i.d(t,"recyclableRender",(function(){return o})),i.d(t,"components",(function(){return n}));try{n={uIcon:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(i.bind(null,242))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,t=e.$createElement,i=(e._self._c,e.__get_style([e.checkboxStyle])),n=e.__get_style([e.iconWrapStyle]);e.$mp.data=Object.assign({},{$root:{s0:i,s1:n}})},o=!1,r=[];a._withStripped=!0},405:function(e,t,i){"use strict";i.r(t);var n=i(406),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},406:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i(407));function a(e){return e&&e.__esModule?e:{default:e}}var o={name:"u-checkbox",mixins:[e.$u.mpMixin,e.$u.mixin,n.default],data:function(){return{isChecked:!1,parentData:{iconSize:12,labelDisabled:null,disabled:null,shape:"square",activeColor:null,inactiveColor:null,size:18,value:null,iconColor:null,placement:"row",borderBottom:!1,iconPlacement:"left"}}},computed:{elDisabled:function(){return""!==this.disabled?this.disabled:null!==this.parentData.disabled&&this.parentData.disabled},elLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:null!==this.parentData.labelDisabled&&this.parentData.labelDisabled},elSize:function(){return this.size?this.size:this.parentData.size?this.parentData.size:21},elIconSize:function(){return this.iconSize?this.iconSize:this.parentData.iconSize?this.parentData.iconSize:12},elActiveColor:function(){return this.activeColor?this.activeColor:this.parentData.activeColor?this.parentData.activeColor:"#2979ff"},elInactiveColor:function(){return this.inactiveColor?this.inactiveColor:this.parentData.inactiveColor?this.parentData.inactiveColor:"#c8c9cc"},elLabelColor:function(){return this.labelColor?this.labelColor:this.parentData.labelColor?this.parentData.labelColor:"#606266"},elShape:function(){return this.shape?this.shape:this.parentData.shape?this.parentData.shape:"circle"},elLabelSize:function(){return e.$u.addUnit(this.labelSize?this.labelSize:this.parentData.labelSize?this.parentData.labelSize:"15")},elIconColor:function(){var e=this.iconColor?this.iconColor:this.parentData.iconColor?this.parentData.iconColor:"#ffffff";return this.elDisabled?this.isChecked?this.elInactiveColor:"transparent":this.isChecked?e:"transparent"},iconClasses:function(){var e=[];return e.push("u-checkbox__icon-wrap--"+this.elShape),this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled"),this.isChecked&&this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled--checked"),e},iconWrapStyle:function(){var t={};return t.backgroundColor=this.isChecked&&!this.elDisabled?this.elActiveColor:"#ffffff",t.borderColor=this.isChecked&&!this.elDisabled?this.elActiveColor:this.elInactiveColor,t.width=e.$u.addUnit(this.elSize),t.height=e.$u.addUnit(this.elSize),"right"===this.parentData.iconPlacement&&(t.marginRight=0),t},checkboxStyle:function(){var t={};return this.parentData.borderBottom&&"row"===this.parentData.placement&&e.$u.error("检测到您将borderBottom设置为true，需要同时将u-checkbox-group的placement设置为column才有效"),this.parentData.borderBottom&&"column"===this.parentData.placement&&(t.paddingBottom="8px"),e.$u.deepMerge(t,e.$u.addStyle(this.customStyle))}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.updateParentData(),this.parent||e.$u.error("u-checkbox必须搭配u-checkbox-group组件使用"),this.checked?this.isChecked=!0:e.$u.test.array(this.parentData.value)&&(this.isChecked=this.parentData.value.some((function(e){return e===t.name})))},updateParentData:function(){this.getParentData("u-checkbox-group")},wrapperClickHandler:function(e){"right"===this.parentData.iconPlacement&&this.iconClickHandler(e)},iconClickHandler:function(e){this.preventEvent(e),this.elDisabled||this.setRadioCheckedStatus()},labelClickHandler:function(e){this.preventEvent(e),this.elLabelDisabled||this.elDisabled||this.setRadioCheckedStatus()},emitEvent:function(){var t=this;this.$emit("change",this.isChecked),this.$nextTick((function(){e.$u.formValidate(t,"change")}))},setRadioCheckedStatus:function(){this.isChecked=!this.isChecked,this.emitEvent(),"function"===typeof this.parent.unCheckedOther&&this.parent.unCheckedOther(this)}},watch:{checked:function(){this.isChecked=this.checked}}};t.default=o}).call(this,i(1)["default"])},408:function(e,t,i){"use strict";i.r(t);var n=i(409),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},409:function(e,t,i){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-checkbox/u-checkbox.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-checkbox/u-checkbox-create-component',
    {
        'uni_modules/uview-ui/components/u-checkbox/u-checkbox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(402))
        })
    },
    [['uni_modules/uview-ui/components/u-checkbox/u-checkbox-create-component']]
]);
