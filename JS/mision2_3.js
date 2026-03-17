/* TARJETAS ORIGINALES */

var tarjetasOriginales = [

{
pregunta:"¿Qué es un horno de resistencia?",
respuesta:"Es un horno que utiliza resistencias eléctricas para generar calor."
},

{
pregunta:"¿Para qué tratamientos se usa el horno de resistencia?",
respuesta:"Se utiliza para recocido, revenido y normalizado."
},

{
pregunta:"¿Qué es un horno con atmósfera controlada?",
respuesta:"Es un horno donde se controla el gas interno para evitar oxidación del metal."
},

{
pregunta:"¿Para qué se usan los hornos con atmósfera controlada?",
respuesta:"Para cementación, nitruración y otros tratamientos termoquímicos."
},

{
pregunta:"¿Qué es un horno de sales?",
respuesta:"Es un horno que utiliza sales fundidas para transmitir calor uniformemente."
},

{
pregunta:"¿Para qué se usan los hornos de sales?",
respuesta:"Para temple, austemperizado y tratamientos especiales."
}

];


/* COPIA DE TARJETAS */

var tarjetas = [...tarjetasOriginales];


/* INDICE */

var indice = 0;


/* ELEMENTOS HTML */

var tarjeta = document.getElementById("tarjeta");
var act2 = document.getElementById("act2");
var act3 = document.getElementById("act3");

var botonMal = document.getElementById("mal");
var botonBien = document.getElementById("bien");

var contador = document.getElementById("contador");
var mensaje = document.getElementById("mensaje");


/* CARGAR JUGADOR */

let jugador = JSON.parse(localStorage.getItem("jugador"));


/* MOSTRAR TARJETA */

function mostrarTarjeta(){

if(tarjetas.length == 0){

/* SUMAR XP */

jugador.xp += 30;


/* SUBIR NIVEL */

if(jugador.xp >= 100){

jugador.nivel++;
jugador.xp = 0;

jugador = actualizarClase(jugador);

mensaje.innerHTML =
"🎉 SUBISTE DE NIVEL | Nueva clase: " + jugador.clase;

}else{

mensaje.innerHTML = "⭐ MISIÓN COMPLETADA +30 XP";

}


/* GUARDAR JUGADOR */

localStorage.setItem("jugador", JSON.stringify(jugador));


/* OCULTAR TARJETA */

tarjeta.style.display="none";


/* BOTON REPETIR */

mensaje.innerHTML += "<br><br><button onclick='reiniciarTarjetas()'>🔄 Repetir misión</button>";

return;

}


/* MOSTRAR CONTENIDO */

act2.innerHTML = tarjetas[0].pregunta;
act3.innerHTML = tarjetas[0].respuesta;

contador.innerHTML = "Tarjetas restantes: " + tarjetas.length;

tarjeta.classList.remove("voltear");

}


/* VOLTEAR TARJETA */

tarjeta.onclick = function(){

tarjeta.classList.toggle("voltear");

};


/* TARJETA MAL → SE REPITE */

botonMal.onclick = function(){

var repetir = tarjetas.shift();

tarjetas.push(repetir);

mostrarTarjeta();

};


/* TARJETA BIEN → SE ELIMINA */

botonBien.onclick = function(){

tarjetas.shift();

mostrarTarjeta();

};


/* REINICIAR MISION */

function reiniciarTarjetas(){

tarjetas = [...tarjetasOriginales];

tarjeta.style.display="block";

mensaje.innerHTML="";

mostrarTarjeta();

}


/* INICIAR */

mostrarTarjeta();