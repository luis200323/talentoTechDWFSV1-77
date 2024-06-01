document.addEventListener("DOMContentLoaded", () => {
  const numeroRandom = Math.floor(Math.random() * 100) + 1;
  let intentos = 0;

  const entrada = document.getElementById("entrada");
  const boton = document.getElementById("boton");
  const mensaje = document.getElementById("mensaje");
  const intentosDisplay = document.getElementById("intentos");

  boton.addEventListener("click", () => {
    const entradaUser = parseInt(entrada.value);

    if (isNaN(entradaUser) || entradaUser < 1 || entradaUser > 100) {
      mensaje.textContent =
        "Por favor, ingresa un número válido entre 1 y 100.";
      return;
    }

    intentos++;
    intentosDisplay.textContent = `Intentos: ${intentos}`;

    if (entradaUser === numeroRandom) {
      mensaje.textContent = `¡Felicidades! Adivinaste el número ${numeroRandom} en ${intentos} intentos.`;
      mensaje.style.color = "green";
      boton.disabled = true;
    } else if (entradaUser < numeroRandom) {
      mensaje.textContent = "El número es mayor. Intenta nuevamente.";
      mensaje.style.color = "red";
    } else {
      mensaje.textContent = "El número es menor. Intenta nuevamente.";
      mensaje.style.color = "red";
    }

    entrada.value = "";
    entrada.focus();
  });
});
