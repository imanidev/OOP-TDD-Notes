// Classes: Blueprint for creating objects

class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

const myCar = new Car("Toyota");
console.log(myCar.brand); // Output: Toyota

// Objects: Instances of classes, encapsulating data and functionality

const person = {
  name: "Joe",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  },
};

console.log(person.name); // Output: Joe
person.greet(); // Output: Hello, my name is Joe!

// Inheritance: Mechanism where a new class inherits properties and behaviors from another class

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks.

// Encapsulation: Bundling of data with methods that operate on that data to restrict direct access to some of the object's components

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // Output: 100
account.withdraw(50);
console.log(account.getBalance()); // Output: 50

//Polymorphism: Objects can take on multiple forms or have different behaviors depending on their context

class Animal {
  makeSound() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!");
  }
}

const fido = new Dog();
const felix = new Cat();

fido.makeSound(); // Output: Woof woof!
felix.makeSound(); // Output: Meow!
