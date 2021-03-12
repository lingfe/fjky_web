<template>
	<view class='content'>
		<!-- 体检时间 -->
		<view>
			<view class='title'>
				<text>就诊时间</text>
			</view>
			<view class='insertInfo'>
				<input disabled="true" type="text" :value='obj.mr_datetime'>
			</view>
		</view>
		<!-- 体检医院 -->
		<view>
			<view class='title'>
				<text>就诊医院/门诊</text>
			</view>
			<view class='insertInfo'>
				<input disabled="true" type="text" :value='obj.mr_hospital'>
			</view>
		</view>
		<view>
			<view class='title'>
				<text>就诊科室</text>
			</view>
			<view class='insertInfo'>
				<input disabled="true" type="text" :value='obj.mr_department'>
			</view>
		</view>
		<view>
			<view class='title'>
				<text>就诊类别</text>
			</view>
			<view class='insertInfo'>
				<input disabled="true" type="text" :value='obj.mr_type'>
			</view>
		</view>
		<!-- 结果分析 -->
		<view>
			<view class='title'>
				<text>就诊原因</text>
			</view>
			<view class='insertInfo'>
				<textarea disabled='true' :value='obj.mr_result' row='10' type="text" />
			</view>
		</view>
		<!-- 删除按钮 -->
		<view class='deletBtn' @click="deleteRecord()">
			<text>删除</text>
		</view>
	</view>
</template>
<script>
	import goto from '../../../util/tool/tool.js';
	import http from '../../../util/tool/http.js';
	export default {
		data() {
			return { 
				items:[1,2],
				obj:{
					time_:'2010.10.23',
					name_:'贵州省铜仁市第一人民医院',
					sectionRoom:'脑科',
					section:'自费',
					pro_:'心肺检查',
					result_:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
				},
				cId:'',
			}
		},
		methods: {
			addPhysicalExaminationRecord(){
				goto.goto('../addPhysicalExaminationRecord/index');
			}, 
			getData(){
				let that = this;
				http.Post('sys_fkcy/app_melreds/getWhereId',{id:this.cId},(res) => {
					// console.log(res);
					that.obj = res.data;
				})
			},
			deleteRecord(){
					let that = this;
					uni.showModal({
						title:'确定删除记录内容？',
						content:'备注：删除后不可修复',
						success(res) {
							if(res.confirm){
								http.Post('sys_fkcy/app_melreds/deleteWhereId.app',{id:that.cId}, (res) => {
									// console.log(res);
									uni.showToast({
										title:res.msg,
										icon:'none',
										success() {
											let t = setInterval(()=>{
												clearInterval(t);
												uni.navigateBack();
											},1000);
										}
									})
								})
							}
						}
					});
				}
			
		},
		mounted(){
			this.getData();
		},
		onLoad(option){
			this.cId = option.id;
		}
	}
</script>
<style>
	@import url("../../../util/tool/common.css");
	.deletBtn{
		position: absolute;
		width: 100%;
		text-align: center;
		padding: 1rem 0rem ;
		bottom: 4rem;
	}
	.deletBtn>text{
		border: 1px solid red;
		padding: .5rem 5rem;
		color: red;
		border-radius: 2.5rem;
	}
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
		color:#666666;
		font-size: .8rem;
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

