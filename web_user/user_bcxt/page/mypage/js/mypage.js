const mypage = {
  u_id :'',
	ajax:function(){
		let _this = this;
    let u_id ='';
		$.ajax({ 
             url: localurl+"/sys_fkcy/userinfo/getUserInfo.do",
             context: document.body, //{'Content-Type':'application/json;charset=utf8','token':Storage.get("token")}
             headers:headers,
             xhrFields: {
              withCredentials: true
             },                                      
             success: function(data){
              if(data.state == 401){
                  confirm({
                  title: '友情提示',
                  content: data.msg,
                  doneText: '确认',
                  cancalText: '取消'
                }).then(() => {                
                  window.location.href = '../login/login.html';         
                }).catch(() => {
                    console.log('已取消')
                })
                return;
              }
            	let dat = data.data;
              mypage.u_id = data.data.id;

              if(dat){
                $("#touxiang p").html(dat.username);
                $("#touxiang img").attr("src",dat.user_img); 
              }                           
            }
        });
	},
	getDetail:function(data){
		let str = '';
		for(let i=0;i<data.length;i++){
			str += '<div class="ls"><p>食堂名称：'+data[i].canteen_info.cant_name+'</p><p>用餐类型：'+data[i].rep_type+'</p><p>数量：'+data[i].rep_num+'份</p>'+'\n'
      +'<p>报餐时间：'+data[i].rep_date+'</p></div>';
		}
		return str ;
		// <p>食堂名称：</p>
  //              <p>用餐类型：</p>
  //              <p>数量：</p>
	},
  tuichu:function(){
    $('#tuichu').on('click',function(e){
        Storage.set('token','');
        ///userinfo/updateWhereId.do
      $.ajax({ 
             url: "/sys_fkcy/userinfo/updateWhereId.do?id="+mypage.u_id+"&state="+1,
             context: document.body, //{'Content-Type':'application/json;charset=utf8','token':Storage.get("token")}
             headers:headers,
             xhrFields: {
              withCredentials: true
             },                                      
             success: function(data){
              if(data.state == 200){
                  confirm({
                  title: '友情提示',
                  content: data.msg,
                  doneText: '确认',
                  cancalText: '取消'
                }).then(() => {                
                  window.location.href = '../login/login.html';         
                }).catch(() => {
                    console.log('已取消')
                })
              }else if(data.state ==401){

              }
              let dat = data.data;
              if(dat){
                $("#touxiang p").html(dat.username);
                $("#touxiang img").attr("src",dat.user_img); 
              }   
              alert("退出成功").then(() => {
                window.location.href ='../login/login.html'         
              })                        
            }
        });
    })
  }
}

mypage.ajax();
mypage.tuichu();
