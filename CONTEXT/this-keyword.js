// 'this' is a keyword that refers to the current execution context or the object that the function is being executed on. The value of this is determined by how a function is called and where it is called from. It can behave differently depending on whether the function is called in the global scope, as a method of an object, or within a constructor function, among other contexts.

// Global Context: When used outside of any function or object, this refers to the global object, which is window in browsers and global in Node.js.

console.log(this === window); // true in a browser environment

// Function Context: When used within a function that is not called as a method of an object, this refers to the global object in non-strict mode and undefined in strict mode.

function sayHello() {
  console.log(this);
}
sayHello(); // refers to the global object or undefined depending on the mode

// Method Context: When used within a method of an object, this refers to the object that the method is called on.

const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person.greet(); // refers to the 'person' object

// Constructor Context: When used within a constructor function, this refers to the newly created object instance.

function Person(name) {
  this.name = name;
}
const john = new Person("John");
console.log(john.name); // 'John'
