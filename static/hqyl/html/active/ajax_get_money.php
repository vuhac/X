<?php
// 拆红包
//  活动是美东的凌晨到凌晨 我直接使用 adddate=date('Y-m-d')  入库tmp_active  即可  也表示北京昨天12到今天12
session_start();
include_once($_SERVER['DOCUMENT_ROOT']."/../database/db.config.le.php");  // 安全配置文件
include_once($_SERVER['DOCUMENT_ROOT']."/../include/config.php"); // 数据库文件


function ajax_json($msg,$status='200',$data=[])
{
    global $le_db1;
    // 做一个log 日志  方便有问题了做检查
    $json = json_encode(['status'=>$status, 'msg'=>$msg, 'data'=>$data]);
    $params = [':username'=>$_SESSION['username'] ,':json'=>$json,':addtime'=>date('Y-m-d H:i:s'),'page'=>'get_money'];
    $stmt = $le_db1->prepare("insert into tmp_active_log (username,json,addtime,page) VALUES (:username,:json,:addtime,:page)");
    $stmt->execute($params);
    echo $json; exit();
}

if ($_REQUEST['uid'] && $_REQUEST['token']) {
    $uid = intval(trim($_REQUEST['uid']));
    $token = trim($_REQUEST['token']);

    $loginLogParams = [':uid' => $uid, ':token' => $token];
    $loginLogSql = 'SELECT login_id FROM k_user_login WHERE uid = :uid AND token = :token AND is_login = 1';
    $loginLogStmt = $le_db1->prepare($loginLogSql);
    $loginLogStmt->execute($loginLogParams);
    $loginLogData = $loginLogStmt->fetch(PDO::FETCH_ASSOC);

    if (empty($loginLogData)) {
        ajax_json('您未登录，请先登录','201');
    }

    $userLoginData = explode('_', $loginLogData['login_id']);

    $userParams = [':uid' => $uid, ':username' => $userLoginData[2]];
    $userSql = 'SELECT username,password FROM k_user WHERE uid = :uid AND username = :username';
    $userStmt = $le_db1->prepare($userSql);
    $userStmt->execute($userParams);
    $userData = $userStmt->fetch(PDO::FETCH_ASSOC);

    if (empty($userData)) {
        ajax_json('您未登录，请先登录','201');
    }
    $_SESSION["uid"]            = $uid;
    $_SESSION["token"]          = $token;
    $_SESSION["user_login_id"]  = $loginLogData['login_id'];
    $_SESSION["username"]       = $userData['username'];
    $_SESSION["password"]       = $userData['password'];

}

// 1.如果没有登录，先登录
if (!isset($_SESSION["uid"]) || !isset($_SESSION["username"]) || !isset($_SESSION["password"])) {
    ajax_json('您未登录，请先登录','201');
} else {
    $params = array(':uid'=>$_SESSION["uid"]);
    $stmt = $le_db1->prepare('select username,password from k_user where uid=:uid limit 1');
    $stmt->execute($params);
    $check_user_obj = $stmt->fetch();
    if ($check_user_obj['username']!=$_SESSION["username"] || $check_user_obj['password']!=($_SESSION["password"])) {
        ajax_json('请重新登录！','202');
    }
}

// 2. 如果时间不到当天的12点，告知未开抢  北京时间12.30
$time = time()+12*3600;
$datetime = date('Y-m-d H:i:s',$time);

if (($datetime > date('Y-m-d ',$time).'12:00:00') && ($datetime < date('Y-m-d ',$time).'12:30:00') ){
    if ($datetime > date('Y-m-d ',$time).'12:00:00'){
        ajax_json('请于北京时间12:30再试!','203');
    }
    if ($datetime > date('Y-m-d ',$time).'12:30:00'){
        ajax_json('请于次日北京时间12:30再试!','203');
    }
}

$uid = $_SESSION['uid'];
// 查询是否拆过
// 请求页面的时候就直接有ajax 请求  走的是这个
if (isset($_GET['button']) && $_GET['button']=='chai'){
    $params = [':uid'=>$uid,':adddate'=>date('Y-m-d')];
    $stmt_tmp = $le_db1->prepare("select chai from  tmp_active where uid=:uid and adddate=:adddate  ORDER BY id DESC limit 1 ");
    $stmt_tmp->execute($params);
    if ($stmt_tmp->rowCount()){
        $tmp_active_res = $stmt_tmp->fetch(PDO::FETCH_ASSOC);
        if ($tmp_active_res['chai'] ==1){
            ajax_json('今日抢红包成功请明日再来,谢谢!','204');
        }else{
            die;
        }
    }else{
        die;
    }
}
// end


// 如果没有绑定银行卡，先绑定银行卡

