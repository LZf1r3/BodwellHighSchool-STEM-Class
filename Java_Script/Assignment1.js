function ComfirmPassword() {
    var password1 = document.getElementById("Password").value;
    var password2 = document.getElementById("ComfirmPassword").value;
    if (password1 === password2) {
        document.getElementById("output2").innerHTML = "Password Matched!";
    } else {
        document.getElementById("output2").innerHTML = "Password Not Matched!";
    }
}

function Hint() {
    var passwrod = document.getElementById("Password").value;
    if (passwrod.length < 5) {
        document.getElementById("ouptut1").innerHTML = "Less than/or 5 characters!";
    } else {
        document.getElementById("output1").innerHTML = "More than 5 characters!.";
    }
}