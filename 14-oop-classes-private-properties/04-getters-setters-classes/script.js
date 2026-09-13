class Person {
  constructor(firstName, lastName) {
    // Underscore a property to signify private property - not for end user access
    this._firstName = firstName;
    this._lastName = lastName;
  }
  // getter - getter name must be unique from property names in constructor
  get firstName() {
    // getter return using the original property name
    return this.capitalizeFirstLetter(this._firstName);
  }

  set firstName(value) {
    this._firstName = this.capitalizeFirstLetter(value);
  }

  get lastName() {
    // getter return using the original property name
    return this.capitalizeFirstLetter(this._lastName);
  }

  set lastName(value) {
    this._lastName = this.capitalizeFirstLetter(value);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Put the method into a function for reuse:
  capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person1 = new Person('john', 'doe');

// Call the getter method like a property
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);

// Setter used to then set the property outside of the class/setter
person1.firstName = 'sam';
person1.lastName = 'doobies';
// Original property
console.log(person1);
