const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');


function handleClick(e){
  console.log(e);
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleClick));