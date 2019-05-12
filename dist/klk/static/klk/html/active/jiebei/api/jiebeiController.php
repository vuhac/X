<?php
session_start();

include 'jiebeiModel.php';

class jiebeiController extends jiebeiModel
{
    public $username;


    public function __construct($username = '')
    {

        $this->username = $this->strFilter($username);
        parent::__construct($username);

        $isLogin = $this->isLogin();

        // if ($isLogin['token'] != $_SESSION['token']) {
        //     $this->toJson([], 400, '请重新登录!');
        // }

        #if (empty($isLogin)) $this->toJson([], 400, '请输入正确的用户名！');
        if ($isLogin['is_login'] != 1) $this->toJson([], 400, '请登录后操作！');
    }


    /*
     * 获取在线支付列表
     * */
    public function getOnlinePayList($clientType = 'pc', $type = 'zhifubao')
    {
        $data = $this->onlinePayList($clientType, $type);
        if (empty($data)) $this->toJson([], 400, '暂无通道可以用！');;

        foreach ($data as $v) {
            $pay_domain    = rtrim($v['pay_domain'], '/');
            $pay_file_name = $v['pay_file_name'];

            //跳转到支付地址

            $arr['pay_url'] = $pay_domain . '/jiebei/api/return_amount/online/' . $pay_file_name . "/?type={$type}&clientType={$clientType}";

            $arr['id']             = $v['id'];
            $arr['pay_min_amount'] = $v[$type . '_' . $clientType . '_min'];
            $arr['pay_max_amount'] = $v[$type . '_' . $clientType . '_max'];

            if ($clientType == 'pc' && $type == 'wangyin') {
                $arr['wangyin_code_json'] = is_null($v['wangyin_code_json']) ? '' : $v['wangyin_code_json'];
            }

            $returnData[] = $arr;
        }

        $this->toJson($returnData);
    }

    /*
     * 获取网银转账列表
     * */
    public function getBankTransferList()
    {
        $data = $this->bankTransferList();
        if (empty($data)) $this->toJson([], 400, '暂无通道可以用！');;
        $this->toJson($data);
    }

    /*
     * 获取二维码转账列表
     * */
    public function getQrTransferList($type = 'zhifubao')
    {
        $path = 'api/return_amount/qrcode_url/' . $type . '/';
        $data = $this->qrTransferList($type);
        if (empty($data)) $this->toJson([], 400, '暂无通道可以用！');;
        foreach ($data as $v) {
            $qrcode_url = rtrim($v[$type . '_qrcode_url'], '.png');
            $qrcode_url .= '.png';

            $min = $v[$type . '_min'];
            $max = $v[$type . '_max'];

            $arr['qrcode_url'] = $path . $qrcode_url;
            $arr['id']         = $v['id'];
            $arr['min']        = $min;
            $arr['max']        = $max;
            $returnData[]      = $arr;
        }
        $this->toJson($returnData);
    }


    /*
     * 借款还款记录
     * */
    public function returnAmountAndRepaymentList($page = 1, $limit = 10)
    {
        $data = $this->repaymentList($page, $limit);
        if (empty($data)) $this->toJson([]);
        $statusArr[0] = '<span style="color: green">审核中</span>';
        $statusArr[1] = '<span style="color: red">借款成功</span>';
        $statusArr[2] = '审核失败';

        foreach ($data['data'] as $v) {
            $newArr['username']      = $v['username'];
            $newArr['zh_name']       = $v['zh_name'];
            $newArr['borrow_amount'] = intval($v['borrow_amount']);
            $newArr['repayment']     = intval($v['repayment']);
            $newArr['unpaid']        = $v['borrow_amount'] - $v['repayment'];
            $newArr['status']        = $statusArr[$v['status']];
            $newArr['date']          = $v['add_date'];

            $resData[] = $newArr;
        }

        $return['total'] = $data['total'];
        $return['data']  = $resData;

        $this->toJson($return);
    }


