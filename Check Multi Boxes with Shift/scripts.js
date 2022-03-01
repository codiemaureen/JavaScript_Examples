const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleClick(e){
  //check for shift key
  let inBetween = false;
  if(e.shiftKey && this.checked){
    checkboxes.forEach(checkbox => {
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
        console.log(checkbox);
      }
    });
  };
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleClick));