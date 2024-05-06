

// call(): Calls a function with a specified this value and arguments provided individually.

Syntax:
// functionName.call(thisArg, arg1, arg2, ...);

Example:
const person1 = {
    name: 'John',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const anotherPerson = {
    name: 'Alice'
};
person1.greet.call(anotherPerson); // Output: Hello, my name is Alice

// apply(): Calls a function with a specified 'this' value and arguments provided as an array.

Syntax:
// functionName.apply(thisArg, [arg1, arg2, ...]);

Example:
const numbers = [1, 2, 3, 4, 5];
const max = Math.max.apply(null, numbers);
console.log(max); // Output: 5

// bind(): Creates a new function with a specified this value and, optionally, arguments.

Syntax:
// const newFunction = functionName.bind(thisArg, arg1, arg2, ...);

Example:
const person = {
    name: 'John',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const boundGreet = person.greet.bind(person);
boundGreet(); // Output: Hello, my name is John
