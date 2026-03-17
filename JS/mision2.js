var tarjetasOriginales = [
{
pregunta:"¿Qué es el recocido?",
respuesta:"Es un tratamiento térmico que consiste en calentar el acero y enfriarlo lentamente para reducir su dureza y mejorar su ductilidad."
},

{
pregunta:"Temperatura típica del recocido",
respuesta:"Entre 700 °C y 900 °C dependiendo del tipo de acero."
},

{
pregunta:"¿Cómo funciona el recocido?",
respuesta:"Se calienta el acero hasta una temperatura determinada y se enfría lentamente dentro del horno."
},

{
pregunta:"¿En qué horno se realiza el recocido?",
respuesta:"Generalmente en hornos de resistencia eléctrica o hornos con atmósfera controlada."
},

{
pregunta:"Características del recocido",
respuesta:"Disminuye la dureza, elimina tensiones internas y mejora la ductilidad del material."
},

{
pregunta:"Usos del recocido en la industria",
respuesta:"Se usa para preparar el acero para procesos de mecanizado o deformación."
},

{
pregunta:"¿Qué es el recocido de recristalización?",
respuesta:"Es un recocido que elimina deformaciones producidas por trabajo en frío formando nuevos granos."
},

{
pregunta:"¿Qué es el recocido isotérmico?",
respuesta:"Es un tratamiento donde el acero se enfría rápidamente hasta una temperatura intermedia y se mantiene constante para controlar la microestructura."
},

{
pregunta:"¿Qué es el normalizado?",
respuesta:"Es un tratamiento térmico que consiste en calentar el acero y enfriarlo al aire para mejorar su resistencia y uniformidad."
},

{
pregunta:"Temperatura del normalizado",
respuesta:"Generalmente entre 750 °C y 950 °C dependiendo del acero."
},

{
pregunta:"¿Qué es el temple?",
respuesta:"Es un tratamiento térmico que aumenta la dureza del acero mediante calentamiento y enfriamiento rápido."
},

{
pregunta:"Medios de enfriamiento del temple",
respuesta:"Agua, aceite, aire o soluciones salinas."
},

{
pregunta:"¿Qué es el revenido?",
respuesta:"Es un tratamiento térmico posterior al temple que reduce fragilidad y mejora la tenacidad."
},

{
pregunta:"Revenido bajo",
respuesta:"Se realiza entre 150 °C y 250 °C para herramientas de corte."
},

{
pregunta:"Revenido medio",
respuesta:"Se realiza entre 350 °C y 450 °C para piezas mecánicas."
},

{
pregunta:"Revenido alto",
respuesta:"Se realiza entre 500 °C y 650 °C para aumentar la tenacidad."
},

{
pregunta:"¿Qué es el austemperizado?",
respuesta:"Es un tratamiento térmico donde el acero se enfría en un baño de sales para formar bainita."
},

{
pregunta:"¿Qué es el tratamiento criogénico?",
respuesta:"Es un tratamiento donde el acero se enfría a temperaturas extremadamente bajas para mejorar su dureza y estabilidad."
}
];

/* COPIA DE TARJETAS */

var tarjetas = [...tarjetasOriginales];

var indice = 0;

var tarjeta = document.getElementById("tarjeta");
var act2 = document.getElementById("act2");
var respuesta = document.getElementById("act3");

var botonMal = document.getElementById("mal");
var botonBien = document.getElementById("bien");

var contador = document.getElementById("contador");
var mensaje = document.getElementById("mensaje");


function mostrarTarjeta(){

if(tarjetas.length == 0){

/* CARGAR JUGADOR */

let jugador = JSON.parse(localStorage.getItem("jugador"));

/* SUMAR XP */

jugador.xp = jugador.xp + 30;


/* SUBIR NIVEL */

if(jugador.xp >= 100){

jugador.nivel = jugador.nivel + 1;
jugador.xp = 0;

/* ACTUALIZAR CLASE */

jugador = actualizarClase(jugador);

mensaje.innerHTML =
"🎉 SUBISTE DE NIVEL | Nueva clase: " + jugador.clase;

}else{

mensaje.innerHTML = "⭐ MISIÓN COMPLETADA +30 XP";

}

/* GUARDAR JUGADOR */

localStorage.setItem("jugador", JSON.stringify(jugador));

tarjeta.style.display="none";

/* BOTON REPETIR */

mensaje.innerHTML += "<br><br><button onclick='reiniciarTarjetas()'>🔄 Repetir misión</button>";

return;

}

/* MOSTRAR TARJETA */

act2.innerHTML = tarjetas[0].pregunta;
respuesta.innerHTML = tarjetas[0].respuesta;

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