<template>
	<view class="content">
		<view class='healthyData'>
			<view class='tab-lan'>
				<!-- <text :class="[cTab == 'stepNumber'?'tabActive':'tabNoActive']" @click="getThisTab('stepNumber')">步数</text> -->
				<text :class="[cTab == 'bloodPressure'?'tabActive':'tabNoActive']" @click="getThisTab('bloodPressure')">血压</text>
				<text :class="[cTab == 'heartRate'?'tabActive':'tabNoActive']" @click="getThisTab('heartRate')">心率</text>
				<text :class="[cTab == 'bloodOxygen'?'tabActive':'tabNoActive']" @click="getThisTab('bloodOxygen')">血氧</text>
				<text :class="[cTab == 'uricAcid'?'tabActive':'tabNoActive']" @click="getThisTab('uricAcid')">尿酸</text>
				<text :class="[cTab == 'bloodFat'?'tabActive':'tabNoActive']" @click="getThisTab('bloodFat')">血脂</text>
				<text :class="[cTab == 'bloodSugar'?'tabActive':'tabNoActive']" @click="getThisTab('bloodSugar')">血糖</text>
				<text :class="[cTab == 'tiwen'?'tabActive':'tabNoActive']" @click="getThisTab('tiwen')">体温</text>
				<!-- <text :class="[cTab == 'shuimian'?'tabActive':'tabNoActive']" @click="getThisTab('shuimian')">睡眠</text> -->
			</view>
		</view>
		<view class='conten_setting'>
			<view v-if= "showTabBottm == 'bloodPressure' ">
				<view class='bloodPressure_setting'>
					<text>高压（收缩压）</text>
					<view class='flexBoxC'>
						<text>最高值</text>
						<input type="text">
						<text>mmHg</text>
					</view>
					<view class='flexBoxC'>
						<text>最低值</text>
						<input type="text">
						<text>mmHg</text>
					</view>
					<text>高压（舒张压）</text>
					<view class='flexBoxC'>
						<text>最高值</text>
						<input type="text">
						<text>mmHg</text>
					</view>
					<view class='flexBoxC'>
						<text>最低值</text>
						<input type="text">
						<text>mmHg</text>
					</view>
					<view class='saveBtn'>
						<text>保存</text>
					</view>
				</view>
			</view>
			<view v-if= "showTabBottm == 'heartRate' ">
				<view class='bloodPressure_setting'>
						<view class='flexBoxC'>
							<text>最高值</text>
							<input type="text">
							<text>次/分</text>
						</view>
						<view class='flexBoxC'>
							<text>最低值</text>
							<input type="text">
							<text>次/分</text>
						</view>
						<view class='saveBtn'>
							<text>保存</text>
						</view>
					</view>
				
			</view>
			<view v-if= "showTabBottm == 'bloodOxygen' ">
				<view class='bloodPressure_setting'>
					<text>饱和度</text>
					<view class='flexBoxC'>
						<text>最高值</text>
						<input type="text">
						<text>%</text>
					</view>
					<view class='flexBoxC'>
						<text>最低值</text>
						<input type="text">
						<text>%</text>
					</view>
					<text>脉率</text>
					<view class='flexBoxC'>
						<text>最高值</text>
						<input type="text">
						<text>分/次</text>
					</view>
					<view class='flexBoxC'>
						<text>最低值</text>
						<input type="text">
						<text>分/次</text>
					</view>
					<view class='saveBtn'>
						<text>保存</text>
					</view>
					</view>
				
			</view>
			<view v-if= "showTabBottm == 'uricAcid' ">
				<view class='bloodPressure_setting'>
					<view class='flexBoxC'>
						<text>最高值</text>
						<input type="text">
						<text>mmol/L</text>
					</view>
					<view class='flexBoxC'>
						<text>最低值</text>
						<input type="text">
						<text>mmol/L</text>
					</view>
					<view class='saveBtn'>
						<text>保存</text>
					</view>
					</view>
				
			</view>
			<view v-if= "showTabBottm == 'bloodFat' ">
				<view class='bloodPressure_setting'>
						<text>总胆固醇</text>
						<view class='flexBoxC'>
							<text>最高值</text>
							<input type="text">
							<text>mmol/L</text>
						</view>
						<view class='flexBoxC'>
							<text>最低值</text>
							<input type="text">
							<text>mmol/L</text>
						</view>
						<text>甘油三脂</text>
						<view class='flexBoxC'>
							<text>最高值</text>
							<input type="text">
							<text>mmol/L</text>
						</view>
						<view class='flexBoxC'>
							<text>最低值</text>
							<input type="text">
							<text>mmol/L</text>
						</view>
						<text>高密度脂蛋白</text>
						<view class='flexBoxC'>
							<text>最高值</text>
							<input type="text">
							<text>mmol/L</text>
						</view>
						<view class='flexBoxC'>
							<text>最低值</text>
							<input type="text">
							<text>mmol/L</text>
						</view>
						<text>低密度脂蛋白</text>
						<view class='flexBoxC'>
							<text>最高值</text>
							<input type="text">
							<text>mmol/L</text>
						</view>
						<view class='flexBoxC'>
							<text>最低值</text>
							<input type="text">
							<text>mmol/L</text>
						</view>
						<view style='margin-bottom: 5rem;' class='saveBtn'>
							<text>保存</text>
						</view>
					</view>
				
			</view>
			<view v-if= "showTabBottm == 'bloodSugar' ">
				<view class='bloodPressure_setting'>
					<text>空腹</text>
					<view class='flexBoxC'>
						<text>最高值</text>
						<input type="text">
						<text>mmol/L</text>
					</view>
					<view class='flexBoxC'>
						<text>最低值</text>
						<input type="text">
						<text>mmol/L</text>
					</view>
					<text>餐前</text>
					<view class='flexBoxC'>
						<text>最高值</text>
						<input type="text">
						<text>mmol/L</text>
					</view>
					<view class='flexBoxC'>
						<text>最低值</text>
						<input type="text">
						<text>mmol/L</text>
					</view>
					<text>餐后</text>
					<view class='flexBoxC'>
						<text>最高值</text>
						<input type="text">
						<text>mmol/L</text>
					</view>
					<view class='flexBoxC'>
						<text>最低值</text>
						<input type="text">
						<text>mmol/L</text>
					</view>
					<text>睡前</text>
					<view class='flexBoxC'>
						<text>最高值</text>
						<input type="text">
						<text>mmol/L</text>
					</view>
					<view class='flexBoxC'>
						<text>最低值</text>
						<input type="text">
						<text>mmol/L</text>
					</view>
					<text>凌晨</text>
					<view class='flexBoxC'>
						<text>最高值</text>
						<input type="text">
						<text>mmol/L</text>
					</view>
					<view class='flexBoxC'>
						<text>最低值</text>
						<input type="text">
						<text>mmol/L</text>
					</view>
					<view style='margin-bottom: 5rem;' class='saveBtn'>
						<text>保存</text>
					</view>
					</view>
				
			</view>
			<view v-if= "showTabBottm == 'tiwen' ">
				<view class='bloodPressure_setting'>
						<text>空腹</text>
						<view class='flexBoxC'>
							<text>最高值</text>
							<input type="text">
							<text>°C</text>
						</view>
						<view class='flexBoxC'>
							<text>最低值</text>
							<input type="text">
							<text>°C</text>
						</view>
						<view class='saveBtn'>
							<text>保存</text>
						</view>
					</view>
				
			</view>
			<view v-if= "showTabBottm == 'shuimian' ">
				<view class='bloodPressure_setting'>
						<text>高压（收缩压）</text>
						<view class='flexBoxC'>
							<text>最高值</text>
							<input type="text">
							<text>mmHg</text>
						</view>
						<view class='flexBoxC'>
							<text>最低值</text>
							<input type="text">
							<text>mmHg</text>
						</view>
						<text>高压（舒张压）</text>
						<view class='flexBoxC'>
							<text>最高值</text>
							<input type="text">
							<text>mmHg</text>
						</view>
						<view class='flexBoxC'>
							<text>最低值</text>
							<input type="text">
							<text>mmHg</text>
						</view>
						<view class='saveBtn'>
							<text>保存</text>
						</view>
					</view>
			</view>
		</view>
	</view>
