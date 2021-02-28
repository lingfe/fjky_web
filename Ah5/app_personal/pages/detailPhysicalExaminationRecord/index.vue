<template>
	<view class="content">
		<!-- 体检时间 -->
		<view>
			<view class='title'>
				<text>体检时间</text>
			</view>
			<view class='insertInfo'>
				<input disabled="true" type="text" :value='obj.time_'>
			</view>
		</view>
		<!-- 体检医院 -->
		<view>
			<view class='title'>
				<text>体检医院</text>
			</view>
			<view class='insertInfo'>
				<input disabled="true" type="text" :value='obj.name_'>
			</view>
		</view>
		<!-- 体检项目 -->
		<view>
			<view class='title'>
				<text>体检项目</text>
			</view>
			<view class='insertInfo'>
				<input disabled="true" type="text" :value='obj.pro_'>
			</view>
		</view>
		<!-- 结果分析 -->
		<view>
			<view class='title'>
				<text>结果分析</text>
			</view>
			<view class='insertInfo'>
				<textarea disabled='true' :value='obj.result_' row='10' type="text" />
			</view>
		</view>
	</view>
</template>
<script>
	import goto from '../../util/tool/tool.js';
	export default {
		data() {
			return { 
				items:[1,2],
				obj:{
					time_:'2010.10.23',
					name_:'贵州省铜仁市第一人民医院',
					pro_:'心肺检查',
					result_:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
				}
			}
		},
		methods: {
			//测试调用安卓对象
			appToast() {
				//安卓对象
				appNative.toast();
			},
			addPhysicalExaminationRecord(){
				goto.goto('../addPhysicalExaminationRecord/index');
			}
		},
		mounted(){
			
		},
	}
</script>
<style>
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

