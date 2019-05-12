<?php
include '../api/header_m.php';
include($_SERVER['DOCUMENT_ROOT'] . "/../include/config.php");
$webName=$web_site['web_name'];
?>


<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title><?=$webName?> - 借呗</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=no">
    <meta name="renderer" content="webkit">
    <meta name="_token" content="">
    <meta http-equiv="x-rim-auto-match" content="none">
    <meta name=”apple-itunes-app” content=”app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL”/>
    <meta name=”HandheldFriendly” content=”true”>
    <meta name=”MobileOptimized” content=”320″>
    <meta name=”screen-orientation” content=”portrait”>
    <meta name=”x5-orientation” content=”portrait”>
    <meta name=”msapplication-tap-highlight” content=”no”>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="format-detection" content="email=no"/>
    <link rel="shortcut icon" href="/newindex/favicon.ico">
    <link type="text/css" rel="stylesheet" href="../lib/swiper/idangerous.swiper2.7.6.css?v=1.0.0">
    <link type="text/css" rel="stylesheet" href="css/init.css?v=1.0.0">
    <link type="text/css" rel="stylesheet" href="css/index.css?v=1.0.0">

    <style type="text/css" rel="stylesheet">
        <?php if (isset($isApp) && $isApp){?>
        /*html {*/
        /*position: fixed;*/
        /*top: 47px !important;*/
        /*}*/

        /*.body {*/
        /*top: 4rem !important;*/
        /*height: calc(99.99% - 4rem) !important;*/
        /*}*/

        #modal-port .modal-box {
            margin-top: 6rem;
        }

        <?php }?>
    </style>

