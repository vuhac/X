<?php

class jiebeiModel
{
    protected $db;

    public $beijingDateTime;
    public $beijingDay;

    public $username;

    public $whereUsernameArr;

    #额度配置
    public $amountConfig = [
        #彩票 电子 棋牌
        'else'   => [25, 50, 115, 275, 550, 1100, 1675, 2250, 2900, 3500, 5520, 6900, 8280, 9720, 11160, 12600, 15000, 15000, 17400, 19800, 22200, 30100, 34300, 38500, 42700, 46900, 51100, 59500, 67900, 76300, 96800, 106400, 116000, 136000, 156000, 176000, 196000, 225600, 286400, 316800, 347200, 396000, 446400, 496000, 548000, 600000, 700000, 800000, 900000, 1000000],
        #视讯
        'shixun' => [40, 100, 200, 350, 500, 750, 1000, 1250, 1500, 2000, 3000, 4200, 5400, 6600, 7800, 9000, 10800, 13200, 15600, 18000, 24500, 28000, 31500, 35000, 42000, 49000, 70000, 140000, 350000, 560000]
    ];

    #金管家表
    public $jinguanjia_tables = [
        'dianzi'  => 'active_jinguanjia_dianzi_level',
        'shixun'  => 'active_jinguanjia_shixun_level',
        'qipai'   => 'active_jinguanjia_qipai_level',
        'caipiao' => 'active_jinguanjia_caipiao_level',
    ];

    #借款表
    const   JIEKUAN_TABLE = 'active_jinguanjia_jiebei';
    #还款表
    const   HUANKUAN_TABLE = 'active_jinguanjia_return_money';
    #用户表
    const   USER_TABLE = 'k_user';

    public function __construct($username)
    {
        $this->username = $username;

        $this->whereUsernameArr = [':username' => $username];

        header("content-Type: text/html; charset=UTF-8");
        #error_reporting(0);

        $le_db1 = '';
        include($_SERVER['DOCUMENT_ROOT'] . "/../include/config.php");
        include($_SERVER['DOCUMENT_ROOT'] . "/../database/db.config.le.php");
        $this->db              = $le_db1;
        $this->beijingDateTime = date('y-m-d H:i:s', time() + 12 * 3600);
        $this->day             = date('d', time() + 12 * 3600);

        #error_reporting(0);

        #ini_set("display_errors", "On");
        #error_reporting(E_ALL);
    }


    /*
     * 在线支付列表
     * */
    public function onlinePayList($clientType = 'pc', $type = 'zhifubao')
    {
        $min = $type . '_' . $clientType . '_' . 'min';
        $max = $type . '_' . $clientType . '_' . 'max';

        $queryUserLevel =$this->queryUserLevel();
        $levelField=      $type . '_' . $clientType . '_' . 'level';
        $sql  = "select wangyin_code_json,id,pay_domain,pay_file_name,$min,$max from active_jinguanjia_online_pay where del=0 and FIND_IN_SET('{$queryUserLevel}',{$levelField}) and {$type}_{$clientType}=1 order by addtime desc";
        $data = $this->executeSql($sql, [], 1);
        return $data;
    }


    /*
     * 二维码转帐列表
     * */
    public function qrTransferList($type)
    {
        $min = $type . '_' . 'min';
        $max = $type . '_' . 'max';
        $queryUserLevel =$this->queryUserLevel();

        #$sql = "select $max,$min,id,{$type}_zh_name,{$type}_user_name,{$type}_qrcode_url from active_jinguanjia_qr_transfer where {$type}_zh_name<>'' and {$type}_status=1 order by addtime desc";
        $sql  = "select $max,$min,id,{$type}_qrcode_url from active_jinguanjia_qr_transfer where FIND_IN_SET('{$queryUserLevel}',level) and del=0 and {$type}_zh_name<>'' and {$type}_status=1 order by addtime desc";
        $data = $this->executeSql($sql, [], 1);
        return $data;
    }

    /*
     * 网银转帐列表
     * */
    public function bankTransferList()
    {
        $queryUserLevel =$this->queryUserLevel();
        $sql  = "select pay_min,pay_max,id,bank_name,bank_user_name,bank_register_branch,bank_number from active_jinguanjia_bank_transfer where FIND_IN_SET('{$queryUserLevel}',level) and del=0 and status=1 order by addtime desc";
        $data = $this->executeSql($sql, [], 1);
        return $data;
    }

