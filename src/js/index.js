let buttonPurple = document.getElementById('purple');
let buttonRed = document.getElementById('red');
let buttonGreen = document.getElementById('green');

buttonPurple.addEventListener('click', changeColor);
buttonRed.addEventListener('click', changeColor);
buttonGreen.addEventListener('click', changeColor);

function changeColor(e) {
  let shoe = document.querySelector('img');
  if (e.target.id === 'purple') {
    shoe.style.filter = 'hue-rotate(45deg)';
  } else if (e.target.id === 'red') {
    shoe.style.filter = 'hue-rotate(120deg)';
  } else {
    shoe.style.filter = 'hue-rotate(230deg)';
  }
}
