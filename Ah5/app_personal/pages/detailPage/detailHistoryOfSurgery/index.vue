<template>
	<view class="content">
		<!-- 就诊时间 -->
		<view>
			<view class='title'>
				<text>手术时间</text>
			</view>
			<view class='insertInfo'>
				<input disabled="true" :value='obj.dh_datetime' type="text">
			</view>
		</view>
		<!-- 就诊医院 -->
		<view>
			<view class='title'>
				<text>手术医院</text>
			</view>
			<view class='insertInfo'>
				<input  disabled="true" :value='obj.dh_operation_hospital' type="text">
			</view>
		</view>
		<!-- 就诊原因 -->
		<view>
			<view class='title'>
				<text>手术原因</text>
			</view>
			<view class='insertInfo'>
				<input  disabled="true" :value='obj.dh_operation_cause' type="text">
			</view>
		</view>
		<view>
			<view class='title'>
				<text>手术结果</text>
			</view>
			<view class='insertInfo'>
				<textarea  disabled="true" :value='obj.dh_operation_result' row='10' type="text" />
			</view>
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
				cId:'',
				obj:{},
			}
		},
		methods: {
			addPhysicalExaminationRecord(){
				goto.goto('../addPhysicalExaminationRecord/index');
			},
			getData(){
				let that = this;
				http.Post('sys_fkcy/app_dishis/getWhereId',{id:this.cId},(res)=>{
					that.obj = res.data;
				})
			}
		},
		mounted(){
			this.getData();
		},
		onLoad(option) {
			this.cId = option.id;
		}
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
