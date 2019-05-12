document.documentElement.style.fontSize = (window.document.documentElement.clientWidth / 750) * 100 + 'px'
/*进度条*/
var i = 0
/*add——创建tbx下的div加文字和变宽度的方法*/
function add (i) {
  var tbox = $('.tbox')
  var tiao = $('.tiao')
  tiao.css('width', i + '%').html(i + '%')
}
/*创建方法（i++循环起来）*/
function xh () {
  if (i > 100) {
    // $('.ok').html('签名完成').fadeIn('slow')
    return
  }
  if (i <= 99) {
    setTimeout('xh()', 200)
    add(i)
    i++
  }
}

