$(function () {

    // console.log("PT老虎机特效");


    /* PT老虎机特效 */
    moveAnimation();

    $(window).on("resize", function () {
        $("#screen").css({
            "width": $(document).width() + 20,
            "height": $(document).height() + 20
        });
        $("#livebox, #phone-box, #shownews").css({
            "left": $(window).scrollLeft() + $(window).width() / 2 - 273,
            "top": $(window).scrollTop() + $(window).height() / 2 - 112
        });
    });

    $("#items .pren").click(function () {
        var pagenum = $("#items .on").index();
        var pageall = $("#items .item").length;
        if ($(this).hasClass("prev")) {
            pagenum--;
            if (pagenum < 0) {
                pagenum = 0
            }
        } else {
            pagenum++;
            if (pagenum == pageall) {
                pagenum = pageall - 1
            }
        }
        $("#items .page").html(pagenum + 1 + "/" + pageall);
        pagenum == 0 ? $("#items .prev").hide() : $("#items .prev").show();
        pagenum == pageall - 1 ? $("#items .next").hide() : $("#items .next").show();
        $("#items .item").eq(pagenum).addClass("on").removeClass("off").siblings().removeClass("on").addClass("off");
    });

    $("#items .item h2").click(function () {
        var that = this;
        if ($(this).siblings().hasClass("on")) {
            $(this).siblings().removeClass("on");
        } else {
            $(this).siblings().addClass("on").parent().siblings().children().removeClass("on");
        }
        setTimeout(function () {
            var tops = $(that).offset().top;
            $("html,body").animate({
                scrollTop: tops
            }, 500);
        }, 50);
    });

    $("#code").keydown(function (event) {
        var value = $(this).val();
        if (event.which == 13) {
            if (value.length > 0) {
                login();
            }
        }
    });

    setCustomerService();
    setAllInOneModal();

    $(window).on('resize', function () {
        $('.modal:visible').each(reposition);
    });

    $('.modal').on('show.bs.modal', function () {
        reposition();
    });
});

function onekeyMonery() {
    openProgressBar();
    var jsonData = ajaxPost("/asp/oneKeyGameMoney.php");
    if (jsonData == null || jsonData == "" || typeof jsonData == "undefined" || jsonData == '""') {
        alert("一键回归成功!");

    } else {
        alert(jsonData);

    }
}


/* PT老虎机进入游戏 */
function game() {
    $("#items dl").hover(function () {
            $(this).find(".btn-name").stop(true, true).fadeIn("show");
            $(this).find("i").fadeIn("show");
        },
        function () {
            $(this).find(".btn-name").fadeOut(500);
            $(this).find("i").fadeOut(500);
        });
}

/* PT老虎机分類三角箭頭移動效果  */
function moveAnimation() {
    var $move = $(".ul-items .move, #content_bg ul .move, .items .move");
    var $item = $("#items .item");
    $move.siblings().click(function () {
        var $el = $(this);
        var leftPos = $el.position().left;
        var topPos = $el.position().top;
        var ind = $(this).index();

        $(this).addClass("on").siblings().removeClass("on");
        $item.eq(ind - 1).addClass("on").removeClass("off").siblings().removeClass("on").addClass("off");

        $move.stop(true, true).animate({
            left: leftPos,
            top: topPos
        }, "200", function () {
        });
    });
}


function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function ajaxPost(url, parm) {

    openProgressBar();
    var RESULT;

    $.ajax({
        url: url,
        type: "post",
        data: parm,
        cache: false,
        async: false,
        timeout: 3000,
        success: function (jsonData) {
            RESULT = jsonData;
            closeProgressBar();
            return RESULT;
        }
    });

    return RESULT;
}

/**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */

function reposition() {
    setTimeout(function () {
        var modal = $(document).find(".modal:visible"),
            dialog = modal.find('.modal-dialog');

        // modal.css('display', 'block');
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }, 200);
}

function setAllInOneModal() {

    var _targetStr = "#allInOneModal";
    var _target = $(_targetStr);
    var _targetContent = $(_target).find(".modal-content");

    // 讀取作業
    $(document).on('click', '.clickable', function (e) {
        e.preventDefault();
        var _this = $(this);
        var _remote = _this.data("load-remote");
        _targetContent.html("");
        _targetContent.load(_remote, function (response, status, xhr) {
            if (status == "success") {
                _target.modal("show");
                setTimeout(function () {
                    $('#allInOneModal .close').show();
                }, 500);
            }
        });
    });

    _target.on('show.bs.modal', function () {
        reposition();
    });

    _target.on('hide.bs.modal', function () {
        _targetContent.html("");
    });
}

function openScreen() {
    if ($("#screen").length == 0) {
        $("body").append('<div id="screen"></div>');
    }

    var explorer = window.navigator.userAgent;
    if (explorer.indexOf("MSIE") >= 0) {
        $("#screen").css({
            "width": $(document).width() - 21,
            "height": $(document).height()
        }).show();
    } else {
        $("#screen").css({
            "width": $(document).width() + 20,
            "height": $(document).height() + 20
        }).show();
    }
}

