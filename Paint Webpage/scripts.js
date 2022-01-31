  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');

  //size the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  //set base styles
  ctx.strokeStyle = '#BADA55';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 2;

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;
  let direction = true;



  function draw(e){
    if(!isDrawing) return; //stops function from running if the user is not clicking
    
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    
    ctx. beginPath();
    //start
    ctx.moveTo(lastX, lastY);
    //end
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;

    if(hue >= 360){
      hue = 0;
    }

    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
      direction = !direction;
    }

    if(direction){
      ctx.lineWidth++;
    }else{
      ctx.lineWidth--;
    }
  }


  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    //seperate lines
    [lastX, lastY] = [e.offsetX, e.offsetY];
  })

  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);