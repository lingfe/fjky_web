<template>
	<view class='content'>
		<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
			<view class="input_">
				<text style='border-top: 1px solid #eeeeee;border-bottom: 1px solid #eeeeee; padding:.8rem 0;width: 90%;display: inline-block;'>
					<text style='padding-right: 3rem;'>{{time_hour}}</text> : <text style='padding-left:3rem;'>{{time_second}}</text>
				</text>
			</view>
		</picker>
		<view> 
			<view class='list'>
				<view>开始时间</view>
				<view class="uni-list-cell-db">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class='chiceTime'>
							<text class='timeS'>选择时间</text>
							<img :src='img_url' alt="">
						</view>
					</picker>
				</view>
			</view>
			<view class='list'>
				<text>结束时间</text>
			<view class="uni-list-cell-db">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange1">
					<view class='chiceTime'>
						<text class='timeE'>选择时间</text>
						<img :src='img_url' alt="">
					</view>
				</picker>
			</view>
			</view>
		</view>
		<view>
			<view class='subTitle'>
				<text style='margin-bottom: .8rem;font-weight: 600;'>提醒方式</text>
				<view class='remandType'>
					<view style='color:#00D193;border: 1px solid #00D193;'>日历</view>
					<view style='color:gray;'>
						短信
					</view>
					<view style='color:gray;'>
						app
					</view>
				</view>
			</view>
		</view>
		<view>
			<view class='saveBtn' @click="saveData()">
				<text>保存</text>
			</view>
			<view class='deletBtn' @click="deleteData()"> 
				<text>删除</text>
			</view>
		</view>
	</view>
