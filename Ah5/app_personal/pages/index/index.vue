<!-- 健康数据首页面 -->
<template>
	<view class="content">
		<!-- 用户信息 -->
		<view class='userInfo'>
			<img :src="userImg" alt="" />
			<view>
				<view style='font-family: PingFang-SC-Bold;color: #FFFFFF 100%;margin-bottom:.5rem;font-size: .9rem;'>
					{{userName}}
				</view>
				<view style='font-size: .75rem;'>
					{{location_}}
				</view>
			</view>
		</view>
		<!-- 健康数据 -->
		<view class='healthyData'>
			<view class='tab-lan'>
				<text :class="[cTab == 'bloodPressure'?'tabActive':'tabNoActive']" @click="getThisTab('bloodPressure')">血压</text>
				<text :class="[cTab == 'bloodOxygen'?'tabActive':'tabNoActive']" @click="getThisTab('bloodOxygen')">血氧</text>
				<text :class="[cTab == 'heartRate'?'tabActive':'tabNoActive']" @click="getThisTab('heartRate')">心率</text>
				<text :class="[cTab == 'bloodFat'?'tabActive':'tabNoActive']" @click="getThisTab('bloodFat')">血脂</text>
				<text :class="[cTab == 'bloodSugar'?'tabActive':'tabNoActive']" @click="getThisTab('bloodSugar')">血糖</text>
				<text :class="[cTab == 'tiwen'?'tabActive':'tabNoActive']" @click="getThisTab('tiwen')">体温</text>
				<text :class="[cTab == 'stepNumber'?'tabActive':'tabNoActive']" @click="getThisTab('stepNumber')">步数</text>
				<!-- <text :class="[cTab == 'uricAcid'?'tabActive':'tabNoActive']" @click="getThisTab('uricAcid')">尿酸</text> -->
				<text :class="[cTab == 'shuimian'?'tabActive':'tabNoActive']" @click="getThisTab('shuimian')">睡眠</text>
			</view>
			<view id='chartBox' class='box-css'></view>
			<view class='w100' v-if="showTabBottm == 'stepNumber'">
				<view class='more_type' @click='stepNumberDetail()'>
					<text>查看更多</text>
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'bloodPressure'">
				<view class='showAnother bloodPressure'>
					<text style='color:black;font-size: .8rem;display: inline-block;padding-bottom: .2rem;'>{{xueya_zhegnduan}}</text>
					<view class='b'>
						<view style='background-color: #FF9A21;'></view>
						<view style='background-color: #00D193;'></view>
						<view style='background-color: #F72600;'></view>
					</view>
				</view>
				<view class='more_type' @click='bloodPressureDetail()'>
					<text>查看更多</text>
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'heartRate'">
				<view class='more_type' @click='heartRateDetail()'>
					<text>查看更多</text>
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'bloodOxygen'">
				<view class='showAnother bloodPressure'>
					<!-- <text style='color:black;font-size: .8rem;display: inline-block;padding-bottom: .2rem;'>正常</text> -->
			<!-- 		<view class='a'>
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
					</view> -->
					<view class='b'>
						<view style='background-color: #FF9A21;'></view>
						<view style='background-color: #00D193;'></view>
						<view style='background-color: #F72600;'></view>
					</view>
				</view>

				<view class='more_type' @click='bloodOxygenDetail()'>
					<text>查看更多</text>
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'uricAcid'">
				<view class='showAnother bloodPressure'>
					<!-- <text style='color:black;font-size: .8rem;display: inline-block;padding-bottom: .2rem;'>正常</text> -->
				<!-- 	<view class='a'>
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
					</view> -->
					<view class='b'>
						<view style='background-color: #FF9A21;'></view>
						<view style='background-color: #00D193;'></view>
						<view style='background-color: #F72600;'></view>
					</view>
				</view>
				<view class='more_type' @click='uricAcidDetail()'>
					<text>查看更多</text>
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'bloodFat'">
				<view class='showAnother bloodPressure'>
					<!-- <text style='color:black;font-size: .8rem;display: inline-block;padding-bottom: .2rem;'>正常</text> -->
			<!-- 		<view class='a'>
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
					</view> -->
					<view class='b'>
						<view style='background-color: #FF9A21;'></view>
						<view style='background-color: #00D193;'></view>
						<view style='background-color: #F72600;'></view>
					</view>
				</view>
				<view class='more_type' @click='bloodFatDetail()'>
					<text>查看更多</text>
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'bloodSugar'">
				<view class='showAnother bloodPressure'>
					<!-- <text style='color:black;font-size: .8rem;display: inline-block;padding-bottom: .2rem;'>正常</text> -->
			<!-- 		<view class='a'>
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
					</view> -->
					<view class='b'>
						<view style='background-color: #FF9A21;'></view>
						<view style='background-color: #00D193;'></view>
						<view style='background-color: #F72600;'></view>
					</view>
				</view>
				<view class='more_type' @click='bloodSugarDetail()'>
					<text>查看更多</text>
				</view>
			</view>
			<view class='w100' v-if="showTabBottm == 'tiwen'">
				<view class='showAnother bloodPressure'>
					<!-- <text style='color:black;font-size: .8rem;display: inline-block;padding-bottom: .2rem;'>正常</text> -->
					<view class='b'>
						<view style='background-color: #72A7FE;'></view>
						<view style='background-color: #00D193;'></view>
						<view style='background-color: #F72600;'></view>
					</view>
				</view>
				<view class='more_type' @click='tiwenDetail()'>
					<text>查看更多</text>
				</view>
			</view>
			<view class='w100' v-else-if="showTabBottm == 'shuimian'">
				<view class='showAnother shuimian'>
					<view>
						<text style='color:black;font-weight: bolder;'>
							{{s_sleep}}
						</text>
						<text style='color: gray;'>
							深睡
						</text>
					</view>
					<view>
						<text style='color:black;font-weight: bolder;'>
							{{q_sleep}}
						</text>
						<text style='color: gray;'>
							浅睡
						</text>
					</view>
				</view>
				<view class='more_type' @click='shuimianDetail()'>
					<text>查看更多</text>
				</view>
			</view>
		</view>
		<!-- 其他模块tab -->
		<view class='otherTabFunction'>
			<view @click="goto('../healthRecords/index')">
				<img src="../../static/indexImg/icon_jiankang@2x.png" alt="">
				<text>
					健康档案
				</text>
			</view>
			<view @click="goto('../healthReport/index')">
				<img src="../../static/indexImg/icon_baogao@2x.png" alt="">
				<text>
					健康报告
				</text>
			</view>
			<view @click="goto('../warnningSetting/index')">
				<img src="../../static/indexImg/icon_yujing@3x.png" alt="">
				<text>
					预警通知
				</text>
			</view>
			<view @click="goto('../medicationReminder/index')">
				<img src="../../static/indexImg/icon_naozhong@3x.png" alt="">
				<text>
					吃药提醒
				</text>
			</view>
			<view @click="goto('../evaluationCenter/index')">
				<img src="../../static/indexImg/icon_pinggu@3x.png" alt="">
				<text>
					评估中心
				</text>
			</view>
			<view @click="noTodo()">
				<img src="../../static/indexImg/icon_anquan@3x.png" alt="">
				<text class='gray_color'>
					安全中心
				</text>
			</view>
			<view @click="noTodo()">
				<img src="../../static/indexImg/icon_yiyuan@2x.png" alt="">
				<text class='gray_color'>
					合作医院
				</text>
			</view>
			<view @click="noTodo()">
				<img src="../../static/indexImg/icon_yisheng@3x.png" alt="">
				<text class='gray_color'>
					合作医生
				</text>
			</view>
		</view>
	</view>
