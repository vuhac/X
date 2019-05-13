var isClick = false;
var resultPid = 0;
var resultMsg = "";
var isChai = false;
var Timerr;
var bCode = "";
var user11 = localStorage.getItem('Public_User') ? localStorage.getItem('Public_User') : 'v1';
var url = window.location.origin+'/api/' + user11 + '/';
var token = localStorage.getItem('token');

$(function () {
    /*获奖名单*/
    $.ajax({
        type: 'get',
        url: url+"preferential/grabRedPacket2019Test",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: token
        },
        dataType: 'json',
        data: {
            type: "winnersList"
        },
        success: function (data) {
            if (data.code !== 200) {
                showMsg(data.message);
                return false;
            }
            var content = '';
            var data = data.data.data;
            for (var i = 0; i < data.length; i++) {
                content += `<li>
                              <span class="span1">恭喜会员</span> <span class="span2">${data[i].name}</span> <span class="span3">抢到</span><span class="span4">${data[i].money}</span> <span class="span5">元红包</span>
                            </li>`;
            }
            $('#winnerList1').html(content);

            var speed = 30;
            var tab = document.getElementById("winnerList");
            var tab1 = document.getElementById("winnerList1");
            var tab2 = document.getElementById("winnerList2");
            tab2.innerHTML = tab1.innerHTML;

            function Marquee() {
                if (tab2.offsetHeight - tab.scrollTop <= 0) {
                    tab.scrollTop -= tab1.offsetHeight
                }
                else {
                    tab.scrollTop++;
                }
            }

            var MyMar = setInterval(Marquee, speed);
            tab.onmouseover = function () {
                clearInterval(MyMar)
            };
            tab.onmouseout = function () {
                MyMar = setInterval(Marquee, speed)
            };

        }
    });

})

function ajaxLottery() {
    $.ajax({
        url: url+"preferential/grabRedPacket2019Test",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: token
        },
        data: {type: 'time'},
        dataType: 'json',
        cache: false,
        type: 'get',
        success: function (res) {
            if (res.code !== 200) {
                showMsg(res.message);
                return false;
            }
            var obj = res.data;
            switch (obj.ecode) {
              case 301:
                // 活动未开始
                  clearInterval(Timerr);
                  var c_time = obj.c_time.split(/[- : \/]/);
                  NowTimeOld = new Date(c_time[0], c_time[1] - 1, c_time[2], c_time[3], c_time[4], c_time[5]);
                  var start_time = obj.start_time.split(/[- : \/]/);
                  startDateTime = new Date(start_time[0], start_time[1] - 1, start_time[2], start_time[3], start_time[4], start_time[5]);
                  zero = setInterval(getROne, 1000);
                  window.clearInterval(timerhb);

                  $("#hb_for").hide();
                  $("#hb_next").hide();
                  $("#hb_end").hide();
                $('#hb_start').show();
                  $("#timetxt").show();

                  return false;
                break;
                case 800:
                    // 活动结束
                    $("#hb_start").hide();
                    $("#hb_for").hide();
                    $("#hb_next").hide();
                    $('#hb_end').show();
                    $("#timetxt").hide();
                    window.clearInterval(timerhb);

                    return false;
                    break;
                case 700:
                    //今天结束
                    clearInterval(Timerr);
                    $("#hb_start").hide();
                    $("#hb_for").hide();
                    $("#hb_next").hide();
                    $("#hb_end").hide();
                    $("#timetxt").hide();
                    $("#today_end").show();
                    window.clearInterval(timerhb);
                    break;
                case 300:
                    //下一波倒计时
                    clearInterval(Timerr);

                    var c_time = obj.c_time.split(/[- : \/]/);
                    NowTimeOld = new Date(c_time[0], c_time[1] - 1, c_time[2], c_time[3], c_time[4], c_time[5]);

                    var start_time = obj.start_time.split(/[- : \/]/);
                    startDateTime = new Date(start_time[0], start_time[1] - 1, start_time[2], start_time[3], start_time[4], start_time[5]);

                    one = setInterval(getRTimeOne, 1000);
                    window.clearInterval(timerhb);
                    $("#hb_start").hide();
                    $("#hb_for").hide();
                    $("#hb_end").hide();
                    $("#today_end").hide();
                    $("#timetxt").show();
                    $("#hb_next").show();
                    break;
                case 200:
                    //抽奖动画

                    var c_time = obj.c_time.split(/[- : \/]/);
                    NowTimeOld = new Date(c_time[0], c_time[1] - 1, c_time[2], c_time[3], c_time[4], c_time[5]);
                    var end_time = obj.end_time.split(/[- : \/]/);
                    waveTime = new Date(end_time[0], end_time[1] - 1, end_time[2], end_time[3], end_time[4], end_time[5]);
                    two = setInterval(getRTimeTwo, 1000);
                    timerhb = setInterval(hby, 200);
                    $("#hb_start").hide();
                    $("#hb_end").hide();
                    $("#today_end").hide();
                    $("#hb_next").hide();
                    $("#hb_for").show();
                    $("#timetxt").show();
                    break;
                default:
                    break;

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            var x = 1;
        }
    })
}
function starts() {
    $.ajax({
        url: url+"preferential/grabRedPacket2019Test",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: token
        },
        type:'post',
        cache: false,
        data:{
            type:'start'
        },
        dataType:'json',
        success:function (data) {
            if (data.code !== 200) {
                showMsg(data.message);
                return false;
            }
            if (data.data.ecode == 200) {
                $('#j-logn2').hide();
                $('#j-logn1').show();
                $('#j-packet-bg').show();
                $('#redMoney').text(data.data.data)
            } else if (data.data.ecode == 400) {
                $('#j-logn1').hide();
                $('#j-logn2').show();
                $('#j-packet-bg').show();
                $('#j-logn2 .txt2').html(data.data.emsg)
            }
        }

    })
}


