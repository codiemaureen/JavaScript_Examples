const pressed = [];
const secretCode = 'codie';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  console.log(pressed);
});