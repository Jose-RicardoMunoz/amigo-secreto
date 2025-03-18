// Array para almacenar los nombres de los amigos
let amigos = [];

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