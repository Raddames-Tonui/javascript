function getInitials(name) {
  name = name.trim(); // remove leading/trailing spaces
  let initials = "";
  let takeNext = true; //  capture first character of each word

  for (let i = 0; i < name.length; i++) {
    let ch = name[i];

    if (ch !== " " && takeNext) {
      initials += ch.toUpperCase();
      takeNext = false; 
    }

    if (ch === " ") {
      takeNext = true; 
    }
  }

  return initials;
}


// Display initials
function showInitials() {
  const input = document.getElementById("nameInput").value;
  const result = getInitials(input);
  document.getElementById("result").textContent = result || "No initials found";
}




















// // Function to extract initials
// function getInitials(name) {
//   if (!name) return "";
  
//   const words = name.trim().split(/\s+/); // split by spaces
//   let initials = "";

//   // Always take first letter of first word
//   initials += words[0][0].toUpperCase();

//   // If more than one word, take last word’s first letter
//   if (words.length > 1) {
//     initials += words[words.length - 1][0].toUpperCase();
//   }

//   return initials;
// }

