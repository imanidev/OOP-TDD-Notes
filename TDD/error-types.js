// Syntax Errors: Syntax errors occur when the code is not written according to the syntax rules of JavaScript. These errors are usually detected by the JavaScript engine during the parsing phase, before the code is executed. They often occur due to typos, missing brackets, or incorrect syntax.

Example:
let x = 5;
if (x == 5) { // Missing closing parenthesis
    console.log("x is equal to 5");
}

// Reference Errors: Reference errors occur when trying to access a variable or function that does not exist or is not currently in scope.This can happen when a variable is accessed before it's declared or when trying to access properties of null or undefined values.

Example:
console.log(y);
// ReferenceError: y is not defined


// Type Errors: Type errors occur when an operation is performed on a value of the wrong type.This can happen when trying to call a method on an undefined value or when using incompatible types in operations.
  Example:

let num = "hello";
console.log(num.toUpperCase()); // TypeError: num.toUpperCase is not a function

// Range Errors: Range errors occur when trying to manipulate an object with some kind of length and giving it an invalid length. This typically occurs with array-like objects or strings.

Example:
let arr = [1, 2, 3];
arr.length = -1; // RangeError: Invalid array length

// Internal Errors: Internal errors occur when the JavaScript engine encounters an unexpected situation, such as running out of stack space or memory.

Example:

function infiniteLoop() {
    return infiniteLoop();
}
infiniteLoop(); // Causes a stack overflow error
