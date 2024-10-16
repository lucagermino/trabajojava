let asistencias = 0; 
const maxasistencias = 10; 
let registroAsistencias = []; 

function registrarAsistencia(nombre) {
  if (asistencias < maxasistencias) {
    asistencias++;
    registroAsistencias.push(nombre);
    alert(`Asistencia de ${nombre} registrada correctamente.`);
  } else {
    alert("¡Terminaste el curso! ¡Felicidades!");
  }
}

function mostrarAsistencias() {
  if (asistencias === 0) {
    alert("Aún no has registrado ninguna asistencia.");
  } else {  
    console.log("Lista de asistencias:");
    for (let i = 0; i < registroAsistencias.length; i++) {
      console.log(`${i + 1}. ${registroAsistencias[i]}`);
    }
    alert(`Has registrado ${asistencias} asistencias.`);
  }
}
  
function contarAsistencias() {
  alert(`Es la ${asistencias} semana en el curso.`);
}

let opcion;

do {
  opcion = prompt(
    "Elige una opción:\n1. Registrar asistencia\n2. Mostrar asistencias\n3. Contar asistencias\n4. Salir"
  );
  switch (opcion) {
    case "1":
      let nombre = prompt("Ingresa tu nombre para registrar la asistencia:");
      registrarAsistencia(nombre);
      break;
    case "2":
      mostrarAsistencias();
      break;  
    case "3":
      contarAsistencias();
      break;
    case "4":
      alert("Saliendo del programa...");
      break;
    default:
      alert("Opción no válida, intenta de nuevo.");
  } } while (opcion !== “4”);