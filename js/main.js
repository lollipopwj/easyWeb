var sj = function(id) {
    return document.getElementById(id);
}

function checkPhone() {
    var reg = /^1\d{10}$/;
    var phone = sj("phone").value;
    if (!reg.test(phone)) {
        sj("phoneInfo1").style.display = "block";
        sj("phoneInfo2").style.display = "none";
        sj("phoneInfo3").style.display = "block";
        sj("phone").style.border = "1px solid #ff9000";
        sj("phoneInfo1").onclick = function() {
            sj("phone").value = "";
        }
        return false;
    } else {
        sj("phoneInfo1").style.display = "none";
        sj("phoneInfo2").style.display = "block";
        sj("phoneInfo3").style.display = "none";
        sj("phone").style.border = "1px solid #6ed814";
        return true;
    }
}

function checkPassword() {
    var reg = /^\w{6,18}$/;
    var password = sj("password").value;
    if (!reg.test(password)) {
        sj("pwdInfo1").style.display = "block";
        sj("pwdInfo2").style.display = "none";
        sj("pwdInfo3").style.display = "block";
        sj("password").style.border = "1px solid #ff9000";
        sj("pwdInfo1").onclick = function() {
            sj("password").value = "";
        }
        return false;
    } else {
        sj("pwdInfo1").style.display = "none";
        sj("pwdInfo2").style.display = "block";
        sj("pwdInfo3").style.display = "none";
        sj("password").style.border = "1px solid #6ed814";
        return true;
    }
}

function checkRepwd() {
    var pwd = sj("password").value;
    var repwd = sj("repwd").value;
    if (pwd != repwd) {
        sj("repwdInfo1").style.display = "block";
        sj("repwdInfo2").style.display = "none";
        sj("repwdInfo3").style.display = "block";
        sj("repwd").style.border = "1px solid #ff9000";
        sj("repwdInfo1").onclick = function() {
            sj("repwd").value = "";
        }
        return false;
    } else {
        sj("repwdInfo1").style.display = "none";
        sj("repwdInfo2").style.display = "block";
        sj("repwdInfo3").style.display = "none";
        sj("repwd").style.border = "1px solid #6ed814";
        return true;
    }
}

function checkEmail() {
    var reg = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
    var email = sj("email").value;
    if (!reg.test(email)) {
        sj("emailInfo1").style.display = "block";
        sj("emailInfo2").style.display = "none";
        sj("emailInfo3").style.display = "block";
        sj("email").style.border = "1px solid #ff9000";
        sj("emailInfo1").onclick = function() {
            sj("email").value = "";
        }
        return false;
    } else {
        sj("emailInfo1").style.display = "none";
        sj("emailInfo2").style.display = "block";
        sj("emailInfo3").style.display = "none";
        sj("email").style.border = "1px solid #6ed814";
        return true;
    }
}

window.onload = function() {
        sj("submit1").setAttribute("disabled", "true");
        sj("submit1").style.background = "#b8b8b8";
        sj("check").onclick = function() {
            if (sj("check").checked) {
                if (checkPhone() && checkPassword() && checkRepwd() && checkEmail()) {
                    sj("submit1").removeAttribute("disabled");
                    sj("submit1").style.background = "#ff9000";
                }
            } else {
                sj("submit1").setAttribute("disabled", "true");
                sj("submit1").style.background = "#b8b8b8";
            }
        }

        //点击提交按钮显示跳转
        sj("submit1").onclick = function() {
            var count = localStorage.count;
            if (!count) { //第一次注册
                count = 1;
            } else {
                count++; //用户数量+1
            }
            localStorage.setItem("phone" + count, sj("phone").value);
            localStorage.setItem("password" + count, sj("password").value);
            localStorage.setItem("count", count);
            sj("bg").style.display = "block";
            sj("process").style.display = "block";
            setTimeout(subm, 2000);
        }
    }
    //submit提交表单
function subm() {
    sj("form").submit();
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

function doTest() {
    //localStorage.clear();
    console.log(localStorage);
}