</head>
<body style="display: none;">
<div class="page-view" id="page-view" page="index">
    <div class="header" toolbar="index">
        <div class="header-top clear-fix">
            <!--logo区域-->
            <a class="float-left img-link" href="/" target="_blank">
                <img style="margin-top: 0.41666666666rem;height: 2.66666666rem;" src="../img/logo.png?v=1.0.0"
                     alt="<?=$webName?>"/>
            </a>
            <a class="float-left img-link" href="javascript: void(0)">
                <img style="margin-top: 0.66666666rem;height: 2.08333333333rem;width: 0.1rem"
                     src="../img/header-span.png?v=1.0.0"
                     alt=""/>
            </a>
            <a class="float-left img-link" href="javascript: void(0)" nav="home">
                <img style="margin-top: 1.08333333333333rem;height: 1.3333333333rem" src="../img/header-jiebei.png?v=1.0.0"
                     alt="借呗"/>
            </a>

            <a class="float-right" href="/" nav="home">
                <img style="margin-top: 1.08333333333333rem;height: 1.333333333rem;margin-right: 1.08333333333333rem"
                     src="img/icon-home.png?v=1.0.0" alt="home"/>
            </a>
        </div>
    </div>

    <div style="display: none;" class="header toolbar" toolbar="back">
        <span id="btn-back" class="btn-back"></span>
        <span class="toolbar-title" id="toolbar-title"></span>
    </div>

    <div page="index" class="body" draggable="false">
        <div class="scroll-box">
            <!--轮播图-->
            <div id="swiper-container" class="swiper-container" draggable="false">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" draggable="false"><img draggable="false" src="img/swiper/1.jpg?v=1.0.0"
                                                                     style="width: 100%;"
                                                                     alt="swiper"></div>
                    <div class="swiper-slide" draggable="false"><img draggable="false" src="img/swiper/2.jpg?v=1.0.0"
                                                                     style="width: 100%;"
                                                                     alt="swiper"></div>
                    <div class="swiper-slide" draggable="false"><img draggable="false" src="img/swiper/3.jpg?v=1.0.0"
                                                                     style="width: 100%;"
                                                                     alt="swiper"></div>
                </div>
            </div>

            <!--通知-->
            <div class="notice animation">
                <img class="notice-icon" src="../img/icon-notice.png?v=1.0.0" alt="">
                <div class="marquee">
                    <div class="marquee-content"></div>
                </div>
            </div>

            <div class="notice huawei" style="display: block;">
                <img class="notice-icon" src="../img/icon-notice.png?v=1.0.0" alt="">
                <marquee class="marquee" scrolldelay="1" scrollamount="3">
                    <div class="marquee-content-1"></div>
                </marquee>
            </div>

            <ul class="nav clear-fix">
                <li class="float-left nav-item" nav="sx"><img src="img/icon-sx.png?v=1.0.0" alt="视讯"/><span>视讯额度</span></li>
                <li class="float-left nav-item" nav="qp"><img src="img/icon-qp.png?v=1.0.0" alt="棋牌"/><span>棋牌额度</span></li>
                <li class="float-left nav-item" nav="cp"><img src="img/icon-cp.png?v=1.0.0" alt="彩票"/><span>彩票额度</span></li>
                <li class="float-left nav-item" nav="dz"><img src="img/icon-dz.png?v=1.0.0" alt="电子"/><span>电子额度</span></li>
            </ul>

            <!-- 首页-->
            <div nav-item id="home" class="continue">
                <div class="actions">
                    <ul class="buttons clear-fix">
                        <li class="float-left">
                            <a href="javascript: void(0)" page="page-jk">
                                <img src="img/btn-jk.png?v=1.0.0" alt="我要借款"/>
                            </a>
                        </li>
                        <li class="float-left">
                            <a href="javascript: void(0)" page="page-hk">
                                <img src="img/btn-hk.png?v=1.0.0" alt="我要还款"/>
                            </a>
                        </li>
                    </ul>
                    <div class="search-box">
                        <label class="search-label">
                            <img class="search-icon" src="../img/icon-search.png?v=1.0.0" alt="搜索"/>
                            <input class="search-input" type="text" min="5" max="20" autocomplete="off"
                                   placeholder="请输入会员帐号"
                                   id="search-text">
                        </label>
                        <input type="button" class="btn btn-red" id="btn-search-text"
                               style="width: 100%;display: block;margin: 1rem auto 0 auto;" value="额度查询"/>
                    </div>
                </div>

                <ul class="main-content">
                    <li class="content-item">
                        <h4 class="content-title">活动详情</h4>
                        <p class="content-text">
                            即日起,凡是在<?=$webName?>投注真人视讯、棋牌游戏、电子游艺、彩票游戏,达到1级以上的会员,均可申请无利息借贷,0抵押,0担保！所借款的额度,直接添加至会员帐号,可直接提款.可借款总额=棋牌/电子/彩票额度+真人额度.
                        </p>
                    </li>
                    <li class="content-item">
                        <h4 class="content-title">交易规则</h4>
                        <p class="content-text">购买会员帐号后首次申请（免息借呗）申请条件为：（真人/棋牌/电子/彩票升级模式原等级基础上提升一级）即可参与！</p>
                        <p class="content-text">例如：原电子升级模式等级为3级,购买会员帐号后等级升级为4级,即可参加（免息借呗）活动哦！</p>
                    </li>
                    <li class="content-item">
                        <h4 class="content-title">信用规则</h4>
                        <ul class="content-list">
                            <li>
                                <p class="content-text">1.会员还清借款,5分钟后即可再次借款！</p>
                            </li>
                            <li>
                                <p class="content-text">2.会员借款若未还款,则无法再次进行第二次借款！</p>
                            </li>
                            <li>
                                <p class="content-text">
                                    3.会员若在借款时间内未还款,则从电子/棋牌/彩票升级模式晋级礼金、周俸禄、月俸禄和真人升级模式晋级礼金、月俸禄、返水进行扣除,直至还清为止.
                                </p>
                            </li>
                            <li>
                                <p class="content-text">4.会员在借款的时间超过60天未还款将降低一个等级.</p>
                            </li>
                            <li>
                                <p class="content-text">5.信用就是价值,价值就是金钱！未还清借款金额则无法帐号交易！</p>
                            </li>
                            <li>
                                <p class="content-text">6.可借款总额越多,会员帐号价值越高,在交易帐号买卖中,也就能卖出更高的价格！</p>
                            </li>
                            <li>
                                <p class="content-text">7.会员还款时间：还款日每月3号.例如在新的一个月的1号借款还款将于下个月3号.</p>
                            </li>
                            <li>
                                <p class="content-text">8.<?=$webName?>借呗保留最终解释权.</p>
                            </li>
                        </ul>
                    </li>
                    <li class="content-item">
                        <h4 class="content-title">借呗规则</h4>
                        <ul class="content-list">
                            <li>
                                <p class="content-text">1.借款总额=棋牌/电子/彩票额度+真人额度.</p>
                            </li>
                            <li>
                                <p class="content-text">2.视讯等级,由视讯打码决定,投注越多,等级越高.</p>
                            </li>
                            <li>
                                <p class="content-text">3.棋牌等级,由棋牌打码决定,投注越多,等级越高.</p>
                            </li>
                            <li>
                                <p class="content-text">4.电子等级,由电子打码决定,投注越多,等级越高.</p>
                            </li>
                            <li>
                                <p class="content-text">5.彩票等级,由彩票打码决定,投注越多,等级越高.</p>
                            </li>
                            <li>
                                <p class="content-text">6.真人额度,由真人等级决定,等级越高,借款额度就越高.</p>
                            </li>
                            <li>
                                <p class="content-text">7.棋牌额度,由棋牌等级决定,等级越高,借款额度就越高.</p>
                            </li>
                            <li>
                                <p class="content-text">8.电子额度,由电子等级决定,等级越高,借款额度就越高.</p>
                            </li>
                            <li>
                                <p class="content-text">9.彩票额度,由彩票等级决定,等级越高,借款额度就越高.</p>
                            </li>
                            <li>
                                <p class="content-text">10.借款额度：视讯+（棋牌/彩票/电子）取最高等级相加=借款总额.</p>
                            </li>
                            <li>
                                <p class="content-text">11.<?=$webName?>借呗保留对本活动的最终解释权,可随时在无任何告知的情况下停止该活动.</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- 视讯-->
            <div class="continue" nav-item id="sx">
                <div class="main-content">
                    <h4 class="content-title">视讯额度</h4>
                    <p class="content-text">
                        在<?=$webName?>投注的每一笔真人视讯,有效投注将永久累计！累计有效投注越多,真人等级越高,真人额度越高,可借款的额度也将越多,帐号交易价值也越高,帐号买卖估值随之提升.具体详情如下表：
                    </p>

                    <table>
                        <thead>
                        <tr>
                            <th>等级</th>
                            <th>每月俸禄</th>
                            <th>借款额度</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1 级</td>
                            <td>¥ 8 元</td>
                            <td>¥ 40 元</td>
                        </tr>
                        <tr>
                            <td>2 级</td>
                            <td>¥ 20 元</td>
                            <td>¥ 100 元</td>
                        </tr>
                        <tr>
                            <td>3 级</td>
                            <td>¥ 40 元</td>
                            <td>¥ 200 元</td>
                        </tr>
                        <tr>
                            <td>4 级</td>
                            <td>¥ 70 元</td>
                            <td>¥ 350 元</td>
                        </tr>
                        <tr>
                            <td>5 级</td>
                            <td>¥ 100 元</td>
                            <td>¥ 500 元</td>
                        </tr>
                        <tr>
                            <td>6 级</td>
                            <td>¥ 150 元</td>
                            <td>¥ 750 元</td>
                        </tr>
                        <tr>
                            <td>7 级</td>
                            <td>¥ 200 元</td>
                            <td>¥ 1000 元</td>
                        </tr>
                        <tr>
                            <td>8 级</td>
                            <td>¥ 250 元</td>
                            <td>¥ 1250 元</td>
                        </tr>
                        <tr>
                            <td>9 级</td>
                            <td>¥ 300 元</td>
                            <td>¥ 1500 元</td>
                        </tr>
                        <tr>
                            <td>10 级</td>
                            <td>¥ 400 元</td>
                            <td>¥ 2000 元</td>
                        </tr>
                        <tr>
                            <td>11 级</td>
                            <td>¥ 500 元</td>
                            <td>¥ 3000 元</td>
                        </tr>
                        <tr>
                            <td>12 级</td>
                            <td>¥ 700 元</td>
                            <td>¥ 4200 元</td>
                        </tr>
                        <tr>
                            <td>13 级</td>
                            <td>¥ 900 元</td>
                            <td>¥ 5400 元</td>
                        </tr>
                        <tr>
                            <td>14 级</td>
                            <td>¥ 1100 元</td>
                            <td>¥ 6600 元</td>
                        </tr>
                        <tr>
                            <td>15 级</td>
                            <td>¥ 1300 元</td>
                            <td>¥ 7800 元</td>
                        </tr>
                        <tr>
                            <td>16 级</td>
                            <td>¥ 1500 元</td>
                            <td>¥ 9000 元</td>
                        </tr>
                        <tr>
                            <td>17 级</td>
                            <td>¥ 1800 元</td>
                            <td>¥ 10800 元</td>
                        </tr>
                        <tr>
                            <td>18 级</td>
                            <td>¥ 2200 元</td>
                            <td>¥ 13200 元</td>
                        </tr>
                        <tr>
                            <td>19 级</td>
                            <td>¥ 2600 元</td>
                            <td>¥ 15600 元</td>
                        </tr>
                        <tr>
                            <td>20 级</td>
                            <td>¥ 3000 元</td>
                            <td>¥ 18000 元</td>
                        </tr>
                        <tr>
                            <td>21 级</td>
                            <td>¥ 3500 元</td>
                            <td>¥ 24500 元</td>
                        </tr>
                        <tr>
                            <td>22 级</td>
                            <td>¥ 4000 元</td>
                            <td>¥ 28000 元</td>
                        </tr>
                        <tr>
                            <td>23 级</td>
                            <td>¥ 4500 元</td>
                            <td>¥ 31500 元</td>
                        </tr>
                        <tr>
                            <td>24 级</td>
                            <td>¥ 5000 元</td>
                            <td>¥ 35000 元</td>
                        </tr>
                        <tr>
                            <td>25 级</td>
                            <td>¥ 6000 元</td>
                            <td>¥ 42000 元</td>
                        </tr>
                        <tr>
                            <td>26 级</td>
                            <td>¥ 7000 元</td>
                            <td>¥ 49000 元</td>
                        </tr>
                        <tr>
                            <td>27 级</td>
                            <td>¥ 10000 元</td>
                            <td>¥ 70000 元</td>
                        </tr>
                        <tr>
                            <td>28 级</td>
                            <td>¥ 20000 元</td>
                            <td>¥ 140000 元</td>
                        </tr>
                        <tr>
                            <td>29 级</td>
                            <td>¥ 50000 元</td>
                            <td>¥ 350000 元</td>
                        </tr>
                        <tr>
                            <td>30 级</td>
                            <td>¥ 80000 元</td>
                            <td>¥ 560000 元</td>
                        </tr>
                        </tbody>
                    </table>

                    <p class="content-text" style="color: #a88052;">注：有借有还再借不难哦~信用=金钱</p>
                </div>
            </div>

            <!-- 棋牌-->
            <div class="continue" nav-item id="qp">
                <div class="main-content">
                    <h4 class="content-title">棋牌额度</h4>
                    <p class="content-text">
                        在<?=$webName?>投注的每一笔棋牌游戏,有效投注将永久累计！累计有效投注越多,等级越高,棋牌额度越高,可借款的额度也将越多,帐号交易价值也越高,帐号买卖估值随之提升.具体详情如下表：
                    </p>

                    <table>
                        <thead>
                        <tr>
                            <th>等级</th>
                            <th>周俸禄</th>
                            <th>月俸禄</th>
                            <th>借款额度</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1 级</td>
                            <td>¥ 0 元</td>
                            <td>¥ 5 元</td>
                            <td>¥ 25 元</td>
                        </tr>
                        <tr>
                            <td>2 级</td>
                            <td>¥ 0 元</td>
                            <td>¥ 10 元</td>
                            <td>¥ 50 元</td>
                        </tr>
                        <tr>
                            <td>3 级</td>
                            <td>¥ 3 元</td>
                            <td>¥ 20 元</td>
                            <td>¥ 115 元</td>
                        </tr>
                        <tr>
                            <td>4 级</td>
                            <td>¥ 5 元</td>
                            <td>¥ 50 元</td>
                            <td>¥ 275 元</td>
                        </tr>
                        <tr>
                            <td>5 级</td>
                            <td>¥ 10 元</td>
                            <td>¥ 100 元</td>
                            <td>¥ 550 元</td>
                        </tr>
                        <tr>
                            <td>6 级</td>
                            <td>¥ 20 元</td>
                            <td>¥ 200 元</td>
                            <td>¥ 1100 元</td>
                        </tr>
                        <tr>
                            <td>7 级</td>
                            <td>¥ 35 元</td>
                            <td>¥ 300 元</td>
                            <td>¥ 1675 元</td>
                        </tr>
                        <tr>
                            <td>8 级</td>
                            <td>¥ 50 元</td>
                            <td>¥ 400 元</td>
                            <td>¥ 2250 元</td>
                        </tr>
                        <tr>
                            <td>9 级</td>
                            <td>¥ 80 元</td>
                            <td>¥ 500 元</td>
                            <td>¥ 2900 元</td>
                        </tr>
                        <tr>
                            <td>10 级</td>
                            <td>¥ 100 元</td>
                            <td>¥ 600 元</td>
                            <td>¥ 3500 元</td>
                        </tr>
                        <tr>
                            <td>11 级</td>
                            <td>¥ 120 元</td>
                            <td>¥ 800 元</td>
                            <td>¥ 5520 元</td>
                        </tr>
                        <tr>
                            <td>12 级</td>
                            <td>¥ 150 元</td>
                            <td>¥ 1000 元</td>
                            <td>¥ 6900 元</td>
                        </tr>
                        <tr>
                            <td>13 级</td>
                            <td>¥ 180 元</td>
                            <td>¥ 1200 元</td>
                            <td>¥ 8280 元</td>
                        </tr>
                        <tr>
                            <td>14 级</td>
                            <td>¥ 220 元</td>
                            <td>¥ 1400 元</td>
                            <td>¥ 9720 元</td>
                        </tr>
                        <tr>
                            <td>15 级</td>
                            <td>¥ 260 元</td>
                            <td>¥ 1600 元</td>
                            <td>¥ 11160 元</td>
                        </tr>
                        <tr>
                            <td>16 级</td>
                            <td>¥ 300 元</td>
                            <td>¥ 1800 元</td>
                            <td>¥ 12600 元</td>
                        </tr>
                        <tr>
                            <td>17 级</td>
                            <td>¥ 400 元</td>
                            <td>¥ 2100 元</td>
                            <td>¥ 15000 元</td>
                        </tr>
                        <tr>
                            <td>18 级</td>
                            <td>¥ 500 元</td>
                            <td>¥ 2400 元</td>
                            <td>¥ 15000 元</td>
                        </tr>
                        <tr>
                            <td>19 级</td>
                            <td>¥ 600 元</td>
                            <td>¥ 2700 元</td>
                            <td>¥ 17400 元</td>
                        </tr>
                        <tr>
                            <td>20 级</td>
                            <td>¥ 700 元</td>
                            <td>¥ 3000 元</td>
                            <td>¥ 19800 元</td>
                        </tr>
                        <tr>
                            <td>21 级</td>
                            <td>¥ 800 元</td>
                            <td>¥ 3500 元</td>
                            <td>¥ 22200 元</td>
                        </tr>
                        <tr>
                            <td>22 级</td>
                            <td>¥ 900 元</td>
                            <td>¥ 4000 元</td>
                            <td>¥ 30100 元</td>
                        </tr>
                        <tr>
                            <td>23 级</td>
                            <td>¥ 1000 元</td>
                            <td>¥ 4500 元</td>
                            <td>¥ 34300 元</td>
                        </tr>
                        <tr>
                            <td>24 级</td>
                            <td>¥ 1100 元</td>
                            <td>¥ 5000 元</td>
                            <td>¥ 38500 元</td>
                        </tr>
                        <tr>
                            <td>25 级</td>
                            <td>¥ 1200 元</td>
                            <td>¥ 5500 元</td>
                            <td>¥ 42700 元</td>
                        </tr>
                        <tr>
                            <td>26 级</td>
                            <td>¥ 1300 元</td>
                            <td>¥ 6000 元</td>
                            <td>¥ 46900 元</td>
                        </tr>
                        <tr>
                            <td>27 级</td>
                            <td>¥ 1500 元</td>
                            <td>¥ 7000 元</td>
                            <td>¥ 51100 元</td>
                        </tr>
                        <tr>
                            <td>28 级</td>
                            <td>¥ 1700 元</td>
                            <td>¥ 8000 元</td>
                            <td>¥ 59500 元</td>
                        </tr>
                        <tr>
                            <td>29 级</td>
                            <td>¥ 1900 元</td>
                            <td>¥ 9000 元</td>
                            <td>¥ 67900 元</td>
                        </tr>
                        <tr>
                            <td>30 级</td>
                            <td>¥ 2100 元</td>
                            <td>¥ 10000 元</td>
                            <td>¥ 76300 元</td>
                        </tr>
                        <tr>
                            <td>31 级</td>
                            <td>¥ 2300 元</td>
                            <td>¥ 11000 元</td>
                            <td>¥ 96800 元</td>
                        </tr>
                        <tr>
                            <td>32 级</td>
                            <td>¥ 2500 元</td>
                            <td>¥ 12000 元</td>
                            <td>¥ 106400 元</td>
                        </tr>
                        <tr>
                            <td>33 级</td>
                            <td>¥ 3000 元</td>
                            <td>¥ 14000 元</td>
                            <td>¥ 116000 元</td>
                        </tr>
                        <tr>
                            <td>34 级</td>
                            <td>¥ 3500 元</td>
                            <td>¥ 16000 元</td>
                            <td>¥ 136000 元</td>
                        </tr>
                        <tr>
                            <td>35 级</td>
                            <td>¥ 4000 元</td>
                            <td>¥ 18000 元</td>
                            <td>¥ 156000 元</td>
                        </tr>
                        <tr>
                            <td>36 级</td>
                            <td>¥ 4500 元</td>
                            <td>¥ 20000 元</td>
                            <td>¥ 176000 元</td>
                        </tr>
                        <tr>
                            <td>37 级</td>
                            <td>¥ 5200 元</td>
                            <td>¥ 23000 元</td>
                            <td>¥ 196000 元</td>
                        </tr>
                        <tr>
                            <td>38 级</td>
                            <td>¥ 6000 元</td>
                            <td>¥ 26000 元</td>
                            <td>¥ 225600 元</td>
                        </tr>
                        <tr>
                            <td>39 级</td>
                            <td>¥ 6800 元</td>
                            <td>¥ 29000 元</td>
                            <td>¥ 286400 元</td>
                        </tr>
                        <tr>
                            <td>40 级</td>
                            <td>¥ 7600 元</td>
                            <td>¥ 32000 元</td>
                            <td>¥ 316800 元</td>
                        </tr>
                        <tr>
                            <td>41 级</td>
                            <td>¥ 8400 元</td>
                            <td>¥ 35000 元</td>
                            <td>¥ 347200 元</td>
                        </tr>
                        <tr>
                            <td>42 级</td>
                            <td>¥ 9500 元</td>
                            <td>¥ 40000 元</td>
                            <td>¥ 396000 元</td>
                        </tr>
                        <tr>
                            <td>43 级</td>
                            <td>¥ 10800 元</td>
                            <td>¥ 45000 元</td>
                            <td>¥ 446400 元</td>
                        </tr>
                        <tr>
                            <td>44 级</td>
                            <td>¥ 12000 元</td>
                            <td>¥ 50000 元</td>
                            <td>¥ 496000 元</td>
                        </tr>
                        <tr>
                            <td>45 级</td>
                            <td>¥ 13500 元</td>
                            <td>¥ 55000 元</td>
                            <td>¥ 548000 元</td>
                        </tr>
                        <tr>
                            <td>46 级</td>
                            <td>¥ 15000 元</td>
                            <td>¥ 60000 元</td>
                            <td>¥ 600000 元</td>
                        </tr>
                        <tr>
                            <td>47 级</td>
                            <td>¥ 17500 元</td>
                            <td>¥ 70000 元</td>
                            <td>¥ 700000 元</td>
                        </tr>
                        <tr>
                            <td>48 级</td>
                            <td>¥ 20000 元</td>
                            <td>¥ 80000 元</td>
                            <td>¥ 800000 元</td>
                        </tr>
                        <tr>
                            <td>49 级</td>
                            <td>¥ 22500 元</td>
                            <td>¥ 90000 元</td>
                            <td>¥ 900000 元</td>
                        </tr>
                        <tr>
                            <td>50 级</td>
                            <td>¥ 25000 元</td>
                            <td>¥ 100000 元</td>
                            <td>¥ 1000000 元</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 彩票-->
            <div class="continue" nav-item id="cp">
                <div class="main-content">
                    <h4 class="content-title">彩票额度</h4>
                    <p class="content-text">
                        在<?=$webName?>投注的每一笔彩票游戏,有效投注将永久累计！累计有效投注越多,等级越高,彩票额度越高,可借款的额度也将越多,帐号交易价值也越高,帐号买卖估值随之提升.具体详情如下表：
                    </p>

                    <table>
                        <thead>
                        <tr>
                            <th>等级</th>
                            <th>周俸禄</th>
                            <th>月俸禄</th>
                            <th>借款额度</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1 级</td>
                            <td>¥ 0 元</td>
                            <td>¥ 5 元</td>
                            <td>¥ 25 元</td>
                        </tr>
                        <tr>
                            <td>2 级</td>
                            <td>¥ 0 元</td>
                            <td>¥ 10 元</td>
                            <td>¥ 50 元</td>
                        </tr>
                        <tr>
                            <td>3 级</td>
                            <td>¥ 3 元</td>
                            <td>¥ 20 元</td>
                            <td>¥ 115 元</td>
                        </tr>
                        <tr>
                            <td>4 级</td>
                            <td>¥ 5 元</td>
                            <td>¥ 50 元</td>
                            <td>¥ 275 元</td>
                        </tr>
                        <tr>
                            <td>5 级</td>
                            <td>¥ 10 元</td>
                            <td>¥ 100 元</td>
                            <td>¥ 550 元</td>
                        </tr>
                        <tr>
                            <td>6 级</td>
                            <td>¥ 20 元</td>
                            <td>¥ 200 元</td>
                            <td>¥ 1100 元</td>
                        </tr>
                        <tr>
                            <td>7 级</td>
                            <td>¥ 35 元</td>
                            <td>¥ 300 元</td>
                            <td>¥ 1675 元</td>
                        </tr>
                        <tr>
                            <td>8 级</td>
                            <td>¥ 50 元</td>
                            <td>¥ 400 元</td>
                            <td>¥ 2250 元</td>
                        </tr>
                        <tr>
                            <td>9 级</td>
                            <td>¥ 80 元</td>
                            <td>¥ 500 元</td>
                            <td>¥ 2900 元</td>
                        </tr>
                        <tr>
                            <td>10 级</td>
                            <td>¥ 100 元</td>
                            <td>¥ 600 元</td>
                            <td>¥ 3500 元</td>
                        </tr>
                        <tr>
                            <td>11 级</td>
                            <td>¥ 120 元</td>
                            <td>¥ 800 元</td>
                            <td>¥ 5520 元</td>
                        </tr>
                        <tr>
                            <td>12 级</td>
                            <td>¥ 150 元</td>
                            <td>¥ 1000 元</td>
                            <td>¥ 6900 元</td>
                        </tr>
                        <tr>
                            <td>13 级</td>
                            <td>¥ 180 元</td>
                            <td>¥ 1200 元</td>
                            <td>¥ 8280 元</td>
                        </tr>
                        <tr>
                            <td>14 级</td>
                            <td>¥ 220 元</td>
                            <td>¥ 1400 元</td>
                            <td>¥ 9720 元</td>
                        </tr>
                        <tr>
                            <td>15 级</td>
                            <td>¥ 260 元</td>
                            <td>¥ 1600 元</td>
                            <td>¥ 11160 元</td>
                        </tr>
                        <tr>
                            <td>16 级</td>
                            <td>¥ 300 元</td>
                            <td>¥ 1800 元</td>
                            <td>¥ 12600 元</td>
                        </tr>
                        <tr>
                            <td>17 级</td>
                            <td>¥ 400 元</td>
                            <td>¥ 2100 元</td>
                            <td>¥ 15000 元</td>
                        </tr>
                        <tr>
                            <td>18 级</td>
                            <td>¥ 500 元</td>
                            <td>¥ 2400 元</td>
                            <td>¥ 15000 元</td>
                        </tr>
                        <tr>
                            <td>19 级</td>
                            <td>¥ 600 元</td>
                            <td>¥ 2700 元</td>
                            <td>¥ 17400 元</td>
                        </tr>
                        <tr>
                            <td>20 级</td>
                            <td>¥ 700 元</td>
                            <td>¥ 3000 元</td>
                            <td>¥ 19800 元</td>
                        </tr>
                        <tr>
                            <td>21 级</td>
                            <td>¥ 800 元</td>
                            <td>¥ 3500 元</td>
                            <td>¥ 22200 元</td>
                        </tr>
                        <tr>
                            <td>22 级</td>
                            <td>¥ 900 元</td>
                            <td>¥ 4000 元</td>
                            <td>¥ 30100 元</td>
                        </tr>
                        <tr>
                            <td>23 级</td>
                            <td>¥ 1000 元</td>
                            <td>¥ 4500 元</td>
                            <td>¥ 34300 元</td>
                        </tr>
                        <tr>
                            <td>24 级</td>
                            <td>¥ 1100 元</td>
                            <td>¥ 5000 元</td>
                            <td>¥ 38500 元</td>
                        </tr>
                        <tr>
                            <td>25 级</td>
                            <td>¥ 1200 元</td>
                            <td>¥ 5500 元</td>
                            <td>¥ 42700 元</td>
                        </tr>
                        <tr>
                            <td>26 级</td>
                            <td>¥ 1300 元</td>
                            <td>¥ 6000 元</td>
                            <td>¥ 46900 元</td>
                        </tr>
                        <tr>
                            <td>27 级</td>
                            <td>¥ 1500 元</td>
                            <td>¥ 7000 元</td>
                            <td>¥ 51100 元</td>
                        </tr>
                        <tr>
                            <td>28 级</td>
                            <td>¥ 1700 元</td>
                            <td>¥ 8000 元</td>
                            <td>¥ 59500 元</td>
                        </tr>
                        <tr>
                            <td>29 级</td>
                            <td>¥ 1900 元</td>
                            <td>¥ 9000 元</td>
                            <td>¥ 67900 元</td>
                        </tr>
                        <tr>
                            <td>30 级</td>
                            <td>¥ 2100 元</td>
                            <td>¥ 10000 元</td>
                            <td>¥ 76300 元</td>
                        </tr>
                        <tr>
                            <td>31 级</td>
                            <td>¥ 2300 元</td>
                            <td>¥ 11000 元</td>
                            <td>¥ 96800 元</td>
                        </tr>
                        <tr>
                            <td>32 级</td>
                            <td>¥ 2500 元</td>
                            <td>¥ 12000 元</td>
                            <td>¥ 106400 元</td>
                        </tr>
                        <tr>
                            <td>33 级</td>
                            <td>¥ 3000 元</td>
                            <td>¥ 14000 元</td>
                            <td>¥ 116000 元</td>
                        </tr>
                        <tr>
                            <td>34 级</td>
                            <td>¥ 3500 元</td>
                            <td>¥ 16000 元</td>
                            <td>¥ 136000 元</td>
                        </tr>
                        <tr>
                            <td>35 级</td>
                            <td>¥ 4000 元</td>
                            <td>¥ 18000 元</td>
                            <td>¥ 156000 元</td>
                        </tr>
                        <tr>
                            <td>36 级</td>
                            <td>¥ 4500 元</td>
                            <td>¥ 20000 元</td>
                            <td>¥ 176000 元</td>
                        </tr>
                        <tr>
                            <td>37 级</td>
                            <td>¥ 5200 元</td>
                            <td>¥ 23000 元</td>
                            <td>¥ 196000 元</td>
                        </tr>
                        <tr>
                            <td>38 级</td>
                            <td>¥ 6000 元</td>
                            <td>¥ 26000 元</td>
                            <td>¥ 225600 元</td>
                        </tr>
                        <tr>
                            <td>39 级</td>
                            <td>¥ 6800 元</td>
                            <td>¥ 29000 元</td>
                            <td>¥ 286400 元</td>
                        </tr>
                        <tr>
                            <td>40 级</td>
                            <td>¥ 7600 元</td>
                            <td>¥ 32000 元</td>
                            <td>¥ 316800 元</td>
                        </tr>
                        <tr>
                            <td>41 级</td>
                            <td>¥ 8400 元</td>
                            <td>¥ 35000 元</td>
                            <td>¥ 347200 元</td>
                        </tr>
                        <tr>
                            <td>42 级</td>
                            <td>¥ 9500 元</td>
                            <td>¥ 40000 元</td>
                            <td>¥ 396000 元</td>
                        </tr>
                        <tr>
                            <td>43 级</td>
                            <td>¥ 10800 元</td>
                            <td>¥ 45000 元</td>
                            <td>¥ 446400 元</td>
                        </tr>
                        <tr>
                            <td>44 级</td>
                            <td>¥ 12000 元</td>
                            <td>¥ 50000 元</td>
                            <td>¥ 496000 元</td>
                        </tr>
                        <tr>
                            <td>45 级</td>
                            <td>¥ 13500 元</td>
                            <td>¥ 55000 元</td>
                            <td>¥ 548000 元</td>
                        </tr>
                        <tr>
                            <td>46 级</td>
                            <td>¥ 15000 元</td>
                            <td>¥ 60000 元</td>
                            <td>¥ 600000 元</td>
                        </tr>
                        <tr>
                            <td>47 级</td>
                            <td>¥ 17500 元</td>
                            <td>¥ 70000 元</td>
                            <td>¥ 700000 元</td>
                        </tr>
                        <tr>
                            <td>48 级</td>
                            <td>¥ 20000 元</td>
                            <td>¥ 80000 元</td>
                            <td>¥ 800000 元</td>
                        </tr>
                        <tr>
                            <td>49 级</td>
                            <td>¥ 22500 元</td>
                            <td>¥ 90000 元</td>
                            <td>¥ 900000 元</td>
                        </tr>
                        <tr>
                            <td>50 级</td>
                            <td>¥ 25000 元</td>
                            <td>¥ 100000 元</td>
                            <td>¥ 1000000 元</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 电子-->
            <div class="continue" nav-item id="dz">
                <div class="main-content">
                    <h4 class="content-title">电子额度</h4>
                    <p class="content-text">
                        在<?=$webName?>投注的每一笔电子游戏,有效投注将永久累计！累计有效投注越多,等级越高,电子额度越高,可借款的额度也将越多,帐号交易价值也越高,帐号买卖估值随之提升.具体详情如下表：
                    </p>

                    <table>
                        <thead>
                        <tr>
                            <th>等级</th>
                            <th>周俸禄</th>
                            <th>月俸禄</th>
                            <th>借款额度</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1 级</td>
                            <td>¥ 0 元</td>
                            <td>¥ 5 元</td>
                            <td>¥ 25 元</td>
                        </tr>
                        <tr>
                            <td>2 级</td>
                            <td>¥ 0 元</td>
                            <td>¥ 10 元</td>
                            <td>¥ 50 元</td>
                        </tr>
                        <tr>
                            <td>3 级</td>
                            <td>¥ 3 元</td>
                            <td>¥ 20 元</td>
                            <td>¥ 115 元</td>
                        </tr>
                        <tr>
                            <td>4 级</td>
                            <td>¥ 5 元</td>
                            <td>¥ 50 元</td>
                            <td>¥ 275 元</td>
                        </tr>
                        <tr>
                            <td>5 级</td>
                            <td>¥ 10 元</td>
                            <td>¥ 100 元</td>
                            <td>¥ 550 元</td>
                        </tr>
                        <tr>
                            <td>6 级</td>
                            <td>¥ 20 元</td>
                            <td>¥ 200 元</td>
                            <td>¥ 1100 元</td>
                        </tr>
                        <tr>
                            <td>7 级</td>
                            <td>¥ 35 元</td>
                            <td>¥ 300 元</td>
                            <td>¥ 1675 元</td>
                        </tr>
                        <tr>
                            <td>8 级</td>
                            <td>¥ 50 元</td>
                            <td>¥ 400 元</td>
                            <td>¥ 2250 元</td>
                        </tr>
                        <tr>
                            <td>9 级</td>
                            <td>¥ 80 元</td>
                            <td>¥ 500 元</td>
                            <td>¥ 2900 元</td>
                        </tr>
                        <tr>
                            <td>10 级</td>
                            <td>¥ 100 元</td>
                            <td>¥ 600 元</td>
                            <td>¥ 3500 元</td>
                        </tr>
                        <tr>
                            <td>11 级</td>
                            <td>¥ 120 元</td>
                            <td>¥ 800 元</td>
                            <td>¥ 5520 元</td>
                        </tr>
                        <tr>
                            <td>12 级</td>
                            <td>¥ 150 元</td>
                            <td>¥ 1000 元</td>
                            <td>¥ 6900 元</td>
                        </tr>
                        <tr>
                            <td>13 级</td>
                            <td>¥ 180 元</td>
                            <td>¥ 1200 元</td>
                            <td>¥ 8280 元</td>
                        </tr>
                        <tr>
                            <td>14 级</td>
                            <td>¥ 220 元</td>
                            <td>¥ 1400 元</td>
                            <td>¥ 9720 元</td>
                        </tr>
                        <tr>
                            <td>15 级</td>
                            <td>¥ 260 元</td>
                            <td>¥ 1600 元</td>
                            <td>¥ 11160 元</td>
                        </tr>
                        <tr>
                            <td>16 级</td>
                            <td>¥ 300 元</td>
                            <td>¥ 1800 元</td>
                            <td>¥ 12600 元</td>
                        </tr>
                        <tr>
                            <td>17 级</td>
                            <td>¥ 400 元</td>
                            <td>¥ 2100 元</td>
                            <td>¥ 15000 元</td>
                        </tr>
                        <tr>
                            <td>18 级</td>
                            <td>¥ 500 元</td>
                            <td>¥ 2400 元</td>
                            <td>¥ 15000 元</td>
                        </tr>
                        <tr>
                            <td>19 级</td>
                            <td>¥ 600 元</td>
                            <td>¥ 2700 元</td>
                            <td>¥ 17400 元</td>
                        </tr>
                        <tr>
                            <td>20 级</td>
                            <td>¥ 700 元</td>
                            <td>¥ 3000 元</td>
                            <td>¥ 19800 元</td>
                        </tr>
                        <tr>
                            <td>21 级</td>
                            <td>¥ 800 元</td>
                            <td>¥ 3500 元</td>
                            <td>¥ 22200 元</td>
                        </tr>
                        <tr>
                            <td>22 级</td>
                            <td>¥ 900 元</td>
                            <td>¥ 4000 元</td>
                            <td>¥ 30100 元</td>
                        </tr>
                        <tr>
                            <td>23 级</td>
                            <td>¥ 1000 元</td>
                            <td>¥ 4500 元</td>
                            <td>¥ 34300 元</td>
                        </tr>
                        <tr>
                            <td>24 级</td>
                            <td>¥ 1100 元</td>
                            <td>¥ 5000 元</td>
                            <td>¥ 38500 元</td>
                        </tr>
                        <tr>
                            <td>25 级</td>
                            <td>¥ 1200 元</td>
                            <td>¥ 5500 元</td>
                            <td>¥ 42700 元</td>
                        </tr>
                        <tr>
                            <td>26 级</td>
                            <td>¥ 1300 元</td>
                            <td>¥ 6000 元</td>
                            <td>¥ 46900 元</td>
                        </tr>
                        <tr>
                            <td>27 级</td>
                            <td>¥ 1500 元</td>
                            <td>¥ 7000 元</td>
                            <td>¥ 51100 元</td>
                        </tr>
                        <tr>
                            <td>28 级</td>
                            <td>¥ 1700 元</td>
                            <td>¥ 8000 元</td>
                            <td>¥ 59500 元</td>
                        </tr>
                        <tr>
                            <td>29 级</td>
                            <td>¥ 1900 元</td>
                            <td>¥ 9000 元</td>
                            <td>¥ 67900 元</td>
                        </tr>
                        <tr>
                            <td>30 级</td>
                            <td>¥ 2100 元</td>
                            <td>¥ 10000 元</td>
                            <td>¥ 76300 元</td>
                        </tr>
                        <tr>
                            <td>31 级</td>
                            <td>¥ 2300 元</td>
                            <td>¥ 11000 元</td>
                            <td>¥ 96800 元</td>
                        </tr>
                        <tr>
                            <td>32 级</td>
                            <td>¥ 2500 元</td>
                            <td>¥ 12000 元</td>
                            <td>¥ 106400 元</td>
                        </tr>
                        <tr>
                            <td>33 级</td>
                            <td>¥ 3000 元</td>
                            <td>¥ 14000 元</td>
                            <td>¥ 116000 元</td>
                        </tr>
                        <tr>
                            <td>34 级</td>
                            <td>¥ 3500 元</td>
                            <td>¥ 16000 元</td>
                            <td>¥ 136000 元</td>
                        </tr>
                        <tr>
                            <td>35 级</td>
                            <td>¥ 4000 元</td>
                            <td>¥ 18000 元</td>
                            <td>¥ 156000 元</td>
                        </tr>
                        <tr>
                            <td>36 级</td>
                            <td>¥ 4500 元</td>
                            <td>¥ 20000 元</td>
                            <td>¥ 176000 元</td>
                        </tr>
                        <tr>
                            <td>37 级</td>
                            <td>¥ 5200 元</td>
                            <td>¥ 23000 元</td>
                            <td>¥ 196000 元</td>
                        </tr>
                        <tr>
                            <td>38 级</td>
                            <td>¥ 6000 元</td>
                            <td>¥ 26000 元</td>
                            <td>¥ 225600 元</td>
                        </tr>
                        <tr>
                            <td>39 级</td>
                            <td>¥ 6800 元</td>
                            <td>¥ 29000 元</td>
                            <td>¥ 286400 元</td>
                        </tr>
                        <tr>
                            <td>40 级</td>
                            <td>¥ 7600 元</td>
                            <td>¥ 32000 元</td>
                            <td>¥ 316800 元</td>
                        </tr>
                        <tr>
                            <td>41 级</td>
                            <td>¥ 8400 元</td>
                            <td>¥ 35000 元</td>
                            <td>¥ 347200 元</td>
                        </tr>
                        <tr>
                            <td>42 级</td>
                            <td>¥ 9500 元</td>
                            <td>¥ 40000 元</td>
                            <td>¥ 396000 元</td>
                        </tr>
                        <tr>
                            <td>43 级</td>
                            <td>¥ 10800 元</td>
                            <td>¥ 45000 元</td>
                            <td>¥ 446400 元</td>
                        </tr>
                        <tr>
                            <td>44 级</td>
                            <td>¥ 12000 元</td>
                            <td>¥ 50000 元</td>
                            <td>¥ 496000 元</td>
                        </tr>
                        <tr>
                            <td>45 级</td>
                            <td>¥ 13500 元</td>
                            <td>¥ 55000 元</td>
                            <td>¥ 548000 元</td>
                        </tr>
                        <tr>
                            <td>46 级</td>
                            <td>¥ 15000 元</td>
                            <td>¥ 60000 元</td>
                            <td>¥ 600000 元</td>
                        </tr>
                        <tr>
                            <td>47 级</td>
                            <td>¥ 17500 元</td>
                            <td>¥ 70000 元</td>
                            <td>¥ 700000 元</td>
                        </tr>
                        <tr>
                            <td>48 级</td>
                            <td>¥ 20000 元</td>
                            <td>¥ 80000 元</td>
                            <td>¥ 800000 元</td>
                        </tr>
                        <tr>
                            <td>49 级</td>
                            <td>¥ 22500 元</td>
                            <td>¥ 90000 元</td>
                            <td>¥ 900000 元</td>
                        </tr>
                        <tr>
                            <td>50 级</td>
                            <td>¥ 25000 元</td>
                            <td>¥ 100000 元</td>
                            <td>¥ 1000000 元</td>
                        </tr>
                        </tbody>

                    </table>
                </div>
            </div>

            <!-- 记录-->
            <div class="continue" nav-item id="jl">
                <div class="actions">
                    <ul class="buttons clear-fix">
                        <li class="float-left">
                            <a href="javascript: void(0)" page="page-jk" back="jl">
                                <img src="img/btn-jk.png?v=1.0.0" alt="我要借款"/>
                            </a>
                        </li>
                        <li class="float-left">
                            <a href="javascript: void(0)" page="page-hk" back="jl">
                                <img src="img/btn-hk.png?v=1.0.0" alt="我要还款"/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="main-content">
                    <!--<h4 class="content-title">视讯额度</h4>-->
                    <p class="content-text">
                        <?=$webName?>借呗每一笔借还款记录将永久记录，真人等级和棋牌/电子等级越高，可借款总额度就越高
                    </p>

                    <table style="width: 100%">
                        <thead>
                        <tr>
                            <th>帐号</th>
                            <!--<th>姓名</th>-->
                            <th>借款</th>
                            <th>已还款</th>
                            <th>未还款</th>
                            <th>状态</th>
                            <!--<th>日期</th>-->
                        </tr>
                        </thead>
                        <tbody id="tbody">

                        </tbody>
                    </table>

                    <div style="margin: 1rem auto;display: flex">
                        <ul class="float-left" id="nav-tab" style="margin: 0 auto;flex: 1"></ul>
                        <label style="font-size: 1rem;line-height: 2rem;">
                            <span>条数/页:</span>
                            <select class="select" id="limits">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </label>
                    </div>

                    <p class="content-text" style="color: #a88052;">注：有借有还再借不难哦~信用=金钱</p>
                </div>
            </div>
        </div>
    </div>

    <div style="display: none;" page="back" class="body">
        <div class="scroll-box">
            <!-- 额度-->
            <div class="form-continue" back-item="page-ed">
                <form class="form" style="padding-top: 1rem">
                    <label style="" class="form-row">
                        <span class="form-label">会员帐号:</span>
                        <input class="form-input" type="text" name="user" id="ed-user" value="" disabled/>
                    </label>
                    <label class="form-row">
                        <span class="form-label">视讯额度:</span>
                        <input class="form-input" type="text" name="sx" id="ed-sx" value="" disabled/>
                    </label>
                    <label class="form-row">
                        <span class="form-label">棋牌额度:</span>
                        <input class="form-input" type="text" name="sx" id="ed-qp" value="" disabled/>
                    </label>
                    <label class="form-row">
                        <span class="form-label">彩票额度:</span>
                        <input class="form-input" type="text" name="sx" id="ed-cp" value="" disabled/>
                    </label>
                    <label class="form-row">
                        <span class="form-label">电子额度:</span>
                        <input class="form-input" type="text" name="sx" id="ed-dz" value="" disabled/>
                    </label>
                    <label class="form-row">
                        <span class="form-label">　总额度:</span>
                        <input class="form-input" type="text" name="zed" id="ed-zed" value="" disabled/>
                    </label>
                    <div>
                        <p style="color: red;font-size: 1rem;text-align: center;">借款额度：视讯+（棋牌/彩票/电子）取最高等级相加=借款总额</p>
                    </div>
                </form>
            </div>
            <!-- 还款-->
            <div class="form-continue" back-item="page-hk">
                <form class="form" id="hk-form">
                    <label class="form-row">
                        <span class="form-label">会员帐号:</span>
                        <input class="form-input" type="text" name="user" id="hk-user" value="" disabled/>
                    </label>
                    <label class="form-row">
                        <span class="form-label">会员姓名:</span>
                        <input class="form-input" type="text" name="name" id="hk-name" value="" disabled/>
                    </label>
                    <label class="form-row">
                        <span class="form-label">欠款额度:</span>
                        <input class="form-input" type="number" name="qk" id="hk-qk" value="" disabled/>
                    </label>
                    <label class="form-row">
                        <span class="form-label">还款金额:</span>
                        <input class="form-input" type="number" name="amount" min="0" id="hk-amount" value=""/>
                    </label>
                    <input type="submit" value="立即还款" id="hk-submit" class="btn btn-red"/>
                    <p class="info" style="font-size: 1.1rem;">注意:提交还款成功,请到借还款记录查询是否还款成功!</p>
                </form>
            </div>
            <!-- 借款-->
            <div class="form-continue" back-item="page-jk">
                <form class="form" id="jk-form">
                    <label class="form-row">
                        <span class="form-label">会员帐号:</span>
                        <input class="form-input" type="text" name="user" id="jk-user" value="" disabled/>
                    </label>
                    <label class="form-row">
                        <span class="form-label">会员姓名:</span>
                        <input class="form-input" type="text" name="name" id="jk-name" value="" disabled/>
                    </label>
                    <label class="form-row">
                        <span class="form-label">总额度(元):</span>
                        <input class="form-input" type="number" name="zye" id="jk-zye" value="" disabled/>
                    </label>
                    <label class="form-row">
                        <span class="form-label">已使用(元):</span>
                        <input class="form-input" type="number" name="ysy" id="jk-ysy" value="" disabled/>
                    </label>
                    <label class="form-row">
                        <span class="form-label">可用额度:</span>
                        <input class="form-input" type="number" name="ky" id="jk-ky" value="" disabled/>
                    </label>
                    <label class="form-row" style="padding-right: 2px">
                        <span class="form-label">借款金额:</span>
                        <input class="form-input" type="number" name="jk" id="jk-jk" value="" min="1" placeholder="请填写金额"/>
                    </label>
                    <label class="form-row">
                        <span class="form-label">还款日期:</span>
                        <input class="form-input" type="text" name="date" id="jk-date" value="" disabled/>
                    </label>
                    <label class="form-tk" style="font-size: 1.2rem;">
                        <input type="checkbox" name="tk" id="jk-tk" checked/>
                        <span class="checkbox-ico"></span>
                        <span>我已认真阅读并同意<span style="color: #f52727;">《借呗规则》</span></span>
                    </label>
                    <input type="button" value="确认提交" id="jk-submit" class="btn btn-red"/>
                    <p class="info" style="font-size: 1.1rem">注意：提交成功5分钟后请到“额度查询”是否借款成功！</p>
                </form>
            </div>
            <!-- 支付-->
            <div class="form-continue" back-item="page-zf">
                <form class="form clear-fix" method="post" target="_blank" id="zf-form">
                    <input type="hidden" name="id" value=""/>
                    <input type="hidden" name="username" value=""/>
                    <div style="display: none" id="bank-form-box"></div>
                    <label class="form-row money-input float-left">
                        <span class="prefix">¥</span>
                        <input class="form-input" id="amount" name="amount" type="number" min="0" placeholder="请填写金额"/>
                    </label>

                    <label class="radio-card float-left">
                        <input class="hidden-input" type="radio" name="zf-money-item" value="100">
                        <span class="card">100元</span>
                    </label>
                    <label class="radio-card float-left">
                        <input class="hidden-input" type="radio" name="zf-money-item" value="500">
                        <span class="card">500元</span>
                    </label>
                    <label class="radio-card float-left">
                        <input class="hidden-input" type="radio" name="zf-money-item" value="1000">
                        <span class="card">1000元</span>
                    </label>
                    <label class="radio-card float-left">
                        <input class="hidden-input" type="radio" name="zf-money-item" value="5000">
                        <span class="card">5000元</span>
                    </label>
                    <label class="radio-card float-left">
                        <input class="hidden-input" type="radio" name="zf-money-item" value="10000">
                        <span class="card">10000元</span>
                    </label>
                    <label class="radio-card float-left">
                        <input class="hidden-input" type="radio" name="zf-money-item" value="20000">
                        <span class="card">20000元</span>
                    </label>

                    <label class="radio-idea clear-fix" style="display: none;" value="网银转帐">
                        <input class="hidden-input" type="radio" name="money-type" value="网银转帐">
                        <span class="radio-ico float-left"></span>
                        <img class="idea-icon float-left" src="img/icon-zz.png?v=1.0.0" alt/>
                        <div class="float-left">
                            <span class="idea-name">网银转帐</span>
                            <span class="idea-port" index="">未选择通道</span>
                        </div>
                    </label>
                    <label class="radio-idea clear-fix" style="display: none;" value="支付宝">
                        <input class="hidden-input" type="radio" name="money-type" value="支付宝">
                        <span class="radio-ico float-left"></span>
                        <img class="idea-icon float-left" src="img/icon-zfb.png?v=1.0.0" alt/>
                        <div class="float-left">
                            <span class="idea-name">支付宝</span>
                            <span class="idea-port" index="">未选择通道</span>
                        </div>
                    </label>
                    <label class="radio-idea clear-fix" style="display: none;" value="微信支付">
                        <input class="hidden-input" type="radio" name="money-type" value="微信支付">
                        <span class="radio-ico float-left"></span>
                        <img class="idea-icon float-left" src="img/icon-wx.png?v=1.0.0" alt/>
                        <span class="float-left">
          <span class="idea-name">微信支付</span>
          <span class="idea-port" index="">未选择通道</span>
        </span>
                    </label>
                    <label class="radio-idea clear-fix" style="display: none;" value="QQ支付">
                        <input class="hidden-input" type="radio" name="money-type" value="QQ支付">
                        <span class="radio-ico float-left"></span>
                        <img class="idea-icon float-left" src="img/icon-qq.png?v=1.0.0" alt/>
                        <div class="float-left">
                            <span class="idea-name">QQ支付</span>
                            <span class="idea-port" index="">未选择通道</span>
                        </div>
                    </label>
                    <label class="radio-idea clear-fix" style="display: none;" value="银联支付">
                        <input class="hidden-input" type="radio" name="money-type" value="银联支付">
                        <span class="radio-ico float-left"></span>
                        <img class="idea-icon float-left" src="img/icon-yl.png?v=1.0.0" alt/>
                        <div class="float-left">
                            <span class="idea-name">银联支付</span>
                            <span class="idea-port" index="">未选择通道</span>
                        </div>
                    </label>
                    <label class="radio-idea clear-fix" style="display: none;" value="微信转帐">
                        <input class="hidden-input" type="radio" name="money-type" value="微信转帐">
                        <span class="radio-ico float-left"></span>
                        <img class="idea-icon float-left" src="img/icon-wx.png?v=1.0.0" alt/>
                        <div class="float-left">
                            <span class="idea-name">微信转帐</span>
                            <span class="idea-port" index="">未选择通道</span>
                        </div>
                    </label>
                    <label class="radio-idea clear-fix" style="display: none;" value="支付宝转帐">
                        <input class="hidden-input" type="radio" name="money-type" value="支付宝转帐">
                        <span class="radio-ico float-left"></span>
                        <img class="idea-icon float-left" src="img/icon-zfb.png?v=1.0.0" alt/>
                        <div class="float-left">
                            <span class="idea-name">支付宝转帐</span>
                            <span class="idea-port" index="">未选择通道</span>
                        </div>
                    </label>
                    <input type="submit" value="确认提交" class="btn btn-red"/>
                    <p class="info">由于银行管制、导致第三方充值通道不稳定、<br/>
                        如果充值一次未成功请换其他通道进行充值！</p>
                </form>
            </div>
        </div>
    </div>

    <ul class="tab clear-fix footer" id="tab">
        <li class="tab-item float-left">
            <a href="index.php"><img src="img/icon-jk.png?v=1.0.0" alt/><span>借呗规则</span></a>
        </li>
        <li class="tab-item float-left">
            <a href="javascript: alert('敬请期待!')"><img src="img/icon-ws.png?v=1.0.0" alt/><span>帐号买卖</span></a>
        </li>
        <li class="tab-item add float-left">
            <a href="javascript: void(0)" page="page-jk"><img src="img/icon-add.png?v=1.0.0" alt/><span>我要借钱</span></a>
        </li>
        <li class="tab-item float-left">
            <a href="javascript: void(0)" id="action-jl"><img src="img/icon-jl.png?v=1.0.0" alt/><span>借还记录</span></a>
        </li>
        <li class="tab-item float-left">
            <a class="kf" href="javascript: void(0)"><img src="img/icon-kf.png?v=1.0.0" alt/><span>在线客服</span></a>
        </li>
    </ul>

    <div class="modal" id="modal-port" style="display: none">
        <div class="modal-box">
            <div class="modal-header">
                <p class="modal-title">通道选择</p>
                <span class="modal-close" id="modal-port-close"></span>
            </div>
            <div class="modal-continue" id="modal-port-null" style="display: none">暂无通道</div>
            <ul class="modal-continue" id="modal-port-list" style="display: none"></ul>
            <div class="modal-continue" id="modal-port-bank" style="display: none;padding-top: 0 !important;"></div>
            <div class="modal-continue" id="modal-port-wx" style="display: none"></div>
            <div class="modal-continue" id="modal-port-zfb" style="display: none"></div>
        </div>
    </div>
