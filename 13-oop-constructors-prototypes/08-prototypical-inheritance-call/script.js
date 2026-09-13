// New constructor prototype
function Shape(name) {
  this.name = name;
}

Shape.prototype.logName = function () {
  console.log(`Shape Name: ${this.name}`);
};

function Rectangle(name, height, width) {
  //.call so 'this' refers to object instance rather than window (as it's a normal function)
  Shape.call(this, name);
  this.height = height;
  this.width = width;
}

// Inherit Shape prototypes
Rectangle.prototype = Object.create(Shape.prototype);

// Set the method to be specific to the prototype
Rectangle.prototype.logName = function () {
  console.log(`Rectangle Name: ${this.name}`);
};

function Circle(name, radius) {
  //.call so 'this' refers to object instance rather than window (as it's a normal function)
  Shape.call(this, name);
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);

// Set/reset prototype constructors
Rectangle.prototype.constructor = Rectangle;
Circle.prototype.constructor = Circle;

const rect = new Rectangle('Rectangle 1', 20, 20);
// console.log(rect);

const circle = new Circle('Circle 1', 30);
// console.log(circle);

console.log(rect);

rect.logName();
circle.logName();
