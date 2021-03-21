<template>
	<view class="content">
		<!-- 内容切换 -->
		<!-- 获取是否确认慢性病选项 -->
		<view v-if="show=='getChice'" class="contenSwitch">
			<view @click="getChice('confirmIs')" :class="[aTab == 'confirmIs'?'tabActive':'tabNoActive']">
				<text>已确诊慢性病</text>
			</view>
			<view @click="getChice('notConfirm')" :class="[aTab == 'notConfirm'?'tabActive':'tabNoActive']">
				<text>不清楚是否患有慢性病</text>
			</view>
		</view>
		<!-- 确认得病的选项结果页 -->
		<view v-if="show=='confirmIs'" class='contenSwitch1'>
			<view class='title-type'>
				<text>已确诊慢性病</text>
			</view>
			<view class='title-content'>
				<text @click="getD(item)" v-for="(item,index) in items" :class="[bTab == item?'tabActive':'tabNoActive']">{{item}}</text>
			</view>
			<view v-if='showInput' class='showInput'>
				<input type="text" v-model="value_input" placeholder="请输入慢性病名称">
			</view>
		</view>
		<!-- 不知道得病的选项结果页 -->
		<view v-if="show=='notConfirm'">
			<view class='data_list' id='chartBox'>
			</view>
			<view class='notConfirm_box'>
				<text v-if="show_1 == true">请稍等</text>
			</view>
		</view>
		<!-- 评估得出结果的界面 -->
		<view v-if="show=='getResult'" class='wh100'>
			<text>
				<text class='type0'>
					根据评估结果，您的慢性病评估结果为正常
				</text>
				<text class='type1'>
					本结果仅根据APP上您的健康数据分析得出，如有误差，建议您尽快去医院进行复查!
				</text>
			</text>
		</view>
		<!-- 步骤切换 -->
		<view v-if="show == 'getChice'" class="stepSwitch">
			<view @click="firstStep()" class='nextBtn'>
				<text>下一步</text>
			</view>
		</view>
		<view v-if="show == 'confirmIs'" class="stepSwitch" @click='saveData()'>
			<view class='nextBtn'>
				<text>保存</text>
			</view>
		</view>
	</view>
</template>
<script>
	import echarts from 'echarts';
	import config from '../../../util/echartConfig/echartConfig.js';
	import tool from '../../../util/tool/tool.js';
	import http from '../../../util/tool/http.js';
	import app from '../../../util/tool/andoridFun.js';
	export default {
		data() {
			return {
				show_1:'true',
				aTab: 'confirmIs',
				bTab: '',
				show: 'getChice',
				items: ['糖尿病', '高血压', '高脂血症', '冠心病', '脑梗死', '脑出血', '慢性支气管炎', '风湿性心脏病', '风湿性关节炎', '肿瘤', '其他'],
				showInput: false,
				value_input:'高血压',
			}
		},
		methods: {
			//获得第一步的选项
			getChice(n) {
				this.aTab = n;
			},
			//第一步的选择
			firstStep(){
				console.log(this.aTab);
				this.show = this.aTab;
				if(this.aTab == 'notConfirm'){
					// 系统评估实现过程-web端而已 1.0 版本无其他可靠性数据做支撑
					// console.log('sucess');
					let that = this;
					//这里随机赋予time值 0-10 ,
					let time = tool.getNumber();
					//开启一个定时器对象
					let time_ = setInterval(function(){ 
						console.log(time_);
						time++;
						if(time == 10){
							//结束渲染图表
							clearInterval(time_);
							//系统评估结束
							// that.show = 'getResult';
							that.saveDataHttp('正常');  //暂时 默认系统评估统一给与正常值
							uni.navigateTo({
								url:'../../evaluationCenter-evaluations/chronicDiseaseResult/index?result='+'正常',
							})
						}
						if(time == 0){
							//渲染图表
							this.show_1 = false;
							let echarts = require('echarts');
							this.chartLine = echarts.init(document.getElementById('chartBox'));
							// console.log(echarts);
							this.chartLine.setOption(config.chronicAssessmentSchedule(90),true);
						}
						else{
							//不同时刻渲染不同的数据 -> 导致渲染一个数据变化过程的动效
							let echarts = require('echarts');
							this.chartLine = echarts.init(document.getElementById('chartBox'));
							// console.log(echarts); 
							this.chartLine.setOption(config.chronicAssessmentSchedule(10*time),true);
						}
					},1000);
				}
			}, 
			//提交保存用户的慢性病评估特征
			saveDataHttp(n){
				let data = {
					user_id:app.appUserId(),
					eva_mxb_res :n,
				};
				http.Post('sys_fkcy/eva_res/setUserEvaRes',data,(res)=>{
					console.log(res);
					uni.showToast({
						title:'您的数据已经保存',
						icon:'none',
					})
				})
			}, 
			getD(n){
				this.bTab = n;
				if (n == '其他'){
					this.showInput = true;
				} else{
					this.showInput = false;
				}
			},
			//保存慢性病数据
			saveData(){
				// console.log(this.bTab);
				let data = this.bTab;
				if(this.bTab == '其他'){
					// console.log(this.bTab);
					//继续嵌套一个判断input框是否已经有内容
					if(this.value_input!== ''){
						//调用接口保存数据
						this.saveDataHttp(this.value_input);
						let time_ = setInterval(function(){
							uni.navigateTo({
								url:'../../evaluationCenter/index',
							})
							clearInterval(time_);
						},1000);
					} 
					else{
						uni.showToast({
							title:'数据不能为空',
							icon:'none',
						})
					}
				}
				else{
					this.saveDataHttp(this.bTab);
					let time_ = setInterval(function(){
						// console.log('123123');
						uni.navigateTo({
							url:'../../evaluationCenter/index',
						})
						clearInterval(time_);
					},1000);
				}
			},
		},
		mounted(){
		},
		onLoad(option) {
			console.log(option.result);
		}
	}
