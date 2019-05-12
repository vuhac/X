var mySwiper = new Swiper('.swiper2', {
  autoplay: true,//可选选项，自动滑动
  autoHeight: true
})
var mySwiper1 = new Swiper('.swiper1', {
  autoplay: false,//可选选项，自动滑动
  autoHeight: true,
  observer:true,
  observeParents:true,
  pagination: {
    el: '.pagination.pagination1',
  },
})

var mySwiper2 = new Swiper('#swiper3', {
  loop:true,
  autoplay: false,//可选选项，自动滑动
  autoHeight: true,
  observer:true,
  observeParents:true,
  pagination: {
    el: '.pagination2',
  },
})
/*document.querySelector('#open').onclick = function () {
  document.querySelector('#overlay').style.display = 'block'
  document.querySelector('#easyDialogBox').style.display = 'block'
}*/
document.querySelector('#pay_close').onclick = function () {
  document.querySelector('#overlay').style.display = 'none'
  document.querySelector('#easyDialogBox').style.display = 'none'
  mySwiper1.slideTo(0, 1000, false);
}
document.querySelector('#get_udid').onclick = function () {
  document.querySelector('#overlay').style.display = 'none'
  document.querySelector('#easyDialogBox').style.display = 'none'
  mySwiper1.slideTo(0, 1000, false);
}

xh();

/*下载链接*/
// var android_url = 'http://3000016.com/download/xpj_new_version/xpj.apk'
var ios_url = 'itms-services:///?action=download-manifest&amp;url=https://raw.githubusercontent.com/buttCar/kjzb2/master/hqyl.plist'
var ua = window.navigator.userAgent.toLowerCase()

document.querySelectorAll('.d').forEach(function (item) {
  // item.href = ios_url
})

var links = document.querySelectorAll('.c')
document.querySelector('.c-random').href = links[Math.floor(Math.random() * 9999) % links.length]

document.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault()
  }
})
var lastTouchEnd = 0
document.addEventListener('touchend', function (event) {
  var now = (new Date()).getTime()
  if (now - lastTouchEnd <= 300) {
    event.preventDefault()
  }
  lastTouchEnd = now
}, false)
document.addEventListener('gesturestart', function (event) {
  event.preventDefault()
})

if (/iphone/.test(ua) || /ipad/.test(ua)) {
  document.querySelectorAll('.link').forEach(item => {
    // item.setAttribute('href', ios_url)
  })
} else if (/android/.test(ua)) {
  document.querySelectorAll('.link').forEach(item => {
    item.setAttribute('href', android_url)
  })
} else {
  console.log('您的移动设备暂不支持此APP，请谅解')
}

var jroll = new JRoll('#scroll')
jroll.refresh()
setInterval(function () {
  jroll.refresh()
}, 500)

/*
setTimeout(function () {
  $('#overlay').show();
  $('.box').show()
},2000)*/
