class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.height * this.width;
  }

  perimiter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }

  logArea() {
    console.log(`Rectangle Area: ${this.area()}`);
  }
}

const square = new Rectangle('Square', 20, 20);
console.log(square.area());
console.log(square.perimiter());
console.log(square.isSquare());
square.logArea();

const rect2 = new Rectangle('ReccyBoi', 30, 40);
console.log(rect2.isSquare());
rect2.logArea();
