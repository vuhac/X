<?php 
session_start();
error_reporting(0);

include($_SERVER['DOCUMENT_ROOT'] . "/../database/db.config.le.php");

/*if (isset($_REQUEST['app']) && $_REQUEST['app'] == 'app') {
    $isIos = 1;
}
*/

if (isset($_REQUEST['shebei'])) {
    $isApp = 1;
}

if (isset($_REQUEST['uid'])) {
    $uid = intval($_REQUEST['uid']);
    $token = getToken($uid);
    $sql = 'select username from k_user where uid=' . $uid;
    $res = executeSql($sql, [], 2);
    $_SESSION['username'] = $res['username'];
    $_SESSION['token'] = $token;
}

if (isset($_REQUEST['username'])) {
    $uid = getToken($_REQUEST['username']);
    $token = getToken($uid);
    $_SESSION['token'] = $token;
    $_SESSION['username'] = $_REQUEST['username'];
}

function getToken($uid)
{
    $sql = 'select token from k_user_login where uid=:uid';
    return executeSql($sql, [':uid' => $uid], 2)['token'];
}

function getUid($username)
{
    $sql = 'select uid from k_user where username=:username';
    return executeSql($sql, [':username' => $username], 2)['uid'];
}

function executeSql($sql = '', $params = [], $type = 0)
{
    global $le_db1;
    $stmt = $le_db1->prepare($sql);
    $stmt->execute($params);
    if ($type == 0) return $stmt->rowCount();
    if ($type == 1) return $stmt->fetchAll(PDO::FETCH_ASSOC);
    if ($type == 2) return $stmt->fetch();
    return 0;
}
?>