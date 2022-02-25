const divs = document.querySelectorAll('div');

function showText(e){
    e.stopPropagation(); //stop bubbling
    console.log(this);
}

divs.forEach(div => div.addEventListener('click', showText));