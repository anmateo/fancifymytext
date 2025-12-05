
function makeBigger() {
    document.getElementById("text").style.fontSize = "24px";

}

function makeFancy() {
    alert("Make fancy!");
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}

function makeBoring() {
    alert("Make boring...");
    document.getElementById("text").style.fontWeight = "initial";
    document.getElementById("text").style.color = "initial";
    document.getElementById("text").style.textDecoration = "initial";
}

function makeMoo() {
    document.getElementById("text").style.textTransform = "uppercase";
    var userText = document.getElementById("text").value;
    var numSentences = userText.split(".");
    for (var count = 0; count < numSentences.length - 1; count++) {
        numSentences[count] = numSentences[count].trim();
        numSentences[count] = numSentences[count] + "-Moo";
    }

    userText = numSentences.join(". ");

    document.getElementById("text").value = userText;
}