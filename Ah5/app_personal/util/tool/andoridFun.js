export default {
	//调用安卓对象
	appUserId:function(){
		let userId_ = '';
		if(appNative){
			//从安卓对象哪里获取token数据 ，根据token数据获取用户姓名、用户头像、健康描述
			userId_ = appNative.getUserId() || '4c404454-0d30-475e-a4c5-57bfea958c96';
		}
		else{
			userId_ = '4c404454-0d30-475e-a4c5-57bfea958c96';
		}
		//暂时的测试数据
		return userId_;
	},
	appToken:function(){
		let token_ = '';
		if(appNative){
			token_ = appNative.getUserToken() || '3d9b2cf4-1de4-46ea-bb70-02c581303eb6';
		}
		else{
			token_ = '3d9b2cf4-1de4-46ea-bb70-02c581303eb6';
		}
		return token_ ;
	},
}