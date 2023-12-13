// Obtener el formulario y el botón
let formulario = document.getElementById("formulario");
let btnGuardar = document.getElementById("btnGuardar");

// Función para crear la tabla
function crearTabla() {
    // Verificar si ya existe una tabla
    let tablaExistente = document.getElementById("tablaEpica");

    // Si la tabla ya existe, no crear otra cabecera
    if (tablaExistente) {
        agregarFila(tablaExistente);
        return;
    }

    // Objetos para la información del formulario
    let name = document.getElementById("name");
    let lastname = document.getElementById("lastname");
    let age = document.getElementById("age");
    let grupo = document.getElementById("grupo");

    // Validar que si están todos los datos ingresados
    if (name.value === '' || lastname.value === '' || age.value === '' || grupo.value === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Crear tabla
    let tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    tabla.setAttribute("id", "tablaEpica");

    // Encabezados de la tabla
    let encabezados = ["Nombre", "Apellido", "Edad", "Grupo", "Grupo Etario"];
    let encabezadosCabecera = document.createElement("tr");

    encabezados.forEach((encabezado) => {
        let th = document.createElement("th");
        th.textContent = encabezado;
        encabezadosCabecera.appendChild(th);
    });

    tabla.appendChild(encabezadosCabecera);

    agregarFila(tabla);

    document.body.appendChild(tabla);
}

// Función para agregar fila a la tabla
function agregarFila(tabla) {
    // Objetos para la información del formulario
    let name = document.getElementById("name");
    let lastname = document.getElementById("lastname");
    let age = document.getElementById("age");
    let grupo = document.getElementById("grupo");

    //Tabla de Grupo Etario
    if (age.value >= 0 && age.value <= 5) {
        grupoEtario = "Primera Infancia";
    } else if (age.value >= 6 && age.value <= 11) {
        grupoEtario = "Infancia";
    } else if (age.value >= 12 && age.value <= 18) {
        grupoEtario = "Adolescencia";
    } else if (age.value >= 19 && age.value <= 26) {
        grupoEtario = "Juventud";
    } else if (age.value >= 27 && age.value <= 59) {
        grupoEtario = "Adultez";
    } else if (age.value >= 60) {
        grupoEtario = "Persona Mayor";
    } else {
        grupoEtario = "Sospechosita tu edad."
    };

    // Crear fila con los datos del formulario
    let fila = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.textContent = name.value;
    fila.appendChild(nameCell);

    let lastnameCell = document.createElement("td");
    lastnameCell.textContent = lastname.value;
    fila.appendChild(lastnameCell);

    let ageCell = document.createElement("td");
    ageCell.textContent = age.value;
    fila.appendChild(ageCell);

    let grupoCell = document.createElement("td");
    grupoCell.textContent = grupo.value;
    fila.appendChild(grupoCell);

    let grupoEtarioCell = document.createElement("td");
    grupoEtarioCell.textContent = grupoEtario;
    fila.appendChild(grupoEtarioCell);

    tabla.appendChild(fila);
}

// Evento click del botón
btnGuardar.addEventListener("click", crearTabla);