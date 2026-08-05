// console.log(document.getElementById('item-form'));
// const itemForm = document.getElementById('item-form');
// console.log(itemForm);
// itemForm.innerHTML = '<h1>Hello world</h1>';

let output;

// document... returns an arra-like object - not an array so cannot use array methods on them but can use indexing to return specific items from object

// .all - deprecated
// output = document.all[8];

// .documentElement - gives all HTML
// output = document.documentElement;

output = document.head;
output = document.body;
output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
// document.forms[0].id = 'new-id';

// output = document.links[0];
// output = document.links[0].id;
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';

output = document.images;
output = document.images[0].src;

console.log(output);
