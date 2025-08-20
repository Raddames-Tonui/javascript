const passwordInput = document.getElementById("password");
const form = document.getElementById("passwordForm");
const resultText = document.getElementById("strengthResult");

function checkRules(password) {
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSpecial = false;

  // Check each character manually
  for (let i = 0; i < password.length; i++) {
    const ch = password[i];
    if (ch >= "A" && ch <= "Z") hasUpper = true;
    else if (ch >= "a" && ch <= "z") hasLower = true;
    else if (ch >= "0" && ch <= "9") hasNumber = true;
    else hasSpecial = true;
  }

  return {
    length: password.length >= 8,
    uppercase: hasUpper,
    lowercase: hasLower,
    number: hasNumber,
    special: hasSpecial
  };
}

passwordInput.addEventListener("input", () => {
  const rules = checkRules(passwordInput.value);
  Object.keys(rules).forEach(rule => {
    const li = document.getElementById(rule);
    if (rules[rule]) {
      li.classList.add("valid");
    } else {
      li.classList.remove("valid");
    }
  });
});

// On submit, show Weak / Medium / Strong
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const rules = checkRules(passwordInput.value);

  let strength = 0;
  Object.keys(rules).forEach(rule => {
    if (rules[rule]) strength++;
  });

  if (strength <= 2) {
    resultText.textContent = "Weak Password";
    resultText.style.color = "red";
    passwordInput.style.borderColor = "red";
  } else if (strength === 3 || strength === 4) {
    resultText.textContent = "Medium Password";
    resultText.style.color = "orange";
    passwordInput.style.borderColor = "orange";
  } else {
    resultText.textContent = "Strong Password";
    resultText.style.color = "green";
    passwordInput.style.borderColor = "green";
  }
});
























// const passwordInput = document.getElementById("password");
// const form = document.getElementById("passwordForm");
// const resultText = document.getElementById("strengthResult");

// const rules = {
//   length: /.{8,}/,
//   uppercase: /[A-Z]/,
//   lowercase: /[a-z]/,
//   number: /[0-9]/,
//   special: /[^A-Za-z0-9]/
// };

// // Live validation
// passwordInput.addEventListener("input", () => {
//   Object.keys(rules).forEach(rule => {
//     const li = document.getElementById(rule);
//     if (rules[rule].test(passwordInput.value)) {
//       li.classList.add("valid");
//     } else {
//       li.classList.remove("valid");
//     }
//   });
// });

// // On submit, show Weak / Medium / Strong
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let strength = 0;

//   Object.keys(rules).forEach(rule => {
//     if (rules[rule].test(passwordInput.value)) {
//       strength++;
//     }
//   });

//   if (strength <= 2) {
//     resultText.textContent = "Weak Password";
//     resultText.style.color = "red";
//     passwordInput.style.borderColor = "red";
//   } else if (strength === 3 || strength === 4) {
//     resultText.textContent = "Medium Password";
//     resultText.style.color = "orange";
//     passwordInput.style.borderColor = "orange";
//   } else {
//     resultText.textContent = "Strong Password";
//     resultText.style.color = "green";
//     passwordInput.style.borderColor = "green";
//   }
// });


