<template>
	<view class="content">
		<!-- 体检时间 -->
		<view>
			<view class='title'>
				<text>体检时间</text>
			</view>
			<view class='insertInfo'> 
				<input type="text" v-model='time'>
			</view>
		</view>
		<!-- 体检医院 -->
		<view>
			<view class='title'>
				<text>体检医院</text>
			</view>
			<view class='insertInfo'>
				<input type="text" v-model='hospital'>
			</view>
		</view>
		<!-- 体检项目 -->
		<view>
			<view class='title'>
				<text>体检项目</text>
			</view>
			<view class='insertInfo'>
				<input type="text" v-model='projectName'>
			</view>
		</view>
		<!-- 结果分析 -->
		<view>
			<view class='title'>
				<text>结果分析</text>
			</view>
			<view class='insertInfo'>
				<textarea row='10' type="text" v-model="result_" />
			</view>
		</view>
		<view class='saveBtn' @click="app_phyexaSave()">
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
				result_:'',
				projectName:'',
				hospital:'',
				time:'',
			}
		},
		methods: {
			addPhysicalExaminationRecord(){
				goto.goto('../addPhysicalExaminationRecord/index');
			},
			//添加体检报告
			app_phyexaSave(){
				//1.验证数据非空 2.提交数据至系统
				if(this.result_!='' && this.projectName != '' && this.hospital !='' && this.time!=''){
					let data = {
						ess_id:app.appUserId(),
						//用户id		
						pex_datetime:this.time,
						//体检日期		
						pex_hospital:this.hospital,	
						//	体检医院		
						pex_project	:this.projectName,
						//	体检项目		
						pex_result:this.result_,
						//	体检日期
					};
					http.Post('sys_fkcy/app_phyexa/save.app',data, (res) => {
						// console.log(res);
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