function closeScreen(obj) {
    $(obj).animate({"top": $(window).scrollTop() + $(window).height()}, 550, "easeInOutBack", function () {
        $(this).hide();
        $("#screen").hide();
        $("html,body").css({"overflow": "auto"});
    });
}

function progressbar(arr, delay) {
    var divL1 = $(".m_in .progress")[0];
    var divL2 = $(".m_out .progress")[0];
    var s1 = $(".m_in dt")[0];
    var s2 = $(".m_out dt")[0];
    var s3 = $(".mon dt span")[0];
    var load1 = load2 = load3 = 0;
    var n1 = arr[0];
    var n2 = arr[1];
    var n3 = arr[2];
    timer = setInterval(function () {
        load1++;
        divL1.style.width = load1 + "px";
        s1.innerHTML = Math.round(load1 * n1 / 100);
        if (load1 == 100) {
            clearInterval(timer);
        }
    }, 30);
    setTimeout(function () {
        timer2 = setInterval(function () {
            load2++;
            divL2.style.width = n1 > n2 ? Math.round(load2 * 0.8) + "px" : Math.round(load2 * 1.2) + "px";
            s2.innerHTML = Math.round(load2 * n2 / 100);
            if (load2 == 100) {
                clearInterval(timer2);
            }
        }, 30)
    }, delay);
    setTimeout(function () {
        timer3 = setInterval(function () {
            load3++;
            s3.innerHTML = Math.round(load3 * n3 / 100);
            if (load3 == 100) {
                clearInterval(timer3)
            }
        }, 30)
    }, delay * 2);
}

//关闭
$(document).on('click', '[data-toggle="close"]', function () {
    var t = $(this).attr('data-target');
    closeProgressBar();
    $("#screen").hide();
    $(t).hide();
});

//打开进度条
function openProgressBar() {
    var h = $(document).height();
    $(".showbox").css({"z-index": "99999"});
    $(".overlay").css({"height": h});
    $(".overlay").css({'display': 'block', 'opacity': '0.8'});
    $(".showbox").stop(true).animate({'margin-top': '300px', 'opacity': '1'}, 200);
}

//关闭进度条
function closeProgressBar() {
    $(".showbox").css({"z-index": "-99999"});
    $(".showbox").stop(true).animate({'margin-top': '250px', 'opacity': '0'}, 400);
    $(".overlay").css({'display': 'none', 'opacity': '0'});
}

// 让指定的DIV始终显示在屏幕正中间
function setDivCenter(divName) {
    var top = ($(window).height() - $(divName).height()) / 2;
    var left = ($(window).width() - $(divName).width()) / 2;
    var scrollTop = $(document).scrollTop();
    var scrollLeft = $(document).scrollLeft();
    $(divName).css({
        'position': 'absolute',
        'top': top + scrollTop,
        'left': left + scrollLeft
    }).show();
}

function setCustomerService() {

    /* 在线客服 */
    $(document).on("click", "#live_in", function (e) {
        e.preventDefault();
        openScreen();
        $("#livebox").css({
            "left": $(window).scrollLeft() + $(window).width() / 2 - 303,
            "top": $(window).height()
        }).show().animate({"top": $(window).scrollTop() + $(window).height() / 2 - 232}, 700, "easeOutQuint");
        $("html,body").css({"overflow": "hidden"});
    });

    /* 电话回播 */
    $(document).on("click", "#phone_in", function (e) {
        e.preventDefault();
        openScreen();
        $("#phone-box").css({
            "left": $(window).scrollLeft() + $(window).width() / 2 - 303,
            "top": $(window).height()
        }).show().animate({
            "top": $(window).scrollTop() + $(window).height() / 2 - 232
        }, 700, "easeOutQuint");
        $("html,body").css({"overflow": "hidden"});
    });

    /* 在线客服、电话回播弹窗关闭 */
    $(document).on("click", "#phone-box .closed, #livebox .closed", function (e) {
        e.preventDefault();
        var that = this;
        $(".pub-close-box").animate({
            "top": $(window).scrollTop() + $(window).height()
        }, 550, "easeInOutQuad", function () {
            $(that).parents(".pub-close-box").hide();
            $("#screen").fadeOut();
            $("html,body").css({"overflow": "auto"});
        });
    });

    /* setRightFloat */
    var sec = 300;

    $(".suspend").hover(function () {
        $(this).stop().css("z-index", "10000").animate({width: 232}, sec);
    }, function () {
        $(this).stop().animate({width: 63}, sec).css("z-index", "9000");
    });

    $(".suspend2").hover(function () {
        $(this).stop().animate({width: 232}, sec);
    }, function () {
        $(this).stop().animate({width: 63}, sec);
    });

    $(".dingyue").hover(function () {
        $(this).css("z-index", "9010");
    }, function () {
        $(this).css("z-index", "8999");
    });
}


function chidrenmenu() {
    var menu = $(".this-game");
    menu.click(function () {
        $(".ul-items .list1").toggle();
        $(this).parent().parent().addClass("hover");
        $(".ul-items .list1").addClass("listover").removeClass("listover");
    })
}


