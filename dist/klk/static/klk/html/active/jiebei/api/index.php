<?php
/*
 * 支付域名解析到active下
 * 支付宝二维码图片放到 active\jiebei\api\return_amount\qrcode_url\zhifubao\ 下
 * 微信二维码图片放到 active\jiebei\api\return_amount\qrcode_url\weixin\ 下
 * */

include 'jiebeiController.php';

$action = !isset($_POST['action'])? $_POST['active']:$_POST['action'];
$username = '';

if (isset($_SESSION['username'])) $username = $_SESSION['username'];
if (isset($_REQUEST['username'])) $username = $_REQUEST['username'];

#消息通知
if ($action == 'message') {
    $model = new jiebeiModel('');
    $data = $model->message();
    $model-> toJson(['msg'=>$data]);
}

$jiebeiController = new jiebeiController($username);

#额度查询
if ($action == 'amountQuery') {
    $jiebeiController->amountQuery();
}

#获取用户名
if ($action == 'getUser') {
    $username = $_SESSION['username'];
    if ($username == '') $jiebeiController->toJson([], 400, '请登录后操作！');
    $jiebeiController->toJson(['username' => $username], 200, '');
}

#还款页面的用户信息
if ($action == 'userRepaymentInfo') {
    $jiebeiController->userRepaymentInfo();
}

#获取用户的借款信息
if ($action == 'userLoanInfo') {
    $jiebeiController->userLoanInfo();
}

#余额抵扣欠款
if ($action == 'balanceReturnAmount') {
    $jiebeiController->balanceReturnAmount($_POST['amount']);
}

#提交借款信息
if ($action == 'addLoanData') {
    $jiebeiController->addLoanData($_POST['amount']);
}

#获取在线支付list
if ($action == 'onlinePayList') {
    $jiebeiController->getOnlinePayList($_POST['clientType'], $_POST['type']);
}

#获取二维码转账list
if ($action == 'qrTransferList') {
    $jiebeiController->getQrTransferList($_POST['type']);
}

#借还详情
if ($action == 'returnAmountAndRepaymentList') {
    $jiebeiController->returnAmountAndRepaymentList($_POST['page'], $_POST['limit']);
}

#获取网银转账list
if ($action == 'bankTransferList') {
    $jiebeiController->getBankTransferList();
}

#初始化分类
if ($action == 'iniClassList') {
    $jiebeiController->iniClassList($_POST['clientType']);
}

