let jugador = JSON.parse(localStorage.getItem("jugador"));

var boton = document.getElementById("vistos");
var mensaje = document.getElementById("mensaje");

boton.onclick = function(){

jugador.xp += 20;

if(jugador.xp >= 100){

jugador.nivel++;
jugador.xp = 0;

jugador = actualizarClase(jugador);

mensaje.innerHTML =
"🎉 SUBISTE DE NIVEL | Nueva clase: " + jugador.clase;

}else{

mensaje.innerHTML = "⭐ MISIÓN COMPLETADA +20 XP";

}

localStorage.setItem("jugador", JSON.stringify(jugador));

boton.style.display="none";

};