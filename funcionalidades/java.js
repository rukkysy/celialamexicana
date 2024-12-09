// Arreglo de colores
const colores = ["red", "blue", "green", "orange", "purple"];

// Seleccionamos el párrafo por su ID
const parrafo = document.getElementById("parrafoinstagram");

// Índice inicial para los colores
let indiceColor = 0;

// Función para cambiar de color
function cambiarColor() {
    // Cambia el color del párrafo
    parrafo.style.color = colores[indiceColor];

    // Incrementamos el índice del color
    indiceColor = (indiceColor + 1) % colores.length;
}

// Ejecuta la función cada 500 milisegundos (0.5 segundos)
setInterval(cambiarColor, 500);

// Obtener el año actual y mostrarlo en el footer
document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  });
  
