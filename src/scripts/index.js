var canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.width = canvas.width / 2;
canvas.style.height = canvas.height / 2;
const ctx = canvas.getContext('2d');
ctx.scale(2, 2);

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'pink';
// Filled triangle
ctx.beginPath();
ctx.moveTo(25, 25);
ctx.lineTo(105, 25);
ctx.lineTo(25, 105);
ctx.fill();
