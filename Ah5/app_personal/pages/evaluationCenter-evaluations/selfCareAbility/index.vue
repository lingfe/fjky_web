<template>
	<view class='content'>
		<view class='subContent' v-for='(item,index) in items' v-if="item.show">
			<!-- 问题 -->
			<view class='title_question'>
				<text>
					{{item.title}}
				</text>
			</view>
			<!-- 问题选项 -->
			<view v-for='(item,index) in item.subText' class='items_answer'>
				<view :value='item.score' @click="getChice(index,item.score)"
					:class="[aTab == 'aTab'+index?'tabActive':'tabNoActive']">
					{{item.text}}
				</view>
			</view>
		</view>
	<!-- 	<view v-if='!now' class='wh100'>
			<view>
				<view class='type'>
					{{zTotal}}
				</view>
				<view class='type0'>
					恭喜您完成评估！
				</view>
				<view class='type1'>
					您的认知能力等级是{{abilityLevel}}
				</view>
			</view>
		</view> -->
		<!-- 触发按钮 -->
		<view v-if='now' @click='next()' class='nextBtn'>
			<text>下一步</text>
		</view>
		<view v-else='now' @click='gotoBack()' class='nextBtn'>
			<text>完成</text>
		</view>
	</view>
</template>
<script>
	import http from '../../../util/tool/http.js';
	import app from '../../../util/tool/andoridFun.js';
	export default {
		data() {
			return {
				abilityLevel: '',
				zTotal: 0,
				cTotal: null,
				now: true,
				aTab: '',
				//组织出问卷的数据
				items: [{
						show: true,
						title: '能否独立进食',
						subText: [{
								text: '可独立进食',
								score: '10',
							},
							{
								text: '需部分帮助',
								score: '5',
							},
							{
								text: '需极大帮助或完全依赖他人',
								score: '0',
							}
						],
					},
					{
						show: false,
						title: '能否独立洗澡',
						subText: [{
								text: '准备好洗澡水后,可独立完成',
								score: '5'
							},
							{
								text: '在洗澡过程中需他人帮助',
								score: '0'
							},
						],
					},
					{
						show: false,
						title: '能否独立洗脸、刷牙、梳头',
						subText: [{
								text: '可自己独立完成',
								score: '5'
							},
							{
								text: '需他人帮助',
								score: '0'
							},
						],
					},
					{
						show: false,
						title: '能否独立穿衣',
						subText: [{
								text: '可独立完成',
								score: '10'
							},
							{
								text: '需部分帮助',
								score: '5'
							},
							{
								text: '需极大帮助或完全依赖他人',
								score: '0'
							},
						],
					},
					{
						show: false,
						title: '能否控制大小便',
						subText: [{
								text: '可控制大便',
								score: '10'
							},
							{
								text: '偶尔失控，或需他人提醒',
								score: '5'
							},
							{
								text: '完全失控',
								score: '0'
							},
						],
					},
					{
						show: false,
						title: '能否独立上厕所',
						subText: [{
								text: '可独立完成',
								score: '10'
							},
							{
								text: '需部分帮助',
								score: '5'
							},
							{
								text: '需极大帮助或完全依赖他人',
								score: '0'
							},
						],
					},
					{
						show: false,
						title: '桌椅转移',
						subText: [{
								text: '可独立完成',
								score: '15'
							},
							{
								text: '需部分帮助',
								score: '10'
							},
							{
								text: '需极大帮助',
								score: '5'
							},
							{
								text: '完全依赖他人',
								score: '0'
							},
						],
					},
					{
						show: false,
						title: '平地行走',
						subText: [{
								text: '可独立完成',
								score: '15'
							},
							{
								text: '需部分帮助',
								score: '10'
							},
							{
								text: '需极大帮助',
								score: '5'
							},
							{
								text: '完全依赖他人',
								score: '0'
							},
						],
					},
					{
						show: false,
						title: '上下楼梯',
						subText: [{
								text: '完全独立',
								score: '15'
							},
							{
								text: '需部分帮助',
								score: '10'
							},
							{
								text: '需极大帮助',
								score: '0'
							}
						],
					},
				],
			}
		},
		methods: {
			//下一步的方法执行
			next() {
				for (var i = 0; i < this.items.length; i++) {
					if (i == this.items.length - 1) {
						//切换成完成评估的界面
						this.items[i].show = false;
						this.now = false;
						// console.log('总分数：'+this.zTotal);
						if (parseInt(this.zTotal) <= 40) {
							this.abilityLevel = '重度依赖,全部需要他人照护';
						} else if (40 < parseInt(this.zTotal)<= 60) {
							this.abilityLevel = '中度依赖,大部分需要他人照护';
						} else if (60 <parseInt(this.zTotal) <= 80) {
							this.abilityLevel = '轻度依赖，少部分需要他人照护';
						} else if (parseInt (this.zTotal) == 100) {
 							this.abilityLevel = '无需依赖，无需他人照护';
						}
						this.saveDataHttp(this.abilityLevel);
						uni.navigateTo({
							url:'../../evaluationCenter-evaluations/selfCareAbilityResult/index?result='+this.abilityLevel,
						})
						return false;
					}
					//切换下一个问题展示
					if (this.items[i].show == true){
						if (this.cTotal != null) {
							//记录分数
							this.zTotal = this.zTotal + parseInt(this.cTotal);
							this.items[i].show = false;
							this.items[i + 1].show = true;
							this.aTab = '';
							this.cTotal = null;
							return false;
						} else {
							uni.showToast({
								title: '请选择内容',
								icon: 'none',
								duration: 1000,
							})
							return false;
						}

					}
				}
			},
			//获取每个选项的点击方法
			getChice(n, m) {
				//这里记住每个选项 得分
				// console.log(n,m);
				this.aTab = 'aTab' + n;
				this.cTotal = m;
				console.log(this.cTotal);
			},
			gotoBack() {
				uni.navigateTo({
					url: '../../evaluationCenter/index'
				})
			},
			//提交保存用户的自理能力评估特征
			saveDataHttp(n){
				let data = {
					user_id:app.appUserId(),
					eva_zlnl_res :n , 
				};
				http.Post('sys_fkcy/eva_res/setUserEvaRes',data,(res)=>{
					console.log(res);
					uni.showToast({
						title:'您的数据已经保存',
						icon:'none',
					})
				})
			}, 
		},
		mounted(){},
		onLoad(option) {
			console.log(option.result);
		}
	}
