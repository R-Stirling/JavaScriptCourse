const items = document.querySelector('#item-list');

items.addEventListener('click', (e) => {
  const button = e.target.closest('button');
  if (button) {
    button.closest('li').remove();
  }
});

// Use mouseenter and mouseleave to retain the function when child element is focused. The third argument true tells addEventListener to listen during the capture phase rather than the default bubble phase — this lets a single listener on items still catch mouseenter/mouseleave firing on any descendant, even though those events don't bubble upward on their own.
items.addEventListener(
  'mouseenter',
  (e) => {
    if (e.target.tagName === 'LI') {
      e.target.style.outline = 'solid 2px black';
    }
  },
  true,
);
items.addEventListener(
  'mouseleave',
  (e) => {
    e.target.style.outline = '';
  },
  true,
);
