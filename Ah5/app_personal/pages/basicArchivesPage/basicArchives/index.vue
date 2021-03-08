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
					<text>158</text>
				</view>
				<view class='tab_item'>
					<text>体重（kg）</text>
					<text>50</text>
				</view>
				<view class='tab_item'>
					<text>BMI</text>
					<text>16.8</text>
				</view>
				<view class='tab_item'>
					<text>腰围（cm）</text>
					<text>58</text>
				</view>
				<view class='tab_item'>
					<text>臀围（cm）</text>
					<text>31</text>
				</view>
			</view>
			<!-- 器官功能 -->
			<view>
				<view class='title'>
					<text>器官功能</text>
					<img src="../../../static/edit-2.png" alt="" @click="a.goto('../organFunction/index')">
				</view>
				<view class='tab_item'>
					<text>左耳听力（db）</text>
					<text>未填写</text>
				</view>
				<view class='tab_item'>
					<text>右耳听力（db）</text>
					<text>48</text>
				</view>
				<view class='tab_item'>
					<text>左眼视力</text>
					<text>2.8</text>
				</view>
				<view class='tab_item'>
					<text>右眼视力</text>
					<text>1.2</text>
				</view>
				<view class='tab_item'>
					<text>有无残疾</text>
					<text>请输入残疾情况或无</text>
				</view>
			</view>
			<!-- 生活情况 -->
			<view>
				<view class='title'>
					<text>生活情况</text>
					<img src="../../../static/edit-2.png" alt="" @click="a.goto('../livingConditions/index')">
				</view>
				<view class='tab_item'>
					<text>情感状态</text>
					<text>丧偶</text>
				</view>
				<view class='tab_item'>
					<text>记忆功能</text>
					<text>请输入用户记忆情况</text>
				</view>
				<view class='tab_item'>
					<text>认知功能</text>
					<text>去评估</text>
				</view>
				<view class='tab_item'>
					<text>自理能力</text>
					<text>轻度依赖</text>
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
					<text>经常锻炼</text>
				</view>
				<view class='tab_item'>
					<text>饮酒情况</text>
					<text>从不饮酒</text>
				</view>
				<view class='tab_item'>
					<text>吸烟情况</text>
					<text>从不吸烟</text>
				</view>
			</view> 
		</view>
	</view>
</template>
<style>
	@import url("../../../util/tool/common.css");
	.age_{
		font-size: .7rem !important;
		padding-top: .5rem;
	}
	.tab_item>text:nth-child(1) {
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
				tele:'',
				age:'',
				a: goto,
				userName:'',
				userImg:'../../static/tx2.png',
				addr:'',
				idNumber:'',
			}
		},
		methods: {
		},
		mounted() {
			//根据token获取用户个人信息
			let userId = appToast.appUserId();
			let data = {
				'user_id': userId,
			};
			let that = this;
			http.Post('/sys_fkcy/appUser/getUserInfo', data, function(res) {
				console.log(res);
				that.userName = res.data.ess_info.full_name;
				that.userImg = res.data.ess_info.img;
				that.age = res.data.ess_info.age;
				that.tele = res.data.ess_info.phone;
				that.addr = res.data.ess_info.permanent_address;
				that.idNumber = res.data.ess_info.id_card;
			});
		},
	}
</script>
