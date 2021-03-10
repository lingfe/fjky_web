<!-- 录入身体参数信息 -->
<template>
	<view class="content" style='border-top:1px solid #eeeeee;'>
		<view class='title'>
			<text>身体基本参数</text>
			<text class='outOne' @click="saveData()">保存</text>
		</view>
		<view>
			<view class='tab_item'>
				<text>身高（cm）</text>
				<!-- <text>158</text> -->
				<input type="text" v-model='a' auto-focus='ture'>
			</view>
			<view class='tab_item'>
				<text>体重（kg）</text>
				<input type="text" v-model='b'>
			</view>
		<!-- 	<view class='tab_item'>
				<text>BMI</text>
				<input type="text" v-model='c'>
			</view> 由系统计算 ，不由用户输入  -->
			<view class='tab_item'>
				<text>腰围（cm）</text>
				<input type="text" v-model='d'>
			</view>
			<view class='tab_item'>
				<text>臀围（cm）</text>
				<input type="text" v-model='e'>
			</view>
		</view>
	</view>
</template>
<style>
	@import url("../../../util/tool/common.css");

	.tab_item>text:nth-child(1) {
		color: #222222;
	}

	.tab_item>input:nth-child(2) {
		color: #666666;
		width: 30%;
		caret-color: #00D193;
		text-align: right;
	}

	.tab_item {
		/* border: 1px solid red; */
		padding: 1rem 1rem 1rem 1rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: 1px solid #eeeeee;
	}

	.title {
		color: black;
		font-weight: bolder;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		position: relative;
		padding-top: .8rem;
		padding-bottom: .8rem;
	}

	.outOne {
		position: absolute;
		color: #00D193;
		right: 1rem;
	}
</style>
<script>
	import app from '../../../util/tool/andoridFun.js';
	import http from '../../../util/tool/http.js';
	export default {
		data() {
			return {
				a: '0',
				b: '0',
				// c: '0',
				d: '0',
				e: '0',
			}
		},
		methods: {
			saveData() {
				if (this.a != '0' && this.b != '0' && this.c != '0' && this.d != '0' && this.e != '0') {
					let data = {
						ess_stature: this.a,
						ess_weight: this.b,
						ess_bmi: this.c,
						ess_waistline: this.d,
						ess_hipline: this.e,
						appUserId:app.appUserId(),
					}
					http.Post('sys_fkcy/appUser/setBody_parameters.app', data, (res) => {
						// console.log(res);
						uni.showToast({
							title:res.msg,
							icon:'none' ,
							success() {
								let t = setInterval(()=>{
									clearInterval(t);
									uni.navigateBack();
								}, 1000)
							}
						})
					})
				} else {
					uni.showToast({
						title: '数据不能为空',
						icon: 'none'
					})
				}

			}
		},
	}
</script>
