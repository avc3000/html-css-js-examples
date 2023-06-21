const boton = document.querySelector('button');
const color = document.getElementById('color');

function generateColorAleatory() {
  let digits = '0123456789ABCDEF';
  let colorHex = '#';

  for(let i = 0; i < 6; i++) {
    let indexAleatory = Math.floor(Math.random() * 16);
    colorHex += digits[indexAleatory];
  }
  return colorHex;
}

boton.addEventListener('click', function() {
  let colorAleatorio = generateColorAleatory();
  color.textContent = colorAleatorio;
  document.body.style.backgroundColor = colorAleatorio;
});