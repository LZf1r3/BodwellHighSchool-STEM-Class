function showLength() {
    var txt = document.getElementById("userInput").value;
    document.getElementById("output").textContent = "Length: " + txt.length;
}

function showSubstring() {
    var txt = document.getElementById("userInput").value;
    document.getElementById("output").textContent = "Substring: " + txt.substring(0, 5);
}

function replaceWord() {
    var txt = document.getElementById("userInput").value;
    var replaced = txt.replace("cat", "dog");
    document.getElementById("output").textContent = "Replaced: " + replaced;
}

function convertToUpper() {
    var txt = document.getElementById("userInput").value;
    document.getElementById("output").textContent = "Uppercase: " + txt.toUpperCase();
}

function addMoreText() {
    var txt = document.getElementById("userInput").value;
    var combined = txt.concat(" is cool!");
    document.getElementById("output").textContent = "Concatenated: " + combined;
}

function showFirstChar() {
    var txt = document.getElementById("userInput").value;
    var char = txt.charAt(0);
    document.getElementById("output").textContent = "First character: " + (char || "None");
}