export default{
	//调用安卓对象
	appUserId:function(){
		let userId_ = '';
		//从安卓对象哪里获取token数据 ，根据token数据获取用户姓名、用户头像、健康描述
		// userId_ = appNative.getUserId();
		userId_ = '0204e3ab-9be7-4b28-9157-4f287631f6e8';  //无数据的账户
		//暂时的测试数据
		return userId_;
	},
	appToken:function(){
		let token_ = '';
		// token_ = appNative.getUserToken();
		token_= '0204e3ab-9be7-4b28-9157-4f287631f6e8'; //无数据的账户
		return token_ ;
	},
}