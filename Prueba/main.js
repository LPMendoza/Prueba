let ctrl = new Controller(document.getElementById('tabla'));

let btnEnviar = document.getElementById('btnEnviar').addEventListener('click', agregarAlumno);
let btnBuscar = document.getElementById('btnBuscar').addEventListener('click', buscar);

let mostarForm = document.getElementById('mostrarForm').addEventListener('click', mostrarForm);
let mostrarTabla = document.getElementById('mostrarTabla').addEventListener('click', showTabla);

function agregarAlumno () {

    let nombre = document.getElementById('txtNombre');
    let materia = document.getElementById('slcMateria');
    let calificacion = document.getElementById('txtCalificacion');
    let fechaNacimiento = document.getElementById('fechaNacimiento');
    ctrl.agregarAlumno(nombre.value, materia.value, calificacion.value, fechaNacimiento.value);
}

function buscar () {
    let materia = document.getElementById('txtBuscar');
    ctrl.buscar(materia.value);
}

function showTabla () {
    ctrl.mostrarTabla();
}

function mostrarForm () {
    ctrl.mostrarForm();
}



