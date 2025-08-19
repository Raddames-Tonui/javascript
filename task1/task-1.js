// 1. a string
function isString(value) {
    if (typeof value === 'string') {
        return true;
    } else {
        return false;
    }
}

// 2. a number (but not NaN)
function isNumber(value) {
    if (typeof value === 'number' && !isNaN(value)) {
        return true;
    } else {
        return false;
    }
}

// 3. a boolean
function isBoolean(value) {
    if (typeof value === 'boolean') {
        return true;
    } else {
        return false;
    }
}

// 4. undefined
function isUndefined(value) {
    if (typeof value === 'undefined') {
        return true;
    } else {
        return false;
    }
}

// 5. null
function isNull(value) {
    if (value === null) {
        return true;
    } else {
        return false;
    }
}

// 6. an array
function isArray(value) {
    if (Array.isArray(value)) {
        return true;
    } else {
        return false;
    }
}

// 7. an object (but not an array or null)
function isObject(value) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        return true;
    } else {
        return false;
    }
}

// 8. a function
function isFunction(value) {
    if (typeof value === 'function') {
        return true;
    } else {
        return false;
    }
}





console.log(isString("Hello")); 
console.log(isNumber(23));     
console.log(isBoolean(false));  
console.log(isUndefined(undefined)); 
console.log(isNull(null));      
console.log(isArray([1, 2, 3])); 
console.log(isObject({a: 1}));   
console.log(isFunction()); 
