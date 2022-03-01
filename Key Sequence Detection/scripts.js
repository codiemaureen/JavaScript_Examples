const pressed = [];
const secretCode = 'codie';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('SUCCESS! You have guessed the secret code! 🎖');
    cornify_add();
  };
});