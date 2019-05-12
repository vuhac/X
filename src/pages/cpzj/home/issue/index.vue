<template>
  <div class="body">
    <h2>常见问题</h2>
    <ul class="tab clear-fix">
      <li :class="{active: index === 0}" @click="index = 0">一般常见问题</li>
      <li :class="{active: index === 1}" @click="index = 1">游戏及投注问题</li>
      <li :class="{active: index === 2}" @click="index = 2">技术常见问题</li>
    </ul>
    <div class="content" v-html="contents[index]"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        contents: [
          `
<p align="left">Q1: 如何加入彩票之家？</p>
<p align="left">A1: 您可以直接点选 立即加入，确实填写资料后，可立即登记成为彩票之家会员。</p>
<br/>
<p align="left">Q2: 我可以直接在网络上存款吗？</p>
<p align="left">A2: 可以，彩票之家提供多种在线存款选择，详情请参照 存款须知。</p>
<br/>
<p align="left">Q3: 我在那里可以找到游戏的规则？</p>
<p align="left">A3: 在未登入前，您可以在游戏的最外层看到"游戏规则"选项，清楚告诉您游戏的玩法、规则及派彩方式。在游戏窗口中，也有"规则"选项，让您在享受游戏乐趣的同时，可以弹跳窗口随时提醒您游戏规则。</p>
<br/>
<p align="left">Q4: 你们的游戏会用多少副牌？</p>
<p align="left">A4: 在百家乐我们会用8副牌，其他游戏则会根据其性质有所调整。</p>
<br/>
<p align="left">Q5: 您们何时会洗牌?</p>
<p align="left">A5: 所有纸牌游戏，当红的洗牌记号出现或游戏因线路问题中断时便会进行重新洗牌。</p>
<br/>
<p align="left">Q6: 我的注码的限制是多少？</p>
<p align="left">A6: 从最低注单 20(视讯)~100(球类) 元人民币以上即可投注， 您的注码会根据您的存款有所不同，以及您挑选的游戏不同而有所区别。</p>
<br/>
<p align="left">Q7: 如果忘记密码怎么办？</p>
<p align="left">A7: 你可点击首页忘记密码功能，填写你当初留下的邮箱，即可取回你当初设定的密码。当你无法收取邮件时，你也可以联系24小时在线客服人员咨询协助取回你的帐号密码。</p>
<br/>
<p align="left">Q8: 当你注册时出现，姓名已注册。</p>
<p align="left">A8: 你可通过24小时在线客服人员协助处理。</p>
`, `
<p align="left">Q1: 请问我在哪边可以找到游戏规则？
<p align="left">A1: 在你为登入之前，你可以在各个游戏项目内，看见游戏规则的选项，清楚告知游的玩法、规则及派彩方式。 在游戏窗口中，也有"规则"选项，让您在享受游戏乐趣的同时，可以弹跳窗口随时提醒您游戏规则。</p>
<br/>
<p align="left">Q2: 请问个个游戏的注额为多少？</p>
<p align="left">A2: 真人游戏-最低下注20RMB最高限额50000RMB</p>
<p align="left">体育博彩-最低下注10RMB最高限额30000RMB</p>
<p align="left">彩票游戏-最低下注5RMB最高限额依照游戏及玩法不同，最高可到50000RMB</p>
<p align="left">电子机率-最低下注0.2RMB最高限额依照游戏及玩法不同</p>
<br/>
<p align="left">Q3: 你们的游戏会用多少副牌？</p>
<p align="left">A3:在百家乐我们会用8副牌，其他游戏则会根据其性质有所调整。</p>
<br/>
<p align="left">Q4: 您们何时会洗牌?</p>
<p align="left">A4: 所有纸牌游戏，当红的洗牌记号出现或游戏因线路问题中断时便会进行重新洗牌。</p>
`, `
<p align="left">Q: 最低的硬件系统要求是什么?</p>
<br/>
<p align="left">任何可以接上互联网的计算机。</p>
<p align="left">SVGA显示适配器–最少要1204x768像素256色彩以上。</p>
<p align="left">区域宽带。</p>
<p align="left">Windows , Mac OS X , Linux操作系统。</p>
<p align="left">Internet Explorer浏览器v6.0 或以上 (版本7.0 或以上更好)，Mozilla Firefox (浏览器v3.0 或以上)，Opera (浏览器v8.0 或以上)，Chrome(浏览器v6.0 或以上)，Safari (浏览器v4.0 或以上)</p>
<p align="left">要浏览在线娱乐城，你可以在 Macromedia网站下载Macromedia Flash Player浏览器附加程序(8.0或以上版本)。</p>
`
        ],
        index: 0
      }
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  .body {
    width: 1000px;
    padding: 20px;
    margin: 20px auto;
    box-sizing: border-box;
    background-color: #e5e5e5;
    letter-spacing: 0.1rem;

    h2 {
      font-size: 32px;
      color: black;
    }

    .tab {
      margin-top: 10px;
      height: 30px;
      line-height: 30px;
      border-bottom: 2px solid #888888;

      li {
        float: left;
        color: #e5e5e5;
        background-color: black;
        padding: 0 10px;
        margin-right: 10px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        cursor: pointer;

        &:hover, &.active {
          background-color: #f13131;
        }
      }
    }

    .content {
      margin-top: 20px;
      line-height: 20px;
    }
  }
</style>
