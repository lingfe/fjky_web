<template>
	<view class="content">
		<!-- 就诊时间 -->
		<view>
			<view class='title'>
				<text>药品名称</text>
			</view>
			<view class='insertInfo'>
				<input disabled="true" type="text" value='xxxxxxxxxxxx'>
			</view>
		</view>
		<!-- 就诊医院 -->
		<view>
			<view class='title'>
				<text>服用时间</text>
			</view>
			<view class='insertInfo spe'>
				<input disabled="true"  value='xxxxxx' type="text">
				<view>
					<text> 至</text>
				</view>
				<input disabled="true"  value='xxxxxx' type="text">
			</view>
		</view>
		<!-- 就诊原因 -->
		<view>
			<view class='title'>
				<text>药品名称</text>
			</view>
			<view class='insertInfo'>
				<input disabled="true"  value='xxxxxx' type="text">
			</view>
		</view>
		<view>
			<view class='title'>
				<text>用药原因</text>
			</view>
			<view class='insertInfo'>
				<textarea disabled="true"  value='xxxxxx' row='10' type="text" />
			</view>
		</view>
		<!-- 删除按钮 -->
		<view class='deletBtn'>
			<text>删除</text>
		</view>
	</view>
</template>
<script>
	import goto from '../../../util/tool/tool.js';
	export default {
		data() {
			return { 
				items:[1,2],
			}
		},
		methods: {
		
			addPhysicalExaminationRecord(){
				goto.goto('../addPhysicalExaminationRecord/index');
			}
		},
		mounted(){
			
		},
	}
</script>
<style>
	@import url("../../../util/tool/common.css");
	.deletBtn{
		position: absolute;
		width: 100%;
		text-align: center;
		padding: 1rem 0rem ;
		bottom: 8rem;
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
	.spe{
		font-size: .8rem;
		color:#666666;
	}
	.spe>view{
		display: inline-block;
	}
	.spe input{
		width: 31%;
		display: inline-block;
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
		color: #666666; 
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

