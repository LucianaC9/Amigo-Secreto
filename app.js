// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputNombre = document.querySelector("#amigo");
    let nombre = inputNombre.value.trim();  // Limpiar espacios adicionales

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        // Agregar el nombre al array de amigos
        amigos.push(nombre);

        // Limpiar el campo de texto
        inputNombre.value = "";

        // Actualizar la lista de amigos en la página
        mostrarLista();
    }
}

// Función para mostrar la lista de amigos en la página
function mostrarLista() {
    // Obtener el contenedor de la lista
    let lista = document.querySelector("#listaAmigos");
    
    // Limpiar la lista antes de agregar nuevos elementos
    lista.innerHTML = "";

    // Recorrer el array de amigos y crear un <li> por cada uno
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");  // Crear un nuevo elemento <li>
        li.textContent = amigo;  // Asignar el nombre al contenido del <li>
        lista.appendChild(li);  // Agregar el <li> a la lista en la página
    });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    // Validar que haya amigos en el array
    if (amigos.length === 0) {
        alert("Por favor, ingrese al menos un amigo para realizar el sorteo.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];  // Obtener el nombre del amigo sorteado

    // Mostrar el resultado del sorteo
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}
