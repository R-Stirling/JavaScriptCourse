// Method 1 - Change Div content

const keyInfo = (e) => {
  const insert = document.querySelector('#insert');
  const keys = Array.from(insert.children);
  keys[0].innerHTML = e.key === ' ' ? 'Space' : e.key + ' <small>e.key</small>';
  keys[1].innerHTML = e.keyCode + ' <small>e.keyCode</small>';
  keys[2].innerHTML = e.code + ' <small>event.code</small>';
};

// document.body.addEventListener('keydown', keyInfo);

// Method 2 - Create new Divs
const keyInfo2 = (e) => {
  const newKey = document.createElement('div');
  newKey.className = 'key';
  newKey.innerHTML = e.key === ' ' ? 'Space' : e.key + ' <small>e.key</small>';

  const newKeyCode = document.createElement('div');
  newKeyCode.className = 'key';
  newKeyCode.innerHTML = e.keyCode + ' <small>e.keyCode</small>';

  const newCode = document.createElement('div');
  newCode.className = 'key';
  newCode.innerHTML = e.code + ' <small>event.code</small>';

  insert.innerHTML = '';
  insert.appendChild(newKey);
  insert.appendChild(newKeyCode);
  insert.appendChild(newCode);
};

// document.body.addEventListener('keydown', keyInfo2);

// Instructor solutions:

// Method 3
// window.addEventListener('keydown', (e) => {
//   const insert = document.getElementById('insert');

//   insert.innerHTML = `
//     <div class="key">
//       ${e.key === ' ' ? 'Space' : e.key}
//       <small>e.key</small>
//     </div>

//     <div class="key">
//       ${e.keyCode}
//       <small>e.keyCode</small>
//     </div>

//     <div class="key">
//       ${e.code}
//       <small>e.code</small>
//     </div>
//   `;
// });

// Method 4
function showKeyCodes(e) {
  const insert = document.getElementById('insert');
  insert.innerHTML = '';

  const keyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'event.code': e.code,
  };

  for (let key in keyCodes) {
    const div = document.createElement('div');
    div.className = 'key';
    const small = document.createElement('small');

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);
  }
}

window.addEventListener('keydown', showKeyCodes);
