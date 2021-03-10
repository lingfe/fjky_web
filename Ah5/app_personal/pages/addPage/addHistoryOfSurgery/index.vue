<template>
	<view class='content'>
		<!-- 就诊时间 -->
		<view>
			<view class='title'>
				<text>手术时间</text>
			</view>
			<view class='insertInfo'>
				<input type="text" v-model='time_'>
			</view>
		</view>
		<!-- 就诊医院 -->
		<view>
			<view class='title'>
				<text>手术医院</text>
			</view>
			<view class='insertInfo'>
				<input type="text" v-model="hostpital_">
			</view>
		</view>
		<view>
			<view class='title'>
				<text>手术原因</text>
			</view>
			<view class='insertInfo'>
				<input type="text" v-model="reson_">
			</view>
		</view>
		<!-- 就诊原因 -->
		<view>
			<view class='title'>
				<text>手术结果</text>
			</view>
			<view class='insertInfo'>
				<textarea row='10' type="text" v-model="result_" />
			</view>
		</view>
		<view class='saveBtn' @click="saveData()">
			<text>保存</text>
		</view>
	</view>
</template>
<script>
	import goto from '../../../util/tool/tool.js';
	import app from '../../../util/tool/andoridFun.js';
	import http from '../../../util/tool/http.js';
	export default {
		data() {
			return { 
				items:[1,2],
				result_:'',
				hostpital_:'',
				time_:'',
				reson_:'',
			}
		},
		methods: {
			addPhysicalExaminationRecord(){
				goto.goto('../addPhysicalExaminationRecord/index');
			},
			saveData(){
				if(this.hostpital_ !='' && this.tiem_ !='' && this.result_ !=''){
					let data ={
						dh_type_state:2,
						dh_type:2,
						ess_id: app.appUserId(),
						dh_operation_cause:this.reson_,
						dh_operation_result:this.result_,
						dh_operation_hospital:this.hostpital_,
						dh_datetime:this.time_,
					}
					http.Post('sys_fkcy/app_dishis/save.app',data,(res) => {
						// console.log(res);
						uni.showToast({
							title:res.msg,
							icon:'none',
							success() {
								let t = setInterval(()=>{
									uni.navigateBack();
									clearInterval(t);
								},1000)
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
