<!-- 录入生活方式信息 -->
<template>
	<view class='content' style='border-top:1px solid #eeeeee;'>
		<view class='title'>
			<text>生活方式</text>
		</view>
		<view class='content'>
			<!-- 锻炼情况 -->
			<view>
				<view class='subTitle'>
					<text>锻炼情况</text>
				</view>
				<view class='option_tab'>
					<text :class="A == 'A0'?'option_active':''" @click="changeOption('A0')">经常锻炼</text>
					<text :class="A == 'A1'?'option_active':''" @click="changeOption('A1')">偶尔锻炼</text>
					<text :class="A == 'A2'?'option_active':''" @click="changeOption('A2')">从不锻炼</text>
				</view>
			</view>
			<!-- 喝酒情况 -->
			<view>
				<view class='subTitle'>
					<text>喝酒情况</text>
				</view>
				<view class='option_tab'>
					<text :class="B == 'B0'?'option_active':''" @click="changeOption('B0')">经常喝酒</text>
					<text :class="B == 'B1'?'option_active':''" @click="changeOption('B1')">偶尔喝酒</text>
					<text :class="B == 'B2'?'option_active':''" @click="changeOption('B2')">从不喝酒</text>
				</view>
			</view>
			<!-- 吸烟情况  -->
			<view>
				<view class='subTitle'>
					<text>吸烟情况</text>
				</view>
				<view class='option_tab'>
					<text :class=" C== 'C0'?'option_active':''" @click="changeOption('C0')">经常吸烟</text>
					<text :class=" C== 'C1'?'option_active':''" @click="changeOption('C1')">偶尔吸烟</text>
					<text :class=" C== 'C2'?'option_active':''" @click="changeOption('C2')">从不吸烟</text>
				</view>
			</view>
		</view>
		<view class='stn' @click="saveData()"> 
			<text>保存</text>
		</view>
	</view>
</template>
<style>
	@import url("../../../util/tool/common.css");
	.stn{
		margin: 20%;
		padding-top: 2%;
		padding-bottom: 2%;
		text-align: center;
		font-size: 1rem;
		background-color: #00D193;
		color: white;
		border-radius: 1rem;
		
	}
	.option_tab {
		display: flex;
		flex-direction: row;
		text-align: center;
		justify-content: space-between;
		margin-bottom: .5rem;
	}

	.option_tab>text {
		padding: .5rem .8rem;
		border: 1px solid #dddddd;
		border-radius: .5rem;
		margin: .4rem;
		color: #666666;
		font-size: .7rem;
		width: 40%;
	}

	.option_active {
		color: #00D193 !important;
		border: 1px solid #00D193 !important;
	}

	.content>view {
	}

	.subTitle {
		color: black;
		font-weight: 600;
		font-size: .7rem;
		padding-bottom: .8rem;
	}
	.content {
		padding: .8rem;
	}
	.title {
		color: black;
		font-weight: bolder;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		position: relative;
		padding: 0rem;
		height: 0rem;
		padding-top: .5rem;
	}
	.outOne {
		position: absolute;
		color: #00D193;
	}
</style>
<script>
	import goto from '../../../util/tool/tool.js';
	import http from '../../../util/tool/http.js';
	import app from '../../../util/tool/andoridFun.js';
	export default {
		data() {
			return {
				a: goto,
				A:'A0',
				B:'B0',
				C:'C0',
				exercise_state:'0',
				drinking_state:'0',
				smoke_state:'0',
			}
		},
		methods: {
			//切换选项样式
			changeOption(str){
				if(str =='A0'){
					this.A = str;
					this.exercise_state = '0';
				}
				else if(str =='A1'){
					this.A = str;
					this.exercise_state = '1';
				}
				else if(str =='A2'){
					this.A = str;
					this.exercise_state = '2';
				}
				else if(str =='B0'){
					this.B = str;
					this.drinking_state = '0';
				}
				else if(str =='B1'){
					this.B = str;
					this.drinking_state = '1';
				}
				else if(str =='B2'){
					this.B = str;
					this.drinking_state = '2';
				}
				else if(str =='C0'){
					this.C = str;
					this.smoke_state = '0';
				}
				else if(str =='C1'){
					this.C = str;
					this.smoke_state = '1';
				}
				else if(str =='C2'){
					this.C = str;
					this.smoke_state = '2';
				}
			},
			//设置lifeStyle
			saveData(){
				let data = {
					exercise_state:this.exercise_state,
					drinking_state: this.drinking_state, 
					smoke_state :this.smoke_state,
					user_id:app.appUserId(),
				};
				http.Post('sys_fkcy/appUser/editLifeStyle', data, (res) => {
					// console.log(res);
					uni.showToast({
						title:res.msg,
						icon:'none',
						success() {
							let t = setInterval(()=>{
								clearInterval(t); 
								uni.navigateBack();
							},1000); 
						}
					})
				})
			},
			getData(){
				
			}
		},
		mounted() {
		},
		onLoad(option){
			console.log(option);
			this.A = 'A'+option.dl;
			this.B = 'B'+option.yj;
			this.C = 'C'+option.xy;
		}
	}
</script>
