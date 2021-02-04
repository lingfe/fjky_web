 


var getcanteeInfo ={
    getQueryVariable:function(variable){
           var query = window.location.search.substring(1);
           var vars = query.split("&");
           for (var i=0;i<vars.length;i++) {
                   var pair = vars[i].split("=");
                   if(pair[0] == variable){return pair[1];}
           }
           return(false);
    }
} 
// var headers = { 
//                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//             };
/*angularJs */
var app = angular.module('myApp', []);
var canteen_id = getcanteeInfo.getQueryVariable('canteen_id');
app.controller('userJoinCanteen', function($scope, $http) {
    
    //根据id获取食堂信息
    getCenteenInfo(canteen_id);
    function getCenteenInfo(id){
        $http({
            method:"get",
            headers:headers,
            url:localurl+"/sys_fkcy/enterprise_canteen/getWhereId?id="+id
        }).then(function successCallback(res){
          //$('#centeenInfo').html(res.data.data.)
            $scope.centeenInfo=res.data.data; 
        });
    }

    //获取url后面的参数
    
//var url = localurl+'/sys_fkcy/enterprise_canteen/userJoinCanteen.do';//canteen_id加入食堂
    //确定加入
    $scope.userJoin=function(){
            //登录请求路径
            var url = "/sys_fkcy/enterprise_canteen/userJoinCanteen.do?canteen_id="+canteen_id;
            //请求头          
            //发送请求
            //alert('nihao');
            $http({
                 method: 'POST',
                 headers: headers,
                 url: url,
            }).then(function successCallback(response) {
                //alert('成功');
                $scope.list = response.data;
                var data=response.data;
                
                if(data.state==200){

                    confirm({
                        title: '友情提示',
                        content: data.msg+"是否报餐?",
                        doneText: '确认',
                        cancalText: '取消'
                    }).then(() => {                
                        window.location.href = '../baocan/baocan.html#canteen_id='+canteen_id;                   
                    }).catch(() => {
                        window.location.href = '../../index.html#canteen_id='+canteen_id; 
                        //console.log('已取消')
                    })
                }else if(data.state=401){
                    confirm({
                        title: '友情提示',
                        content: data.msg,
                        doneText: '确认',
                        cancalText: '取消'
                    }).then(() => {                
                        window.location.href = '../login/login.html';                   
                    }).catch(() => {
                        window.location.href = '../login/login.html';
                    })                     
                }
            }); 
    }
});

