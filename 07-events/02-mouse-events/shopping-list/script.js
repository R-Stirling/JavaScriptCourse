const logo = document.querySelector('img');

const onClick = () => console.log('Click Event');
const onDoubleClick = () => {
  console.log('Double Clicked');
  if (logo.style.backgroundColor != 'purple') {
    logo.style.backgroundColor = 'purple';
  } else {
    logo.style.backgroundColor = '';
  }
  logo.style.borderRadius = '10px';
};
const onRightClick = () => {
  if (logo.style.transform != 'rotate(90deg)') {
    logo.style.transition = 'transform 1s ease';
    logo.style.transform = 'rotate(90deg)';
  } else {
    logo.style.transition = 'transform 1s ease';
    logo.style.transform = 'rotate(0deg)';
  }
};

const onMouseDown = () => console.table('Mouse down event');
const onMouseUp = () => console.table('Mouse up event');
const onMouseWheel = () => console.table('Mouse wheel event');
const onMouseOver = () => console.table('Mouse over event');
const onMouseOut = () => console.table('Mouse out event');
const onDragstart = () => console.table('Mouse dragstart event');
const onDrag = () => console.table('Mouse drag event');
const onDragEnd = () => console.table('Mouse drag end event');

// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('mousewheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragstart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
