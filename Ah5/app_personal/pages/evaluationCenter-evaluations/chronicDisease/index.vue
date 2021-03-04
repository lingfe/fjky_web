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
				<input type="text" placeholder="请输入慢性病名称">
			</view>
		</view>
		<!-- 不知道得病的选项结果页 -->
		<view v-if="show=='notConfirm'">
			<view class='notConfirm_box'>
				<text>评估中……</text>
			</view>
		</view>
		<!-- 步骤切换 -->
		<view v-if="show == 'getChice'" class="stepSwitch">
			<view @click="firstStep()" class='nextBtn'>
				<text>下一步</text>
			</view>
		</view>
		<view v-if="show == 'confirmIs'" class="stepSwitch" @click='saveData()'>
			<view @click="firstStep()" class='nextBtn'>
				<text>保存</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				aTab: 'confirmIs',
				bTab: '',
				show: 'getChice',
				items: ['糖尿病', '高血压', '高脂血症', '冠心病', '脑梗死', '脑出血', '慢性支气管炎', '风湿性心脏病', '风湿性关节炎', '肿瘤', '其他'],
				showInput: false,
			}
		},
		methods: {
			//获得第一步的选项
			getChice(n) {
				this.aTab = n;
			},
			//第一步的选择
			firstStep() {
				console.log(this.aTab);
				this.show = this.aTab;
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
				console.log(this.bTab);
				let data = this.bTab;
				//写到这儿了
			}
		},
		mounted(){
		}
	}
</script>
<style>
	@import url("../../../util/tool/common.css");
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
		width: 90%;
		height: 100vh;
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
	}
	.contenSwitch,
	.contenSwitch1 {
		position: relative;
		width: 100%;
		height: 80vh;
		border: 1px solid white;
	}
	.stepSwitch {
		position: relative;
		width: 100%;
		height: 10vh;
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
