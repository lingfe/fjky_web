<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
			//定义全局变量
			// 192.168.124.25:8080/sys_fkcy
			getApp().globalData.api = '192.168.124.25:8080/sys_fkcy';
		},
		onShow: function(){
			// console.log('App Show')
		},
		onHide: function(){
			// console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './uni.scss';
	page{
		font-size: .8rem;
	}
	
	.uni-picker-container .uni-picker-action.uni-picker-action-confirm{
		color:#00D193 !important;
	}
</style>
