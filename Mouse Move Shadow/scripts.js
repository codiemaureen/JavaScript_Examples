const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 400;


function shadow (e){
    //get height and width of the screen
    const { offsetWidth: width, offsetHeight: height } = hero;
    let  { offsetX: x, offsetY: y} = e;
    
    if(this != e){
        x = x + e.target.offsetLeft;
        y= y + e.target.offsetTop;
    };
    const xWalk = Math.round((x / width * walk ) - (walk / 2));
    const yWalk = Math.round((y / width * walk ) - (walk / 2));
    
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(128, 96, 104, 1),
    ${xWalk * -1}px ${yWalk}px 0 rgba(90, 125, 124, 1),
    ${yWalk}px ${xWalk * -1}px 0 rgba(107, 111, 78, 1),
    ${yWalk * -1}px ${xWalk}px 0 rgba(183, 159, 123, 1)`;
};

hero.addEventListener('mousemove', shadow);