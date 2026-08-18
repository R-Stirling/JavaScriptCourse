const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
  // className
  //   console.log(itemList.className);
  //   text.className = 'card dark';

  //   classList
  console.log(itemList.classList);
  itemList.classList.forEach((c) => console.log(c));
  // .add to add additional class to existing
  //   text.classList.add('dark');
  //   .remove to remove ecisting class
  //   text.classList.remove('card');
  //   .toggle to switch between adding and removing a class
  //   text.classList.toggle('hidden');
  //   .replace
  //   text.classList.replace('card', 'dark');

  //   Change Style
  itemList.style.lineHeight = '3';

  items.forEach((item, index) => {
    item.style.color = 'red';
    if (index === 2) {
      item.style.color = 'blue';
    } else if (index === 3) {
      item.style.color = 'green';
    }
  });
}

document.querySelector('button').onclick = run;
