const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', () => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', () => {
    if(!isDown) return;
    console.log(isDown);
    console.log('Mousemove');
});
