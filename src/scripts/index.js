'use strict';

const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.width = canvas.width / 2;
canvas.style.height = canvas.height / 2;
const ctx = canvas.getContext('2d');
ctx.scale(2, 2);

// Background
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function getMousePos(event) {
	var rect = canvas.getBoundingClientRect(), // abs. size of element
		scaleX = canvas.width / rect.width, // relationship bitmap vs. element for X
		scaleY = canvas.height / rect.height; // relationship bitmap vs. element for Y
	return {
		x: (event.clientX - rect.left) * scaleX / 2, // scale mouse coordinates after they have
		y: (event.clientY - rect.top) * scaleY / 2 // been adjusted to be relative to element
	};
}

canvas.addEventListener('mousemove', event => drawTriangles(event));
const size = 25;
let gradient;

function drawTriangles(event) {
	let mousePos = false;
	if (event) {
		mousePos = getMousePos(event);
	}

	let top = 0;
	let bottom = size;
	let left = 0;
	let right = size;

	while (top <= canvas.height / 2) {
		while (left <= canvas.width / 2) {

			let active =
				mousePos &&
				mousePos.x < right &&
				mousePos.x > left &&
				mousePos.y < bottom &&
				mousePos.y > top;


			switch (Math.floor(Math.random() * Math.floor(4))) {
				case 0: gradient = ctx.createLinearGradient(right, top, left, bottom); break;
				case 1: gradient = ctx.createLinearGradient(left, bottom, right, top); break;
				case 2: gradient = ctx.createLinearGradient(right, bottom, left, top); break;
				case 3: gradient = ctx.createLinearGradient(left, top, right, bottom); break;
				default: gradient = ctx.createLinearGradient(right, top, left, bottom); break;
			}

			if (!event) {
				gradient.addColorStop(0, '#30cfd0');
				gradient.addColorStop(1, '#330867');
				ctx.fillStyle = gradient;
				ctx.fillRect(left + 1, top + 1, size - 2, size - 2);
			}
			 else if (active) {
				gradient.addColorStop(0, '#5ee7df');
				gradient.addColorStop(1, '#b490ca');
				ctx.fillStyle = gradient;
				ctx.fillRect(left + 1, top + 1, size - 2, size - 2);
			}

			left += size;
			right += size;
		}
		left = 0;
		right = size;
		top += size;
		bottom += size;
	}
}
drawTriangles();
