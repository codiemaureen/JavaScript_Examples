  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');

//size canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


ctx.strokeStyle = 'blue';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;