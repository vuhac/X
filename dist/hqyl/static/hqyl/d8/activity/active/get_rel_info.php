<?php
// 签到活动  qiandao 字段

include_once($_SERVER['DOCUMENT_ROOT']."/../database/db.config.le.php");  // 安全配置文件
include_once($_SERVER['DOCUMENT_ROOT']."/../include/config.php"); // 数据库文件

// 1.如果已经拆过，则提示已经拆过，否则加钱
$params = [':datetime'=>date('Y-m-d')];
$rel_res = $le_db1->prepare("select userName as username,previousAmount as money,creationTime as createtime  from  k_money_log where DATEDIFF(creationTime,:datetime)=0 AND transferType='51hongbao'  ORDER BY id desc  limit 50");
$rel_res->execute($params);
$res_arr = [];
if ($rel_res->rowCount()) {

    // 有数据代表 存款或者投注至少一项参与过 今天签过到
    $i = 0;
    $res_arr = [];
   while ($data = $rel_res->fetch(PDO::FETCH_ASSOC)){
       // 3的倍数 插入假数据
       if ($i%3==0){
           $res_arr[] = [
               'username' => noshow_user(create_user()),
               'money' => create_money(),
               'createtime' =>  date('Y-m-d',strtotime($data['createtime'])+12*3600),
           ];
       }
       $res_arr[] = [
           'username' => noshow_user($data['username']),
           'money' => $data['money'],
           'createtime' => date('Y-m-d',strtotime($data['createtime'])+12*3600),
       ];
   }
}else{
    // 如果没有真实数据 生成50条数据
    for($i=0; $i<50; $i++){
        $res_arr[] = [
            'username' =>  noshow_user(create_user()),
            'money' => create_money(),
            'createtime' => date('Y-m-d',time()+12*3600),
        ];
    }
}

function create_user()
{
    $len = mt_rand(8,12);
    $arr = array(
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z',
    );
    $str = '';
    for ($i = 1; $i <= $len; $i++) {
        $str .= $arr[mt_rand(0, 35)];
    }
    return $str;
}

function create_money()
{
    $arr = [8,38,188,388,1188,3888];
    $key = mt_rand(0,5);
    return $arr[$key];
}

function noshow_user($user)
{
    $arr = str_split($user);
    foreach ($arr as $key=>$value){
       if ($key>=3 && $key <=6){
           $arr[$key] = '*';
       }else{
           $arr[$key] = $value;
       }
    }
    $str = implode($arr);
    return $str;
}

function create_date(){
    return date('Y-m-d',time()+12*3600);
}


echo json_encode($res_arr);

