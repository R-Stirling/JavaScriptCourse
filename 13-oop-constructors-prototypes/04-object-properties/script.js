function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rectangle 1', 20, 20);
const rect2 = new Rectangle('Rectangle 2', 20, 30);

console.log(rect1.name, rect2.width);
console.log(rect1['width']);

// Add a new property to object
rect1.color = 'red';
console.log(rect1.color);

// Set a function on an individual object
rect2.perimeter = () => 2 * (rect2.width + rect2.height);
console.log(rect2.perimeter());

// Remove a property from object
delete rect2.perimeter;
console.log(rect2.perimeter); //Now undefined

// Check for property
console.log(rect1.hasOwnProperty('color')); //returns true
console.log(rect2.hasOwnProperty('color')); //returns false

// Get Keys of an Object
console.log(Object.keys(rect1)); //Returns array of object property keys (name, width, height, area, color)

// Get values of an Object
console.log(Object.values(rect2)); //Returns calues of object properties

// Get entries
console.log(Object.entries(rect1)); //returns array of arrays of key value pairs of object properties

// For loop of object entries
for (let [key, value] of Object.entries(rect1)) {
  // only run if the value of the property isn't a function
  if (typeof value !== 'function') {
    console.log(`${key} - ${value}`);
  }
}
