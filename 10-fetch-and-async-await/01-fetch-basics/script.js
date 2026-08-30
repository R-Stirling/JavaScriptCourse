// Use fetch() instead of XMLHttpRequest
// fetch('./movies.json').then((response) => {
//   // return the response and use .json() method on it to access the data
//   return response.json();
// });

// Implicit return so can shorten/tidy:

fetch('./movies.json')
  .then((response) => response.json())

  //   The next .then() can then access the data
  .then((data) => {
    dataLogger(data);
    divBuilder(data);
  });

const dataLogger = (data) => {
  data.forEach((entry) => console.log(entry));
};

const divBuilder = (data) => {
  data.forEach((entry) => {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = entry.title;
    const p = document.createElement('p');
    p.textContent = entry.release_year;
    div.appendChild(h2);
    div.appendChild(p);

    document.getElementById('data-div').append(div);
  });
};

// Fetching a text file
fetch('./test.txt')
  // use .text() method on text files to access data
  .then((response) => response.text())
  .then((data) => console.log(data));

//   Fetching from an API
const fetchUser = () => {
  fetch('https://api.github.com/users')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((entry) => {
        console.log(entry.login);
      });
      document.querySelector('h1').textContent = data[10].login;
    });
};
setTimeout(fetchUser, 2000);