/*

请求方式:post
路径:/active/jiebei/api/index.php

====================================================================
用session_id获取用户名

参数
action=getUser
session_id=

返回
{
    "msg": "",
    "code": 200,
    "data": {
        "username": "taoge0403"
    }
}
====================================================================

【我要借款】 页面的会员详情

参数
action=userLoanInfo
username=

返回
{
    "msg": "",
    "code": 200,
    "data": {
        "username": "taoge0403",//会员账号
        "zhName": "陈越西",//会员姓名
        "totalAmount": 396350,//总额度
        "alreadyUseAmount": 0,//已使用
        "allowAmountAmount": 0,//可用额度
        "returnAmounDate": "2019-01-03 00:00:00"//还款日期
    }
}
====================================================================

【我要还款】 页面的会员详情

参数
action=userRepaymentInfo
username=

返回
{
    "msg": "",
    "code": 200,
    "data": {
        "username": "taoge0403",
        "zhName": "陈越西",
        "overdraft": 111
    }
}

====================================================================
【我要借款】 页面的确认提交

参数
action=addLoanData
username=taoge0403//会员账号
zhName=陈越西//会员姓名
totalAmount=396350//总额度
alreadyUseAmount=0//已使用
allowAmountAmount=0//可用额度
returnAmounDate=2019-01-03 00:00:00//还款日期


返回
{
    "msg": "申请成功",
    "code": 200,
    "data": []
}


{
    "msg": "申请失败",
    "code": 400,
    "data": []
}

====================================================================
【额度查询】 按钮

参数
action=amountQuery
username=

返回
{
    "msg": "",
    "code": 200,
    "data": {
        "username": "taoge0403"
        "shixunAmount": "222"
        "dianziAmount": "222"
        "qipaiAmount": "222"
        "caipiaoAmount": "222"
        "total": "444"
    }
}


{
    "msg": "请登录后查询",
    "code": 400,
    "data": []
}
====================================================================
【提交借款】 按钮

参数
action=addLoanData
amount=

返回
{
    "msg": "申请借款成功！",
    "code": 200,
    "data":[]
}


{
    "msg": "相关信息",
    "code": 400,
    "data": []
}

====================================================================
【获取在线支付列表】

参数
action=onlinePayList
clientType=pc
type=zhifubao

type字段如下

支付宝:zhifubao
QQ:qq
微信:weixin
网银、银联:wangyin

返回
{
    "msg": "",
    "code": 200,
    "data": [
        {
            "pay_url": "http://3232/return_amount/2332/",
            "id": 4,
            "pay_min_amount": 10,
            "pay_max_amount": 5000
        },
        {
            "pay_url": "http://234/return_amount/234/",
            "id": 5,
            "pay_min_amount": 10,
            "pay_max_amount": 5000
        },
        {
            "pay_url": "http://34123/return_amount/324/",
            "id": 6,
            "pay_min_amount": 10,
            "pay_max_amount": 5000
        },

    ]
}


如果是电脑的在线支付网银类型 返回如下
{
    "msg": "",
    "code": 200,
    "data": [
        {
            "pay_url": "http://pay.in.top/return_amount/daqiang/",
            "id": 3,
            "pay_min_amount": 10,
            "pay_max_amount": 5000
            "wangyin_code_json": "[{"code":"1","name":"工商银行","icon":"gsyh"},{"code":"1","name":"建设银行","icon":"jsyh"}]"
        }

    ]
}


====================================================================

【获取二维码转账列表】

参数
action=qrTransferList
type=zhifubao


type字段如下

支付宝:zhifubao
微信:weixin


返回
{
    "msg": "",
    "code": 200,
    "data": [
        {
            "qrcode_url": "/api/return_amount/qrcode_url/35.png",
            "id": 3,
            "min": 10,
            "max": 50000
        },
        {
            "qrcode_url": "/api/return_amount/qrcode_url/zhangsa.png",
            "id": 2,
            "min": 10,
            "max": 50000
        }
    ]
}

====================================================================
【借还记录】
action=returnAmountAndRepaymentList
page=1
limit=10

返回
{
    "msg": "",
    "code": 200,
    "data": {
        "total": 1,
        "data": [
            {
                "username": "taoge0403",
                "zh_name": "陈越西",
                "borrow_amount": 222,
                "repayment": 0,
                "unpaid": 222,
                "status": "<span style=\"color: red\">审核成功</span>",
                "date": "18-12-11 23:40:14"
            }
        ]
    }
}

====================================================================
【获取网银转账列表】


返回
{
    "msg": "",
    "code": 200,
    "data": [
        {
            "pay_min": 10,
            "pay_max": 500000,
            "id": 2,
            "bank_name": "工商银行",
            "bank_user_name": "李四",
            "bank_register_branch": "福建省厦门213鼓浪屿分行",
            "bank_number": "65500222255200"
        },
        {
            "pay_min": 10,
            "pay_max": 500000,
            "id": 3,
            "bank_name": "中国银行",
            "bank_user_name": "王五",
            "bank_register_branch": "福建省厦门213鼓浪屿分行",
            "bank_number": "65500222255200"
        },
        {
            "pay_min": 10,
            "pay_max": 500000,
            "id": 1,
            "bank_name": "农业银行",
            "bank_user_name": "张三",
            "bank_register_branch": "福建省厦门213鼓浪屿分行",
            "bank_number": "65500222255200"
        }
    ]
}
====================================================================
【消息通知】
action=message

返回
{
    "msg": "",
    "code": 200,
    "data": {
        "msg": "           澳门威尼斯人赌场携手：AG、BBIN、DS、OG、MG、欧博、等六大国际真人平台，联手打造线上博彩第一品牌，以最好的信誉和最专业的服务，给您带来宾至如归的完美体验！！"
    }
}

====================================================================

【在线支付提交按钮】

from传

lientType //pc or wap

id

username

提交form 到 pay_url

====================================================================

【初始化支付分类】

参数
action=iniClassList
clientType=pc或wap

只返回未开启的
[
    "微信在线",
    "银行转账"
]


====================================================================

【直接用余额抵扣】

参数
action=balanceReturnAmount
amount=

200的状态返回如下,提示完毕后跳转到借还记录页面
{
    "msg": "",
    "code": 200,
    "data": {
        "msg": "还款成功!请返回到还款记录查询是否审核成功"
    }
}

400的状态返回如下,给出提示即可
{
    "msg": "提交还款失败......",
    "code": 400,
    "data": []
}

 * */

