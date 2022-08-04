const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('myParam');
var nombre = getParameterByName('nombre');    
    var email = getParameterByName('email');
    var telefono = getParameterByName('telefono');    
    var gusto = getParameterByName('gusto');
    var porcentaje = getParameterByName('porcentaje');

function agregarFila(){
    var texto1 = document.getElementById("gustoin");
    if(texto1.value === ""){

    }
    else{
        document.getElementById("tbl").insertRow(-1).innerHTML = `<tr><td id="NombreG" name="gustos">${texto1.value}</td><td name="porcentaje">0</td><td><span class="editar" onclick="Editar()">Edit</span></td></tr>`;
        texto1.value = "";
    }
}

function Editar(){
    alert("textContent");
}

function Cancelar(){
    window.location.reload();
}

function Enviar(){
    document.formulario.submit();
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

