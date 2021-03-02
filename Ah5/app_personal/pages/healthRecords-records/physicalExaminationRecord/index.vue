<!-- 体检记录 -->
<template>
	<view class='content'> 
		<!-- 添加按钮 -->
		<text class='addBtn' @click='addPhysicalExaminationRecord()'>添加</text>
		<!-- 搜索框内容 -->
		<view class='searchiBox'>
			<input type="text" placeholder="搜索医院名称">
			<icon type="search" size="15" />
		</view>
		<!-- 列表页列表内容 -->
		<view>
			<view class='item' v-for='(item,index) in items' :v-key='index'>
				<view>
					<img src="../../../static/indexImg/首页/icon_tijiantu@3x.png" alt="">
				</view>
				<view>
					<!-- 时间 -->
					<view>
						<text class='time_'>2020.01.14</text>
					</view>
					<!-- 医院名称 -->
					<view>
						<text class='name_'>
							碧江区人民医院
						</text>
					</view>
					<!-- 结果分析 -->
					<view class='result_'>
						结果分析：个人生活习惯问题导致的一些肺病肝病,注意下生活习惯,保持健康生活方式和积极向上的心态将能减轻疾病的症状和提高药效.
					</view>
					<text class='showDetail' @click="detailPhysicalExaminationRecord()">查看详情</text>
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
			addPhysicalExaminationRecord(){
				goto.goto('../../addPage/addPhysicalExaminationRecord/index');
			},
			detailPhysicalExaminationRecord(){
				goto.goto('../../detailPage/detailPhysicalExaminationRecord/index');
			}
		},
	}
</script>

<style>
	.result_ {
		color: #999999;
		/* border: 1px solid red; */
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		height: 3.5rem;
		width: 15.5rem;
		padding: 0 .5rem .5rem .5rem;
		line-height: 1.3rem;
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
