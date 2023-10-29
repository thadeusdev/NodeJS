// const person = {
//     name: 'John Doe',
//     age: 30,
// };

// module.exports = person;

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // lets create a method called greeting
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`)
  }
}

module.exports = Person;