function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Something went wrong');
        }
      }
    };

    setTimeout(
      () => {
        xhr.send();
      },
      Math.floor(Math.random() * 3000) + 1000,
    );
  });
}

// const moviesPromise = getData('./movies.json');
// const actorsPromise = getData('./actors.json');
// const directorsPromise = getData('./directors.json');

// moviesPromise
//   .then((data) => {
//     console.log(data);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));

const moviesPromise = getData('./movies.json');
const actorsPromise = getData('./actors.json');
const directorsPromise = getData('./directors.json');

Promise.all([moviesPromise, actorsPromise, directorsPromise])
  .then(([movies, actors, directors]) => {
    buildTable(movies, actors, directors);
  })
  .catch((error) => console.log(error));

function buildTable(movies, actors, directors) {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';
  // Find the longest array, in case they're not all the same length
  const rowCount = Math.max(movies.length, actors.length, directors.length);

  for (let i = 0; i < rowCount; i++) {
    const row = document.createElement('tr');
    appendPairCells(row, movies[i]);
    appendPairCells(row, actors[i]);
    appendPairCells(row, directors[i]);

    tableBody.appendChild(row);
  }
}

function appendPairCells(row, obj) {
  const values = obj ? Object.values(obj) : ['', ''];

  values.forEach((value) => {
    const cell = document.createElement('td');
    cell.textContent = value;
    row.appendChild(cell);
  });
}