</template>
<script>
	import http from '../../util/tool/http.js';
	export default {
		data() {
			return {
				cTab: 'bloodPressure',
				showTabBottm: 'bloodPressure',
			}
		},
		methods:{ 
			//首页tab栏切换，表格数据切换
			getThisTab(n){
				this.cTab = n;
				console.log(n);
				 if (n == 'bloodPressure') {
					//渲染血压
					this.showTabBottm = n;
					
				} else if (n == 'heartRate'){
					//渲染心率
					this.showTabBottm = n;
					
				} else if (n == 'bloodOxygen') {
					//渲染血氧
					this.showTabBottm = n;
					
				} else if (n == 'uricAcid') {
					//渲染尿酸
					this.showTabBottm = n;
					
				} else if (n == 'bloodFat') {
					//渲染血脂
					this.showTabBottm = n;
					
				} else if (n == 'bloodSugar'){
					//渲染血糖
					this.showTabBottm = n;
					
				} else if (n == 'tiwen') {
					//渲染血糖
					this.showTabBottm = n;
					
				} else if (n == 'shuimian') {
					//渲染血糖
					this.showTabBottm = n;
					
				}
			},
			//链接跳转
			goto(n){
				uni.navigateTo({
					url:n,
				})
			},
			//测试调用安卓对象
			appToast(){
				//安卓对象
				appNative.toast();
			},
		},
		mounted(){
		},
	}
</script>
<style>
	.saveBtn{
		width: 100%;
		display:flex;
		align-items: center;
		justify-content: center;
		}
	.saveBtn text{
		padding: .5rem .8rem;
		font-size: 1rem;
		width: 50%;
		color:white;
		background-color: #00D193;
		margin-top: 10%;
		border-radius: 1.5rem;
	}
	.flexBoxC{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: 95%;
		margin-left: 5%;
		
	}
	.flexBoxC text{
		padding: 1.3rem 1.3rem;
		font-size: .8rem;
		color:#666666; 
	}
	.flexBoxC input{
		background-color: #f5f5f5;
		height: 2rem;
	}
	.conten_setting{
		position: relative;
		width: 100%;
	}
	.bloodPressure_setting{
		position: relative;
		width: 100%;
		text-align: center;
	}
	.bloodPressure_setting>text{
		padding: .5rem .5rem;
		color: black;
		font-weight: 600;
		font-size: 1rem;
		display: inline-block; 
	}
s	.tabActive {
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
		font-size: 1rem;
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
		padding: .5rem 1rem;
		position: relative;
		top: -0rem;
		box-shadow: 0 0 .5rem #eeeeee;
	}

	.content {
		font-size: .8rem;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}



</style>
