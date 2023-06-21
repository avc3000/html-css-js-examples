let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function generateInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
  let indexAleatory = generateInteger(0, citas.length);
  citaElem.innerText = `" ${citas[indexAleatory].texto} "`;
  autorElem.innerText = citas[indexAleatory].autor;
}

cambiarCita();

botonElem.addEventListener('click', cambiarCita);