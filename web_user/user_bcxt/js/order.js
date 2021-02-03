
/*angularJs */
var app = angular.module('myApp', []);
app.controller('order', function($scope, $http) {

    //搜索
    $scope.changeSearch=function(){
      var list = $scope.toList;
      var tolist = [];
      if ($scope.searchStr == null || $scope.searchStr == '') {
        $scope.orderList=list;
        return;
      }

      for (var i = 0; i < list.length; ++i) {
        if (list[i].user_name.indexOf($scope.searchStr) != -1) {
          tolist.push(list[i]);
        } else if (list[i].reamrk.indexOf($scope.searchStr)!=-1){
          tolist.push(list[i]);
        } else if (list[i].ip.indexOf($scope.searchStr)!=-1){
          tolist.push(list[i]);
        }
      }

      $scope.baobeiList=tolist;
    }

    //获取我的订单
    getMyOrder();
    function getMyOrder(){
      //发送请求
      $http({
        url: "/sys_fkcy/ok_diancan/getAllToday?date="+new Date(),
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        } 
     }).then(function successCallback(response) { 
        $scope.baobeiList=response.data.data;
        $scope.toList=response.data.data;
     });
    }

});