$stmt = $le_db1->prepare("select  pay_card from k_user where uid=:uid");
$stmt->execute([':uid'=>$uid]);
$rows = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$rows['pay_card'] ){
    ajax_json('请先绑定银行卡。谢谢','208');
}

// 1.如果已经拆过，则提示已经拆过，否则加钱
$params = [':uid'=>$uid,':adddate'=>date('Y-m-d')];
$stmt_tmp = $le_db1->prepare("select chai,sum_money,k_money from  tmp_active where uid=:uid and adddate=:adddate   ORDER BY id DESC  limit 1 ");
$stmt_tmp->execute($params);
if ($stmt_tmp->rowCount()){
    $tmp_active_res = $stmt_tmp->fetch(PDO::FETCH_ASSOC);
    if ($tmp_active_res['chai'] ==1){
        ajax_json('今日抢红包成功请明日再来,谢谢!','204');
    }
    $sum_money = $tmp_active_res['sum_money']; // 投注金额
    $k_money = $tmp_active_res['k_money']; // 充值金额
//  用户存在，拆包加钱  金额是有效投注金额的0.1%  最高上线 3888
    // 需要符合充值五百   投注五千  才会返现
    if ($k_money>=500 && $sum_money>=3000){
        $song_money = sprintf("%.2f",$sum_money*0.001);
        if ($song_money > 3888){
            $song_money = 3888;
        }
    }else{
        // 参与  单没达到两个条件
        $song_money = mt_rand(1,5)*0.1;
    }
}else{
    // 昨天没有投注也没有充值 随机给1-5毛  此时 tmp_active 表没有用户的记录 需要新增一条本用户数据
    $params = [':uid'=>$_SESSION['uid'],':username'=>$_SESSION['username'],':sum_money'=>0,':k_money'=>0,':adddate'=>date('Y-m-d'),':chai'=>0 ];
    $stmt = $le_db1->prepare("insert into  tmp_active (uid,username,sum_money,k_money,adddate,chai) VALUES (:uid,:username,:sum_money,:k_money,:adddate,:chai)");
    $stmt->execute($params);
    $song_money = mt_rand(1,5)*0.1; // 既没有充值 也没有投注的
}

// chai=1 则是已经拆过   改变拆包状态
$params = [':uid'=>$uid,  ':chai'=>1, ':adddate'=>date('Y-m-d')];
$stmt_chai = $le_db1->prepare("update  tmp_active set chai=:chai WHERE uid=:uid AND adddate=:adddate");
$stmt_chai->execute($params);

if ($stmt_chai->rowCount()) {
    // 查询原本金额
    // 获取用户原本金额  日志需要 $k_user_money
    $select_money = $le_db1->prepare("select money from  k_user WHERE uid=:uid limit 1");
    $select_money->execute([':uid'=>$uid]);
    $select_money_res = $select_money->fetch(PDO::FETCH_ASSOC);
    $k_user_money = $select_money_res['money'];  // k_user 表里面用户金额
// 添加金额
    $params = array(':money' => $song_money, ':uid' => $uid);
    $stmt = $le_db1->prepare("update k_user set money=money+:money  WHERE uid=:uid ");
    $stmt->execute($params);
    if ($stmt->rowCount()) {
        $orderid  = date("YmdHis") . substr(microtime(), 2, 5) . rand(1, 9);//流水号
           $params = [
               ':uid'=>$uid, ':m_value'=>$song_money, ':status'=>1, ':m_order'=>$orderid, ':about'=>'红包活动',
               ':assets'=>$k_user_money, ':balance'=>$select_money_res['money']+$song_money, ':dm'=>1, ':type'=>4];
           $sql_money = "insert into k_money(uid,m_value,status,m_order,about,assets,balance,type,dm) values 
(:uid,:m_value,:status,:m_order,:about,:assets,:balance,:type,:dm)";
           $stmt = $le_db1->prepare($sql_money);
           $stmt->execute($params);

       $creationTime = date("Y-m-d H:i:s");
       $params       = array(':money' => $k_user_money, ':money_2' => $k_user_money, ':creationTime' => $creationTime, ':uid' => $uid, ':orderid' => $orderid);
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
            '51hongbao',
            :orderid,
            :money,
            k_user.money-:money_2,
            k_user.money,
            :creationTime
        FROM k_user
        WHERE k_user.uid=:uid";
       $stmt         = $le_db1->prepare($sql);
       $stmt->execute($params);

        // 拆包添加金额日志 Ok
        ajax_json('恭喜您抢到'.$song_money.'元!','200');
    }else{
        //  如果赠送的金额是0  会走到这一步   但是没参与的赠从了0.1-.05  应该不会走到这一步
        ajax_json('您未达到条件!','207');
    }
}else{
    ajax_json('拆包失败，请再次尝试!','206');
}






