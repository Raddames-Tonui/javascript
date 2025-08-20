function convert () {
    var sentence = document.getElementById("sentence").value;
    var caseType = document.getElementById("caseType").value;
    var result = "";

    //  Split the sentence into words manually
    var words = [];      
    var currentWord = "";

    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            if (currentWord !== "") {
                words.push(currentWord.toLowerCase());
                currentWord = "";
            }
        } else {
            currentWord += sentence[i];
        }
    }

    if (currentWord !== "") {
        words.push(currentWord.toLowerCase());
    }

    // STEP 2: Apply chosen case
    if (caseType === "camel") { 
        result = words[0];
        
        for (var i = 1; i < words.length; i++) {
            result += capitalize(words[i]);
        }

    } else if (caseType === "snake") {
        result = words.join("_");

    } else if (caseType === "kebab") {
        result = words.join("-");

    } else if (caseType === "pascal") {
        result = "";
        for (var i = 0; i < words.length; i++) {
            result += capitalize(words[i]);
        }

    } else if (caseType === "upperSnake") {
        result = words.join("_").toUpperCase();
    }

    document.getElementById("result").innerText = result;
}
function capitalize(word) {
    if (word.length === 0) return "";
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
