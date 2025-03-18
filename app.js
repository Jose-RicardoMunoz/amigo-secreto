// Estructura Base:
// Array para almacenar los nombres de los amigos
let amigos = [];

// Implementar Función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let amigo = input.value.trim();

    if (amigo !== "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    amigos.push(amigo);
    input.value = ""; // Limpiar el campo de entrada

    console.log(amigos); //Depuración
}

// Mostrar lista de amigos en pantalla:
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Modificar agregarAmigo() para actualizar la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; // Limpiar el input

    actualizarLista(); // Mostrar los nombres en pantalla
}