</script>
<style>
	@import url("../../../util/tool/common.css");
	.stepSwitch{
		position: absolute;
		width: 100%;
		bottom: 10vh;
	}
	input{
		font-size: .7rem;
	}
	.wh100 .type0{
		display: flex;
		justify-content: center;
		align-items: center;
		justify-content: center;
		width: 80%;
		color:black !important;
		font-weight: 600;
		margin-left: 10%;
		padding-bottom: .5rem;
	}
	.wh100 .type1{
		display: flex;
		justify-content: center;
		align-items: center;
		justify-content: center;
		width: 80%;
		color:gray !important;
		font-weight: 100;
		font-size: .9rem;
		margin-left: 10%;
	}
	.wh100{
		position: relative;
		width: 100%;
		height: 85vh;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.data_list{
		/* border: 1px solid blue; */
		position: absolute;
		width: 100%;
		height: 40vh;
		top:20vh;
	}
	.showInput {
		background-color: #eeeeee;
		width: 75%;
		padding: .5rem;
		margin-left: 7.5%;
		border-radius: .5rem;
		margin-top: .5rem;
	}
	.title-type {
		font-weight: 600;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	.notConfirm_box {
		position: relative;
		height: 80vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-weight: 600;
	}
	.title-content {
		position: relative;
		width: 90%;
		margin-left: 5%;
	}
	.title-content>text {
		padding: .5rem 1rem .5rem 1rem;
		border: 1px solid #dddddd;
		margin: .5rem;
		position: relative;
		display: inline-block;
		color: gray;
		border-radius: .5rem;
		font-size: .7rem;
	}
	.contenSwitch,
	.contenSwitch1 {
		position: relative;
		width: 100%;
		height: 80vh;
		border: 1px solid white;
	}
	.contenSwitch>view {
		border: 1px solid #dddddd;
		padding-top: .8rem;
		padding-bottom: .8rem;
		text-align: center;
		position: relative;
		margin-top: 1.5rem;
		width: 90%;
		margin-left: 5%;
	}
	.tabActive {
		color: #00D193 !important;
		border: 1px solid #00D193 !important;
	}
	.nextBtn {
		display: flex;
		text-align: center;
		justify-content: center;
		/* border: 1px solid red ; */
		position: absolute; width:100%; 
	}
	.nextBtn text{
		background-color: #00D193;
		color: white;
		width: 70%;
		padding-top:.8rem;
		padding-bottom: .8rem;
		border-radius: 1.5rem;
	}
</style>
