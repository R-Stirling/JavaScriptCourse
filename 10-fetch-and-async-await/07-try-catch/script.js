// try {
//   console.log(x);
// } catch (error) {
//   console.log('Error: ' + error);
// }

const double = (number) => {
  if (isNaN(number)) {
    throw new Error(number + ' is not a number');
  } else {
    return number * 2;
  }
};

try {
  const y = double('string');
  console.log(y);
} catch (error) {
  console.table(error);
}
