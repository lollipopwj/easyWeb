var sj = function(id) {
    return document.getElementById(id);
}

//密码登录，手机验证码登录切换
function pwdlogin() {
    sj("pwdContent").style.display = "block";
    sj("teleContent").style.display = "none";
    sj("pwdlogin").style.borderBottom = "3px solid #48a75b";
    sj("telelogin").style.borderBottom = "none";
}

function telelogin() {
    sj("pwdContent").style.display = "none";
    sj("teleContent").style.display = "block";
    sj("pwdlogin").style.borderBottom = "none";
    sj("telelogin").style.borderBottom = "3px solid #48a75b";
}

//显示登录窗口
function show() {
    sj("login").style.display = "block";
    sj("bg").style.display = "block";
}
//登录成功
function checkPaP() {
    var count = localStorage.count;
    for (var i = 1; i <= count; i++) {
        var phone = localStorage.getItem("phone" + i);
        var password = localStorage.getItem("password" + i);;
        if (phone == sj("phone1").value && password == sj("password1").value) {
            return true;
        }
    }
    return false;
}

function doLogin() {
    if (checkPaP()) {
        window.location.href = "success.html";
    } else {
        alert("手机号或密码不正确");
    }
}

//显示手机号码
window.onload = function() {
    var count = localStorage.count;
    var phone = localStorage.getItem("phone" + count);
    sj("numb").innerHTML = phone;
}

//验证码
function createNum() {
    var str = "";
    for (var i = 1; i <= 4; i++) {
        var n = parseInt(Math.random() * 10);
        str += n;
    }
    return str;
}

//短信倒计时
var s = 5;
var timer;

function go() {
    s--;
    sj("resend").setAttribute("disabled", true);
    sj("resend").style.background = "#bbb";
    sj("resend").value = s + "秒重新发送短信";
    if (s == 0) {
        s = 5;
        sj("resend").removeAttribute("disabled");
        sj("resend").value = "发送短信";
        clearInterval(timer);
    }
}

function sendMessage() {
    timer = setInterval(go, 1000);
    sj("resend").removeAttribute("disabled");
    sj("resend").style.background = "#ccc";
    sj("verityInfo").innerHTML = createNum();
}


//验证提交
function sumb() {
    if (sj("verity").value == 1213) {
        sj("bg").style.display = "block";
        sj("process").style.display = "block";
        setTimeout(toNext, 2000);
    } else {
        alert("验证码输入有误");
    }
}

function toNext() {
    window.location.href = "login.html";
}
