const panels = document.querySelectorAll('.panels');

function toggleOpen(){
  console.log('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));