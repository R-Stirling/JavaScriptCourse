// remove;

// function removeClearButton() {
//   document.querySelector('#clear').remove();
// }

// or
function removeClearButton() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.remove();
}

// remove child

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');
  ul.removeChild(li);
}

// remove specific child
function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);
  ul.removeChild(li);
}

function removeItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];

  ul.removeChild(li);
}

// function removeItem3(itemNumber) {
//   const lis = document.querySelectorAll('li');
//   lis.forEach((li, index) => {
//     if (index + 1 === itemNumber) {
//       li.remove();
//     }
//   });
// }

function removeItem3(itemNumber) {
  const li = document.querySelectorAll('li');
  li[itemNumber - 1].remove();
}

const removeItem4 = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove();

// removeClearButton();
// removeFirstItem();
// removeItem(2);
// removeItem2(2);
// removeItem3(3);
removeItem4(2);
