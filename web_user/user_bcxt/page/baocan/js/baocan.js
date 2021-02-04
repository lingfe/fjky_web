const baocan ={
	num:1,
	jiajian:function(){
		$('#jian').on("click",function(){
			if(baocan.num > 1){
				baocan.num -=1;
			}else{
				baocan.num = 1;
			}
			$("#numInpt")[0].value=baocan.num;
		});
		$('#jia').on("click",function(){			 
			baocan.num +=1;	
			$("#numInpt")[0].value=baocan.num;		  
		})		
	},
	getToday:function(){
		let date = new Date();
		let currentYear = date.getFullYear();
		let today =date.getDate();
		let month =date.getMonth()+1;		
		let hours =date.getHours();
		let min = date.getMinutes();
		return currentYear +'-'+ month+'-'+today+'   '+hours+':'+min;
		//console.log()
	},
	getTaocan:function(data){  ///5 元套餐 10元套餐
		let datat = data.data;
		let str ='' , strtype = '',openDate = '开放时间： ';
		openDate += datat.cant_open_date+' ~ '+datat.cant_shut_date;
		// for(let i=0;i<datat.length;i++){	 
		for(let i=0;i<datat.list_commodity.length;i++){
			let temp = 	datat.list_commodity[i].comm_name;
			str += '<option data_body="'+temp+'" data_price="'+datat.list_commodity[i].comm_price+'" data_commodityId="'+datat.list_commodity[i].id+'" value ="'+datat.id+'">'+temp+'</option>';
		}
		for(let i=0;i<datat.list_provide.length;i++){
			if(i==0){
				strtype += '<span class="wucan active">'+datat.list_provide[i].pro_name+'</span>';
			}else{
			 strtype += '<span class="wucan">'+datat.list_provide[i].pro_name+'</span>';			
			}
			
		}
		$('#shitang').html(str);
		$('#centpos').html(strtype);
		$('#toright').html(openDate);//cant_open_date
	},
	getSTOffer:function(data){//获取食堂套餐信息
		let _this = this;
		let canteen_id =$("#stname option:selected").val();
		let url = localurl+"/sys_fkcy/enterprise_canteen/getWhereId?id="+canteen_id;
	 	$.ajax({ 
             url: url,
             context: document.body, //{'Content-Type':'application/json;charset=utf8','token':Storage.get("token")}
             headers:headers,
             xhrFields: {
              withCredentials: true
             },                                      
             success: function(data){
             	_this.getTaocan(data);
             	if(data.state ==200){                     
                  //alert(data.msg);                                          
             	}
             }
        });
	},
	getShiTang:function(data){
		//unshift  插入到数组最前面
		//arrayObj.splice(deletePos,deleteCount)
		let params = this.getHashParameters();
		let id =params["canteen_id"];
		let str = '';
		for(let i=0;i<data.length;i++){
			if(data[i].id ==id){
				let curdata = data.splice(i,1);
				data.unshift(curdata[0]);
			}			
		}
		for(let j=0;j<data.length;j++){
			 str += '<option value ="'+data[j].id+'">'+data[j].cant_name+'</option>';			
		}
		 		
		$('#stname').html(str);

	},
	// function getHashParameter(key){
 //    var params = getHashParameters();
 //    return params[key];
	// }

	 getHashParameters:function(){
	    var arr = (location.hash || "").replace(/^\#/,'').split("&");
	    var params = {};
	    for(var i=0; i<arr.length; i++){
	        var data = arr[i].split("=");
	        if(data.length == 2){
	             params[data[0]] = data[1];
	        }
	    }
	    return params;
	},
	saveBaocan:function(){
		//alert("asaa");
		let rep_date = baocan.getToday();
		let rep_type = $('#centpos .active').text();
		if(rep_type ==''){
			alert("请选择用餐类型！！");
			return;
		}
		let rep_num = $('#numInpt').val();
		let canteen_id =$("#stname option:selected").val();
		let commodity_id =$("#shitang option:selected").attr("data_commodityId");
		let price = $("#shitang option:selected").attr("data_price")*100;
		let body = $("#shitang option:selected").attr("data_body");
		let url =localurl+"/sys_fkcy/canteen_report/save.do?rep_date="+rep_date+"&rep_type="+rep_type+"&rep_num="+rep_num+"&canteen_id="+canteen_id+"&commodity_id="+commodity_id;
		//sys_fkcy/canteen_report/save.do		
		$.ajax({ 
             url: url,
             context: document.body, //{'Content-Type':'application/json;charset=utf8','token':Storage.get("token")}
             headers:headers,
             xhrFields: {
              withCredentials: true
             },                                      
             success: function(data){
             	 if(data.state ==200){
	            	confirm({
	                title: '友情提示',
	                content: "报备成功！请问是否跳转线上支付？",
	                doneText: '确认',
	                cancalText: '取消'
		            }).then(() => {
			            window.location.href = localurl+"/sys_fkcy/pay/wxPay?out_trade_no="+data.data.order_id+"&total_fee="+price*data.data.rep_num+"&body="+body;	 		 	
		            }).catch(() => {
		                
		            })                                             
	             }else{
	             	alert(data.msg)
	             }
             }
        });
	}
}

$.ajax({ 
     url: localurl+"/sys_fkcy/enterprise_canteen/getUserJoinCanteen.do",
     context: document.body, 
     headers:{'Content-Type':'application/json;charset=utf8','token':Storage.get("token")},
     xhrFields: {
      withCredentials: true
     },
     // data:{'user_id':'12232332'},                          
     success: function(data){
        if(data.state =='200'){                	
        	//baocan.getStr(data.data);
        	baocan.getShiTang(data.data);//获取食堂信息
        	baocan.getSTOffer();//获取食堂提供的用餐信息
          //$('.time').text(data.data[0].crt_date);
        }else if(data.state == '401'){
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
        }else {
        	alert(data.msg);
        }                            
     }
});


$(document).ready(function(){
	$("#ok").on("click",function(){
		//alert("点击");
    	baocan.saveBaocan();
	});
	$("#centpos ").on("click",'.wucan',function(){
		let _this = this;
		$(_this).addClass("active").siblings().removeClass("active");
	})
	$("#stname").change(function(){
		baocan.getSTOffer();
	})
})



 