    /*
     * 初始化分类列表
     * */
    public function iniClassList($clientType = 'pc')
    {
        $arr                 = [];
        $getBankTransferList = $this->bankTransferList();
        $zhifubao            = $this->onlinePayList($clientType, 'zhifubao');
        $weixin              = $this->onlinePayList($clientType, 'weixin');
        $qq                  = $this->onlinePayList($clientType, 'qq');
        $wangyin             = $this->onlinePayList($clientType, 'wangyin');
        $qrWeixin            = $this->qrTransferList('weixin');
        $qrZhifubao          = $this->qrTransferList('zhifubao');

        $is_pc = $clientType == 'pc' ? 1 : 0;

        if (empty($getBankTransferList)) $arr[] = '网银转账';
        if (empty($qrWeixin)) $arr[] = '微信转账';
        if (empty($qrZhifubao)) $arr[] = '支付宝转账';
        if (empty($wangyin)) $arr[] = $is_pc ? '网银在线' : '银联支付';
        if (empty($zhifubao)) $arr[] = $is_pc ? '支付宝在线' : '支付宝';
        if (empty($weixin)) $arr[] = $is_pc ? '微信在线' : '微信支付';
        if (empty($qq)) $arr[] = $is_pc ? 'QQ在线' : 'QQ支付';
        echo json_encode($arr);
        die;

    }

    /*
     * 用户查询额度
     * */
    public function amountQuery()
    {
        /*$isLogin = $this->isLogin();
        if (empty($isLogin)) $this->toJson([], 400, '请输入正确的用户名！');
        if ($isLogin['is_login'] !== 1) $this->toJson([], 400, '请登录后查询！');*/
        $data = $this->queryAmount(1);
        $this->toJson($data);
    }

    /*
     * 返回用户还款信息
     * */
    public function userRepaymentInfo()
    {
        $arr['username']  = $this->username;
        $arr['zhName']    = $this->queryUserZhName();
        $arr['overdraft'] = $this->unauditedLoan();
        $this->toJson($arr);
    }

    /*
     * 返回用户借款相关信息
     * */
    public function userLoanInfo($type = 0)
    {
        $arr['username']         = $this->username;
        $arr['zhName']           = $this->queryUserZhName();
        $arr['totalAmount']      = $this->queryAmount();
        $arr['alreadyUseAmount'] = $this->alreadyUseAmount();
        $arr['allowAmount']      = $this->queryAmount() - $this->alreadyUseAmount();
        $arr['returnAmounDate']  = '20' . $this->returnAmounDate();
        if ($type == 1) return $arr;
        $this->toJson($arr);
    }

    /*
     * 提交借款相关信息
     * */
    public function addLoanData($amount = 0)
    {
        //借款信息
        $userLoanInfo = $this->userLoanInfo(1);

        //周俸禄总额和月俸禄总额
        $weekAndMonth = $this->queryWeekMoneyAndMothMoney();

        //各活动的额度
        $queryAmount = $this->queryAmount(1);

        //各活动的等级
        $queryLevel = $this->queryLevel();

        //判断是否有未审核的借款
        $unreviewedLoan = $this->unreviewedLoan();
        if ($unreviewedLoan > 0) $this->toJson([], 400, '您已经有借款正在审核中，请审核完成后再来借款！');

        //判断是否有未还款
        $unauditedLoan = $this->unauditedLoan();
        if ($unauditedLoan > 0) $this->toJson([], 400, '您当前欠款' . $unauditedLoan . '元，请先还款再申请借款！');

        //是否有逾期的未还款
        $overdueUnauditedLoan = $this->overdueUnauditedLoan();
        if ($overdueUnauditedLoan > 0) $this->toJson([], 400, '您当前有欠款' . $overdueUnauditedLoan . '元已经逾期，请尽快还款，否则您的等级存在可能将被降级的风险！');

        //判断5分钟之内是否有多笔提交
        $firstFiveMinute = $this->firstFiveMinute();
        if ($firstFiveMinute > 0) $this->toJson([], 400, '5分钟之内请勿提交多笔借款！');

        //判断借款金额
        $amount = intval($amount);
        $amount = $amount <= 10 ? $this->toJson([], 400, '借款金额必须大于10！') : $amount;
        $amount = $amount > $userLoanInfo['allowAmount'] ? $this->toJson([], 400, '借款金额必须小于可借额度！') : $amount;

        $data['borrow_amount'] = $amount;
        $data['total_amount']  = $userLoanInfo['totalAmount'];
        $data['allow_amount']  = $userLoanInfo['allowAmount'];
        $data['add_date']      = $this->beijingDateTime;
        $data['expired_date']  = $this->returnAmounDate();
        $data['username']      = $userLoanInfo['username'];
        $data['zh_name']       = $userLoanInfo['zhName'];

        $data['week_total_money']  = $weekAndMonth['weekTotal'];
        $data['month_total_money'] = $weekAndMonth['monthTotal'];

        $data['shixun_level']  = $queryLevel['shixun_level'];
        $data['dianzi_level']  = $queryLevel['dianzi_level'];
        $data['qipai_level']   = $queryLevel['qipai_level'];
        $data['caipiao_level'] = $queryLevel['caipiao_level'];

        $data['shixun_amount']  = $queryAmount['shixunAmount'];
        $data['dianzi_amount']  = $queryAmount['dianziAmount'];
        $data['qipai_amount']   = $queryAmount['qipaiAmount'];
        $data['caipiao_amount'] = $queryAmount['caipiaoAmount'];
        $data['order_number']   = $this->order();

        if ($this->addBorrowMoneyData($data)) {
            $this->toJson([], 200, '申请借款成功！');
        }
    }

