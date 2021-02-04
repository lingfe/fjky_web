const bcDetail = {
	ajax:function(){
		let _this = this;
		$.ajax({ 
             url: localurl+"/sys_fkcy/canteen_report/getUserReportInfo.do",
             context: document.body, //{'Content-Type':'application/json;charset=utf8','token':Storage.get("token")}
             headers:headers,
             xhrFields: {
              withCredentials: true
             },                                      
             success: function(data){
              if(data.state == 401){
                if(confirm(data.msg)){
                  window.location.href = '../login/login.html'
                }
              }else{
                 let dat = data.data;
                 $("#bcjilu").html(_this.getDetail(dat));
                 _this.bindEvent();
              }            	
             }
        });
	},
	getDetail:function(data){
		let strtemp='' ;
    let str = '';
    //+data.order_id+"&total_fee="+price+"&body="+body;
		for(let i=0;i<data.length;i++){
      str ='<div class="panel">';
      str += '<div class="ls">';      
      if(data[i].order_info.state ==0){
        str +='<p class="bianhao">订单编号：'+data[i].order_id+'<span>已支付</span></p>';
      }else{
        str +='<p class="bianhao">订单编号：'+data[i].order_id+'<span>待支付</span></p>';
      }
      str+='<dl class="dl"><dt><img src="../../images/bcnew/pic_food.png"/><p>'+data[i].rep_type+'</p></dt><dd><h3>食堂：'+data[i].canteen_info.cant_name+'</h3>';
      str +='<p>套餐详情：'+data[i].commodity_info.comm_name+'<span class="num">x'+data[i].rep_num+'</span></p>';
      str+='<p>下单时间：'+data[i].rep_date+'</p><div class="heji">合计：<span>￥'+data[i].rep_num*data[i].commodity_info.comm_price+'</span></div></dd></dl>';


      //str+='<p>下单时间：'+data[i].rep_date+'</p>';
      if(data[i].order_info.state ==0){
        let url =localurl+"/sys_fkcy/pay/wxPay?out_trade_no=";
        url += data[i].order_id+"&total_fee="+data[i].rep_num*data[i].commodity_info.comm_price*100+"&body="+data[i].commodity_info.comm_name;
        str += '<div class="pay"><p class="zhifu"><a href="'+url+'">去支付</a></p><p class="quik">取消订单</p></div>';
      }else{
        str += '<div class="pay"><p class="zhifu ok" class="quik">取消订单</p></div>';
      }
      str+='</div>';
    
      str += '</div>';
      strtemp += str;
		}
    	return strtemp ;
	},
  bindEvent:function(){
    $("#bcjilu").on('click','.quik',function(){
        alert("维护中...")
    })
  }
}