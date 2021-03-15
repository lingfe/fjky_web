<template>
	<view class='content content1'> 
		<view class='lists'> 
			<view class='item' v-for='(item,index) in items'>
				<view>
					<text>设备报警通知</text>
					<img @click='getStates()' src="../../static/allinfo.png" alt="">
				</view>
				<view>
					<text>你有新的警报数据!</text>
				</view>
				<view class='subText'>
					<view>
						<text>设备：</text>
						<text>3213423542345</text>
					</view>
					<view>
						<text>报警时间：</text>
						<text>2020-01-09 20:09</text>
					</view>
					<view>
						<text>报警内容：</text>
						<text>设备电量过低</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<style>
	@import url("../../util/tool/common.css");
	.item>view:nth-child(1){
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		font-size: .8rem;
		font-weight: bolder;
	}
	.item>view:nth-child(2){
		padding:.5rem 0;
		color: gray;
	}
	.subText{
		line-height: 1.2rem;
	}
	.subText>view>text:nth-child(1){
		color: gray !important;
		width: 5rem;
		display: inline-block;
	}
	.subText>view>text:nth-child(2){
		color: red !important;
	}
	img{
		width: 1.5rem;
		height: 1.5rem;
	}	
	.content1{
		background-color: #ededed;
		height: 90vh;
		font-size: .7rem !important;
	}
	.lists{
		padding: .5rem;
	}
	.item{
		padding: .7rem;
		background-color: white;
		font-size: .8rem;
		border-radius: .5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		margin-top: .5rem;
	}
</style>
<script>
	export default {
		data(){
			return{
				items:[1,2],
			}
		},
		methods:{
			//状态框弹出
			getStates(){
				uni.showActionSheet({
				    itemList: ['未读'],
				    success: function (res){
				        console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
				    },
				    fail: function (res){
				        console.log(res.errMsg);
				    }
				});
			}
		},
		mounted() {
			
		}
	}
</script>
