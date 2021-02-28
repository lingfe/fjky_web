<!-- 健康报告 -->
<template>
	<view class='content'>
		<!-- 用户信息头像 --> 
		<view class='userInfo'>
			<view>
				<img src="../../static/touxiang.png" alt="" />
			</view>
			<view class='userName'>
				<text>用户姓名</text>
				<text class='age_'>64岁</text>
			</view>
			<view class='basicArchives' @click="goto('../basicArchives/index')">
				<text>基础档案</text>
				<text>
					<img style='width: 2rem;padding-top:.3rem;' src="../../static/arrow-right-white.png" alt="">
				</text>
			</view>
		</view>
		<!-- 生活方式 -->
		<view class='liveType'>
			<view class='subTitle'>
				<text>生活方式</text>
			</view>
			<view class='situation'>
				<!-- 锻炼情况 -->
				<view style='background-color: #E6F9F3;'>
					<view class="img_v">
						<img src="../../static/indexImg/首页/pic_duanlian@3x.png" alt="">
					</view>
					<view class='text_v'>
						<text style='color:black;'>
							锻炼情况
						</text>
						<text class='greyColorWord'>
							经常锻炼
						</text>
					</view>
				</view>
				<!-- 饮酒情况 -->
				<view style='background-color: #FEF0EC;'>
					<view class="img_v">
						<img src="../../static/indexImg/首页/pic_jiu@3x.png" alt="">
					</view>
					<view class='text_v'>
						<text>
							饮酒情况
						</text>
						<text class='greyColorWord'>
							偶尔饮酒
						</text>
					</view>
				</view>
				<!-- 吸烟情况 -->
				<view style='background-color: #ECF3FE;'>
					<view class="img_v">
						<img src="../../static/indexImg/首页/pic_xiyan@3x.png" alt="">
					</view>
					<view class='text_v'>
						<text>
							吸烟情况
						</text>
						<text class='greyColorWord'>
							偶尔吸烟
						</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 功能list --> 
		<view>
			<view class='listItem' v-for='(item,index) in list' :v-key="index" @click="goto(item.pageUrl)">
				<img :src=item.imgUrl alt="">
				<text style='padding-left:.5rem;font-size:.9rem;width: 20%;color:gray;'>{{item.textString}}</text>
				<text class='text_type'>
					<img style='width: 2rem;padding-top:.3rem;' src="../../static/arrow-right-gray.png" alt="">
				</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				cTab: 'stepNumber',
				showTabBottm: 'stepNumber',
				//渲染功能列表list
				list:[
					{
						imgUrl:'../../static/indexImg/首页/icon_tijianjilu@3x.png',
						textString:'体检记录',
						pageUrl:'../physicalExaminationRecord/index'
					},
					{
						imgUrl:'../../static/indexImg/首页/icon_jiuzhnegjilu@3x.png',
						textString:'就诊记录',
						pageUrl:'../medicalRecords/index'
					},
					{
						imgUrl:'../../static/indexImg/首页/icon_changqiyongyao@3x.png',
						textString:'长期用药',
						pageUrl:'../longTermMedication/index'
					},
					{
						imgUrl:'../../static/indexImg/首页/icon_guomingshi@3x.png',
						textString:'过敏史',
						pageUrl:'../allergicHistory/index' 
					},
					{
						imgUrl:'../../static/indexImg/首页/icon_jibingshi@3x.png',
						textString:'疾病史',
						pageUrl:'../historyOfDisease/index'
					},
					{
						imgUrl:'../../static/indexImg/首页/icon_shoushushi@3x.png',
						textString:'手术史',
						pageUrl:'../historyOfSurgery/index'
					},
					{
						imgUrl:'../../static/indexImg/首页/icon_yichuantu@3x.png',
						textString:'家族史',
						pageUrl:'../familyHistory/index'
					},
				]
			}
		},
		methods: {
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
			}
		},
		mounted() {
		},
	}
</script>
<style>
	.content{
		border-top: 1px solid #eeeeee;
	}
	.age_{
		font-size: .9rem !important;
		padding-top: .5rem;
	}
	.basicArchives{
		display: flex;
		align-items: center;
	}
	.liveType{
		padding-bottom: .8rem;
	}
	.text_type {
		font-weight: 600;
		color: gray;
		width: 5rem;  
		/* border: 1px solid red; */
		width: 80%;
		text-align: right;
	}

	.listItem {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: .5rem;
		padding-bottom: .5rem;
		border-bottom: 1px solid #eeeeee;
	}

	.listItem img {
		width: 2rem;
		height: 2rem;
	}

	.greyColorWord {
		color: grey;
		font-size: .7rem;
		margin-top: .2rem;
		display: inline-block;
	}

	.subTitle {
		padding: 1rem;
		font-weight: 600;
		font-size: .9rem;
	}

	.situation {
		position: relative;
		display: flex;
		flex-direction: row;
		margin-left: .8rem;
		margin-right: .8rem;
	}

	.situation>view {
		margin: .2rem;
		display: flex;
		flex-direction: row;
		font-size: .8rem;
		padding: .3rem;
		justify-content: center;
		align-items: center;
		border-radius: .5rem;
	}

	.img_v {
		padding-right: .3rem;
	}

	.img_v img {
		width: 2.3rem;
	}

	.text_v {
		font-size: .8rem;
	}

	.userInfo {
		position: relative;
		display: block;
		/* border: 1px solid red; */
		background-color: #50AAFF;
		padding: .8rem;
		color: white;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.userInfo img{
		width: 4rem;
		height: auto;
	}

	.userName {
		display: flex;
		flex-direction: column;
		flex: 1.5;
		padding-left: .5rem;
	}
</style>