// 2016-08-30 23:59:59
function chkDateDiff(stopDate, nowDate) {
    var sDate1 = stopDate;
    var sDate2 = nowDate;
    var aDate, oDate1, oDate2, iDays, ihours, iminutes, iseconds;
    aDate = sDate1.split("-");
    oDate1 = new Date(aDate[0] + "-" + aDate[1] + "-" + aDate[2]);
    aDate = sDate2.split("-");
    oDate2 = new Date(aDate[0] + "-" + aDate[1] + "-" + aDate[2]);
    var timeSpan = {};
    var TotalMilliseconds = oDate1.getTime() - oDate2.getTime();
    timeSpan.Days = parseInt(TotalMilliseconds / 1000 / 60 / 60 / 24);
    timeSpan.TotalHours = parseInt(TotalMilliseconds / 1000 / 60 / 60);
    timeSpan.Hours = timeSpan.TotalHours % 24;
    timeSpan.TotalMinutes = parseInt(TotalMilliseconds / 1000 / 60);
    timeSpan.Minutes = timeSpan.TotalMinutes % 60;
    timeSpan.TotalSeconds = parseInt(TotalMilliseconds / 1000);
    timeSpan.Seconds = timeSpan.TotalSeconds % 60;
    timeSpan.TotalMilliseconds = TotalMilliseconds;
    timeSpan.Milliseconds = TotalMilliseconds % 1000;
    return timeSpan;
}

// 2016-08-30 23:59:59
function getNowDate() {
    var d = new Date(),
        vYear = d.getFullYear(),
        vMon = d.getMonth() + 1,
        vDay = d.getDate(),
        h = d.getHours(),
        m = d.getMinutes(),
        se = d.getSeconds(),
        s = vYear + "-" + (vMon < 10 ? "0" + vMon : vMon) + "-" + (vDay < 10 ? "0" + vDay : vDay) + " " + (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (se < 10 ? "0" + se : se);
    return s;
}

var COOKIE_ITEM = {
    "checkConfigSystem": "001",
    "queryPoints": "002",
    "queryFriendMoney": "003"
};

/**
 * get Cookie
 * @param key
 */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
 * set Cookie
 * @param {String} key
 * @param {String} value
 */
function setCookie(cname, cvalue) {

    if (typeof cvalue == "undefined" || cvalue == "请登录后再操作") {
        return false;
    }

    var d = new Date();
    d.setTime(d.getTime() + (1000 * 60 * 10)); // 1000毫秒 * 60秒 * 10 ＝ 10min
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function delCookie() {
    for (var key in COOKIE_ITEM) {
        setCookie(COOKIE_ITEM[key], "");
    }
}


/**
 * modal
 */
var Global = {};
Global.regExp = {intergar: "^\d+[.]?\d*$"};
Global.generateRandom = function () {
    return new Date().getTime()
};
Global.getDays = function (year, month) {
    var day = 0;
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        day = 31
    } else {
        if (month == 4 || month == 6 || month == 9 || month == 11) {
            day = 30
        } else {
            if (month == 2) {
                var flag = y % 4 == 0 && y % 100 != 0 || y % 400 == 0;
                day = flag ? 29 : 28
            }
        }
    }
    return day
};
Global.getCode = function (ele, url) {
    $(ele).attr("src", url + "?r=" + this.generateRandom())
};
Global.nav = function () {
    var $dropdown = $(".dropdown_wp");
    if ($dropdown) {
        $(document).on({
            "mouseenter": function () {
                var $target = $($(this).attr("data-target"));
                $target.siblings().removeClass("active");
                $target.addClass("active");
                showDropdown()
            }, "mouseleave": function (e) {
                var $target = $($(this).attr("data-target")), $related = $(e.relatedTarget);
                if ($related.parents(".dropdown_wp").length == 0) {
                    $target.removeClass("active");
                    hideDropdown()
                }
            }
        }, '[data-nav="toggle"]');
        $dropdown.on({
            "mouseenter": function () {
                showDropdown()
            }, "mouseleave": function () {
                hideDropdown()
            }
        })
    }

    function showDropdown() {
        $dropdown.stop().animate({"height": "203px"}, 300)
    }

    function hideDropdown() {
        $dropdown.stop().animate({"height": "0px"}, 300)
    }
};
+function ($) {
    function transitionEnd() {
        var el = document.createElement("bootstrap");
        var transEndEventNames = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {end: transEndEventNames[name]}
            }
        }
        return false
    }

    $.fn.emulateTransitionEnd = function (duration) {
        var called = false;
        var $el = this;
        $(this).one("bsTransitionEnd", function () {
            called = true
        });
        var callback = function () {
            if (!called) {
                $($el).trigger($.support.transition.end)
            }
        };
        setTimeout(callback, duration);
        return this
    };
    $(function () {
        $.support.transition = transitionEnd();
        if (!$.support.transition) {
            return
        }
        $.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function (e) {
                if ($(e.target).is(this)) {
                    return e.handleObj.handler.apply(this, arguments)
                }
            }
        }
    })
}(jQuery);
+function ($) {
    var Tab = function (element) {
        this.element = $(element)
    };
    Tab.VERSION = "3.3.2";
    Tab.TRANSITION_DURATION = 150;
    Tab.prototype.show = function () {
        var $this = this.element;
        var $ul = $this.closest("ul:not(.dropdown-menu)");
        var selector = $this.data("target");
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "")
        }
        if ($this.parent("li").hasClass("active")) {
            return
        }
        var $previous = $ul.find(".active:last a");
        var hideEvent = $.Event("hide.bs.tab", {relatedTarget: $this[0]});
        var showEvent = $.Event("show.bs.tab", {relatedTarget: $previous[0]});
        $previous.trigger(hideEvent);
        $this.trigger(showEvent);
        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
            return
        }
        var $target = $(selector);
        this.activate($this.closest("li"), $ul);
        this.activate($target, $target.parent(), function () {
            $previous.trigger({type: "hidden.bs.tab", relatedTarget: $this[0]});
            $this.trigger({type: "shown.bs.tab", relatedTarget: $previous[0]})
        })
    };
    Tab.prototype.activate = function (element, container, callback) {
        var $active = container.find("> .active");
        var transition = callback && $.support.transition && (($active.length && $active.hasClass("fade")) || !!container.find("> .fade").length);

        function next() {
            $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", false);
            element.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", true);
            if (transition) {
                element[0].offsetWidth;
                element.addClass("in")
            } else {
                element.removeClass("fade")
            }
            if (element.parent(".dropdown-menu").length) {
                element.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", true)
            }
            callback && callback()
        }

        $active.length && transition ? $active.one("bsTransitionEnd", next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();
        $active.removeClass("in")
    };

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data("bs.tab");
            if (!data) {
                $this.data("bs.tab", (data = new Tab(this)))
            }
            if (typeof option == "string") {
                data[option]()
            }
        })
    }

    var old = $.fn.tab;
    $.fn.tab = Plugin;
    $.fn.tab.Constructor = Tab;
    $.fn.tab.noConflict = function () {
        $.fn.tab = old;
        return this
    };
    var clickHandler = function (e) {
        e.preventDefault();
        Plugin.call($(this), "show")
    };
    $(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', clickHandler).on("click.bs.tab.data-api", '[data-toggle="pill"]', clickHandler)
}(jQuery);

