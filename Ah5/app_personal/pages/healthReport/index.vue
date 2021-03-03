<template>
	<view class="content">
		<view class='healthyData'>
			<view class='tab-lan'>
				<text :class="[cTab == 'stepNumber'?'tabActive':'tabNoActive']" @click="getThisTab('stepNumber')">步数</text>
				<text :class="[cTab == 'bloodPressure'?'tabActive':'tabNoActive']" @click="getThisTab('bloodPressure')">血压</text>
				<text :class="[cTab == 'heartRate'?'tabActive':'tabNoActive']" @click="getThisTab('heartRate')">心率</text>
				<text :class="[cTab == 'bloodOxygen'?'tabActive':'tabNoActive']" @click="getThisTab('bloodOxygen')">血氧</text>
				<text :class="[cTab == 'uricAcid'?'tabActive':'tabNoActive']" @click="getThisTab('uricAcid')">尿酸</text>
				<text :class="[cTab == 'bloodFat'?'tabActive':'tabNoActive']" @click="getThisTab('bloodFat')">血脂</text>
				<text :class="[cTab == 'bloodSugar'?'tabActive':'tabNoActive']" @click="getThisTab('bloodSugar')">血糖</text>
				<text :class="[cTab == 'tiwen'?'tabActive':'tabNoActive']" @click="getThisTab('tiwen')">体温</text>
				<text :class="[cTab == 'shuimian'?'tabActive':'tabNoActive']" @click="getThisTab('shuimian')">睡眠</text>
			</view>
			<view id='chartBox' class='box-css'></view>
			<view class='more_type' @click='stepNumberDetail()' style='display: none;'>
				<text style="border-top-left-radius: .8rem;border-bottom-left-radius: .8rem;border-right: none;">今天</text>
				<text class='active_option' style='border-right: none;'>7天</text>
				<text>15天</text>
				<text style="border-top-right-radius: .8rem;border-bottom-right-radius: .8rem;border-left: none;">30天</text>
			</view>
			<view v-if='showEdit' class='insert_img' @click="editPng_c()">
				<img :src='editPng' alt="" />
			</view>
			<view id='chartBox2' class='box-css'></view>
			<view class='w100' v-if="showTabBottm == 'stepNumber'">
				<view class='w100' v-if="showTabBottm == 'stepNumber'">
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'bloodPressure'">
				<view class='showAnother bloodPressure'>
					<text style='color:black;font-size: .8rem;'>正常</text>
					<view class='b'>
						<view style='background-color: #FF9A21;'></view>
						<view style='background-color: #00D193;'></view>
						<view style='background-color: #F72600;'></view>
					</view>
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'heartRate'">
				<view class='more_type' @click='heartRateDetail()'>

				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'bloodOxygen'">
				<view class='showAnother bloodPressure'>
					<text style='color:black;font-size: .8rem;'>正常</text>
					<view class='a'>
						<text>脉率</text>
						<view>
							<view style='background-color: #F72600;width: 1.5rem;'></view>
						</view>
						<view>
							<view style='background-color: #FF9A21;width: 1.8rem;'></view>
						</view>
						<view>
							<view style='background-color: #00D193;'></view>
						</view>
						<view>
							<view style='background-color: #FF9A21;width: 1.8rem;'></view>
						</view>
						<view>
							<view style='background-color: #F72600;width: 1.5rem;'></view>
						</view>
						<text>98次/分</text>
					</view>
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'uricAcid'">
				<view class='showAnother bloodPressure'>
					<text style='color:black;font-size: .8rem;'>正常</text>
					<view class='a'>
						<view>
							<view style='background-color: #F72600;width: 1.5rem;'></view>
						</view>
						<view>
							<view style='background-color: #FF9A21;width: 1.8rem;'></view>
						</view>
						<view>
							<view style='background-color: #00D193;'></view>
						</view>
						<view>
							<view style='background-color: #FF9A21;width: 1.8rem;'></view>
						</view>
						<view>
							<view style='background-color: #F72600;width: 1.5rem;'></view>
						</view>
					</view>
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'bloodFat'">
				<view class='showAnother bloodPressure'>
					<text style='color:black;font-size: .8rem;'>正常</text>
					<view class='a'>
						<view>
							<view style='background-color: #F72600;width: 1.5rem;'></view>
						</view>
						<view>
							<view style='background-color: #FF9A21;width: 1.8rem;'></view>
						</view>
						<view>
							<view style='background-color: #00D193;'></view>
						</view>
						<view>
							<view style='background-color: #FF9A21;width: 1.8rem;'></view>
						</view>
						<view>
							<view style='background-color: #F72600;width: 1.5rem;'></view>
						</view>
					</view>
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'bloodSugar'">
				<view class='showAnother bloodPressure'>
					<text style='color:black;font-size: .8rem;'>正常</text>
					<view class='a'>
						<view>
							<view style='background-color: #F72600;width: 1.5rem;'></view>
						</view>
						<view>
							<view style='background-color: #FF9A21;width: 1.8rem;'></view>
						</view>
						<view>
							<view style='background-color: #00D193;'></view>
						</view>
						<view>
							<view style='background-color: #FF9A21;width: 1.8rem;'></view>
						</view>
						<view>
							<view style='background-color: #F72600;width: 1.5rem;'></view>
						</view>
					</view>
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'tiwen'">
				<view class='showAnother bloodPressure'>
					<text style='color:black;font-size: .8rem;'>正常</text>
					<view class='b'>
						<view style='background-color: #72A7FE;'></view>
						<view style='background-color: #00D193;'></view>
						<view style='background-color: #F72600;'></view>
					</view>
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'shuimian'">
				<view class='showAnother shuimian'>
					<view>
						<text style='color:black;font-weight: bolder;'>
							3.0h
						</text>
						<text style='color: gray;'>
							深睡
						</text>
					</view>
					<view>
						<text style='color:black;font-weight: bolder;'>
							4.5h
						</text>
						<text style='color: gray;'>
							浅睡
						</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import echarts from 'echarts';
	import config from '../../util/echartConfig/echartConfig.js';
	import http from '../../util/tool/http.js';
	export default {
		data() {
			return {
				editPng: require('../../static/edit-2.png'),
				cTab: 'stepNumber',
				showTabBottm: 'stepNumber',
				steps_value: 0,
				sleep_value: 0,
				tiwen_value: 0,
				xinlu_value: 0,
				xuetang_value: 0,
				xueya_value: 0,
				xueyang_value: 0,
				niaosuan_value: 0,
				sleep_value: 0,
				xuezhi_value: 0,
				showEdit: false,
			}
		},
		methods: {
			//首页tab栏切换，表格数据切换
			getThisTab(n) {
				this.cTab = n;
				// console.log(n);
				if (n == 'stepNumber') {
					//渲染步数
					// this.chartLine = echarts.init(document.getElementById('chartBox'));
					this.chartLine.setOption(config.stepNumber(this.steps_value), true);
					this.lineChart.setOption(config.stepNumber_lineChart(this.steps_value), true);
					this.showTabBottm = n;
					this.showEdit = false;
				} else if (n == 'bloodPressure') {
					//渲染血压
					this.chartLine.setOption(config.bloodPressure(this.xueya_value), true);
					this.lineChart.setOption(config.bloodPressure_lineChart(this.xueya_value), true);
					this.showTabBottm = n;
					this.showEdit = true;
				} else if (n == 'heartRate') {
					//渲染心率
					this.chartLine.setOption(config.heartRate(this.xinlu_value), true);
					this.lineChart.setOption(config.heartRate_lineChart(this.xueya_value), true);
					this.showTabBottm = n;
					this.showEdit = true;
				} else if (n == 'bloodOxygen') {
					//渲染血氧
					this.chartLine.setOption(config.bloodOxygen(this.xueyang_value), true);
					this.lineChart.setOption(config.bloodOxygen_lineChart(this.xueya_value), true);
					this.showTabBottm = n;
					this.showEdit = true;
				} else if (n == 'uricAcid') {
					//渲染尿酸
					this.chartLine.setOption(config.uricAcid(this.niaosuan_value), true);
					this.lineChart.setOption(config.uricAcid_lineChart(this.xueya_value), true);
					this.showTabBottm = n;
					this.showEdit = true;
				} else if (n == 'bloodFat') {
					//渲染血脂的数据和报表 仪表盘
					this.chartLine.setOption(config.bloodFat(this.xuezhi_value), true);
					this.lineChart.setOption(config.bloodFat_lineChart(this.xueya_value), true);
					this.showTabBottm = n;
					this.showEdit = true;
				} else if (n == 'bloodSugar') {
					// console.log('123');
					//渲染血糖的数据和报表 仪表盘
					this.chartLine.setOption(config.bloodSugar(this.xuetang_value), true);
					this.lineChart.setOption(config.bloodSugar_lineChart(this.xueya_value), true);
					this.showTabBottm = n;
					this.showEdit = true;
				} else if (n == 'tiwen') {
					//渲染血糖的数据和报表 仪表盘
					this.chartLine.setOption(config.tiwen(this.tiwen_value), true);
					this.lineChart.setOption(config.tiwen_lineChart(this.xueya_value), true);
					this.showTabBottm = n;
					this.showEdit = false;
				} else if (n == 'shuimian') {
					//渲染血糖的数据和报表 仪表盘
					this.chartLine.setOption(config.shuimian(this.sleep_value), true);
					this.lineChart.setOption(config.shuimian_lineChart(this.xueya_value), true);
					this.showTabBottm = n;
					this.showEdit = false;
				}
			},
			//链接跳转
			goto(n) {
				uni.navigateTo({
					url: n,
				})
			},
			//测试调用安卓对象
			appToast() {
				//安卓对象
				appNative.toast();
			},
			//功能还在开发中
			editPng_c() {
				uni.showToast({
					title: '功能开发中',
					icon: 'none',
					duration: 2000,
				})
			}
		},
		onLoad(option) {
			console.log(option.tab);
			this.cTab = option.tab;
		},
		mounted() {
			console.log(this.cTab);
			if (this.cTab == 'stepNumber' || this.cTab == undefined) {
				let echarts = require('echarts');
				this.chartLine = echarts.init(document.getElementById('chartBox'));
				this.lineChart = echarts.init(document.getElementById('chartBox2'));
				this.lineChart.setOption(config.stepNumber_lineChart(), true);
				let that = this;
				http.Get('/sys_fkcy/auhd/getHealthyData', {
					'appUserId': '4c404454-0d30-475e-a4c5-57bfea958c96'
				}, function(res) {
					// console.log(res);
					that.steps_value = res.data.steps.value;
					that.sleep_value = res.data.sleep.value;
					that.tiwen_value = res.data.tiwen.value;
					that.xinlu_value = res.data.xinlu.value;
					that.xuetang_value = res.data.xuetang.value;
					that.xueya_value = res.data.xueya.value;
					that.xueyang_value = res.data.xueyang.value;
					that.getThisTab('stepNumber');
					that.cTab = 'stepNumber';
				});
			} else if (this.cTab != 'stepNumber') {
				document.querySelector(".tabActive").scrollIntoView();
				let echarts = require('echarts');
				this.chartLine = echarts.init(document.getElementById('chartBox'));
				this.lineChart = echarts.init(document.getElementById('chartBox2'));
				let that = this;
				//获取app用户健康信息
				http.Get('/sys_fkcy/auhd/getHealthyData', {
					'appUserId': '4c404454-0d30-475e-a4c5-57bfea958c96'
				}, function(res) {
					// console.log(res);
					that.steps_value = res.data.steps.value;
					that.sleep_value = res.data.sleep.value;
					that.tiwen_value = res.data.tiwen.value;
					that.xinlu_value = res.data.xinlu.value;
					that.xuetang_value = res.data.xuetang.value;
					that.xueya_value = res.data.xueya.value;
					that.xueyang_value = res.data.xueyang.value;
					that.getThisTab(that.cTab);
				});
			}
		},
	}
