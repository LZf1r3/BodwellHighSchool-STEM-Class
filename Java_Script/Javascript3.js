function Add() {
    var num1 = Number(document.getElementById("input1").value);
    var num2 = Number(document.getElementById("input2").value);
    var result = num1 + num2;
    document.getElementById("output2").innerHTML = result;
}
function Multiply() {
    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;
    var result = num1 * num2;
    document.getElementById("output1").innerHTML = result;
}