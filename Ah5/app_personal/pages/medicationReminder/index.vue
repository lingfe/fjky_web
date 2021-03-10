<template>
	<view class='content' style='position: relative;border-top: 1px solid #f5f5f5;'>
		<view class='lists'>
			<view v-for='(item,index) in items' class="list" :v-key='index'>
				<view>
					<img src="../../static/indexImg/icon_chiyao@3x.png" alt="">
				</view>
				<view class='list_content'>
					<text style='color:black;font-weight: 600;font-size:.8rem;'>{{item.mr_title}}</text>
					<text style='color:gray;padding-top:.3rem;font-size: .7rem;width: 12rem;'>{{item.mr_start_date}}-{{item.mr_ent_date}}</text>
				</view>
				<view @click="goto.goto('../addPage/editMedicationReminder/index?id='+item.id)" class='edit_content'>
					<text>编辑</text>
				</view>
			</view>
		</view> 
		<uniLoadMore :status="status" :contentText='textObj' @clickLoadMore='getMore'></uniLoadMore>
		<view class='add_btn' @click="goto.goto('../addPage/addMedicationReminder/index')">
			<text>新增</text>
		</view>
	</view>
</template>
<script>
	import goto from '../../util/tool/tool.js'
	import http from '../../util/tool/http.js'
	import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue'
	export default {
		components: {
			uniLoadMore,
		},
		data(){
			return {
				items: [1], 
				goto: goto, 
				status: 'moMore', //more/loading/moMore
				textObj: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				}
			}
		},
		mounted() {
			// this.getList();
		},
		onLoad() { 
			console.log('刷新了');
			// this.getList();
		},
		onShow(){
			this.getList();
		},
		methods: {
			//获取吃药提醒列表
			getList(){
				http.Post('/sys_fkcy/mr/getMrList.app', {}, (res) => {
					console.log(res);
					this.items = res.data;
					//停止上拉刷新的数据请求
					uni.stopPullDownRefresh();
				})
			},
			getMore(e) {
				console.log(e.detail.status);
			}
		},
		onPullDownRefresh: function(){
			//下拉刷新的时候请求一次数据
			this.getList();
		},
	}
</script>
<style>
	@import url("../../util/tool/common.css");
	.add_btn {
		position: absolute;
		top: -1.7rem;
		right: 1rem;
		color: gray;
		font-size: .8rem;
		z-index: 1000;
		font-weight: bold;
	}
	.list {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: .5rem;
		margin: .8rem;
		box-shadow: 0 0 .8rem #eeeeee;
	}
	.list img {
		width: 2rem;
		padding-left: .2rem;
	}

	.list_content {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		font-size: .8rem;
		margin-left: -20%;
		width: 50%;
	}

	.edit_content {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		display: inline-block;
		width: 10%;
		text-align: left;
		height: 3.5rem;
		font-size: .7rem;
		color: gray;
	}
</style>
