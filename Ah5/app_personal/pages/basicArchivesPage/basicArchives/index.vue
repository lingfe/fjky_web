<!-- 基础档案 -->
<template>
	<view class="content">
		<!-- 用户信息 -->
		<view class='userInfo'>
			<view>
				<img :src="userImg" alt="">
			</view>
			<view class='userName'>
				<text>{{userName}}</text> 
				<text class='age_'>{{age}}岁</text>
			</view>
			<view class='telPhone'>
				<text>{{tele}}</text>
			</view>
		</view>
		<!-- 身份证信息 -->
		<view class='idInfo'>
			<view>
				<text>身份证号</text>
				<text>{{idNumber}}</text>
			</view>
			<view>
				<text>家庭住址</text>
				<text>{{addr}}</text>
			</view>
		</view>
		<!-- 身体信息 -->
		<view class='bodyInfo'>
			<!-- 身体基本参数 -->
			<view>
				<view class='title'>
					<text>身体基本参数</text>
					<img src="../../../static/edit-2.png" alt="" @click="a.goto('../bodyParametersInput/index')">
				</view>
				<view class='tab_item'>
					<text>身高（cm）</text>
					<text>{{sg}}</text>
				</view>
				<view class='tab_item'>
					<text>体重（kg）</text>
					<text>{{tz}}</text>
				</view>
				<view class='tab_item'>
					<text>BMI</text>
					<text>{{bmi}}</text>
				</view>
				<view class='tab_item'>
					<text>腰围（cm）</text>
					<text>{{yw}}</text>
				</view>
				<view class='tab_item'>
					<text>臀围（cm）</text>
					<text>{{tw}}</text>
				</view>
			</view>
			<!-- 生活方式 -->
			<view>
				<view class='title'>
					<text>生活方式</text>
					<img src="../../../static/edit-2.png" alt="" @click="a.goto('../lifeStyle/index')">
				</view>
				<view class='tab_item'>
					<text>锻炼情况</text>
					<text>{{dl==0?'	从不锻炼':dl==1?'偶尔锻炼':'经常锻炼'}}</text>
				</view>
				<view class='tab_item'>
					<text>饮酒情况</text>
					<text>{{yj==0?'从不饮酒':yj==1?'偶尔饮酒':'经常饮酒'}}</text>
				</view>
				<view class='tab_item'>
					<text>吸烟情况</text>
					<text>{{xy==0?'从不吸烟':xy==1?'偶尔吸烟':'经常吸烟'}}</text>
				</view>
			</view>
			<view>
				<view class='title'>
					<text>评估结果</text>
					<img src="../../../static/edit-2.png" alt="" @click="a.goto('../../evaluationCenter/index')">
				</view>
				<view class='tab_item'>
					<text>慢性病状态</text>
					<text>{{mxb}}</text>
				</view>
				<view class='tab_item'>
					<text>心理健康</text>
					<text>{{xl}}</text>
				</view>
				<view class='tab_item'>
					<text>自理能力</text>
					<text>{{zl}}</text>
				</view>
				<view class='tab_item'>
					<text>认知能力</text>
					<text>{{rz}}</text>
				</view>
			</view>
		</view>
	</view>
