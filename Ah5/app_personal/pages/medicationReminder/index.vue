<template>
	<view style='position: relative;border-top: 1px solid #f5f5f5;'>
		<view class='lists'> 
			<view v-for='(item,index) in items' class="list" :v-key='index'> 
				<view>
					<img src="../../static/indexImg/icon_chiyao@3x.png" alt="">
				</view>
				<view class='list_content'>
					<text style='color:black;font-weight: 600;font-size:1rem;'>提示内容</text>
					<text style='color:gray;padding-top:.3rem;font-size: .9rem;'>2020.11.22-2020.11.29</text>
				</view>
				<view class='edit_content'>
					<text>编辑</text>
				</view>
			</view>
		</view>
		<view class='add_btn'>
			<text>新增</text>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				items:[1,2],
			}
		}
	}
</script> 

<style>
	.add_btn{
		position: absolute;
		top:-2rem;
		right: 1rem ;
		color: gray;
		font-size: .95rem; 
		z-index: 1000; 
		font-weight: bold;
		/* border: 1px solid red ; */
	}
	.list{
		/* border: 1px solid red; */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding:.5rem;
		margin: .8rem;
		box-shadow: 0 0 .8rem #eeeeee;
	}
	.list img{
		width: 3.5rem;
		padding-left: .2rem;
	} 
	.list_content{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		font-size: .9rem;
		margin-left: -2.5rem;
		width: 50%;
	}
	.edit_content{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		display: inline-block;
		width: 10%;
		text-align: left;
		height: 3.5rem;
		font-size: .8rem;
		color: gray;
	}
</style>
