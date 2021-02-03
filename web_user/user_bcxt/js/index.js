var  localurl= '';//http://192.168.124.8:8080'
const Storage =  {}
Storage.get = function (name) {
    return JSON.parse(localStorage.getItem(name))
}
Storage.set = function (name, val) {
    localStorage.setItem(name, JSON.stringify(val))
}
Storage.add = function (name, addVal) {
    let oldVal = Storage.get(name)
    let newVal = oldVal.concat(addVal)
    Storage.set(name, newVal)
}
var headers = { 
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  'token':Storage.get("token")
};

$('#page-top li').on('click',function(){
	alert({
		title:'提示',
		content: '维护中...'
	});
})

function getHashParameters(){
    var arr = (location.hash || "").replace(/^\#/,'').split("&");
    var params = {};
    for(var i=0; i<arr.length; i++){
        var data = arr[i].split("=");
        if(data.length == 2){
             params[data[0]] = data[1];
        }
    }
    return params;
}
window.onunload = function(){      // onUnload
      let u_id = Storage.get('token');
        ///userinfo/updateWhereId.do
      $.ajax({ 
             url: "/sys_fkcy/userinfo/updateWhereId.do?id="+u_id+"&state="+2,
             context: document.body, //{'Content-Type':'application/json;charset=utf8','token':Storage.get("token")}
             headers:headers,
             xhrFields: {
              withCredentials: true
             },                                      
             success: function(data){
              if(data.state == 200){
                 
                 }
            }

              
               
        });
}

