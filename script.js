// Respuestas correctas de las diez preguntas.
const correctas = ["c", "b", "c", "a", "d", "d", "c", "a", "c", "d"];

document.addEventListener("submit", function (event) {
  event.preventDefault();

  const formulario = event.target;
  const elegidas = [];

  // Busca la opción marcada de cada pregunta.
  for (let i = 0; i < correctas.length; i++) {
    const opcion = formulario.querySelector('input[name="p' + i + '"]:checked');
    if (!opcion) {
      alert("Por favor, responde todas las preguntas antes de enviar.");
      return;
    }
    elegidas.push(opcion.value);
  }

  let aciertos = 0;
  for (let i = 0; i < correctas.length; i++) {
    if (elegidas[i] === correctas[i]) aciertos++;
  }

  document.getElementById("resultado").textContent = aciertos;
});
