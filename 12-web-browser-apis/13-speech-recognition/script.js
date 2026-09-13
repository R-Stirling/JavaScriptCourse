const start = document.getElementById('start');
const stop = document.getElementById('stop');
const output = document.getElementById('output');

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-GB';
rec.continuous = true;

// rec.onresult = function (e) {
//     const acceptedColors = [
//       'black',
//       'white',
//       'orange',
//       'red',
//       'blue',
//       'yellow',
//       'white',
//       'magenta',
//       'green',
//       'turquoise',
//       'purple',
//     ];
//   for (let i = e.resultIndex; i < e.results.length; i++) {
//     const script = e.results[i][0].transcript.toLowerCase().trim();

//     document.body.style.backgroundColor = script;
//   }
//   alert('Please say a colour!');
// };

rec.onresult = function (e) {
  for (let i = e.resultIndex; i < e.results.length; i++) {
    const newText = e.results[i][0].transcript.toLowerCase().trim();
    output.textContent = `${output.textContent} ${newText}`;
  }
};

start.addEventListener('click', () => {
  rec.start();
});
stop.addEventListener('click', () => {
  rec.stop();
});