    /*
     * 最新消息瀑布流
     * */
    public function message($type=1)
    {
        $date =date("Y-m-d H:i:s");
        # $sql  = "select * from k_notice where end_time<='$date' and  is_show=1 order by sort asc";

        $sql = "select msg from k_notice where end_time>now() and is_show=1 and is_class=".$type." order by `sort` desc,nid desc limit 0,1";

        $data = $this->executeSql($sql, [], 1);
        if (empty($data)) return [];
        $s = '';
        foreach ($data as $v) $s .= "           " . $v['msg'];
        return $s;
    }

    /*
     * 还款时间
     * */
    public function returnAmounDate()
    {
        return date("y-m-03 00:00:00", strtotime("+1 month"));
    }

    /*
     * 借还记录
     * */
    public function repaymentList($page = 1, $limit = 10)
    {
        $page  = intval($page);
        $limit = intval($limit);
        $page  = ($page - 1) * $limit;
        $sql   = 'select count(id) as total from active_jinguanjia_jiebei where username=:username';
        $total = $this->executeSql($sql, $this->whereUsernameArr, 2);
        $total = $total['total'];

        $sql = 'select * from active_jinguanjia_jiebei ' . "where username=:username order by add_date desc limit " . "$page,$limit";

        $arr = $this->executeSql($sql, $this->whereUsernameArr, 1);

        $data['total'] = $total;
        $data['data']  = $arr;

        return $data;
    }


    public function queryUserLevel()
    {
        $sql  = 'select le_id from k_user where username=:username';
        $data = $this->executeSql($sql, $this->whereUsernameArr, 2);
        return $data['le_id'];
    }


    /*
     * 查询会员的中文姓名
     * */
    public function queryUserZhName()
    {
        $sql  = 'select pay_name,uid from k_user where username=:username';
        $data = $this->executeSql($sql, $this->whereUsernameArr, 2);


        if ($data['pay_name'] == '') {
            $this->toJson([], 400, '请先设置银行卡姓名！');
        }

        return $data['pay_name'];
    }

    /*
     * 查询周俸禄总额和月俸禄总额
     * */
    public function queryWeekMoneyAndMothMoney()
    {
        $jinguanjia_tables = $this->jinguanjia_tables;

        foreach ($jinguanjia_tables as $k => $v) {
            $sql      = "SELECT every_week_reward as week_reward,every_month_reward as month_reward  FROM {$v} WHERE username=:username";
            $data[$k] = $this->executeSql($sql, $this->whereUsernameArr, 2);
        }

        $data['weekTotal']  = 0;
        $data['monthTotal'] = 0;
        foreach ($data as $vv) {
            $data['weekTotal']  += $vv['week_reward'];
            $data['monthTotal'] += $vv['month_reward'];
        }
        return $data;
    }


    /*
     * 查询等级
     * */
    public function queryLevel()
    {
        $sql                   = 'select level from active_jinguanjia_caipiao_level where username=:username';
        $data['caipiao_level'] = intval($this->executeSql($sql, $this->whereUsernameArr, 2)['level']);

        $sql                 = 'select level from active_jinguanjia_qipai_level where username=:username';
        $data['qipai_level'] = intval($this->executeSql($sql, $this->whereUsernameArr, 2)['level']);

        $sql                  = 'select level from active_jinguanjia_dianzi_level where username=:username';
        $data['dianzi_level'] = intval($this->executeSql($sql, $this->whereUsernameArr, 2)['level']);

        $sql                  = 'select level from active_jinguanjia_shixun_level where username=:username';
        $data['shixun_level'] = intval($this->executeSql($sql, $this->whereUsernameArr, 2)['level']);

        return $data;
    }

    /*
     * type=0查询总额度
     * type=1查询各额度
     * */
    public function queryAmount($type = 0)
    {
        $levels       = $this->queryLevel();
        $amountConfig = $this->amountConfig;

        #棋牌额度
        if ($levels['qipai_level'] == 0) {
            $else_arr[] = 0;
        } else {
            $else_arr[] = $amountConfig['else'][$levels['qipai_level'] - 1];
        }

        #电子额度
        if ($levels['dianzi_level'] == 0) {
            $else_arr[] = 0;
        } else {
            $else_arr[] = $amountConfig['else'][$levels['dianzi_level'] - 1];
        }

        #彩票额度
        if ($levels['caipiao_level'] == 0) {
            $else_arr[] = 0;
        } else {
            $else_arr[] = $amountConfig['else'][$levels['caipiao_level'] - 1];
        }

        #视讯额度
        if ($levels['shixun_level'] == 0) {
            $shixun = 0;
        } else {
            $shixun = $amountConfig['shixun'][$levels['shixun_level'] - 1];
        }

        $total = max($else_arr) + $shixun;

        if ($type == 1) {
            $data['qipaiAmount']   = $else_arr[0];
            $data['dianziAmount']  = $else_arr[1];
            $data['caipiaoAmount'] = $else_arr[2];
            $data['shixunAmount']  = $shixun;
            $data['username']      = $this->username;
            $data['total']         = $total;
            return $data;
        }

        #其他最高的额度加视讯的额度就是总额度
        return $total;
    }


