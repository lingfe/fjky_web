export default {
	//链接跳转
	goto:function(n) {
		// console.log('123');
		// console.log(n);
		uni.navigateTo({
			url: n,
		}) 
	}, 
	//随机生成一个范围0-100的数 
	getNumber:function(){
		return Math.ceil(Math.random()*10);  
	}
}

