// Helper to clear active class from all buttons
function clearActive() {
  const buttons = document.querySelectorAll(".buttons button");
  buttons.forEach(btn => btn.classList.remove("active"));
}

// 1. Reverse the characters in a string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; 
  }
  return reversed;
}

// 2. Count vowels in a string (a, e, i, o, u)
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}

// 3. Truncate string to a maximum length and add "..." if cut
function truncate(str, maxLength) {
  let truncated = "";
  for (let i = 0; i < str.length && i < maxLength; i++) {
    truncated += str[i];
  }
  if (str.length > maxLength) truncated += "...";
  return truncated;
}

// Event Handlers for Buttons
function handleReverse() {
  clearActive();
  document.querySelector("button[onclick='handleReverse()']").classList.add("active");

  const input = document.getElementById("inputText").value;
  document.getElementById("result").innerText = reverseString(input);
}

function handleCountVowels() {
  clearActive();
  document.querySelector("button[onclick='handleCountVowels()']").classList.add("active");

  const input = document.getElementById("inputText").value;
  document.getElementById("result").innerText = 
    "Vowel count: " + countVowels(input);
}

function handleTruncate() {
  clearActive();
  document.querySelector("button[onclick='handleTruncate()']").classList.add("active");

  const input = document.getElementById("inputText").value;
  const maxLength = parseInt(document.getElementById("maxLength").value, 10);

  if (isNaN(maxLength) || maxLength < 1) {
    document.getElementById("result").innerText = "Please enter a valid max length.";
    return;
  }

  document.getElementById("result").innerText = truncate(input, maxLength);
}




















// // 1. Reverse the characters in a string
// function reverseString(str) {
//   // split string into array, reverse, then join back to string
//   return str.split("").reverse().join("");
// }

// // 2. Count vowels in a string (a, e, i, o, u)
// function countVowels(str) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// // 3. Truncate string to a maximum length and add "..." if cut
// function truncate(str, maxLength) {
//   if (str.length <= maxLength) {
//     return str; // no truncation needed
//   }
//   return str.slice(0, maxLength) + "...";
// }

// // Event Handlers for Buttons

// function handleReverse() {
//   const input = document.getElementById("inputText").value;
//   document.getElementById("result").innerText = reverseString(input);
// }

// function handleCountVowels() {
//   const input = document.getElementById("inputText").value;
//   document.getElementById("result").innerText = 
//     "Vowel count: " + countVowels(input);
// }

// function handleTruncate() {
//   const input = document.getElementById("inputText").value;
//   const maxLength = parseInt(document.getElementById("maxLength").value, 10);

//   if (isNaN(maxLength) || maxLength < 1) {
//     document.getElementById("result").innerText = "Please enter a valid max length.";
//     return;
//   }

//   document.getElementById("result").innerText = truncate(input, maxLength);
// }




const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active")); 
    btn.classList.add("active"); 
  });
});
