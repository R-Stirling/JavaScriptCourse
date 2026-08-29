const xhr = new XMLHttpRequest();

// .open() to use GET on an API or local JSON file

// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/bradtraversy/repos');

// readyState has 5 possible values
//  - 0: request not initialised
//  - 1: server connection established
//  - 2: request recieved
//  - 3: processing request
//  - 4: request finished and response is ready

xhr.onreadystatechange = function () {
  // validate that readyState is at 4 and status 200
  if (this.readyState === 4 && this.status === 200) {
    // parse JSON data into a new array variable
    const data = JSON.parse(this.responseText);
    // forEach() to use each array element
    data.forEach((repo) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong><a href="${repo.html_url}" target="_blank">${repo.name}</a></strong> - ${repo.description}`;
      document.querySelector('#results').appendChild(li);
    });
  }
};

xhr.send();
