<?php
header('Access-Control-Allow-Origin:*');
header("content-Type: text/html; charset=UTF-8");
error_reporting(0);
include($_SERVER['DOCUMENT_ROOT'] . "/../include/config.php");
include($_SERVER['DOCUMENT_ROOT'] . "/../database/db.config.le.php");

#等级所需打码，索引+1就是等级
$config = [
    30000,
    100000,
    250000,
    500000,
    1000000,
    2000000,
    3000000,
    4000000,
    5000000,
    6000000,
    8000000,
    10000000,
    12000000,
    14000000,
    16000000,
    18000000,
    21000000,
    24000000,
    27000000,
    30000000,
    35000000,
    40000000,
    45000000,
    50000000,
    55000000,
    60000000,
    70000000,
    80000000,
    90000000,
    100000000,
    110000000,
    120000000,
    140000000,
    160000000,
    180000000,
    200000000,
    230000000,
    260000000,
    290000000,
    320000000,
    350000000,
    400000000,
    450000000,
    500000000,
    550000000,
    600000000,
    700000000,
    800000000,
    900000000,
    1000000000
];

$time  = date('Y-m-d') . ' 00:00:00';
$week2 = date("Y-m-d", strtotime("$time Sunday"));#本周第一日
$week1 = date("Y-m-d", strtotime("$week2 - 6 days"));#本周最后一日

$username    = stripslashes(rtrim($_POST['username']));
$username    = $username ? $username : '';
$usernameArr = [':username' => stripslashes(rtrim($_POST['username']))];
$sql         = 'select a.is_login from  k_user_login a ,k_user b where b.uid=a.uid and b.username=:username';
$isLogin     = executeSql($sql, $usernameArr, 2);

#查询是否登陆
if ($isLogin['is_login'] == '1') {
    $sql       = 'select username,bet_money,level,every_week_reward,every_month_reward from active_promotion where username=:username';
    $levelInfo = executeSql($sql, $usernameArr, 2);//等级详情
    if (is_array($levelInfo)) {
        #已经晋级的会员
        $sql                         = "select uid,sum(bet_money) as week_bet_money from active_promotion_traditional_lottery_data where username='$username' and create_date>='$week1' and create_date<='$week2' group by uid";
        $week_bet_money              = executeSql($sql, [], 2);//本周打码
        $levelInfo['week_bet_money'] = ($week_bet_money['week_bet_money'] > 0 ? $week_bet_money['week_bet_money'] : 0) . "";
        if ($levelInfo['level'] == '50') {
            $levelInfo['next_upgrade_gap'] = '您已经是最高等级';
        } else {
            $levelInfo['next_upgrade_gap'] = ($config[intval($levelInfo['level'])] - $levelInfo['bet_money']) . "";
        }
        apiJson('', '1', $levelInfo);
    } else {
        #尚未晋级的会员
        $sql     = 'select username,sum(bet_money) as bet_money from active_promotion_traditional_lottery_data where username=:username group by username';
        $betinfo = executeSql($sql, $usernameArr, 2);//等级详情

        if (is_array($betinfo)) {
            #已经有记录打码的会员
            $next_upgrade_gap = $config[0] - $betinfo['bet_money'];
            if ($next_upgrade_gap > 1) {
                apiJson('从活动开始到现在最新的数据统计，您的彩票游戏打码为' . $betinfo['bet_money'] . '！距离等级1还差打码' . $next_upgrade_gap, '0');
            }else{
                apiJson('从活动开始到现在最新的数据统计，您的彩票游戏打码为' . $betinfo['bet_money'] . '，每个星期一的20:00:00前更新您的等级', '0');
            }
        } else {
            #尚未有记录打码的会员
            apiJson('从活动开始到现在最新的数据统计，您的彩票游戏打码为0', '0');
        }
    }
} else {
    apiJson('请您在平台登录后再来查询！', '0');
}

#执行语句。type=0 返回rowCount， type=1 返回fetchAll， type=2 返回fetch
function executeSql($sql = '', $params = [], $type = 0)
{
    global $le_db1;
    $stmt = $le_db1->prepare($sql);
    $stmt->execute($params);
    if ($type == 0) return $stmt->rowCount();
    if ($type == 1) return $stmt->fetchAll(PDO::FETCH_ASSOC);
    if ($type == 2) return $stmt->fetch(PDO::FETCH_ASSOC);
    return 0;
}

#json输出
function apiJson($msg = '', $status = '1', $data = [])
{
    $arr['msg']    = $msg;
    $arr['status'] = $status;
    $arr['data']   = $data;
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);
}

/*

username //会员名
bet_money //累计打码
level  //累计会员等级
week_bet_money //本周打码
next_upgrade_gap //距离下次升级还需要
every_week_reward //周俸禄
every_month_reward //月俸禄


//status 为0的时候输出信息即可 为1的时候 返回查询结果 示例如下

{
    "msg": "请登录后查询！",
    "status": "0",
    "data": []
}

{
    "msg": "",
    "status": "1",
    "data": {
        "username": "ghh5",
        "bet_money": "1420000",
        "level": "5",
        "every_week_reward": "10",
        "every_month_reward": "100",
        "week_bet_money": "2500",
        "next_upgrade_gap": "580000"
    }
}

*/