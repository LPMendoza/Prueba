class Controller {

    constructor() {
        this.datos = [];
        this.numSE = 0;
        this.numPW = 0;
    }

    agregarAlumno(nombre, materia, calificacion, fechaNacimiento) {
        console.log(this.datos)
        let tabla = document.getElementById('tabla');

        let alumno = [nombre, materia, calificacion, fechaNacimiento];
        this.datos.push(alumno);

        if (this.datos.length == 1) {
            let thead = tabla.createTHead(0)
            let tRow = thead.insertRow(0);
            tRow.insertCell(0).textContent = 'Nombre';
            tRow.insertCell(1).textContent = 'Materia';
            tRow.insertCell(2).textContent = 'Calificación';
            tRow.insertCell(3).textContent = 'Edad';
        }

        var row = tabla.insertRow(this.datos.length);

        row.insertCell(0).textContent = nombre
        row.insertCell(1).textContent = materia
        row.insertCell(2).textContent = calificacion
        row.insertCell(3).textContent = fechaNacimiento;

        if(materia == 'Sistemas Embebidos') {
            this.numSE++;
            document.getElementById('numSE').textContent = '' + this.numSE;
        }
        else {
            this.numPW++;
            document.getElementById('numPW').textContent = '' + this.numPW;
        }
    }

    buscar(materia) {

        let busqueda = [];

        for (let i = 0; i < this.datos.length; i++) {

            if (this.datos[i][1] == materia) {

                busqueda.push(this.datos[i]);
            }

        }

        let tabla = document.getElementById('tabla');
        tabla.innerHTML = '';

        let thead = tabla.createTHead(0)
        let tRow = thead.insertRow(0);
        tRow.insertCell(0).textContent = 'Nombre';
        tRow.insertCell(1).textContent = 'Materia';
        tRow.insertCell(2).textContent = 'Calificación';
        tRow.insertCell(3).textContent = 'Edad';

        for (let i = 0; i < busqueda.length; i++) {
            var row = tabla.insertRow(i + 1);

            row.insertCell(0).textContent = busqueda[i][0];
            row.insertCell(1).textContent = busqueda[i][1];
            row.insertCell(2).textContent = busqueda[i][2];
            row.insertCell(3).textContent = busqueda[i][3];
        }
    }

    mostrarForm() {
        let tabla = document.getElementById('contTabla');
        tabla.classList.remove('d-inline-block');
        tabla.classList.add('d-none');

        let form = document.getElementById('form');
        form.classList.add('d-inline-block');

    }
    mostrarTabla() {
        let form = document.getElementById('form');
        form.classList.remove('d-inline-block');
        form.classList.add('d-none');

        let tabla = document.getElementById('contTabla');
        tabla.classList.remove('d-none');
        tabla.classList.add('d-inline-block');

    }
}