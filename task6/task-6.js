// --- Storage for user-entered values ---
var values = []; 

var valueInput = document.getElementById('valueInput');
var addBtn = document.getElementById('addBtn');
var clearBtn = document.getElementById('clearBtn');
var submitBtn = document.getElementById('submitBtn');
var valuesList = document.getElementById('valuesList');
var output = document.getElementById('output');

// Helpers
function getMode() {
  var radios = document.getElementsByName('mode');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) return radios[i].value; // "numbers" | "ids"
  }
  return "numbers";
}

function clearAll() {
  values = [];
  valueInput.value = "";
  renderValues();
  output.innerHTML = "";
}

function renderValues() {
  //  (no array .map/.join)
  var html = "";
  for (var i = 0; i < values.length; i++) {
    html += '<span class="pill">' + values[i] + '</span>';
  }
  valuesList.innerHTML = html;
}

// ---  (no array .push) ---
addBtn.addEventListener('click', function () {
  var mode = getMode();
  var raw = valueInput.value.trim();
  if (raw === "") return;

  if (mode === "numbers") {
    // validate numeric manually-ish
    var num = parseFloat(raw);
    if (isNaN(num)) {
      alert("Please enter a valid number.");
      return;
    }
    values[values.length] = num; // manual append
  } else {
    // IDs: accept as-is (e.g., TX123)
    values[values.length] = raw;
  }

  valueInput.value = "";
  renderValues();
});

// Enter key = Add
valueInput.addEventListener('keyup', function (e) {
  if (e.key === "Enter") addBtn.click();
});

// Clear
clearBtn.addEventListener('click', clearAll);

// If mode changes, clear values to avoid mixing types
var radios = document.getElementsByName('mode');
for (var r = 0; r < radios.length; r++) {
  radios[r].addEventListener('change', clearAll);
}

// --- Utility functions (NO array methods) ---
function findMin(arr) {
  if (arr.length === 0) return null;
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function findMax(arr) {
  if (arr.length === 0) return null;
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function arraySum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function removeDuplicates(arr) {
  var unique = [];
  for (var i = 0; i < arr.length; i++) {
    var exists = false;
    // manual membership test (no includes/indexOf/Set)
    for (var j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      unique[unique.length] = arr[i];
    }
  }
  return unique;
}

// --- Submit / Compute ---
submitBtn.addEventListener('click', function () {
  output.innerHTML = "";
  var mode = getMode();

  if (values.length === 0) {
    output.innerHTML = '<span class="title">Please add at least one value.</span>';
    return;
  }

  if (mode === "numbers") {
    // Values already stored as numbers
    var min = findMin(values);
    var max = findMax(values);
    var sum = arraySum(values);

    // Manual string build (no .join)
    var listStr = "";
    for (var i = 0; i < values.length; i++) {
      if (i > 0) listStr += ", ";
      listStr += values[i];
    }

    output.innerHTML =
      '<div class="title">Numbers Results</div>' +
      '<div><strong>Input:</strong> ' + listStr + '</div>' +
      '<div><strong>findMin:</strong> ' + min + '</div>' +
      '<div><strong>findMax:</strong> ' + max + '</div>' +
      '<div><strong>arraySum:</strong> ' + (Math.round(sum * 100) / 100).toFixed(2) + '</div>' +
      '<div><em>(Duplicates, if any, can also be removed with removeDuplicates)</em></div>';

  } else {
    // IDs mode
    var unique = removeDuplicates(values);

    // Build displays manually
    var origStr = "";
    for (var a = 0; a < values.length; a++) {
      if (a > 0) origStr += ", ";
      origStr += values[a];
    }
    var uniqStr = "";
    for (var b = 0; b < unique.length; b++) {
      if (b > 0) uniqStr += ", ";
      uniqStr += unique[b];
    }

    output.innerHTML =
      '<div class="title">Transaction IDs Results</div>' +
      '<div><strong>Original:</strong> ' + origStr + '</div>' +
      '<div><strong>removeDuplicates:</strong> [' + uniqStr + ']</div>' +
      '<div><strong>Counts:</strong> ' + values.length + ' → ' + unique.length + '</div>';
  }
});
