let output;

// Get child elements using .children PROPERTY (not method)
const parent = document.querySelector('.parent');

output = parent.children;
output = parent.children[1];
output = parent.children[1].innerText;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// return parent of element
const child = document.querySelector('.child');
output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Sibling Elements
const secondChild = document.querySelector('.child:nth-child(2)');
output = secondChild.nextElementSibling.innerText;

secondChild.nextElementSibling.style.color = 'green';
secondChild.previousElementSibling.style.color = 'orange';

console.log(output);
