function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // .open() opens up the request, doesn't send to server - GET is type of request
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
    // Random timer 0 to 4 seconds before sending the request:
    setTimeout(
      () => {
        // .send() sends the request to the server
        xhr.send();
      },
      Math.floor(Math.random() * 3000) + 1000,
    );
  });
}

// Chain return and .then() to ensure each runs in turn
getData('./movies.json')
  .then((movies) => {
    console.log(movies);
    return getData('./actors.json');
  })
  .then((actors) => {
    console.log(actors);
    return getData('./directors.json');
  })
  .then((directors) => {
    console.log(directors);
  })
  .catch((error) => {
    console.log(error);
  });

// getData('./movies1.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .catch((error) => {
//     console.log(error);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .catch((error) => {
//     console.log(error);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
