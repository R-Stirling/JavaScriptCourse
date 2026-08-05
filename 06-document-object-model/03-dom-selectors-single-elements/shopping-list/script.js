// document.getElementByID()

let output;

output = document.getElementById('app-title');
output = document.getElementById('app-title').id;
output = document.getElementById('app-title').className;
// get attribute:
output = document.getElementById('app-title').getAttribute('id');

// Set attribute:
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title');

output = document.getElementById('app-title');
console.log(output);

// Get/Change content
console.log(output.textContent);
output.textContent = 'Hola Mundo';
output.innerText = 'Hola World';
output.innerHTML = '<strong>Shopping List</strong>';

// Change Style
output.style.color = 'red';
output.style.backgroundColor = 'black';
output.style.padding = '10px';
output.style.borderRadius = '20px';

// document.querySelector() - selects single elements
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text'));
console.log(document.querySelector('li:nth-child(2)').innerText);

// use to change attributes of element
const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';
secondItem.style.backgroundColor = 'lightgrey';

// Use these methods on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';
