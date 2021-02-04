	/*angularJs */
	var app = angular.module('myApp', []);
    
	app.controller('register', function($scope, $http) {
		//跳转到登录页面
		$scope.btnUrl=function(){
			window.location.href = "../login/login.html";
		}
		//注册
		$scope.btnRegister=function(){
			//获取兑换商品信息
			////192.168.124.22:8080/sys_fkcy/userinfo/save.do
		    var url = localurl+"/sys_fkcy/userinfo/save";
		    //请求头
	        // var headers = { 
	        // 		  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
	        // };
	    	
	    	//参数
	    	var data=[	    		   
	    			'username='+$scope.username,
	    			'pwd='+$scope.pwd
	    	];
	    	
			//发送请求
			$http({
				 method: 'POST',
				 data:data.join("&"),
				 headers: headers,
				 url: url,
			}).then(function successCallback(response) {
				$scope.list = response.data;
				var data=response.data;
				alert(data.msg).then(() => {
					if(data.state==200){
									var hre = '../login/login.html';
									//传递对象：先将对象转成字符串（序列化）
									window.location.href = hre;
					}
				});		
			}); 
		}
	});