    /*
     * 字符过滤
     * */
    public function strFilter($str = '')
    {
        return stripslashes(rtrim($str));
    }

    /*
     * 表单提交
     * */
    public function toForm($url, $data)
    {
        $sHtml = "<form id='gopay' name='gopay' action='" . $url . "' method='post'>";
        while (list ($key, $val) = each($data)) {
            $sHtml .= "<input type='hidden' name='" . $key . "' value='" . $val . "'/>";
        }
        $sHtml .= "</form>";

        $sHtml .= "<script>document.forms['gopay'].submit();</script>";
        echo $sHtml;
        die;
    }

    /*
     * 生成订单号
     * */
    public function order()
    {
        return "" . date("YmdHis", time() + 3600 * 12) . rand(11111, 99999);
    }

    /*
     * curl请求
     * */
    public function toCurl($url, $data)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_COOKIEJAR, 'cookie.txt');
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_TIMEOUT, 20); //超时20秒
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $result = curl_exec($ch);
        if (!$result) {
            die('{"message":"操作超时！"}');
        }
        curl_close($ch);
        return $result;
    }

    /*
     * 余额抵扣欠款
     * */
    public function balanceReturnAmount($huankuanmoney = 0)
    {
        #还款金额
        $huankuanmoney = intval($huankuanmoney);

        if ($huankuanmoney < 1) $this->toJson([], 400, "您的还款金额不能小于1元!");

        #判断是否还有还款未审核完成的订单
        if ($this->weishenhehuankuan()) $this->toJson([], 400, "您当前还有一笔还款正在审核中!请审核完成后再来还款!");

        #用户信息
        $userInfo = $this->getUserInfo();

        #用户原始余额
        $user_before_money = intval($userInfo['money']);

        #余额是小于1时
        if ($user_before_money < 1) $this->toJson([], 400, "您的当前余额为{$userInfo['money']}元,最低还款不能小于1元,您的还款申请失败！");

        #用户余额小于欠款时,将余额全部抵扣
        if ($user_before_money <= $huankuanmoney) $huankuanmoney = $user_before_money;

        #订单号
        $orderid = $this->order();

        #添加记录到还款表,并且用户余额大于欠款时,自动还清所有欠款
        $addHuankuan = $this->addToReturnMountData($huankuanmoney, $orderid);

        if ($addHuankuan) {
            #更新用户余额
            $remark = "借呗-余额抵扣欠款";
            $updateUserMoney = $this->updateUserMoney($orderid, $user_before_money, $userInfo['uid'], $huankuanmoney,$remark);
            if ($updateUserMoney['status']=='success') {
                $biangengyue=$user_before_money-$huankuanmoney;
                $this->toJson(['msg' => "提交成功!您还款前账号余额为{$user_before_money}元,还款后的余额变更为{$biangengyue},请5分钟后在[借还记录]查看还款是否审核成功!"], 200, "");
            }
        }
    }

}