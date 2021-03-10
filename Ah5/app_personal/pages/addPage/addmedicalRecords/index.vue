<template>
	<view class='content'>
		<!-- 就诊时间 -->
		<view>
			<view class='title'>
				<text>就诊时间</text>
			</view>
			<view class='insertInfo'>
				<input type="text" v-model='time'>
			</view>
		</view>
		<!-- 就诊医院 -->
		<view>
			<view class='title'>
				<text>就诊医院/门诊</text>
			</view>
			<view class='insertInfo'>
				<input type="text" v-model='hospital'>
			</view>
		</view>
		<view>
			<view class='title'>
				<text>就诊科室</text>
			</view>
			<view class='insertInfo'>
				<input type="text" v-model="sectionRoom">
			</view>
		</view>
		<view>
			<view class='title'>
				<text>就诊类别</text>
			</view>
			<view class='insertInfo'>
				<input type="text" v-model='section'>
			</view>
		</view>
		<!-- 就诊原因 -->
		<view>
			<view class='title'>
				<text>就诊原因</text>
			</view>
			<view class='insertInfo'>
				<textarea row='10' type="text" v-model='ReasonsTreatment' />
			</view>
		</view>
		<view class='saveBtn' @click="app_melred_save()">
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
				time:'',
				hospital:'',
				sectionRoom:'', 
				section:'',
				ReasonsTreatment:''
			}
		},
		methods: {
			addPhysicalExaminationRecord(){
				goto.goto('../addPhysicalExaminationRecord/index');
			},
			app_melred_save(){
				//判空 并上传数据至系统
				if(this.time!='' && this.hospital!='' && this.sectionRoom !='' && this.ReasonsTreatment !="" && this.section!=""){
					let data = {
						mr_datetime:this.time, 
						mr_hospital:this.hospital,
						mr_department:this.sectionRoom,
						mr_type:this.section,
						mr_result:this.ReasonsTreatment,
						ess_id:app.appUserId(),
					}
					http.Post('sys_fkcy/app_melreds/save.app',data, (res) => {
						uni.showToast({
							title:res.msg,
							icon:'none',
							success() {
								let a = setInterval(()=>{
									clearInterval(a);
									uni.navigateBack(); 
								},1000);
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
		font-size: 1rem;
		padding: 1.3rem;
		margin-left: .2rem;
		font-size: .9rem;
		font-weight: bolder;
	}
	
</style>
