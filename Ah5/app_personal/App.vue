<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
			//定义全局变量
			// 192.168.124.25:8080/sys_fkcy
			//生产环境 http://47.106.198.137:8080
			//测试环境 192.168.124.25:8080
			// getApp().globalData.api = '192.168.124.25:8080/sys_fkcy';
			getApp().globalData.api = 'http://47.106.198.137:8080/sys_fkcy'; 
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
	/*公共css */
	@import './uni.scss';
	page{
		font-size: .8rem;
	}
	/* 修改uni内置组件的默认样式 */
	.uni-picker-container .uni-picker-action.uni-picker-action-confirm,uni-modal .uni-modal__btn_primary{
		color:#00D193 !important;
	}
	uni-modal .uni-modal,uni-modal .uni-modal__btn,uni-modal .uni-modal__title{
		font-size: .8rem !important;
	}
	uni-modal .uni-modal__title{
		/* color: red !important; */
	}
	.uni-modal__bd{
		font-size: .8rem !important;
	}
	uni-actionsheet .uni-actionsheet{
		left: 0px;
		right: 0px;
		bottom:0px;
	}
	uni-actionsheet .uni-actionsheet.uni-actionsheet_toggle{
		background-color: #dedede;
	}
	.uni-actionsheet__menu .uni-actionsheet__cell{
		color:red !important;
	}
	.uni-load-more__text{
		font-size: .6rem !important;
	}
</style>
