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
$params = array(':uid' => $uid, 'addTime' => date("Y-m-d"));
$sql    = "select id,money from `active` where uid = :uid and status=0 and addTime=:addTime limit 1";
$stmts  = $le_db1->prepare($sql);
$stmts->execute($params);
$row = $stmts->fetch();
if ($row) {
    $money = round($row["money"],2);
    $id = $row["id"];
    $json["code"] = 200;
    $json["data"]["lottery"] = $money;

    $params = array(':money' => $money, ':uid' => $uid);
    $sql    = "update k_user set money=money+:money where uid=:uid";
    $stmt   = $le_db1->prepare($sql);
    $stmt->execute($params);
    $q3 = $stmt->rowCount();

    $params = array(':id' => $id, ':activeTime' => date("Y-m-d H:i:s"));
    $sql    = "update `active` set status=1,activeTime=:activeTime where id=:id";
    $stmt   = $le_db1->prepare($sql);
    $stmt->execute($params);
    $q4 = $stmt->rowCount();

    if ($q3 == 1 && $q4 == 1) {
        $creationTime = date("Y-m-d H:i:s");
        $orderid      = date("YmdHis") . substr(microtime(), 2, 5) . rand(1, 9);//流水号
        $params       = array(':money' => $money, ':money_2' => $money, ':creationTime' => $creationTime, ':uid' => $uid, ':orderid' => $orderid);
        $sql          = "
			INSERT INTO k_money_log (
				uid,
				userName,
				gameType,
				transferType,
				transferOrder,
				transferAmount,
				previousAmount,
				currentAmount,
				creationTime) 
			SELECT 
				k_user.uid,
				k_user.username,
				'HD',
				'IN',
				:orderid,
				:money,
				k_user.money-:money_2,
				k_user.money,
				:creationTime
			FROM k_user
			WHERE k_user.uid=:uid";
        $stmt         = $le_db1->prepare($sql);
        $stmt->execute($params);
    }

}else{
    $json["msg"] = "抱歉，您的帐号不满足抽奖条件！";
}
echo json_encode($json);
