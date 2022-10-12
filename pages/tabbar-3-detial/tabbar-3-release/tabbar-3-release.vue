<template>
	<view class="content">
		<jinEdit placeholder="请输入内容" @editOk="editOk" uploadFileUrl="/#"></jinEdit> 
	</view>
</template>

<script>
import jinEdit from '@/components/jin-edit/jin-edit.vue';	
	export default {
		components: {
		jinEdit
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			editOk(html,text,delta,isPublic) {
				this.$api.post
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
	}
</style>
