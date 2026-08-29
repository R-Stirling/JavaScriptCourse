function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('Get', endpoint);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.responseText));
    }
  };

  setTimeout(
    () => {
      xhr.send();
    },
    Math.floor(Math.random() * 3000) + 1000,
  );
}

// Callback Hell - nesting callbacks within eachother, starts to get messy/harder to read.
// Use promises instead
getData('./movies.json', (data) => {
  console.log(data);
  getData('./actors.json', (data) => {
    console.log(data);
    getData('./directors.json', (data) => {
      console.log(data);
    });
  });
});
