const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const cantidadInput = document.getElementById('cantidad');
const generarBtn = document.getElementById('generar');
const resultadoDiv = document.getElementById('resultado');

generarBtn.addEventListener('click', generarNumerosAleatorios);
function generarNumerosAleatorios() {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);
    const cantidad = parseInt(cantidadInput.value);
    
    if (isNaN(min) || isNaN(max) || isNaN(cantidad) || min >= max || cantidad <= 0) {
        resultadoDiv.innerText = "Por favor, ingresa valores válidos.";
        return;
    }
    
    const numeros = [];
    while (numeros.length < cantidad) {
        const numero = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }
    
    mostrarResultado(numeros);
    guardarEnStorage(numeros);
}
function mostrarResultado(numeros) {
    resultadoDiv.innerHTML = `<strong>Números generados:</strong> ${numeros.join(', ')}`;
}
function guardarEnStorage(numeros) {
    const timestamp = new Date().toLocaleString();
    const historial = JSON.parse(localStorage.getItem('historial')) || [];
    historial.push({ numeros, timestamp });
    localStorage.setItem('historial', JSON.stringify(historial));
}
function mostrarHistorial() {
    const historial = JSON.parse(localStorage.getItem('historial')) || [];
    resultadoDiv.innerHTML += `<h3>Historial:</h3>`;
    historial.forEach((item) => {
        resultadoDiv.innerHTML += `<p>${item.timestamp}: ${item.numeros.join(', ')}</p>`;
    });
}

document.addEventListener('DOMContentLoaded', mostrarHistorial);
