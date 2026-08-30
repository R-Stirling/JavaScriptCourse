// fetch('https://jsonplaceholder.typicode.com/todos/')
//   .then((response) => response.json())
//   .then((res) => {
//     console.log(res);
//     for (let i = 0; i <= 10; i++) {
//       console.log(res[i]);
//     }
//   });

// POST method - sending data to API
function createPost({ title, body }) {
  fetch('https://jsonplaceholder.typicode.com/posts/', {
    method: 'POST',
    body: JSON.stringify({
      // as key and value are the same, can simplify and just have one word here:
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json',
      token: 'abc123',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// Use POST on array of objects
const posts = [
  { title: 'My First Array Post', body: 'This is my first post from array' },
  { title: 'My Second Array Post', body: 'This is my second post from array' },
  { title: 'My Third Array Post', body: 'This is my third post from array' },
];

function createPost2(entries) {
  // can still destructure here and keep later shorthand
  entries.forEach(({ title, body }) => {
    fetch('https://jsonplaceholder.typicode.com/posts/', {
      // using POST method to send this to API/server
      method: 'POST',
      //   stringify data
      body: JSON.stringify({
        // as key and value are the same, can simplify and just have one word here:
        title,
        body,
      }),
      //   headers are metadata - tells server how to deal with the request
      headers: {
        // content-type tells server that data is JSON format
        'Content-Type': 'application/json',
        // just an example of an auth token:
        token: 'abc123',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
}

createPost({ title: 'My Post', body: 'This is my post' });
createPost2(posts);
