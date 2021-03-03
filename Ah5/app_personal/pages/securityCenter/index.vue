<template>
	<view class="">
		<view class="map_">
			<map style="width: 100%; height: 55vh;" :scale="20" :enable-building="true" :latitude="center[1]" :longitude="center[0]" :markers="covers"></map>
			<view class='Curtain'></view>
			<view class='funTab'>
				<text @click="undo()" style='background-color: #5092FF;margin-right: .8rem;'>活动轨迹</text>
				<text  @click="undo()" style='background-color: #00D193;margin-left: .8rem;'>电子围栏</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				//仅支持gjc02系坐标
				center: [117.000923, 36.675807],
				covers: [{
					latitude:36.675809,
					longitude: 117.0009123,
					iconPath: '../../static/indexImg/icon_dingwei@3x.png'
				}, {
					latitude: 36.675809,
					longitude: 117.0009123,
					iconPath: '../../static/indexImg/icon_dingwei@3x.png'
				}]
			}
		},
		methods:{
			undo(){
				uni.showToast({
					title:'功能开发中',
					icon:'none',
				})
			}
		}
	}
</script>
<style>
	.funTab{
		/* border: 1px solid red; */
		position: absolute;
		top:210px; 
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.funTab>text{
		padding: .5rem 3rem;
		color:white;
		border-radius: .5rem;
		font-size: 1rem;
	}
	.map_ img{
		display: none !important;
		border: 1px solid red;
	}

	.Curtain {
		width: 100%;
		height: 100px;
		position: relative;
		top: -100px;
		background-color: white;
	}
</style>
