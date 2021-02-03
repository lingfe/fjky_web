

/*angularJs */
var app = angular.module('myApp', []);
app.controller('userJoinCanteen', function($scope, $http) {

    //根据id获取食堂信息
    function getCenteenInfo(id){
        $http({
            method:"get",
            headers:headers,
            url:"/sys_fkcy/en"
        }).then(function successCallback(res){
            $scope.centeenInfo=res.data;
        });
    }

    //获取url后面的参数
    

    //确定加入
    $scope.userJoin=function(){
            //登录请求路径
            var url = "/sys_fkcy/ok_diancan/save.do";
            //请求头
            var headers = { 
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            };
            
            //发送请求
            $http({
                 method: 'POST',
                 headers: headers,
                 url: url,
            }).then(function successCallback(response) {
                $scope.list = response.data;
                var data=response.data;
                alert(data.msg);
                if(data.state==200){
                    $(".btn").text("已报备");
                    $(".btn").css("pointer-events","none");
                    $(".btn").css("background-color","gray");
                    if(typeof(data.data.id)!='undefined'){
                        if(confirm("请问是否跳转线上支付？")){
                        window.location.href = "/sys_fkcy/pay/wxPay?date="+new Date();
                    }
                    }
                }
            }); 
    }
});

