// Create a promise
const promise = new Promise((resolve, reject) => {
  // Do some async task - using setTimeout() to simulate waiting on a server repsonse
  setTimeout(() => {
    console.log('Async task complete');
    resolve('Promise resolved!');
  }, 1000);
});

// .then() runs once promise 'settles' - either resolves(succeeds) or rejects (fails).
// .then() takes in what's entered into resolve()
promise.then((result) => {
  console.log(result);
});

// Promises are non-blocking, callstack can still run while promise is pending

// .then() can also be used directly on a promise, rather than assigning promise to variable then using .then() on variable:

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async 2 complete');
    resolve({ name: 'John', age: 30 });
  }, 2000);
}).then((user) => {
  console.log(user);
});

// Promise with errors

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      console.log('getUser task run');
      resolve({ name: 'Rob', age: 32 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 3000);
});

getUser
  .then((user) => console.log(user))
  // .catch() is used when the promise rejects, skipping .then() - argument passed into reject() is paseed into .catch()
  .catch((error) => {
    console.log(error);
    document.querySelector('h1').textContent = error;
  })
  //  .finally() runs either way
  .finally(() => {
    console.log('The promise has been resolved or rejected.');
  });
