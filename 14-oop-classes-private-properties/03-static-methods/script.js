class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  area() {
    return this.width * this.height;
  }
  // Static methods don't require instantiating with an object - can be called on without it.
  static getClass() {
    return 'Rectangle';
  }
}

const rect = new Rectangle('Rect', 20, 30);
// Regular method used on object of a class
console.log(rect.area());
// Static method called from class, not object of class
console.log(Rectangle.getClass());
