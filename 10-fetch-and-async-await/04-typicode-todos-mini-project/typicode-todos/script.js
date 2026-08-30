const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
const toDoDiv = document.getElementById('todo-list');
// const addBtn = document.querySelector('button');
const inputField = document.getElementById('title');

// Fetch entries from API
function getToDos() {
  toDoDiv.innerHTML = '';
  fetch(apiUrl + '?_limit=10')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((entry) => {
        addToDom(entry);
      });
    });
}
// Build entry into DOM
function addToDom(entry) {
  const div = document.createElement('div');
  div.classList.add('todo');
  div.textContent = entry.title;
  div.setAttribute('data-id', entry.id);
  if (entry.completed) {
    div.classList.add('done');
  }
  toDoDiv.appendChild(div);
}

// Create entry from text
function createToDo(e) {
  e.preventDefault();
  if (inputField.value === '') {
    alert('Please add a todo');
  } else {
    const newToDo = {
      title: inputField.value,
      completed: false,
    };
    sendToDoToServer(newToDo);
  }
}

// Send entry to API
function sendToDoToServer(entry) {
  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(entry),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      addToDom(data);
    });
}

// Toggle completed
const toggleCompleted = (e) => {
  if (e.target.classList.contains('todo')) {
    e.target.classList.toggle('done');

    updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
  }
};

const updateTodo = (id, completed) => {
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const deleteTodo = (e) => {
  if (e.target.classList.contains('todo')) {
    const id = e.target.dataset.id;
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => e.target.remove());
  }
};

const init = () => {
  getToDos();
  document.querySelector('#todo-form').addEventListener('submit', createToDo);
  document
    .querySelector('#todo-list')
    .addEventListener('click', toggleCompleted);
  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
};
init();
