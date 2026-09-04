const faceColor = document.getElementById('face-color');
const borderColor = document.getElementById('border-color');
const numLinesColor = document.getElementById('line-color');
const lrgHandsColor = document.getElementById('large-hand-color');
const secHandColor = document.getElementById('second-hand-color');
const canvas = document.getElementById('canvas');

// Load saved settings BEFORE the clock starts drawing
function loadSettings() {
  const saved = localStorage.getItem('clockSettings');
  if (!saved) return; // nothing saved yet, just use the HTML defaults

  const settings = JSON.parse(saved);
  faceColor.value = settings.face;
  borderColor.value = settings.border;
  numLinesColor.value = settings.numLines;
  lrgHandsColor.value = settings.lrgHands;
  secHandColor.value = settings.secHand;
}

function clock() {
  const now = new Date();
  const ctx = canvas.getContext('2d');

  // Setup canvas
  ctx.save(); // save the default state
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250); //Put 0,0 in the middle
  ctx.rotate(-Math.PI / 2); // Rotate -90deg

  //   Set default styles
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#f4f4f4';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  //   Draw clock face/border
  ctx.save(); //Save previous styles
  ctx.beginPath(); // Start drawing
  ctx.lineWidth = 14;
  ctx.strokeStyle = borderColor.value;
  ctx.fillStyle = faceColor.value;
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke(); //Apply drawing to page
  ctx.fill();
  ctx.restore(); // Reset to defaults

  //   Draw clock border shadow
  ctx.save(); //Save previous styles
  ctx.beginPath(); // Start drawing
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#e4e4e4';
  ctx.arc(0, 0, 140, 0, Math.PI * 2, true);
  ctx.stroke(); //Apply drawing to page

  ctx.restore(); // Reset to defaults

  // Draw Hour Marks/Lines
  ctx.save();
  ctx.strokeStyle = numLinesColor.value;
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);

    ctx.stroke();
  }
  ctx.restore();

  // Draw Minute Marks/Lines
  ctx.save();
  ctx.strokeStyle = numLinesColor.value;
  ctx.lineWidth = 4;

  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(115, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  //   Get current time
  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();

  //   Draw hour hand
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec,
  );
  ctx.strokeStyle = lrgHandsColor.value;
  ctx.fillStyle = lrgHandsColor.value;
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-25, 0);
  ctx.lineTo(70, 0);
  ctx.stroke();
  ctx.restore();

  //   Draw minute hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.strokeStyle = lrgHandsColor.value;
  ctx.fillStyle = lrgHandsColor.value;
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(110, 0);
  ctx.stroke();
  ctx.restore();

  //   Draw second hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * sec);
  ctx.strokeStyle = secHandColor.value;
  ctx.fillStyle = secHandColor.value;
  ctx.lineWidth = 4.5;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(90, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 9, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.restore(); // restore default state

  const settings = {
    face: faceColor.value,
    border: borderColor.value,
    numLines: numLinesColor.value,
    lrgHands: lrgHandsColor.value,
    secHand: secHandColor.value,
  };
  localStorage.setItem('clockSettings', JSON.stringify(settings));
  loadSettings();
  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);

document.getElementById('save-btn').addEventListener('click', () => {
  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = 'clock.png';
  link.href = dataURL;
  link.click();
});
