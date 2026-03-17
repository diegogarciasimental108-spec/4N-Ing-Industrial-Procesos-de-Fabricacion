// personaje.js

window.onload = function(){

let jugador = JSON.parse(localStorage.getItem("jugador"));

if(jugador == null){
alert("No hay jugador registrado");
return;
}

/* MOSTRAR DATOS DEL JUGADOR */

if(document.getElementById("nombre")){
document.getElementById("nombre").value = jugador.usuario;
}

if(document.getElementById("nivel")){
document.getElementById("nivel").value = jugador.nivel;
}

if(document.getElementById("exp")){
document.getElementById("exp").value = jugador.xp;
}

if(document.getElementById("vida")){
document.getElementById("vida").value = jugador.vida;
}

if(document.getElementById("clase")){
document.getElementById("clase").value = jugador.clase;
}

}


/* SISTEMA DE CLASES */

function actualizarClase(jugador){

let claseAnterior = jugador.clase;

if(jugador.nivel >= 10){
jugador.clase = "Ingeniero de Manufactura Avanzada 🧠";
}
else if(jugador.nivel >= 7){
jugador.clase = "Ingeniero de Procesos  🏭";
}
else if(jugador.nivel >= 5){
jugador.clase = "Analista de Procesos 📊";
}
else if(jugador.nivel >= 3){
jugador.clase = "Técnico de Manufactura ⚙️";
}
else{
jugador.clase = "Operador de Taller 🔧";
}

/* MENSAJE SI CAMBIA DE CLASE */

if(claseAnterior !== jugador.clase){
alert("⚡ Evolucionaste a la clase: " + jugador.clase);
}

return jugador;

}


/* SISTEMA DE NIVEL */

function subirNivel(jugador){

if(jugador.xp >= 100){

jugador.nivel++;
jugador.xp = 0;

/* ACTUALIZAR CLASE */

jugador = actualizarClase(jugador);

/* GUARDAR */

localStorage.setItem("jugador", JSON.stringify(jugador));

}

return jugador;

}