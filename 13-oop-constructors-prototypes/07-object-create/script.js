// Create object of new prototype methods

const rectanglePrototypes = {
  area: function () {
    return this.width * this.height;
  },
  perimiter: function () {
    return 2 * (this.width * this.height);
  },
  isSquare: function () {
    return this.height === this.width;
  },
};

// Object.create() - takes in the object of protoype methods and the object properties
function createRectangle(height, width) {
  return Object.create(rectanglePrototypes, {
    height: {
      value: height,
    },
    width: {
      value: width,
    },
  });
}

// create function can then be used to create the object with those methods available on them
const rect = createRectangle(10, 20);
console.log(rect);
console.log(rect.area());
console.log(rect.perimiter());
console.log(rect.isSquare());

const rect2 = createRectangle(30, 30);
console.log(rect2);
console.log(rect2.area());
console.log(rect2.perimiter());
console.log(rect2.isSquare());