    /*
     * 可用的额度
     * */
    public function allowAmount()
    {
        #总额度+（还款-借款） = 可用的额度

        $totalAmount      = $this->queryAmount();
        $allReturnAmount  = $this->allReturnAmount();
        $alreadyUseAmount = $this->alreadyUseAmount();

        #var_dump($totalAmount,$allReturnAmount,$alreadyUseAmount);die;

        return $totalAmount + ($allReturnAmount - $alreadyUseAmount);
    }


    /*
     * 是否有逾期的未还款
     * */
    public function overdueUnauditedLoan()
    {
        $arr[':username']     = $this->username;
        $arr[':expired_date'] = $this->beijingDateTime;

        $sql = 'select borrow_amount,repayment from active_jinguanjia_jiebei where 
 status=1 and username=:username and expired_date<=:expired_date limit 1';

        $res = $this->executeSql($sql, $arr, 2);

        #借款减去还款
        $res = intval($res['borrow_amount']) - intval($res['repayment']);

        return $res;
    }


    /*
     * 5分钟之内是否有多笔订单
     * */
    public function firstFiveMinute()
    {
        $arr[':username'] = $this->username;
        $arr[':start']    = date('y-m-d H:i:s', time() + (12 * 3600 - 300));
        $arr[':end']      = $this->beijingDateTime;

        $sql = 'select id from active_jinguanjia_jiebei where 
  username=:username and add_date>=:start and add_date<=:end limit 1';

        $res = $this->executeSql($sql, $arr, 2);

        return isset($res['id']) ? $res['id'] : 0;
    }


    /*
     * 是否有未还款(欠款)
     * */
    public function unauditedLoan()
    {
        $sql = 'select sum(borrow_amount) as alreadyUseAmount from active_jinguanjia_jiebei where 
 status=1 and username=:username ';
        $res = $this->executeSql($sql, $this->whereUsernameArr, 2);

        #总借款-总还款=是否有未还款
        $result = intval($res['alreadyUseAmount']) - ($this->allReturnAmount());
        return $result;
    }


    /*
     * 是否有未审核的借款
     * */
    public function unreviewedLoan()
    {
        $sql = 'select id from active_jinguanjia_jiebei where 
 status=0 and username=:username limit 1';
        $res = $this->executeSql($sql, $this->whereUsernameArr, 2);
        return intval($res['id']);
    }


    /*
     * 已用额度
     * */
    public function alreadyUseAmount()
    {
        $sql = 'select sum(borrow_amount) as alreadyUseAmount from active_jinguanjia_jiebei where 
  (status=1) and username=:username';

        $res = $this->executeSql($sql, $this->whereUsernameArr, 2);
        return intval($res['alreadyUseAmount']) - ($this->allReturnAmount());
    }


    /*
     * 总还款
     * */
    public function allReturnAmount()
    {
        $sql = 'select sum(return_amount) as return_amount from active_jinguanjia_return_money where 
 status=1 and username=:username';

        $res = $this->executeSql($sql, $this->whereUsernameArr, 2);
        return intval($res['return_amount']);
    }

    /*
     * 用户名
     * */
    public function getUsername($uid)
    {
        $sql     = 'select username from  k_user where uid='.intval($uid);
        $res = $this->executeSql($sql,[], 2);
        return $res['username'];
    }

    /*
     * 是否登录
     * */
    public function isLogin()
    {
        $sql     = 'select b.uid,b.username,a.is_login,a.token from  k_user_login a ,k_user b where b.uid=a.uid and b.username=:username';
        $isLogin = $this->executeSql($sql, $this->whereUsernameArr, 2);
        return $isLogin;
    }

    /*
     * 提交借款
     * */
    public function addBorrowMoneyData($data = [])
    {
        $values = '';
        $sql    = 'INSERT INTO active_jinguanjia_jiebei (';
        foreach ($data as $k => $v) {
            $sql    .= "`{$k}`,";
            $values .= "'{$v}',";
        }
        $sql = rtrim($sql, ',') . ') VALUES (' . rtrim($values, ',') . ');';
        return $this->executeSql($sql);
    }

