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
