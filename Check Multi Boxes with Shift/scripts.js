  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

  let lastChecked;

  function handleClick(e){
    //check if the shift key is down
    //check if the box is being check or undchecked
    let inBetween = false;

    if(e.shiftKey && this.checked){
      //loop over each key
      checkboxes.forEach(checkbox => {
        if(checkbox === this || checkbox === lastChecked){
          inBetween = !inBetween;
        }
        if(inBetween){
          checkbox.checked = true;
        }
      })
    }

    lastChecked = this;
  }
  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleClick));