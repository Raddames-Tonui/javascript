// -----------------------------
// String Utility Functions
// -----------------------------

// 1. Reverse the characters in a string
function reverseString(str) {
  // split string into array, reverse, then join back to string
  return str.split("").reverse().join("");
}

// 2. Count vowels in a string (a, e, i, o, u)
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// 3. Truncate string to a maximum length and add "..." if cut
function truncate(str, maxLength) {
  if (str.length <= maxLength) {
    return str; // no truncation needed
  }
  return str.slice(0, maxLength) + "...";
}

// -----------------------------
// Event Handlers for Buttons
// -----------------------------

function handleReverse() {
  const input = document.getElementById("inputText").value;
  document.getElementById("result").innerText = reverseString(input);
}

function handleCountVowels() {
  const input = document.getElementById("inputText").value;
  document.getElementById("result").innerText = 
    "Vowel count: " + countVowels(input);
}

function handleTruncate() {
  const input = document.getElementById("inputText").value;
  const maxLength = parseInt(document.getElementById("maxLength").value, 10);

  if (isNaN(maxLength) || maxLength < 1) {
    document.getElementById("result").innerText = "Please enter a valid max length.";
    return;
  }

  document.getElementById("result").innerText = truncate(input, maxLength);
}
