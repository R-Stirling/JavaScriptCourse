const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// Boxing - JS temporarily wraps a primitive (string, number, boolean) in an wrapper object and uses that object to resolve the method/property, then discards the wrapper.
console.log(strLit.toUpperCase());
console.log(strLit[0]);

// Unboxing - object turned back into a literal
console.log(strObj.valueOf(), typeof strObj.valueOf());

console.log(strLit.constructor);
console.log(strObj.constructor);

console.log(strLit instanceof String);
console.log(strObj instanceof String);

// Function and Object constructors

const funcLit = function (x) {
  return x * x;
};
// functions are an object type but have their own unique typeof
console.log(funcLit, typeof funcLit); //returns function code and `function` type

// Function constructor also exists - pass in argument and function body/code
const funcObj = new Function('x', 'return x  * x');
console.log(funcObj(3));

// when creating a new object:
const obj1 = {};
// JS implicitly uses new Object() constructor, like this:
const obj2 = new Object();

console.log(obj1, typeof obj1); // returns the object and type of `object`
