<template>
	<view class='content content1'>
		<view class='lists'>
			<view class='item' v-for='(item,index) in items'>
				<view>
					<text>设备报警通知</text>
					<img @click='getStates(item.state,item.id)' src="../../static/allinfo.png" alt="">
				</view>
				<view>
					<text>你有新的警报数据!</text>
				</view>
				<view class='subText'>
					<view>
						<text>设备：</text>
						<text>{{item.device_id}}</text>
					</view>
					<view>
						<text>报警时间：</text>
						<text>{{item.crt_date | toTime}}</text>
					</view>
					<view>
						<text>报警内容：</text>
						<text>{{item.content}}</text>
					</view>
				</view>
			</view>
			<view class='noData' v-if='noDataShow'>
				<img src="../../static/noData.png" alt="">
				<text style='font-size: .6rem;'>没有更多数据了</text>
			</view>
		</view>
	</view>
</template>
<style>
	@import url("../../util/tool/common.css");

	.noData img {
		width: 5rem;
		height: auto;
		margin-bottom: 1rem;
	}

	.noData {
		font-size: .8rem;
		color: gray;
		text-align: center;
		margin-top: 3rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.item>view:nth-child(1) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		font-size: .8rem;
		font-weight: bolder;
	}

	.item>view:nth-child(2) {
		padding: .5rem 0;
		color: gray;
	}
 
	.subText {
		line-height: 1.2rem;
	}

	.subText>view>text:nth-child(1) {
		color: gray !important;
		width: 5rem;
		display: inline-block;
	}

	.subText>view>text:nth-child(2) {
		color: red !important;
	}

	img {
		width: 1.5rem;
		height: 1.5rem;
	}
	.content1 {
		background-color: #ededed;
		font-size: .7rem !important;
		height: 93.5vh;
	}

	.lists {
		padding: .8rem;
		background-color: #ededed;
	}

	.item {
		padding: .7rem;
		background-color: white;
		font-size: .8rem;
		border-radius: .5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		margin-top: .8rem;
	}
</style>
<script>
	import app from '../../util/tool/andoridFun.js';
	import http from '../../util/tool/http.js';
	import tool from '../../util/tool/tool.js';
	export default {
		data() {
			return {
				items: [],
				noDataShow: false,
			}
		},
		filters: {
			toTime(v) {
				return tool.transformTime(v);
			},
		},
		methods: {
			//状态框弹出
			getStates(s, id) {
				console.log(s);
				if (s == 0) {
					uni.showActionSheet({
						itemList: ['设置已读'],
						success: function(res) {
							// console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
							http.Post('sys_fkcy/device_alerting/setRead', {
								aler_id: id
							}, (res) => {
								// console.log(res);
								uni.showToast({
									title: res.msg,
									icon: 1000,
									success() {
										location.reload();
									}
								})
							})
						},
						fail: function(res) {
							console.log(res.errMsg);
						}
					});
				} else {
					uni.showActionSheet({
						itemList: ['已读'],
						success: function(res) {
							// console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						},
						fail: function(res) {
							console.log(res.errMsg);
						}
					});
				}

			},
			//获取用户设备报警列表
			getData() {
				let that = this;
				http.Post('sys_fkcy/device_alerting/getDevAlertingList', {
					'user_id': app.appUserId()
				}, (res) => {
					if (res.data.length == 0) {
						that.noDataShow = true;
					} else {
						that.items = res.data;
					}
				})
			}
		},
		mounted() {
			this.getData();
		}
	}
</script>
