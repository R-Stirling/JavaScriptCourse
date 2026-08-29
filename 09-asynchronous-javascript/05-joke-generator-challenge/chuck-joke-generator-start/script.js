const jokeArea = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

// xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     const data = JSON.parse(this.responseText);
//     const joke = data.value;
//     jokeArea.textContent = joke;
//   }
// };
// xhr.send();

const addJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const joke = JSON.parse(this.responseText).value;
      jokeArea.textContent = joke;
    } else {
      jokeArea.textContent = 'Joke not found';
    }
    jokeBtn.textContent = 'Get Another Joke';
  };
  xhr.send();
};

jokeBtn.addEventListener('click', addJoke);
// Option to run function on page load:
// document.addEventListener('DOMContentLoaded', addJoke);
