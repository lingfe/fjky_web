<template>
	<view class='content'>
		<!-- 添加按钮 -->
		<text class='addBtn' @click='addmedicalRecords()'>添加</text>
		<!-- 搜索框内容 -->
		<view class='searchiBox'>
			<input type="text" placeholder="搜索医院名称" @keyPress.enter='getlist(0)'>
			<icon type="search" size="15" />
		</view>
		<!-- 列表页列表内容 -->
		<view>
			<view class='item' v-for='(item,index) in items' :v-key='index'>
				<view>
					<img src="../../../static/indexImg/首页/icon_jiuzhentu@3x.png" alt="">
				</view>
				<view> 
					<!-- 时间 -->
					<view>
						<text class='time_'>{{item.mr_datetime}}</text>
					</view>
					<!-- 医院名称 -->
					<view>
						<text class='name_'>
							{{item.mr_hospital}}
						</text>
					</view>
					<!-- 结果分析 -->
					<view class='result_'>
						{{item.mr_result}}
					</view>
					<text class='showDetail' @click="detailmedicalRecords(item.id)">查看详情</text>
				</view>
			</view>
		</view>
		<uniLoadMore :status="status" :contentText='textObj' @clickLoadMore='getMore'></uniLoadMore>
	</view>
</template>
<script>
	import goto from '../../../util/tool/tool.js';
	import http from '../../../util/tool/http.js';
	import uniLoadMore from '../../../components/uni-load-more/uni-load-more.vue';
	import app from '../../../util/tool/andoridFun.js';
	export default {
		components:{
			uniLoadMore
		},
		data() {
			return {
				items:[],
				searchKey: '',
				//根据请求数据的状态更改该值
				status: 'moMore', //more/loading/moMore
				textObj: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				n_time: 1, //刷新次数
			}
		},
		methods: {
			addmedicalRecords() {
				goto.goto('../../addPage/addmedicalRecords/index');
			},
			detailmedicalRecords(id) {
				goto.goto('../../detailPage/detailmedicalRecords/index?id='+id);
			},
			//获取数据列表数据
			getlist(n) {
				let data = {
					pageIndex: 1 + parseInt(n), //当前页	 
					pageNum: 6, //页容量
					searchKey: this.searchKey,
					//关键字搜索
					user_id: app.appUserId(),
				};
				let that = this;
				http.Post('sys_fkcy/app_melreds/getPage.app', data, (res) => {
					if (n > 0) {
						that.items = that.items.concat(res.data.data);
					} else {
						that.items = res.data.data;
					}
					//停止上拉刷新的数据请求
					console.log(res);
					console.log(res.data.pageCount - that.items.length);
					//判断条件 如果总条数-展示的条数 > 0 
					if (res.data.numCount - that.items.length > 0) {
						//还有数据可以请求
						this.status = 'more';
					} else if (res.data.numCount - that.items.length == 0) {
						this.status = 'moMore';
					}
					uni.stopPullDownRefresh();
				})
			},
		},
		onShow(){
			this.getlist(0);
		},
		onPullDownRefresh: function(){
			// console.log(this.n_time);
			//下拉刷新的时候请求一次数据
			this.getlist(this.n_time); 
			this.n_time = this.n_time+1;
		},
	}
</script>
<style>
	@import url("../../../util/tool/common.css");

	.result_ {
		color: #999999;
		/* border: 1px solid red; */
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		height: 2rem;
		padding: 0 .5rem .5rem .5rem;
		line-height: 1.2rem;
		width: 90%;
		word-break: break-all;
	}

	.name_ {
		color: #666666;
	}

	.time_ {
		font-weight: bolder;
		color: #000000;
	}

	.item>view {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.item>view>view {
		padding-bottom: .3rem;
		padding-left: .8rem;
	}

	.showDetail {
		position: absolute;
		top: 1rem;
		right: 1rem;
		color: #00D193;
	}

	.item {
		box-shadow: 0 0 .5rem #dddddd;
		border-radius: .5rem;
		margin: 1.2rem;
		padding: .8rem;
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}

	.item img {
		width: 2rem;
	}

	.searchiBox icon {
		position: absolute;
		top: 1.2rem;
		left: 2rem;
	}

	.searchiBox {
		/* border: 1px solid red; */
		/* border-bottom: 1px solid #dddddd; */
		box-shadow: 0px 0px .5rem #dddddd;
		padding: 2% 5%;
		position: relative;
	}

	.searchiBox>input {
		background-color: #eeeeee;
		padding: .5rem 2.5rem;
		border-radius: 1.5rem;
		font-size: .8rem;
	}

	.content {
		position: relative;
		font-size: .8rem;
	}

	.addBtn {
		color: grey;
		position: absolute;
		top: -2rem;
		right: 1rem;
		z-index: 1000;
		font-weight: 600;
		font-size: .9rem;
	}
</style>