</template>
<script>
	import http from '../../../util/tool/http.js'
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			});
			return {
				time_hour: '00',
				time_second: '00',
				time: '',
				img_url: require('../../../static/arrow-right-gray.png'),
				date: currentDate,
				date1:'',
				cId:'',
				id_:'',
			}
		},
		computed: { 
			startDate(){
				return this.getDate('start');
			},
			endDate(){
				return this.getDate('end');
			}
		},
		methods: {
			undo(n){
				uni.showToast({
					title:n+'开发中',
					icon:'none',
				})
			},
			//开始时间
			bindDateChange: function(e){
				this.date = e.target.value.replace(/-/g,'.');
				console.log(this.date);
				document.querySelector('.timeS').innerHTML  = this.date;
			},
			//结束时间
			bindDateChange1: function(e) {
				this.date1 = e.target.value.replace(/-/g,'.');
				document.querySelector('.timeE').innerHTML  = this.date1;
				console.log(this.date1);
			},
			//吃药时刻
			bindTimeChange(e){
				this.time = e.target.value;
				console.log(this.time);
				var arry = this.time.split(':');
				console.log(arry);
				this.time_hour = arry[0];
				this.time_second = arry[1];
			},
			getDate(type){
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}.${month}.${day}`;
			},
			//获取所要编辑的数据
			getData(id){
				this.cId = id;
				let that = this;
				http.Post('/sys_fkcy/mr/getWhereId',{id:id},(res) => {
					// console.log(res);
					document.querySelector('.timeS').innerHTML = res.data.mr_start_date;
					document.querySelector('.timeE').innerHTML = res.data.mr_ent_date;
					// time_hour: '12',
					// time_second: '01', 
					let a = res.data.mr_time.split(':');
					that.time_hour = a[0];
					that.time_second = a[1];
				})
			},
			//保存数据
			saveData(){
					//1验证数据 组织数据
					if(this.time_hour && this.time_second){
						// console.log(this.time);
						this.time = this.time_hour+':'+this.time_second;
						console.log(parseInt(this.time_hour));
						if(0<parseInt(this.time_hour) && parseInt(this.time_hour)<=6){
							this.dText ='凌晨';
						}
						if(6<parseInt(this.time_hour) && parseInt(this.time_hour)<=12){
							this.dText ='早上';
						}
						if(12<parseInt(this.time_hour)&& parseInt(this.time_hour)<=14){
							this.dText ='中午';
						}
						if(14<parseInt(this.time_hour)&& parseInt(this.time_hour)<=18){
							this.dText ='下午';
						}
						if(18<parseInt(this.time_hour)&& parseInt(this.time_hour)<=24){
							this.dText ='晚上';
						}
						let data = {
							id:this.id_,
							mr_title:'已设置-'+this.dText+'-吃药',
							//用药标题		
							mr_time:this.time,
							//用药时间点		
							mr_txt:'您今天在'+this.dText+this.time_hour+'点'+this.time_second+'分该吃药了啦!不要忘记了哦~',
							//用药提醒文字
							mr_way:0,  //日历提醒
							//提醒方式		
							mr_start_date:this.date,
							//开始用药提醒日期
							mr_ent_date:this.date1,
							//结束用药提醒日期
						}
						//2发送数据后台系统
						http.Post('/sys_fkcy/mr/updateWhereId.app', data, res => {
							// console.log(res);
							if(res.data){
								uni.showToast({
									title:res.msg,
									icon:'none',
								})
								let t = setInterval(function(){
									clearInterval(t); 
									uni.navigateBack();
									appNative.updateCalendarEvent();
								},2000)
							}
							else{
								uni.showToast({
									title:res.msg,
									icon:'none',
								})
							}
						})
					}
					if(this.time_hour == '00' && this.time_second == '00'){
						uni.showToast({
							title:'请先选择吃药时间',
							icon:'none',
						})
					}
					if(this.date_s == '' ){
						uni.showToast({ 
							title:'请选择开始吃药的时间',
							icon:'none',
						})
					}
					if(this.date_e == ""){
						uni.showToast({
							title:'请选择结束吃药的时间',
							icon:'none',
						})
					}
				},
				//删除数据
				deleteData(){
					http.Post('/sys_fkcy/mr/deleteWhereId.app',{id:this.cId}, (res) => {
						console.log(res);
						uni.showToast({
							title:res.msg, 
							icon:'none',
							success() {
								let timeClock = setInterval(function(){
									uni.navigateBack();
									clearInterval(timeClock);
								},1000);
							}
						})
					
					})
				}
		},
		mounted(){
 		},
		onLoad(option){
			console.log(option.id);
			//获取到id,根据id获取要编辑的内容
			this.getData(option.id);
			this.id_ = option.id;
		}
	}
</script>
<style>
	@import url("../../../util/tool/common.css");
	.saveBtn{
		margin:5% 10%;
		text-align: center;
		padding: .5rem 0;
		background-color: #00D193;
		color: white;
		border-radius: 1rem;
		border-color: #00D193;
	}
	.deletBtn{
		margin:5% 10%;
		text-align: center;
		padding: .5rem 0;
		color: red;
		border-radius: 1rem;
		border: 1px solid red;
	}
	.remandType{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.remandType>view{
		padding: .5rem 2em;
		border: 1px solid #dddddd;
		border-radius: .5rem ;
	}
	.subTitle{
		/* border: 1px solid red; */
		display: flex;
		flex-direction: column;
		padding: 1rem;
		margin-bottom: .5rem;
	}
	.input_ {
		/* border: 1px solid red; */
		display: inline-block;
		width: 100%;
		text-align: center;
		font-size: 1.5rem;
		padding: 2rem 0rem;
		background-color: #f8f8f8;
		font-weight: 600;
	}
	.list img {
		width: 2rem;
		padding-top: .5rem;
		padding-bottom: .5rem;
	}
	.chiceTime {
		/* border: 1px solid red; */
		display: flex;
		flex-direction: row;
		align-items: center;
		color: gray;
	}

	.list {
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #dddddd;
		align-items: center;
		justify-content: space-between;
		padding-left: 1rem;
	}
</style>
