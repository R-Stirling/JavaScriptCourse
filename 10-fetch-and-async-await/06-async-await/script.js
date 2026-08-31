const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'John', age: 20 });
  }, 1000);
});

async function getPromise() {
  const response = await promise;
  console.log(response);
}
// getPromise();

// async to define and run the function and await to run the code once repsonse is avaialble/returned
async function getUsers() {
  // await replaces .then() - res variable gets defined once fetch completes
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //   data variable awaits the res variable being defined to then also be defined
  const data = await res.json();
  //   remaining code can run once await promise resolves

  console.log(data);
}
getUsers();

// Async arrow function
const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  console.log(data);
};

getPosts();
