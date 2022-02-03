const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');


function shadow (e){
    //get height and width of the screen
    const { offsetWidth: width, offsetHeight: height } = hero;
    let  { offsetX: x, offsetY: y} = e;
    console.log(x,y);
};

hero.addEventListener('mousemove', shadow);