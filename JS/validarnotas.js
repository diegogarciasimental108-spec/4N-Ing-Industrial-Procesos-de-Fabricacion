var lista = document.getElementById("listaNotas");

var boton = document.getElementById("crear");

var tituloInput = document.getElementById("titulo");
var contenidoInput = document.getElementById("contenido");
var dificultadInput = document.getElementById("dificultad");
var fechaInput = document.getElementById("fecha");

var formulario = document.getElementById("formularioNotas");

var notas = JSON.parse(localStorage.getItem("notas")) || [];

var editando = -1;

mostrarNotas();

boton.onclick = function(){

var titulo = tituloInput.value;
var contenido = contenidoInput.value;
var dificultad = dificultadInput.value;
var fecha = fechaInput.value;

if(titulo === "" || contenido === ""){
alert("Completa el título y la nota");
return;
}

var nota = {

titulo:titulo,
contenido:contenido,
dificultad:dificultad,
fecha:fecha

};

if(editando === -1){

notas.push(nota);

}else{

notas[editando] = nota;
editando = -1;

}

localStorage.setItem("notas", JSON.stringify(notas));

limpiarFormulario();

formulario.classList.remove("editando");

mostrarNotas();

};

function limpiarFormulario(){

tituloInput.value="";
contenidoInput.value="";
dificultadInput.value="Fácil";
fechaInput.value="";

}

function mostrarNotas(){

lista.innerHTML="";

for(var i=0;i<notas.length;i++){

lista.innerHTML +=

"<div class='nota'>" +

"<h3>"+notas[i].titulo+"</h3>" +

"<p>"+notas[i].contenido+"</p>" +

"<p>Dificultad: "+notas[i].dificultad+"</p>" +

"<p>Fecha: "+notas[i].fecha+"</p>" +

"<button onclick='editarNota("+i+")'>✏️ Editar</button>" +

"</div>";

}

}

function editarNota(i){

tituloInput.value = notas[i].titulo;
contenidoInput.value = notas[i].contenido;
dificultadInput.value = notas[i].dificultad;
fechaInput.value = notas[i].fecha;

editando = i;

formulario.classList.add("editando");

}
