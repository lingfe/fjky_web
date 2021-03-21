export default{
	//调用安卓对象
	appUserId:function(){
		let userId_ = '';
		//从安卓对象哪里获取token数据 ，根据token数据获取用户姓名、用户头像、健康描述
		userId_ = appNative.getUserId();
		// userId_ = '032b6006-9a21-4dad-aa8c-c25f6a0687d0';  //无数据的账户
		//暂时的测试数据
		return userId_;
	},
	appToken:function(){
		let token_ = '';
		token_ = appNative.getUserToken();
		// token_= '032b6006-9a21-4dad-aa8c-c25f6a0687d0'; //无数据的账户
		return token_ ;
	},
}