// querySelectorALL()

// return NodeList (array-like object) of all elements by type:
const listItems = document.querySelectorAll('li');
console.log(listItems);

// return specific element using index:
console.log(listItems[0]);
// return attribute of an element:
console.log(listItems[0].innerText);

// Change attribute of indiviual item in NodeList
listItems[1].style.color = 'red';

// Change attribute of all items in NodeList using forEach()
listItems.forEach((item) => (item.style.backgroundColor = 'lightgrey'));

// listItems.forEach((item, index) => {
//   item.style.backgroundColor = 'darkgrey';
//   if (index === 1) {
//     item.remove();
//   }
//   // use innerHTML here to change the content, but template strings to retain the additional HTML for delete button
//   if (index === 0) {
//     item.innerHTML = `Oranges
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;
//   }
// });

// getElementsByClassName() - returns an HTML collection (array-like can't use array methods on it)
const listItems2 = document.getElementsByClassName('item');
// Array.from() to return an array
const listItems2Array = Array.from(listItems2);
console.log(listItems2Array);
// can then use array methods on it:
listItems2Array.forEach((item) => {
  console.log(item.innerText);
});

const listItem3 = document.getElementsByTagName('li');
console.log(listItem3[0].innerText);
