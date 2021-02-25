<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
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
