<template>
	<view class="content">
		<view class='healthyData'>
			<view class='tab-lan'>
				<text :class="[cTab == 'bloodPressure'?'tabActive':'tabNoActive']"
					@click="getThisTab('bloodPressure')">血压</text>
				<text :class="[cTab == 'bloodOxygen'?'tabActive':'tabNoActive']"
					@click="getThisTab('bloodOxygen')">血氧</text>
				<text :class="[cTab == 'heartRate'?'tabActive':'tabNoActive']"
					@click="getThisTab('heartRate')">心率</text>
				<text :class="[cTab == 'bloodFat'?'tabActive':'tabNoActive']" @click="getThisTab('bloodFat')">血脂</text>
				<text :class="[cTab == 'bloodSugar'?'tabActive':'tabNoActive']"
					@click="getThisTab('bloodSugar')">血糖</text>
				<text :class="[cTab == 'tiwen'?'tabActive':'tabNoActive']" @click="getThisTab('tiwen')">体温</text>
				<text :class="[cTab == 'stepNumber'?'tabActive':'tabNoActive']"
					@click="getThisTab('stepNumber')">步数</text>
				<!-- <text :class="[cTab == 'uricAcid'?'tabActive':'tabNoActive']" @click="getThisTab('uricAcid')">尿酸</text> -->
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
			<view id='chartBox2' class='box-css' :class="[nChange == 'xueyang'?'changeBox2':'']" ></view>
			<view class='w100' v-if="showTabBottm == 'stepNumber'">
				<view class='w100' v-if="showTabBottm == 'stepNumber'">
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'bloodPressure'">
				<!-- 血压的指标范围 -->
				<view class='showAnother bloodPressure'>
					<text style='color:black;font-size: .7rem;display: inline-block;padding-bottom: .2rem;'>{{xueya_zhengduan}}</text>
					<view class='b'>
						<view style='background-color: #FF9A21;'></view>
						<view style='background-color: #00D193;'></view>
						<view style='background-color: #F72600;'></view>
					</view>
					<!-- 血压的检测数据指标 -->
					<view class='plu'>
						<view style='margin-top: .1rem;height: .8rem;font-weight: 600;padding-bottom: .3rem;'>血压检测分析</view>
						<view class='data-show'>
							<view>
								<text>低压</text>
								<text>{{xy_di_bfb}}</text>
							</view>
							<view>
								<text>正常</text>
								<text>{{xy_zc_bfb}}</text>
							</view>
							<view>
								<text>临界高压</text>
								<text>{{xy_jjg_bfb}}</text>
							</view>
							<view>
								<text>高压</text>
								<text>{{xy_gao_bfb}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'heartRate'">
				<view class='more_type' @click='heartRateDetail()'>
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'bloodOxygen'">
				<!-- 血氧的检测数据指标 -->
					<view class='plu_bloodOxygen'>
							<view style='margin-top: .1rem;height: 1.3rem;text-align: center;font-weight: 600;color:#00D193'>累计检查次数</view>
							<view class='data-show' style='border: 1px solid white;height: 2.5rem;'>
								<view style='height: .8rem;'>
									<text>低压</text>
									<text>{{xy_di2}}</text>
								</view>
								<view>
									<text>正常</text>
									<text>{{xy_zc2}}</text>
								</view>
								<view>
									<text>临界高压</text>
									<text>{{xy_piandi2}}</text>
								</view>
								<view>
									<text>高压</text>
									<text>{{xy_jjd2}}</text>
								</view>
							</view>
						</view>
						<view class='plu_bloodOxygen2'>
								<view style='margin-top: .1rem;height: 1.3rem;text-align: center;font-weight: 600;color:#00D193'>异常占比</view>
								<view class='data-show' style='border: 1px solid white;height: 2.5rem;'>
									<view style='height: .8rem;'>
										<text>低压</text>
										<text>{{xy_di_bfb2}}</text>
									</view>
									<view>
										<text>正常</text>
										<text>{{xy_zc_bfb2}}</text>
									</view>
									<view>
										<text>临界高压</text>
										<text>{{xy_jjd_bfb2}}</text>
									</view>
									<view>
										<text>高压</text>
										<text>{{xy_piandi_bfb2}}</text>
									</view>
								</view>
							</view>
		<view class='showAnother bloodPressure'>
					<text style='color:black;font-size: .7rem;display: inline-block;padding-bottom: .2rem;display: inline-block;padding-bottom: .2rem;'>{{xueyang_zhengduan}}</text>
					<view class='a'>
						<!-- <text>脉率</text> -->
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
						<!-- <text>98次/分</text> -->
					</view>
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'uricAcid'">
				<view class='showAnother bloodPressure'>
					<text style='color:black;font-size: .7rem;display: inline-block;padding-bottom: .2rem;'>正常</text>
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
					<text style='color:black;font-size: .7rem;display: inline-block;padding-bottom: .2rem;'>正常</text>
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
					<text style='color:black;font-size: .7rem;display: inline-block;padding-bottom: .2rem;'>正常</text>
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
					<text style='color:black;font-size: .8rem;display: inline-block;padding-bottom: .2rem;'>正常</text>
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
	import app from '../../util/tool/andoridFun.js';
	export default {
		data() {
			return {
				nChange:'',
				editPng: require('../../static/edit-2.png'),
				cTab: 'bloodPressure',
				showTabBottm: 'bloodPressure',
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
				xueya_zhengduan:'', //血压诊断
				xy_di_bfb:'', 
				xy_zc_bfb:'', 
				xy_jjg_bfb:'', 
				xy_gao_bfb:'',
				xueyang_zhengduan:'', //血氧诊断
				xy_di2:'', 
				xy_di_bfb2:'',
				xy_jjd2:'',
				xy_jjd_bfb2:'',
				xy_piandi2:'',
				xy_piandi_bfb2:'',
				xy_zc2:'',
				xy_zc_bfb2:'',
				timerId:'', //定时器对象
				timerId2:'', 
				timerId3:'',
			}
		},
		methods: {
			//首页tab栏切换，表格数据切换
			getThisTab(n) {
				this.cTab = n;
				this.getData(n);
			},
			//链接跳转
			goto(n){
				uni.navigateTo({
					url: n,
				})
			},
			//功能还在开发中
			editPng_c(){
				uni.showToast({
					title: '功能开发中',
					icon: 'none',
					duration: 2000,
				})
			},
			//http 获取对应tab的数据内容
			getData(n) {
				let data = {
					appUserId: app.appUserId(),
				}
				let that = this;
				// 不同的模块 get不同的接口数据
				if (n == 'bloodPressure'){
					that.nChange = '';
					http.Post('sys_fkcy/auhd/getXueYaData', data, (res) => {
						console.log('血压的数据');
						console.log(res);
						that.xueya_value = res.data.xueya.systolic_pressure;
						that.xueya_value2 = res.data.xueya.diastolic_pressure;
						that.xueya_zhengduan = res.data.xueya.zhengduan; 
						that.xy_di_bfb = res.data.xy_di_bfb;
						that.xy_zc_bfb = res.data.xy_zc_bfb;
						that.xy_jjg_bfb = res.data.xy_jjg_bfb;
						that.xy_gao_bfb = res.data.xy_gao_bfb;
						that.showTabBottm = 'bloodPressure';
						//渲染数据
						if(that.xueya_value == undefined || that.xueya_value==''){
							that.xueya_value = '0';
						}
						if(that.xueya_value2 == undefined || that.xueya_value2 ==''){
							that.xueya_value2 = '0';
						}
						that.renderTable(that.xueya_value, res.data.series,res.data.weekDays,n);
					})
				}
				if (n == 'bloodOxygen'){
					that.nChange = 'xueyang';
					http.Post('sys_fkcy/auhd/getBloodOxygenData', data, (res) => {
						console.log('血氧数据');
						console.log(res);
						that.xueyang_zhengduan = res.data.xueyang.zhengduan;
						that.xy_di2 = res.data.xy_di;
						that.xy_di_bfb2=res.data.xy_di_bfb;
						that.xy_jjd2=res.data.xy_jjd;
						that.xy_jjd_bfb2=res.data.xy_jjd_bfb;
						that.xy_piandi2=res.data.xy_piandi;
						that.xy_piandi_bfb2=res.data.xy_piandi_bfb;
						that.xy_zc2=res.data.xy_zc;
						that.xy_zc_bfb2=res.data.xy_zc_bfb;
						that.renderTable(res.data.xueyang.value, res.data.series,res.data.weekDays,n);
					})
				}
				if (n == 'heartRate') {
					that.nChange = '';
					http.Post('sys_fkcy/auhd/getHeartRateData', data, (res) => {
						console.log('心率数据');
						console.log(res);
						that.renderTable(res.data.xinli.value,res.data.series,res.data.weekDays,n);
					})
				}
				if (n == 'bloodFat') {
					that.nChange = '';
					http.Post('sys_fkcy/auhd/getBloodFatData', data, (res) => {
						console.log('血脂数据');
						console.log(res);
						that.renderTable(res.data.xuezhi.value,res.data.series,res.data.weekDays,n);
					})
				}
				if (n == 'stepNumber') {
					that.nChange = '';
					http.Post('sys_fkcy/auhd/getMotionData', data, (res) => {
						console.log('步数数据');
						console.log(res);
						that.renderTable(res.data.motion.value,res.data.series,res.data.weekDays,n);
					})
				}
				if (n == 'tiwen') {
					that.nChange = '';
					http.Post('sys_fkcy/auhd/getTemperatureData', data, (res) => {
						console.log('体温数据');
						console.log(res);
						that.renderTable(res.data.tiwen.value,res.data.series,res.data.weekDays,n);
					})
				}
				if (n == 'shuimian') {
					that.nChange = '';
					http.Post('sys_fkcy/auhd/getSleepData', data, (res) => {
						console.log('睡眠数据');
						console.log(res);
						that.renderTable(res.data.sleep.value,res.data.series,res.data.weekDays,n);
					})
				}
				if (n == 'bloodSugar') {
					that.nChange = '';
					http.Post('sys_fkcy/auhd/getBloodSugarData', data, (res) => {
						console.log('血糖数据');
						console.log(res);
						that.renderTable(res.data.xuetang.value,res.data.series,res.data.weekDays,n);
					})
				}
			},
			//渲染图表
			renderTable(singleData,seriseData,weekDays,n){
				if(n == 'bloodPressure'){
					this.chartLine.setOption(config.bloodPressure(this.xueya_value,this.xueya_value2), true);
					this.lineChart.setOption(config.bloodPressure_lineChart(seriseData[0].data,seriseData[1].data,weekDays), true);
					// seriseData[0] 收缩压
					// seriseData[1] 舒张压
					this.showTabBottm = n;
					this.showEdit = true;
					this.clear_time();
					this.clear_time2();
				}
				if(n == 'bloodOxygen'){
					this.chartLine.setOption(config.bloodOxygen(singleData), true);
					this.lineChart.setOption(config.bloodOxygen_lineChart(seriseData[0].data,weekDays), true);
					this.showTabBottm = n;
					this.showEdit = false;
					this.clear_time();
					this.clear_time2();
				}
				if(n == 'heartRate'){
					this.chartLine.setOption(config.heartRate(singleData), true);
					this.lineChart.setOption(config.heartRate_lineChart(seriseData[0].data,weekDays), true);
					this.showTabBottm = n;
					this.showEdit = false;
					this.clear_time();
					this.clear_time2();
				}
				if(n == 'bloodFat'){
					this.chartLine.setOption(config.bloodFat(singleData), true);
					this.lineChart.setOption(config.bloodFat_lineChart(seriseData[0].data,weekDays), true);
					this.showTabBottm = n;
					this.showEdit = false;
					this.clear_time();
					this.clear_time2();
				} 
				if(n =='stepNumber'){
					this.clear_time();
					this.chartLine.setOption(config.stepNumber(singleData),true);
					this.lineChart.setOption(config.stepNumber_lineChart(seriseData[0].data,weekDays), true);
					this.showTabBottm = n;
					this.showEdit = false;
					this.doing(config.stepNumber(singleData)); 
				}
				if(n == 'tiwen'){
					this.chartLine.setOption(config.tiwen(singleData), true);
					this.lineChart.setOption(config.tiwen_lineChart(seriseData[0].data,weekDays), true);
					this.showTabBottm = n;
					this.showEdit = false;
					this.clear_time();
					this.clear_time2();
				}
				if(n =='shuimian'){
					this.clear_time2();
					this.chartLine.setOption(config.shuimian(singleData), true);
					this.lineChart.setOption(config.shuimian_lineChart(seriseData[0].data,weekDays), true);
					this.showTabBottm = n;
					this.showEdit = false;
					let angle = 0;
					this.draw(this.chartLine,singleData,angle);
				}
				if(n == 'bloodSugar'){
					this.chartLine.setOption(config.bloodSugar(singleData), true);
					this.lineChart.setOption(config.bloodSugar_lineChart(seriseData[0].data,weekDays), true);
					this.showTabBottm = n;
					this.showEdit = false;
					this.clear_time();
					this.clear_time2();
				}
			},
			
			//睡眠单数据图表定时器任务
			draw(myEchart,singleData,angle){
				this.timerId= setInterval(()=>{
					angle = angle + 10;
					myEchart.setOption(config.shuimian(singleData,angle), true);
				},100)
			},
			//清除睡眠数据图表定时器
			clear_time(){
				if (this.timerId!=''){
				    clearInterval(this.timerId);
				}
			},
			//清除步数单数据图表定时器
			clear_time2(){
				if (this.timerId3!=''){
				    clearInterval(this.timerId3);
				}
			},
			//步数单数据定时器任务
			doing(option){
				this.timerId3 = setInterval(()=>{
					option.series[1].startAngle = option.series[1].startAngle - 5;
					this.chartLine.setOption(option,true);
				},1000);
			},
		},
		onLoad(option){
			console.log(option.tab);
			this.cTab = option.tab;
		},
		//初始化界面时候 渲染仪表盘和折线图数据
		mounted() {
			this.getData('bloodPressure');
			// console.log(this.cTab);
			if (this.cTab == 'bloodPressure' || this.cTab == undefined){ 
				//请求血压的数据
				this.getThisTab('bloodPressure');
				let echarts = require('echarts');
				this.chartLine = echarts.init(document.getElementById('chartBox'));
				this.lineChart = echarts.init(document.getElementById('chartBox2'));
				this.lineChart.setOption(config.bloodPressure_lineChart(), true);
				this.getData('bloodPressure');
			} else if (this.cTab != 'bloodPressure'){
				//渲染对应的cTab 的值的内容
				document.querySelector(".tabActive").scrollIntoView();
				let echarts = require('echarts');
				this.chartLine = echarts.init(document.getElementById('chartBox'));
				this.lineChart = echarts.init(document.getElementById('chartBox2'));
				this.getData(this.cTab);
			}
		},
	}
</script>
<style>
	@import url("../../util/tool/common.css");
	.plu_bloodOxygen{
		/* border: 1px solid red; */
		position: absolute;
		width: 80%;
		border: 1px solid #00D193;
		border-radius: .5rem;
		left: 10%;
		top:30vh;
		padding:.2rem 0rem;
		height: 10vh;
		
	}
	.plu_bloodOxygen2{
		/* border: 1px solid red; */
		position: absolute;
		width: 80%;
		border: 1px solid #00D193;
		border-radius: .5rem;
		left: 10%;
		top:43vh;
		height: 10vh;
		padding:.2rem 0rem;
		
	}
	.plu_bloodOxygen>view>view{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: .7rem;
		color: #00D193; 
	}
	.plu_bloodOxygen2>view>view{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: .7rem;
		color: #00D193; 
	}
	.data-show {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.data-show>view {
		display: flex;
		flex-direction: column;
	}

	.data-show>view>text {
		padding: .2rem;
	}

	.plu {
		position: relative;
		text-align: center;
		width: 80%;
		top: 2vh;
		left: 10%;
		color: #00D193;
		border: 1px solid #00D193;
		border-radius: .8rem;
		font-size: .7rem;
	}

	.insert_img img {
		width: 1.2rem;
	}

	.insert_img {
		display: inline-block;
		position: absolute;
		top: 5rem;
		right: 8%;
		z-index: 1000000;
		display: none;
	}

	.active_option {
		background-color: #00D193;
		color: white !important;
	}

	.tab-lan {
		font-size: .8rem;
		padding: 0 1.5rem;
		height: 1.6rem;
		/* border: 1px solid red; */
		position: relative;
		top: 0;
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
		bottom: 2.5rem;
		justify-content: space-between;
		width: 80% !important;
		margin-left: 10%;
		top: 12rem !important;
	}

	.shuimian>view {
		display: flex;
		flex-direction: column;
	}

	.b>view {
		height: .5rem;
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
		height: .5rem;
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

	/* 另一块 */
	.showAnother {
		position: absolute;
		left: 0;
		top: 23vh;
		width: 100%;
	}

	.more_type {
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
		width: 1rem;
		height: 3rem;
		margin-left: .5rem;
		height: 5px;
		border-radius: 2.5px;
		background: #00D193;
	}

	.tab-lan {
		width: 100%;
		/* margin: .5rem; */
		color: #666666;
		font-weight: 600;
		padding-top: .3rem;
		position: relative;
		left: 0;
		overflow: scroll;
		white-space: nowrap;
		height: 1.7rem;
	}

	.tab-lan text {
		width: 5rem;
		display: inline-block;
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
		background: #FFFFFF;
		padding: 1rem;
		position: relative;
		top: 0rem;
		padding-top: 0rem;
		/* border: 1px solid blue; */
		width: 100%;
		height: 90vh;
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
	}

	#chartBox2 {
		box-shadow: none !important;
		position: relative;
		/* border: 1px solid red; */
		top: 2vh;
		height: 50vh;
		width: 90%;
		left: 5%;
		letter-spacing: 0rem !important;
	}
	.changeBox2{
		padding-top:15vh;
	}
	#chartBox {
		/* border: 1px solid red; */
		width: 100%;
		height: 30vh;
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
