<!-- 录入生活情况信息 -->
<template>
	<view class='content' style='border-top:1px solid #eeeeee;'>
		<view class='title'>
			<text>生活情况</text>
			<text class='outOne'>保存</text>
		</view>
		<view>
			<view class='tab_item'>
				<text>情感状态</text>
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="uni-input">{{array[index]}}</view>
				</picker>
			</view>
			<view class='tab_item'>
				<text>记忆功能</text>
				<input type="text" value='请输入用户记忆情况'>
			</view>
			<view class='tab_item'>
				<text>认知功能</text>
				<picker @change="bindPickerChange" :value="index" :range="array2">
					<view class="uni-input">{{array2[index]}}</view>
				</picker>
			</view>
			<view class='tab_item'>
				<text>自理能力</text>
	<picker @change="bindPickerChange" :value="index" :range="array3">
					<view class="uni-input">{{array3[index]}}</view>
				</picker>
			</view>

		</view> 
	</view>
</template>
<style>
	@import url("../../../util/tool/common.css");
	.tab_item>text:nth-child(1) {
		color: #222222;
	}

	.tab_item>input:nth-child(2),.tab_item>picker:nth-child(2) {
		color: #666666;
		width: 50%;
		caret-color: #00D193;
		text-align: right;
	}

	.tab_item {
		/* border: 1px solid red; */
		padding: 1rem 1rem 1rem 1rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: 1px solid #eeeeee;
	}

	.title {
		color: black;
		font-weight: bolder;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		position: relative;
		padding-top: .8rem;
		padding-bottom: .8rem;
	}

	.outOne {
		position: absolute;
		color: #00D193;
		right: 1rem;
	}

</style>
<script>
	import goto from '../../../util/tool/tool.js';
	export default {
		data() {
			return {
				a: goto,
				array: [ '愉悦', '轻度抑郁','重度抑郁'],
				index:0,
				array2:['无认知障碍', '轻度认知障碍','重度认知障碍'],
				array3:['轻度依赖','中度依赖','重度依赖']
			}
		},
		methods: {
			//测试调用安卓对象
			appToast() {
				//安卓对象
				appNative.toast();
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
		},
		mounted() {
			// console.log(goto.goto);
		},
	}
</script>
