// Parent Class
class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log(`Shape name: ${this.name}`);
  }
}

// Subclasses
class Rectangle extends Shape {
  constructor(name, width, height) {
    // super() calls on constructor of parent class - here to call in the name
    super(name);
    this.width = width;
    this.height = height;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    // super() calls on constructor of parent class - here to call in the name
    super(name);
    this.radius = radius;
  }
  //   Subclass method overwrites the parent class method
  logName() {
    console.log(`Circle name: ${this.name}`);
  }
}

const rect1 = new Rectangle('Rect 1', 20, 20);
const circ = new Circle('Circle 1', 30);
rect1.logName();
circ.logName();

// Both true as rect1 is constructed by both classes:
console.log(rect1 instanceof Rectangle);
console.log(rect1 instanceof Shape);