+function ($) {
    var Modal = function (element, options) {
        this.options = options;
        this.$body = $(document.body);
        this.$element = $(element);
        this.$dialog = this.$element.find(".modal-dialog");
        this.$backdrop = null;
        this.isShown = null;
        this.originalBodyPad = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = false;
        if (this.options.remote) {
            this.$element.find(".modal-content").load(this.options.remote, $.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        }
    };
    Modal.VERSION = "3.3.5";
    Modal.TRANSITION_DURATION = 300;
    Modal.BACKDROP_TRANSITION_DURATION = 150;
    Modal.DEFAULTS = {backdrop: true, keyboard: true, show: true};
    Modal.prototype.toggle = function (_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget)
    };
    Modal.prototype.show = function (_relatedTarget) {
        var that = this;
        var e = $.Event("show.bs.modal", {relatedTarget: _relatedTarget});
        this.$element.trigger(e);
        if (this.isShown || e.isDefaultPrevented()) {
            return
        }
        this.isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        this.$body.addClass("modal-open");
        this.escape();
        this.resize();
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this));
        this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            that.$element.one("mouseup.dismiss.bs.modal", function (e) {
                if ($(e.target).is(that.$element)) {
                    that.ignoreBackdropClick = true
                }
            })
        });
        this.backdrop(function () {
            var transition = $.support.transition && that.$element.hasClass("fade");
            if (!that.$element.parent().length) {
                that.$element.appendTo(that.$body)
            }
            that.$element.show().scrollTop(0);
            that.adjustDialog();
            if (transition) {
                that.$element[0].offsetWidth
            }
            that.$element.addClass("in");
            that.enforceFocus();
            var e = $.Event("shown.bs.modal", {relatedTarget: _relatedTarget});
            transition ? that.$dialog.one("bsTransitionEnd", function () {
                that.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger("focus").trigger(e)
        })
    };
    Modal.prototype.hide = function (e) {
        if (e) {
            e.preventDefault()
        }
        e = $.Event("hide.bs.modal");
        this.$element.trigger(e);
        if (!this.isShown || e.isDefaultPrevented()) {
            return
        }
        this.isShown = false;
        this.escape();
        this.resize();
        $(document).off("focusin.bs.modal");
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");
        this.$dialog.off("mousedown.dismiss.bs.modal");
        $.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal()
    };
    Modal.prototype.enforceFocus = function () {
        $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function (e) {
            if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                this.$element.trigger("focus")
            }
        }, this))
    };
    Modal.prototype.escape = function () {
        if (this.isShown && this.options.keyboard) {
            this.$element.on("keydown.dismiss.bs.modal", $.proxy(function (e) {
                e.which == 27 && this.hide()
            }, this))
        } else {
            if (!this.isShown) {
                this.$element.off("keydown.dismiss.bs.modal")
            }
        }
    };
    Modal.prototype.resize = function () {
        if (this.isShown) {
            $(window).on("resize.bs.modal", $.proxy(this.handleUpdate, this))
        } else {
            $(window).off("resize.bs.modal")
        }
    };
    Modal.prototype.hideModal = function () {
        var that = this;
        this.$element.hide();
        this.backdrop(function () {
            that.$body.removeClass("modal-open");
            that.resetAdjustments();
            that.resetScrollbar();
            that.$element.trigger("hidden.bs.modal")
        })
    };
    Modal.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    Modal.prototype.backdrop = function (callback) {
        var that = this;
        var animate = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate;
            this.$backdrop = $(document.createElement("div")).addClass("modal-backdrop " + animate).appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", $.proxy(function (e) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = false;
                    return
                }
                if (e.target !== e.currentTarget) {
                    return
                }
                this.options.backdrop == "static" ? this.$element[0].focus() : this.hide()
            }, this));
            if (doAnimate) {
                this.$backdrop[0].offsetWidth
            }
            this.$backdrop.addClass("in");
            if (!callback) {
                return
            }
            doAnimate ? this.$backdrop.one("bsTransitionEnd", callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback()
        } else {
            if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var callbackRemove = function () {
                    that.removeBackdrop();
                    callback && callback()
                };
                $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove()
            } else {
                if (callback) {
                    callback()
                }
            }
        }
    };
    Modal.prototype.handleUpdate = function () {
        this.adjustDialog()
    };
    Modal.prototype.adjustDialog = function () {
        var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ""
        })
    };
    Modal.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    };
    Modal.prototype.checkScrollbar = function () {
        var fullWindowWidth = window.innerWidth;
        if (!fullWindowWidth) {
            var documentElementRect = document.documentElement.getBoundingClientRect();
            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
        this.scrollbarWidth = this.measureScrollbar()
    };
    Modal.prototype.setScrollbar = function () {
        var bodyPad = parseInt((this.$body.css("padding-right") || 0), 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        if (this.bodyIsOverflowing) {
            this.$body.css("padding-right", bodyPad + this.scrollbarWidth)
        }
    };
    Modal.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    };
    Modal.prototype.measureScrollbar = function () {
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "modal-scrollbar-measure";
        this.$body.append(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.$body[0].removeChild(scrollDiv);
        return scrollbarWidth
    };

    function Plugin(option, _relatedTarget) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data("bs.modal");
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == "object" && option);
            if (!data) {
                $this.data("bs.modal", (data = new Modal(this, options)))
            }
            if (typeof option == "string") {
                data[option](_relatedTarget)
            } else {
                if (options.show) {
                    data.show(_relatedTarget)
                }
            }
        })
    }

    var old = $.fn.modal;
    $.fn.modal = Plugin;
    $.fn.modal.Constructor = Modal;
    $.fn.modal.noConflict = function () {
        $.fn.modal = old;
        return this
    };
    $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
        var $this = $(this);
        var href = $this.attr("href");
        var $target = $($this.attr("data-target") || (href && href.replace(/.*(?=#[^\s]+$)/, "")));
        var option = $target.data("bs.modal") ? "toggle" : $.extend({remote: !/#/.test(href) && href}, $target.data(), $this.data());
        if ($this.is("a")) {
            e.preventDefault()
        }
        $target.one("show.bs.modal", function (showEvent) {
            if (showEvent.isDefaultPrevented()) {
                return
            }
            $target.one("hidden.bs.modal", function () {
                $this.is(":visible") && $this.trigger("focus")
            })
        });
        Plugin.call($target, option, this)
    })
}(jQuery);
+(function ($) {
    var SelectDate = function (ele, options) {
        this.$ele = $(ele);
        this.options = $.extend({}, SelectDate.DEFAULTS, this.$ele.data(), options);
        this.$year = this.$ele.find('select[data-date-type="year"]');
        this.$month = this.$ele.find('select[data-date-type="month"]');
        this.$day = this.$ele.find('select[data-date-type="day"]');
        this.currnetYear = new Date().getFullYear();
        this.init()
    };
    SelectDate.DEFAULTS = {startYear: 1950};
    SelectDate.prototype.init = function () {
        this.$year.html(this.addOption(this.currnetYear, this.options.startYear));
        this.$month.html(this.addOption(1, 12));
        this.updateDay();
        $(this.$year).on("change", $.proxy(function () {
            this.updateDay()
        }, this));
        $(this.$month).on("change", $.proxy(function () {
            this.updateDay()
        }, this))
    };
    SelectDate.prototype.addOption = function (start, end) {
        var html = "";
        if (start < end) {
            for (var i = start; i <= end; i++) {
                html += '<option value="' + i + '">' + i + "</option>"
            }
        } else {
            for (var j = start; j >= end; j--) {
                html += '<option value="' + j + '">' + j + "</option>"
            }
        }
        return html
    };
    SelectDate.prototype.updateDay = function () {
        var days = this.getDays(this.$year.val(), this.$month.val());
        this.$day.html(this.addOption(1, days))
    };
    SelectDate.prototype.getDays = function (year, month) {
        var day = 0;
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            day = 31
        } else {
            if (month == 4 || month == 6 || month == 9 || month == 11) {
                day = 30
            } else {
                if (month == 2) {
                    var flag = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
                    day = flag ? 29 : 28
                }
            }
        }
        return day
    };
    $.fn.selectDate = function (option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data("ui.selectDate");
            var options = typeof option == "object" && option;
            if (!data) {
                $this.data("ui.selectDate", (data = new SelectDate(this, options || {})))
            }
        })
    };
    $(function () {
        $(document).find("[data-date-select]").selectDate()
    })
}(jQuery));
$(function () {
    var $doc = $(document), $win = $(window);
    $doc.on("click.global", '[data-toggle="refreshcode"]', function () {
        var $this = $(this);
        Global.getCode($this, $this.attr("src"))
    });
    $doc.on("keyup", 'input[data-rule-digits="true"]', function () {
        this.value = this.value.replace(/\D|^0/g, "")
    });
    $doc.on("keyup", 'input[data-rule-num="true"]', function () {
        if (!/^\d+[.]?\d*$/.test(this.value)) {
            this.value = /^\d+[.]?\d*/.exec(this.value)
        }
        return false
    })
});

