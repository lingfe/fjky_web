let http = {};
import app from './andoridFun.js';
export default http = {
	//get请求方法
	Get: function(url, data, getData) {
		uni.showLoading({
			title: '加载中',
			iocn: 'none',
		});
		uni.request({
			url: url,
			method: 'GET',
			data: data,
			header: {
				//自定义请求头信息
				'content-type':'application/x-www-form-urlencoded;charset=UTF-8',
				'token': app.appToken(),
			},
			timeout:1000, 
			success: (res) => {
				uni.hideLoading();
				if (res.data.code == 0){
					getData(res.data);
				} else {
					uni.showToast({
						title: res.msg ||url+ '请求失败',
						duration: 2000,
						icon:"none",
					});
				}

			},
			fail: (err) => {
				console.log(err);
				uni.showToast({
					title: err.msg,
					duration: 1000
				});
				uni.hideLoading(); 
			},
			complete: () => {
				uni.hideLoading();
			}
		});
	},
	//post请求方法
	Post: function(url, data,getData) {
		uni.showLoading({
			title: '加载中',
			iocn: 'none',
		});
		uni.request({
			url: url,
			method: 'POST',
			data: data,  //json数据
 			timeout:1000,
			header: {
				//自定义请求头信息
				'content-type':'application/x-www-form-urlencoded;charset=UTF-8',
				'token': app.appToken(),
			},
			success: (res) => {
				uni.hideLoading();
				if (res.data.code == 0){
					getData(res.data);
				} else {
					uni.showToast({
						title: res.msg,
						duration: 1000,
						icon:'none',
					});
				}
			},
			complete: () => {
				uni.hideLoading();
			}
		});
	}
}