</div>

<div class="modal" id="modal-alert" style="display: none;z-index: 1000;">
    <div class="modal-box">
        <!--    <div class="modal-header">-->
        <!--      <p class="modal-title" id="modal-title">提示</p>-->
        <!--      <span class="modal-close" id="modal-alert-close"></span>-->
        <!--    </div>-->
        <div class="modal-alert-content" id="modal-alert-content">

        </div>
        <ul class="modal-alert-action">
            <li id="modal-alert-action-ok"><span>确定</span></li>
        </ul>
    </div>
</div>

<script type="text/javascript" rel="script" src="../lib/jquery-1.12.4.min.js?v=1.0.0"></script>
<script type="text/javascript" rel="script" src="../lib/swiper/idangerous.swiper2.7.6.min.js?v=1.0.0"></script>
<script type="text/javascript" rel="script" src="../lib/cookies.js?v=1.0.0"></script>
<script type="text/javascript" rel="script" src="../lib/fastclick.js?v=1.0.0"></script>
<script type="text/javascript" rel="script" src="../lib/clipboard.min.js?v=1.0.0"></script>
<script type="text/javascript" rel="script" src="../lib/jroll.2.6.5.min.js?v=1.0.0"></script>
<script type="text/javascript" rel="script">
    var $window = $(window)
    var rem = window.rem = 24
    var swiper

    function onScreen () {
        $('body').css('display', 'none')

        if (window.screen.width >= 992) window.open('/active/jiebei/', '_self')
        else {
            var oHtml = document.getElementsByTagName('html')[0]
            var width = oHtml.clientWidth
            window.rem = rem * (width / 750)
            oHtml.style.fontSize = window.rem + 'px'
            setTimeout(function () {
                $('body').css('display', 'block')
                swiper = new window.Swiper('#swiper-container', {
                    autoplay: 3000,
                    loop: true,
                    resizeReInit: true,
                    calculateHeight: true
                })
                swiper.startAutoplay()
            }, 100)
        }
    }

    function task () {
        // FastClick.attach(document.body)

        $('input').focus(function () {

        }).blur(function () {//输入框失焦后还原初始状态
            $('.div-input').removeAttr('style')
            $(window).unbind('scroll')
        })

        $('.notice.huawei').hide()
        $('.notice.animation').show()

        $('#modal-port input, #modal-port select').on('focus', function () {
            $('#modal-port').css('height', '50%')
        })

        var scroll1 = new JRoll('.body[page=index]', {})
        var scroll2 = new JRoll('.body[page=back]', {})

        document.body.addEventListener('touchstart', function () {
            scroll1.refresh()
            scroll2.refresh()
        })

        document.body.addEventListener('click', function () {
            scroll1.refresh()
            scroll2.refresh()
        })

        $('.header').on('touchmove', function (ev) {
            ev.stopPropagation()
            if (event.cancelable && !event.defaultPrevented) {
                ev.preventDefault()
            }
            return false
        }, false)

        $('.footer').on('touchmove', function (ev) {
            ev.stopPropagation()
            if (event.cancelable && !event.defaultPrevented) {
                ev.preventDefault()
            }
            return false
        }, false)

        document.getElementById('modal-alert').addEventListener('touchmove', function (ev) {
            ev.stopPropagation()
            ev.preventDefault()
            return false
        }, true)

        document.getElementById('modal-port').addEventListener('touchmove', function (ev) {
            ev.stopPropagation()
            // ev.preventDefault()
            // return false
        }, false)

        // document.querySelector('#modal-port-bank').addEventListener('touchmove', function (ev) {
        //   ev.stopPropagation()
        //   ev.preventDefault()
        //   return false
        // }, false)

        window.task = true

        // 阻止双击放大
        // var lastTouchEnd = 0
        // document.addEventListener('touchstart', function (ev) {
        //   if (ev.touches.length > 1) {
        //     ev.preventDefault()
        //   }
        // })
        // document.addEventListener('touchend', function (ev) {
        //   var now = (new Date()).getTime()
        //   if (now - lastTouchEnd <= 300) {
        //     ev.preventDefault()
        //   }
        //   lastTouchEnd = now
        // }, false)

        // 阻止双指放大
        // document.addEventListener('gesturestart', function (event) {
        //   event.preventDefault()
        // })

        window.alert = function (obj) {
            var opt = {}
            if (typeof obj === 'object') {
                opt.title = obj.title || '提示'
                opt.text = obj.text || ''
                opt.cancel = obj.cancel || false
                opt.callback = obj.callback || null
            } else {
                opt.title = '提示'
                opt.text = obj
                opt.cancel = false
                opt.callback = null
            }

            var $modal = $('#modal-alert')
            // var $modalTitle = $('#modal-title')
            // var $modalClose = $('#modal-alert-close')
            var $modalContent = $('#modal-alert-content')
            var $modalOk = $('#modal-alert-action-ok')
            var $modalCancel = $('#modal-alert-action-cancel')

            function onClose (state) {
                $modal.hide()
                // $modalTitle.html('')
                $modalContent.html('')

                if (opt.callback) opt.callback(state)
            }

            // $modalClose.on('click', function () {
            //   onClose(false)
            // })

            $modalCancel.on('click', function () {
                onClose(false)
            })

            $modalOk.on('click', function () {
                onClose(true)
            })

            if (opt.text) {
                // $modalTitle.html(opt.title)
                $modalContent.html(opt.text)
                if (opt.cancel) $modalCancel.show()
                else $modalCancel.hide()
                $modal.show()
            } else {
                $modal.hide()
            }
        }

        var swiperX, swiperY
        document.getElementById('swiper-container').addEventListener('touchstart', function (ev) {
            swiperX = ev.touches[0].pageX
            swiperY = ev.touches[0].pageY
        })

        document.getElementById('swiper-container').addEventListener('touchmove', function (ev) {
            if (Math.abs(ev.touches[0].pageX - swiperX) >= Math.abs(ev.touches[0].pageY - swiperY)) {
                ev.stopPropagation()
            }
        }, false)

        $.getJSON('../kf.json?t=' + Math.random(), function (res) {
            var thisHost = window.location.host
            var href = res[thisHost] || res.default
            $('.kf').attr('href', href)
        })

        function checkUser () {
            $.post('../api/index.php', {
                action: 'getUser',
                id: '<?=$uid?>'
            }, function (res) {
                res = JSON.parse(res)
                if (res.code !== 200) noUser()
            })
        }

        var navs = $('.continue[nav-item]')
        var pages = $('.body[page]')
        var pageItems = $('[back-item]')
        var headers = $('.header')
        var backTitle = $('.toolbar-title')
        navs.hide()
        $('#home').show()

        $('li[nav]').on('click', onNavClick)
        $('a[nav]').on('click', onNavClick)
        var nav = ''

        function onNavClick () {
            navs.hide()
            var thisNav = $(this).attr('nav')
            if (nav === thisNav) {
                nav = ''
                $('#home').show()
            } else {
                nav = thisNav
                $('#' + nav).show()
            }
        }

        function goPage (page) {
            pages.hide()
            headers.hide()
            if (page && page === 'back') {
                $('.header[toolbar=back]').show()
                $('.body[page=back]').show()
            } else {
                $('.header[toolbar=index]').show()
                $('.body[page=index]').show()
            }

            scroll1.scrollTo(0, 0, 0)
            scroll2.scrollTo(0, 0, 0)
            scroll1.refresh()
            scroll2.refresh()
        }

        function goBack (nav) {
            goPage()
            navs.hide()
            if (nav && nav === 'jl') {
                initJl()
                $('#jl').show()
            } else $('#home').show()

            scroll1.scrollTo(0, 0, 0)
            scroll2.scrollTo(0, 0, 0)
            scroll1.refresh()
            scroll2.refresh()
        }

        $('#action-jl').on('click', function () {
            goBack('jl')
        })

        function goBackItem (item) {
            pageItems.hide()
            backTitle.text({
                'page-jk': '借款',
                'page-hk': '还款',
                'page-ed': '借款额度',
                'page-zf': '在线充值'
            }[item])
            $('[back-item=' + item + ']').show()
            switch (item) {
                case 'page-ed' :
                    $.post(
                        '../api/index.php',
                        {
                            action: 'amountQuery'
                        },
                        function (res) {
                            res = JSON.parse(res)
                            if (res.code === 200) {
                                $('#ed-user').val(res.data['username'] || '')
                                $('#ed-sx').val(res.data['shixunAmount'] || '0')
                                $('#ed-qp').val(res.data['qipaiAmount'] || '0')
                                $('#ed-cp').val(res.data['caipiaoAmount'] || '0')
                                $('#ed-dz').val(res.data['dianziAmount'] || '0')
                                $('#ed-zed').val(res.data['total'] || '0')
                            } else {
                                alert(typeof res['msg'] === 'string' ? res['msg'] : '查询失败')
                            }
                        })
                    break

                case 'page-hk':
                    $.post(
                        '../api/index.php',
                        {
                            action: 'userRepaymentInfo'
                        },
                        function (res) {
                            res = JSON.parse(res)
                            if (res.code === 200) {
                                $('#hk-user').val(res.data['username'])
                                $('#hk-name').val(res.data['zhName'])
                                $('#hk-qk').val(res.data['overdraft'])
                                var $input = $('#hk-amount')
                                $input.val(res.data['overdraft'])
                                $input.attr('max', res.data['overdraft'])

                                var qk = parseInt(res.data['overdraft'])
                                if (qk) {
                                    $('#hk-submit').attr('disabled', null)
                                    $('#hk-form').on('submit', function () {
                                        var amount = parseInt($input.val())
                                        if (isNaN(amount) || amount < 1) {
                                            alert({ text: '请输入有效的金额' })
                                            return false
                                        } else if (amount > parseInt(res.data['overdraft'])) {
                                            alert({ text: '还款金额不能大于欠款金额' })
                                            return false
                                        } else {
                                            if (window.__submit) return false
                                            window.__submit = true
                                            $.post('../api/index.php', {
                                                active: 'balanceReturnAmount',
                                                amount: amount
                                            }, function (res) {
                                                res = JSON.parse(res)

                                                if (res.code === 400) {
                                                    alert(res.msg)
                                                } else if (res.code === 200) {
                                                    alert({
                                                        text: res.data['msg'],
                                                        callback: function () {
                                                            goBack('jl')
                                                        }
                                                    })
                                                }
                                                window.__submit = false
                                                return false
                                            })
                                            return false
                                        }

                                        // goPage('back')
                                        // goBackItem('page-zf')
                                        return false
                                    })
                                } else {
                                    $('#hk-submit').attr('disabled', true)
                                    $('#hk-form').off('submit')
                                }
                            } else {
                                $('#hk-submit').attr('disabled', true)
                                $('#hk-form').off('submit')
                                noUser()
                            }
                        }
                    )
                    break

                case 'page-jk':
                    $.post(
                        '../api/index.php',
                        {
                            action: 'userLoanInfo'
                        },
                        function (res) {
                            res = JSON.parse(res)
                            if (res.code === 200) {
                                var userInfo = res.data
                                $('#jk-user').val(userInfo['username'])
                                $('#jk-name').val(userInfo['zhName'])
                                $('#jk-zye').val(userInfo['totalAmount'])
                                $('#jk-ysy').val(userInfo['alreadyUseAmount'])
                                $('#jk-ky').val(userInfo['allowAmount'])
                                $('#jk-date').val(userInfo['returnAmounDate'].substr(0, 10))
                                $('#jk-jk').attr('max', userInfo['allowAmount'])

                                $('#jk-submit').on('click', function () {
                                    var value = $('#jk-jk').val()
                                    var intVal = parseInt(value)
                                    var ed = parseInt(userInfo['allowAmount'])

                                    if (!userInfo) {
                                        noUser(res.msg)
                                    } else if (!document.getElementById('jk-tk').checked) {
                                        alert('请同意《借款规则》')
                                    } else if (isNaN(intVal) || intVal <= 0) {
                                        alert('请输入正确的借款金额')
                                    } else if (intVal > ed) {
                                        alert('借款金额<span style="color: #0099ff;">' + intVal + '</span><br/>' +
                                            '不能大于可用额度<span style="color: red;">' + ed + '</span>')
                                    } else {
                                        $.post('../api/index.php', {
                                            action: 'addLoanData',
                                            amount: value
                                        }, function (res) {
                                            res = JSON.parse(res)
                                            if (res.code === 200) {
                                                alert({
                                                    text: res['msg'],
                                                    callback: function () {
                                                        window.location.reload()
                                                    }
                                                })
                                            } else alert(res['msg'])
                                        })
                                    }
                                })
                            } else {
                                noUser(res.msg)
                            }
                        }
                    )
                    break

                case 'page-zf':
                    var $form = $('#zf-form')
                    var $moneyItems = $form.find('input[name=zf-money-item]')
                    var $moneyTypes = $form.find('input[name=money-type]')
                    var $input = $form.find('.form-input')

                    var $portModal = $('#modal-port')
                    var $portModalList = $('#modal-port-list')
                    var $portModalBank = $('#modal-port-bank')
                    var $portModalWx = $('#modal-port-wx')
                    var $portModalZfb = $('#modal-port-zfb')
                    var $portModalClose = $('#modal-port-close')
                    var $portModalNull = $('#modal-port-null')

                    var DATA = null

                    var USER = {
                        username: '',
                        queryAmount: ''
                    }

                    $.post('../api/index.php', {
                        action: 'getUser',
                        uid: '<?=$uid?>'
                    }, function (res) {
                        res = JSON.parse(res)
                        if (res.code === 200) {
                            USER.username = res.data.username
                            $form.find('input[name=username]').val(USER.username)
                        } else {
                            noUser()
                        }
                    })

                    // $('.hidden-input[value]').parent().show()
                    var types = $('label.radio-idea[value]')

                    $.post('../api/index.php', {
                        action: 'iniClassList',
                        clientType: 'wap'
                    }, function (res) {
                        res = JSON.parse(res)
                        $.each(types, function () {
                            var $this = $(this)
                            var type = $this.attr('value')
                            if (res.indexOf(type) === -1) {
                                $this.show()
                            }
                        })
                    })

                    $.post(
                        '../api/index.php',
                        {
                            action: 'userRepaymentInfo'
                        },
                        function (res) {
                            res = JSON.parse(res)
                            if (res.code === 200) {
                                USER.username = res.data['username']
                                USER.queryAmount = parseInt(res.data['overdraft'])
                                $input.val(USER.queryAmount || '')
                            } else {
                                noUser()
                            }
                        }
                    )

                    $portModalClose.on('click', function () {
                        $portModal.hide()
                        $portModalList.html('')
                    })

                    $moneyItems.on('change', function () {
                        var $this = $(this)
                        $input.val($this.val())
                    })

                    $input.on('change', function () {
                        var val = $(this).val()
                        $moneyItems.each(function () {
                            this.checked = (val === $(this).val())
                        })
                    })

                    $moneyTypes.on('click', function () {
                        var $this = $(this)
                        var type = $this.val()
                        $('#bank-form-box').html()
                        switch (type) {
                            case '支付宝':
                                $.post('../api/index.php', {
                                    action: 'onlinePayList',
                                    clientType: 'wap',
                                    type: 'zhifubao'
                                }, function (res) {
                                    callback(type, JSON.parse(res), $this.parent())
                                })
                                break

                            case '微信支付':
                                $.post('../api/index.php', {
                                    action: 'onlinePayList',
                                    clientType: 'wap',
                                    type: 'weixin'
                                }, function (res) {
                                    callback(type, JSON.parse(res), $this.parent())
                                })
                                break

                            case 'QQ支付':
                                $.post('../api/index.php', {
                                    action: 'onlinePayList',
                                    clientType: 'wap',
                                    type: 'qq'
                                }, function (res) {
                                    callback(type, JSON.parse(res), $this.parent())
                                })
                                break

                            case '银联支付':
                                $.post('../api/index.php', {
                                    action: 'onlinePayList',
                                    clientType: 'wap',
                                    type: 'wangyin'
                                }, function (res) {
                                    callback(type, JSON.parse(res), $this.parent())
                                })
                                break

                            case '网银转帐':
                                $.post('../api/index.php', {
                                    action: 'bankTransferList'
                                }, function (res) {
                                    callback(type, JSON.parse(res), $this.parent())
                                })
                                break

                            case '微信转帐':
                                $.post('../api/index.php', {
                                    action: 'qrTransferList',
                                    type: 'weixin'
                                }, function (res) {
                                    callback(type, JSON.parse(res), $this.parent())
                                })
                                break

                            case '支付宝转帐':
                                $.post('../api/index.php', {
                                    action: 'qrTransferList',
                                    type: 'zhifubao'
                                }, function (res) {
                                    callback(type, JSON.parse(res), $this.parent())
                                })
                                break
                        }
                    })

                function callback (type, res, $this) {
                    $form.attr('action', '')

                    if (res.code !== 200) {
                        alert(res['msg'])
                        return false
                    }

                    DATA = res.data
                    if (!DATA.length) {
                        $portModalList.hide()
                        $portModalBank.hide()
                        $portModalWx.hide()
                        $portModalZfb.hide()
                        $portModalNull.show()
                        $portModal.show()
                        $this.hide()
                        return false
                    } else {
                        $portModalNull.hide()
                    }

                    var $port = $this.find('.idea-port')

                    if (type === '微信转帐' || type === '支付宝转帐') {
                        $portModal.find('.modal-title').text('选择转帐通道')
                        $portModal.find('.modal-box').css('width', '90%')

                        var nums = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩']
                        $portModalBank.html(
                            '<ul class="clear-fix" id="bank-list" style="margin-bottom: 1rem">' +
                            DATA.reduce(function (prev, v, i) { return prev + '<li class="bank-item float-left" index="' + i + '">' + v['bank_name'] + '</li>'}, '') +
                            '</ul>' +
                            '<img src="modal-row-content" alt="二维码" id="port-qr-code" style="width: 72%;margin-left: 14%;"/>' +
                            '<br/>' +
                            '<br/>' +
                            '<label class="modal-row">' +
                            '<span class="modal-row-label">名称:</span>' +
                            '<input class="modal-row-content" id="put-name" value="" type="text" autocomplete="off" placeholder="' + ('微信转帐' === type ? '微信' : '支付宝') + '名称"/>' +
                            '</label>' +
                            '<label class="modal-row">' +
                            '<span class="modal-row-label">订单:</span>' +
                            '<input class="modal-row-content" id="put-older" value="" type="text" autocomplete="off" placeholder="订单号后九位"/>' +
                            '</label>' +
                            '<button class="btn btn-red" style="margin-top: 1rem">确认</button>'
                        )

                        var $ports = $portModalBank.find('.bank-item')
                        var $portName = $portModalBank.find('#put-name')
                        var $portOrder = $portModalBank.find('#put-older')
                        var $btn = $portModalBank.find('button')
                        var $qr = $portModalBank.find('#port-qr-code')

                        var now = new Date()
                        var month = now.getMonth() + 1
                        if (month < 10) month = '0' + month
                        var day = now.getDate()
                        if (day < 10) day = '0' + day
                        var nowStr = now.getFullYear() + '-' + month + '-' + day

                        var index = -1

                        $ports.on('click', function () {
                            var $this = $(this)
                            index = parseInt($this.attr('index'))
                            var data = DATA[index]
                            $ports.removeClass('active')
                            $this.addClass('active')
                            $qr.attr('src', '')
                            $qr.attr('src', '../' + data['qrcode_url'])
                        })

                        $btn.on('click', function () {
                            var data = DATA[index]
                            if (index < 0) alert({ text: '请选择支付通道' })
                            else if (!$portName.val()) alert({ text: '请输入你的' + ('微信转帐' === type ? '微信' : '支付宝') + '名称' })
                            else if (!$portOrder.val() && !/^[A-z\d-_]{9}$/.test($portName.val())) alert({ text: '请输入' + ('微信转帐' === type ? '微信' : '支付宝') + '订单号后九位' })
                            else {
                                $port.text(data['bank_name'])
                                $port.addClass('active')
                                $port.attr('index', index)

                                $form.attr('action', '../api/return_amount/qr/')
                                $input.attr('min', data['min'])
                                $input.attr('max', data['max'])
                                $form.find('input[name=id]').val(data.id)
                                $('#bank-form-box').html(
                                    '<input type="hidden" name="name" value="' + $portName.val() + '"/>' +
                                    '<input type="hidden" name="order_last_9" value="' + $portOrder.val() + '"/>' +
                                    '<input type="hidden" name="type" value="' + ('微信转帐' === type ? 'weixin' : 'zhifubao') + '"/>'
                                )

                                $portModal.hide()
                            }
                        })

                        $ports.first().click()
                        $portModalList.hide()
                        $portModalBank.show()
                    } else if (type === '网银转帐') {
                        $portModal.find('.modal-title').text('选择汇款银行')
                        $portModal.find('.modal-box').css('width', '90%')

                        $portModalBank.html(
                            '<ul class="clear-fix" id="bank-list" style="margin-bottom: 1rem">' +
                            DATA.reduce(function (prev, v, i) { return prev + '<li class="bank-item float-left" index="' + i + '">' + v['bank_name'] + '</li>'}, '') +
                            '</ul>' +
                            '<div class="modal-row">' +
                            '<span class="modal-row-label">收款姓名:</span>' +
                            '<input type="text" readonly class="modal-row-content" id="bank-name" value=""/>' +
                            '<button type="button" class="modal-row-action copy" id="bank-name-btn" onclick="" data-clipboard-target="#bank-name" data-clipboard-action="copy">复制</button>' +
                            '</div>' +
                            '<div class="modal-row">' +
                            '<span class="modal-row-label">收款帐号:</span>' +
                            '<input type="text" readonly class="modal-row-content" id="bank-code" value=""/>' +
                            '<button type="button" class="modal-row-action copy" id="bank-code-btn" onclick="" data-clipboard-target="#bank-code" data-clipboard-action="copy">复制</button>' +
                            '</div>' +
                            '<div class="modal-row">' +
                            '<span class="modal-row-label">开户网点:</span>' +
                            '<input type="text" readonly class="modal-row-content" id="bank-address" value=""/>' +
                            '<button type="button" class="modal-row-action copy" id="bank-address-btn" onclick="" data-clipboard-target="#bank-address" data-clipboard-action="copy">复制</button>' +
                            '</div>' +
                            '<label class="modal-row">' +
                            '<span class="modal-row-label">汇款方式:</span>' +
                            '<select class="modal-row-content input" id="put-type">' +
                            '<option value="">请选择汇款方式</option>' +
                            '<option value="手机转帐">手机转帐</option>' +
                            '<option value="支付宝转帐">支付宝转帐</option>' +
                            '<option value="微信转帐">微信转帐</option>' +
                            '<option value="网银转帐">网银转帐</option>' +
                            '<option value="柜台转帐">柜台转帐</option>' +
                            '<option value="ATM存款">ATM存款</option>' +
                            '</select>' +
                            '</label>' +
                            '<label class="modal-row">' +
                            '<span class="modal-row-label">汇款姓名:</span>' +
                            '<input class="modal-row-content input" id="put-name" value="" type="text" autocomplete="off" placeholder="请输入汇款人姓名"/>' +
                            '</label>' +
                            '<label class="modal-row">' +
                            '<span class="modal-row-label">汇款日期:</span>' +
                            '<input class="modal-row-content input" id="put-date" value="" type="date" autocomplete="off" placeholder="请输入汇款日期"/>' +
                            '</label>' +
                            '<label class="modal-row">' +
                            '<span class="modal-row-label">汇款地点:</span>' +
                            '<input class="modal-row-content input" id="put-address" value="" type="text" autocomplete="off"/>' +
                            '</label>' +
                            '<button class="btn btn-red" style="margin-top: 1rem">确认</button>'
                        )

                        var $banks = $portModalBank.find('.bank-item')
                        var $bankName = $portModalBank.find('#bank-name')
                        var $bankCode = $portModalBank.find('#bank-code')
                        var $bankAddress = $portModalBank.find('#bank-address')
                        var $btn = $portModalBank.find('button')
                        var $putType = $portModalBank.find('#put-type')
                        var $putName = $portModalBank.find('#put-name')
                        var $putDate = $portModalBank.find('#put-date')
                        var $putAddress = $portModalBank.find('#put-address')

                        var cppy1 = new ClipboardJS('#bank-name-btn')
                        var cppy2 = new ClipboardJS('#bank-code-btn')
                        var cppy3 = new ClipboardJS('#bank-address-btn')

                        cppy1.on('success', function (e) {
                            alert('复制成功')
                        })

                        cppy1.on('error', function (e) {
                            alert('复制成功')
                        })

                        cppy2.on('success', function (e) {
                            alert('复制成功')
                        })

                        cppy2.on('error', function (e) {
                            alert('复制成功')
                        })

                        cppy3.on('success', function (e) {
                            alert('复制成功')
                        })

                        cppy3.on('error', function (e) {
                            alert('复制成功')
                        })

                        var now = new Date()
                        var month = now.getMonth() + 1
                        if (month < 10) month = '0' + month
                        var day = now.getDate()
                        if (day < 10) day = '0' + day
                        var nowStr = now.getFullYear() + '-' + month + '-' + day
                        $putDate.val(nowStr)

                        var index = -1

                        $banks.on('click', function () {
                            var $this = $(this)
                            index = parseInt($this.attr('index'))
                            var data = DATA[index]
                            $banks.removeClass('active')
                            $this.addClass('active')
                            $bankName.val(data['bank_user_name'])
                            $bankCode.val(data['bank_number'])
                            $bankAddress.val(data['bank_register_branch'])
                        })

                        $btn.on('click', function () {
                            var data = DATA[index]
                            if (index < 0) alert({ text: '请选择汇款银行' })
                            else if (!$putType.val()) alert({ text: '请选择汇款方式' })
                            else if (!$putName.val()) alert({ text: '请输入汇款人姓名' })
                            else if (!$putDate.val()) alert({ text: '请输入汇款人时间' })
                            else if (!$putAddress.val()) alert({ text: '请输入汇款地点' })
                            else {
                                $port.text(data['bank_name'])
                                $port.addClass('active')
                                $port.attr('index', index)

                                $form.attr('action', '../api/return_amount/bank/')
                                $input.attr('min', data['pay_min'])
                                $input.attr('max', data['pay_max'])
                                $form.find('input[name=id]').val(data.id)
                                $('#bank-form-box').html(
                                    '<input type="hidden" name="type" value="' + $putType.val() + '"/>' +
                                    '<input type="hidden" name="name" value="' + $putName.val() + '"/>' +
                                    '<input type="hidden" name="date" value="' + $putDate.val() + '"/>' +
                                    '<input type="hidden" name="address" value="' + $putAddress.val() + '"/>'
                                )

                                $portModal.hide()
                            }
                        })

                        $banks.first().click()
                        $portModalList.hide()
                        $portModalBank.show()

                    } else {
                        $('#bank-form-box').html('')
                        $portModal.find('.modal-title').text('通道选择')
                        $portModal.find('.model-box').css('width', '64%')

                        var index = -1

                        var nums = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩']
                        var imgs = {
                            '支付宝': 'img/icon-zfb.png?v=1.0.0',
                            '微信支付': 'img/icon-wx.png?v=1.0.0',
                            'QQ支付': 'img/icon-qq.png?v=1.0.0',
                            '银联支付': 'img/icon-yl.png?v=1.0.0'
                        }

                        $portModalList.html(DATA.reduce(function (preStr, portData, index) {
                            return preStr +
                                '<li class="port-item clear-fix ' + ($port.attr('index') === index.toString() ? 'active' : '') + '" index="' + index + '">' +
                                '<img class="float-left port-icon" src="' + imgs[type] + '" alt/>' +
                                '<span class="float-left port-name">通道' + nums[index] + '</span>' +
                                '<span class="float-left port-desc">(单笔' + portData['pay_min_amount'] + '~' + portData['pay_max_amount'] + ')</span>' +
                                '</li>'
                        }, ''))

                        var $ports = $portModalList.find('.port-item')

                        $ports.on('click', function () {
                            var $this = $(this)
                            index = parseInt($this.attr('index'))
                            var data = DATA[index]
                            $port.attr('index', index)
                            $port.text($this.find('.port-name').text())
                            $port.addClass('active')
                            $ports.removeClass('active')
                            $this.addClass('active')
                            $form.attr('action', data['pay_url'])
                            $input.attr('min', data['pay_min_amount'])
                            $form.find('input[name=id]').val(data.id)

                            $portModal.hide()
                        })

                        $portModalBank.hide()
                        $portModalList.show()
                    }
                    // $('body').css('height', '50vh')
                    // $('body').css('overflow', 'hidden')
                    // document.body.addEventListener('touchmove', function (e) {
                    //   e.preventDefault();
                    //   return false
                    // }, false)

                    $portModal.show()
                }

                    $form.on('submit', function () {
                        var amount = parseInt($input.val())
                        var $type = null
                        $('input[name=money-type]').each(function () {
                            if (this.checked) {
                                $type = $(this).parent()
                                return false
                            }
                        })

                        if (!$type || !$type.length) {
                            alert({ text: '请选择付款方式' })
                            return false
                        }

                        var index = parseInt($type.find('.idea-port.active').attr('index'))
                        if (isNaN(index)) {
                            alert({ text: '请选择支付通道' })
                            return false
                        }

                        if (!DATA) {
                            alert({ text: '您选择的支付方式没有通道' })
                            return false
                        }

                        var data = DATA[index]
                        if (!data) {
                            alert({ text: '您选择的支付通道参数错误' })
                            return false
                        }

                        var type = $type.find('input').val()
                        if (!type) {
                            alert({ text: '您选择的支付方式参数错误' })
                            return false
                        }

                        if (isNaN(amount)) {
                            alert({ text: '请输入有效的金额' })
                            return false
                        }

                        if (type !== '网银转帐') {
                            if (amount < data['pay_min_amount'] || amount > data['pay_max_amount']) {
                                alert({ text: '单笔限额<span style="color: red">' + data['pay_min_amount'] + '</span>~<span style="color: red">' + data['pay_min_amount'] + '</span>' })
                                return false
                            } else return true
                        } else return true
                    })

                    $.post('../api/index.php', {
                        action: 'iniClassList',
                        clientType: 'wap'
                    }, function (res) {
                        $.each(JSON.parse(res), function () {
                            $('.hidden-input[value=' + this + ']').parent().hide()
                        })
                    })

                    break
            }

            scroll1.scrollTo(0, 0, 0)
            scroll2.scrollTo(0, 0, 0)
            scroll1.refresh()
            scroll2.refresh()
        }

        var back = ''
        $('a[page]').on('click', function () {
            var $this = $(this)
            var page = $this.attr('page')
            back = $this.attr('back')
            pages.hide()
            pageItems.hide()
            if (page) {
                goPage('back')
                goBackItem(page)
            }
        })

        $('#btn-back').on('click', function () {
            goBack(back)
        })

        function getUser () {
            $.post(
                '../api/index.php',
                {
                    action: 'getUser',
                    uid: '<?=$uid?>'
                },
                function (res) {
                    var input = $('#search-text')
                    res = JSON.parse(res)
                    if (res.code === 200) {
                        input.val(res.data.username)
                        input.attr('disabled', 'disabled')
                    } else {
                        input.val('')
                        input.attr('disabled', null)
                    }
                }
            )
        }

        getUser()

        $('#btn-search-text').on('click', function () {
            var input = $('#search-text')
            if (/[A-z\d]{5,20}/.test(input.val())) {
                $.post(
                    '../api/index.php',
                    {
                        action: 'getUser',
                        uid: '<?=$uid?>'
                    },
                    function (res) {

                        res = JSON.parse(res)
                        if (res.code === 200) {
                            input.val(res.data.username)
                            input.attr('disabled', 'disabled')
                            goPage('back')
                            goBackItem('page-ed')
                        } else {
                            input.val('')
                            input.attr('disabled', null)
                            noUser()
                        }
                    }
                )
            } else {
                alert('请输入会员帐号')
            }
        })

        function upNotice () {
            var contentBox = $('.marquee-content')
            $.post(
                '../api/index.php?t=' + Math.random(),
                {
                    action: 'message'
                },
                function (res) {
                    res = JSON.parse(res)
                    if (res.code === 200 && res.data['msg']) {
                        var size = getTextSize(res.data['msg'], '14px')
                        contentBox.text(size.text)
                        contentBox.css('display', 'black')
                        contentBox.css('width', (size.width * 1.2) + 'px')
                        contentBox.css('animation', 'marquee-animation ' + (Math.round(size.width / 36)) + 's linear 0s infinite normal')
                    }
                }
            )
        }

        function getTextSize (text, fontSize) {
            if (!text) {
                return {
                    text: '',
                    width: 0,
                    height: 0
                }
            }
            text = text.replace(/<[^<>]+>/g, '')
            text = text.replace('\n', '')
            var span = document.createElement('span')
            var result = {}
            result.width = span.offsetWidth
            result.height = span.offsetHeight
            span.style.visibility = 'hidden'
            span.style.fontSize = fontSize
            span.style.display = 'inline-block'
            span.style.whiteSpace = 'nowrap'
            span.style.letterSpacing = '1px'
            document.body.appendChild(span)
            span.innerHTML = text
            result.text = text
            result.width = parseFloat(window.getComputedStyle(span).width) - result.width
            result.height = parseFloat(window.getComputedStyle(span).height) - result.height
            document.body.removeChild(span)
            return result
        }

        upNotice()
        setTimeout(upNotice, 500)
        setInterval(upNotice, 60 * 1000)

        var $limit = $('#limits')
        var $tbody = $('#tbody')
        var $nav = $('#nav-tab')
        $limit.on('change', onLimitChange)

        function initJl () {
            onLimitChange()
        }

        function onLimitChange () {
            upTable(parseInt($limit.val()))
        }

        function upTable (limit, index) {
            index = index || 1
            limit = limit || 10
            $.post(
                '../api/index.php',
                {
                    action: 'returnAmountAndRepaymentList',
                    limit: limit,
                    page: index
                },
                function (res) {
                    res = JSON.parse(res)
                    if (res.code === 200) {
                        var data = res.data.data
                        var html = ''
                        $.each(data, function () {
                            html += '<tr>' +
                                '<td>' + this['username'] + '</td>' +
                                // '<td>' + this['zh_name'] + '</td>' +
                                '<td>' + this['borrow_amount'] + '</td>' +
                                '<td>' + this['repayment'] + '</td>' +
                                '<td>' + this['unpaid'] + '</td>' +
                                '<td>' + this['status'] + '</td>' +
                                // '<td>' + this['date'] + '</td>' +
                                '</tr>'
                        })

                        $tbody.html(html)

                        upNavTab(res.data.total, limit, index)
                    } else {
                        checkUser()
                        $nav.text('')
                    }
                }
            )
        }

        function upNavTab (total, limit, target) {
            var pageCount = Math.ceil(total / limit)
            var count = 4
            var html = '<li' + (target > 1 ? ' id="first"' : ' class="disabled"') + '>&#60;&#60;</li>'
            html += '<li' + (target > 1 ? ' id="last"' : ' class="disabled"') + '>&#60;</li>'

            // if (pageCount > count && target > count / 2) {
            //   html += '<li class="disabled">...</li>'
            // }

            for (var i = 1; i <= count; i++) {
                if ((pageCount < count && pageCount >= i) || (pageCount >= count && target <= count / 2)) {
                    html += '<li class="index' + (target === i ? ' active' : '') + '">' + i + '</li>'
                } else if (pageCount >= count && target > count / 2) {
                    var temp = pageCount - count / 2
                    var start = target > temp ? pageCount - count : target - count / 2
                    html += '<li class="index' + (target === (start + i) ? ' active' : '') + '">' + (start + i) + '</li>'
                }
            }

            // if (pageCount > count && target < pageCount - count / 2) {
            //   html += '<li class="disabled">...</li>'
            // }

            html += '<li' + (target < pageCount ? ' id="next"' : ' class="disabled"') + '>&#62;</li>'
            html += '<li' + (target < pageCount ? ' id="over"' : ' class="disabled"') + '>&#62;&#62;</li>'

            $nav.html(html)

            $nav.find('.index').on('click', function () {
                upTable(parseInt($limit.val()), parseInt($(this).text()))
            })

            $nav.find('#first').on('click', function () {
                upTable(parseInt($limit.val()), 1)
            })

            $nav.find('#last').on('click', function () {
                upTable(parseInt($limit.val()), target - 1)
            })

            $nav.find('#next').on('click', function () {
                upTable(parseInt($limit.val()), target + 1)
            })

            $nav.find('#over').on('click', function () {
                upTable(parseInt($limit.val()), pageCount)
            })
        }

        onScreen()
    }

    function noUser (msg='请登录后操作!') {
        alert({
            text: msg
        })
    }

    $(function () {
        task();
        var appUrl = window.location.href;
        if (appUrl.includes('app1=app1')) {
            $('.header').hide();
            $('.body').css({'top':0,'height':'99.99%'})
        }
        // try {
        //   task()
        // } catch (e) {
        //   alert(e)
        // }
    })
</script>
</body>
</html>
