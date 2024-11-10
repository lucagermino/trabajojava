let estadoJuego = JSON.parse(localStorage.getItem("estadoJuego")) || ["", "", "", "", "", "", "", "", ""];
let jugadorActual = localStorage.getItem("jugadorActual") || "X";
let juegoActivo = true;

const celdas = Array.from(document.querySelectorAll(".celda"));
const botonReiniciar = document.getElementById("botonReiniciar");
const estadoJuegoTexto = document.getElementById("estadoJuego");


const posicionesGanadoras = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function actualizarEstadoJuego(mensaje) {
  estadoJuegoTexto.textContent = mensaje;
}

function cambiarJugador() {
  jugadorActual = jugadorActual === "X" ? "O" : "X";
  localStorage.setItem("jugadorActual", jugadorActual);
  actualizarEstadoJuego(`Turno del jugador ${jugadorActual}`);
}

function renderizarTablero() {
  celdas.forEach((celda, index) => {
    celda.textContent = estadoJuego[index];
  });
}


function verificarGanador() {
  return posicionesGanadoras.some(posicion =>
    posicion.every(index => estadoJuego[index] === jugadorActual)
  );
}


function verificarEmpate() {
  return estadoJuego.every(celda => celda !== "");
}


function manejarClicCelda(e) {
  const indiceCelda = e.target.getAttribute("data-index");

  if (estadoJuego[indiceCelda] !== "" || !juegoActivo) return;

 
  estadoJuego[indiceCelda] = jugadorActual;
  localStorage.setItem("estadoJuego", JSON.stringify(estadoJuego));
  renderizarTablero();

  if (verificarGanador()) {
    juegoActivo = false;
    actualizarEstadoJuego(`¡El jugador ${jugadorActual} gana!`);
  } else if (verificarEmpate()) {
    juegoActivo = false;
    actualizarEstadoJuego("¡Es un empate!");
  } else {
    cambiarJugador();
  }
}


function reiniciarJuego() {
  estadoJuego = ["", "", "", "", "", "", "", "", ""];
  jugadorActual = "X";
  juegoActivo = true;
  localStorage.setItem("estadoJuego", JSON.stringify(estadoJuego));
  localStorage.setItem("jugadorActual", jugadorActual);
  renderizarTablero();
  actualizarEstadoJuego(`Turno del jugador ${jugadorActual}`);
}


celdas.forEach(celda => celda.addEventListener("click", manejarClicCelda));
botonReiniciar.addEventListener("click", reiniciarJuego);


renderizarTablero();
actualizarEstadoJuego(`Turno del jugador ${jugadorActual}`);