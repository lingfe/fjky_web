<!-- 录入器官功能信息 --> 
<template> 
	<view style='border-top:1px solid #eeeeee;'>
		<view class='title'> 
			<text>器官功能</text>
			<text class='outOne'>保存</text>
		</view>
		<view>
			<view class='tab_item'>
				<text>左耳听力（db）</text>
				<input type="text" value='' auto-focus='ture' placeholder="请输入">
			</view>
			<view class='tab_item'>
				<text>右耳听力（db）</text>
				<input type="text" value='' auto-focus='ture' placeholder="请输入">
			</view>
			<view class='tab_item'>
				<text>左眼视力</text>
				<input type="text" value='' auto-focus='ture' placeholder="请输入">
			</view>
			<view class='tab_item'>
				<text>右眼视力</text>
				<input type="text" value='' auto-focus='ture' placeholder="请输入">
			</view>
			<view class='tab_item'>
				<text>有无残疾</text>
				<!-- <text>请输入残疾情况或无</text> -->
				<input type="text" value='无' auto-focus='ture' placeholder="请输入">
			</view>
		</view>
</view>
</template>
<style>
	.tab_item>text:nth-child(1) {
		color: #222222;
	}
	
	.tab_item>input:nth-child(2) {
		color: #666666;
		width: 30%;
		caret-color:#00D193;
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
	.title{
		color: black;
		font-weight: bolder;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		position: relative;
		padding-top:.8rem;
		padding-bottom: .8rem;
	}
	.outOne{
		position: absolute;
		color:#00D193;
		right: 1rem;
	}
</style>
<script>
</script>

 

