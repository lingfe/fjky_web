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
<!-- 		<view v-if='!now' class='wh100'>
			<view>
				<view class='type'>
					{{zTotal}}
				</view>
				<view class='type0'>
					恭喜您完成评估！
				</view>
				<view class='type1'>
					您的心理健康评估是{{abilityLevel}}
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
						title: '担心、担忧、感到最坏的事将要发生，容易惹怒',
						subText: [{
								text: '无',
								score: '0',
							},
							{
								text: '轻',
								score: '1',
							},
							{
								text: '中',
								score: '2',
							},
							{
								text: '重',
								score: '3',
							},
							{
								text: '极重', 
								score: '4',
							},
						],
					},
					{
						show: false,
						title: '紧张感，易疲劳，不能放松、情绪反应、易哭、颤抖、感到不安',
						subText: [{
								text: '无',
								score: '0',
							},
							{
								text: '轻',
								score: '1',
							},
							{
								text: '中',
								score: '2',
							},
							{
								text: '重',
								score: '3',
							},
							{
								text: '极重',
								score: '4',
							},
						],
					},
					{
						show: false,
						title: '害怕黑暗、陌生人、一人独处、动物、乘车或旅行及人多的场合',
						subText: [{
								text: '无',
								score: '0',
							},
							{
								text: '轻',
								score: '1',
							},
							{
								text: '中',
								score: '2',
							},
							{
								text: '重',
								score: '3',
							},
							{
								text: '极重',
								score: '4',
							},
						],
					},
					{
						show: false,
						title: '难以入睡，易醒，谁的不深，多梦，夜惊，醒后感疲劳',
						subText: [{
								text: '无',
								score: '0',
							},
							{
								text: '轻',
								score: '1',
							},
							{
								text: '中',
								score: '2',
							},
							{
								text: '重',
								score: '3',
							},
							{
								text: '极重',
								score: '4',
							},
						],
					},
					{
						show: false,
						title: '记忆注意障碍，注意力不能集中，记忆力差',
						subText: [{
								text: '无',
								score: '0',
							},
							{
								text: '轻',
								score: '1',
							},
							{
								text: '中',
								score: '2',
							},
							{
								text: '重',
								score: '3',
							},
							{
								text: '极重',
								score: '4',
							},
						],
					},
					{
						show: false,
						title: '丧失兴趣、对以往爱好缺乏快感、抑郁、早醒、昼重夜轻',
						subText: [{
								text: '无',
								score: '0',
							},
							{
								text: '轻',
								score: '1',
							},
							{
								text: '中',
								score: '2',
							},
							{
								text: '重',
								score: '3',
							},
							{
								text: '极重',
								score: '4',
							},
						],
					},
					{
						show: false,
						title: '肌肉酸痛，活动不灵活、肌肉抽动、肢体抽动、牙齿打颤、声音发抖。',
						subText: [{
								text: '无',
								score: '0',
							},
							{
								text: '轻',
								score: '1',
							},
							{
								text: '中',
								score: '2',
							},
							{
								text: '重',
								score: '3',
							},
							{
								text: '极重',
								score: '4',
							},
						],
					},
					{
						show: false,
						title: '视物模糊、发冷发热、软弱无力感、混身刺痛',
						subText: [{
								text: '无',
								score: '0',
							},
							{
								text: '轻',
								score: '1',
							},
							{
								text: '中',
								score: '2',
							},
							{
								text: '重',
								score: '3',
							},
							{
								text: '极重',
								score: '4',
							},
						],
					},
					{
						show: false,
						title: '心动过速、心悸、胸痛、血管跳动感、昏倒感、心搏脱漏',
						subText: [{
								text: '无',
								score: '0',
							},
							{
								text: '轻',
								score: '1',
							},
							{
								text: '中',
								score: '2',
							},
							{
								text: '重',
								score: '3',
							},
							{
								text: '极重',
								score: '4',
							},
						],
					},
					{
						show: false,
						title: '胸闷、窒息感、叹息、呼吸困难',
						subText: [{
								text: '无',
								score: '0',
							},
							{
								text: '轻',
								score: '1',
							},
							{
								text: '中',
								score: '2',
							},
							{
								text: '重',
								score: '3',
							},
							{
								text: '极重',
								score: '4',
							},
						],
					},
					{
						show: false,
						title: '吞咽困难、嗳气、消化不良（进食后腹痛、腹胀、恶心、胃部饱感）、肠动感、肠鸣、腹泻、体重减轻、便秘',
						subText: [{
								text: '无',
								score: '0',
							},
							{
								text: '轻',
								score: '1',
							},
							{
								text: '中',
								score: '2',
							},
							{
								text: '重',
								score: '3',
							},
							{
								text: '极重',
								score: '4',
							},
						],
					},
					{
						show: false,
						title: '尿意频数，尿急、停经、性冷淡、早泄、阳痿',
						subText: [{
								text: '无',
								score: '0',
							},
							{
								text: '轻',
								score: '1',
							},
							{
								text: '中',
								score: '2',
							},
							{
								text: '重',
								score: '3',
							},
							{
								text: '极重',
								score: '4',
							},
						],
					},
					{
						show: false,
						title: '口干、潮红、苍白、易出汗、起鸡皮疙瘩、紧张性头痛、毛发竖起',
						subText: [{
								text: '无',
								score: '0',
							},
							{
								text: '轻',
								score: '1',
							},
							{
								text: '中',
								score: '2',
							},
							{
								text: '重',
								score: '3',
							},
							{
								text: '极重',
								score: '4',
							},
						],
					},
					{
						show: false,
						title: '紧张不能松弛、忐忑不安、咬手指、紧紧握拳，摆弄手帕、面肌抽搐、不宁顿足、手发抖、皱眉、表情僵硬、肌张力高、面色苍白',
						subText: [{
								text: '无',
								score: '0',
							},
							{
								text: '轻',
								score: '1',
							},
							{
								text: '中',
								score: '2',
							},
							{
								text: '重',
								score: '3',
							},
							{
								text: '极重',
								score: '4',
							},
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
						if (this.zTotal > 29) {
							this.abilityLevel = '严重焦虑';
						} else if (29 > this.zTotal > 21) {
							this.abilityLevel = '明显焦虑';
						} else if (21 > this.zTotal > 14) {
							this.abilityLevel = '有焦虑';
						} else if (14 > this.zTotal > 7) {
							this.abilityLevel = '可能有焦虑';
						} else if (this.abilityLevel < 7) {
							this.abilityLevel = '无焦虑';
						} 
						// console.log(this.abilityLevel);
						this.saveDataHttp(this.abilityLevel);
						uni.navigateTo({
							url:'../../evaluationCenter-evaluations/mentalHealthResult/index?result='+this.abilityLevel,
						})
						return false;
					}
					//切换下一个问题展示
					if (this.items[i].show == true) {
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
			//提交保存用户的心理健康评估特征
			saveDataHttp(n) {
				let data = {
					user_id: app.appUserId(),
					eva_xljk_res: n,
				};
				http.Post('sys_fkcy/eva_res/setUserEvaRes', data, (res) => {
					console.log(res);
					uni.showToast({
						title: '您的数据已经保存',
						icon: 'none',
					})
				})
			},
		},
		mounted() {},
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
		width: 90%;
		margin-left: 5%;
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
