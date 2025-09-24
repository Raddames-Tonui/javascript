"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 25;
let course = "TypeScript";
function render(doc) {
    console.log(doc);
}
let numbers = [];
numbers.forEach(n => n.toString());
let user = [1, 'MOSH'];
user.push(1);
var Size;
(function (Size) {
    Size["Small"] = "Small";
    Size["Medium"] = "Medium";
    Size["Large"] = "Large";
})(Size || (Size = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var Constants;
(function (Constants) {
    Constants[Constants["Pi"] = 3.14] = "Pi";
    Constants[Constants["E"] = 2.71] = "E";
})(Constants || (Constants = {}));
let mySize = Size.Medium;
let myColor = Color.Green;
console.log(mySize);
console.log(myColor);
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
function calculateTax2(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log("------------------- ARRAYS -------------------");
function myArrayFunctin(ratings) {
    if (ratings.length === 0)
        return 0;
    return ratings.reduce((reducer, sum) => {
        return reducer + sum;
    }, 0) / ratings.length;
}
let ratings = myArrayFunctin([]);
console.log("My ratings:", ratings);
function myArrayFunctinGeneric(items) {
    if (!items || items.length === 0)
        return null;
    return items[0] ?? null;
}
function updateComment(id, comment, comments) {
    let index = comments.findIndex(c => c === id);
    if (index === -1)
        return comments;
    comments[index] = comment;
    return comments;
}
console.log("My updated comments:  " + updateComment(2, "New Comment", [1, "old comment", 2]));
function formatLables(...labels) {
    if (labels.length === 0)
        return "No labels";
    if (labels.length === 1)
        return labels[0];
    return labels.join(", ");
}
console.log("Rest formatter: " + formatLables("Mosh"));
console.log("Rest formatter: " + formatLables("Mosh", "John", "Jane"));
let tax = calculateTax(10_000, 2023);
let tax2 = calculateTax2(10_000);
console.log(tax);
let employee = { id: 1, name: "Mosh", retire: (date) => {
        console.log(date);
    }
};
let weigth;
function kgToLbs(weigth) {
    weigth.toString();
    if (typeof weigth === 'number')
        return weigth * 2.2;
    else
        return parseInt(weigth) * 2.2;
}
let employeeweigth = kgToLbs(100);
console.log(employeeweigth);
employeeweigth = kgToLbs("100kg");
console.log(employeeweigth);
let height;
let textBox = {
    drag: () => { console.log("dragging"); },
    resize: () => { console.log("resizing"); }
};
let quatity = 100;
let metric = 'cm';
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(null);
greet('Mosh');
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());
let log = null;
log?.('message');
//# sourceMappingURL=index.js.map