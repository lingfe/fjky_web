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
					<view style='color:gray;' @click="undo('短信提醒')">
						短信
					</view>
					<view style='color:gray;' @click="undo('app提醒')">
						app
					</view>
				</view>
			</view>
		</view>
		<view class='saveBtn'>
			<text>保存</text>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			});
			return {
				time_hour: '12',
				time_second: '01',
				time: '',
				img_url: require('../../../static/arrow-right-gray.png'),
				date: currentDate,
				date1:'',
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
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
			bindDateChange: function(e) {
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
			bindTimeChange(e) {
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
		},
		mounted() {

		}
	}
</script>
<style>
	@import url("../../../util/tool/common.css");
	.saveBtn{
		margin:10%;
		text-align: center;
		padding: .5rem 0;
		background-color: #00D193;
		color: white;
		border-radius: 1rem;
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
