///canteen_report/today_data
///
 
let today ={
	getQueryVariable:function(variable){
           var query = window.location.search.substring(1);
           var vars = query.split("&");
           for (var i=0;i<vars.length;i++) {
                   var pair = vars[i].split("=");
                   if(pair[0] == variable){
                    return pair[1];
                  }
           }
           return(false);
    },
    today:function(){
      let _this = this;
      let yw_id = this.getQueryVariable('yw_id')
       let url = localurl+"/sys_fkcy/canteen_report/today_data?yw_id="+yw_id;
    	$.ajax({ 
             url: url,
             context: document.body, //{'Content-Type':'application/json;charset=utf8','token':Storage.get("token")}
             headers:headers,
             xhrFields: {
              withCredentials: true
             },                                      
             success: function(data){
              let arr = data.data.list_provide;
              if(data.state ==200){                     
                  _this.dealStr(arr)                                         
              }
             }
        });
      _this.triggerEvent();
    },
    dealStr:function(data){
      for(let i=0;i<data.length;i++){
        if(data[i].pro_name =="中餐"){
          $('#zhong .total span').html(data[i].rep_num);
          $('#zhong .tongji').html(data[i].size);
          $('#zhong .yzf').html(data[i].yzf_num);
        }
        if(data[i].pro_name =="晚餐"){
          $('#wan .total span').html(data[i].rep_num);
          $('#wan .tongji').html(data[i].size);
          $('#wan .yzf').html(data[i].yzf_num);
        }
        if(data[i].pro_name =="早餐"){
            $('#zao .total span').html(data[i].rep_num);
            $('#zao .tongji').html(data[i].size);
            $('#zao .yzf').html(data[i].yzf_num);
          }

      }
      // $('#ul').find('.color1').html(data.size);
      // $('#ul').find('.color2').html(data.rep_num);
      // $('#ul').find('.color3').html(data.yzf_num);
    },
    triggerEvent:function(){
      $("#tab").on('click','li', function(){
          let _this = this;
          let index = $(this).index();

          $(this).addClass('cur').siblings().removeClass('cur');
          $("#con .content").hide();
          $("#con .content").eq(index).show().siblings().hide();
      })
      $('#zhufan').on('click',function(){
        location.reload();
        //alert('刷新成功');
      })
    }

}
 today.today();