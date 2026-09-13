// constructor function
function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;
  // .defineProperty on the Object - pass in 'this', the property name and an object with a getter and/or setter function
  Object.defineProperty(this, 'firstName', {
    get: function () {
      return this.capitalizeFirst(this._firstName);
    },
    set: function (value) {
      this._firstName = value;
    },
  });

  Object.defineProperty(this, 'lastName', {
    get: function () {
      return this.capitalizeFirst(this._lastName);
    },
    set: function (value) {
      this._lastName = value;
    },
  });

  Object.defineProperty(this, 'nee', {
    get: function () {
      if (this._nee) {
        return this.capitalizeFirst(this._nee);
      }
    },
    set: function (value) {
      this._nee = value;
    },
  });

  Object.defineProperty(this, 'fullName', {
    get: function () {
      if (this.nee) {
        return (
          this.firstName +
          ' ' +
          this.lastName +
          ' née ' +
          this.capitalizeFirst(this.nee)
        );
      } else {
        return this.firstName + ' ' + this.lastName;
      }
    },
  });
}

Person.prototype.capitalizeFirst = function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

// Use constructor to create new object
const person1 = new Person('rob', 'sterling');
// getters to return the properties formatted
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);
// setter to change the object property
person1.firstName = 'robin';
person1.lastName = 'stirling';
// getter returns new property value formatted
console.log(person1.fullName);

const person3 = new Person('sally', 'white');
person3.nee = 'jones';
console.log(person3.fullName);

// Object Literal
const PersonObj = {
  _firstName: 'jane',
  _lastName: 'doe',

  get firstName() {
    // can use the method/function from the Person protoype:
    return Person.prototype.capitalizeFirst(this._firstName);
  },

  set firstName(value) {
    this._firstName = value;
  },

  get lastName() {
    return Person.prototype.capitalizeFirst(this._lastName);
  },

  set lastName(value) {
    this._lastName = value;
  },

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
const person2 = Object.create(PersonObj);
console.log(person2.fullName);
person2.firstName = 'jane';
person2.lastName = 'weston';
console.log(person2.fullName);
