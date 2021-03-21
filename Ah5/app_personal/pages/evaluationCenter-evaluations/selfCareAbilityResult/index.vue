<template>
	<!-- 评估得出结果的界面 -->
	<view>
		<view v-if="show=='getResult'" class='wh100'>
			<text>
				<text class='type0'>
					根据评估结果，您的自理能力评估结果为{{result}}
				</text>
				<text class='type1'>
					本结果仅根据APP上您的健康数据分析得出，如有误差，建议您尽快去医院进行复查!	<text class='btn_' @click="back_()">  重新评估</text>
				</text>
				<text class='btn_2' @click="centerBack()">返回评估中心</text>
			</text>
		</view>
	</view>
	
</template>

<script>
	export default {
		data(){
			return{
				show:'getResult',
				result:'',
			}
		},
		methods:{
			back_(){
				uni.navigateTo({
					url:'../../evaluationCenter-evaluations/selfCareAbility/index'
				})
			},
			centerBack(){
				uni.navigateTo({
					url:'../../evaluationCenter/index'
				})
			}
		},
		onLoad(option) {
			console.log(option.result);
			this.result = option.result;
		}
	}
</script>

<style>
	.btn_2{
		text-align: center;
		color: #00D193;
		position: absolute;
		display: block;
		padding-top: 10%;
		width: 100%;
	}
	.btn_{
		text-align: center;
		color: #00D193;
	}
	.wh100 .type0{
		display: flex;
		justify-content: center;
		align-items: center;
		justify-content: center;
		width: 90%;
		color:black !important;
		font-weight: 600;
		margin-left: 5%;
		padding-bottom: .5rem;
	}
	.wh100 .type1{
		display: flex;
		justify-content: center;
		align-items: center;
		justify-content: center;
		width: 90%;
		color:gray !important;
		font-weight: 100;
		font-size: .9rem;
		margin-left: 5%;
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
</style>
