$(function () {

  var user11 = localStorage['Public_User'] ? localStorage['Public_User'] : 'v1'
  var url = window.location.origin + '/api/' + user11 + '/'
  var token = localStorage['token']
  //实例SVG
  let mySvg = new Vivus('svg1', { type: 'delayed', duration: 50 })
  let mySvg1 = new Vivus('svg2', { type: 'delayed', duration: 50 })
  let mySvg2 = new Vivus('svg3', { type: 'delayed', duration: 50 })
  let mySvg3 = new Vivus('svg4', { type: 'delayed', duration: 50 })
  let mySvg4 = new Vivus('svg5', { type: 'delayed', duration: 50 })
  let mySvg5 = new Vivus('svg6', { type: 'delayed', duration: 50 })
  let mySvg6 = new Vivus('svg7', { type: 'delayed', duration: 50 })
  let arr = [mySvg, mySvg1, mySvg2, mySvg3, mySvg4, mySvg5, mySvg6]

  arr.forEach(function (item) {
    item.stop().reset()
  })

  $('.day').each(function () {
    $(this).hover(function () {
      arr[$(this).index('.day')].stop().reset().play(1)
      $('.mark').eq($(this).index('.day')).css({ left: '12px' })
      $('.mark').eq($(this).index('.day')).stop().animate({ left: '71px' }, 700)
    }, function () {
      arr[$(this).index('.day')].stop().reset()
    })
  })
//弹框
  $('.butt').click(function () {
    $('.mes').hide()
  })

//状态获取
  function dataGet () {
    $.ajax({
      method: 'post',
      url: url + 'preferential/qiandao/getWeekList',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: token
      },
      dataType: 'json',
      data: { type: 'weekQiandaoList' },
      success: function (data) {
        let list = data.data.status
        $.each(list, function (k, v) {
          if (v.success) {
            $('.noday').eq(k).css({ display: 'none' })
            $('.day').eq(k).css({ display: 'block' })
            $('.day_text').eq(k).css({ color: '#f54242' })
            $('.text').eq(k).css({ display: 'block' })
            $('.text .text_p').eq(k).text('' + v.money + '元')
            if (k >= 1) {
              $('.bor').eq(k - 1).css({ background: '#f54242' })
            }
          }
        })
      },
      error:function (e) {
        console.log(e)
      }
    })
  }

//签到
  function checkIn () {
    $.ajax({
      method: 'post',
      url: url + 'preferential/qiandao',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: token
      },
      dataType: 'json',
      data: { type: 'startQiandao' },
      success: function (data) {
        if (data.code === 400) {
          $('.meser').show()
          $('.meser .err span').text(data.message)
        } else {
          let mes = data.message
          let money = data.data.money
          let datcon = data.data.daynum
          if (data.code == 200) {
            $('.content h1').text('奖励' + money + '元')
            $('.content p').text('已连续签到' + datcon + '天')
            $('.mes').show()
            dataGet()
          } else {
            $('.meser').show()
            $('.meser .err span').text(mes)
          }
        }
      },
      error: function (e) {
        console.log(e)
      }
    })
  }

  $('.but').click(function () {
    checkIn()
  })
  $('.close').click(function () {
    $('.meser').hide()
  })
  dataGet()
})