/**
 * SuperSlide v2.1 弹窗, Slide
 */
(function (a) {
    a.fn.slide = function (b) {
        return a.fn.slide.defaults = {
            type: "slide",
            effect: "fade",
            autoPlay: !1,
            delayTime: 500,
            interTime: 2500,
            triggerTime: 150,
            defaultIndex: 0,
            titCell: ".hd li",
            mainCell: ".bd",
            targetCell: null,
            trigger: "mouseover",
            scroll: 1,
            vis: 1,
            titOnClassName: "on",
            autoPage: !1,
            prevCell: ".prev",
            nextCell: ".next",
            pageStateCell: ".pageState",
            opp: !1,
            pnLoop: !0,
            easing: "swing",
            startFun: null,
            endFun: null,
            switchLoad: null,
            playStateCell: ".playState",
            mouseOverStop: !0,
            defaultPlay: !0,
            returnDefault: !1
        }, this.each(function () {
            var c = a.extend({}, a.fn.slide.defaults, b), d = a(this), e = c.effect, f = a(c.prevCell, d),
                g = a(c.nextCell, d), h = a(c.pageStateCell, d), i = a(c.playStateCell, d), j = a(c.titCell, d),
                k = j.size(), l = a(c.mainCell, d), m = l.children().size(), n = c.switchLoad, o = a(c.targetCell, d),
                p = parseInt(c.defaultIndex), q = parseInt(c.delayTime), r = parseInt(c.interTime);
            parseInt(c.triggerTime);
            var P, t = parseInt(c.scroll), u = parseInt(c.vis), v = "false" == c.autoPlay || 0 == c.autoPlay ? !1 : !0,
                w = "false" == c.opp || 0 == c.opp ? !1 : !0, x = "false" == c.autoPage || 0 == c.autoPage ? !1 : !0,
                y = "false" == c.pnLoop || 0 == c.pnLoop ? !1 : !0,
                z = "false" == c.mouseOverStop || 0 == c.mouseOverStop ? !1 : !0,
                A = "false" == c.defaultPlay || 0 == c.defaultPlay ? !1 : !0,
                B = "false" == c.returnDefault || 0 == c.returnDefault ? !1 : !0, C = 0, D = 0, E = 0, F = 0,
                G = c.easing, H = null, I = null, J = null, K = c.titOnClassName, L = j.index(d.find("." + K)),
                M = p = defaultIndex = -1 == L ? p : L, N = p, O = m >= u ? 0 != m % t ? m % t : t : 0,
                Q = "leftMarquee" == e || "topMarquee" == e ? !0 : !1, R = function () {
                    a.isFunction(c.startFun) && c.startFun(p, k, d, a(c.titCell, d), l, o, f, g)
                }, S = function () {
                    a.isFunction(c.endFun) && c.endFun(p, k, d, a(c.titCell, d), l, o, f, g)
                }, T = function () {
                    j.removeClass(K), A && j.eq(defaultIndex).addClass(K)
                };
            if ("menu" == c.type) return A && j.removeClass(K).eq(p).addClass(K), j.hover(function () {
                P = a(this).find(c.targetCell);
                var b = j.index(a(this));
                I = setTimeout(function () {
                    switch (p = b, j.removeClass(K).eq(p).addClass(K), R(), e) {
                        case"fade":
                            P.stop(!0, !0).animate({opacity: "show"}, q, G, S);
                            break;
                        case"slideDown":
                            P.stop(!0, !0).animate({height: "show"}, q, G, S)
                    }
                }, c.triggerTime)
            }, function () {
                switch (clearTimeout(I), e) {
                    case"fade":
                        P.animate({opacity: "hide"}, q, G);
                        break;
                    case"slideDown":
                        P.animate({height: "hide"}, q, G)
                }
            }), B && d.hover(function () {
                clearTimeout(J)
            }, function () {
                J = setTimeout(T, q)
            }), void 0;
            if (0 == k && (k = m), Q && (k = 2), x) {
                if (m >= u) if ("leftLoop" == e || "topLoop" == e) k = 0 != m % t ? (0 ^ m / t) + 1 : m / t; else {
                    var U = m - u;
                    k = 1 + parseInt(0 != U % t ? U / t + 1 : U / t), 0 >= k && (k = 1)
                } else k = 1;
                j.html("");
                var V = "";
                if (1 == c.autoPage || "true" == c.autoPage) for (var W = 0; k > W; W++) V += "<li>" + (W + 1) + "</li>"; else for (var W = 0; k > W; W++) V += c.autoPage.replace("$", W + 1);
                j.html(V);
                var j = j.children()
            }
            if (m >= u) {
                l.children().each(function () {
                    a(this).width() > E && (E = a(this).width(), D = a(this).outerWidth(!0)), a(this).height() > F && (F = a(this).height(), C = a(this).outerHeight(!0))
                });
                var X = l.children(), Y = function () {
                    for (var a = 0; u > a; a++) X.eq(a).clone().addClass("clone").appendTo(l);
                    for (var a = 0; O > a; a++) X.eq(m - a - 1).clone().addClass("clone").prependTo(l)
                };
                switch (e) {
                    case"fold":
                        l.css({position: "relative", width: D, height: C}).children().css({
                            position: "absolute",
                            width: E,
                            left: 0,
                            top: 0,
                            display: "none"
                        });
                        break;
                    case"top":
                        l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + u * C + 'px"></div>').css({
                            top: -(p * t) * C,
                            position: "relative",
                            padding: "0",
                            margin: "0"
                        }).children().css({height: F});
                        break;
                    case"left":
                        l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + u * D + 'px"></div>').css({
                            width: m * D,
                            left: -(p * t) * D,
                            position: "relative",
                            overflow: "hidden",
                            padding: "0",
                            margin: "0"
                        }).children().css({"float": "left", width: E});
                        break;
                    case"leftLoop":
                    case"leftMarquee":
                        Y(), l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + u * D + 'px"></div>').css({
                            width: (m + u + O) * D,
                            position: "relative",
                            overflow: "hidden",
                            padding: "0",
                            margin: "0",
                            left: -(O + p * t) * D
                        }).children().css({"float": "left", width: E});
                        break;
                    case"topLoop":
                    case"topMarquee":
                        Y(), l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + u * C + 'px"></div>').css({
                            height: (m + u + O) * C,
                            position: "relative",
                            padding: "0",
                            margin: "0",
                            top: -(O + p * t) * C
                        }).children().css({height: F})
                }
            }
            var Z = function (a) {
                var b = a * t;
                return a == k ? b = m : -1 == a && 0 != m % t && (b = -m % t), b
            }, $ = function (b) {
                var c = function (c) {
                    for (var d = c; u + c > d; d++) b.eq(d).find("img[" + n + "]").each(function () {
                        var b = a(this);
                        if (b.attr("src", b.attr(n)).removeAttr(n), l.find(".clone")[0]) for (var c = l.children(), d = 0; c.size() > d; d++) c.eq(d).find("img[" + n + "]").each(function () {
                            a(this).attr(n) == b.attr("src") && a(this).attr("src", a(this).attr(n)).removeAttr(n)
                        })
                    })
                };
                switch (e) {
                    case"fade":
                    case"fold":
                    case"top":
                    case"left":
                    case"slideDown":
                        c(p * t);
                        break;
                    case"leftLoop":
                    case"topLoop":
                        c(O + Z(N));
                        break;
                    case"leftMarquee":
                    case"topMarquee":
                        var d = "leftMarquee" == e ? l.css("left").replace("px", "") : l.css("top").replace("px", ""),
                            f = "leftMarquee" == e ? D : C, g = O;
                        if (0 != d % f) {
                            var h = Math.abs(0 ^ d / f);
                            g = 1 == p ? O + h : O + h - 1
                        }
                        c(g)
                }
            }, _ = function (a) {
                if (!A || M != p || a || Q) {
                    if (Q ? p >= 1 ? p = 1 : 0 >= p && (p = 0) : (N = p, p >= k ? p = 0 : 0 > p && (p = k - 1)), R(), null != n && $(l.children()), o[0] && (P = o.eq(p), null != n && $(o), "slideDown" == e ? (o.not(P).stop(!0, !0).slideUp(q), P.slideDown(q, G, function () {
                            l[0] || S()
                        })) : (o.not(P).stop(!0, !0).hide(), P.animate({opacity: "show"}, q, function () {
                            l[0] || S()
                        }))), m >= u) switch (e) {
                        case"fade":
                            l.children().stop(!0, !0).eq(p).animate({opacity: "show"}, q, G, function () {
                                S()
                            }).siblings().hide();
                            break;
                        case"fold":
                            l.children().stop(!0, !0).eq(p).animate({opacity: "show"}, q, G, function () {
                                S()
                            }).siblings().animate({opacity: "hide"}, q, G);
                            break;
                        case"top":
                            l.stop(!0, !1).animate({top: -p * t * C}, q, G, function () {
                                S()
                            });
                            break;
                        case"left":
                            l.stop(!0, !1).animate({left: -p * t * D}, q, G, function () {
                                S()
                            });
                            break;
                        case"leftLoop":
                            var b = N;
                            l.stop(!0, !0).animate({left: -(Z(N) + O) * D}, q, G, function () {
                                -1 >= b ? l.css("left", -(O + (k - 1) * t) * D) : b >= k && l.css("left", -O * D), S()
                            });
                            break;
                        case"topLoop":
                            var b = N;
                            l.stop(!0, !0).animate({top: -(Z(N) + O) * C}, q, G, function () {
                                -1 >= b ? l.css("top", -(O + (k - 1) * t) * C) : b >= k && l.css("top", -O * C), S()
                            });
                            break;
                        case"leftMarquee":
                            var c = l.css("left").replace("px", "");
                            0 == p ? l.animate({left: ++c}, 0, function () {
                                l.css("left").replace("px", "") >= 0 && l.css("left", -m * D)
                            }) : l.animate({left: --c}, 0, function () {
                                -(m + O) * D >= l.css("left").replace("px", "") && l.css("left", -O * D)
                            });
                            break;
                        case"topMarquee":
                            var d = l.css("top").replace("px", "");
                            0 == p ? l.animate({top: ++d}, 0, function () {
                                l.css("top").replace("px", "") >= 0 && l.css("top", -m * C)
                            }) : l.animate({top: --d}, 0, function () {
                                -(m + O) * C >= l.css("top").replace("px", "") && l.css("top", -O * C)
                            })
                    }
                    j.removeClass(K).eq(p).addClass(K), M = p, y || (g.removeClass("nextStop"), f.removeClass("prevStop"), 0 == p && f.addClass("prevStop"), p == k - 1 && g.addClass("nextStop")), h.html("<span>" + (p + 1) + "</span>/" + k)
                }
            };
            A && _(!0), B && d.hover(function () {
                clearTimeout(J)
            }, function () {
                J = setTimeout(function () {
                    p = defaultIndex, A ? _() : "slideDown" == e ? P.slideUp(q, T) : P.animate({opacity: "hide"}, q, T), M = p
                }, 300)
            });
            var ab = function (a) {
                H = setInterval(function () {
                    w ? p-- : p++, _()
                }, a ? a : r)
            }, bb = function (a) {
                H = setInterval(_, a ? a : r)
            }, cb = function () {
                z || (clearInterval(H), ab())
            }, db = function () {
                (y || p != k - 1) && (p++, _(), Q || cb())
            }, eb = function () {
                (y || 0 != p) && (p--, _(), Q || cb())
            }, fb = function () {
                clearInterval(H), Q ? bb() : ab(), i.removeClass("pauseState")
            }, gb = function () {
                clearInterval(H), i.addClass("pauseState")
            };
            if (v ? Q ? (w ? p-- : p++, bb(), z && l.hover(gb, fb)) : (ab(), z && d.hover(gb, fb)) : (Q && (w ? p-- : p++), i.addClass("pauseState")), i.click(function () {
                    i.hasClass("pauseState") ? fb() : gb()
                }), "mouseover" == c.trigger ? j.hover(function () {
                    var a = j.index(this);
                    I = setTimeout(function () {
                        p = a, _(), cb()
                    }, c.triggerTime)
                }, function () {
                    clearTimeout(I)
                }) : j.click(function () {
                    p = j.index(this), _(), cb()
                }), Q) {
                if (g.mousedown(db), f.mousedown(eb), y) {
                    var hb, ib = function () {
                        hb = setTimeout(function () {
                            clearInterval(H), bb(0 ^ r / 10)
                        }, 150)
                    }, jb = function () {
                        clearTimeout(hb), clearInterval(H), bb()
                    };
                    g.mousedown(ib), g.mouseup(jb), f.mousedown(ib), f.mouseup(jb)
                }
                "mouseover" == c.trigger && (g.hover(db, function () {
                }), f.hover(eb, function () {
                }))
            } else g.click(db), f.click(eb)
        })
    }
})(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    },
    easeInQuad: function (a, b, c, d, e) {
        return d * (b /= e) * b + c
    },
    easeOutQuad: function (a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c
    },
    easeInOutQuad: function (a, b, c, d, e) {
        return 1 > (b /= e / 2) ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function (a, b, c, d, e) {
        return d * (b /= e) * b * b + c
    },
    easeOutCubic: function (a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function (a, b, c, d, e) {
        return 1 > (b /= e / 2) ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function (a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
    },
    easeOutQuart: function (a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function (a, b, c, d, e) {
        return 1 > (b /= e / 2) ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function (a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
    },
    easeOutQuint: function (a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function (a, b, c, d, e) {
        return 1 > (b /= e / 2) ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function (a, b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function (a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
    },
    easeInOutSine: function (a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    },
    easeInExpo: function (a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExpo: function (a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    },
    easeInOutExpo: function (a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : 1 > (b /= e / 2) ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    },
    easeInCirc: function (a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    },
    easeOutCirc: function (a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function (a, b, c, d, e) {
        return 1 > (b /= e / 2) ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function (a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), Math.abs(d) > h) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c
    },
    easeOutElastic: function (a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), Math.abs(d) > h) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
    },
    easeInOutElastic: function (a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b) return c;
        if (2 == (b /= e / 2)) return c + d;
        if (g || (g = e * .3 * 1.5), Math.abs(d) > h) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c : .5 * h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
    },
    easeInBack: function (a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
    },
    easeOutBack: function (a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    },
    easeInOutBack: function (a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), 1 > (b /= e / 2) ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
    },
    easeInBounce: function (a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    },
    easeOutBounce: function (a, b, c, d, e) {
        return 1 / 2.75 > (b /= e) ? d * 7.5625 * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    },
    easeInOutBounce: function (a, b, c, d, e) {
        return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
    }
});