function queryBtn() {
    var _bonuscode = $("#search1").val();
    if (_bonuscode == "") {
        showMsg("输入会员帐号不能为空!");
        return false;
    }
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
    queryPage(1);//第一页
}

var pagesize = 5;//每页显示5条记录
function queryPage(page) {//page:页数
    $.ajax({
        url: url+"preferential/grabRedPacket2019Test?type=list&p=" + page + '&size=' + pagesize,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: token
        },
        // url: 'api.php?type=list&p=' + page + '&size=' + pagesize,
        dataType: 'json',
        cache: false,
        data: {username: $("#search1").val()},
        type: 'post',
        success: function (obj) {
            if (obj.code !== 200) {
                showMsg(obj.message);
                return false;
            }
            if (obj.data.count != undefined) {

                var sHtml1 = "";
                var x = "";
                $.each(obj.data.data, function (i, award) {
                    x = (award.is_send == 1) ? "<span style='color:yellow'>已派彩</span>" : "<span style='color:white'>未派彩</span>";
                    sHtml1 += "<tr><td>" + award.bag_money + "</td><td>" + award.get_time + "</td><td>" + x + "</td></tr>";
                })
                var sPage = Paging(page, pagesize, obj.data.count, 2, "queryPage", '', '', '上一页', '下一页');
                $(".quotes").html(sPage);
                $("#query_content").html(sHtml1);
            } else {
                console.log(obj.data.emsg);
                var msg=obj.data.emsg;
                $("#query_content").html("<tr><td colspan='3'>"+msg+"</td></tr>");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            var x = 1;
        }
    })
}

/***
 *
 * @param pageNum 请求第几页
 * @param pageSize  每页显示条数
 * @param totalCount  总条数
 * @param skipCount
 * @param fuctionName 调用的方法名
 * @param currentStyleName
 * @param currentUseLink
 * @param preText
 * @param nextText
 * @param firstText
 * @param lastText
 * @returns {string}
 * @constructor
 */
function Paging(pageNum, pageSize, totalCount, skipCount, fuctionName, currentStyleName, currentUseLink, preText, nextText, firstText, lastText) {
    var returnValue = "";
    var begin = 1;
    var end = 1;
    var totalpage = Math.floor(totalCount / pageSize);//总页数
    if (totalCount % pageSize > 0) {
        totalpage++;
    }
    if (preText == null) {
        firstText = "prev";
    }
    if (nextText == null) {
        nextText = "next";
    }
    begin = pageNum - skipCount;
    end = pageNum + skipCount;
    if (begin <= 0) {
        end = end - begin + 1;
        begin = 1;
    }
    if (end > totalpage) {
        end = totalpage;
    }
    for (count = begin; count <= end; count++) {
        if (currentUseLink) {
            if (count == pageNum) {
                returnValue += "<a class=\"" + currentStyleName + "\" href=\"javascript:void(0);\" onclick=\"" + fuctionName + "(" + count.toString() + ");\">" + count.toString() + "</a> ";
            }
            else {
                returnValue += "<a href=\"javascript:void(0);\" onclick=\"" + fuctionName + "(" + count.toString() + ");\">" + count.toString() + "</a> ";
            }
        }
        else {
            if (count == pageNum) {
                returnValue += "<span class=\"" + currentStyleName + "\">" + count.toString() + "</span> ";
            }
            else {
                returnValue += "<a href=\"javascript:void(0);\" onclick=\"" + fuctionName + "(" + count.toString() + ");\">" + count.toString() + "</a> ";
            }
        }
    }
    if (pageNum - skipCount > 1) {
        returnValue = " ... " + returnValue;
    }
    if (pageNum + skipCount < totalpage) {
        returnValue = returnValue + " ... ";
    }
    if (pageNum > 1) {
        returnValue = "<a href=\"javascript:void(0);\" onclick=\"" + fuctionName + "(" + (pageNum - 1).toString() + ");\"> " + preText + "</a> " + returnValue;
    }
    if (pageNum < totalpage) {
        returnValue = returnValue + " <a href=\"javascript:void(0);\" onclick=\"" + fuctionName + "(" + (pageNum + 1).toString() + ");\">" + nextText + "</a>";
    }
    if (firstText != null) {
        if (pageNum > 1) {
            returnValue = "<a href=\"javascript:void(0);\" onclick=\"" + fuctionName + "(1);\">" + firstText + "</a> " + returnValue;
        }
    }
    if (lastText != null) {
        if (pageNum < totalpage) {
            returnValue = returnValue + " " + " <a href=\"javascript:void(0);\" onclick=\"" + fuctionName + "(" + totalpage.toString() + ");\">" + lastText + "</a>";
        }
    }
    return returnValue;
}

	
