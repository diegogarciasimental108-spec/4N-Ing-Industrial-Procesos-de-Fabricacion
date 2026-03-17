var textarea = document.getElementById("resumenUsuario");
var botonBorrar = document.getElementById("borrar");
var botonCompletar = document.getElementById("completar");
var mensaje = document.getElementById("mensaje");


/* CARGAR RESUMEN */

function cargarResumen(){

var guardado = localStorage.getItem("resumenCSS");

if(guardado){
textarea.value = guardado;
}

}


/* BORRAR TEXTO */

function borrarTexto(){

textarea.value = "";

localStorage.removeItem("resumenCSS");

mensaje.innerHTML = "🧹 Texto borrado";

}


/* COMPLETAR MISION */

function completarMision(){

if(textarea.value.trim() === ""){

mensaje.innerHTML = "⚠️ Escribe un resumen primero";
return;

}


/* GUARDAR RESUMEN */

localStorage.setItem("resumenCSS", textarea.value);


/* CARGAR JUGADOR */

let jugador = JSON.parse(localStorage.getItem("jugador"));


/* SUMAR XP */

jugador.xp = jugador.xp + 20;


/* SUBIR NIVEL */

if(jugador.xp >= 100){

jugador.nivel = jugador.nivel + 1;

jugador.xp = 0;

/* ACTUALIZAR CLASE */

jugador = actualizarClase(jugador);

mensaje.innerHTML = "🎉 SUBISTE DE NIVEL! Nueva clase: " + jugador.clase;

}else{

mensaje.innerHTML = "⭐ MISIÓN COMPLETADA +20 XP";

}


/* GUARDAR JUGADOR */

localStorage.setItem("jugador", JSON.stringify(jugador));


/* LIMPIAR TEXTO PARA VOLVER A JUGAR */

textarea.value = "";

}


/* EVENTOS */

botonBorrar.onclick = borrarTexto;

botonCompletar.onclick = completarMision;


/* CARGAR AL INICIAR */

window.onload = cargarResumen;