<template>
	<view class='content'>
		<!-- 就诊时间 -->
		<view>
			<view class='title'>
				<text>遗传疾病名称</text>
			</view>
			<view class='insertInfo'>
				<input type="text" v-model="name_">
			</view>
		</view>
		<!-- 就诊医院 -->
		<view>
			<view class='title'>
				<text>患病亲属关系</text>
			</view>
			<view class='insertInfo'>
				<input type="text" v-model='relation_'>
			</view>
		</view>
		<!-- 就诊原因 -->
		<view>
			<view class='title'>
				<text>是否遗传</text>
			</view>
			<view class='insertInfo'>
				<input type="text" v-model='ron_'>
			</view>
		</view>
		<view class='saveBtn' @click="saveData()">
			<text>保存</text>
		</view>
	</view>
</template>
<script>
	import goto from '../../../util/tool/tool.js';
	import http from '../../../util/tool/http.js';
	import app from '../../../util/tool/andoridFun.js';
	export default {
		data() {
			return { 
				ron_:'',
				name_:'',
				relation_:'',
			}
		},
		methods: {
			addPhysicalExaminationRecord(){
				goto.goto('../addPhysicalExaminationRecord/index');
			},
			saveData(){
				if(this.relation_ !='' && this.name_!='' &&this.relation_!='' ){
					let data ={
						ess_id:app.appUserId(),
						dh_type:3,
						dh_type_state:3,	
						dh_hd_name:this.name_,
						dh_hd_relation:this.relation_,
						dh_hd_is:this.ron_,
					}
					http.Post('sys_fkcy/app_dishis/save.app',data,(res)=> {
						console.log(res);
						uni.showToast({
							title:res.msg,
							icon:'none',
							success() {
								let t = setInterval(()=>{
									clearInterval(t);
									uni.navigateBack();
								})
							}
						})
					})
				}
				else{
					uni.showToast({
						title:'数据不能为空',
						icon:'none',
					})
				}
			}
		},
		mounted(){
			
		},
	}
</script>
<style>
	@import url("../../../util/tool/common.css");
	.content{
		border-top: 1px solid #eeeeee; 
	}
	.saveBtn{
		margin:10%;
		text-align: center;
		padding: .5rem 0;
		background-color: #00D193;
		color: white;
		border-radius: 1rem;
	}
	input,textarea{
		background-color: #F5F5F5;
		margin:-.5rem 1.5rem;
		height: 1.5rem;
		/* border: 1px solid red; */ 
		padding: .5rem .5rem;
		border-radius: .5rem;
	}
	textarea{
		height: 5rem !important;
	}
	.title{
		/* border: 1px solid red; */
		font-size: .9rem;
		padding: 1.3rem;
		margin-left: .2rem;
		font-size: .9rem;
		font-weight: bolder;
	}
	
</style>
