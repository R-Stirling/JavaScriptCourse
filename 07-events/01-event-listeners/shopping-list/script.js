// const clearBtn = document.querySelector('#clear');

// JS Event Listener - only one per event
// clearBtn.onclick = function () {
//   alert('Clear items');
// };

// addEventListener ()
// clearBtn.addEventListener('click', function () {
//   alert('Clear Items');
// });

// as arrow function
// clearBtn.addEventListener('click', () => {
//   alert('Clear Items');
// });

// shortened arrow function
// clearBtn.addEventListener('click', () => alert('Clear Items'));

// Can have multiple event listeners on same event
// clearBtn.addEventListener('click', () => console.log('Clear Items'));

//  Can use anonymous or named function with addEventListener() - don't include () in function name
// function onClear() {
//   alert('Cleared');
// }

// clearBtn.addEventListener('click', onClear);

// removeEventListener - example using setTimeOut()
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// .click() to make browser fire off event
// setTimeout(() => clearBtn.click(), 5000);

// Challenge - Clear button to clear list

const clearBtn = document.querySelector('#clear');
// const items = document.querySelectorAll('li');

// add display: hidden style to elements
// function clearItems() {
//   items.forEach((item) => {
//     item.style = 'display: none';
//   });
// }

// clearBtn.addEventListener('click', clearItems);

// remove outer HTML
// function clearItems2() {
//   items.forEach((item) => {
//     item.outerHTML = '';
//   });
// }

// clearBtn.addEventListener('click', clearItems2);

// item.remove
// function clearItems3() {
//   const itemList = document.querySelector('ul');
//   const items = itemList.querySelectorAll('li');
//   items.forEach((item) => item.remove());
// }

// clearBtn.addEventListener('click', clearItems3);

// while loop - check against there being a child
function clearItems4() {
  const itemList = document.querySelector('#item-list');
  const items = itemList.querySelectorAll('li');

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

clearBtn.addEventListener('click', clearItems4);
