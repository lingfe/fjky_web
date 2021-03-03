<!-- 录入身体参数信息 --> 
<template>
	<view style='border-top:1px solid #eeeeee;'>
		<view class='title'>
			<text>身体基本参数</text>
			<text class='outOne'>保存</text>
		</view>
		<view>
			<view class='tab_item'>
				<text>身高（cm）</text>
				<!-- <text>158</text> -->
				<input type="text" value='158' auto-focus='ture'>
			</view>
			<view class='tab_item'>
				<text>体重（kg）</text>
				<input type="text" value='50' >
			</view>
			<view class='tab_item'>
				<text>BMI</text> 
				<input type="text" value='16.8' >
			</view>
			<view class='tab_item'>
				<text>腰围（cm）</text>
				<input type="text" value='58' >
			</view>
			<view class='tab_item'>
				<text>臀围（cm）</text>
				<input type="text" value='31' >
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

 