</script>
<style>
	.insert_img img {
		width: 1.2rem;
	}

	.insert_img {
		display: inline-block;
		/* border: 1px solid red; */
		position: absolute;
		top: 13%;
		right: 8%;
		z-index: 1000000;
	}

	.active_option {
		background-color: #00D193;
		color: white !important;
	}

	.tab-lan {
		font-size: 1rem;
		padding: 0 1.5rem;
	}

	:root {
		--beforeW: 0;
		--bgHeadColor: #00D193;
	}

	.shuimian {
		/* border: 1px solid red; */
		display: flex;
		flex-direction: row;
		position: absolute;
		left: 0;
		bottom: 2.5rem;
		font-size: .7rem;
		justify-content: space-between;
		width: 80% !important;
		margin-left: 5%;
		top: 12rem !important;
	}

	.shuimian>view {
		display: flex;
		flex-direction: column;
	}

	.b>view {
		height: .4rem;
		/* border: 1px solid red; */
		width: 3.5rem;
	}

	.b {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: center;
		align-items: center;
		/* border: 1px solid blue; */
	}

	.a>view>view {
		width: 3.5rem;
		height: .4rem;
		/* margin-top: .5rem; */
		margin-bottom: .1rem;
	}

	.a>text {
		display: inline-block;
		width: 5rem;
	}

	.a {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: center;
		align-items: center;
		/* border: 1px solid blue; */
	}

	.bloodPressure {
		position: absolute;
		bottom: 4.5rem;
		left: 0rem;
		/* border: 1px solid blue; */
		text-align: center;
	}

	.w100 {
		width: 100%;
	}

	/* 另一块 */
	.showAnother {
		position: absolute;
		left: 0;
		width: 90%;
		padding: 5%;
		position: absolute;
		top: 10rem;
	}

	.more_type {
		/* border: 1px solid rgba(0,209,147,1); */
		width: 100%;
		margin-left: 5%;
		text-align: center;
		position: relative;
		left: -1rem;
		display: flex;
		flex-direction: row;
		border-radius: .8rem;

	}

	.more_type text {
		padding: 1.5% 5%;
		width: 5rem;
		border: 1px solid rgba(0, 209, 147, 1);
		color: rgba(0, 209, 147, 1);
		font-size: 1rem;
	}

	.otherTabFunction {
		position: relative;
		top: -2rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-gap: 10px;
	}

	.otherTabFunction img {
		width: 3rem;
	}

	.otherTabFunction view {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.tabActive {
		color: #222222;
		/* color:red; */
		/* text-decoration: underline; */
		/* border: 1px solid red; */
	}

	.tabActive:before {
		color: red;
		content: "";
		display: block;
		position: absolute;
		bottom: -1px;
		left: --beforeW;
		/* left:10px; */
		width: 10%;
		height: 4px;
		border-radius: 20%;
		background: #00D193;
	}

	.tab-lan {
		/* border: 1px solid blue; */
		width: 100%;
		/* margin: .5rem; */
		color: #666666;
		font-weight: 600;
		padding-top: .3rem;
		position: relative;
		left: 0;
		overflow: scroll;
		white-space: nowrap;
	}

	.tab-lan text {
		width: 5rem;
		display: inline-block;
		/* border: 1px solid red; */
		/* text-align: center; */
		padding-bottom: .2rem;
	}

	.text:after {
		content: '';
		display: block;
		margin-top: -5px;
		border-bottom: 2px solid grey;
	}

	.healthyData {
		width: 90%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #FFFFFF;
		padding: 1rem;
		position: relative;
		top: -0rem;
	}

	.content {
		font-size: .8rem;
	}

	.userInfo {
		width: 100%;
		display: flex;
		background-color: #00D193;
		/* background-color: var(--bgHeadColor); */
		color: white;
		align-items: center;
		padding-bottom: 3rem;
	}

	.userInfo img {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		margin: .8rem;
	}

	.box-css {
		width: 111%;
		height: 450upx;
		margin-top: .3rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		box-shadow: 0 .2rem .2rem #eeeeee inset;
		/* border: 1px solid red; */
		border-bottom: 1px solid #eeeeee;
	}

	#chartBox2 {
		margin-top: 1.5 !important;
		box-shadow: none !important;
		/* border: 1px solid red; */
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.otherTabFunction {
		/* border: 1px solid red; */
		width: 90%;


	}
</style>