</script>
<style>
	@import url("../../../util/tool/common.css");

	.wh100 .type {
		text-align: center;
		font-size: .9rem;
		padding-bottom: .5rem;
		font-weight: 600;
	}

	.wh100 .type0 {
		color: black !important;
		font-weight: 600;
		padding-bottom: .5rem;
		text-align: center;
	}

	.wh100 .type1 {
		color: gray !important;
		font-weight: 100;
		font-size: .9rem;
		text-align: center;
	}

	.wh100 {
		position: relative;
		width: 100%;
		height: 60vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.tabActive {
		color: #00D193 !important;
		border: 1px solid #00D193 !important;
	}

	.items_answer {
		/* border: 1px solid red; */
		text-align: center;
	}

	.items_answer>view {
		padding: .5rem 1rem .5rem 1rem;
		border: 1px solid #eeeeee;
		width: 80%;
		margin-left: 5%;
		margin-top: 5%;
	}

	.nextBtn {
		/* border: 1px solid red; */
		text-align: center;
		padding-top: .8rem;
		padding-bottom: .8rem;
		position: absolute;
		justify-content: center;
		width: 100%;
		bottom: 10%;
	}

	.nextBtn text {
		padding-top: .5rem;
		padding-bottom: .5rem;
		padding-left: 5rem;
		padding-right: 5rem;
		background-color: #00D193;
		color: white;
		border-radius: 2.5rem;
	}

	.title_question {
		width: 100%;
		display: flex;
		flex-direction: rows;
		justify-content: center;
		text-align: center;
		padding-top: .8rem;
		padding-bottom: .8rem;
		font-size: .9rem;
		color: black;
		font-weight: 600;
	}
</style>
