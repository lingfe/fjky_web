<!-- 体检记录 -->
<template>
	<view class='content'> 
		<!-- 添加按钮 -->
		<text class='addBtn' @click='addfamilyHistory()'>添加</text>
		<!-- 搜索框内容 -->
		<view class='searchiBox'>
			<input type="text" placeholder="搜索">
			<icon type="search" size="15" />
		</view>
		<!-- 列表页列表内容 -->
		<view>
			<view class='item' v-for='(item,index) in items' :v-key='index'>
				<view>
					<img src="../../../static/indexImg/icon_yichuantu@3x.png" alt="">
				</view>
				<view>
					<!-- 时间 -->
					<view>
						<text class='time_'>遗传疾病名称</text>
					</view>
					<!-- 医院名称 -->
					<view>
						<text class='name_'>
							祖父
						</text> 
					</view>
					<!-- 结果分析 -->
					<view class='result_'>
						是否遗传：未遗传
					</view>
					<text class='showDetail' @click="detailfamilyHistory()">查看详情</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import goto from '../../../util/tool/tool.js';
	export default {
		data() {
			return { 
				items:[1,2],
			}
		},
		methods: {
			//测试调用安卓对象
			appToast() {
				//安卓对象
				appNative.toast();
			},
			addfamilyHistory(){
				goto.goto('../../addPage/addFamilyHistory/index');
			},
			detailfamilyHistory(){
				goto.goto('../../detailPage/detailFamilyHistory/index');
			}
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
		-webkit-line-clamp: 3;
		overflow: hidden;
		height: 1rem;
		width: 15.5rem;
		padding: 0 .5rem .5rem .5rem;
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
