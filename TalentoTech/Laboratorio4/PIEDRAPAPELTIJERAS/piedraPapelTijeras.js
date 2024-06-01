document.addEventListener("DOMContentLoaded", () => {
  const opciones = ["Piedra", "Papel", "Tijeras"];
  const resultadoPantalla = document.getElementById("resultado");

  document
    .getElementById("piedra")
    .addEventListener("click", () => jugar("Piedra"));
  document
    .getElementById("papel")
    .addEventListener("click", () => jugar("Papel"));
  document
    .getElementById("tijeras")
    .addEventListener("click", () => jugar("Tijeras"));

  function jugar(opcionesDeJuego) {
    const opcionesComputador =
      opciones[Math.floor(Math.random() * opciones.length)];
    const resultado = ganador(opcionesDeJuego, opcionesComputador);
    resultadoPantalla.textContent = `Tú elegiste: ${opcionesDeJuego} | La computadora eligió: ${opcionesComputador} | ${resultado}`;
  }

  function ganador(usuario, computador) {
    if (usuario === computador) {
      return "¡Empate!";
    } else if (
      (usuario === "Piedra" && computador === "Tijeras") ||
      (usuario === "Papel" && computador === "Piedra") ||
      (usuario === "Tijeras" && computador === "Papel")
    ) {
      return "¡Ganaste!";
    } else {
      return "¡Perdiste!";
    }
  }
});
