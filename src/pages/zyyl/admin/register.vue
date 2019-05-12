<template>
    <div class="mcBox" v-show="isRegister">
        <div class="register-pup" id="register-pup" style="left: 251px; top: 459.5px;">
            <div class="icon-cancle"></div>
            <div class="register-top">
                <div id="registerType" value="2"></div>
                <div id="registerOrdinaryDiv" class="register-top-div ">
                    <div class="registerOrdinary"></div>
                    <span>一键开户</span>
                </div>
                <div id="registerMobileDiv" class="register-top-div hover" data-tag_id="111" data-depth="2">
                    <div class="registerMobileHover"></div>
                    <span data-tag_id="111" style="margin-left:45px;">手机极速开户</span>
                </div>
            </div>
            <div class="register-left">
                <div class="icon-register"></div>
            </div>
            <div class="register-content" style="display:none;">

                <div class="checkbox no-border" style="margin-top: 24px;">
                    <input class="box roundedOne" value="None" id="roundedOne1" name="check" checked="" type="checkbox" title="">
                    <label>我确认我已年满18岁，并已阅读和接受本网站的策略，隐私声明，<a target="_blank" href="aboutus.htm?page=4" data-tag_id="1126" data-depth="2">条款及条件</a>。</label>
                </div>
                <div class="buttons">
                    <a id="fast-register-btn" href="javascript:void(0);">马上注册</a>
                    <span class="info">已有帐号？</span>
                    <a class="login" href="#" onclick="javascript:prj.pop('','login','');" data-tag_id="1222" data-depth="2">在此登录</a>
                </div>
            </div>
            <div class="register-mobile">
                <div class="inpt-group">
                    <input data-tag_id="1112" type="text" maxlength="11" onkeypress="return numberOnly(event);" class="inpt1 br" id="registerPhone" placeholder="手机号码" data-depth="2">
                    <div id="phone-remid" class="phone-remid">请输入手机号码</div>
                </div>
                <div style="color: #333;clear: both;padding:0 0 15px 0;display: none">
                    <input id="isAgain" style="margin-right: 5px;vertical-align: -1px;" type="checkbox">重新注册,原会员手机将自动解绑
                </div>
                <div class="inpt-group">
                    <div class="password-class">
                        <input type="password" onkeypress="return alphaNumericOnly(event);" id="password01" maxlength="16" name="password" class="inpt1 br" placeholder="密码" data-tag_id="1113" data-depth="2">
                    </div>
                    <div class="eye02 icon-eye-close"></div>
                    <div class="password-remid">密码必须为6-16位数字或字母或其组合</div>
                    <span id="passwordfield_w-01" class="vldn-txt"></span>
                </div>
                <div class="inpt-group">
                    <input type="text" class="inpt_code br captcha-field" name="bindphonecaptcha" id="bindphonecaptcha" maxlength="8" placeholder="短信验证码" data-tag_id="1115" data-depth="2">
                    <a class="inp_btn re_send_bank disabled" href="javascript:;" data-tag_id="1114" data-depth="2"><span class="sendget">获取验证码</span><span class="count_num"></span></a>
                    <div id="bindphonecaptcha_w" class="message-remid"></div>
                </div>
                <div class="checkbox no-border" style="margin-top: 20px;">
                    <input class="box roundedOne" value="None" id="roundedOne2" name="check" checked="" type="checkbox" data-tag_id="1116" data-depth="2">
                    <label>我确认我已年满18岁，并已阅读和接受本网站的策略，隐私声明，<a target="_blank" href="aboutus.htm?page=4" data-tag_id="1117" data-depth="2">条款及条件</a>。</label>
                </div>
                <div class="buttons">
                    <a id="submitMobileBtn" href="javascript:void(0);" data-tag_id="1116">马上注册</a>
                    <span class="info">已有帐号？</span>
                    <a class="login" href="#" onclick="javascript:prj.pop('','login','');" data-tag_id="1121" data-depth="2">在此登录</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        isRegister:{
            type:Boolean
        }
    }
}
</script>
<style lang="less" scoped>
    .mcBox{
        width:100%;
        height:100%;
        background-color: rgba(0,0,0,.8);
        .content{

        }
    }
</style>
