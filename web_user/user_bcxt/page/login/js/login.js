
	/*angularJs */
	var app = angular.module('myApp', []);
    
	app.controller('login', function($scope, $http) {
		//跳转到注册页面
		$scope.btnUrl=function(){
			window.location.href = "../register/register.html";
		
			$scope.username='';
			$scope.pwd='';
		}

		//登录
		$scope.btnLogin=function(){
			//登录请求路径
		    var url = localurl+"/sys_fkcy/userinfo/login"; 	
	    	//参数微信号，或电话号码
	    	var data=[
    		   'username='+$scope.username,//
    		   'pwd='+$scope.pwd
	    	];
	    	
			//发送请求
			$http({
				 method: 'POST',
				 data:data.join("&"),
				 headers: headers,
				 xhrFields: {
				 	withCredentials: true
				 },
				 url: url,
			}).then(function successCallback(response) {
				var data=response.data;				 
	                if(data.state==200){
						Storage.set("token",data.data.id);
						var hre = '/web_user/index.html';  //?data='+angular.toJson(response.data);
						//传递对象：先将对象转成字符串（序列化）
						//window.location.href = hre;					 
						let reg = RegExp(/register.html/); 
						if(document.referrer){
							if(!reg.test(document.referrer)){
								window.location.href = document.referrer;
							}else{
								window.location.href =hre;
							}					  
						}else{
							window.location.href =hre;
						}          
					}				
			}); 
		}
	});
