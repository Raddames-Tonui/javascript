function convert () {
    // Get input text and case type from HTML
    var sentence = document.getElementById("sentence").value;
    var caseType = document.getElementById("caseType").value;
    var result = "";

    // STEP 1: Split the sentence into words manually
    var words = [];      
    var currentWord = "";

    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            // space means word boundary
            if (currentWord !== "") {
                words.push(currentWord.toLowerCase());
                currentWord = "";
            }
        } else {
            // keep adding letters to build a word
            currentWord += sentence[i];
        }
    }

    // add the last word (if there was one)
    if (currentWord !== "") {
        words.push(currentWord.toLowerCase());
    }

    // STEP 2: Apply chosen case
    if (caseType === "camel") { 
        // first word is lowercase every next word is capitalized
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
// Helper function: Capitalize first letter
function capitalize(word) {
    if (word.length === 0) return "";
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