</template>
<style>
	@import url("../../../util/tool/common.css");
	.age_ {
		font-size: .7rem !important;
		padding-top: .5rem;
	}

	.tab_item>text:nth-child(1){
		color: #222222;
	}

	.tab_item>text:nth-child(2) {
		color: #666666;
	}

	.tab_item {
		/* border: 1px solid red; */
		padding: .8rem 0 .8rem 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.title {
		text-align: center;
		position: relative;
		padding-bottom: 1rem;
		/* padding-top: 1.5rem; */
	}

	.title img {
		width: 1rem;
		height: 1rem;
		position: absolute;
		top: .3rem;
		right: 0;
	}

	.title>text {
		color: black;
		font-weight: bolder;
	}

	.bodyInfo {
		/* border: 1px solid red; */
		padding: 1rem;
		font-size: .8rem;
	}

	.bodyInfo>view {
		padding-bottom: 2.5rem;
	}

	.idInfo {
		/* border: 1px solid red; */
		padding: 1rem;
	}

	.idInfo>view {
		padding-top: .2rem;
		padding-bottom: .2rem;
		display: flex;
		flex-direction: column;
	}

	.idInfo>view>text {
		padding-top: .2rem;
		padding-bottom: .2rem;
	}

	.idInfo>view>text:nth-child(1) {
		color: black;
		font-weight: 500;
	}

	.idInfo>view>text:nth-child(2) {
		color: grey;
	}

	.userInfo {
		background-color: #52ABFF;
		color: white;
		position: relative;
		display: flex;
		padding: .8rem;
		align-items: center;
	}

	.userInfo img {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
	}

	.userName {
		position: relative;
		display: flex;
		flex-direction: column;
		padding-left: .5rem;
		width: 40%;
		font-size: .8rem;
	}

	.telPhone {
		width: 40%;
		text-align: center;
	}
</style>
<script>
	import appToast from '../../../util/tool/andoridFun.js';
	import http from '../../../util/tool/http.js';
	import goto from '../../../util/tool/tool.js';
	export default {
		data() {
			return {
				//个人信息
				tele: '',
				age: '',
				a: goto,
				userName: '',
				userImg: '../../static/tx2.png',
				addr: '',
				idNumber: '',
				//身体信息 
				sg: '',   //身高
				tz: '',    //体重
				bmi: '',  //bmi数值
				yw: '',   //腰围
				tw: '',   //臀围
				//生活方式
				dl: '',   //锻炼情况
				yj: '',   //饮酒情况 
				xy: '',   //吸烟情况
				//评估结果
				mxb:'', //慢性病情况 
				xl:'',  //心理健康
				zl:'', //自理能力
				rz:'', // 认知能力
			} 
		},
		methods: {
			getData() {
				//根据token获取用户个人信息
				let userId = appToast.appUserId();
				let data = {
					'user_id': userId,
				};
				let that = this;
				http.Post('/sys_fkcy/appUser/getRelevantData', data, function(res) {
					console.log(res);
					// 个人基本信息
					that.userName = res.data.ess_info.full_name;
					that.userImg = res.data.ess_info.img;
					that.age = res.data.ess_info.age;
					that.tele = res.data.ess_info.phone;
					that.addr = res.data.ess_info.permanent_address;
					that.idNumber = res.data.ess_info.id_card;
					// 身体参数信息
					that.sg = (res.data.ess_info.ess_stature == undefined ? '未知' : res.data.ess_info
						.ess_stature);
					that.tz = (res.data.ess_info.ess_weight == undefined ? '未知' : res.data.ess_info.ess_weight);
					that.bmi = (res.data.ess_info.ess_bmi == undefined ? '未知' : res.data.ess_info.ess_bmi);
					that.yw = (res.data.ess_info.ess_waistline == undefined ? '未知' : res.data.ess_info
						.ess_waistline);
					that.tw = (res.data.ess_info.ess_wh_than == undefined ? '未知' : res.data.ess_info
						.ess_wh_than);
					//生活方式信息
					that.dl = (res.data.style_info.exercise_state == undefined ? '未知' : res.data.style_info
						.exercise_state);
					that.yj = (res.data.style_info.drinking_state == undefined ? '未知' : res.data.style_info
						.drinking_state);
					that.xy = (res.data.style_info.smoke_state == undefined ? '未知' : res.data.style_info
						.smoke_state);
				});
				//获取评估结果的数据
				http.Post('sys_fkcy/eva_res/getUserEvaRes',{'user_id':'34f35165-b714-448c-8ede-cd8343a43b1a'},(res) => {
					// console.log(res);
					that.mxb = (res.data.eva_mxb_res == undefined ? '去评估' : res.data.eva_mxb_res );
					that.xl = (res.data.eva_xljk_res == undefined ? '去评估' : res.data.eva_xljk_res );
					that.rz = (res.data.eva_rznl_res  == undefined ? '去评估': res.data.eva_rznl_res); 
					that.zl = (res.data.eva_zlnl_res  == undefined ? '去评估' : res.data.eva_zlnl_res); 
				})
			}
		},
		mounted() {},
		onShow() {
			this.getData();
		}
	}
</script>
