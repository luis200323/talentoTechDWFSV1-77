// Colección de libros predefinidos "libros"
let libros = [
  { titulo: "1984", autor: "George Orwell", año: 1949, categoria: "Ficción" },
  {
    titulo: "To Kill a Mockingbird",
    autor: "Harper Lee",
    año: 1960,
    categoria: "Clásico",
  },
  {
    titulo: "The Great Gatsby",
    autor: "F. Scott Fitzgerald",
    año: 1925,
    categoria: "Clásico",
  },
];
console.log(typeof libros);

// Función para agregar (añadir) un nuevo libro al array "libros"
function agregarLibro(titulo, autor, año, categoria) {
  const nuevoLibro = { titulo, autor, año, categoria };
  libros.push(nuevoLibro);
  actualizarJSON();
}

// Función para buscar (filtrar) libros por categoría sin importar mayusculas y minusculas
function buscarLibrosPorCategoria(categoria) {
  return libros.filter(
    (libro) => libro.categoria.toLowerCase() === categoria.toLowerCase()
  );
}

// Función para actualizar y mostrar la colección de libros en formato JSON
function actualizarJSON() {
  /*const jsonOutput = document.getElementById("jsonOutput");
  jsonOutput.textContent = JSON.stringify(libros, null, 2);*/
  const jsonOutput = JSON.stringify(libros, null, 2);
  console.log(jsonOutput);
}

// Manejar la sumisión del formulario para agregar un nuevo libro
document
  .getElementById("bookForm")
  .addEventListener("submit", function (event) {
    // Prevenir el comportamiento por defecto del formulario (no se recarga la pagina)
    event.preventDefault();
    // Capturar los valores ingresados en el formulario
    const titulo = document.getElementById("title").value;
    const autor = document.getElementById("author").value;
    const año = parseInt(document.getElementById("year").value);
    const categoria = document.getElementById("category").value;
    // Agregar el nuevo libro a la colección
    agregarLibro(titulo, autor, año, categoria);
    // Resetear el formulario para limpiar los campos de entrada
    document.getElementById("bookForm").reset();
  });

// Manejar la búsqueda por categoría
document.getElementById("searchButton").addEventListener("click", function () {
  const categoria = document.getElementById("searchCategory").value;
  const resultados = buscarLibrosPorCategoria(categoria);
  const searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";
  if (resultados.length > 0) {
    resultados.forEach((libro) => {
      const libroElemento = document.createElement("p");
      libroElemento.textContent = `${libro.titulo} - ${libro.autor} (${libro.año})`;
      searchResults.appendChild(libroElemento);
    });
  } else {
    searchResults.textContent = "No se encontraron libros en esta categoría.";
  }
});

// Mostrar la colección inicial en formato JSON
actualizarJSON();

// Guardar la cadena JSON en un archivo y leerla (simulación)
function guardarYLeerJSON() {
  const jsonString = JSON.stringify(libros);
  console.log("JSON guardado:", jsonString);
  const librosDesdeJSON = JSON.parse(jsonString);
  console.log("Libros leídos desde JSON:", librosDesdeJSON);
}

// Llamar a la función de guardar y leer JSON
guardarYLeerJSON();
