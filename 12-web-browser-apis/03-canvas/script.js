const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

console.log(ctx);

// Draw Rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

// Draw Circle
ctx.fillStyle = 'red';
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();

// Draw Lines
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth = 3;
ctx.moveTo(80, 55);
ctx.lineTo(300, 300);
ctx.stroke();

// Draw Text
ctx.font = '50px Arial';
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'purple';
ctx.fillText('fillText', 250, 100, 300);
ctx.strokeText('strokeText', 250, 500, 500);

// Draw Image
const footballImage = document.querySelector('img');
footballImage.style.display = 'none';

footballImage.addEventListener('load', () => {
  ctx.drawImage(footballImage, 250, 250, 100, 100);
});

// Messing around etc.

// Line in from left to middle -50px
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth = 3;
ctx.moveTo(0, 300);
ctx.lineTo(250, 300);
ctx.stroke();

// Line in from right to middle +50px
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth = 3;
ctx.moveTo(600, 300);
ctx.lineTo(350, 300);
ctx.stroke();

// Line in from top to middle -50px
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth = 3;
ctx.moveTo(300, 0);
ctx.lineTo(300, 250);
ctx.stroke();

// Line in from bottom to middle +50px
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth = 3;
ctx.moveTo(300, 600);
ctx.lineTo(300, 350);
ctx.stroke();
