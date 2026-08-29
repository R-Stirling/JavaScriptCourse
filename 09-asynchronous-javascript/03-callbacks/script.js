// function toggler(e) {
//   console.log('callback ran');
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggler);

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

// Pass in getPosts() as a callback function - it runs quicker than createPost() so should only be invoked once createPost runs.
function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title} - ${post.body}</strong>`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

// getPost passed in here as a cb
createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
