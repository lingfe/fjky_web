<template>
	<view class='content'> 
		<!-- 添加按钮 -->
		<text class='addBtn' @click='addlongTermMedication()'>添加</text>
		<!-- 搜索框内容 -->
		<view class='searchiBox'>
			<input type="text" placeholder="搜索" @confirm='getlist(0)'>
			<icon type="search" size="15" />
		</view>
		<!-- 列表页列表内容 -->
		<view>
			<view class='item' v-for='(item,index) in items' :v-key='index'>
				<view>
					<img src="../../../static/indexImg/icon_yaopingguan@3x.png" alt="">
				</view>
				<view>
					<!-- 时间 -->
					<view>
						<text class='time_'>阿莫西林</text>
					</view>
					<!-- 医院名称 -->
					<view>
						<text class='name_'>
							2020.01.14-2021.05.30
						</text>
					</view> 
					<!-- 结果分析 -->
					<view class='result_'>
						用药原因:生活方式和积极向上的心态将能减轻疾病的症状和提高药效.
					</view>
					<text class='showDetail' @click="detaillongTermMedication()">查看详情</text>
				</view>
			</view>
			<view class='noData' v-if='noDataShow'>
				<img src="../../../static/noData.png" alt="">
				<!-- <text>查无数据</text> -->
			</view>
		</view>
	</view>
</template>

<script>
	import goto from '../../../util/tool/tool.js';
	export default {
		data() {
			return { 
				noDataShow:false,
				items:[1,2],
			}
		},
		methods: {
		
			addlongTermMedication(){
				goto.goto('../../addPage/addLongTermMedication/index');
			},
			detaillongTermMedication(){
				goto.goto('../../detailPage/detailLongTermMedication/index');
			}
		},
	}
</script>

<style>
	@import url("../../../util/tool/common.css");
	
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
