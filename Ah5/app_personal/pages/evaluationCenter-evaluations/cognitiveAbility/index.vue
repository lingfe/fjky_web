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
				<view :value='item.score' @click="getChice(index,item.score)" :class="[aTab == 'aTab'+index?'tabActive':'tabNoActive']">
					{{item.text}}
				</view>
			</view>
		</view>
		<view v-if='!now' class='wh100'>
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
		</view>
		<!-- 触发按钮 -->
		<view v-if='now' @click='next()' class='nextBtn'>
			<text>下一步</text>
		</view>
		<view v-else = 'now' @click='gotoBack()' class='nextBtn'>
			<text>完成</text>
		</view>
	</view>
</template>
<script>
	import http from '../../../util/tool/http.js';
	export default {
		data() {
			return {
				abilityLevel:'',
				zTotal:0,
				cTotal:null,
				now:true,
				aTab:'',
				//组织出问卷的数据
				items: [{
						show: true, 
						title: '您的文化程度是',
						subText: [{
								text: '大学程度（包括大专）',
								score: '10',
							},
							{
								text: '中学程度（包括中专）',
								score: '5',
							},
							{
								text: '小学程度',
								score: '3',
							},
							{
								text:'文盲',
								score:'0'
							}
						],
					},
					{
						show: false,
						title: '今年是哪一年',
						subText: [{
								text: '2023年',
								score: '0'
							},
							{
								text: '2021年',
								score: '5'
							},
							{
								text: '2028年',
								score: '0'
							},
							{
								text: '2088年',
								score: '0'
							},
						],
					},
				],
			}
		}, 
		methods: {
			//下一步的方法执行
			next(){
				for (var i = 0; i < this.items.length; i++){
					if(i==this.items.length-1){
						//切换成完成评估的界面
						this.items[i].show = false;
						this.now = false;
						this.zTotal = this.zTotal + parseInt(this.cTotal);
						console.log('总分数：'+this.zTotal);
						if(this.zTotal==0){
							this.abilityLevel = '认知功能障碍';
						}
						else if (this.zTotal>0){
							this.abilityLevel = '正常';
						}
						this.saveDataHttp(this.abilityLevel);
						return false;
					}
					//切换下一个问题展示
					if (this.items[i].show == true){
 						if(this.cTotal != null){
							//记录分数
							this.zTotal = this.zTotal + parseInt( this.cTotal); 
							this.items[i].show = false;
							this.items[i + 1].show = true;
							this.aTab = '';
							this.cTotal = null;
							return false; 
						}
						else{
							uni.showToast({
								title:'请选择内容',
								icon:'none',
								duration:1000,
							})
							return false;
						}
					
					}
				}
			},
			//获取每个选项的点击方法
			getChice(n,m){
				//这里记住每个选项 得分
				// console.log(n,m);
				this.aTab = 'aTab'+ n;
				this.cTotal = m;
				console.log(this.cTotal);
			},
			gotoBack(){
				uni.navigateTo({
					url:'../../evaluationCenter/index'
				})
			},
			//提交保存用户的认知能力评估特征
			saveDataHttp(n){
				let data = {
					user_id:'34f35165-b714-448c-8ede-cd8343a43b1a',
					eva_rznl_res :n , 
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
		mounted() {},
		onLoad(option) {
			console.log(option.result);
		}
	}
</script>
<style>
	@import url("../../../util/tool/common.css");
	.wh100 .type{
		text-align: center;
		font-size: .9rem;
		padding-bottom: .5rem;
		font-weight: 600;
	}
	.wh100 .type0{
		color:black !important;
		font-weight: 600;
		padding-bottom: .5rem;
		text-align: center;
	}
	.wh100 .type1{
		color:gray !important;
		font-weight: 100;
		font-size: .9rem;
		text-align: center;
	}
	.wh100{
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
