### 概述
这是个基于uni-app内置组件editor的输入框插件，符合uni_modules规范

### 主要功能
 - 提供一个可以插入表情图片的输入框；
 - 获得用户输入内容的全部html代码；

### 基本用法：

```
<template>
	<view>
		<bwin-emoticon-editor @post="处理获取到的html代码"></bwin-emoticon-editor>
	</view>
</template>

```

### 全部支持参数

| 参数名		| 类型	| 默认值		| 作用				|
| -----			| -----	| ------		| -------			|
| placeholder	| String| 开始输入...	|  提示语			|
| html			| String|				|  默认渲染该内容	|

### 提示

 - 由于插件实际上是editor这个富文本组件改造的，所以你通过post获取到的是html代码，也就意味着你在渲染时需要通过富文本的组件来渲染。
 - 插入表情（图片）时为了让表情和文字能够对齐，实际上给img标签带上了‘emoticon-item’这个类名，但不知道为什么没有生效，后续渲染的时候可以自行处理。
 - 插件内置的所有表情，作者均无版权、仅作演示，商用请自行替换，因此带来的版权问题由使用者自行承担。演示素材来自[快乐就好2747@iconfont](https://www.iconfont.cn/collections/detail?cid=7281)。

### 其他作品
 - [bwinAgent多端、多项目全民经纪人【经纪人端】 ](https://ext.dcloud.net.cn/plugin?id=8606)
 - [bwinAgent多端、多项目全民经纪人【管理员端】 ](https://ext.dcloud.net.cn/plugin?id=8607)
 - [bwinBrand多端自适应企业官网、uniCloud云端一体【用户端】](https://ext.dcloud.net.cn/plugin?id=7821)
 - [bwinBrand多端自适应企业官网、uniCloud云端一体【管理端】](https://ext.dcloud.net.cn/plugin?id=7822)
 - [必闻优学，教育培训机构模板（单校区版，纯模板）](https://ext.dcloud.net.cn/plugin?id=7709)
 
### 联系作者
 - QQ：123060128
 - Email：karma.zhao@gmail.com
 - 官网：https://www.2bwin.cn

