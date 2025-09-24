let age: number = 25;
let course = "TypeScript";

function render(doc: string) {
    console.log(doc);
}


let numbers: number[] = [];
numbers.forEach(n => n.toString());

// TUPLES -> fixed length array where each element is of a fixed type
// Mostly use for 2 values eg key value pair
// 1, 'Mosh'
let user: [number, string] = [1, 'MOSH'];

user.push(1); // valid
// user.push(true); // invalid


// ENUMS
// By default enums are number based starting from 0
// You can change to string but make sure to initialize all values
enum Size { Small = "Small", Medium = "Medium", Large = "Large" }
enum Color { Red, Green, Blue }
const enum Constants { Pi = 3.14, E = 2.71 }  // More optimized js code

let mySize: Size = Size.Medium;
let myColor: Color = Color.Green;

console.log(mySize); // Medium
console.log(myColor); // Green


//------------------- FUNCTIONS-------------------
console.log("------------------- FUNCTIONS -------------------")

// Annotate the return type of the function
// or void if no rturn 
function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

// Default parameters
function calculateTax2(income: number, taxYear= 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

let tax = calculateTax(10_000, 2023);
let tax2 = calculateTax2(10_000); // taxYear will be 2022
console.log(tax);




console.log("------------------- ARRAYS -------------------")
// Arrays with specific type
function myArrayFunctin(ratings: number[]): number {
    if (ratings.length === 0) return 0;
    return ratings.reduce((reducer, sum) => {
        return reducer + sum
    }, 0) / ratings.length;
}

let ratings = myArrayFunctin([]);
console.log("My ratings:", ratings);


// Arrays with Generics   Array<T> eg Array<number>, Array<string>
function myArrayFunctinGeneric(items: Array<string> | null): string | null {
    if (!items || items.length === 0) return null;
    return items[0] ?? null;
}


// Arrays with different types using union types
type myArray ={
    id: number;
    comment: string;
    comments: (string | number)[]; // array of string or number 
}

function updateComment(id: number, comment: string, comments: (string | number)[] ) {
    let index = comments.findIndex(c => c === id);
    if (index === -1) return comments;
    comments[index] = comment;
    return comments;
}

console.log("My updated comments:  " + updateComment(2, "New Comment", [1, "old comment", 2]))

// rest parameters
function formatLables(...labels: string[]) {
    if (labels.length === 0) return "No labels";
    if (labels.length === 1) return labels[0];
    return labels.join(", ");
}

console.log("Rest formatter: " + formatLables("Mosh"));
console.log("Rest formatter: " + formatLables("Mosh", "John", "Jane"));


// Any type and never type
// Avoid using any type as much as possible







console.log("------------------- OBJECTS -------------------")
/* NOTE: When using any kind of object, prefer using type alias or interface 
 and also give atleast some type annotation to the object
instead of using object or {} as type annotation */ 
// Object Literal types
type Mail = {
    from: string;
    to: string[];
    subject: string;
    body: string;
    urgent?: boolean; // optional property
    cc: string[]; // can be empty array
}


let employee: {
    readonly id: number,  // readonly property
    name: string,
    retire: (date: Date) =>  void  // method
} = { id: 1, name: "Mosh", retire: (date: Date) => {
    console.log(date);
}
};
//  - you  can repeat yourself in above object type annotation
// - you can use type alias or interface below

// TYPE ALIAS
type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
}

// UNION TYPES
let weigth: number | string; // can be either number or string

function kgToLbs(weigth: number | string): number {
    weigth.toString(); // we can only use methods common to both types
    // Narrowing
    if (typeof weigth === 'number')
        return weigth * 2.2;
    else
        return parseInt(weigth) * 2.2;
}

let employeeweigth = kgToLbs(100);
console.log(employeeweigth);
employeeweigth = kgToLbs("100kg");
console.log(employeeweigth);

// DISCIMINATORY UNIONS
type loading = { status: 'loading' }
type success = { status: 'success', response: { data: string[] } }
type error =  { status: 'error', error: number }

type Result = loading | success | error;
function renderResult(result: Result) { 
    switch (result.status) {
        case 'loading':
            console.log("loading...");
            break;
        case 'success':
            console.log("Data: ", result.response.data);
            break;
        case 'error':
            console.log("Error: ", result.error);
            break;
            
    }
}


// INTERSECTION TYPES
let height: number & string; // can be both number and string -> impossible type

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable; // must implement both draggable and resizable

let textBox: UIWidget = {
    drag: () => {console.log("dragging")},
    resize: () => {console.log("resizing")}
}


// LITERAL TYPES
let quatity: 50 | 100 = 100; // can be either 50 or 100
// quatity = 200; // invalid

type Metric = 'cm' | 'inch' | 'm' | 'km';
let metric: Metric = 'cm';
// metric = 'kg'; // invalid

// NULLABLE TYPES
function greet(name: string | null) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}

greet(null); // Hola!
greet('Mosh'); // MOSH

// OPTIONAL CHAINING
type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date()}
} 
let customer = getCustomer(1);

// Optional property access operator
// if customer is null or undefined, it will return undefined instead of throwing an error
// if customer is not null or undefined, it will return customer.birthday
console.log(customer?.birthday?.getFullYear());

// Optional element access operator (Used with arrays)
// customers?.[0] -> if customers is null or undefined, it will return undefined instead of throwing an error

// Optional call
let log: any = null;
log ?.('message'); // if log is null or undefined, it will not throw an error

