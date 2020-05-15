let buttonPurple = document.getElementById('purple');
let buttonRed = document.getElementById('red');
let buttonGreen = document.getElementById('green');

buttonPurple.addEventListener('click', changeColor);
buttonRed.addEventListener('click', changeColor);
buttonGreen.addEventListener('click', changeColor);

function changeColor(e) {
  let container = document.querySelector('.imgBx');
  let shoe = document.querySelector('img');
  let buttonBuy = document.getElementById('btnBuy');

  if (e.target.id === 'purple') {
    container.style.backgroundColor = '#6a2096';
    shoe.style.filter = 'hue-rotate(45deg)';
    buttonBuy.style.backgroundColor = '#380755';
  } else if (e.target.id === 'red') {
    container.style.backgroundColor = '#961719';
    shoe.style.filter = 'hue-rotate(120deg)';
    buttonBuy.style.backgroundColor = '#560203';
  } else {
    container.style.backgroundColor = '#0d610d';
    shoe.style.filter = 'hue-rotate(230deg)';
    buttonBuy.style.backgroundColor = '#003000';
  }
}
