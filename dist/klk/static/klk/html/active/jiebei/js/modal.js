(function ($) {
  var id = 'modal-' + Math.floor(Math.random() * 10000000000000000).toString(32)
  var style = $('<style type="text/css" rel="stylesheet"></style>')[0]
  $('head').append(style)
  style = style.sheet || style.styleSheet

  var i = -1

  /**
   * 动态添加css样式表
   * @param selector 选择器
   * @param rules 样式字符串
   * @param index 优先级
   */
  function addCssRule (selector, rules, index) {
    index = index || 0
    selector = '#' + id + selector

    var str = ''
    $.each(rules, function (key) {
      str += key + ': ' + this + ';'
    })

    if (style.insertRule) {
      style.insertRule(selector + '{' + str + '}', index)
    } else if (style.addRule) {
      style.addRule(selector, str, index)
    }
  }

  var modal = $('<div class="jacky-modal"></div>')
  modal.attr('id', id)

  addCssRule('.jacky-modal', {
    'position': 'fixed',
    'width': '100%',
    'height': '100%',
    'top': '0',
    'left': '0',
    'background-color': 'rgba(0,0,0,0.5)',
    'z-index': '999'
  }, ++i)

  addCssRule('.jacky-modal div', {
    '-webkit-box-sizing': 'border-box',
    'box-sizing': 'border-box'
  }, ++i)

  var box = $('<div class="jacky-modal-box"></div>')
  addCssRule('.jacky-modal .jacky-modal-box', {
    'position': 'fixed',
    'width': '400px',
    'margin': '0 auto',
    'left': '0',
    'right': '0',
    'bottom': '50%',
    'z-index': '999',
    'overflow': 'hidden',
    'background-color': '#e7e7e7'
  }, ++i)

  var titleBox = $('<div class="jacky-modal-title-box"></div>')
  addCssRule('.jacky-modal .jacky-modal-title-box', {
    'position': 'relative',
    'height': '60px',
    'line-height': '60px',
    'font-size': '24px',
    'background-color': '#1e1d23',
    'overflow': 'hidden',
    'color': '#f1e17b',
    'padding': '0 16px',
    '-webkit-box-sizing': 'border-box',
    'box-sizing': 'border-box',
    'text-align': 'left'
  }, ++i)

  var titleClose = $('<span class="jacky-modal-title-close"></span>')

  addCssRule('.jacky-modal .jacky-modal-title-close:before', {
    'content': '""',
    'display': 'inline-block',
    'width': '2px',
    'height': '30px',
    'position': 'absolute',
    'left': '19px',
    'top': '5px',
    '-webkit-transform': 'rotateZ(45deg)',
    'transform': 'rotateZ(45deg)',
    'background-color': '#fff'
  }, ++i)

  addCssRule('.jacky-modal .jacky-modal-title-close:after', {
    'content': '""',
    'display': 'inline-block',
    'width': '2px',
    'height': '30px',
    'position': 'absolute',
    'left': '19px',
    'top': '5px',
    '-webkit-transform': 'rotateZ(-45deg)',
    'transform': 'rotateZ(-45deg)',
    'background-color': '#d8d8d8'
  }, ++i)

  addCssRule('.jacky-modal .jacky-modal-title-close', {
    'display': 'inline-block',
    'width': '40px',
    'height': '40px',
    'position': 'absolute',
    'right': '10px',
    'top': '10px',
    'background-color': '#555',
    'border-radius': '50%'
  }, ++i)

  addCssRule('.jacky-modal .jacky-modal-title-close:hover', {
    'background-color': '#999'
  }, ++i)

  var title = $('<div class="jacky-modal-title">提示:</div>')
  addCssRule('.jacky-modal .jacky-modal-title', {
    'background-color': '#1e1d23',
    'overflow': 'hidden',
    'height': '100%'
  }, ++i)

  var contentBox = $('<div class="jacky-modal-content-box"></div>')
  addCssRule('.jacky-modal .jacky-modal-content-box', {
    'min-height': '84px',
    'font-size': '18px',
    'line-height': '28px',
    'text-align': 'left',
    'color': '#3c3c3c'
  }, ++i)

  var content = $('<div class="jacky-modal-content"></div>')
  addCssRule('.jacky-modal .jacky-modal-content', {
    'padding': '20px'
  }, ++i)

  var buttonBox = $('<div class="jacky-modal-btn-box"></div>')
  addCssRule('', {
    'text-align': 'center'
  }, ++i)
  var btnOk = $('<button class="jacky-modal-btn jacky-modal-btn-red" type="button">确定</button>')
  var btnCancel = $('<button class="jacky-modal-btn" type="button">取消</button>')

  addCssRule('.jacky-modal .jacky-modal-btn', {
    'display': 'inline-block',
    'height': '36px',
    'margin': '16px',
    'font-size': '18px',
    'line-height': '36px',
    'width': '120px',
    'out-line': '0',
    'border': 'none',
    'color': '#fff',
    'border-radius': '4px',
    'background-color': '#555555'
  }, ++i)

  addCssRule('.jacky-modal .jacky-modal-btn-red', {
    'background-color': '#0099ff'
  }, ++i)

  addCssRule('.jacky-modal .jacky-modal-btn:hover', {
    'background-color': '#f52727'
  }, ++i)

  var border = $('<div class="jacky-modal-border"></div>')
  /*

   */
  addCssRule('.jacky-modal .jacky-modal-border', {
    'position': 'absolute',
    'width': '100%',
    'height': '100%',
    'top': '0',
    'left': '0',
    'border-width': '1px',
    'border-image': 'linear-gradient(90deg, #bb9953 0% , #fefea6 50%, #bb9953 100%) 30 30',
    'border-style': 'solid',
    'pointer-events': 'none'
  }, ++i)

  buttonBox.append(btnOk)
  buttonBox.append(btnCancel)
  contentBox.append(content)
  titleBox.append(title)
  titleBox.append(titleClose)
  box.append(titleBox)
  box.append(contentBox)
  box.append(buttonBox)
  box.append(border)
  modal.append(box)

  // 默认值
  var _opt = {
    text: '',
    html: '',
    title: '',
    width: '',
    callback: null,
    modalEvt: false
  }

  function close (status) {
    if (typeof _opt.callback === 'function') {
      _opt.callback(status)
    }
    modal.hide()
  }

  function closeFalse () {
    close(false)
  }

  btnCancel.on('click', closeFalse)

  titleClose.on('click', closeFalse)

  modal.on('click', function () {
    if (_opt.modalEvt) closeFalse()
  })

  box.on('click', function () {
    return false
  })

  btnOk.on('click', function () {
    close(true)
  })

  window.alert = function (opt) {
    if (typeof opt === 'object') {
      _opt.text = opt.text || ''
      _opt.html = opt.html || ''
      _opt.title = opt.title || ''
      _opt.width = opt.width || ''
      _opt.callback = opt.callback || ''

      box.css('width', opt.width || '400px')

      contentBox.html('')
      if (opt.text) {
        content.html(opt.text)
        contentBox.append(content)
      } else if (opt.html) {
        contentBox.html(opt.html)
      } else {
        content.text('')
      }

      title.html(opt.title || '提示:')

      btnCancel.hide()
      modal.show()
    } else {
      box.css('width', '400px')

      title.html('提示:')

      content.html(opt)
      contentBox.html('')
      contentBox.append(content)

      btnCancel.hide()
      modal.show()
    }
  }

  close()
  $('body').append(modal)
})(window.$)
