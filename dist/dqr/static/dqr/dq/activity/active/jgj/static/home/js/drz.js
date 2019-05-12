/*
$(function(){
	$.ajax({
		url:"gonggao",
		type:"GET",
		dataType:"json",
		success:function(e){

			if(e.status==1){
                $('#msgNews').html(e.content);
			}

		}
	});
});
*/




function page() {
			
			layer.open({
				 type: 1,
			     title: false,
			     area: ['900px', '225px'],
			     skin: 'layui-layer-nobg',
			     zIndex: 100,
			     shade: 0,
			     closeBtn :true,//false
			     shadeClose: true,//true
			     content: '<div style="background:#1f1f1f;color:#FFF;font-family:微软雅黑;width:880px;height:205px;padding:10px"><table style="display:table;border-collapse:collapse;border-spacing:0;text-align:center;width:100%;height: 10px;"><tr><td colspan="7" style="border:1px solid #ccc;font-size:20px;background:red"><span style="color:#fff000">尊敬的:</span><span style="color:#fff000" class="code">会员</span></td></tr><tr><td class="text1" style="border:1px solid #ccc;padding:10px 20px">累计打码</td><td class="text1" style="border:1px solid #ccc;padding:10px 20px">当前会员等级</td><td class="text1" style="border:1px solid #ccc;padding:10px 20px">本周打码量</td><td class="text1" style="border:1px solid #ccc;padding:10px 20px">距离下次升级还需要</td><td class="text1" style="border:1px solid #ccc;padding:10px 20px">周俸禄</td><td class="text1" style="border:1px solid #ccc;padding:10px 20px">月俸禄</td></tr><tr><td class="text1 code1" style="border:1px solid #ccc;padding:10px 20px">0</td><td class="text1 code3" style="border:1px solid #ccc;padding:10px 20px">0</td><td class="text1 code2" style="border:1px solid #ccc;padding:10px 20px">0</td><td class="text1 code5" style="border:1px solid #ccc;padding:10px 20px">0</td><td class="text1 code6" style="border:1px solid #ccc;padding:10px 20px">0</td><td class="text1 code7" style="border:1px solid #ccc;padding:10px 20px">0</td></tr></table></div>'
			})
		}
function page_del() {
			
			layer.open({
				 type: 1,
			     title: false,
			     area: ['800px', '420px'],
			     skin: 'layui-layer-nobg',
			     zIndex: 100,
			     shade: 0,
			     closeBtn :true,//false
			     shadeClose: true,//true
			     content: '<a href="javascript:void(0);" target="_black"><img src="./static/home/images/tc.jpg" width="783px" height="400px"/></a>'
			     
			})
		}
		function scq() {
			var user = $('#search1').val();
      var token = localStorage.getItem('token');
      if (user == "") {
        layer.msg("请填写用户名");
      }else {
        $.ajax({
          url:window.location.origin + '/api/v1/preferential/goldHousekeeper/' + user +'/',
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: token
          },
          type:"get",
          dataType:"json",
          success:function (e) {
              if(e.status==0){
                layer.msg(e.msg);
              }else if (e.code == 400){
                layer.msg("请登录");
              }else if(e.status==1){
                page();
                $('.code').html(e.data.username);
                $('.code1').html(e.data.bet_money);
                $('.code2').html(e.data.week_bet_money);
                $('.code3').html(e.data.level);
                // $('.code4').html(e.data.level);
                $('.code5').html(e.data.next_upgrade_gap);
                $('.code6').html(e.data.every_week_reward);
                $('.code7').html(e.data.every_month_reward);
              }
            }
        })
			}



		}
function dml_if(dml){

      if((''+dml).indexOf(".")!=-1){
     
    	result = (''+dml).substr(0,(''+dml).indexOf(".")+3); 
       // alert(result);
 		return result;
 	  }else{
  		 return dml;
  	  }


}


