function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

// Add property to prototype - area will always be the same funtion for all rectangles, so add to prototype rather than indiviual object
Rectangle.prototype.area = function () {
  return this.width * this.height;
};
Rectangle.prototype.perimiter = function () {
  return 2 * (this.width + this.height);
};
Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

const rect = new Rectangle('Rect', 10, 20);
const rect2 = new Rectangle('Rect', 30, 40);

// Can now use new methods on the prototype
console.log(rect);
console.log(rect.area());
console.log(rect.perimiter());
console.log(rect.isSquare());

console.log(rect2.area());
