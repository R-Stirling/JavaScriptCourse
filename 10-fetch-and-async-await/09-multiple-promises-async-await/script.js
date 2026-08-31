function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Error: Something went wrong');
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

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
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

// Use async await to invoke a function with a Promise
const getAllData = async () => {
  try {
    const movies = await getData('./movies.json');
    const actors = await getData('./actors.json');
    const directors = await getData('./directors.json');
    console.log(movies, actors, directors);
  } catch (error) {
    console.log(error);
  }
};

// getAllData();

// Use fetch() instead
const getAllData2 = async () => {
  try {
    const moviesRes = await fetch('./movies.json');
    const movies = await moviesRes.json();

    const actorsRes = await fetch('./actors.json');
    const actors = await actorsRes.json();

    const directorsRes = await fetch('./directors.json');
    const directors = await directorsRes.json();

    console.log(movies, actors, directors);
  } catch (error) {
    console.log(error);
  }
};

// getAllData2();

// Using Promise.all
// Promise.all takes in array of promises
const getAllDataPromiseAll = async () => {
  // create variables for the fetch requets responses and await the Promise.all
  try {
    const [moviesRes, actorsRes, directorsRes] = await Promise.all([
      fetch('./movies.json'),
      fetch('./actors.json'),
      fetch('./directors.json'),
    ]);
    const movies = await moviesRes.json();
    const actors = await actorsRes.json();
    const directors = await directorsRes.json();

    console.log(movies, actors, directors);
  } catch (error) {
    console.log('Error: ' + error);
  }
};

getAllDataPromiseAll();
