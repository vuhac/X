$(function () {
  var user11 = localStorage.getItem('Public_User') ? localStorage.getItem('Public_User') : 'v1';
  var url = window.location.origin + '/api/' + user11 + '/';
  var token = localStorage.getItem('token');
  //弹框
  $('.butt').click(function () {
    $('.mes').hide()
  })
  $('.but').click(function () {
    checkIn()
  })
  $('.close').click(function () {
    $('.meser').hide()
  })

	//状态获取
	function dataGet(){
		$.ajax({
            method:'post',
            url: url + "preferential/qiandao/getWeekList",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token
              },   
            dataType:'json',
            data:{type:'weekQiandaoList'},
			success(data){
              if (data.code === 400) {
                $('.addup span').text('0元')
              } else {
                let list = data.data.status
                let addup =data.data.addup

                if (addup==undefined){
                  addup=0;
                }
                $('.addup span').text(''+addup+'元')
                $.each(list,function(k,v){
                  if(v.success){
                    $('.day').eq(k).css({background:'#f54242'})
                    $('.day_yes').eq(k).css({display:'block'})
                    $('.day_no').eq(k).css({display:'none'})
                    $('.day_yes span').eq(k).text(''+v.money+'元')
                  }
                })
              }

			},
			error(e){
				console.log(e)
			}
		})

	}

	//签到
	function checkIn(){
		$.ajax({
            method:'post',
            url: url+"preferential/qiandao",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: token
              },
        dataType:'json',
        data:{type:'startQiandao'},
			success(data){
              if (data.code === 400) {
                $('.meser').show()
                $('.meser .err span').text(data.message)
              } else {
                let mes = data.message
                let money = data.data.money
                let datcon = data.data.daynum
                if(data.code==200){
                  $('.content h1').text('奖励'+money+'元')
                  $('.content p').text('已连续签到'+datcon+'天')
                  $('.mes').show()
                  dataGet()
                } else{
                  $('.meser').show()
                  $('.meser .err span').text(mes)
                }
              }
			},
			error(e){
				console.log(e)
			}
		})
	}
	dataGet()
})
