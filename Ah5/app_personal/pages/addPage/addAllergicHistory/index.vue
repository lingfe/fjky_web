<template>
	<view class='content'>
		<!-- 就诊时间 -->
		<view>
			<view class='title'>
				<text>发现时间</text>
			</view>
			<view class='insertInfo'>
				<input type="text" v-model='time'>
			</view>
		</view>
		<!-- 就诊医院 -->
		<view>
			<view class='title'>
				<text>过敏食物/药品</text>
			</view>
			<view class='insertInfo'>
				<input type="text" v-model='medical'>
			</view>
		</view>
		<!-- 就诊原因 --> 
		<view>
			<view class='title'>
				<text>过敏症状</text>
			</view>
			<view class='insertInfo'>
				<textarea row='10' type="text" v-model="outShow" />
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
				items:[1,2],
				time:'',
				outShow:'',
				medical:'',
			}
		},
		methods: {
			addPhysicalExaminationRecord(){
				goto.goto('../addPhysicalExaminationRecord/index');
			},
			saveData(){
				//判空 提交数据
				if(this.time !='' && this.outShow!='' &&this.medical!=''){
					let data = {
						// 0	过敏史	公共/健康相关/过往病史/疾病类型	
						// 1	疾病史	公共/健康相关/过往病史/疾病类型	
						// 2	手术史	公共/健康相关/过往病史/疾病类型	
						// 3	家族史	公共/健康相关/过往病史/疾病类型
						ess_id:	app.appUserId(),//	客户id(基本信息id)		 
						dh_type:0 ,	// 过敏史
						dh_type_state: 0,
						dh_datetime:this.time,	//	日期时间(患病时间/用药时间/发现时间)等		
						dh_allergy_drugs:this.medical,	//	过敏药品		
						dh_allergy_symptom:this.outShow	//	过敏症状 
					};
					http.Post('/sys_fkcy/app_dishis/save.app',data, (res) => {
						// console.log(res);
						uni.showToast({
							title:res.msg,
							icon:'none', 
							success() {
								let t = setInterval(()=>{
									clearInterval(t);
									uni.navigateBack();
								},1000)
							}
						})
					})
				}
				else{
					uni.showToast({
						title:'数据不能为空',
						icon:"none",
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