    #执行语句。type=0 返回rowCount， type=1 返回fetchAll， type=2 返回fetch
    public function executeSql($sql = '', $params = [], $type = 0)
    {
        $le_db1 = $this->db;
        $stmt   = $le_db1->prepare($sql);
        $stmt->execute($params);
        if ($type == 0) return $stmt->rowCount();
        if ($type == 1) return $stmt->fetchAll(PDO::FETCH_ASSOC);
        if ($type == 2) return $stmt->fetch(PDO::FETCH_ASSOC);
        return 0;
    }

    /*
     * 生成json
     * */
    public function toJson($data = [], $code = 200, $msg = '')
    {
        $arr['msg']  = $msg;
        $arr['code'] = $code;
        $arr['data'] = $data;
        echo json_encode($arr, JSON_UNESCAPED_UNICODE);
        die;
    }

    /*
     * 是否还有通过余额抵扣还款未审核的还款
     * */
    public function weishenhehuankuan()
    {
        $sql     = 'select id from active_jinguanjia_return_money where username=:username and pay_type=8 and status=0 limit 1 ';
        $dataRes = $this->executeSql($sql, $this->whereUsernameArr, 2);
        return $dataRes['id'];
    }

    /*
     * 记录通过余额抵扣还款
     * */
    public function addToReturnMountData($money, $order)
    {

        $username                   = $this->username;
        $add_date                   = date('y-m-d H:i:s', time() + 12 * 3600);
        $queryLevel                 = $this->queryLevel();
        $queryWeekMoneyAndMothMoney = $this->queryWeekMoneyAndMothMoney();
        #$undone_amount              = $this->alreadyUseAmount() - $this->allReturnAmount();
        $undone_amount              = $this-> unauditedLoan();
        $sql                        = "insert into active_jinguanjia_return_money 
              (`order_number`,
              `return_amount`,
              `undone_amount`,
              `add_date`,
              `username`,
              `month_total_money`,
              `week_total_money`,
              `shixun_level`,
              `dianzi_level`,
              `qipai_level`,
              `caipiao_level`,
              `pay_type`)
              values
              ('{$order}',
              '{$money}',
              '{$undone_amount}',
              '{$add_date}',
              '{$username}',
              '{$queryWeekMoneyAndMothMoney['monthTotal']}',   
              '{$queryWeekMoneyAndMothMoney['weekTotal']}',
              '{$queryLevel['shixun_level']}',
              '{$queryLevel['dianzi_level']}',
              '{$queryLevel['qipai_level']}',
              '{$queryLevel['caipiao_level']}',
              '8');";

        return $this->executeSql($sql);
    }

    #获取用户信息
    public function getUserInfo()
    {
        $sql = 'select money,uid from k_user where username=:username';
        $res = $this->executeSql($sql, $this->whereUsernameArr, 2);
        return $res;
    }

    #余额抵扣还款
    public function updateUserMoney($orderid, $user_before_money = 0, $uid = 0, $huankuanmoney = 0, $remark = '借呗还款-余额抵扣', $activeCode = 'jiebei', $transferType = 'OUT')
    {
        $nowDateTime    = date('Y-m-d H:i:s');
        $username       = $this->username;
        $user_now_money = $user_before_money - $huankuanmoney;
        $sql            = 'update k_user set money=:money where uid=:uid';
        $updateBool     = $this->executeSql($sql, [':uid' => $uid, ':money' => $user_now_money]);

        $money=0-$huankuanmoney;

        #更新用户余额
        if ($updateBool) {
            $sql        = "INSERT INTO `k_money` 
  (`uid`, `m_value`,`status`,`m_order`,`about`, `assets`,`balance`, `type`)
   VALUES ($uid, $money, 1, '$orderid','$remark', $user_before_money, $user_now_money, 6)";
            $insertBool = $this->executeSql($sql);
        } else {
            return ['msg' => '添加金额失败！', 'status' => 'fail'];
        }

        #写入到金额日志表
        if ($insertBool) {
            $sql        = "INSERT INTO `k_money_log` 
  (`uid`, `userName`,`gameType`,`transferType`,`transferOrder`, `transferAmount`,`previousAmount`, `currentAmount`, `creationTime`)
   VALUES ($uid, '$username', '$activeCode','$transferType', '$orderid',$money, $user_before_money, $user_now_money, '$nowDateTime')";
            $insertBool = $this->executeSql($sql);
            if ($insertBool) return ['msg' => '', 'status' => 'success'];
        } else {
            return ['msg' => '写入金额日志失败！！', 'status' => 'fail'];
        }
    }
}
