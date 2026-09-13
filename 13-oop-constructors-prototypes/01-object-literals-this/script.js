// Object Literals only useful for creating one-off objects - not for multiple objects with the same/similar properties
const rectangle = {
  name: 'Rectangle 1',
  width: 20,
  height: 10,
  //   Add method in object
  area: function () {
    return this.width * this.height;
  },
};

// Call method from object
console.log(rectangle.area());
