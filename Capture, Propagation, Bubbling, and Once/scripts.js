const divs = document.querySelectorAll('div');

function showText(e){
    console.log(this);
}

divs.forEach(div => div.addEventListener('click', showText));