$(function () {
    var el = {
        dzp_img: $("#dzp_img"),
        lotteryBtn_group: $(".lotteryBtn_group"),
        winning_check: $(".winning_check"),
        query_content: {},
        lottery_winners_data: $("#lottery_winners_data>tbody")
    },
        data = {
            username: "",
            username_check: "",
            username_holomorphy: /^\S{2,25}$/,
            sHtml: '<div style="text-align:right;"><br/>会员帐号：<form onsubmit="return false" id="get_chance"><input id="login-na" type="text" autofocus /></form>',
            lHtml: '<div >会员帐号：<input id="querycode" type="text" value="" />'
                + '<br/><br/><div style="height:340px;"><table class="myprizelist"><tr class="list_head"><td style="width:170px;">奖品名称</td><td style="width:140px;">中奖时间</td></tr><tbody id="query_content"></tbody></table></div><div class="quotes"></div></div>',
            chance: 0,
            time: 1,
            route_control: false,
            money: 0,
            today_data: 0,
            serverTime: ""
        },
        methods = {
            rotate: function (deg) {
                var deg = String(deg)
                el.dzp_img.removeClass()
                setTimeout(function () {
                    el.dzp_img.addClass("lottery_rotate_" + deg)

                }, 10)
            },
            get_chance: function (call_back) {
                $.ajax({
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Authorization: `${localStorage.token}`
                    },
                    url: '/api/v1/preferential/caipiaoZhuanpan/chancheh',
                    dataType: 'json',
                    cache: false,
                    type: 'POST',
                    data: { username: data.username },
                    success: function (res) {
                        call_back(res)
                    },
                    error: function (data) {
                        methods.msgBox("提示", '网络错误,请稍后再抽奖')
                    }
                })
            },
            get_lottery: function (call_back) {
                $.ajax({
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Authorization: `${localStorage.token}`
                    },
                    url: '/api/v1/preferential/caipiaoZhuanpan/theLottery',
                    dataType: 'json',
                    cache: false,
                    type: 'POST',
                    data: {
                        username: data.username
                    },
                    success: function (res) {
                        call_back(res)
                    },
                    error: function (data) {
                        methods.msgBox("提示", '网络错误,请稍后再抽奖')
                    }
                })
            },
            get_winning_check: function (call_back) {
                $.ajax({
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Authorization: `${localStorage.token}`
                    },
                    url: '/api/v1/preferential/caipiaoZhuanpan/winningList',
                    dataType: 'json',
                    cache: false,
                    type: 'POST',
                    data: {
                        username: data.username_check
                    },
                    success: function (res) {
                        call_back(res)
                    },
                    error: function (data) {
                        methods.msgBox("提示", '网络错误,请稍后再抽奖')
                    }
                })
            },
            username_Box: function () {
                art.dialog({
                    id: 'xymf_box_code',
                    title: '请先输入会员帐号',
                    content: data.sHtml,
                    lock: true,
                    ok: function () {
                        methods.sumit()
                    },
                    okValue: '确定',
                    cancel: function () { }
                });
            },
            msgBox: function (_title, _content, call_back) {
                art.dialog({
                    id: 'xymf_box',
                    title: _title,
                    width: 300,
                    height: 120,
                    content: _content,
                    ok: function () {
                        if (call_back) {
                            call_back()
                        }
                    },
                    close: function () {
                    },
                    okVal: '确定',
                    lock: true
                });
            },
            sumit: function () {
                var value = $("#login-na").val()
                if (data.username_holomorphy.test(value)) {
                    data.username = value
                    methods.get_chance(function (res) {
                        if (res.code == 200) {
                            data.route_control = true;
                            data.chance = res.data.chance
                            methods.msgBox("提示", "恭喜您获得" + res.data.chance + "次抽奖机会<br>点击转盘开始抽奖吧")
                        }
                        else {
                            methods.msgBox("提示", res.msg)
                        }
                    })
                }
                else {
                    methods.msgBox("提示", "您的帐号不符合规范请重新输入！", function () {
                        methods.username_Box()
                    })
                }
            },
            querylist: function () {
                art.dialog({
                    id: 'xymf_box_reg',
                    title: '输入会员帐号 查询',
                    width: 370,
                    top: 60,
                    content: data.lHtml,
                    lock: true,
                    ok: function () {
                        data.username_check = $("#querycode").val();
                        if (data.username_holomorphy.test(data.username_check)) {
                            methods.get_winning_check(function (res) {
                                if (res.code == 200) {
                                    el.query_content.html("")
                                    $.each(res.data, function (i, el_b) {
                                        el.query_content.append("<tr><td>资金筹码" + res.data[i].money + "元</td><td>" + methods.time_stamp_change(res.data[i].time) + "</td></tr>")
                                    })
                                }
                                else {
                                    methods.msgBox("提示", res.msg)
                                }
                            })
                            return false;
                        }
                        else {
                            methods.msgBox("提示", "您的帐号不符合规范请重新输入！", function () {
                                methods.querylist()
                            })
                        }
                    },
                    okValue: '查询',
                    cancel: function () { }
                });
                el.query_content = $("#query_content")
            },
            time_stamp_change: function (time_stamp) {
                return new Date(parseInt(time_stamp * 1000)).toLocaleString().replace(/:\d{1,3}$/, ' ')
            },
            time_stamp_change_get_date: function (time_stamp) {
                return new Date(parseInt(time_stamp * 1000)).toLocaleString().slice(0, 10)
            },
            get_data: function () {
                var l = [7, 1, 2, 3, 4, 5, 6];
                var d = new Date().getDay();
                data.today_data = l[d]
                return l[d]
            },

            append_winning_list: function () {

                methods.get_serverTime(function (res) {

                    var time = methods.time_stamp_change_get_date(res.serverTime)

                    $.each(winning_list[data.today_data], function (i, item) {
                        el.lottery_winners_data.append("  <tr>\n" +
                            "<td height=\"25\" style=\"width:95px;\">恭喜 " + item.name + "</td>\n" +
                            "<td height=\"25\" style=\"width:130px;\">" + item.money + "元现金筹码</td>\n" +
                            "<td height=\"25\" align=\"right\">" + time + "</td>\n" +
                            "</tr>")
                    })
                }, function () {
                    var d = new Date();
                    var time = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();

                    $.each(winning_list[data.today_data], function (i, item) {
                        el.lottery_winners_data.append("  <tr>\n" +
                            "<td height=\"25\" style=\"width:95px;\">恭喜 " + item.name + "</td>\n" +
                            "<td height=\"25\" style=\"width:130px;\">" + item.money + "元现金筹码</td>\n" +
                            "<td height=\"25\" align=\"right\">" + time + "</td>\n" +
                            "</tr>")
                    })

                })
            },
            get_serverTime: function (callback, callback_error) {
                $.ajax({
                    url: 'api/chance.php',
                    dataType: 'json',
                    cache: false,
                    type: 'POST',
                    data: {
                        username: ""
                    },
                    success: function (res) {
                        callback(res)
                    },
                    error: function (data) {
                        callback_error()
                    }
                })
            }
        },
        init = function () {

            methods.append_winning_list()

            el.lotteryBtn_group.click(function () {
                if (data.route_control) {
                    if (data.chance > 0) {
                        methods.get_lottery(function (res) {
                            if (res.code == 200) {
                                el.lotteryBtn_group.attr("disabled", "true")
                                data.money = res.data.lottery
                                methods.rotate(data.money)
                                data.chance = data.chance - 1
                                setTimeout(function () {
                                    methods.msgBox("提示", "恭喜你获得" + data.money + "元")
                                    el.lotteryBtn_group.removeAttr("disabled")
                                }, 5500)
                            }
                            else {
                                methods.msgBox("提示", res.msg)
                            }
                        })
                    }
                    else {
                        methods.msgBox("提示", "您的抽奖次数已经用完")
                    }
                }
                else {
                    methods.username_Box()
                }
            })
            el.winning_check.click(function () {
                methods.querylist()
            })



        }
    init()
})