</template>
<script>
	import echarts from 'echarts';
	import config from '../../util/echartConfig/echartConfig.js';
	import http from '../../util/tool/http.js';
	import goto from '../../util/tool/tool.js';
	import appToast from '../../util/tool/andoridFun.js';
	export default {
		data() {
			return {
				location_:'',
				userName:'用户姓名',
				userImg:'../../static/tx1.png',
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
				shuimian_value: 0,
				xuezhi_value: 0,
				xueya_value2:0,
				xueya_zhegnduan:'',
				
				timerId:'', //睡眠图表动画定时器
				s_sleep:'',
				q_sleep:'',
			}
		},
		methods: {
			//首页各个tab栏的查看详情
			stepNumberDetail() {
				// console.log('查看详情-步数');
				goto.goto('../healthReport/index?tab=stepNumber');
			},
			bloodPressureDetail() {
				// console.log('查看详情-血压');
				goto.goto('../healthReport/index?tab=bloodPressure');
			},
			heartRateDetail() {
				// console.log('查看详情-心率');
				goto.goto('../healthReport/index?tab=heartRate');
			},
			bloodOxygenDetail() {
				// console.log('查看详情-血氧');
				goto.goto('../healthReport/index?tab=bloodOxygen');
			},
			uricAcidDetail() {
				// console.log('查看详情-尿酸');
				goto.goto('../healthReport/index?tab=uricAcid');
			},
			bloodFatDetail() {
				// console.log('查看详情-血脂');
				goto.goto('../healthReport/index?tab=bloodFat');
			},
			bloodSugarDetail() {
				// console.log('查看详情-血糖');
				goto.goto('../healthReport/index?tab=bloodSugar');
			},
			tiwenDetail(){
				// console.log('查看详情-体温');
				goto.goto('../healthReport/index?tab=tiwen');
			},
			shuimianDetail(){
				// console.log('查看详情-睡眠');
				goto.goto('../healthReport/index?tab=shuimian');
			},
			//暂时不做的功能
			noTodo(){
				uni.showToast({
					title: '暂未开放',
					duration: 2000,
					icon: 'none',
				});
			},
			//首页tab栏切换，表格数据切换
			getThisTab(n) {
				this.cTab = n;
				// console.log(n);
				if (n == 'stepNumber') {
					this.clear_time();
					//渲染步数的数据和报表 得分环
					// this.chartLine = echarts.init(document.getElementById('chartBox'));
					this.chartLine.setOption(config.stepNumber(this.steps_value), true);
					this.showTabBottm = n;
					this.doing(config.stepNumber(this.steps_value));
				} else if (n == 'bloodPressure'){
					this.clear_time();
					this.clear_time2();
					//渲染血压的数据和报表  仪表盘
					this.chartLine.setOption(config.bloodPressure(this.xueya_value,this.xueya_value2), true);
					this.showTabBottm = n;
				} else if (n == 'heartRate') {
					this.clear_time();
					this.clear_time2();
					//渲染心率的数据和报表 得分环
					this.chartLine.setOption(config.heartRate(this.xinlu_value), true);
					this.showTabBottm = n;
				} else if (n == 'bloodOxygen') {
					this.clear_time();
					this.clear_time2();
					//渲染血氧的数据和报表  仪表盘
					this.chartLine.setOption(config.bloodOxygen(this.xueyang_value), true);
					this.showTabBottm = n;
				} else if (n == 'uricAcid'){
					this.clear_time();
					this.clear_time2();
					//渲染尿酸的数据和报表 仪表盘
					this.chartLine.setOption(config.uricAcid(this.niaosuan_value), true);
					this.showTabBottm = n;
				} else if (n == 'bloodFat') {
					this.clear_time();
					this.clear_time2();
					//渲染血脂的数据和报表 仪表盘
					this.chartLine.setOption(config.bloodFat(this.xuezhi_value), true);
					this.showTabBottm = n;
				} else if (n == 'bloodSugar'){
					this.clear_time();
					this.clear_time2();
					//渲染血糖的数据和报表 仪表盘
					this.chartLine.setOption(config.bloodSugar(this.xuetang_value), true);
					this.showTabBottm = n;
				} else if (n == 'tiwen') {
					this.clear_time();
					this.clear_time2();
					//渲染体温的数据和报表 仪表盘
					this.chartLine.setOption(config.tiwen(this.tiwen_value), true);
					this.showTabBottm = n;
				} else if (n == 'shuimian'){
					this.clear_time2();
					//渲染睡眠的数据和报表 仪表盘
					this.chartLine.setOption(config.shuimian(this.sleep_value), true);
					let angle = 0;
					this.showTabBottm = n;
					this.draw(this.chartLine,this.sleep_value,angle);
				}
			},
			//链接跳转
			goto(n){
				// console.log(n);
				uni.navigateTo({
					url: n,
				})
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
			refresh() {
				location.reload();
			}
	},
	mounted() {
		// this.refresh()
		let that = this;
		let echarts = require('echarts');
		this.chartLine = echarts.init(document.getElementById('chartBox'));
		//获取app用户健康信息
		http.Get('/sys_fkcy/auhd/getHealthyData',{
			'appUserId': appToast.appUserId()
		}, function(res) {
			console.log(res);
			that.steps_value = res.data.steps.value;
			that.sleep_value = res.data.sleep.value;
			that.tiwen_value = res.data.tiwen.value;
			that.xinlu_value = res.data.xinlu.value;
			that.xuetang_value = res.data.xuetang.value;
			that.xueya_value = res.data.xueya.systolic_pressure;  //舒张压
			that.xueya_value2 = res.data.xueya.diastolic_pressure;  //收缩压
			that.xueyang_value = res.data.xueyang.value;
			that.xueya_zhegnduan = res.data.xueya.zhengduan;
			that.q_sleep = res.data.sleep.qian; 
			that.s_sleep =  res.data.sleep.shen;
			if(that.xuetang_value){
				that.chartLine.setOption(config.bloodPressure(that.xueya_value,that.xueya_value2), true);
			}
		});
		//根据token获取用户个人信息
		let data = {
			'appUserId': appToast.appUserId(),
		};
		http.Post('/sys_fkcy/appUser/getEssInfo.app', data, function(res){
			console.log(res);
			that.userName = res.data.full_name;
			if(res.data.full_name ==undefined  || res.data.full_name ==''){
				that.userName = '未设置';
			}
			that.userImg = res.data.img;
			if(res.data.img == undefined || res.data.img == ''){
  				that.userImg = 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2561659095,299912888&fm=26&gp=0.jpg';
			}
			that.location_ = res.data.permanent_address;
			if(res.data.permanent_address == undefined || res.data.permanent_address ==''){
				that.location_ = '未填写地址';
			}
		});
	},
	}
</script>
<style>
	@import url("../../util/tool/common.css");
	.content {}
	.gray_color{
		color:gray;
	}
	.tab-lan {
		font-size: .9rem;
		/* border: 1px solid red; */
		height: 1.6rem;
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

	.w100 {
		width: 100%;
	}

	/* 另一块 */
	.showAnother {
		position: absolute;
		left: 0;
		width: 90%;
		padding: 5%;
		top: 55%;
		/* border: 1px solid red; */
	}

	.more_type {
		border-top: 1px solid #eeeeee;
		width: 111%;
		text-align: center;
		padding-top: .8rem;
		position: relative;
		left: -1rem;
	}

	.otherTabFunction {
		position: relative;
		top: -2rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-gap: 10px;
		padding-top: .5rem;
	}

	.otherTabFunction img {
		padding-top: .4rem;
		width: 2.7rem;
		padding-bottom: .3rem;
	}
 
	.otherTabFunction view {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: .7rem !important;
	}

	.tabActive {
		color: #222222;
		/* color:red; */
		/* text-decoration: underline; */
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
		height: 1.7rem;
	}

	.tab-lan text {
		width: 5rem;
		display: inline-block;
		/* border: 1px solid red; */
		/* text-align: center; */
		padding-bottom: .2rem;
		/* border: 1px solid red; */
	}

	.text:after {
		content: '';
		display: block;
		margin-top: -5px;
		border-bottom: 2px solid grey;
	}

	.healthyData {
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: .5rem;
		background: #FFFFFF;
		box-shadow: 0px 2px 10px 0px rgba(83, 85, 112, 0.36);
		padding: 1rem;
		position: relative;
		top: -3rem;
	}

	.content {
		font-size: .8rem;
		border-top: 1px solid #eeeeee;
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
		/* border: 1px solid red; */
	}

	.box-css {
		/* border: 1px solid red; */
		width: 80%;
		height: 450upx;
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
