// document.write("Whatever")
// document.getElementById("placeholder1").innerHTML = "Hello, World!";
// window.alert("Whatever");
document.write("hello world");
document.getElementById("placeholder1").innerHTML = 4+6; 
window.alert("Hello, World!");
function fillWithQuerySelector() {
    document.querySelector("#querySelectorTarget").innerHTML = "Selected with querySelector!";
}

function fillWithGetElementById() {
    document.getElementById("getElementByIdTarget").innerHTML = "Selected with getElementById!";
}

function fillWithGetElementsByClassName() {
    document.getElementsByClassName("classTarget")[0].innerHTML = "Selected with getElementsByClassName!";
}

function fillWithGetElementsByTagName() {
    document.getElementsByTagName('span')[0].innerHTML = "Selected with getElementsByTagName!";
}