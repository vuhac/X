<?php
@session_start();
header("Content-Type: application/json");
include_once($_SERVER['DOCUMENT_ROOT'] . "/../include/config.php");
website_close();
website_deny();
include_once($_SERVER['DOCUMENT_ROOT'] . "/../database/db.config.le.php");
include_once($_SERVER['DOCUMENT_ROOT'] . "/../class/user.php");
include_once($_SERVER['DOCUMENT_ROOT'] . "/../common/function.php");

$uid                = @$_SESSION['uid'];
$json               = array();
$json["code"] = 400;
$json["serverTime"] = time();

//判断登录
if (!$uid) {
    $json["msg"] = "请登录后再进行抽奖！";
    die(json_encode($json));
}

$loginid  = $_SESSION['user_login_id'];
$userinfo = user::getinfo($_SESSION["uid"]);

//判断银行卡绑定
if ($userinfo['pay_card'] == "") {
    $json["msg"] = "请绑定银行卡后再进行抽奖！";
    die(json_encode($json));
}

//判断是否有资格
$params = array(':uid' => $uid);
$sql    = "select id,money,activeTime from `active` where uid = :uid and status=1 limit 100";
$stmts  = $le_db1->prepare($sql);
$stmts->execute($params);
$i=0;
while ($row = $stmts->fetch()){
    $json["data"][$i] = ['money'=>round($row["money"],2),'time'=>strtotime($row["activeTime"])];
    $i++;
}
if ($i>0) {
    $json["code"] = 200;
}else{
    $json["msg"] = "抱歉，未查询到您的抽奖记录！";
}
echo json_encode($json);
